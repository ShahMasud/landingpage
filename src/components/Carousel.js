// import React, {useEffect} from 'react'
// import $ from 'jquery';


// const Carousel = () => {
//     useEffect(() => {
//         const multipleCardCarousel = document.querySelector("#carouselExampleControls");
        
//         if (window.matchMedia("(min-width: 576px)").matches) {
//           const carousel = new window.bootstrap.Carousel(multipleCardCarousel, {
//             interval: false
//           });
//           const carouselWidth = $(".carousel-inner")[0].scrollWidth;
//           const cardWidth = $(".carousel-item").width();
//           let scrollPosition = 0;
      
//           $("#carouselExampleControls .carousel-control-next").on("click", function () {
//             if (scrollPosition < carouselWidth - cardWidth * 3) {
//               scrollPosition += cardWidth;
//               $("#carouselExampleControls .carousel-inner").animate(
//                 { scrollLeft: scrollPosition },
//                 600
//               );
//             }
//           });
      
//           $("#carouselExampleControls .carousel-control-prev").on("click", function () {
//             if (scrollPosition > 0) {
//               scrollPosition -= cardWidth;
//               $("#carouselExampleControls .carousel-inner").animate(
//                 { scrollLeft: scrollPosition },
//                 600
//               );
//             }
//           });
//         } else {
//           $(multipleCardCarousel).addClass("slide");
//         }
//       }, []);
//   return (
//     <>
//         <div class="testimonial-slider">
//   <div id="carouselExampleControls" class="carousel carousel-dark" data-bs-ride="carousel">
//     <div class="container-fluid">
//       <div class="row">
//         <div class="col-md-4">
//           <div class="testimonial-title">
//             <i class="bi bi-quote display-1"></i>
//             <h2 class="fw-bold display-6">What our customers say</h2>
//           </div>
//           <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
//             <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//             <span class="visually-hidden">Previous</span>
//           </button>
//           <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
//             <span class="carousel-control-next-icon" aria-hidden="true"></span>
//             <span class="visually-hidden">Next</span>
//           </button>
//         </div>
//         <div class="col-md-8">
//           <div class="carousel-inner">
//             <div class="carousel-item active">
//               <div class="card">
//                 <div class="img-wrapper"><img src="https://codingyaar.com/wp-content/uploads/headshot-1-scaled.jpg" class="d-block w-100" alt="..."/> </div>
//                 <div class="card-body">
//                   <h5 class="card-title">Card title 1</h5>
//                   <i class="bi bi-star-fill text-warning pe-1"></i>
//                   <i class="bi bi-star-fill text-warning pe-1"></i>
//                   <i class="bi bi-star-fill text-warning pe-1"></i>
//                   <i class="bi bi-star-fill text-warning pe-1"></i>
//                   <i class="bi bi-star-fill text-warning pe-1"></i>
//                   <p class="card-text">Some quick example text to build on the card title and make up
//                     the bulk of the
//                     card's content.</p>
//                 </div>
//               </div>
//             </div>
//             <div class="carousel-item">
//               <div class="card">
//                 <div class="img-wrapper"><img src="https://codingyaar.com/wp-content/uploads/headshot-2-scaled.jpg" class="d-block w-100" alt="..."/> </div>
//                 <div class="card-body">
//                   <h5 class="card-title">Card title 2</h5>
//                   <p class="card-text">Some quick example text to build on the card title and make up
//                     the bulk of the
//                     card's content.</p>
//                 </div>
//               </div>
//             </div>
//             <div class="carousel-item">
//               <div class="card">
//                 <div class="img-wrapper"><img src="https://codingyaar.com/wp-content/uploads/headshot-3-scaled.jpg" class="d-block w-100" alt="..."/> </div>
//                 <div class="card-body">
//                   <h5 class="card-title">Card title 3</h5>
//                   <p class="card-text">Some quick example text to build on the card title and make up
//                     the bulk of the
//                     card's content.</p>
//                 </div>
//               </div>
//             </div>
//             <div class="carousel-item">
//               <div class="card">
//                 <div class="img-wrapper"><img src="https://codingyaar.com/wp-content/uploads/headshot-4-scaled.jpg" class="d-block w-100" alt="..."/> </div>
//                 <div class="card-body">
//                   <h5 class="card-title">Card title 4</h5>
//                   <p class="card-text">Some quick example text to build on the card title and make up
//                     the bulk of the
//                     card's content.</p>
//                 </div>
//               </div>
//             </div>
//             <div class="carousel-item">
//               <div class="card">
//                 <div class="img-wrapper"><img src="https://codingyaar.com/wp-content/uploads/headshot-5-scaled.jpg" class="d-block w-100" alt="..."/> </div>
//                 <div class="card-body">
//                   <h5 class="card-title">Card title 5</h5>
//                   <p class="card-text">Some quick example text to build on the card title and make up
//                     the bulk of the
//                     card's content.</p>
//                 </div>
//               </div>
//             </div>
//             <div class="carousel-item">
//               <div class="card">
//                 <div class="img-wrapper"><img src="https://codingyaar.com/wp-content/uploads/headshot-6-scaled.jpg" class="d-block w-100" alt="..."/> </div>
//                 <div class="card-body">
//                   <h5 class="card-title">Card title 6</h5>
//                   <p class="card-text">Some quick example text to build on the card title and make up
//                     the bulk of the
//                     card's content.</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>

// <p class="mt-2 text-center text-secondary">* Refresh on changing size</p>

// <p class="mt-2 text-center">Get a step-by-step written explanation here: <a href="https://codingyaar.com/bootstrap-5-testimonial-slider" target="_blank">Bootstrap 5 Testimonial Carousel Slider</a> </p>

// <p class="mt-2 text-center">Get a step-by-step video explanation here: <a href="https://youtu.be/caNQ-1RTef4" target="_blank">Bootstrap 5 Testimonial Carousel Slider</a> </p>
//     </>
//   )
// }

// export default Carousel