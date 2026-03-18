'use client';
import React, { useRef, useEffect, useState } from 'react';

export default function CTABanner() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref?.current) observer?.observe(ref?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="container-main" ref={ref}>
        <div
          className={`relative rounded-3xl overflow-hidden transition-all duration-700 ${
            visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          style={{
            background: 'linear-gradient(135deg, #0F0A2E 0%, #1A0A4E 50%, #0F172A 100%)',
            minHeight: '400px',
          }}
        >
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
            {/* Stars */}
            {[...Array(30)]?.map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white"
                style={{
                  width: `${Math.random() * 3 + 1}px`,
                  height: `${Math.random() * 3 + 1}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.5 + 0.2,
                }}
              />
            ))}
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-16 md:py-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-semibold mb-6">
              <span>🌟</span>
              <span>Bắt Đầu Hành Trình</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-3xl">
              Sẵn Sàng Cho Con Khám Phá{' '}
              <span className="gradient-text">Thế Giới Công Nghệ</span>?
            </h2>

            <p className="text-white/80 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
              Tham gia cùng 5,000+ học sinh đang học lập trình tại KidsTech Academy. Đăng ký ngay để nhận buổi học thử miễn phí!
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#register"
                className="btn-accent text-base px-8 py-4 rounded-xl font-bold"
              >
                Đăng Ký Học Thử Miễn Phí
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="#courses"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-white border-2 border-white/30 hover:bg-white/10 transition-all duration-200"
              >
                Xem Tất Cả Khóa Học
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-6 mt-10">
              {[
                { icon: '📞', text: 'Hỗ trợ 24/7' },
                { icon: '🎁', text: 'Học thử miễn phí' },
                { icon: '💰', text: 'Hoàn tiền 100%' },
                { icon: '🏆', text: 'Chứng chỉ quốc tế' },
              ]?.map((badge) => (
                <div key={badge?.text} className="flex items-center gap-2 text-white/70 text-sm">
                  <span>{badge?.icon}</span>
                  <span>{badge?.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
