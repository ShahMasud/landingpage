import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Icon } from '@iconify/react';
const Location = () => {
  return (
    <div className="border" style={{width:"90%", margin:"0 auto", marginBottom:"50px"}}>
        <p className="text-center" style={{fontSize:"40px", letterSpacing:"3px", paddingBottom:"100px", paddingTop:"30px"}}>Centrally Located</p>

        <Row className="location_row">
            <Col>
                <div className="d-flex justify-content-center align-items-center gap-2 pt-3" style={{borderRight:"1px solid gray", borderTop:"1px solid gray"}}>
                    <p><Icon style={{fontSize:"35px", color:"#a68879"}} icon="mdi:location" /></p>
                    <p style={{fontSize:"12px"}}>5 Minutes to Dubai Expo Metro</p>
                </div>
            </Col>
            <Col>
            <div className="d-flex align-items-center justify-content-center gap-2 pt-3" style={{borderRight:"1px solid gray", borderTop:"1px solid gray"}}>
                    <p><Icon style={{fontSize:"35px", color:"#a68879"}} icon="mdi:location" /></p>
                    <p style={{fontSize:"12px"}}>15 Minutes to Dubai Marina  </p>
                </div>
            </Col>
            <Col>
            <div className="d-flex align-items-center justify-content-center gap-2 pt-3" style={{borderRight:"1px solid gray", borderTop:"1px solid gray"}}>
                    <p><Icon style={{fontSize:"35px", color:"#a68879"}} icon="mdi:location" /></p>
                    <p style={{fontSize:"12px"}}>30 Minutes to Mall of Emirates</p>
                </div>
            </Col>
            <Col>
            <div className="d-flex align-items-center justify-content-center gap-2 pt-3" style={{borderRight:"1px solid gray", borderTop:"1px solid gray"}}>
                    <p><Icon style={{fontSize:"35px", color:"#a68879"}} icon="mdi:location" /></p>
                    <p style={{fontSize:"12px"}}>40 Minutes to DXB International Airport</p>
                </div>
            </Col>
        </Row>
    </div>
  )
}

export default Location