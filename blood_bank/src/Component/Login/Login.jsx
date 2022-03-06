import React from 'react';
import logInTwo from '../../images/login2.png'
import logInOne from '../../images/login1.png'

import style from "./Login.module.css"

export default function Login() {
  return (

    <div className={`mx-auto my-5 ${style.login} bg-sherd border-sherd box-sherd py-3 text-center`} >



      <div className="img w-100   ">
        <img src={logInTwo} className=' w-50' alt="" />
      </div>

      <div className={`${style.login_form} py-4`}>

        <div className={` ${style.div_img2}   `} >
          <img src={logInOne} className=' w-100' alt="" />
        </div>

        <div className="flex-grow-1 d-flex justify-content-center    ">
          <form>
            <table>


              <tr >
                <td  ><label className='' htmlFor='email'>Email:</label> </td>
                <td><input type='email' name='email' className='' /> </td>
              </tr>

              <tr>
                <td> <label className='' htmlFor='password'>Password:</label></td>
                <td> <input type='password' name='password' className='' /></td>
              </tr>
              <tr>
                <td></td>
                <td><button className='btn  w-100 btn-danger mt-2'>login</button></td>
              </tr>
            </table>

          </form>
        </div>

        
      </div>
      <div> <p> Not A DONOR.?	Click here to REGISTER.  </p></div>
    </div>
  )
}
