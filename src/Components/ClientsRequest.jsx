import React, { useState } from 'react';

function ClientsRequest() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [orderNumber, setOrderNumber] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // handle form submission logic here
    }


    return (
        <>
            <form onSubmit={handleSubmit} className='clients-request'>
                <div className='clients-request-main-div'>
                    <div className='clients-request-div'>
                        <label  className='clients-request-name'> Enter Your Name: <br />
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)}
                                className='clients-request-div-input text-capitalize' />
                        </label>
                        <label  className='clients-request-name'>Enter Your Email:  <br />
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                                className='clients-request-div-input' />
                        </label>
                    </div>

                    <div className='clients-request-div'>
                        <label className='clients-request-name'>  Phone Number (optional)<br />
                            <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}
                                className='clients-request-div-input' />
                        </label>
                        <label className='clients-request-name'>Enter Your Order Number:<br />
                            <input type="text" value={orderNumber} onChange={(e) => setOrderNumber(e.target.value)}
                                className='clients-request-div-input' />
                        </label>
                    </div>

                    <div className='clients-request-div-textarea'>
                        <div className="form-group">
                            <label for="exampleFormControlTextarea1" className='clients-request-name'> Message* </label>
                            <textarea value={message} onChange={(e) => setMessage(e.target.value)}
                                className=" clients-request-div-input-textarea form-control " id="exampleFormControlTextarea1" rows="5"></textarea>
                        </div>
                    </div>
                    <center className='pt-2'>
                        <button className='main-button rounded-pill py-2 px-5' type="submit">
                            <dt className=''>Submit</dt>
                            <i className='fa-solid fa-arrow-right main-button-arrow'></i>
                        </button>
                    </center>

                </div>
            </form>
        </>
    )
}

export default ClientsRequest