import React, { useEffect } from 'react'
import video from '../../Assets/videos/video2.mp4'
import { FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import Aos from 'aos'
import 'aos/dist/aos.css'
import './footer.css'

function Footer() {

   // hook to add a scroll animation
   useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className='footer'>

      <div className="videoDiv">
        <video src={video} muted autoPlay loop type="video/mp4"></video>
      </div>

      <div className="secContent container">

        <div className="contactDiv flex">

          <div className="text" data-aos="fade-up">
            <small>KEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input type="email" placeholder='Enter Email Address' data-aos="fade-up" />
            <button className='btn flex' type='submit' data-aos="fade-up">
              SEND <FiSend className='icon' />
            </button>
          </div>

        </div>

        <div className="footerCard flex">

          <div className="footerIntro flex">

            <div className="logoDiv">
              <a href="" className='logo flex'>
                <MdOutlineTravelExplore className='icon' />
                Travel.
              </a>
            </div>

            <div className="footerParagraph" data-aos="fade-up">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, quisquam architecto possimus harum vitae, vel at quaerat alias nisi sint expedita voluptas repellat magni omnis. Ratione magnam animi tempora illo!
            </div>

            <div className="footerSocials flex" data-aos="fade-up">
              <AiOutlineTwitter className='icon' />
              <AiFillYoutube className='icon' />
              <AiFillInstagram className='icon' />
              <FaTripadvisor className='icon' />
            </div>

          </div>

          <div className="footerLinks grid">

            {/* group one */}
            <div className="linkGroup" data-aos="fade-up" data-aos-duration="3000">
              <span className="groupTitle">
                OUR AGENCY
              </span>
              <li className="footList flex">
                <FaChevronRight className='icon' />
                Services
              </li>
              <li className="footList flex">
                <FaChevronRight className='icon' />
                Insurance
              </li>
              <li className="footList flex">
                <FaChevronRight className='icon' />
                Agency
              </li>
              <li className="footList flex">
                <FaChevronRight className='icon' />
                Tourism
              </li>
              <li className="footList flex">
                <FaChevronRight className='icon' />
                Payment
              </li>
            </div>

            {/* group two */}
            <div className="linkGroup" data-aos="fade-up" data-aos-duration="4000">
              <span className="groupTitle">
                PARTNERS
              </span>
              <li className="footList flex">
                <FaChevronRight className='icon' />
                Booking
              </li>
              <li className="footList flex">
                <FaChevronRight className='icon' />
                Rentcars
              </li>
              <li className="footList flex">
                <FaChevronRight className='icon' />
                Hostel World
              </li>
              <li className="footList flex">
                <FaChevronRight className='icon' />
                Trivago
              </li>
              <li className="footList flex">
                <FaChevronRight className='icon' />
                TripAdviser
              </li>
            </div>

            {/* group Three */}
            <div className="linkGroup" data-aos="fade-up" data-aos-duration="7000">
              <span className="groupTitle">
                LAST MINUTE
              </span>
              <li className="footList flex">
                <FaChevronRight className='icon' />
                London
              </li>
              <li className="footList flex">
                <FaChevronRight className='icon' />
                California
              </li>
              <li className="footList flex">
                <FaChevronRight className='icon' />
                Indonesia
              </li>
              <li className="footList flex">
                <FaChevronRight className='icon' />
                Europe
              </li>
              <li className="footList flex">
                <FaChevronRight className='icon' />
                Oceania
              </li>
            </div>

          </div>

          <div className="footerDiv flex">
            <small>BEST TRAVEL WEBSITE THEME</small>
            <small>COPYRIGHTS RESERVED - WEBTEC 2024 </small>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Footer