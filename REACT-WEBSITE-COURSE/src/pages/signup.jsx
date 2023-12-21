/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setSuccess, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      // TODO: Send signup request to server
      setSuccess('Signup successful');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
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
                  <h2 className="text-center">DAFTAR AKUN</h2>
                  <p className="text-center mb-3">Bergabunglah dan Pilih Usaha Waralabamu!!</p>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label mb-3">
                        Masukan Email Anda
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="masukan email ..."
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
                    <div className="mb-3">
                      <label
                        htmlFor="confirmPassword"
                        className="form-label mb-3"
                      >
                        Konfirmasi Kata Sandi
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="confirmPassword"
                        placeholder="ketik ulang kata sandi..."
                        value={confirmPassword}
                        onChange={(event) =>
                          setConfirmPassword(event.target.value)
                        }
                        required
                      />
                    </div>
                    {error && (
                      <div className="alert alert-danger">{error}</div>
                    )}
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <p>
                        Sudah Punya Akun?
                      </p>
                      <Link to="/login" className="form-link">
                        Masuk
                      </Link>
                    </div>
                    <div className="d-grid gap-2">
                      <button type="submit">Daftar</button>
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

export default Signup;