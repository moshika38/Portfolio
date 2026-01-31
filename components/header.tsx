"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Education", href: "/education" },
    { name: "Resume", href: "/resume" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="flex justify-center items-center sticky top-0 h-[80px] lg:h-[100px] z-50 w-full backdrop-blur-md">
      <div className="w-[90%] lg:w-[77%] flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-full text-black font-bold text-1xl shadow-lg shadow-primary/20">
            PM
          </div>
          <h1 className="text-lg lg:text-[20px] text-white font-medium hidden sm:block">
            Pamoth Moshika | Portfolio
          </h1>
        </div>

        {/* Mobile Page Title Indicator */}
        <div className="lg:hidden absolute left-1/2 -translate-x-1/2 pointer-events-none">
          <motion.p
            key={pathname}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20"
          >
            {navLinks.find((link) => link.href === pathname)?.name ||
              "Portfolio"}
          </motion.p>
        </div>

        {/* Desktop Nav */}
        <nav className="bg-card-dark/80 withBorder px-8 py-3 rounded-2xl hidden lg:block backdrop-blur-sm">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`${pathname === link.href ? "text-primary" : "text-white/70"} text-[14px] font-medium transition-all hover:text-primary relative group`}
                >
                  {link.name}
                  {pathname === link.href && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-px bg-primary"
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-3 bg-card-dark withBorder rounded-xl text-white hover:text-primary transition-colors"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-[90px] left-1/2 -translate-x-1/2 w-[90%] bg-card-dark withBorder rounded-3xl p-6 lg:hidden z-50 shadow-2xl backdrop-blur-xl"
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`${pathname === link.href ? "bg-primary text-black" : "text-white/70 hover:bg-white/5"} block px-6 py-4 rounded-2xl text-[16px] font-black uppercase tracking-widest transition-all`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
