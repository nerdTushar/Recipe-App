import React from 'react';
import { Link , useLocation } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
function Sidebar(props) {
  const location = useLocation();
  return(
      <div className='sidebar' onClick={props.close}>
          {props.link.map((data,index)=>(
                    <Link to = {data.path} className={(location.pathname === data.path)?'sidebar-link active':'sidebar-link'} key={index}>
                    <FontAwesomeIcon icon={data.icon}/>
                    {data.name}</Link>
                ))}
      </div>
  )
}

export default Sidebar;
