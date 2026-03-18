'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
  { label: 'Về Chúng Tôi', href: '#about' },
  { label: 'Khóa Học', href: '#courses' },
  { label: 'Đánh Giá', href: '#testimonials' },
  { label: 'Liên Hệ', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-kidsDark/95 backdrop-blur-md shadow-lg shadow-primary/20'
          : 'bg-transparent'
      }`}
    >
      <div className="container-main">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <div className="w-full h-full rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-200">
                <span className="text-white font-bold text-lg md:text-xl">K</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✦</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg md:text-xl leading-tight tracking-tight">
                KidsTech
              </span>
              <span className="text-accent text-xs font-semibold tracking-wider uppercase">Academy</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks?.map((link) => (
              <a key={link?.label} href={link?.href} className="nav-link text-sm">
                {link?.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button className="text-white/80 hover:text-white font-semibold text-sm transition-colors duration-200 px-3 py-2">
              Đăng Nhập
            </button>
            <a
              href="#register"
              className="btn-accent text-sm px-5 py-2.5 rounded-lg"
            >
              Đăng Ký Ngay
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`block h-0.5 bg-white transition-all duration-300 ${
                  mobileOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block h-0.5 bg-white transition-all duration-300 ${
                  mobileOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 bg-white transition-all duration-300 ${
                  mobileOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            mobileOpen ? 'max-h-96 pb-4' : 'max-h-0'
          }`}
        >
          <nav className="flex flex-col gap-2 pt-2 border-t border-white/10">
            {navLinks?.map((link) => (
              <a
                key={link?.label}
                href={link?.href}
                className="text-white/80 hover:text-white font-semibold py-2 px-3 rounded-lg hover:bg-white/10 transition-all duration-200"
                onClick={() => setMobileOpen(false)}
              >
                {link?.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 mt-2 pt-2 border-t border-white/10">
              <button className="text-white/80 font-semibold py-2 px-3 text-left hover:bg-white/10 rounded-lg transition-colors">
                Đăng Nhập
              </button>
              <a
                href="#register"
                className="btn-accent text-center py-2.5 rounded-lg"
                onClick={() => setMobileOpen(false)}
              >
                Đăng Ký Ngay
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
