import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Loader() {
    const [Data, SetData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerpage] = useState(10);
    const [style, setStyle] = useState();
    const [input, setInput] = useState('');
    const Getdata = async () => {
        setLoading(true);
        await axios.get("https://randomuser.me/api/?page=1&results=50&nat=us").then((res) => {
            const result = res?.data?.results.sort((a, b) => a.name.first.localeCompare(b.name.first))
            SetData(result);
            const lastPostIndex = currentPage * postPerpage;
            const firstPostIndex = lastPostIndex - postPerpage;
            const currentPosts = result.slice(firstPostIndex, lastPostIndex);
            console.log(currentPosts)
            setStyle(currentPosts)
            setLoading(false);
        })
    }
    useEffect(() => {
        Getdata();
    }, []);
    return (
        <div>
            <input type='search' placeholder="Search your name" onChange={(e) => setInput(e.target.value)} />
            {

                loading ?
                    <button class="btn btn-primary" type="button" disabled>
                        <span class="spinner-border spinner-border-sm me-sm-2" role="status" aria-hidden="true"></span>
                        Loading...
                    </button>
                    :
                    style?.filter((item) => {
                        if (input.toLocaleLowerCase() === '') {
                            return item;
                        } else {
                            return item.name.first.toLocaleUpperCase().search(input) || item.name.first.toLocaleLowerCase().search(input);
                        }
                    })
                    .map((item, index) => {
                            return (
                                <>
                                    <p key={index}><span style={{ fontWeight: '700' }}>({index + 1}) Full Name :</span> <span>{item.name.title} {item.name.first} {item.name.last}</span></p>
                                </>
                            )
                        })
            }
        </div>
    )
}

export default Loader
