import React, { useEffect, useRef } from 'react'
import MainButton from '../../Components/MainButton'
import Image1 from "../../Images/Image/Img-60.png"
import Image2 from "../../Images/logo/Logo-3.png"
import Image3 from "../../Images/Image/Bulb.png"
import Image4 from "../../Images/Image/Hand-Shake.png"
import Image5 from "../../Images/Image/Space-Rocket.png"
import ImageMind from '../../Components/ImageMind'
import RatingCompanies from '../../Components/RatingCompanies'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Check from '../../Components/Check'
import Text from '../../Components/Text'
import AnouncementSection from '../../Components/AnouncementSection'
import LargeText from '../../Components/LargeText'

function AboutUs() {
  const containerRef = useRef(null);

  const handleScroll = () => {
    const container = containerRef.current;

    // Calculate the scroll position
    const scrollPosition = container.scrollTop;

    // Calculate the position where the image should become fixed
    const imagePosition = container.offsetTop;

    // Add/remove CSS class based on scroll position
    if (scrollPosition >= imagePosition) {
      container.classList.add('position-fixed');
    } else {
      container.classList.remove('position-fixed');
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener('scroll', handleScroll);
    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Container>
        <div className='about-us-main-div'>
          {/* a section */}
          <img src={Image1} alt="" className='about-us-image' />
          <div className='about-us-div-a'>
            <h1 className='about-us-heading '>Who Is GYB Firm? </h1>
            <p className='hero-section-text'>Since starting, we have assisted more than 1,000,000 entrepreneurs and small business owners to form and grow their businesses. Learn more</p>
            <MainButton path="https://www.order.gybfirm.com/order" text="Start Now" icon={<><i className="fa-solid fa-arrow-right"></i></>}
              anotherclass="hero-section-btn rounded-pill" />
            <RatingCompanies image={Image2} rating="51319 rating" heading=" More trusted, verified reviews" />
          </div>
        </div>
        {/* b section */}
        <div className='about-us-main-div-2' ref={containerRef}>
          <img src={Image3} alt="" className='about-us-main-div-2-image  ' />
          <div className='about-us-div-b'>
            <h1 className='about-us-div-b-heading'>We're entrepreneurs, just like you. </h1>
            <p className='hero-section-text'>We make
              <Link to="/llc" className='fw-bolder about-us-main-div-text'> registering a company </Link>
              as easy as possible, so you can focus on the important things. </p>
            <Check icon text="Our goal is to support you with a full suite of startup services that motivate you to chase your dream with a trusted partner by your side." />
            <Text text="We're pretty handy with a map, and from paperwork and taxes to banking and bookkeeping, we'll help you navigate the inner workings of your business and watch in awe as you create something truly enlightening." />
            <Text text="Headquartered in Houston, Texas, our journey began in 2004 when business registration meant excessive paperwork and expensive attorneys." />
            <Text text="But since then, we've used technology to streamline the business formation process and cultivate a team of experts so that it's easier than ever to get started and grow a big idea into a healthy business." />
            <AnouncementSection boldtext="Along the way, we have assisted more than 1,000,000 entrepreneurs and small business owners in the formation and growth of their businesses." text="Our mission is to provide you with a superior and modern experience at an unparalleled value" icon={<i className='fa-solid fa-share'></i>} />
          </div>
        </div>
        {/* c section */}
        <div className='about-us-div-3'>
          <h1 className='about-us-heading '>GYB Firm.com</h1>
          <Text text="is your one-stop-shop for building your business" />
        </div>
        {/* d section */}
        <div className='about-div-d'>
          <div>
            <Check icon text="We're here to empower clever people who have bright ideas — people like you." iconclass="about-us-div-d-icon" />
          </div>
          <img src={Image4} alt="" className='about-us-main-div-d-image' />
        </div>
      </Container>
      <div className='about-para-div'>
        <div className='container about-para-div-text'>
          <LargeText heading="Bringing Ideas To Life"
            text="You might notice that we look a little different. We’re a little more fresh; a little more vibrant. We wanted to remind you just how fun, creative, and energizing it is to start a business." />
          <LargeText heading="You might also notice our new GYB Firm avatars."
            text="But did you notice that they’re actually light bulbs? That was no mistake! We took a few notes from Thomas Edison, who incorporated the Edison Electric Light Company after inventing the light bulb. As an entrepreneur, he wanted to bring light to the world. We believe that ideas are how people change the world for the better, and our goal is to guide you down your entrepreneurial path." />
          <LargeText heading="GYB Firm is the place where you take your idea and bring it to life."
          />
        </div>

      </div>
      <Container>
        <ImageMind heading="Launch Your Business with GYB Firm"
          text={<>No contracts. No surprises.
            Only $39 + state fee to launch your business.
            <MainButton
             path="https://www.order.gybfirm.com/order" text="Launch Your Buisness" icon={<i className='fa-solid fa-arrow-right'></i>} anotherclass="faq-btn" /></>}
          Image={Image5} anotherClass="flex-md-row-reverse" />
      </Container>
    </>
  )
}

export default AboutUs