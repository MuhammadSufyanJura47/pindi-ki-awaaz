"use client";

import Image from "next/image";
import { useState } from "react";

const assistantUrl =
  "https://cdn.botpress.cloud/webchat/v3.6/shareable.html?configUrl=https://files.bpcontent.cloud/2026/05/04/16/20260504161500-11DR38KS.json";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar" aria-label="Primary navigation">
      <a className="logo" href="#top" onClick={closeMenu} aria-label="Pindi Ki Awaaz home">
        <Image
          src="/logo.png"
          alt="Pindi Ki Awaaz"
          className="siteLogo"
          width={40}
          height={40}
          priority
        />
        <span>Pindi Ki Awaaz</span>
      </a>

      <div className="navLinks">
        <a href="#features">Features</a>
        <a href="#about">About</a>
        <a href="#impact">Impact</a>
        <a className="navCta" href={assistantUrl} target="_blank" rel="noreferrer">
          Open Assistant
        </a>
      </div>

      <button
        type="button"
        className={`menuButton ${isOpen ? "open" : ""}`}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
        aria-controls="mobile-nav"
        onClick={() => setIsOpen((current) => !current)}
      >
        <span />
        <span />
        <span />
      </button>

      <div
        id="mobile-nav"
        className={`mobileNav ${isOpen ? "open" : ""}`}
        aria-hidden={!isOpen}
      >
        <a href="#features" onClick={closeMenu}>Features</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#impact" onClick={closeMenu}>Impact</a>
        <a href={assistantUrl} target="_blank" rel="noreferrer" onClick={closeMenu}>
          Open Assistant
        </a>
      </div>
    </nav>
  );
}
