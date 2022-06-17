import React, { useState, useEffect } from "react";
import "./App.css";
import imgFlecha from "./assets/arrow-left-long-solid.svg";
import imgHand from "./assets/money.png";
import store from "./assets/tienda.png";
import axios from "axios";
import * as myConstClass from "./constant";
import Alert from "./component/Alert";

const App = () => {
  const url = myConstClass.urlApi;
  const identity = myConstClass.nit;
  const [data, setData] = useState([]);

  const posActivo = async () => {
    await axios
      .post(url, {
        nit: identity,
      })
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    posActivo();
  }, []);

  return (
    <div className="container">
      <div className="row d-none d-sm-block" style={{ marginTop: "45px" }}>
        <div className="col-md-auto d-flex justify-content-start offset-md-3">
          <img
            className="imgBack"
            style={{ width: "20px" }}
            src={imgFlecha}
            alt="back"
          />
        </div>
      </div>

      <div className="row justify-content-md-center">
        <div className="col-md-12">
          <h2 className="text-center" style={{ fontWeight: 1000 }}>
            {data?.nombre}
          </h2>
        </div>
      </div>

      <div className="row justify-content-md-center">
        <div className="col-md-12">
          <h6 className="text-center" style={{ color: "gray" }}>
            NIT:{data?.nit}
          </h6>
        </div>
      </div>

      <div className="row justify-content-md-center">
        <div className=" col-md-3 col-sm-12 d-flex justify-content-between">
          <h6
            className="text-center"
            style={{ display: "inline", fontSize: "12px", margin: "auto" }}
          >
            <b>Capa:{data?.capa}</b> | <b>Segmento:{data?.segmento}</b>
          </h6>
        </div>
      </div>

      <div className="row justify-content-md-center">
        <div className="col-md-6 col-lg-6 col-sm-12 d-none d-md-block">
          <ul
            className="nav nav-tabs d-flex justify-content-between flex-nowrap"
            style={{ marginTop: "25px" }}
          >
            <li className="nav-item">
              <a className="nav-link active" href={{}}>
                Operación
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={{}}>
                Indicadores
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={{}}>
                Información Cliente
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div
        className="row container justify-content-md-center"
        style={{ marginTop: "30px" }}
      >
        <div className="col-md-6 col-lg-6 col-sm-12 ">
          <h6 style={{ color: "#007bff" }}>
            Indique la linea de crédito que quiere reconsidera
          </h6>
        </div>
      </div>

      <div
        className="row container justify-content-md-center"
        style={{ marginTop: "30px" }}
      >
        <div className="d-flex justify-content-center">
          <div
            className="card"
            style={{ width: "140px", padding: "0px", margin: "5px" }}
          >
            <div className="card-body">
              <img
                src={imgHand}
                alt="hand"
                style={{ width: "100%", objectFit: "contain" }}
              />
              <div className="text-center">
                <h6 style={{ marginTop: "25px", marginBottom: "0" }}>
                  Cartera Ordinaria
                </h6>
              </div>
            </div>
            <div className="card-header text-center">
              <h6 style={{ color: "#007bff" }}>Continuar</h6>
            </div>
          </div>

          <div
            className="card"
            style={{ width: "140px", padding: "0px", margin: "5px" }}
          >
            <div className="card-body">
              <img
                src={store}
                alt="store"
                style={{ width: "100%", objectFit: "contain" }}
              />
              <div className="text-center">
                <h6
                  style={{
                    color: "gray",
                    marginTop: "25px",
                    marginBottom: "0",
                  }}
                >
                  Leasing{" "}
                </h6>
              </div>
            </div>
            <div className="card-header text-center">
              <h6 style={{ color: "gray" }}>Continuar</h6>
            </div>
          </div>
        </div>
      </div>
      <Alert />
    </div>
  );
};

export default App;
