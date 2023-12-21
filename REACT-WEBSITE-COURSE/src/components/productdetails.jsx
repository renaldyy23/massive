/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { ShopContext } from "./shopcontext";
import { PRODUCTS, PRODUCTS1 } from "./products";
import Swal from 'sweetalert2';

const handleclick = () => {
  Swal.fire({
    title: "Sukses",
    text: "Terima Kasih, Tanggapan anda telah dikirim ke Mitra",
    icon: "success"
  });
}

const ProductDetails = () => {
  const {
    selectedProduct,
    closeProductDetails,
    addToCart,
    cartItems,
    removeToCart,
    updateCartItemCount,
    keterangan,
  } = useContext(ShopContext);

  // Set selectedProduct to 0
  const productId = selectedProduct || 0;

  const product =
    PRODUCTS.find((p) => p.id === productId) ||
    PRODUCTS1.find((p) => p.id === productId);

  if (!product) {
    return null;
  }
  const cartItemAmount = cartItems[product.id];

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-lg-6">
          <div className="card p-5 m-auto">
            <img
              src={product.image}
              alt=""
              className="card-img-top img-fluid p-2"
            />
          </div>
        </div>

        <div className="col-lg-6">
          <div className="card p-3 m-auto">
            <div className="card-body">
              <h5 className="card-title">{product.brand}</h5>
              <h3 className="card-text">{product.name}</h3>
              <p className="card-text"></p>
              <p className="card-text">{product.description}</p>

              <div className="d-flex justify-content-center">
                <div
                  className="card"
                  style={{ width: "1000px", height: "200px" }}
                >
                  <div className="d-flex justify-content-center flex-column align-items-center">
                    <h2 className="text-center mb-2"></h2>
                    <p className="mb-2"></p>
                  </div>
                  <div className="d-none d-md-block">
                    <div className="row">
                      <div key="unique-key" className="col-12 mb-3">
                        <div className="card">
                          <div className="row">
                            <div className="col-md-6">
                              <p className="text-leftr">Nama Franchise</p>
                              <p className="text-left">Kategori Franchise</p>
                              <p className="text-left">Nama Perusahaan</p>
                              <p className="text-left">Berdiri Sejak</p>
                              <p className="text-left">Jumlah Gerai</p>
                              <p className="text-left">Modal Minimal</p>
                            </div>
                            <div className="col-md-6">
                              <p className="text-left">: Say Hello</p>
                              <p className="text-left">: Makanan & Minuman</p>
                              <p className="text-left">
                                : Say Hello Signature Drink
                              </p>
                              <p className="text-left">: 2020</p>
                              <p className="text-left">: 450</p>
                              <p className="text-left">: Rp.3.900.000.00</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-center"></div>
            </div>
          </div>
          <div className="card">
            <div className="d-flex justify-content-center flex-column align-items-center">
            </div>
            <div className="d-none d-md-block">
              <div className="row mb-3">
                <div className="col-6 col-md-4 col-lg-8 mx-auto">
                  <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
                    {PRODUCTS.slice(3, 7).map((product) => (
                      <div key={product.id} className="col">
                        <div className="card h-100">
                          <img
                            src={product.image}
                            className="card-img-top"
                            alt="..."
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-center">
                <div
                  className="card"
                  style={{ width: "1000px", height: "200px" }}
                >
                  <div className="d-flex justify-content-center flex-column align-items-center">
                    <h2 className="text-center mb-2"></h2>
                    <p className="mb-2">Perhitungan & Balik Modal</p>
                    <div className="d-flex justify-content-right flex-column align-items-right">
                      <h5 className="text-center mb-2"></h5>
                      <p className="mb-2">Detail Perhitungan :</p>
                    </div>
                  </div>
                  <div className="d-none d-md-block">
                    <div className="row">
                      <div key="unique-key" className="col-md-4 mb-3">
                        <div className="card">
                          <div className="col-md-20">
                            <p className="text-center">Poin </p>
                            <p className="text-left">Penjualan/Hari </p>
                            <p className="text-left">Harga Jual </p>
                            <p className="text-left">Jumlah hari (1 Bulan) </p>
                            <p className="text-left">Total Penjualan </p>
                            <p className="text-left">
                              Modal Bubuk (Original 6.211) (+Crunch 1.494){" "}
                            </p>
                            <p className="text-left">Profit Kotor </p>
                          </div>
                          {/* Konten kolom pertama */}
                        </div>
                      </div>
                      <div key="unique-key" className="col-md-4 mb-3">
                        <div className="card">
                          <div className="col-md-20">
                            <p className="text-left">Original </p>
                            <p className="text-left">50 Cup </p>
                            <p className="text-left">Rp. 10.000 </p>
                            <p className="text-left">30 </p>
                            <p className="text-left">Rp.15.000.000 </p>
                            <p className="text-leftr">Rp. 9.316.000 </p>
                            <br></br>
                            <p className="text-left">Rp 5.684.000 </p>
                          </div>
                          {/* Konten kolom kedua */}
                        </div>
                      </div>
                      <div key="unique-key" className="col-md-4 mb-3">
                        <div className="card">
                          <div className="col-md-20">
                            <p className="text-left">Dengan Crunch </p>
                            <p className="text-left">30 Cup </p>
                            <p className="text-left">Rp. 12.000 </p>
                            <p className="text-left">30 </p>
                            <p className="text-left">Rp. 10.800.000 </p>
                            <p className="text-left">Rp. 6.934.000 </p>
                          </div>

                          {/* Konten kolom ketiga */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-center">
                <div
                  className="card"
                  style={{ width: "1000px", height: "400px" }}>
                  <div className="d-flex justify-content-center flex-column align-items-center">
                    <h2 className="text-center mb-2"></h2>
                    <p className="mb-2"></p>
                    <div className="d-flex justify-content-right flex-column align-items-right">
                      <h5 className="text-center mb-2"></h5>
                      <p className="mb-2"> </p>
                    </div>
                  </div>
                  <div className="d-none d-md-block">
                    <div className="row">
                      <div key="unique-key" className="col-md-4 mb-3">
                        <div className="card">
                          <div className="col-md-20">
                            <p className="text-right">Total Profit Kotor </p>
                            <br></br>
                            <p className="text-right">Beban Penjualan </p>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <p className="text-right">Keuntungan Bersih </p>
                          </div>
                          {/* Konten kolom pertama */}
                        </div>
                      </div>
                      <div key="unique-key" className="col-md-4 mb-3">
                        <div className="card">
                          <div className="col-md-20">
                            <p className="text-left">Rp 5.684.000 </p>
                            <br></br>
                            <p className="text-left">
                              gaji (1 orang) + sewa tempat + operasional
                              Rp.1.500.000 + Rp.1.000.000 + Rp.800.000
                            </p>
                            <br></br>
                          </div>
                          {/* Konten kolom kedua */}
                        </div>
                      </div>
                      <div key="unique-key" className="col-md-4 mb-3">
                        <div className="card">
                          <div className="col-md-10">
                            <p className="text-right">: Rp. 9.550.000 </p>
                            <br></br>
                            <p className="text-right">: Rp. 3.300.000 </p>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <p className="text-right">Rp. 6.250.000 </p>
                          </div>

                          {/* Konten kolom ketiga */}
                        </div>
                      </div>  
                    </div>
                  </div>
                </div>
              </div>       
                          <div className='col-12 text-center gap-2'>
                            <button id='button-link' type="submit" onClick={() => handleclick()}>Bergabung</button>
                          </div>

              <div className="row mb-4">
                <div className="col-6 col-md-4 col-lg-8 mx-auto">
                  <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
                    {PRODUCTS1.slice(2, 6).map((product) => (
                      <div key={product.id} className="col">
                        <div className="card h-100">
                          <img
                            src={product.image}
                            className="card-img-top"
                            alt="..."
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;
