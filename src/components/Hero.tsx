'use client';
import React, { useState, useEffect, useCallback } from 'react';

interface Slide {
  id: number;
  badge: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
  secondaryText: string;
  secondaryHref: string;
  image: string;
  imageAlt: string;
  accentColor: string;
  bgGradient: string;
}

const slides: Slide[] = [
{
  id: 1,
  badge: '🚀 Công Nghệ Tương Lai',
  title: 'Khơi Dậy Đam Mê Lập Trình Cho Trẻ Em Việt Nam',
  subtitle:
  'KidsTech Academy mang đến chương trình học lập trình sáng tạo, giúp trẻ 6–16 tuổi tự tin bước vào thế giới công nghệ với Scratch, Web và Game Development.',
  ctaText: 'Đăng Ký Học Ngay',
  ctaHref: '#register',
  secondaryText: 'Xem Khóa Học',
  secondaryHref: '#courses',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1cf093981-1767095221425.png",
  imageAlt: 'Trẻ em học lập trình',
  accentColor: '#F59E0B',
  bgGradient: 'from-[#0F0A2E] via-[#1A0A4E] to-[#0F172A]'
},
{
  id: 2,
  badge: '🎮 Game Development',
  title: 'Biến Ý Tưởng Thành Game Thực Sự Của Riêng Bạn',
  subtitle:
  'Học cách tạo ra những trò chơi thú vị từ đầu. Trẻ em sẽ học tư duy logic, sáng tạo và kỹ năng giải quyết vấn đề thông qua việc tự tay làm game.',
  ctaText: 'Khám Phá Game Dev',
  ctaHref: '#courses',
  secondaryText: 'Tìm Hiểu Thêm',
  secondaryHref: '#about',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_10c71497b-1765535720136.png",
  imageAlt: 'Học game development',
  accentColor: '#06B6D4',
  bgGradient: 'from-[#0F0A2E] via-[#0A1A4E] to-[#0F172A]'
},
{
  id: 3,
  badge: '🌐 Web Development',
  title: 'Xây Dựng Website Đầu Tiên Của Bạn Chỉ Trong 8 Tuần',
  subtitle:
  'Từ HTML, CSS đến JavaScript — trẻ em sẽ học cách tạo ra những trang web đẹp và chức năng. Chương trình được thiết kế đặc biệt cho lứa tuổi 10–16.',
  ctaText: 'Bắt Đầu Học Web',
  ctaHref: '#courses',
  secondaryText: 'Xem Demo',
  secondaryHref: '#testimonials',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_122b6b583-1768035845573.png",
  imageAlt: 'Học web development',
  accentColor: '#10B981',
  bgGradient: 'from-[#0F0A2E] via-[#0A2E1A] to-[#0F172A]'
}];


export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrent(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section
      id="hero"
      className={`relative min-h-screen bg-gradient-to-br ${slide.bgGradient} overflow-hidden transition-all duration-700`}>
      
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) =>
        <div
          key={i}
          className="particle absolute rounded-full opacity-20"
          style={{
            width: `${Math.random() * 8 + 4}px`,
            height: `${Math.random() * 8 + 4}px`,
            background: i % 3 === 0 ? '#7C3AED' : i % 3 === 1 ? '#06B6D4' : '#F59E0B',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
            animationDuration: `${Math.random() * 3 + 3}s`
          }} />

        )}
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
            'linear-gradient(rgba(124,58,237,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }} />
        
        {/* Glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      {/* Prev/Next Buttons */}
      <button
        onClick={prev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
        aria-label="Previous">
        
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
        aria-label="Next">
        
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Main Content */}
      <div className="container-main relative z-10 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full py-24 md:py-32">
          {/* Text Content */}
          <div
            key={current}
            className="text-white animate-fade-in-up">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-semibold mb-6">
              <span>{slide.badge}</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {slide.title.split(' ').slice(0, 3).join(' ')}{' '}
              <span className="gradient-text">
                {slide.title.split(' ').slice(3, 6).join(' ')}
              </span>{' '}
              {slide.title.split(' ').slice(6).join(' ')}
            </h1>

            {/* Subtitle */}
            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
              {slide.subtitle}
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-6 mb-8">
              {[
              { value: '5,000+', label: 'Học Sinh' },
              { value: '50+', label: 'Giáo Viên' },
              { value: '98%', label: 'Hài Lòng' }].
              map((stat) =>
              <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-white/60 text-sm">{stat.label}</div>
                </div>
              )}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href={slide.ctaHref}
                className="btn-accent text-base px-8 py-4 rounded-xl font-bold shadow-btn-accent">
                
                {slide.ctaText}
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href={slide.secondaryHref}
                className="btn-white text-base px-8 py-4 rounded-xl font-bold">
                
                {slide.secondaryText}
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-lg">
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-spin-slow" style={{ margin: '-20px' }} />
              <div className="absolute inset-0 rounded-full border border-secondary/20 animate-spin-slow" style={{ margin: '-40px', animationDirection: 'reverse' }} />

              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src={slide.image}
                  alt={slide.imageAlt}
                  className="w-full h-80 object-cover" />
                
                <div className="absolute inset-0 bg-gradient-to-t from-kidsDark/60 to-transparent" />
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 glass rounded-2xl px-4 py-3 animate-float">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🎯</span>
                  <div>
                    <div className="text-white font-bold text-sm">Học Vui</div>
                    <div className="text-white/60 text-xs">Hiệu Quả</div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 glass rounded-2xl px-4 py-3 animate-float-delay">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">⭐</span>
                  <div>
                    <div className="text-white font-bold text-sm">4.9/5 Sao</div>
                    <div className="text-white/60 text-xs">Đánh Giá</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((_, i) =>
        <button
          key={i}
          onClick={() => goTo(i)}
          className={`hero-dot ${i === current ? 'active' : ''}`}
          aria-label={`Slide ${i + 1}`} />

        )}
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 80L60 74.7C120 69.3 240 58.7 360 53.3C480 48 600 48 720 53.3C840 58.7 960 69.3 1080 69.3C1200 69.3 1320 58.7 1380 53.3L1440 48V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z"
            fill="#F8FAFC" />
          
        </svg>
      </div>
    </section>);

}