import React from "react";
import { Icon } from "@iconify/react";
import { Row, Col } from "react-bootstrap";
const Projects = () => {
  return (
    <div
      className="text-center border pt-5 pb-5"
      style={{
        width: "90%",
        margin: "0 auto",
        paddingLeft: "100px",
        marginBottom: "50px",
      }}
    >
      <p className="" style={{letterSpacing:"5px", marginBottom:"90px", fontWeight:"1px", fontSize:"50px", color:"#35373c"}}>Features and Aminities</p>
      <div>
        <Row className="justify-content-center" style={{color:"#a68879"}}>
          <Col>
            <div className="d-flex gap-4 mb-5 align-items-center">
              <Icon className="" style={{ fontSize: "65px" }} icon="mdi:gym" />
              <p className="fs-5" >Fitness & Wellness Complex</p>
            </div>

            <div className="d-flex gap-4 mb-5 align-items-center">
              <Icon
                className=""
                style={{ fontSize: "65px" }}
                icon="fluent-emoji-high-contrast:playground-slide"
              />
              <p className="fs-5" >Children’s Adventure Playground </p>
            </div>

            <div className="d-flex gap-4 mb-5 align-items-center">
              <Icon
                className=""
                style={{ fontSize: "65px" }}
                icon="maki:racetrack-cycling"
              />
              <p className="fs-5" >Leafy footpaths and cycling tracks </p>
            </div>

            <div className="d-flex gap-4 mb-5 align-items-center">
              <Icon
                className=""
                style={{ fontSize: "65px" }}
                icon="carbon:cafe"
              />
              <p className="fs-5" >Kayak club and cafe</p>
            </div>
          </Col>
          <Col>
            <div className="d-flex gap-4 mb-5 align-items-center">
              <Icon
                className=""
                style={{ fontSize: "65px" }}
                icon="teenyicons:school-outline"
              />
              <p className="fs-5" >IB certified school</p>
            </div>

            <div className="d-flex gap-4 mb-5 align-items-center">
              <Icon
                className=""
                style={{ fontSize: "65px" }}
                icon="fluent-emoji-high-contrast:beach-with-umbrella"
              />
              <p className="fs-5" >The Pulse Beachfront</p>
            </div>

            <div className="d-flex gap-4 mb-5 align-items-center">
              <Icon
                className=""
                style={{ fontSize: "65px" }}
                icon="icon-park-outline:shopping-mall"
              />
              <p className="fs-5" >Shopping mall</p>
            </div>

            <div className="d-flex gap-4 mb-5 align-items-center">
              <Icon
                className=""
                style={{ fontSize: "65px" }}
                icon="ph:park-duotone"
              />
              <p className="fs-5" >Community park</p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Projects;
