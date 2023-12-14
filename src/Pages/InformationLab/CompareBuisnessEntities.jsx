import React from 'react'
import { Container } from 'react-bootstrap'
import HeroSection from '../../Home/HeroSection'
import Image1 from "../../Images/Image/Img-14.png"
import ClientSay from '../../Home/ClientSay';
import LargeText from "../../Components/LargeText"
import Image6 from "../../Images/Image/Img-61.png";
import BuisnessInformation from '../../Components/BuisnessInformation'
import ThumbNail from "../../Images/Image/Img-42.png"
import video from "../../Images/video/Corporation.mp4"
import AnouncementSection from '../../Components/AnouncementSection'
import NeedComponent from '../../Components/NeedComponent'
// import Image1 from "../../Images/Icons/PNG/3.png"
import Image2 from "../../Images/Icons/PNG/9.png"
import Image3 from "../../Images/Icons/PNG/10.png"
import Image4 from "../../Images/Icons/PNG/11.png"
import Image5 from "../../Images/Icons/PNG/12.png"
import MainButton from '../../Components/MainButton'
import ImageMind from '../../Components/ImageMind'
import Image7 from "../../Images/Image/Space-Rocket.png"
import YoutubeVideo from '../../Home/YoutubeVideo'
function CompareBuisnessEntities() {
  return (
    <>
      <Container>
        <HeroSection heading="Analyze Different Companies and Their Business Structures"
          heroImage={Image1}
          text="Understand the distinctions among LLCs, S Corporations, C Corporations, and Non Profits."
          btntext="Guide" path="https://www.order.gybfirm.com/order" />
        <ClientSay text={<><img src={Image6} alt="" className='registration-agent-left-col-image' /></>}
          ThumbNail={ThumbNail}
          video={video} anotherclass="register-agent-video-section"

          component={<>
            <LargeText heading="LLC Limited Liability Protection"
              text="LLC, just like C Corps and S Corps, gives owners protection from being personally responsible for any debts or liabilities their company may have. This means that the LLC owns the business assets on its own, and not the owners. Money owed to creditors or damages from a lawsuit) is the responsibility of the business. Money owed, equipment, loss of value, legal cases, and similar things are the responsibility of the business and usually do not affect the personal belongings of the owner." />
            <LargeText heading="Diverse Sorts of Corporate Structures"
              text="You’ll learn almost the four fundamental sorts of commerce substance underneath — LLCs, S Organizations, C Organizations and nonprofits, so you'll choose which is able best meet your needs." />
            <LargeText heading="Limited Liability Company (LLC)"
              text="The LLC is a very well-liked kind of business. It works well for smaller companies and new businesses for a few reasons." />
            <BuisnessInformation
              li1="LLCs can be set up quickly and easily."
              li2="LLCs have a straightforward business setup."
              li3="Running a Limited Liability Company (LLC) is simpler compared to running a C Corporation or S Corporation."
              li4="Creating an LLC is usually cheap."
              li5="LLCs have less rules, regulations and legal issues to follow."
              li6="LLCs are created and controlled by the government of each state."
            />
            <LargeText
              text="The price and rules for an LLC can differ depending on which state you are in. Take a look at our LLC State Information source for more information about your state." />


            <LargeText heading="LLC Taxes and Tax Returns"
              text={<>
                An LLC does not have to give any money to the government as federal income tax. Instead, any money earned or lost is given directly to the individuals who own the business. After that, the IRS charges a tax on it as someone's personal income. Taxing an LLC is a lot like taxing a business that is owned by one person or a business that is owned by two or more people.
              </>}
            />
            <LargeText heading="An LLC is responsible for different kinds of Taxes"
              text={<>
                It is important to understand that an LLC will have to pay certain kinds of taxes.
              </>}
            />
            <LargeText
              text={<>
                <AnouncementSection
                  text={
                    <>
                      •	Payroll tax is a tax that employers have to pay on the salaries they give to their workers. This tax is not applicable to company owners or members, as they have to pay a different tax called self-employment tax when filing their personal tax returns.<br />
                      •	Sales tax is the extra money added to the cost of items that a business buys for itself.<br />
                      •	Tax on property that is owned by a business.<br />
                      •	Sometimes, an LLC may have to pay additional taxes or fees.<br />
                      •	Basically, these taxes can be taken away as costs for running a business and do not affect the individual owner's personal tax returns.</>
                  }
                  anotherclass="virtual-address-annountcement" />
              </>}
            />
          </>} />
        <div >
          <div className='user-entity'>
            <div>
              <NeedComponent
                heading="LLC" image={Image2}
                anotherclass="user-entity-section" />
              <NeedComponent
                heading="S Corporation" image={Image3}
                anotherclass="user-entity-section" />
            </div>
            <div>
              <NeedComponent
                heading="C Corporation" image={Image4}
                anotherclass="user-entity-section" />
              <NeedComponent
                heading="Nonprofit" image={Image5}
                anotherclass="user-entity-section" />
            </div>

          </div>

        </div>
        <center>
          <MainButton text="Get Strated Now" path="https://www.order.gybfirm.com/order" icon={<i className='fa-solid fa-arrow-right'></i>} anotherclass="how-it-work-div-e-btn" />
        </center>


        <ImageMind heading="Launch Your Business with GYB Firm"
          text={<>No contracts. No surprises.
            Only $39 + state fee to launch your business.
            <MainButton
             path="https://www.order.gybfirm.com/order" text="Launch Your Buisness" icon={<i className='fa-solid fa-arrow-right'></i>} anotherclass="faq-btn" /></>}
          Image={Image7} anotherClass="flex-md-row-reverse" />
          <center>
          <form className='entity-form'>
            <h4 className='py-3 fw-bolder'>Please enter the information below</h4>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control"
            placeholder='Enter Email' id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control"
            placeholder='Enter Password' id="exampleInputPassword1" />
          </div>
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <select class="form-select" aria-label="Disabled select example" >
            <option value="1"  selected>Start a Business Soon</option>
            <option value="2">Form a Business Soon</option>
            <option value="3">Grow a Business </option>
          </select>
          <center>
          <MainButton text="Submit" path="https://www.order.gybfirm.com/order" icon={<i className='fa-solid fa-arrow-right'></i>} anotherclass="faq-btn" />
          </center>
     
        </form>
          </center>
        <div className='pb-5'>
        <YoutubeVideo />
        </div>
         
      </Container>

    </>

  )
}

export default CompareBuisnessEntities