import React, { useState, useEffect } from 'react'
import MainButton from "./MainButton"
import axios from 'axios';
function EntityTypeSection(props) {
  const types = ["LLC", "C-corporation", "S-corporation", "Nonprofit"];
  const [states, setStates] = useState([]);
  const [selectedType, setSelectedType] = useState('llc');
  const [selectedState, setSelectedState] = useState('');
  const [selectedOrigin, setSelectedOrigin] = useState('');
  const [stateFee, setStateFee] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

    // Fetch available types from the API
    // axios.get('/types')
    //   .then((response) => {
    //     setTypes(response.data);
    //   })
    //   .catch((error) => {
    //     console.error('Error fetching types from the API:', error);
    //   });

    // Fetch available states from the API
  
  useEffect(() => {
    axios.get(`https://www.order.gybfirm.com/api/${selectedType}/all/state`)
    .then((response) => {
      setStates(response.data);
    })
    .catch((error) => {
      console.error('Error fetching states from the API:', error);
    });
    // Function to fetch origin state fee from the API
    const fetchStateFee = async () => {
      if (selectedType && selectedState) {
        try {
          const response = await axios.get(`https://www.order.gybfirm.com/api/${selectedType}/single/state/${selectedState}`);
          console.log(response);
          console.log(response.data);
          setStateFee(response.data[0]);

          // Check if the state and origin are the same
          if (selectedState === selectedOrigin) {
            setErrorMessage('State and Origin cannot be the same.');
          } else {
            setErrorMessage('');
          }
        }
        catch (error) {
          console.error('Error fetching state fee from the API:', error);
          setStateFee('');
          setErrorMessage('Error fetching state fee from the API. Please try again later.');
        }
      }
      else {
        console.log('hello');
      }
    };

    fetchStateFee();
  }, [selectedType, selectedState, selectedOrigin]);


  return (
    <div className='entity-type-section'>
      <h3 className='entity-type-section-heading text-center'>{props.Heading}</h3>
      <center>
        {props.image && <img src={props.image} alt="" className='entity-type-section-image' />}
      </center>
           {props.text && <><h4 className='text-black text-center fw-bolder'>{props.text}</h4></>}

      {props.type &&
        <div className='entity-type-section-div'>
          {/* type */}
          <p className='entity-type-section-text' >Entity Type</p>
          <select className='entity-type-section-select' value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}>
            <option className='entity-type-section-option' value="" hidden>Select an Entity Type</option>
            {types.map((type) => (
              <option key={type} value={type} className='entity-type-section-option'>{type}</option>
            ))}
          </select>
        </div>}

      {/* state of formation */}
      {props.state &&
        <div className='entity-type-section-div'>
          <p className='entity-type-section-text' >State of Formation</p>
          <select className='entity-type-section-select' value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}>
            <option className='entity-type-section-option' value="" hidden>Select a state</option>
            {states.map((state) => (
              <option className='entity-type-section-option' key={state.id} value={state.id}>{state.llc_state}</option>
            ))}
          </select>
        </div>}
      {/* State of Foreign Qualification */}
      {
        props.stateOrign &&
        <div className='entity-type-section-div'>
          <p className='entity-type-section-text' >State of Foreign Qualification</p>
          <select className='entity-type-section-select' value={selectedOrigin}
            onChange={(e) => setSelectedOrigin(e.target.value)}>
            <option className='entity-type-section-option' value="" hidden>Select a state</option>
            {states.map((state) => (
              <option className='entity-type-section-option' key={state.id} value={state.id}>{state.llc_state}</option>
            ))}
          </select>
        </div>
      }


      <center>
        {/* {stateFee &&
        <h1 className='entity-type-section-fees-amount'>$39</h1>
      } */}
        {stateFee &&
          <h1 className='entity-type-section-fees-amount'>${stateFee.llc_fee}</h1>
        }
        {
          stateFee.llc_annual_fee &&
          <>
            {errorMessage && <p className='text-danger'>{errorMessage}</p>}
            <p className='fw-bold'> ${stateFee.llc_annual_fee} State Fee + $39 Service Fee</p>
          </>
        }
        <MainButton text="Order Now" path="https://www.order.gybfirm.com/order"
          icon={<i className='fa-solid fa-arrow-right'></i>} anotherclass="entity-type-section-btn" />
      </center>

      <div>

      </div>


    </div>
  )
}

export default EntityTypeSection