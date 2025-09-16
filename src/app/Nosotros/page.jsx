
import styles from "../components/header/Header.module.css";
import Header from "../components/header/header";
export default function Nosotros_() {
  return (
    <>
<Header 
  className={styles.imgParallaxNosotros} 
  showContent={true} 
  title="Quiénes somos" 
  subtitle="Conoce más sobre nuestra empresa y valores"
  button="Sobre nosotros"
/>   
    <main>
          <section>
                      <h2>Quiénes somos</h2>

                    <p>
                        Bienvenido a nuestra página de Nosotros. Somos un equipo apasionado por la tecnología y el desarrollo web.
                    </p>
                    <p>
                        Nuestra misión es ofrecer soluciones innovadoras y de alta calidad para nuestros clientes, ayudándolos a alcanzar sus objetivos digitales.
                    </p>
                    <h2>Nuestros Valores</h2>
                    <ul>
                        <li>Compromiso con la excelencia</li>
                        <li>Trabajo en equipo</li>
                        <li>Innovación constante</li>
                        <li>Transparencia y honestidad</li>
                    </ul>
                    <h2>Contacto</h2>
                    <p>
                        ¿Quieres saber más? Escríbenos a <a href="mailto:info@ejemplo.com">info@ejemplo.com</a>
                    </p>
                </section>
    </main>
    </>
  );
}