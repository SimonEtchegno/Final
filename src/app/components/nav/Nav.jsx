"use client";
import Link from "next/link";
import { useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    
        <nav className={styles.nav}>
      <Link href="/">
        <img src="/img/logo1.png" alt="Logo" className={styles.logo} />
      </Link>
    
      <ul  className={`${styles.navLinks} ${isOpen ? styles.open : ""}  font-semibold rounded-md shadow-md;`}>
        <li><Link href="/">Inicio</Link></li>
        <li><Link href="/Nosotros">Nosotros</Link></li>
        <li><Link href="/Servicios">Servicios</Link></li>
        <li><Link href="/Contacto">Contacto</Link></li>
      </ul>
    </nav>
  );
}
