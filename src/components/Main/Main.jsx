import React, { useEffect } from 'react'
import img1 from '../../Assets/img1.jpg'
import img2 from '../../Assets/img2.jpg'
import img3 from '../../Assets/img3.jpg'
import img4 from '../../Assets/img4.jpg'
import img5 from '../../Assets/img5.jpg'
import img6 from '../../Assets/img6.jpg'
import img7 from '../../Assets/img7.jpg'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import Aos from 'aos'
import 'aos/dist/aos.css'
import './main.css'

function Main() {

   // hook to add a scroll animation
   useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  const Data =[
    {
      id:1,
      imgSrc:img1,
      destTitle:'Bora Bora',
      location:"NEW Zealand ",
      grade:"CULTURAL RELAX",
      fees:'$700',
      description:"Nestled in the heart of the South Pacific, Bora Bora stands as a true testament to nature's grandeur and beauty. This idyllic island paradise, surrounded by crystal-clear turquoise waters and coral reefs, "
    },
    {
      id:2,
      imgSrc:img2,
      destTitle:'Machu picchu',
      location:"peru ",
      grade:"CULTURAL RELAX",
      fees:'$400',
      description:"Nestled high in the Andes Mountains of Peru, Machu Picchu stands as a testament to the ancient Incan civilization's architectural brilliance and spiritual significance. This awe-inspiring archaeological site,  "
    },
    {
      id:3,
      imgSrc:img3,
      destTitle:'Great Barrier Reef ',
      location:" Australia ",
      grade:"CULTURAL RELAX",
      fees:'$700',
      description:"Dive into the mesmerizing world of the Great Barrier Reef, a natural wonder that stretches along the northeastern coast of Australia. Renowned as the largest coral reef system on Earth, "
    },
    {
      id:4,
      imgSrc:img4,
      destTitle:'Cappadocia',
      location:"Turkey ",
      grade:"CULTURAL RELAX",
      fees:'$800',
      description:"Situated in the heart of Turkey, Cappadocia unveils a landscape straight out of a dream, where otherworldly rock formations and ancient history converge to create a truly unique destination. Famous for its mesmerizing fairy chimneys, cave dwellings, and surreal topography,"
    },
    {
      id:5,
      imgSrc:img5,
      destTitle:'Guanajuato',
      location:"Maxixo ",
      grade:"CULTURAL RELAX",
      fees:'$1400',
      description:"Nestled in the heart of Mexico, Guanajuato is a city that unfolds like a vibrant canvas, revealing a rich tapestry of history, culture, and architectural marvels. With its narrow cobblestone streets, "
    },
    {
      id:6,
      imgSrc:img6,
      destTitle:' Cinque Terre',
      location:"Italy ",
      grade:"CULTURAL RELAX",
      fees:'$780',
      description:"Nestled along the rugged coastline of the Italian Riviera, Cinque Terre is a string of five enchanting villages that cling to the cliffs overlooking the azure waters of the Ligurian Sea. With their pastel-hued buildings, terraced vineyards, and breathtaking coastal scenery, "
    },
    {
      id:7,
      imgSrc:img7,
      destTitle:'Angkor wat',
      location:"combodia ",
      grade:"CULTURAL RELAX",
      fees:'$2000',
      description:"Nestled amidst the lush jungles of Cambodia, Angkor Wat stands as a monumental symbol of the ancient Khmer civilization's architectural prowess and cultural splendor. This UNESCO World Heritage site, the largest religious monument in the world, is a sprawling complex of temples and ruins that transports visitors back in time to the height of the Khmer Empire. "
    }
  
  
  ]

  return (
    <section className='main container section'>

      <div className="secTitle">
        <h3 className="title" data-aos="fade-right">
          Most visited destinations
        </h3>
      </div>

      <div className="secContent grid">
        {
          Data.map(({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return(
              <div className="singleDestination" key={id} data-aos="fade-up">

                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">

                  <h4 className='destTitle'>{destTitle}</h4>

                  <span className='continent flex'>
                    <HiOutlineLocationMarker className='icon' />
                    <span className="name">
                      {location}
                    </span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade}<small>+1</small></span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description.slice(0,120)}...</p>
                  </div>

                  <button className='btn flex'>
                    DETAILS 
                    <HiOutlineClipboardCheck className='icon' />
                  </button>

                </div>

              </div>
            )
          })
        }
      </div>

    </section>
  )
}

export default Main