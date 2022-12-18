import React, { useEffect, useState } from "react";
import axios from 'axios';
import moment from "moment";
function Maincontent() {

    const [fetchData, fetchDataApi] = useState(null);
    useEffect(() => {
        // axios("https://jsonplaceholder.typicode.com/posts").then((res) => {
        axios("https://dummyjson.com/products").then((res) => {
            fetchDataApi(res?.data?.products);
        });
    }, []);
    console.log(fetchData)
    return (
        <div>
                <div className="row">
                    {
                        fetchData?.map((item ,index) => {
                            return (
                                <>
                                    <div className="col-12 col-md-4 col-xl-4 mb-5">
                                    <div key={index}></div>
                                        <div className="box_shadow">
                                            <div className="max_width_100">
                                                <div className="set_height">
                                                    {/* <img src={require("../images/images.jpg")} alt="" /> */}
                                                    <img src={item.images} alt="" />
                                                </div>
                                            </div>
                                            <span className="set_right">
                                                <h1 className="protuct_title">{item.title}</h1>
                                                <p className="protuct_description">{item.description}</p>
                                                <p className="protuct_description">{moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
                                            </span>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
    )
}
export default Maincontent