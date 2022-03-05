import React from 'react';
import logInTwo from '../../images/login2.png'
import logInOne from '../../images/login1.png'

export default function Login() {
  return (

    <div className="container">
      <div className="row  d-flex justify-content-center">
        <div className="col-md-4">
          <div className="alldivs">
            <div className="img w-100">
              <img src={logInTwo} className='w-100' />
              </div>

              <div className="Img-form d-flex justify-content-center">
                <div className="img2">
                  <img src={logInOne} className='w-100'/>
                  </div>

                  <form>

                    <div className="inputs">
                    <label className='' htmlFor='email'>Email:</label>
                    <input type='email' name='email'  className=''/>
                      </div>

                 <div className="inputs">
                    <label className='' htmlFor='password'>Password:</label>
                    <input type='password' name='password' className='' />
                     </div>
                   

                    <button className='btn btn-danger mt-2'>login</button>

                  </form>





                </div>
            
            
            
            </div>
          </div>
        </div>
        </div>
  )
}
