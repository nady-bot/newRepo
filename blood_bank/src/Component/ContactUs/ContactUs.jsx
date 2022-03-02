import React from 'react'

export default function ContactUs() {
  return ( <>
    <div className="container mx-auto p-5 ">
      <form action="" className='p-5 bg-light'>
      <label htmlFor="donor-name" className='fw-bold'> Name : </label>
        <input type="text" name="donor-name" id="donor-name" className='form-control my-2'/>
        <label htmlFor="donor-Email" className='fw-bold'> E-mail : </label>
        <input type="text" name="donor-Email" id="donor-Email" className='form-control my-2'/>
        <label htmlFor="donor-mobile" className='fw-bold'> Phone Number : </label>
        <input type="text" name="donor-mobile" id="donor-mobile" className='form-control my-2'/>
        
        <label htmlFor="comments" className='fw-bold my-3'> Subject</label> <br/>

        <textarea className='form-control' name="" id="comments" >


        </textarea>
        <div className='text-center'>
        

        <button className=' btn btn-danger my-5' > Send Us</button>
        
        </div>











      </form>









    </div>
    </>
  )
}
