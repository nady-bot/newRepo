import React from 'react'
import searchItem from "../../images/search.png"
import style from "../Search/Search.module.css"

export default function Search() {
  return (<>




    <div className={`"container" ${style.container}`}>
      <div className="row w-50 mx-auto my-auto border-sherd box-sherd  bg-sherd">



        <div className="col-xl-12 text-center   rounded ">

          <img src={searchItem} className=" m-3" alt="search index " />
          <div>
            <div className='row'>
              <div className='col-xl-6'>
                <label htmlFor="bl-group" className='fw-bold'>Choose a blood group </label>
              </div>
              <div className='col-xl-6'>
                <select name="bl-group" id="bl-group" className='rounded-right'>
                  <option value="zero" > Select  </option>
                  <option value="one"> A group </option>
                  <option value="two"> B group</option>
                  <option value="three"> AB group</option>
                  <option value="four"> O group </option>
                </select>

              </div>

            </div>


            <button type='' className='btn btn-danger px-4 rounded-top rounded-bottom fw-bold m-5'> Search</button>

          </div>
        </div>






      </div>

    </div>






  </>
  )
}
