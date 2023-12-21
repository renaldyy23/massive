/* eslint-disable no-unused-vars */
import React from 'react'
import { BsDiscord } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { BsTwitter } from 'react-icons/bs'
import { BsSlack, BsGithub } from 'react-icons/bs'
import playstore from '../assets/images/pay/play.jpg'
import appstore from '../assets/images/pay/app.jpg'

const footer = () => {
  return <>
  <footer className='footer p-5'>
    <div className="container-xxl">
      <div className="row justify-content-center justify-content-md-start">
        <div className="col-md-4 col-lg-4 mb-4 mb-md-0 ">
          <h2 className='footer-title mb-3'><b>Kontak</b></h2>
          <div className='mb-3'><p><b>Alamat:</b> Jl. Merdeka Timur No.27 <br></br>Kebayoran - Jakarta Selatan <br></br>15471 Indonesia</p> </div>
          <div className='mb-3'><p><b>No. Telp:</b>  <a className='footer-tel' href="/contact">021 - 1772511</a></p> </div>
          <div className='mb-3'><p><b>Follow by</b></p> </div>
          <div className="socials d-flex gap-3">
          <Link to='https://discord.com/channels/1027937184768081950/1027937184768081952' id='footer-link' target='_blank' className='gap-3'>
          <BsDiscord />
          </Link>
          <Link to='https://twitter.com/eclarkhalid' id='footer-link' target='_blank' className='gap-3'>
          <BsTwitter />
          </Link>
          <Link to={'https://github.com/Eclarkhalid'} className='gap-3' id='footer-link'>
          <BsGithub />
          </Link>
          </div>
        </div>
        <div className="col-md-2 col-lg-2 mb-3 mb-md-0">
          <h2 className='footer-title mb-3'><b>Tentang</b></h2>
          <div className='mb-3'> <Link to='/about' id='footer-links'>Tentang kami</Link>  </div>
          <div className='mb-3'> <Link to='/blog' id='footer-links'>Blog kami</Link>  </div>
          <div className='mb-3'> <Link to='/contact' id='footer-links'>Kontak kami</Link>  </div>
        </div>
        <div className="col-md-4 col-lg-4">
          <h2 className='footer-title mb-3'><b>Install App</b></h2>
          <p className='mb-3'>Tersedia di Google Play & App Store</p>
          <div className="className='mb-3 col-md-6 col-12 pay">
          <div className='mb-3'>
          <Link to='https://play.google.com/store/games?hl=en_US&gl=US' target='_blank'>
          <img src={playstore} alt="" />
          </Link>
          </div>
          <div className='mb-3'>
          <Link to='https://www.apple.com/app-store/' target='_blank'>
          <img src={appstore} alt="" />
          </Link>
          </div>
          </div>
        </div>
      </div>
      <hr className='my-4' />
      <div className="row">
        <div className="col-12 col-md-15">
        <p className="text-center align-items-center">&copy;Copyright by Just.Franchise 2023</p>
        </div>
      </div>
    </div>
  </footer>
  </>;
}

export default footer