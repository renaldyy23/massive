/* eslint-disable no-unused-vars */
import React from 'react'
import b1 from '../assets/images/blog/blog1.jpg'
import b2 from '../assets/images/blog/blog2.jpg'
import b3 from '../assets/images/blog/blog3.jpg'

const blog = () => {
  return <>
  <section className="blog-wrapper p-5">
    <div className="container-xxl">
      <div className="row">
      <div className="col-12">
          <div className="shop-details text-center align-items-center">
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="blogs p-5">
    <div className="container-xxl container">
      <div className="row">
        <div className="col-12 p-5">
          <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={b1} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h5 className="card-title text">Minuman Ibu Kota</h5>
                <p className="card-text fs-5">Rasakan Kehebatan dalam Setiap Tetes: Ibu Kota.Minuman yang Membanggakan! Nikmati keunikan dan keistimewaan dalam setiap tegukan minuman Ibu Kota kami. 
               Mau yang dingin atau panas dan yang hitam atau susu kami sediakan. Campuran sempurna dari rasa yang mendalam dan aroma yang memikat.</p>
              </div>
              </div>
           
             </div>
          </div>
        </div>
        <div className="col-12 p-5">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={b2} alt="" className='img-fluid rounded-start' />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <h5 className="card-title">Find To Fine Coffee</h5>
                      <p className="card-text fs-5">
                        Tingkatkan energi dari rasa manis di Red Velvet kami. 
                        Kami membawa Anda ke dalam perjalanan unik dengan
                        kopi beraroma ekslusif yang dipadukan dengan sentuhan
                        elegan warna pink. Temukan kebahagiaan dalam setiap tetesnya: Dari Biasa ke Luar Biasa. 
                        Buatlah momen istimewa dengan cangkir kopi pink yang tak hanya menawarkan rasa, tetapi juga keceriaan yang menyenangkan.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 p-5">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={b3} alt="" className='img-fluid rounded-start' />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <h5 className="card-title">UNICORN ECERAN BARU F&B ASIA TENGGARA PERTAMA</h5>
                      <p className="card-text fs-5">Kopi Kenangan adalah salah satu jaringan kopi grab-and-go dengan pertumbuhan tercepat di Indonesia. 
                      Ide Kopi Kenangan bermula karena para pendirinya mempunyai misi untuk menyebarkan kecintaan mereka terhadap kopi Indonesia sebagai merek lokal dari Indonesia ke seluruh dunia.​</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      </div>
    </div>
  </section>
  </>;
}

export default blog