import React from "react";
import "../styles/styles.css";

const Userdelete = () => {
  const data = JSON.parse(localStorage.getItem("data"));
  console.log(data);
  return (
    <section className="background-radial-gradient overflow-hidden">
      <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
        <div className="row gx-lg-5 align-items-center mb-5">
          <div className="col mb-5 mb-lg-0 contents">
            <h1 className="my-5 display-5 fw-bold ls-tight">
              Romería 2022 <br />
              <span>Gobierno de Zapopan</span>
            </h1>
            <p className="mb-4 logint-text">
              Tu cuenta está inactiva, contacta a tu coordinador.
            </p>
            <a
              class="btn btn-dark"
              data-toggle="collapse"
              href="/"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Regresar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Userdelete;
