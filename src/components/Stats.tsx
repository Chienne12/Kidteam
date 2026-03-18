'use client';
import React, { useRef, useEffect, useState } from 'react';

interface StatItem {
  value: string;
  label: string;
  icon: string;
  color: string;
}

const stats: StatItem[] = [
  { value: '5,000+', label: 'Học Sinh Đã Tốt Nghiệp', icon: '🎓', color: 'from-primary to-primary-dark' },
  { value: '50+', label: 'Giáo Viên Chuyên Nghiệp', icon: '👨‍🏫', color: 'from-secondary to-secondary-dark' },
  { value: '3', label: 'Khóa Học Chuyên Sâu', icon: '📚', color: 'from-accent to-accent-dark' },
  { value: '98%', label: 'Học Sinh Hài Lòng', icon: '⭐', color: 'from-success to-success-dark' },
];

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 bg-gradient-to-br from-kidsDark to-kidsCard relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container-main relative z-10" ref={ref}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl2 p-6 text-center transition-all duration-500 hover:-translate-y-1 hover:bg-white/10 ${
                visible ? 'animate-fade-in-up opacity-100' : 'opacity-0'
              }`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.value}
              </div>
              <div className="text-white/70 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
