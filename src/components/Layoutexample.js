import React, {useState} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Icon } from "@iconify/react";
import layout1 from "../assets/images/layout1.jpg";
import layout2 from "../assets/images/layout2.jpg";
import { Row, Col } from "react-bootstrap";
import img3 from '../../src/assets/images/3.jpg'
import img4 from '../../src/assets/images/4.jpg'



const NextArrow = ({ onClick }) => {
  return (
    <button
      type="button"
      className="slick-next"
      style={{ backgroundColor: "#a68879" }}
      onClick={onClick}
    >
      {/* <i className="bi bi-arrow-right-circle-fill"></i> */}
      <Icon icon="ooui:previous-rtl" />
    </button>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <button
      type="button"
      className="slick-prev fs-1"
      style={{ backgroundColor: "#a68879" }}
      onClick={onClick}
    >
      <i
        style={{
          color: "#a68879",
          fontSize: "50px",
          backgroundColor: "#a68879",
        }}
        className="bi bi-arrow-left-circle-fill"
      ></i>
      {/* <Icon icon="ooui:previous-rtl" /> */}
    </button>
  );
};

const LayoutExample = () => {
    const [src, setSrc] = useState("https://www.youtube.com/watch?v=wYxq4unbhEo");
  const settings = {
    slidesToShow: 2,
    slidesToScroll: 2,
    // dots: true,
    infinite: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleChange = (event) => {
    try {
      // Get the uploaded file
      const file = event.target.files[0];

      // Transform file into blob URL
      setSrc(URL.createObjectURL(file));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
        <div
      className="container-fluid px-5 pt-5"
      style={{ width: "90%", marginBottom: "100px" }}
    >
      <h1
        className="text-center"
        style={{ letterSpacing: "4px", marginBottom: "80px" }}
      >
        LAYOUT EXAMPLES
      </h1>
      <Slider {...settings} className="" style={{ marginBottom: "80px" }}>
        {/* Carousel items */}
        <div>
          <img
            style={{ width: "400px", margin: "0 auto" }}
            src={layout1}
            alt=""
          />
        </div>
        <div>
          <img
            style={{ width: "400px", margin: "0 auto" }}
            src={layout2}
            alt=""
          />
        </div>
        <div>
          <img
            style={{ width: "400px", margin: "0 auto" }}
            src={layout1}
            alt=""
          />
        </div>
        <div>
          <img
            style={{ width: "400px", margin: "0 auto" }}
            src={layout2}
            alt=""
          />
        </div>
      </Slider>
      <div className="d-flex justify-content-center">
        <button
          style={{ borderRadius: "0", fontSize: "13px" }}
          type="button"
          class="btn btn-warning px-5 py-3"
          data-bs-toggle="button"
          aria-pressed="true"
        >
          Get prices & payment plan
        </button>
      </div>
    </div>

    <div className="text-center" style={{width:"90%", margin:"0 auto", marginBottom:"50px"}}>
        <h1 style={{letterSpacing:"4px"}}>Project Video</h1>

        <div style={{width:"800px", margin:"0 auto"}} className="p-3">
        <video className="video-div" style={{width:"800px", margin:"0 auto"}} src={src} controls>
        Sorry, your browser doesn't support embedded videos.
      </video>
        </div>
      {/* <input type="file" onChange={handleChange} /> */}
    </div>


    <div style={{width:"90%", margin:"0 auto", marginBottom:"60px"}}>
        <h1 className="mb-5" style={{letterSpacing:"5px"}}>CONVENIENT PAYMENT PLAN</h1>

        <table class="table table-striped text-center">
  <thead>
    <tr>
    <td>Down Payment</td>
      <td>20% + 4% DLD</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1st Payment</td>
      <td>5%</td>
      <td>Due on end of October 2023</td>
    </tr>
    <tr>
      <td>2nd Payment</td>
      <td>5%</td>
      <td>Due on end of January 2024</td>
    </tr>
    <tr>
      <td>3rd Payment</td>
      <td>5%</td>
      <td>Due on end of April 2024</td>
    </tr>
    <tr>
      <td>4th Payment</td>
      <td>5%</td>
      <td>Due on end of July 2024</td>
    </tr>
    <tr>
      <td>5th Payment</td>
      <td>60%</td>
      <td>On Completion</td>
    </tr>
  </tbody>
</table>
    </div>

    <div>
        <Row className="m-0">
            <Col lg={4} className="">
                <img style={{width:"550px"}} src={img3} alt="" />
                
            </Col>
            <Col lg={8} className="p-5">
                <div>
                    <h3>WHY IS IT GOOD TO INVEST IN DUBAI?</h3>
                    <ul>
                        <li>Robust Growth: Dubai’s real estate market has shown consistent growth over the years, making it an attractive investment destination.</li>
                        <li>Tax-Free Environment: There are no capital gains tax, income tax, or property tax, allowing investors to maximize their returns and enjoy higher rental yields.</li>
                        <li>Strategic Location: Situated at the crossroads of Europe, Asia, and Africa, Dubai enjoys excellent connectivity and serves as a global business hub that attracts international investors and tenants, ensuring a steady demand for properties.</li>
                        <li>Strong Rental Market: The city’s growing population, expatriate workforce, and thriving tourism industry create a steady demand for rental properties.</li>
                        World-Class Infrastructure: Dubai boasts world-class infrastructure, including state-of-the-art amenities, modern transportation networks, and a safe and secure environment.
                    </ul>
                </div>
            </Col>
        </Row>
        <Row className="m-0">
            <Col lg={8} className="p-5">
                <div>
                <ul>
                        <li>Robust Growth: Dubai’s real estate market has shown consistent growth over the years, making it an attractive investment destination.</li>
                        <li>Tax-Free Environment: There are no capital gains tax, income tax, or property tax, allowing investors to maximize their returns and enjoy higher rental yields.</li>
                        <li>Strategic Location: Situated at the crossroads of Europe, Asia, and Africa, Dubai enjoys excellent connectivity and serves as a global business hub that attracts international investors and tenants, ensuring a steady demand for properties.</li>
                        <li>Strong Rental Market: The city’s growing population, expatriate workforce, and thriving tourism industry create a steady demand for rental properties.</li>
                        World-Class Infrastructure: Dubai boasts world-class infrastructure, including state-of-the-art amenities, modern transportation networks, and a safe and secure environment.
                    </ul>
                </div>
            </Col>
            <Col lg={4}>
                <img style={{width:"550px"}} src={img4} alt="" />
            </Col>
        </Row>
    </div>

    <div>
        
    </div>
    </>
  );
};

export default LayoutExample;
