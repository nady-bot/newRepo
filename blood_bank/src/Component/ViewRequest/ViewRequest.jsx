import React from 'react';
import imgReq from '../../images/brequest.png';
import style from './ViewRequest.module.css'


export default function ViewRequest() {
  return (
   <div className="container">
     <div className="row my-5">
       <div className={`${style.all} pb-4`}>
         
       <div className="col-md-12">
         <div className={`viewreq    ${style.mydiv} d-flex justify-content-center `  }>
           <div className="myImg w-25  ">
           <img  src={imgReq} className='w-100 ' />
             </div>

             </div>

<div className="col-md-12 my-5">

  <div className="items ">
  <ul className={`list-unstyled d-flex  justify-content-around  ${style.mydiv}`}>  
<li>Blood Group</li>
           <li>Name</li>
           <li>Gender</li>
           <li>Contact No</li>
           <li>Mobile No</li>
           <li>Email</li>
<li>Till Required Date</li>

</ul>
    </div>

           



  </div>

          

           </div>
           </div>
         </div>

       </div>
   
  )
}
