import styles from "./page.module.css";
import Header from "./components/header/header";

export default function Home() {
  return (
    <>
      <Header />

     <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Texto */}
          <div>
            <p className="text-blue-600 uppercase font-medium mb-2">
              TU PC TU MEJOR AMIGA
            </p>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Soluciones expertas para un rendimiento óptimo
            </h2>
            <p className="text-gray-700 font-semibold mb-4">
              En Datatech, ubicado en Bahía Blanca, nos especializamos en ofrecer
              servicios técnicos de alta calidad para tu PC.
            </p>
            <p className="text-gray-600 mb-4">
              Nos dedicamos a optimizar el rendimiento de tu computadora,
              eliminar malware, instalar sistemas operativos confiables y asegurar
              el respaldo seguro de tus datos.
            </p>
            <p className="text-gray-600 mb-6">
              Con años de experiencia, estamos listos para ayudarte a resolver
              cualquier problema técnico, garantizando que tu dispositivo funcione
              de manera rápida y eficiente.
            </p>
            <p className="text-gray-800 font-semibold mb-6">
              ✨ Confía en Datatech para mejorar tu experiencia informática. 🚀
            </p>

            <a
              href="#contacto"
              className="text-blue-600 font-medium underline hover:text-blue-800"
            >
              Contáctanos
            </a>
          </div>

          {/* Imagen */}
          <div>
            <img className={styles.imgInicio}
              src="/img/inicio.jpg"
              alt="Servicio técnico Datatech"
            />
          </div>

        </div>
      </div>
    </section>
      
    </>
  );
}