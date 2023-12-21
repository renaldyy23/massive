/* eslint-disable no-unused-vars */
import React from 'react'
import Swal from 'sweetalert2';

const handleclick = () => {
  Swal.fire({
    title: "Sukses",
    text: "Terima Kasih, Tanggapan anda telah diterima",
    icon: "success"
  });
}

const contact = () => {
  return <>
   <section className="contact-wrapper p-5">
    <div className="container-xxl">
      <div className="row">
          <div className="col-12 text-center">
          </div>
      </div>
    </div>
  </section>
  <div className="contact-wrapper-details p-5">
    <div className="container-xxl">
      <div className="row text-center align-items-center">
        <div className="col-lg-6 col-md-12 p-3">
          <div className="map card m-auto embed-responsive embed-responsive-16by9">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126907.08080617724!2d106.71967667579487!3d-6.28392946198547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1ec2422b0b3%3A0x39a0d0fe47404d02!2sJakarta%20Selatan%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1700856101630!5m2!1sid!2sid" 
          allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
            <div className="card p-5">
                <h2 className='footer-title mb-3'><b>Kontak</b></h2>
                  <p className='mb-2'><b>Alamat:</b>  Jl. Merdeka Timur No.27<br></br>Kebayoran - Jakarta Selatan<br></br>15471 Indonesia </p>
                  <p className='mb-4'><b>No. Telp:</b> 021 - 1772511</p>
                  <p>Email : justfranchise@indonesia.com</p>
                  <p>Instagram : @justfranchise</p>
                  <p>Facebook : JustFranchise</p>
                  <p>Twitter : @justfranchise</p>
                  <p>Website : justfranchise.co.id</p>
            </div>
          </div>
      </div>
    </div>
  </div>

  <div className="contact-message p-5">
    <div className="container-xxl">
      <div className="row">
        <div className="col-lg-8 col-md-10 col-sm-12 m-auto">
        <div className="card p-5">
        <h2 className='text-center mb-4'>HUBUNGI KAMI</h2>
        <div className=" d-flex align-items-center justify-content-center">
        <div className="row g-3">
              <div className='col-12'>
              <label htmlFor="exampleFormControlInput1" className="form-label mb-3">Nama Lengkap</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="" />
                </div>
              <div className="col-12">
                  <label htmlFor="exampleFormControlTextarea1" className="form-label">Email</label>
                  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="" />
                </div>
                <div className="col-12">
                  <label htmlFor="exampleFormControlTextarea1" className="form-label">Pesan</label>
                  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="" />
                </div>
                <div className='col-12 text-center gap-2'>
                <button id='button-link' type="submit" onClick={() => handleclick()}>Kirim</button>
                </div>
            </div>
          </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  </>;
}

export default contact