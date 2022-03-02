import React from 'react'
import aboutImage from "../About/about.png"
import aboutImageOne from "../About/image-one.jpg"
import aboutImageTwo from "../About/image-two.png"
import aboutImagethree from "../About/image-three.png"
import style from "./About.module.css"

export default function About() {
  return ( <>
    <div className='container p-5 mx-auto'>
      <div className='py-3 '>
      <img src={aboutImage} alt="" />
     <h4 className='text-secondary'>News Letter From The Founders</h4>

     </div>




<div className='row '>
  <div className='col-lg-7'>
    <div className={`"border border-5 border-danger  mb-5 me-5 " ${style.floated}`}>
<img className='w-100 p-1 shadow-lg' src={aboutImageOne} alt="" />

 </div>
<div className={style.textFloat}>
  
<p > 'Life Saver Blood Bank' is the first product resulted out of the community 
  welfare initiative called 'People Project' from uSiS Technologies. Universally, 
  'Blood' is recognized as the most precious element that sustains life. It saves 
  innumerable lives across the world in a variety of conditions. Once in every
   2- seconds, someone, somewhere is desperately in need of blood. More than 
   29 million units of blood components are transfused every year. The need for
    blood is great - on any given day, approximately 39,000 units of Red Blood
     Cells are needed. Each year, we could meet only up to 1% (approx) of our nation’s
      demand for blood transfusion.

Despite the increase in the number of donors, blood remains in short supply
 during emergencies, mainly attributed to the lack of information and accessibility. 
 We positively believe this tool can overcome most of these challenges by effectively
  connecting the blood donors with the blood recipients. We remind every visitor that
   we have the empowerment to save lives and let’s do that – right now, right here. 
   If you are eligible for blood donation, please register yourself as a blood donor now! </p>


</div>


<div className='clear'></div>
<div>



  <p>We also take this opportunity to thank our whole team for all your ideas, commitment and hard-ship in making this dream a reality. We would also like to thank our friends and well-wishers for all your support and encouragement throughout this project. It is now reasonably safe to say that together we have made this society 
    a slightly better and safer place to live.</p>
    <p>
    Thank you and Happy Blood donating! <br />

Abu Sithik  <br />

Heman Duraiswamy <br />

Surendar Ram <br />

Promoters, <br />

Blood Bank India.
    </p>
</div>









</div>
<div className="col-lg-1"> </div>
<div className='col-lg-3 row align-content-start '>  

<div className=' col-lg-12 p-0 mb-5 h-25 border border-2 border-danger shadow-lg'>
  
<img className='w-100 h-100  '  src={aboutImageTwo} alt="" />
</div>


<div className='col-lg-12 p-1  border border-danger border-2 shadow-lg' >
  <img className='w-100 h-100 ' src={aboutImagethree} alt="" />


  </div>







</div> 

  

















</div>
<div>

</div>


      
    </div>
    </>
  )
}
