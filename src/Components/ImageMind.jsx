import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Text from './Text'
import BuisnessInformation from './BuisnessInformation'
function ImageMind(props) {
    return (
        <>
            <div className='image-mind'>
                <Row className={`image-mind-row ${props.anotherClass}`}>
                    <Col xl={6} lg={6} md={6} sm={12} xs={12} className={`image-mind-col ${props.colclass} `}>
                        <center>
                        {props.image &&
                          
                          <img src={props.image} alt=''
                              className='image-mind-row-image'>
                          </img>
                          
                     }   
                        </center>
                         
                        <h2 className='image-mind-heading'>{props.heading}</h2>
                        <Text text={props.text} anotherclassName="image-mind-text" />
                        {props.li1 && <BuisnessInformation
                            li1={props.li1} li2={props.li2} li3={props.li3} li4={props.li4} li5={props.li5}
                        />}
                        {props.largetext && <div>{props.largetext}</div>}
                        {props.Image1 && <img src={props.Image1} alt="" className={`image-mind-image ${props.anotherImgClass}`} />}
                    </Col>
                    <Col xl={6} lg={6} md={6} sm={12} xs={12} className={`image-mind-col ${props.colclass} `}>
                        {props.Image && <img src={props.Image} alt="" className={`image-mind-image ${props.anotherImgClass}`} />}
                        {/* if you want to use any component rather than image so you have to use prope component */}
                        {props.component && <div>{props.component}</div>}
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default ImageMind