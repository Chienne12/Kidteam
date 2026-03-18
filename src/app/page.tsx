'use client';
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Activities from '@/components/Activities';
import Courses from '@/components/Courses';
import Testimonials from '@/components/Testimonials';
import CTABanner from '@/components/CTABanner';
import RegistrationForm from '@/components/RegistrationForm';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="font-quicksand">
      {/* feature/header */}
      <Header />

      {/* feature/hero */}
      <Hero />

      {/* Stats bar */}
      <Stats />

      {/* About / Activities */}
      <Activities />

      {/* feature/course */}
      <Courses />

      {/* feature/testimonial */}
      <Testimonials />

      {/* CTA Banner */}
      <CTABanner />

      {/* feature/form */}
      <RegistrationForm />

      {/* feature/footer */}
      <Footer />
    </main>
  );
}
