import React from 'react'

import bd from '../../images/bd.jpg' 

import s1 from '../../images/s1.jpg'
import s2 from '../../images/s2.jpg'
import s3 from '../../images/s3.jpg'
import s4 from '../../images/s4.jpg'

export default function Home() {
  return (

    <>
        <div className="text-intro w-75">
         <img className="w-25 h-25 px-4 m-2 rounded-2" src={bd } alt="donation"/>
         <p className="w-75 px-4 m-2">Blood is universally recognized as the most precious element that sustains life. It saves innumerable lives across the world in a variety of conditions. The need for blood is great - on any given day, approximately 39,000 units of Red Blood Cells
            are needed. More than 29 million units of blood components are transfused every year. Donate Blood Despite the increase in the number of donors, blood remains in short supply during emergencies, mainly attributed to the lack of information
            and accessibility. We positively believe this tool can overcome most of these challenges by effectively connecting the blood donors with the blood recipients.</p>

        </div>


        <div className="photo-slider text-center d-flex justify-content-center px-5">

         <div className="d-flex justify-content-between bg-danger px-4">
            <div className="p-1"> <img src= {s1 }  className="w-100" alt="..."/> </div>
            <div className="p-1"> <img src= {s2 }  className="w-100" alt="..."/> </div>
            <div className="p-1"> <img src= {s3 }  className="w-100" alt="..."/> </div>
            <div className="p-1"> <img src= {s4 }  className="w-100" alt="..."/> </div>
         </div>


        </div>


    <div className="p-4">
        <div className="row">
            <div className="text-details-left col-8 text-start px-4">
                <h2>Blood Bank:</h2>
                <p>We welcome you to in our WebSite. If you are a donor , We appreciate you <a href="#">signing up</a> online as a Donor. If you need blood we are happy to serve you. This blood donor list is hosted by www.lifesaver.com on behalf of "Life
                    Saver Blood Bank" as a public service without any profit motive.This is a free service. While the Organisers have taken all steps to obtain accurate and up-to-date information of potential blood donors, the Organisers and ICM Computers
                    do not guarantee accuracy of the information contained herein or the suitability of the persons listed as any liability for direct or consequential damage to any person using this blood donor list including loss of life or damage due
                    to infection of any nature arising out of blood transfusion from persons whose names have been listed in this website. We request donors to update contact details regularly.</p>
            </div>


            <div className="latestNews col-4 p-0">
                <div className="w-100 ps-2">
                    <h2>Latest News :</h2>
                </div>

                <div className="limit">
                    <div className="sliderUp px-2">
                        <h3 className="fw-bold">HDFC Bank sets Guinness record in blood collection</h3>
                        <p>The blood donation camp organised by HDFC Bank on December 6, 2013 involving 61,902 participants has found a place in Guinness Book of Records as the largest such drive on a single day World Blood Donor Day: Poor health reduces
                            women blood donors in India While the overall number of blood donors in India has grown over the years, women constitute only a tiny 10 percent share owing to health problems like pernicious anaemia and low haemoglobin levels
                            or being underweight
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

     </>
    
  )
}
