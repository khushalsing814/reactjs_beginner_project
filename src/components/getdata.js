import React from 'react'

function Getdata() {
    const a = [
        {
            fname: "manu",
            age: 24

        },
        {
            fname: "manu1",
            age: 20

        },
        {
            fname: "manu2",
            age: 24

        },
        {
            fname: "manu3",
            age: 21

        },
        {
            fname: "manu4",
            age: 29

        },
    ]
    return (
        <div>{
            a?.map((item , index) => {
                return (
                    <>
                         <div key={index}></div>
                        <h1>your name is{item.fname}<br>your age is{item.age}</br></h1>
                    </>
                )
            })
    }
        </div>
    )
}

export default Getdata
