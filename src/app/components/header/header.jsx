import styles from "./Header.module.css";

export default function Header({ className, showContent = true, title, subtitle, button }) {
  return (
    <header className={`${styles.imgParallax} ${className || ""}`}>
      {showContent && (
        <div className="relative z-10 flex items-center h-full">
          <div className="container mx-auto px-6 md:px-12 lg:px-20">
            <h1 className="text-5xl font-bold text-white mb-4">{title || "Datatech"}</h1>
            <p className="text-xl text-gray-200 mb-6">{subtitle || "Soluciones tecnológicas para tu PC"}</p>
            <a
              href="#servicios"
              className="inline-block text-decoration-none px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow-md transition"
            >{button || "Ver Servicios"}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}