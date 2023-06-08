import React from 'react'
import logo from '../assets/images/logo.png'
import { Icon } from '@iconify/react';
import '../App.css'
const Navbar = () => {
  return (
    <>
        <nav class="navbar position-fixed w-100 top-0 navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid d-flex justify-content-center align-items-center main-div">
    <a class="navbar-brand" href="#">
      <img style={{width:"130px"}} src={logo} alt="" />
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
      <ul class="navbar-nav mb-2 gap-4 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">About the Project</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Advantages</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link" href="#">Popularities</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Layouts</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Video</a>
        </li>
        
        <li class="nav-item">
        <button style={{borderRadius:"unset", fontSize:"14px"}} type="button" class="btn btn-warning btn-lg ">Request a callback</button>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">
          <Icon style={{fontSize:"30px", color:"gray"}} icon="ic:outline-whatsapp" />
          </a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">
          <Icon style={{fontSize:"30px", color:"gray"}} icon="la:telegram" />
          </a>
        </li>
        
      </ul>
     
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar