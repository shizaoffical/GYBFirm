import React, { useState } from 'react'
import Card3 from '../../../Components/Card3';
import LargeText from '../../../Components/LargeText';

function AboutCompany(props) {


    const [activeButton, setActiveButton] = useState(1);

    const handleButtonClick1 = () => {
        setActiveButton(1);
    }
    const handleButtonClick2 = () => {
        setActiveButton(2);
    }
    const handleButtonClick3 = () => {
        setActiveButton(3);
    }
    const handleButtonClick4 = () => {
        setActiveButton(4);
    }

    return (
        <>
            <div className='ein-row'>
                <center>
                    <LargeText heading="We Give You Everything You Need, Whenever You Need It" text="As your business gets bigger, we will always be there to help you have the things you need to keep serving your company's ongoing needs." />
                </center>
                <div className='ein-row-btn-div'>
                    <button className={activeButton === 1 ? 'ein-row-btn-active' : 'ein-row-btn '} onClick={handleButtonClick1}>Change Company</button>
                    <button className={activeButton === 2 ? 'ein-row-btn-active' : 'ein-row-btn '} onClick={handleButtonClick2}>Complains</button>
                    <button className={activeButton === 3 ? 'ein-row-btn-active' : 'ein-row-btn '} onClick={handleButtonClick3}>Register Agent</button>
                    <button className={activeButton === 4 ? 'ein-row-btn-active' : 'ein-row-btn '} onClick={handleButtonClick4}>IRS Filling</button>
                </div>
                <div className='ein-row-data'>
                    {activeButton === 1 && <>
                        <div className='ein-row-data-component'>
                            {props.changeimage1 &&
                                <Card3 Image={props.changeimage1}
                                    heading={props.changeheading1} anotherclass="ein-row-data-component-card"
                                    text={props.changetext1}
                                    more={props.changemore1} />}
                            {props.changeimage2 &&
                                <Card3 Image={props.changeimage2}
                                    heading={props.changeheading2} anotherclass="ein-row-data-component-card"
                                    text={props.changetext2}
                                    more={props.changemore2} />}
                            {props.changeimage3 &&
                                <Card3 Image={props.changeimage3}
                                    heading={props.changeheading3} anotherclass="ein-row-data-component-card"
                                    text={props.changetext3}
                                    more={props.changemore3} />}
                            {props.changeimage4 &&
                                <Card3 Image={props.changeimage4}
                                    heading={props.changeheading4} anotherclass="ein-row-data-component-card"
                                    text={props.changetext4}
                                    more={props.changemore4} />}
                            {props.changeimage5 &&
                                <Card3 Image={props.changeimage5}
                                    heading={props.changeheading5} anotherclass="ein-row-data-component-card"
                                    text={props.changetext5}
                                    more={props.changemore5} />}
                        </div>
                    </>}
                    {activeButton === 2 && <>
                        <div className='ein-row-data-component'>
                            {props.complianceimage1 &&
                                <Card3 Image={props.complianceimage1}
                                    heading={props.complianceheading1} anotherclass="ein-row-data-component-card"
                                    text={props.compliancetext1}
                                    more={props.compliancemore1} />}
                            {props.complianceimage2 &&
                                <Card3 Image={props.complianceimage2}
                                    heading={props.changeheading2} anotherclass="ein-row-data-component-card"
                                    text={props.compliancetext2}
                                    more={props.compliancemore2} />}
                            {props.complianceimage3 &&
                                <Card3 Image={props.complianceimage3}
                                    heading={props.complianceheading3} anotherclass="ein-row-data-component-card"
                                    text={props.compliancetext3}
                                    more={props.compliancemore3} />}
                            {props.complianceimage4 &&
                                <Card3 Image={props.complianceimage4}
                                    heading={props.complianceheading4} anotherclass="ein-row-data-component-card"
                                    text={props.compliancetext4}
                                    more={props.compliancemore4} />}
                            {props.complianceimage5 &&
                                <Card3 Image={props.complianceimage5}
                                    heading={props.complianceheading5} anotherclass="ein-row-data-component-card"
                                    text={props.compliancetext5}
                                    more={props.compliancemore5} />}
                        </div>
                    </>}
                    {activeButton === 3 && <>
                        <div className='ein-row-data-component'>
                            {props.agentimage1 &&
                                <Card3 Image={props.agentimage1}
                                    heading={props.agentheading1} anotherclass="ein-row-data-component-card"
                                    text={props.agenttext1}
                                    more={props.agentmore1} />}
                            {props.agentimage2 &&
                                <Card3 Image={props.agentimage2}
                                    heading={props.agentheading2} anotherclass="ein-row-data-component-card"
                                    text={props.agenttext2}
                                    more={props.agentmore2} />}
                            {props.agentimage3 &&
                                <Card3 Image={props.agentimage3}
                                    heading={props.agentheading3} anotherclass="ein-row-data-component-card"
                                    text={props.agenttext3}
                                    more={props.agentmore3} />}
                            {props.cagentmage4 &&
                                <Card3 Image={props.agentimage4}
                                    heading={props.agentheading4} anotherclass="ein-row-data-component-card"
                                    text={props.agenttext4}
                                    more={props.agentmore4} />}
                            {props.agentimage5 &&
                                <Card3 Image={props.agentimage5}
                                    heading={props.agentheading5} anotherclass="ein-row-data-component-card"
                                    text={props.agenttext5}
                                    more={props.agentmore5} />}

                        </div>
                    </>} {activeButton === 4 && <>
                        <div className='ein-row-data-component'>
                            {props.fillingimage1 &&
                                <Card3 Image={props.fillingimage1}
                                    heading={props.fillingheading1} anotherclass="ein-row-data-component-card"
                                    text={props.fillingtext1}
                                    more={props.fillingmore1} />}
                            {props.fillingimage2 &&
                                <Card3 Image={props.fillingimage2}
                                    heading={props.fillingheading2} anotherclass="ein-row-data-component-card"
                                    text={props.fillingtext2}
                                    more={props.fillingmore2} />}
                            {props.fillingimage3 &&
                                <Card3 Image={props.fillingimage3}
                                    heading={props.fillingheading3} anotherclass="ein-row-data-component-card"
                                    text={props.fillingtext3}
                                    more={props.fillingmore3} />}
                            {props.fillingimage4 &&
                                <Card3 Image={props.fillingimage4}
                                    heading={props.fillingheading4} anotherclass="ein-row-data-component-card"
                                    text={props.fillingtext4}
                                    more={props.fillingmore4} />}
                            {props.fillingimage5 &&
                                <Card3 Image={props.fillingimage5}
                                    heading={props.fillingheading5} anotherclass="ein-row-data-component-card"
                                    text={props.fillingtext5}
                                    more={props.fillingmore5} />}

                        </div>
                    </>}

                </div>
            </div>
        </>
    )
}

export default AboutCompany