import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
const Form = () => {
  const [value, setValue] = useState();
  return (
    <div>
      <h1 className="text-center mb-4" style={{ letterSpacing: "5px" }}>
        GET PRICES & PAYMENT PLAN{" "}
      </h1>
      <p className="text-center mb-5" style={{ fontSize: "13px" }}>
        Enter your contact to get information on prices, layouts and installment
        terms for the project:
      </p>

      <div class="container">
        <header class="header"></header>
        <div class="form-wrap">
          <form id="survey-form">
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name..."
                    class="form-control"
                    required
                  />
                </div>
              </div>
              <div class="col-md-12">
                <div class="form-group">
                  <PhoneInput
                  className="phone_no"
                    placeholder="Enter phone number"
                    value={value}
                    onChange={setValue}
                  />
                </div>
              </div>
              <div class="col-md-12">
                <div class="form-group">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="E-mail..."
                    class="form-control"
                    required
                  />
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <input
                    type="number"
                    name="age"
                    id="number"
                    min="10"
                    max="99"
                    class="form-control"
                    placeholder="Budget"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <select
                    id="dropdown"
                    name="role"
                    class="form-control"
                    required
                  >
                    <option disabled selected value>
                      Interested in
                    </option>
                    <option value="student">a</option>
                    <option value="job">b</option>
                    <option value="learner">c</option>
                    <option value="preferNo">d</option>
                    <option value="other">e</option>
                  </select>
                </div>
              </div>
            </div>

           

            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <textarea
                    id="comments"
                    class="form-control"
                    name="comment"
                    placeholder="Your message..."
                  ></textarea>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12 justify-content-center">
                <button
                style={{background:"#a68879", color:"white"}}
                  type="submit"
                  id="submit"
                  class="btn btn-block px-4"
                >
                  Get prices & payment terms
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
