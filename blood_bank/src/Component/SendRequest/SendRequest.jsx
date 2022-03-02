import React from 'react'
import img from "../../images/brequest.png"
import style from "./SendRequest.module.css"

export default function SendRequest() {
  return (
    <div className={ style.sendRequest}>
      <img src = {img} alt = "" /> 
      <table className=  {style.table }>
           <tr> 
             <td> Name : </td>
             <td>  < input name = "name" />  </td>
           </tr>

           <tr> 
             <td> Gender : </td>
             <td> 
                <input name = "gender" type = "radio" /> 
                <label> Male </label>
                 </td><td>
                <input name = "gender" type = "radio" /> 
                <label> Female </label>
                 </td>
           </tr>
           <tr> 
             <td> Age : </td>
             <td>  <input name = "phoneNo" type = "number" />  </td>
           </tr>

           <tr> 
             <td> Mobile No : </td>
             <td>  <input />  </td>
           </tr>
           <tr> 
             <td> Select Blood Group : </td>
             <td>  
               
               <select name = "selectOption">
                 <option> select </option>
               </select>

                 </td>
           </tr>


      </table>



    </div>
  )
}
