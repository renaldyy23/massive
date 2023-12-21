/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom';
import Featuredproducts from '../components/featuredproducts';
import Newarrivals from '../components/newarrivals'
import banner from '../assets/images/blog/blog1.jpg'
import banner1 from '../assets/images/blog/blog2.jpg'
import Newsletter from '../components/newsletter';
import Hero from '../components/hero';


const home = () => {
  return <>
  <section className="banner">
    <div className="container-xxl">
      <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="d-flex flex-column justify-content-center ">
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                  <div className='back-details'>
                  </div>
              </div>
            </div>
          </div>
          </div>
      </div>
    </div>
  </section>
  <Hero />

       <Featuredproducts />

  <section className="new-arrivals p-4">
    <div className="container-xxl">
      <div className="row">
        <div className="d-flex align-items-center justify-content-center flex-column">
          <h1>Blog Kami</h1>
        </div>
        <Newarrivals />
      </div>
    </div>
  </section>
  <section className="hot-deals p-5 d-flex flex-column flex-md-row justify-content-center align-items-center align-items-md-start">
    <div className="container-xxl">
      <div className="row">
        <div className="col-md-6 d-flex">
                  <div className="card m-auto mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={banner} className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h2 className="card-text mb-2">Minuman Ibu Kota</h2>
                  <p className="card-text mb-2">Minuman yang Membanggakan! Nikmati keunikan dan keistimewaan dalam setiap tegukan minuman Ibu Kota kami.</p>
                  <Link to='blog'>
                  <button className='mt-4'>Lihat Selengkapnya</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
        </div>

        <div className="col-md-6 d-flex">
                  <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={banner1} className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h2 className="card-text mb-2">Find To Fine Coffee</h2>
                  <p className="card-text mb-2">Buatlah momen istimewa dengan cangkir kopi pink yang tak hanya menawarkan rasa, tetapi juga keceriaan yang menyenangkan.</p>
                  <Link to='blog'>
                  <button className='mt-4'>Lihat Selengkapnya</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </section>

  <Newsletter />
  </>;
}

export default home