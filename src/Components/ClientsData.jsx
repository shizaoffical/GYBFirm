import React from 'react'
import { Link } from 'react-router-dom'
function ClientsData(props) {
    return (
        <Link to={props.path}>
       
        <div className='clients-data'>
            <div className='clients-data-div'>
                <img src={props.image} alt="" className='clients-data-div-image' />
                <div className='clients-data-div-icons-div'>
                    <dt className='clients-data--div-icons-div-heading '>{props.heading}</dt>
                    <div className='d-flex justify-content-between w-100 align-items-center  '>
                        <div>
                            <i className={`fa-solid fa-star clients-data-icon pe-1 ${props.anotherclass} `}></i>
                            <i className={`fa-solid fa-star clients-data-icon pe-1 ${props.anotherclass} `}></i>
                            <i className={`fa-solid fa-star clients-data-icon pe-1 ${props.anotherclass} `}></i>
                            <i className={`fa-solid fa-star clients-data-icon pe-1 ${props.anotherclass} `}></i>
                            <i className={`fa-solid fa-star clients-data-icon ${props.anotherclass} `}></i>
                        </div>
                        <p className='ps-2 fw-bolder clients-data-hide-text'  >{props.time}</p>
                    </div>
                </div>
            </div>
            <p className='clients-data-para-text'>{props.about}</p>
           {props.state && <sm className="clients-data-hide-text fw-bolder " >{props.state}</sm>} 
        </div>
        </Link>
    )
}

export default ClientsData