import React from "react";
import Header from "../components/header/header";
import styles from "../components/header/Header.module.css";
import stylesContacto from "./contacto.module.css";

export default function Contacto_() {
  return (
    <>
      <Header
        className={styles.imgParallaxContacto}
        showContent={true}
        title="Contacto"
        subtitle="Conoce más sobre nuestra empresa y valores"
        button="Contáctanos"
      />

      <section className="page-section" id="contact">
        <div className="container container__Contact px-4 px-lg-5 mt-50 mb-50">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-8 col-xl-6 text-center">
              <h2 className="mt-0 titleContacto">Contáctanos</h2>
              <hr className="divider" />
              <p className="text-muted mb-5 contacto_p">
                ¿Querés dejarnos un mensaje? ¡Te vamos a responder lo antes posible! También podés mandarnos un email, llamarnos o hablarnos por Whatsapp.
              </p>
            </div>
          </div>

       <div className="row gx-4 gx-lg-5 justify-content-center mb-5">
  <div className="col-lg-6">
    <form name="frmContacto" id="contactForm" action="sendbymail.php" method="post">
      
      {/* Nombre completo */}
      <div className="form-floating mb-3">
        <input
          className="form-control"
          id="name"
          type="text"
          name="name"
          placeholder="Nombre y Apellido"
          required
        />
        <label htmlFor="name">Nombre completo</label>
      </div>

      {/* Email */}
      <div className="form-floating mb-3">
        <input
          className="form-control"
          id="email"
          type="email"
          name="mail"
          placeholder="ejemplo@correo.com"
          required
        />
        <label htmlFor="email">Email</label>
      </div>

      {/* Teléfono */}
      <div className="form-floating mb-3">
        <input
          className="form-control"
          id="phone"
          type="tel"
          name="phone"
          placeholder="(123) 456-7890"
          required
        />
        <label htmlFor="phone">Número de teléfono</label>
      </div>

      {/* Selección de servicio */}
      <div className="form-floating mb-3">
        <select className="form-select" id="service" name="service" required>
          <option value="" disabled selected>Seleccione un servicio</option>
          <option value="reparacion">Reparación de PCs - $1000</option>
          <option value="mantenimiento">Mantenimiento - $500</option>
          <option value="software">Instalación de Software - $800</option>
          <option value="cambio_bateria">Cambio de Batería - $600</option>
        </select>
        <label htmlFor="service">Servicio requerido</label>
      </div>

      {/* Descripción del problema */}
      <div className="form-floating mb-3">
        <textarea
          className="form-control"
          id="problemDescription"
          name="problemDescription"
          placeholder="Describe el problema de tu PC"
          style={{ height: "120px" }}
          required
        ></textarea>
        <label htmlFor="problemDescription">Descripción del problema</label>
      </div>

      {/* Botón enviar */}
      <div className="d-grid">
        <button className="btn btn-primary" id="submitButton" type="submit">
          Solicitar turno
        </button>
      </div>
    </form>
  </div>
</div>

          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-4 text-center mb-5 mb-lg-0 containerCelular">
              <i className="bi-phone fs-2 mb-3 text-muted"></i>
              <div className="contactoNumero">
                <a className="contactoNumero" target="_blank" href="https://api.whatsapp.com/send?phone=542923568520">
                  +54 2923 659885
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="backgroundMap">
            <div className={` ${stylesContacto.containerContacto}`}>
                <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <h2 className={stylesContacto.titleDondeEstamos}>¿Dónde Estamos?</h2>
                    <hr className="divider" />
                  <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.9535208581347!2d-62.26515322321646!3d-38.71887608630892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95eda34d2add1675%3A0x992fa4544367f154!2sBelgrano%2093%2C%20B8000%20Bah%C3%ADa%20Blanca%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1757455338774!5m2!1ses!2sar"
                  width="1300"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                </div>
                </div>
            </div>
        </div>
      </section>
    </>
  );
}