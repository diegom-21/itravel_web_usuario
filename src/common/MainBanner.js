import React from 'react';
import banner1 from '../assets/img/banner1.jpg';
import banner2 from '../assets/img/banner2.jpg';
import banner3 from '../assets/img/banner3.jpg';

function Banners() {
  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={banner1} className="d-block w-100" alt="Banner 1" style={{ width: '200px', height: '450px'}} />
        </div>
        <div className="carousel-item">
          <img src={banner2} className="d-block w-100" alt="Banner 2" style={{ width: '200px', height: '450px'}} />
        </div>
        <div className="carousel-item">
          <img src={banner3} className="d-block w-100" alt="Banner 3" style={{ width: '200px', height: '450px'}} />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev" style={{ top: '45%' }}>
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next" style={{ top: '45%' }}>
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Banners;
