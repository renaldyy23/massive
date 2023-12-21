/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import blog1 from '../assets/images/blog/blog-1.jpg'
import blog2 from '../assets/images/blog/blog-2.jpg'
import blog3 from '../assets/images/blog/blog-3.jpg'
import blog4 from '../assets/images/blog/blog-4.jpg'
import just1 from '../assets/images/about/just1.png'
import video from '../assets/images/about/1.mp4'
import Marquee from "react-fast-marquee";
import orders from '../assets/images/icons/icon1.png'
import orders1 from '../assets/images/icons/icon2.png'
import orders2 from '../assets/images/icons/icon3.png'
import orders3 from '../assets/images/icons/icon4.png'
import orders4 from '../assets/images/icons/icon5.png'

import mobileImage from '../assets/images/mobileimage.jpg'
const about = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check the screen width on component mount and when it's resized
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Call the handleResize function initially
    handleResize();

    // Add an event listener to handle screen resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return <>
    <section className="about-wrapper p-5 d-flex justify-content-center align-items-center">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="shop-details text-center align-items-center">
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="about-us p-5">
      <div className="row">
        <div className="col-md-5 mb-5">
          <img src={just1} alt="" className='img-fluid p-5 mb-2 ' />
        </div>
        <div className="col-md-4 d-flex flex-column align-items-left justify-content-center">
          <h1 className='text-black'>TENTANG KAMI</h1>
          <p className="card-text fs-5 mb-3">Just adalah sebuah website yang menawarkan berbagai waralab dari berbagai brand, just sendiri didirikan pada tahun 2023. 
          Misi kami adalah memberikan akses mudah untuk para calon pengusaha untuk membangun usahanya sendiri.</p>
         </div>
      </div>
    </section>

    <section className="abouts p-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12 d-flex flex-column align-items-center">
            <h1 className='mb-3 text-black'>Apa kata mereka tentang franchise</h1>
          </div>
          <div className="col-12 col-md-6 p-3">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={blog1} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Jhon Damon</h5>
                    <p className="card-text mb-3">Salah satu keuntungan terbesar dari bisnis franchise adalah Kita akan memperoleh merek dan produk yang telah teruji dan terbukti di pasaran. 
                    Merek tersebut biasanya sudah dikenal oleh masyarakat dan memiliki basis pelanggan yang sudah mapan.</p>
                    <p className="card-text"><small className="text-body-secondary">Terakhir update 3 menit yang lalu</small></p>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 p-3">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={blog2} alt="" className='img-fluid rounded-start' />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Kimberly Candy</h5>
                    <p className="card-text mb-3">Sebagai bagian dari jaringan franchise, Kita akan mendapatkan dukungan dari franchisor dalam hal operasional, pemasaran, dan pengembangan bisnis. 
                    Franchisor juga akan memberikan pelatihan dan bimbingan dalam menjalankan bisnis.</p>
                    <p className="card-text"><small className="text-body-secondary">Terakhir update sekarang</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 p-3">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={blog3} alt="" className='img-fluid rounded-start' />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Cindy Lauren</h5>
                    <p className="card-text mb-3">Dalam bisnis franchise, biaya untuk memulai dan menjalankan bisnis biasanya lebih rendah dibandingkan dengan membuka bisnis sendiri. 
                    Kita juga dapat memanfaatkan skala ekonomi dari jaringan franchise untuk mengurangi biaya.</p>
                    <p className="card-text"><small className="text-body-secondary">Terakhir update 5 menit yang lalu</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 p-3">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={blog4} alt="" className='img-fluid rounded-start' />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Shopia Grace</h5>
                    <p className="card-text mb-3">Bisnis franchise memiliki potensi keuntungan yang lebih besar karena memiliki merek yang sudah dikenal dan memiliki pelanggan yang sudah mapan. 
                    Ini juga berarti bisnis franchise memiliki peluang yang lebih besar untuk berkembang dan berkembang dengan cepat.</p>
                    <p className="card-text"><small className="text-body-secondary">Terakhir update 10 menit yang lalu</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 p-3">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={blog2} alt="" className='img-fluid rounded-start' />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Jessica Emily</h5>
                    <p className="card-text mb-3">Dalam bisnis franchise, risiko kegagalan lebih rendah karena merek dan produk sudah teruji di pasaran. 
                    Franchisor juga memberikan dukungan dan bimbingan dalam menjalankan bisnis, yang membantu kita menghindari kesalahan dan mengurangi risiko kegagalan.</p>
                    <p className="card-text"><small className="text-body-secondary">Terakhir update sekarang</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 p-3">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={blog1} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Thomas Arthur</h5>
                    <p className="card-text mb-3">Franchisor akan memberikan pelatihan dan dukungan dalam pengembangan bisnis, termasuk strategi pengembangan, pengelolaan keuangan, dan manajemen sumber daya manusia. 
                    Ini membantu kita untuk mengembangkan bisnis kita dengan lebih baik dan efisien.</p>
                    <p className="card-text"><small className="text-body-secondary">Terakhir update 3 menit yang lalu</small></p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="col-12 p-3">
            <Marquee className='p-2 slide'>
              <div>
                <img src={orders1} alt="" className='img-fluid' />
                <p className="card-text mb-2"></p>

              </div>
              <div>
                <img src={orders2} alt="" className='img-fluid' />
                <p className="card-text mb-2"></p>
              </div>
              <div>
                <img src={orders4} alt="" className='img-fluid' />
                <p className="card-text"></p>
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  </>;
}

export default about