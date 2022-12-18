import React, { useEffect, useState } from 'react'

function FormValidation() {
    const initialValues = {
        username: "",
        email: "",
        password: ""
    }
    const [formvalues, setFormvalues] = useState(initialValues);
    const [formerrors, setFormerrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormvalues({ ...formvalues, [name]: value });
        console.log(formvalues);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormerrors(validate(formvalues));
        setIsSubmit(true);
    };
    useEffect(() => {
if(Object.keys(formerrors).length===0 && isSubmit){
    console.log(formvalues)
}
    },[formerrors])
    const validate = (values) => {
        const errors = {};
        const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;;
        if (!values.username) {
            errors.username = "username is required"
        }
        if (!values.email) {
            errors.email = "Email is required!";
          } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
          }
        
          if (!values.password) {
            errors.password = "Password is required";
          } else if (values.password.length < 4) {
            errors.password = "Password must be more than 4 characters";
          } else if (values.password.length > 10) {
            errors.password = "Password cannot exceed more than 10 characters";
          }
          return errors;
        };

    return (
        <>
        <div className='container'>
        {Object.keys(formerrors).length === 0 && isSubmit ? (
        <div className="alert alert-success" role="alert">Signed in successfully</div>
      ) : (
        <pre>{JSON.stringify(formvalues, undefined, 2)}</pre>
      )}
            <form onSubmit={handleSubmit}>
                
                <div class="form-group">
                    <label for="exampleInputEmail1">Username</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name='username' value={formvalues.username} onChange={handleChange} />
                    <span style={{color:'red',fontWeight:500}}>{formerrors.username}</span>
                </div>
                <div class="form-group">
                    <label for="exampleInputemail">E-mail</label>
                    <input type="text" class="form-control" id="exampleInputemail" placeholder="email" name='email' value={formvalues.email} onChange={handleChange} />
                    <span style={{color:'red',fontWeight:500}}>{formerrors.email}</span>
                </div>

                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" name='password' value={formvalues.password} onChange={handleChange} />
                    <span style={{color:'red',fontWeight:500}}>{formerrors.password}</span>
                </div>
                <div class="form-group form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-primary w-100">Submit</button>
            </form>
            </div>
        </>
    )
}

export default FormValidation
