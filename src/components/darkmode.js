import React, { useEffect, useState } from "react";
import { Modal, ModalBody, ModalHeader, Row, Col } from 'reactstrap'

function Darkmode() {
    const [theme, setTheme] = useState('light_mode');
    const [change_dark, setchange_dark] = useState('Darkmode');
    const [modal, setModal] = useState(false)

    // validation 
    const [name_validation, setName_validation] = useState(false);
    const [email_validation, setEmail_validation] = useState(false);
    const [pass_validation, setPass_validation] = useState(false);
    const [cpass_validation, setCpass_validation] = useState(false);
    const toggle_theme = () => {
        if (theme === 'dark_mode') {
            setTheme('light_mode')
            setchange_dark('Darkmode')
        } else {
            setTheme('dark_mode')
            setchange_dark('Dark Mode is on')
        }
    };

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    // form validation

    const userHandler = (e) => {
        let checkLength = e.target.value;
        let checkName = e.target.name;
        console.log(checkName)
        if (checkLength.length >= 11 && checkName === 'name'&& checkLength.length !== 0) {
            setName_validation('sorry your name charter is very hight');
        } else {
            setName_validation('');
        }
        if (checkLength.length >= 20 && checkName === 'email' && checkLength.length !== 0) {
            setEmail_validation('sorry ');
        } else {
            setEmail_validation('');
        }
        if (checkLength.length >= 11 && checkName === 'pass' && checkLength.length !== 0) {
            setPass_validation('sorry your pass length is too hight');
        } else {
            setPass_validation('');
        }
        if (checkLength.length >= 11 && checkName === 'pass' || checkLength.length >= 11 && checkName === 'cpass') {
            setCpass_validation('');
            setCpass_validation('password does not match');
        } else {
            setCpass_validation('');
        }

      }
        const submit_button = (e) => {
            e.preventDefault();
            if(setName_validation.length <= 11 && setEmail_validation.length <=20 ){
                alert('success')
            }else{
                alert('fail')
            }
    }
    // date and time
    //    const currentDate = new Date().toLocaleDateString;
    //    const currentTime = new Date().toLocaleTimeString;

    return (
        <>
            <Modal size="lg" centered isOpen={modal} toggle={() => setModal(!modal)}>
                <ModalHeader toggle={() => setModal(!modal)}>PopUp</ModalHeader> {/*modalstrap*/}
                <ModalBody>
                    <form onSubmit={submit_button}>
                        <Row>
                            <Col lg={12}>
                                <div>
                                    <label htmlFor="name">Name:  </label>
                                    <input type='text' className="form-control" placeholder="name" name='name' onChange={userHandler}></input><span style={{ color: 'red' }}>{name_validation}</span>
                                    <label htmlFor="email">Email:  </label>
                                    <input type='text' className="form-control" placeholder="email" name='email' onChange={userHandler}></input><span style={{ color: 'red' }}>{email_validation}</span>
                                    <label htmlFor="pass">password:  </label>
                                    <input type='password' className="form-control" placeholder="password" name='pass' onChange={userHandler}></input><span style={{ color: 'red' }}>{pass_validation}</span>
                                    <label htmlFor="pass">confirm password:  </label>
                                    <input type='password' className="form-control" placeholder="confirm Password" name='cpass' onChange={userHandler}></input><span style={{ color: 'red' }}>{cpass_validation}</span>
                                    <button type='submit' className="btn btn-outline-success w-100" style={{ marginTop: '10px' }}>Submit</button>
                                </div>
                            </Col>
                        </Row>
                    </form>
                </ModalBody>
            </Modal>
            <button className="float-end mt-1 me-3 dark_mode_btn" onClick={() => setModal(true)} >Modal</button>
            <button className="float-end mt-1 me-3 dark_mode_btn" onClick={toggle_theme}>{change_dark}</button>
        </>
    )
}

export default Darkmode