import React from 'react'
import { Link } from 'react-router-dom'
function SideBarBtn(props) {
  return (
<>
<Link to={props.path} onClick={props.onClick}>
    <div className={`sidebar-button ${props.anotherclass}`}>
    <i className='sider-svg'>{props.image}</i>
    <dt className=''>{props.text}</dt>
      {props.icon && <i className='side-button-arrow'>{props.icon}</i>}
    </div></Link>
</>
  )
}

export default SideBarBtn