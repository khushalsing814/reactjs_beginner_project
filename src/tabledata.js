import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Pagination from './Pagination';

function Tabledata() {
    const [tabledata, setTabledata] = useState();
    const [searchbar, setSearchbar] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerpage] = useState(10);
    const [style, setStyle] = useState();
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        axiosApi();
    }, []);


    const axiosApi = async () =>
        //  axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
        // login / logout api
        // https://randomuser.me/api/?page=1&results=50&nat=us
        await axios.get(`https://dummyjson.com/users`).then((res) => {
            setLoading(true)
            const result = res?.data?.users.sort((a, b) => a.firstName.localeCompare(b.firstName))
            setTabledata(result);
            console.log(res.data.users)
            const lastPostIndex = currentPage * postPerpage;
            const firstPostIndex = lastPostIndex - postPerpage;
            const currentPosts = result.slice(firstPostIndex, lastPostIndex);
            console.log(currentPosts)
            setStyle(currentPosts)
            setLoading(false)
        })

    return (
        <div>
            <div className="" style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                <input type="search" placeholder='serach name .... ' onChange={(e) => setSearchbar(e.target.value)} style={{ width: '100%' }} />
                <button>serach</button>
            </div>
            <table className="table table-striped table-dark" id='table_parent'>
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">s.no</th>
                        <th scope="col">firstName</th>
                        <th scope="col">lastName</th>
                        <th scope="col">username</th>
                        <th scope="col">email</th>
                        <th scope="col">gender</th>
                        <th scope="col">Image</th>
                        <th scope="col">address</th>
                        <th scope="col">postalCode</th>
                        <th scope="col">state</th>
                        <th scope="col">lat</th>
                        <th scope="col">lng</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        loading ?
                            <button class="btn btn-primary" type="button" disabled>
                                <span class="spinner-border spinner-border-sm me-sm-2" role="status" aria-hidden="true"></span>
                                Loading...
                            </button>
                            :
                            style?.filter((items) => {
                                /* return searchbar.toLocaleLowerCase() === '' ? item:item.firstName.toLocaleLowerCase().includes(searchbar); */ 

                                if (searchbar.toLocaleLowerCase() === '') {
                                    return items;
                                } else {
                                    return items.firstName.toLocaleLowerCase().includes(searchbar);
                                }
                            })

                                .map((item, index) => {
                                    return (
                                        <>
                                            <tr key={item.id}>
                                                <td scope="row" key={index}>{index + 1}</td>
                                                <td>{item.firstName}</td>
                                                <td>{item.lastName}</td>
                                                <td>{item.username}</td>
                                                <td>{item.email}</td>
                                                <td>
                                                    <p className={item.gender === 'male' ? 'btn btn-success' : 'btn btn-danger'}>
                                                        {item.gender}
                                                    </p>

                                                </td>
                                                <td><img src={item.image} alt="image" /></td>
                                                <td>{item.address.address}</td>
                                                <td>{item.address.postalCode}</td>
                                                <td>{item.address.state}</td>
                                                <td>{item.address.coordinates.lat}</td>
                                                <td>{item.address.coordinates.lng}</td>
                                            </tr>
                                        </>
                                    )
                                })
                    }
                </tbody>
            </table>
            <Pagination totalPosts={searchbar.length} postPerpage={postPerpage} setCurrentPage={setCurrentPage} />
        </div>
    )
}

export default Tabledata
