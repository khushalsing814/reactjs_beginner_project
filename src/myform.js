import axios from "axios";
import { useNavigate  } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";


const New_Form = () => {
    const data = {
        // name: '',
        email: '',
        password: '',
    }
    const [formData, setFormdata] = useState(data);
    const [flag, setFlag] = useState(false);
    const [error, setError] = useState(false);
    const Navigate  = useNavigate ();
    console.log(Navigate)
    console.log(error)

    useEffect(() => {
        console.log('registered');
    }, [flag, error,formData]);

    const handleData = (e) => {
        let formkey = e.target.name;
        let formvalue = e.target.value;
        setFormdata({ ...formData, [formkey]: formvalue });
        console.log(formData)
    }
    const axiosStyle = async () => {
        await axios.post("https://reqres.in/api/register", { email: formData.email, password: formData.password, }).then((res) => console.log(res)).catch((err) => console.log(err))
    }
    const styref = useRef();
    const Submithandling = (e) => {
        e.preventDefault();
        if (!formData.email || !formData.password) {
            setError(true)
            alert('all field is rquired') 
        } else {
            axiosStyle();
            if (flag === false) { 
                setTimeout(() => {
                 styref.current.style.display="none"
                }, 2000);
                setFlag(true)
                setTimeout(() => {
                    Navigate('/')
                   }, 2000);
            }
        }
    }

    return (
        <>
            <pre>{(flag) ? <h1 className="alert alert-success" ref={styref}>hey {formData.email}, you have sucessfully registered</h1> : ''}</pre>
            <form style={{ width: '50%', margin: 'auto' }} onSubmit={Submithandling}>

                {/* <label htmlFor="name">name : </label>
                <input style={{ width: '100%', marginBottom: '10px' }} type='text' name='name' value={formData.name} onChange={handleData} placeholder="name" id="name"></input><span style={{color:'red'}}>{(error.length > 10) ? 'length is to long sorry ' :'' }</span>
                <br></br> */}
                <label htmlFor="email">email : </label>
                <input style={{ width: '100%', marginBottom: '10px' }} type='text' name='email' value={formData.email} onChange={handleData} placeholder="email" id="email"></input><span style={{ color: 'red' }}>{(error.length > 10) ? 'length is to long sorry ' :'' }</span>
                <br></br>
                <label htmlFor="pass">password : </label>
                <input style={{ width: '100%', marginBottom: '10px' }} type='text' name='password' value={formData.password} onChange={handleData} placeholder="password" id="pass"></input><span style={{ color: 'red' }}>{(error.length > 10) ? 'length is to long sorry ' :'' }</span>
                <br></br>
                <button type="submit" style={{ width: '100%' }}> Submit</button>
            </form>

        </>
    )
}

export default New_Form
