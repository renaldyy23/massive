/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password == '') {
      setError('Please enter correct details!');
    } else {
      // TODO: Send signup request to server
      setError('Login successful');
      setEmail('');
      setPassword('');
    }
  };

  const containerStyle = {
    backgroundColor: 'hsl(200, 60%, 75%)'
  };

  return (
    <section className="login-wrapper p-5">
      <div className="container-xxl">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-8 col-sm-10">
              <div className="card" style={containerStyle}>
                <div className="card-body p-5">
                  <h2 className="text-center">MASUK AKUN</h2>
                  <p className="text-center mb-4">Selamat Datang!!!</p>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label mb-3">
                        Masukan Email Anda
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="masukan email..."
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label mb-3">
                        Masukan Kata Sandi Email
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="masukan kata sandi..."
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        required
                      />
                    </div>
                    {error && (
                      <div className="alert alert-danger">{error}</div>
                    )}
                    <div className="mb-3">
                      <Link to="/forgotpasword" className="form-link">
                        Lupa Kata Sandi?
                      </Link>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <p className='m-0'>Belum Punya Akun?</p>
                      <Link to="/signup" className="form-link">
                        Daftar
                      </Link>
                    </div>
                    <div className="d-grid gap-2">
                      <button type="submit">Masuk</button>
                    </div>
                  </form>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;