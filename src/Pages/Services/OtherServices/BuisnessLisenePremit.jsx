// import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import Image2 from "../../../Images/Image/Img-45.png"
import ImageMind from '../../../Components/ImageMind';
import Image1 from "../../../Images/Image/Img-6.png"
import ClientSay from '../../../Home/ClientSay';
import LargeText from "../../../Components/LargeText"
import BlueTextElement from "../../../Header/DropDownElements/BlueTextElement"
import MainButton from '../../../Components/MainButton';
import Text from '../../../Components/Text'
import Check from '../../../Components/Check';
import Heading from '../../../Components/Heading';
import AnouncementSection from '../../../Components/AnouncementSection';
// import NeedComponent from '../../../Components/NeedComponent';
import VSB from '../../../Components/VSB';
import Image4 from "../../../Images/Icons/PNG/41.png";
import Image6 from "../../../Images/Icons/PNG/22.png";
import Image7 from "../../../Images/Icons/PNG/26.png";
// import axios from 'axios';

function BuisnessLisenePremit() {

  // const [states, setStates] = useState();

  // useEffect(() => {
  //   axios.get(`https://www.order.gybfirm.com/api/llc/all/state`)
  //     .then((response) => {
  //       setStates(response.data.llc_state);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching states from the API:', error);
  //     });


  // }, []);
  // const searchBtn = async () => {
  //   try {
  //     const res = await axios.get(`https://www.order.gybfirm.com/api/llc/all/state`);
  //     setStates(res.data);
  //   }
  //   catch (e) { }
  // }
  // const packages = [
  //   { id: 1, heading: "Alabama" },
  //   { id: 2, heading: "Alasks" },
  //   { id: 3, heading: "Alabama" },
  //   { id: 4, heading: "Alabama" },
  //   { id: 5, heading: "Alabama" },
  //   { id: 6, heading: "Alabama" },
  //   { id: 7, heading: "Alabama" },
  //   { id: 8, heading: "Alabama" },
  //   { id: 9, heading: "Alabama" },
  //   { id: 10, heading: "Alabama" },
  //   { id: 11, heading: "Alabama" },
  //   { id: 12, heading: "Alabama" },
  //   { id: 13, heading: "Alabama" },
  //   { id: 14, heading: "Alabama" },
  //   { id: 15, heading: "Alabama" },
  //   { id: 16, heading: "Alabama" },
  //   { id: 17, heading: "Alabama" },
  //   { id: 18, heading: "Alabama" },
  //   { id: 19, heading: "Alabama" },

  // ]

  // const packagesData = packages.map(( index, text) => (
  //   <NeedComponent key={index} heading={text} anotherheading="buisness-lisene-premit-heading"
  //     anotherdiviconclass="buisness-lisene-premit-icon-div"
  //     anotherclass="buisness-lisene-premit-component" anotherdivclass="buisness-lisene-premit-div-component" />
  // ));

  // const packagesData = searchBtn.map((text, index) => (
  //   <NeedComponent key={index} heading={text.llc_state} anotherheading="buisness-lisene-premit-heading"
  //     anotherdiviconclass="buisness-lisene-premit-icon-div"
  //     anotherclass="buisness-lisene-premit-component" anotherdivclass="buisness-lisene-premit-div-component" />
  // ));
  return (
    <>
      <Container>
        <center>
          <h1 className='term-condition-heading '>Business License Research Package
            <Text text="Only $39" />
            <MainButton text="Get Started" path="https://www.order.gybfirm.com/order"
              icon={<i className='fa-solid fa-arrow-right'></i>} anotherclass="faq-btn" />
          </h1>

        </center>

        <ClientSay text={<><img src={Image1} alt="" className='registration-agent-left-col-image' /></>}
          component={<>
            <LargeText heading="What Is a Certificate of Good Standing?"
              text={<>
                As a business owner, you are responsible for making sure your business has the proper federal, state and local licenses and permits to operate legally. A business license ensures you are legitimately doing business in a particular locale. Every new business must apply for a business license. But, don't be fooled, your corporation or LLC may need more than one license, or permit, to fully operate at the state level.<br /><br />
                At GYB Firm we take the guesswork out of how to obtain a business license and the necessary permits.</>}
            />

            <AnouncementSection icon={<i className='fa-solid fa-right-long'></i>} text={<>A business license authorizes a company to "do business" in a certain geographical jurisdiction. It is a certificate that authenticates your company is properly registered with the particular county or city in which your office(s) are located.</>} />

            <LargeText
              text={<>When you apply for a business license, keep in mind that there are instances with certain types of businesses and certain locations that require additional paperwork for permits. We discuss both the types of licenses and permits below. If you'd like to research your license and permit requirements yourself, you can get started with <BlueTextElement text="GYB Firm's Business License Search Tool," />  which will tell you the basic requirements for your state and industry.</>}
            />
            <LargeText heading="What Is a Certificate of Good Standing?"
              text={<>
                There are two categories of business licenses, namely federal and state. This is just the first step in operating legally in both your jurisdiction and in the country.<br /><br />
                The federal government often requires a license to be obtained when you have a very specialized industry or one with a high level of liability. Some examples include serving alcohol, running a fishery, opening a gun shop, or transporting live animals across state lines.<br /><br />
                The state government always requires a license to operate within your particular locale and rules can differ based on whether your LLC or corporation is inside city limits or not. For example, you'll need to research whether you can have particular types of home businesses, especially when living in the city or a multi-family dwelling.</>}
            />
            <LargeText heading="How Do I Know What Permits My Business Needs?"
              text={<>Permits are an additional requirement for many businesses and are needed in the following circumstances.
                <br />This is not an exhaustive list by any means, therefore, working with GYB Firm to identify every situation is a key factor in starting your business off right.</>
              }
            />
            <div className='buisness-lisene-premit-btn-div'>
              <MainButton text="Have GYB Firm Research for  you"
                icon={<i className='fa-solid fa-arrow-right'></i>}
                anotherclass=" premit-btn" />
              <MainButton text="Do the Research yourself"
                icon={<i className='fa-solid fa-arrow-right'></i>}
                anotherclass="navbar-btn premit-btn" />

            </div>

          </>} />



        <div className='andement-number'>
          <Heading heading="How Do I Apply For A Business License?" />
          <div className='andement-number-div'>
            <Check number="1"
              text="You'll need to get a license for a small fee to operate a business at the address of location" numberclass="andement-number-component-number" />
            <Check number="2"
              text="Next, your company will need an Assumed Name under which to register, or you can incorporate your business and use your formal name." numberclass="andement-number-component-number" />
            <Check number="3"
              text={<>Then, if you operate from home or plan to remodel a space, for example, you'll need to obtain permits to do so. Other permits covering serving alcohol, displaying a sign on the building exterior and even parking for your business might also be a requirement. A great place to research your local zoning and operating laws is the nearest Small Business Development Center (SBDC). <br /><br />
                <BlueTextElement icon text="Nearest Small Business Development Center (SBDC)." /></>} numberclass="andement-number-component-number" />
            <Check number="4"
              text="Finally, a business must register with the state tax office and submit appropriate taxes on the schedule indicated by your secretary of state." numberclass="andement-number-component-number" />
          </div>
        </div>

        <div className='buisness-lisene-premit-packages-main'>
          <LargeText
            heading="Business License and Permit Requirements by State"
            text={<>Business License and Permit Requirements by State "text=" Every state has different licensing needs based on the type of business you've incorporated, where it's located and the government rules in that state. We will research your business license needs for you with our
              <BlueTextElement text=" Business License Research Package," /> but you can also do initial research yourself with the following resources: <br /> <BlueTextElement text="Buisness Lisene Premit Packages" icon /> </>} />
          {/* state data */}
          <center className='buisness-lisene-premit-packages'>
            {/* {packagesData} */}
            {/* {states.map((index ,text) => (
              <NeedComponent key={index} heading={text.llc_state} anotherheading="buisness-lisene-premit-heading"
                anotherdiviconclass="buisness-lisene-premit-icon-div"
                anotherclass="buisness-lisene-premit-component" anotherdivclass="buisness-lisene-premit-div-component" />
            ))
            } */}
          </center>
        </div>


        <center>
          <div className='get-trade-mark-announcement'>
            <LargeText heading="What comes with the Business License Research Package?"
              text={<>
                Business licensing requirements vary from state to state, county to county and city to city.
                Government agencies frequently update their forms and change requirements for supporting documents.  To make it easier, our trusted licensing partner will provide you with fresh forms and updates you with the latest licensing requirements to protect your business. <br />
                Your customized Business License Research Package will be emailed to you 3 - 4 weeks from  your company being filed by the state.  </>} />
          </div>
        </center>

      </Container>


      <VSB
        Image1={Image4}
        Image2={Image7}
        Image3={Image6}
        heading="As part of the Business License Research Package, a licensing expert will..."
        text1="Determine all business licenses and permits required at the federal, state, county and municipal level."
        text2="Provide you with the proper license/permit applications."
        text3="List filing instructions, supporting document requirements, and fees." />
      <Container className='my-5'>
        <ImageMind colclass="doing-buisness-image-mind-col"
          text={<>
            With GYB Firm's Business License Research Package, you'll have everything you need to apply for your licenses and meet the requirements for your business.
            <MainButton text="Order Now"
              icon={<i className='fa-solid fa-arrow-right'></i>}
              anotherclass="faq-btn navbar-btn " />
          </>}
          heading="GYB Firm's Business License Research Package" Image={Image2} />

      </Container>

    </>
  )
}

export default BuisnessLisenePremit