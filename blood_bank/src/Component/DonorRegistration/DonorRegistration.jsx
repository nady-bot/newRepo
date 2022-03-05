import React from 'react'
import img from "../../images/brequest.png"
import img_2 from "../../images/sidebanner (1).jpg"

import style from "./DonorRegistration.module.css"

export default function DonorRegistration() {


  return (
    <div className={`my-5 bg-sherd border-sherd box-sherd ${style.sendRequest }`}>
      <img src={img} alt="" />
      <div className= {style.table_img }>
        <div className= {style.imgSaid}>
          <img src={img_2} alt="" />
        </div>

        <div className={"tableCon"}>
          <table className={style.table}>
            <tbody>
              <tr>
                <td> Name : </td>
                <td>  < input name="name" />  </td>
              </tr>

              <tr>
                <td> Gender : </td>
                <td>
                  <input name="gender" type="radio" />
                  <label> Male </label>

                  <input name="gender" type="radio" />
                  <label> Female </label>
                </td>
              </tr>
              <tr>
                <td> Age : </td>
                <td>  <input name="phoneNo" type="number" />  </td>
              </tr>

              <tr>
                <td> Mobile No : </td>
                <td>  <input />  </td>
              </tr>
              <tr>
                <td> Select Blood Group : </td>
                <td>

                  <select name="selectOption">
                    <option> select </option>
                  </select>

                </td>
              </tr>

            </tbody>
          </table>
        </div>

      </div>

    </div>
  )
}
