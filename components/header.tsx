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
    <header className="flex justify-center items-center sticky top-0 h-[80px] lg:h-[100px] z-50 w-full">
      {/* Glass backdrop for header */}
      <div className="absolute inset-0 bg-background/70 backdrop-blur-xl border-b border-white/[0.03]" />

      <div className="w-[90%] lg:w-[77%] flex justify-between items-center relative z-10">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-full text-black font-bold text-sm shadow-lg shadow-primary/20 group-hover:shadow-primary/30 transition-shadow duration-300">
            PM
          </div>
          <h1 className="text-lg lg:text-[20px] text-white font-medium hidden sm:block">
            Pamoth Moshika <span className="text-text-muted font-light">| Portfolio</span>
          </h1>
        </Link>

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
        <nav className="bg-card-dark/80 border border-white/[0.04] px-3 py-2 rounded-2xl hidden lg:block backdrop-blur-sm">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`${pathname === link.href ? "text-primary bg-primary/[0.06]" : "text-white/50 hover:text-white/80 hover:bg-white/[0.03]"} text-[13px] font-medium transition-all duration-300 relative px-5 py-2.5 rounded-xl block`}
                >
                  {link.name}
                  {pathname === link.href && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-1 left-5 right-5 h-[2px] bg-primary/60 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
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
          className="lg:hidden p-3 bg-card-dark border border-white/[0.04] rounded-xl text-white hover:text-primary transition-all duration-300 hover:border-primary/10"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-[90px] left-1/2 -translate-x-1/2 w-[90%] bg-card-dark/95 border border-white/[0.05] rounded-3xl p-4 lg:hidden z-50 shadow-2xl backdrop-blur-2xl"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`${pathname === link.href ? "bg-primary/[0.08] text-primary border-primary/10" : "text-white/60 hover:bg-white/[0.03] hover:text-white/90 border-transparent"} block px-5 py-4 rounded-2xl text-[13px] font-semibold tracking-wide transition-all duration-200 border`}
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
