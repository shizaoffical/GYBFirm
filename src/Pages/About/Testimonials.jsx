import React, {  useState } from 'react'
// import React, { Fragment, useState } from 'react'
import Heading from '../../Components/Heading'
import Text from '../../Components/Text'
import BlueTextElement from '../../Header/DropDownElements/BlueTextElement'
import { Container } from 'react-bootstrap'
import RatingCompanies from '../../Components/RatingCompanies'
import Image from "../../Images/logo/Logo-1.png"
import Image1 from "../../Images/logo/Logo-3.png";
// import ScrollComponent from "../../Components/ScrollComponent"
// import MainButton from '../../Components/MainButton'
import FAQSection from '../../Components/FAQSection'

function Testimonials() {

  const [selectCondition, setSelectCondition] = useState('Featured Reviews');
  const [currentIndex, setCurrentIndex] = useState(0);
  

// Featured Reviews functionality //////////////////////////////////
  // const FR = [
  //   {
  //     id: 1, verified: "VERIFIED BUYER -1",
  //     ratingstar1: <i className='fa-solid fa-star'></i>,
  //     ratingstar2: <i className='fa-solid fa-star'></i>,
  //     ratingstar3: <i className='fa-solid fa-star'></i>,
  //     ratingstar4: <i className='fa-solid fa-star'></i>,
  //     ratingstar5: <i className='fa-solid fa-star'></i>,
  //     heading: "Feb 1, 2016 by draymond (TX, United States)",
  //     text: "My questions were answered promptly and received all deliverables within the specified time.",
  //   },
  //   {
  //     id: 2, verified: "VERIFIED BUYER-2",
  //     ratingstar1: <i className='fa-solid fa-star'></i>,
  //     ratingstar2: <i className='fa-solid fa-star'></i>,
  //     ratingstar3: <i className='fa-solid fa-star'></i>,
  //     ratingstar4: <i className='fa-solid fa-star'></i>,
  //     ratingstar5: <i className='fa-solid fa-star'></i>,
  //     heading: "Feb 1, 2016 by draymond (TX, United States)",
  //     text: "My questions were answered promptly and received all deliverables within the specified time.",
  //   }, {
  //     id: 3, verified: "VERIFIED BUYER-3",
  //     ratingstar1: <i className='fa-solid fa-star'></i>,
  //     ratingstar2: <i className='fa-solid fa-star'></i>,
  //     ratingstar3: <i className='fa-solid fa-star'></i>,
  //     ratingstar4: <i className='fa-solid fa-star'></i>,
  //     ratingstar5: <i className='fa-solid fa-star'></i>,
  //     heading: "Feb 1, 2016 by draymond (TX, United States)",
  //     text: "My questions were answered promptly and received all deliverables within the specified time.",
  //   }, {
  //     id: 4, verified: "VERIFIED BUYER-4",
  //     ratingstar1: <i className='fa-solid fa-star'></i>,
  //     ratingstar2: <i className='fa-solid fa-star'></i>,
  //     ratingstar3: <i className='fa-solid fa-star'></i>,
  //     ratingstar4: <i className='fa-solid fa-star'></i>,
  //     ratingstar5: <i className='fa-solid fa-star'></i>,
  //     heading: "Feb 1, 2016 by draymond (TX, United States)",
  //     text: "My questions were answered promptly and received all deliverables within the specified time.",
  //   }, {
  //     id: 5, verified: "VERIFIED BUYER-5",
  //     ratingstar1: <i className='fa-solid fa-star'></i>,
  //     ratingstar2: <i className='fa-solid fa-star'></i>,
  //     ratingstar3: <i className='fa-solid fa-star'></i>,
  //     ratingstar4: <i className='fa-solid fa-star'></i>,
  //     ratingstar5: <i className='fa-solid fa-star'></i>,
  //     heading: "Feb 1, 2016 by draymond (TX, United States)",
  //     text: "My questions were answered promptly and received all deliverables within the specified time.",
  //   }, {
  //     id: 6, verified: "VERIFIED BUYER-6",
  //     ratingstar1: <i className='fa-solid fa-star'></i>,
  //     ratingstar2: <i className='fa-solid fa-star'></i>,
  //     ratingstar3: <i className='fa-solid fa-star'></i>,
  //     ratingstar4: <i className='fa-solid fa-star'></i>,
  //     ratingstar5: <i className='fa-solid fa-star'></i>,
  //     heading: "Feb 1, 2016 by draymond (TX, United States)",
  //     text: "My questions were answered promptly and received all deliverables within the specified time.",
  //   }, {
  //     id: 7, verified: "VERIFIED BUYER-7",
  //     ratingstar1: <i className='fa-solid fa-star'></i>,
  //     ratingstar2: <i className='fa-solid fa-star'></i>,
  //     ratingstar3: <i className='fa-solid fa-star'></i>,
  //     ratingstar4: <i className='fa-solid fa-star'></i>,
  //     ratingstar5: <i className='fa-solid fa-star'></i>,
  //     heading: "Feb 1, 2016 by draymond (TX, United States)",
  //     text: "My questions were answered promptly and received all deliverables within the specified time.",
  //   }, {
  //     id: 8, verified: "VERIFIED BUYER-8",
  //     ratingstar1: <i className='fa-solid fa-star'></i>,
  //     ratingstar2: <i className='fa-solid fa-star'></i>,
  //     ratingstar3: <i className='fa-solid fa-star'></i>,
  //     ratingstar4: <i className='fa-solid fa-star'></i>,
  //     ratingstar5: <i className='fa-solid fa-star'></i>,
  //     heading: "Feb 1, 2016 by draymond (TX, United States)",
  //     text: "My questions were answered promptly and received all deliverables within the specified time.",
  //   }, {
  //     id: 9, verified: "VERIFIED BUYER-9",
  //     ratingstar1: <i className='fa-solid fa-star'></i>,
  //     ratingstar2: <i className='fa-solid fa-star'></i>,
  //     ratingstar3: <i className='fa-solid fa-star'></i>,
  //     ratingstar4: <i className='fa-solid fa-star'></i>,
  //     ratingstar5: <i className='fa-solid fa-star'></i>,
  //     heading: "Feb 1, 2016 by draymond (TX, United States)",
  //     text: "My questions were answered promptly and received all deliverables within the specified time.",
  //   }, {
  //     id: 10, verified: "VERIFIED BUYER-10",
  //     ratingstar1: <i className='fa-solid fa-star'></i>,
  //     ratingstar2: <i className='fa-solid fa-star'></i>,
  //     ratingstar3: <i className='fa-solid fa-star'></i>,
  //     ratingstar4: <i className='fa-solid fa-star'></i>,
  //     ratingstar5: <i className='fa-solid fa-star'></i>,
  //     heading: "Feb 1, 2016 by draymond (TX, United States)",
  //     text: "My questions were answered promptly and received all deliverables within the specified time.",
  //   },
  //   {
  //     id: 11, verified: "VERIFIED BUYER-10",
  //     ratingstar1: <i className='fa-solid fa-star'></i>,
  //     ratingstar2: <i className='fa-solid fa-star'></i>,
  //     ratingstar3: <i className='fa-solid fa-star'></i>,
  //     ratingstar4: <i className='fa-solid fa-star'></i>,
  //     ratingstar5: <i className='fa-solid fa-star'></i>,
  //     heading: "Feb 1, 2016 by draymond (TX, United States)",
  //     text: "My questions were answered promptly and received all deliverables within the specified time.",
  //   }, {
  //     id: 12, verified: "VERIFIED BUYER-10",
  //     ratingstar1: <i className='fa-solid fa-star'></i>,
  //     ratingstar2: <i className='fa-solid fa-star'></i>,
  //     ratingstar3: <i className='fa-solid fa-star'></i>,
  //     ratingstar4: <i className='fa-solid fa-star'></i>,
  //     ratingstar5: <i className='fa-solid fa-star'></i>,
  //     heading: "Feb 1, 2016 by draymond (TX, United States)",
  //     text: "My questions were answered promptly and received all deliverables within the specified time.",
  //   },

  // ];
  // const FRrenderData = () => {
  //   const endIndex = currentIndex + 3;
  //   return FR.slice(currentIndex, endIndex).map((item) => (
  //     <ScrollComponent
  //       key={item.id}
  //       verified={item.verified}
  //       ratingstar1={item.ratingstar1}
  //       ratingstar2={item.ratingstar2}
  //       ratingstar3={item.ratingstar3}
  //       ratingstar4={item.ratingstar4}
  //       ratingstar5={item.ratingstar5}
  //       heading={item.heading}
  //       text={item.text}

  //     />
  //   ));
  // };

  // High to Low funvtionality ////////////////////////////////
  // const HTL = [
  //   {
  //     id: 1, verified: "HTL -1",
  //     ratingstar1: <i className='fa-solid fa-star'></i>,
  //     ratingstar2: <i className='fa-solid fa-star'></i>,
  //     ratingstar3: <i className='fa-solid fa-star'></i>,
  //     ratingstar4: <i className='fa-solid fa-star'></i>,
  //     ratingstar5: <i className='fa-solid fa-star'></i>,
  //     heading: "Feb 1, 2016 by draymond (TX, United States)",
  //     text: "My questions were answered promptly and received all deliverables within the specified time.",
  //   },
  //   {
  //     id: 2, verified: "HTL-2",
  //     ratingstar1: <i className='fa-solid fa-star'></i>,
  //     ratingstar2: <i className='fa-solid fa-star'></i>,
  //     ratingstar3: <i className='fa-solid fa-star'></i>,
  //     ratingstar4: <i className='fa-solid fa-star'></i>,
  //     ratingstar5: <i className='fa-solid fa-star'></i>,
  //     heading: "Feb 1, 2016 by draymond (TX, United States)",
  //     text: "My questions were answered promptly and received all deliverables within the specified time.",
  //   }, {
  //     id: 3, verified: "HTL BUYER-3",
  //     ratingstar1: <i className='fa-solid fa-star'></i>,
  //     ratingstar2: <i className='fa-solid fa-star'></i>,
  //     ratingstar3: <i className='fa-solid fa-star'></i>,
  //     ratingstar4: <i className='fa-solid fa-star'></i>,
  //     ratingstar5: <i className='fa-solid fa-star'></i>,
  //     heading: "Feb 1, 2016 by draymond (TX, United States)",
  //     text: "My questions were answered promptly and received all deliverables within the specified time.",
  //   }, {
  //     id: 4, verified: "HTL BUYER-4",
  //     ratingstar1: <i className='fa-solid fa-star'></i>,
  //     ratingstar2: <i className='fa-solid fa-star'></i>,
  //     ratingstar3: <i className='fa-solid fa-star'></i>,
  //     ratingstar4: <i className='fa-solid fa-star'></i>,
  //     ratingstar5: <i className='fa-solid fa-star'></i>,
  //     heading: "Feb 1, 2016 by draymond (TX, United States)",
  //     text: "My questions were answered promptly and received all deliverables within the specified time.",
  //   }, {
  //     id: 5, verified: "HTL BUYER-5",
  //     ratingstar1: <i className='fa-solid fa-star'></i>,
  //     ratingstar2: <i className='fa-solid fa-star'></i>,
  //     ratingstar3: <i className='fa-solid fa-star'></i>,
  //     ratingstar4: <i className='fa-solid fa-star'></i>,
  //     ratingstar5: <i className='fa-solid fa-star'></i>,
  //     heading: "Feb 1, 2016 by draymond (TX, United States)",
  //     text: "My questions were answered promptly and received all deliverables within the specified time.",
  //   }, {
  //     id: 6, verified: "HTL BUYER-6",
  //     ratingstar1: <i className='fa-solid fa-star'></i>,
  //     ratingstar2: <i className='fa-solid fa-star'></i>,
  //     ratingstar3: <i className='fa-solid fa-star'></i>,
  //     ratingstar4: <i className='fa-solid fa-star'></i>,
  //     ratingstar5: <i className='fa-solid fa-star'></i>,
  //     heading: "Feb 1, 2016 by draymond (TX, United States)",
  //     text: "My questions were answered promptly and received all deliverables within the specified time.",
  //   }, {
  //     id: 7, verified: "HTL BUYER-7",
  //     ratingstar1: <i className='fa-solid fa-star'></i>,
  //     ratingstar2: <i className='fa-solid fa-star'></i>,
  //     ratingstar3: <i className='fa-solid fa-star'></i>,
  //     ratingstar4: <i className='fa-solid fa-star'></i>,
  //     ratingstar5: <i className='fa-solid fa-star'></i>,
  //     heading: "Feb 1, 2016 by draymond (TX, United States)",
  //     text: "My questions were answered promptly and received all deliverables within the specified time.",
  //   }, {
  //     id: 8, verified: "HTL BUYER-8",
  //     ratingstar1: <i className='fa-solid fa-star'></i>,
  //     ratingstar2: <i className='fa-solid fa-star'></i>,
  //     ratingstar3: <i className='fa-solid fa-star'></i>,
  //     ratingstar4: <i className='fa-solid fa-star'></i>,
  //     ratingstar5: <i className='fa-solid fa-star'></i>,
  //     heading: "Feb 1, 2016 by draymond (TX, United States)",
  //     text: "My questions were answered promptly and received all deliverables within the specified time.",
  //   }, {
  //     id: 9, verified: "HTL BUYER-9",
  //     ratingstar1: <i className='fa-solid fa-star'></i>,
  //     ratingstar2: <i className='fa-solid fa-star'></i>,
  //     ratingstar3: <i className='fa-solid fa-star'></i>,
  //     ratingstar4: <i className='fa-solid fa-star'></i>,
  //     ratingstar5: <i className='fa-solid fa-star'></i>,
  //     heading: "Feb 1, 2016 by draymond (TX, United States)",
  //     text: "My questions were answered promptly and received all deliverables within the specified time.",
  //   }, {
  //     id: 10, verified: "HTL BUYER-10",
  //     ratingstar1: <i className='fa-solid fa-star'></i>,
  //     ratingstar2: <i className='fa-solid fa-star'></i>,
  //     ratingstar3: <i className='fa-solid fa-star'></i>,
  //     ratingstar4: <i className='fa-solid fa-star'></i>,
  //     ratingstar5: <i className='fa-solid fa-star'></i>,
  //     heading: "Feb 1, 2016 by draymond (TX, United States)",
  //     text: "My questions were answered promptly and received all deliverables within the specified time.",
  //   },
  //   {
  //     id: 11, verified: "HTL BUYER-10",
  //     ratingstar1: <i className='fa-solid fa-star'></i>,
  //     ratingstar2: <i className='fa-solid fa-star'></i>,
  //     ratingstar3: <i className='fa-solid fa-star'></i>,
  //     ratingstar4: <i className='fa-solid fa-star'></i>,
  //     ratingstar5: <i className='fa-solid fa-star'></i>,
  //     heading: "Feb 1, 2016 by draymond (TX, United States)",
  //     text: "My questions were answered promptly and received all deliverables within the specified time.",
  //   }, {
  //     id: 12, verified: "HTL BUYER-10",
  //     ratingstar1: <i className='fa-solid fa-star'></i>,
  //     ratingstar2: <i className='fa-solid fa-star'></i>,
  //     ratingstar3: <i className='fa-solid fa-star'></i>,
  //     ratingstar4: <i className='fa-solid fa-star'></i>,
  //     ratingstar5: <i className='fa-solid fa-star'></i>,
  //     heading: "Feb 1, 2016 by draymond (TX, United States)",
  //     text: "My questions were answered promptly and received all deliverables within the specified time.",
  //   },

  // ];
  // const HTLrenderData = () => {
  //   const endIndex = currentIndex + 3;
  //   return HTL.slice(currentIndex, endIndex).map((item) => (
  //     <ScrollComponent
  //       key={item.id}
  //       verified={item.verified}
  //       ratingstar1={item.ratingstar1}
  //       ratingstar2={item.ratingstar2}
  //       ratingstar3={item.ratingstar3}
  //       ratingstar4={item.ratingstar4}
  //       ratingstar5={item.ratingstar5}
  //       heading={item.heading}
  //       text={item.text}

  //     />
  //   ));
  // };

   //  lowest to top funvtionality ////////////////////////////////
  //  const LTH = [
  //   {
  //     id: 1, verified: "LTH -1",
  //     ratingstar1: <i className='fa-solid fa-star'></i>,
  //     ratingstar2: <i className='fa-solid fa-star'></i>,
  //     ratingstar3: <i className='fa-solid fa-star'></i>,
  //     ratingstar4: <i className='fa-solid fa-star'></i>,
  //     ratingstar5: <i className='fa-solid fa-star'></i>,
  //     heading: "Feb 1, 2016 by draymond (TX, United States)",
  //     text: "My questions were answered promptly and received all deliverables within the specified time.",
  //   },
  //   {
  //     id: 2, verified: "LTH-2",
  //     ratingstar1: <i className='fa-solid fa-star'></i>,
  //     ratingstar2: <i className='fa-solid fa-star'></i>,
  //     ratingstar3: <i className='fa-solid fa-star'></i>,
  //     ratingstar4: <i className='fa-solid fa-star'></i>,
  //     ratingstar5: <i className='fa-solid fa-star'></i>,
  //     heading: "Feb 1, 2016 by draymond (TX, United States)",
  //     text: "My questions were answered promptly and received all deliverables within the specified time.",
  //   }, {
  //     id: 3, verified: "LTH BUYER-3",
  //     ratingstar1: <i className='fa-solid fa-star'></i>,
  //     ratingstar2: <i className='fa-solid fa-star'></i>,
  //     ratingstar3: <i className='fa-solid fa-star'></i>,
  //     ratingstar4: <i className='fa-solid fa-star'></i>,
  //     ratingstar5: <i className='fa-solid fa-star'></i>,
  //     heading: "Feb 1, 2016 by draymond (TX, United States)",
  //     text: "My questions were answered promptly and received all deliverables within the specified time.",
  //   }, {
  //     id: 4, verified: "LTH BUYER-4",
  //     ratingstar1: <i className='fa-solid fa-star'></i>,
  //     ratingstar2: <i className='fa-solid fa-star'></i>,
  //     ratingstar3: <i className='fa-solid fa-star'></i>,
  //     ratingstar4: <i className='fa-solid fa-star'></i>,
  //     ratingstar5: <i className='fa-solid fa-star'></i>,
  //     heading: "Feb 1, 2016 by draymond (TX, United States)",
  //     text: "My questions were answered promptly and received all deliverables within the specified time.",
  //   }, {
  //     id: 5, verified: "LTH BUYER-5",
  //     ratingstar1: <i className='fa-solid fa-star'></i>,
  //     ratingstar2: <i className='fa-solid fa-star'></i>,
  //     ratingstar3: <i className='fa-solid fa-star'></i>,
  //     ratingstar4: <i className='fa-solid fa-star'></i>,
  //     ratingstar5: <i className='fa-solid fa-star'></i>,
  //     heading: "Feb 1, 2016 by draymond (TX, United States)",
  //     text: "My questions were answered promptly and received all deliverables within the specified time.",
  //   }, {
  //     id: 6, verified: "LTH BUYER-6",
  //     ratingstar1: <i className='fa-solid fa-star'></i>,
  //     ratingstar2: <i className='fa-solid fa-star'></i>,
  //     ratingstar3: <i className='fa-solid fa-star'></i>,
  //     ratingstar4: <i className='fa-solid fa-star'></i>,
  //     ratingstar5: <i className='fa-solid fa-star'></i>,
  //     heading: "Feb 1, 2016 by draymond (TX, United States)",
  //     text: "My questions were answered promptly and received all deliverables within the specified time.",
  //   }, {
  //     id: 7, verified: "LTH BUYER-7",
  //     ratingstar1: <i className='fa-solid fa-star'></i>,
  //     ratingstar2: <i className='fa-solid fa-star'></i>,
  //     ratingstar3: <i className='fa-solid fa-star'></i>,
  //     ratingstar4: <i className='fa-solid fa-star'></i>,
  //     ratingstar5: <i className='fa-solid fa-star'></i>,
  //     heading: "Feb 1, 2016 by draymond (TX, United States)",
  //     text: "My questions were answered promptly and received all deliverables within the specified time.",
  //   }, {
  //     id: 8, verified: "LTH BUYER-8",
  //     ratingstar1: <i className='fa-solid fa-star'></i>,
  //     ratingstar2: <i className='fa-solid fa-star'></i>,
  //     ratingstar3: <i className='fa-solid fa-star'></i>,
  //     ratingstar4: <i className='fa-solid fa-star'></i>,
  //     ratingstar5: <i className='fa-solid fa-star'></i>,
  //     heading: "Feb 1, 2016 by draymond (TX, United States)",
  //     text: "My questions were answered promptly and received all deliverables within the specified time.",
  //   }, {
  //     id: 9, verified: "LTH BUYER-9",
  //     ratingstar1: <i className='fa-solid fa-star'></i>,
  //     ratingstar2: <i className='fa-solid fa-star'></i>,
  //     ratingstar3: <i className='fa-solid fa-star'></i>,
  //     ratingstar4: <i className='fa-solid fa-star'></i>,
  //     ratingstar5: <i className='fa-solid fa-star'></i>,
  //     heading: "Feb 1, 2016 by draymond (TX, United States)",
  //     text: "My questions were answered promptly and received all deliverables within the specified time.",
  //   }, {
  //     id: 10, verified: "LTH BUYER-10",
  //     ratingstar1: <i className='fa-solid fa-star'></i>,
  //     ratingstar2: <i className='fa-solid fa-star'></i>,
  //     ratingstar3: <i className='fa-solid fa-star'></i>,
  //     ratingstar4: <i className='fa-solid fa-star'></i>,
  //     ratingstar5: <i className='fa-solid fa-star'></i>,
  //     heading: "Feb 1, 2016 by draymond (TX, United States)",
  //     text: "My questions were answered promptly and received all deliverables within the specified time.",
  //   },
  //   {
  //     id: 11, verified: "LTH BUYER-10",
  //     ratingstar1: <i className='fa-solid fa-star'></i>,
  //     ratingstar2: <i className='fa-solid fa-star'></i>,
  //     ratingstar3: <i className='fa-solid fa-star'></i>,
  //     ratingstar4: <i className='fa-solid fa-star'></i>,
  //     ratingstar5: <i className='fa-solid fa-star'></i>,
  //     heading: "Feb 1, 2016 by draymond (TX, United States)",
  //     text: "My questions were answered promptly and received all deliverables within the specified time.",
  //   }, {
  //     id: 12, verified: "LTH BUYER-10",
  //     ratingstar1: <i className='fa-solid fa-star'></i>,
  //     ratingstar2: <i className='fa-solid fa-star'></i>,
  //     ratingstar3: <i className='fa-solid fa-star'></i>,
  //     ratingstar4: <i className='fa-solid fa-star'></i>,
  //     ratingstar5: <i className='fa-solid fa-star'></i>,
  //     heading: "Feb 1, 2016 by draymond (TX, United States)",
  //     text: "My questions were answered promptly and received all deliverables within the specified time.",
  //   },

  // ];
  // const LTHrenderData = () => {
  //   const endIndex = currentIndex + 3;
  //   return LTH.slice(currentIndex, endIndex).map((item) => (
  //     <ScrollComponent
  //       key={item.id}
  //       verified={item.verified}
  //       ratingstar1={item.ratingstar1}
  //       ratingstar2={item.ratingstar2}
  //       ratingstar3={item.ratingstar3}
  //       ratingstar4={item.ratingstar4}
  //       ratingstar5={item.ratingstar5}
  //       heading={item.heading}
  //       text={item.text}

  //     />
  //   ));
  // };
  //  Newest to Low funvtionality ////////////////////////////////
  // const NTL = [
  //   {
  //     id: 1, verified: "NTL -1",
  //     ratingstar1: <i className='fa-solid fa-star'></i>,
  //     ratingstar2: <i className='fa-solid fa-star'></i>,
  //     ratingstar3: <i className='fa-solid fa-star'></i>,
  //     ratingstar4: <i className='fa-solid fa-star'></i>,
  //     ratingstar5: <i className='fa-solid fa-star'></i>,
  //     heading: "Feb 1, 2016 by draymond (TX, United States)",
  //     text: "My questions were answered promptly and received all deliverables within the specified time.",
  //   },
  //   {
  //     id: 2, verified: "NTL-2",
  //     ratingstar1: <i className='fa-solid fa-star'></i>,
  //     ratingstar2: <i className='fa-solid fa-star'></i>,
  //     ratingstar3: <i className='fa-solid fa-star'></i>,
  //     ratingstar4: <i className='fa-solid fa-star'></i>,
  //     ratingstar5: <i className='fa-solid fa-star'></i>,
  //     heading: "Feb 1, 2016 by draymond (TX, United States)",
  //     text: "My questions were answered promptly and received all deliverables within the specified time.",
  //   }, {
  //     id: 3, verified: "NTL BUYER-3",
  //     ratingstar1: <i className='fa-solid fa-star'></i>,
  //     ratingstar2: <i className='fa-solid fa-star'></i>,
  //     ratingstar3: <i className='fa-solid fa-star'></i>,
  //     ratingstar4: <i className='fa-solid fa-star'></i>,
  //     ratingstar5: <i className='fa-solid fa-star'></i>,
  //     heading: "Feb 1, 2016 by draymond (TX, United States)",
  //     text: "My questions were answered promptly and received all deliverables within the specified time.",
  //   }, {
  //     id: 4, verified: "NTL BUYER-4",
  //     ratingstar1: <i className='fa-solid fa-star'></i>,
  //     ratingstar2: <i className='fa-solid fa-star'></i>,
  //     ratingstar3: <i className='fa-solid fa-star'></i>,
  //     ratingstar4: <i className='fa-solid fa-star'></i>,
  //     ratingstar5: <i className='fa-solid fa-star'></i>,
  //     heading: "Feb 1, 2016 by draymond (TX, United States)",
  //     text: "My questions were answered promptly and received all deliverables within the specified time.",
  //   }, {
  //     id: 5, verified: "NTL BUYER-5",
  //     ratingstar1: <i className='fa-solid fa-star'></i>,
  //     ratingstar2: <i className='fa-solid fa-star'></i>,
  //     ratingstar3: <i className='fa-solid fa-star'></i>,
  //     ratingstar4: <i className='fa-solid fa-star'></i>,
  //     ratingstar5: <i className='fa-solid fa-star'></i>,
  //     heading: "Feb 1, 2016 by draymond (TX, United States)",
  //     text: "My questions were answered promptly and received all deliverables within the specified time.",
  //   }, {
  //     id: 6, verified: "NTL BUYER-6",
  //     ratingstar1: <i className='fa-solid fa-star'></i>,
  //     ratingstar2: <i className='fa-solid fa-star'></i>,
  //     ratingstar3: <i className='fa-solid fa-star'></i>,
  //     ratingstar4: <i className='fa-solid fa-star'></i>,
  //     ratingstar5: <i className='fa-solid fa-star'></i>,
  //     heading: "Feb 1, 2016 by draymond (TX, United States)",
  //     text: "My questions were answered promptly and received all deliverables within the specified time.",
  //   }, {
  //     id: 7, verified: "NTL BUYER-7",
  //     ratingstar1: <i className='fa-solid fa-star'></i>,
  //     ratingstar2: <i className='fa-solid fa-star'></i>,
  //     ratingstar3: <i className='fa-solid fa-star'></i>,
  //     ratingstar4: <i className='fa-solid fa-star'></i>,
  //     ratingstar5: <i className='fa-solid fa-star'></i>,
  //     heading: "Feb 1, 2016 by draymond (TX, United States)",
  //     text: "My questions were answered promptly and received all deliverables within the specified time.",
  //   }, {
  //     id: 8, verified: "NTL BUYER-8",
  //     ratingstar1: <i className='fa-solid fa-star'></i>,
  //     ratingstar2: <i className='fa-solid fa-star'></i>,
  //     ratingstar3: <i className='fa-solid fa-star'></i>,
  //     ratingstar4: <i className='fa-solid fa-star'></i>,
  //     ratingstar5: <i className='fa-solid fa-star'></i>,
  //     heading: "Feb 1, 2016 by draymond (TX, United States)",
  //     text: "My questions were answered promptly and received all deliverables within the specified time.",
  //   }, {
  //     id: 9, verified: "NTL BUYER-9",
  //     ratingstar1: <i className='fa-solid fa-star'></i>,
  //     ratingstar2: <i className='fa-solid fa-star'></i>,
  //     ratingstar3: <i className='fa-solid fa-star'></i>,
  //     ratingstar4: <i className='fa-solid fa-star'></i>,
  //     ratingstar5: <i className='fa-solid fa-star'></i>,
  //     heading: "Feb 1, 2016 by draymond (TX, United States)",
  //     text: "My questions were answered promptly and received all deliverables within the specified time.",
  //   }, {
  //     id: 10, verified: "NTL BUYER-10",
  //     ratingstar1: <i className='fa-solid fa-star'></i>,
  //     ratingstar2: <i className='fa-solid fa-star'></i>,
  //     ratingstar3: <i className='fa-solid fa-star'></i>,
  //     ratingstar4: <i className='fa-solid fa-star'></i>,
  //     ratingstar5: <i className='fa-solid fa-star'></i>,
  //     heading: "Feb 1, 2016 by draymond (TX, United States)",
  //     text: "My questions were answered promptly and received all deliverables within the specified time.",
  //   },
  //   {
  //     id: 11, verified: "NTL BUYER-10",
  //     ratingstar1: <i className='fa-solid fa-star'></i>,
  //     ratingstar2: <i className='fa-solid fa-star'></i>,
  //     ratingstar3: <i className='fa-solid fa-star'></i>,
  //     ratingstar4: <i className='fa-solid fa-star'></i>,
  //     ratingstar5: <i className='fa-solid fa-star'></i>,
  //     heading: "Feb 1, 2016 by draymond (TX, United States)",
  //     text: "My questions were answered promptly and received all deliverables within the specified time.",
  //   }, {
  //     id: 12, verified: "NTL BUYER-10",
  //     ratingstar1: <i className='fa-solid fa-star'></i>,
  //     ratingstar2: <i className='fa-solid fa-star'></i>,
  //     ratingstar3: <i className='fa-solid fa-star'></i>,
  //     ratingstar4: <i className='fa-solid fa-star'></i>,
  //     ratingstar5: <i className='fa-solid fa-star'></i>,
  //     heading: "Feb 1, 2016 by draymond (TX, United States)",
  //     text: "My questions were answered promptly and received all deliverables within the specified time.",
  //   },

  // ];
  // const NTLrenderData = () => {
  //   const endIndex = currentIndex + 3;
  //   return NTL.slice(currentIndex, endIndex).map((item) => (
  //     <ScrollComponent
  //       key={item.id}
  //       verified={item.verified}
  //       ratingstar1={item.ratingstar1}
  //       ratingstar2={item.ratingstar2}
  //       ratingstar3={item.ratingstar3}
  //       ratingstar4={item.ratingstar4}
  //       ratingstar5={item.ratingstar5}
  //       heading={item.heading}
  //       text={item.text}

  //     />
  //   ));
  // };
  //  oldest  to newest ////////////////////////////////
  // const OTN = [
  //   {
  //     id: 1, verified: "OTN -1",
  //     ratingstar1: <i className='fa-solid fa-star'></i>,
  //     ratingstar2: <i className='fa-solid fa-star'></i>,
  //     ratingstar3: <i className='fa-solid fa-star'></i>,
  //     ratingstar4: <i className='fa-solid fa-star'></i>,
  //     ratingstar5: <i className='fa-solid fa-star'></i>,
  //     heading: "Feb 1, 2016 by draymond (TX, United States)",
  //     text: "My questions were answered promptly and received all deliverables within the specified time.",
  //   },
  //   {
  //     id: 2, verified: "OTN-2",
  //     ratingstar1: <i className='fa-solid fa-star'></i>,
  //     ratingstar2: <i className='fa-solid fa-star'></i>,
  //     ratingstar3: <i className='fa-solid fa-star'></i>,
  //     ratingstar4: <i className='fa-solid fa-star'></i>,
  //     ratingstar5: <i className='fa-solid fa-star'></i>,
  //     heading: "Feb 1, 2016 by draymond (TX, United States)",
  //     text: "My questions were answered promptly and received all deliverables within the specified time.",
  //   }, {
  //     id: 3, verified: "OTN BUYER-3",
  //     ratingstar1: <i className='fa-solid fa-star'></i>,
  //     ratingstar2: <i className='fa-solid fa-star'></i>,
  //     ratingstar3: <i className='fa-solid fa-star'></i>,
  //     ratingstar4: <i className='fa-solid fa-star'></i>,
  //     ratingstar5: <i className='fa-solid fa-star'></i>,
  //     heading: "Feb 1, 2016 by draymond (TX, United States)",
  //     text: "My questions were answered promptly and received all deliverables within the specified time.",
  //   }, {
  //     id: 4, verified: "OTN BUYER-4",
  //     ratingstar1: <i className='fa-solid fa-star'></i>,
  //     ratingstar2: <i className='fa-solid fa-star'></i>,
  //     ratingstar3: <i className='fa-solid fa-star'></i>,
  //     ratingstar4: <i className='fa-solid fa-star'></i>,
  //     ratingstar5: <i className='fa-solid fa-star'></i>,
  //     heading: "Feb 1, 2016 by draymond (TX, United States)",
  //     text: "My questions were answered promptly and received all deliverables within the specified time.",
  //   }, {
  //     id: 5, verified: "OTN BUYER-5",
  //     ratingstar1: <i className='fa-solid fa-star'></i>,
  //     ratingstar2: <i className='fa-solid fa-star'></i>,
  //     ratingstar3: <i className='fa-solid fa-star'></i>,
  //     ratingstar4: <i className='fa-solid fa-star'></i>,
  //     ratingstar5: <i className='fa-solid fa-star'></i>,
  //     heading: "Feb 1, 2016 by draymond (TX, United States)",
  //     text: "My questions were answered promptly and received all deliverables within the specified time.",
  //   }, {
  //     id: 6, verified: "OTN BUYER-6",
  //     ratingstar1: <i className='fa-solid fa-star'></i>,
  //     ratingstar2: <i className='fa-solid fa-star'></i>,
  //     ratingstar3: <i className='fa-solid fa-star'></i>,
  //     ratingstar4: <i className='fa-solid fa-star'></i>,
  //     ratingstar5: <i className='fa-solid fa-star'></i>,
  //     heading: "Feb 1, 2016 by draymond (TX, United States)",
  //     text: "My questions were answered promptly and received all deliverables within the specified time.",
  //   }, {
  //     id: 7, verified: "OTN BUYER-7",
  //     ratingstar1: <i className='fa-solid fa-star'></i>,
  //     ratingstar2: <i className='fa-solid fa-star'></i>,
  //     ratingstar3: <i className='fa-solid fa-star'></i>,
  //     ratingstar4: <i className='fa-solid fa-star'></i>,
  //     ratingstar5: <i className='fa-solid fa-star'></i>,
  //     heading: "Feb 1, 2016 by draymond (TX, United States)",
  //     text: "My questions were answered promptly and received all deliverables within the specified time.",
  //   }, {
  //     id: 8, verified: "OTN BUYER-8",
  //     ratingstar1: <i className='fa-solid fa-star'></i>,
  //     ratingstar2: <i className='fa-solid fa-star'></i>,
  //     ratingstar3: <i className='fa-solid fa-star'></i>,
  //     ratingstar4: <i className='fa-solid fa-star'></i>,
  //     ratingstar5: <i className='fa-solid fa-star'></i>,
  //     heading: "Feb 1, 2016 by draymond (TX, United States)",
  //     text: "My questions were answered promptly and received all deliverables within the specified time.",
  //   }, {
  //     id: 9, verified: "OTN BUYER-9",
  //     ratingstar1: <i className='fa-solid fa-star'></i>,
  //     ratingstar2: <i className='fa-solid fa-star'></i>,
  //     ratingstar3: <i className='fa-solid fa-star'></i>,
  //     ratingstar4: <i className='fa-solid fa-star'></i>,
  //     ratingstar5: <i className='fa-solid fa-star'></i>,
  //     heading: "Feb 1, 2016 by draymond (TX, United States)",
  //     text: "My questions were answered promptly and received all deliverables within the specified time.",
  //   }, {
  //     id: 10, verified: "OTN BUYER-10",
  //     ratingstar1: <i className='fa-solid fa-star'></i>,
  //     ratingstar2: <i className='fa-solid fa-star'></i>,
  //     ratingstar3: <i className='fa-solid fa-star'></i>,
  //     ratingstar4: <i className='fa-solid fa-star'></i>,
  //     ratingstar5: <i className='fa-solid fa-star'></i>,
  //     heading: "Feb 1, 2016 by draymond (TX, United States)",
  //     text: "My questions were answered promptly and received all deliverables within the specified time.",
  //   },
  //   {
  //     id: 11, verified: "OTN BUYER-10",
  //     ratingstar1: <i className='fa-solid fa-star'></i>,
  //     ratingstar2: <i className='fa-solid fa-star'></i>,
  //     ratingstar3: <i className='fa-solid fa-star'></i>,
  //     ratingstar4: <i className='fa-solid fa-star'></i>,
  //     ratingstar5: <i className='fa-solid fa-star'></i>,
  //     heading: "Feb 1, 2016 by draymond (TX, United States)",
  //     text: "My questions were answered promptly and received all deliverables within the specified time.",
  //   }, {
  //     id: 12, verified: "OTN BUYER-10",
  //     ratingstar1: <i className='fa-solid fa-star'></i>,
  //     ratingstar2: <i className='fa-solid fa-star'></i>,
  //     ratingstar3: <i className='fa-solid fa-star'></i>,
  //     ratingstar4: <i className='fa-solid fa-star'></i>,
  //     ratingstar5: <i className='fa-solid fa-star'></i>,
  //     heading: "Feb 1, 2016 by draymond (TX, United States)",
  //     text: "My questions were answered promptly and received all deliverables within the specified time.",
  //   },

  // ];
  // const OTNrenderData = () => {
  //   const endIndex = currentIndex + 3;
  //   return OTN.slice(currentIndex, endIndex).map((item) => (
  //     <ScrollComponent
  //       key={item.id}
  //       verified={item.verified}
  //       ratingstar1={item.ratingstar1}
  //       ratingstar2={item.ratingstar2}
  //       ratingstar3={item.ratingstar3}
  //       ratingstar4={item.ratingstar4}
  //       ratingstar5={item.ratingstar5}
  //       heading={item.heading}
  //       text={item.text}

  //     />
  //   ));
  // };


  // hangle option change
  // const handleSelectChange = (event) => {
  //   setSelectCondition(event.target.value);
  // }
 


  return (
    <>
    <Container>
      <center>
        <div className='testimonials-a'>
          <Heading heading="GYB Firm Reviews" />
          <h4 className='fw-bold'>Why Entrepreneurs Love Our Services</h4>
          <Text text={<>Since we first opened our doors in <span className='fw-bold'> 2004,</span>  more than <span className='fw-bold'>1,000,000 </span> entrepreneurs have used GYB Firm to form and run their businesses.
            Most importantly, the vast majority are glad they did. With over <span ><BlueTextElement text="35,000 five-star reviews," /></span>  it's safe to say customers are happy with our services,.</>} anotherclassName="testimonials" />
          <div className='testimonials-a-div'>
            <RatingCompanies image={Image1} rating="51319 rating" heading=" More trusted, verified reviews" />
            <RatingCompanies image={Image} heading="Trusted Excellence" anotherclass="trust-pilot-excellence-a-icon"
              rating="11,8176 rating" />
          </div>
          <Text text="But you don't have to just take our word for it: Here, find out what sets us apart and read honest GYB Firm reviews from entrepreneurs like you." />
        </div>
      </center>


      {/* <div className="carousel">
        <div className='float-xl-end float-md-start'>
         
        </div>
        ///////////////////////////////////////// featured Reviews
        {selectCondition === "Featured Reviews" && <>
          <div className="carousel-items">{FRrenderData()}</div>
          <div className="carousel-controls">
            <div className='carasoul-control-button-div'>
               {currentIndex !== 0 && (
              <button onClick={() => setCurrentIndex((prevIndex) => prevIndex - 3)} className='carasoul-control-btn'>
                <i class="fa-solid fa-less-than "></i>
              </button>
            )}

            {currentIndex !== 1 && (
              <button onClick={() => setCurrentIndex((prevIndex) => prevIndex + 3)} className='carasoul-control-btn'>1</button>
            )}
            {currentIndex + 3 < Fragment.length && (
              <button onClick={() => setCurrentIndex((prevIndex) => prevIndex + 3)} className='carasoul-control-btn'>2</button>
            )}
            {currentIndex + 3 < FR.length && (
              <button onClick={() => setCurrentIndex((prevIndex) => prevIndex + 3)} className='carasoul-control-btn'>3</button>
            )}
            {currentIndex + 3 < FR.length && (
              <button onClick={() => setCurrentIndex((prevIndex) => prevIndex + 3)} className='carasoul-control-btn'>4</button>
            )}
            {currentIndex + 3 < FR.length && (
              <button onClick={() => setCurrentIndex((prevIndex) => prevIndex + 3)} className='carasoul-control-btn'>
                <i class="fa-solid fa-greater-than "></i>
              </button>
            )}
            </div>
           
             <select className='carousel-controls-dropdown-select' value={selectCondition} onChange={handleSelectChange} >
            <option value="Featured Reviews" className='carousel-controls-dropdown-value'>Featured Reviews</option>
            <option value="High to Low" className='carousel-controls-dropdown-value'>High to Low</option>
            <option value="Lowest to Higest" className='carousel-controls-dropdown-value'>Lowest to Higest</option>
            <option value="Newest to Low" className='carousel-controls-dropdown-value'>Newest to Low</option>
            <option value="Oldest to Newes" className='carousel-controls-dropdown-value'>Oldest to Newest</option>
          </select>
          </div>
        </>}

        ////////////////////////////////High to top
        {selectCondition === "High to Low" && <>
          <div className="carousel-items">{HTLrenderData()}</div>
          <div className="carousel-controls">
            <div  className='carasoul-control-button-div'>
               {currentIndex !== 0 && (
              <button onClick={() => setCurrentIndex((prevIndex) => prevIndex - 3)} className='carasoul-control-btn'>
                <i class="fa-solid fa-less-than "></i>
              </button>
            )}

            {currentIndex !== 1 && (
              <button onClick={() => setCurrentIndex((prevIndex) => prevIndex + 3)} className='carasoul-control-btn'>1</button>
            )}
            {currentIndex + 3 < HTL.length && (
              <button onClick={() => setCurrentIndex((prevIndex) => prevIndex + 3)} className='carasoul-control-btn'>2</button>
            )}
            {currentIndex + 3 < HTL.length && (
              <button onClick={() => setCurrentIndex((prevIndex) => prevIndex + 3)} className='carasoul-control-btn'>3</button>
            )}
            {currentIndex + 3 < HTL.length && (
              <button onClick={() => setCurrentIndex((prevIndex) => prevIndex + 3)} className='carasoul-control-btn'>4</button>
            )}
            {currentIndex + 3 < HTL.length && (
              <button onClick={() => setCurrentIndex((prevIndex) => prevIndex + 3)} className='carasoul-control-btn'>
                <i class="fa-solid fa-greater-than "></i>
              </button>
            )}
            </div>
           
             <select className='carousel-controls-dropdown-select' value={selectCondition} onChange={handleSelectChange} >
            <option value="Featured Reviews" className='carousel-controls-dropdown-value'>Featured Reviews</option>
            <option value="High to Low" className='carousel-controls-dropdown-value'>High to Low</option>
            <option value="Lowest to Higest" className='carousel-controls-dropdown-value'>Lowest to Higest</option>
            <option value="Newest to Low" className='carousel-controls-dropdown-value'>Newest to Low</option>
            <option value="Oldest to Newes" className='carousel-controls-dropdown-value'>Oldest to Newest</option>
          </select>
          </div>
        </>}


        ////////////////////////////////lowest to top
        {selectCondition === "Lowest to Higest" && <>
          <div className="carousel-items">{LTHrenderData()}</div>
          <div className="carousel-controls">
            <div  className='carasoul-control-button-div'>
               {currentIndex !== 0 && (
              <button onClick={() => setCurrentIndex((prevIndex) => prevIndex - 3)} className='carasoul-control-btn'>
                <i class="fa-solid fa-less-than "></i>
              </button>
            )}
            {currentIndex !== 1 && (
              <button onClick={() => setCurrentIndex((prevIndex) => prevIndex + 3)} className='carasoul-control-btn'>1</button>
            )}
            {currentIndex + 3 < LTH.length && (
              <button onClick={() => setCurrentIndex((prevIndex) => prevIndex + 3)} className='carasoul-control-btn'>2</button>
            )}
            {currentIndex + 3 < LTH.length && (
              <button onClick={() => setCurrentIndex((prevIndex) => prevIndex + 3)} className='carasoul-control-btn'>3</button>
            )}
            {currentIndex + 3 < LTH.length && (
              <button onClick={() => setCurrentIndex((prevIndex) => prevIndex + 3)} className='carasoul-control-btn'>4</button>
            )}
            {currentIndex + 3 < LTH.length && (
              <button onClick={() => setCurrentIndex((prevIndex) => prevIndex + 3)} className='carasoul-control-btn'>
                <i class="fa-solid fa-greater-than "></i>
              </button>
            )}
            </div>
           
             <select className='carousel-controls-dropdown-select' value={selectCondition} onChange={handleSelectChange} >
            <option value="Featured Reviews" className='carousel-controls-dropdown-value'>Featured Reviews</option>
            <option value="High to Low" className='carousel-controls-dropdown-value'>High to Low</option>
            <option value="Lowest to Higest" className='carousel-controls-dropdown-value'>Lowest to Higest</option>
            <option value="Newest to Low" className='carousel-controls-dropdown-value'>Newest to Low</option>
            <option value="Oldest to Newes" className='carousel-controls-dropdown-value'>Oldest to Newest</option>
          </select>
          </div>
        </>}


        //////////////////////////////// Newest to Low
        {selectCondition === "Newest to Low"&&<>
            <div className="carousel-items">{NTLrenderData()}</div>
            <div className="carousel-controls">
              <div  className='carasoul-control-button-div'>
                {currentIndex !== 0 && (
                <button onClick={() => setCurrentIndex((prevIndex) => prevIndex - 3)} className='carasoul-control-btn'>
                  <i class="fa-solid fa-less-than "></i>
                </button>
              )}

              {currentIndex !== 1 && (
                <button onClick={() => setCurrentIndex((prevIndex) => prevIndex + 3)} className='carasoul-control-btn'>1</button>
              )}
              {currentIndex + 3 < NTL.length && (
                <button onClick={() => setCurrentIndex((prevIndex) => prevIndex + 3)} className='carasoul-control-btn'>2</button>
              )}
              {currentIndex + 3 < NTL.length && (
                <button onClick={() => setCurrentIndex((prevIndex) => prevIndex + 3)} className='carasoul-control-btn'>3</button>
              )}
              {currentIndex + 3 < NTL.length && (
                <button onClick={() => setCurrentIndex((prevIndex) => prevIndex + 3)} className='carasoul-control-btn'>4</button>
              )}
              {currentIndex + 3 < NTL.length && (
                <button onClick={() => setCurrentIndex((prevIndex) => prevIndex + 3)} className='carasoul-control-btn'>
                  <i class="fa-solid fa-greater-than "></i>
                </button>
              )}
              </div>
              
               <select className='carousel-controls-dropdown-select' value={selectCondition} onChange={handleSelectChange} >
            <option value="Featured Reviews" className='carousel-controls-dropdown-value'>Featured Reviews</option>
            <option value="High to Low" className='carousel-controls-dropdown-value'>High to Low</option>
            <option value="Lowest to Higest" className='carousel-controls-dropdown-value'>Lowest to Higest</option>
            <option value="Newest to Low" className='carousel-controls-dropdown-value'>Newest to Low</option>
            <option value="Oldest to Newes" className='carousel-controls-dropdown-value'>Oldest to Newest</option>
          </select>
            </div>
          </>}

        ////////////////////////////////oldest  to newest
        {selectCondition === "Oldest to Newes"&& <>
            <div className="carousel-items">{OTNrenderData()}</div>
            <div className="carousel-controls">
              <div  className='carasoul-control-button-div'>
                 {currentIndex !== 0 && (
                <button onClick={() => setCurrentIndex((prevIndex) => prevIndex - 3)} className='carasoul-control-btn'>
                  <i class="fa-solid fa-less-than "></i>
                </button>
              )}

              {currentIndex !== 1 && (
                <button onClick={() => setCurrentIndex((prevIndex) => prevIndex + 3)} className='carasoul-control-btn'>1</button>
              )}
              {currentIndex + 3 < OTN.length && (
                <button onClick={() => setCurrentIndex((prevIndex) => prevIndex + 3)} className='carasoul-control-btn'>2</button>
              )}
              {currentIndex + 3 < OTN.length && (
                <button onClick={() => setCurrentIndex((prevIndex) => prevIndex + 3)} className='carasoul-control-btn'>3</button>
              )}
              {currentIndex + 3 < OTN.length && (
                <button onClick={() => setCurrentIndex((prevIndex) => prevIndex + 3)} className='carasoul-control-btn'>4</button>
              )}
              {currentIndex + 3 < OTN.length && (
                <button onClick={() => setCurrentIndex((prevIndex) => prevIndex + 3)} className='carasoul-control-btn'>
                  <i class="fa-solid fa-greater-than "></i>
                </button>
              )}
              </div>
             
               <select className='carousel-controls-dropdown-select' value={selectCondition} onChange={handleSelectChange} >
            <option value="Featured Reviews" className='carousel-controls-dropdown-value'>Featured Reviews</option>
            <option value="High to Low" className='carousel-controls-dropdown-value'>High to Low</option>
            <option value="Lowest to Higest" className='carousel-controls-dropdown-value'>Lowest to Higest</option>
            <option value="Newest to Low" className='carousel-controls-dropdown-value'>Newest to Low</option>
            <option value="Oldest to Newes" className='carousel-controls-dropdown-value'>Oldest to Newest</option>
          </select>
            </div>
          </>}
      </div> */}

      </Container>
      <center>
      <div className='faq-main faq-llc container-fluid'>
        <h1 className='faq-heading'>GYB Firm FAQs
        <Text text="Got questions about GYB Firm and our services? We've got answers."/>
        </h1>
        <FAQSection faqclass="faq-llc-div"
        heading="Can I Form a Business for Free?"
        texta="Yes! GYB Firm is the only formation service offering truly free business formation."
         textb="You can form your LLC, S Corp, C Corp or nonprofit for $39."
          textc="You only ever pay the fees required by your state. GYB Firm filing services are free. "
           textd="Checkout our business formation page for more information." />
        <FAQSection faqclass="faq-llc-div"
         heading="How Much Does Your Service Cost?"
        texta="That depends. GYB Firm offers a range of different services to help you start and grow your business."
         textb="Head over to our services page to discover all the services available to you and their associated costs – Whether you’re interested in company formation, company changes, compliance, Registered Agent or IRS filings."
         />
        <FAQSection faqclass="faq-llc-div"
         heading="Do Your Prices Include Filing Fees?"
        texta="With our free company formation packages, you only pay the fee required by your state – This is the fee that you would still need to pay to form a business, even if you were doing the whole process by yourself.
        "
         textb="There are states that charge online processing fees for filing your paperwork, but once again, those fees come from the state, not GYB Firm."
          textc="GYB Firm services are completely free if you choose the $39 LLC, S Corp, C Corp or nonprofit package."  />
        <FAQSection faqclass="faq-llc-div"
         heading="Are There Any Hidden Costs?"
        texta="Absolutely not! We pride ourselves on complete transparency."
         textb="There are no hidden costs or sneaky subscriptions involved when forming your business with GYB Firm, 
          other formation specialists."/>
      </div>
    </center>

{/* <Container>
    <center>
      <div className='testimonials-b'>
        <div className='testimonials-b-div'>
            <RatingCompanies image={Image1} rating="51319 rating" heading=" More trusted, verified reviews" />
            <RatingCompanies image={Image} heading="Trusted Excellence" anotherclass="trust-pilot-excellence-a-icon"
              rating="11,8176 rating" />
          </div>
        
          <h1 className='faq-heading'>Eager to Learn More?
        <Text text="Uncover the Three Easy Steps to Starting Your Dream Business Now"/>
        </h1>
          <MainButton text=" How GYB Firm Work" anotherclass="testimonials-b-btn"
           icon={<i className='fa-solid fa-arrow-right'></i>}/>
      </div>
    </center>
   
    </Container> */}
    </>
  )
}

export default Testimonials