'use client';
import React, { useRef, useEffect, useState } from 'react';

interface Activity {
  id: number;
  title: string;
  description: string;
  image: string;
  emoji: string;
  gridArea: string;
  color: string;
}

const activities: Activity[] = [
{
  id: 1,
  title: 'Lập Trình Scratch',
  description: 'Tạo hoạt hình và game với Scratch — ngôn ngữ lập trình trực quan dành cho trẻ em.',
  image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&q=80',
  emoji: '🐱',
  gridArea: '1 / 1 / auto / 6',
  color: 'rgba(16, 185, 129, 0.85)'
},
{
  id: 2,
  title: 'Web Development',
  description: 'Xây dựng website đầu tiên với HTML, CSS và JavaScript.',
  image: "https://images.unsplash.com/photo-1602312185236-56cee67d5fca",
  emoji: '🌐',
  gridArea: '1 / 6 / auto / 11',
  color: 'rgba(6, 182, 212, 0.85)'
},
{
  id: 3,
  title: 'Game Development',
  description: 'Tạo game 2D thú vị với Unity và C#.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e94466df-1767382623426.png",
  emoji: '🎮',
  gridArea: '2 / 1 / auto / 4',
  color: 'rgba(124, 58, 237, 0.85)'
},
{
  id: 4,
  title: 'Robotics & AI',
  description: 'Khám phá thế giới robot và trí tuệ nhân tạo.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_11d443ecd-1773844980588.png",
  emoji: '🤖',
  gridArea: '2 / 4 / auto / 7',
  color: 'rgba(245, 158, 11, 0.85)'
},
{
  id: 5,
  title: 'Digital Art & Design',
  description: 'Sáng tạo nghệ thuật số và thiết kế đồ họa.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_145abb4b7-1772534737793.png",
  emoji: '🎨',
  gridArea: '2 / 7 / auto / 11',
  color: 'rgba(239, 68, 68, 0.85)'
}];


export default function Activities() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {if (entry.isIntersecting) setVisible(true);},
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <div className="container-main" ref={ref}>
        {/* Section Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`
          }>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <span>⚡</span>
            <span>Hoạt Động Học Tập</span>
          </div>
          <h2 className="section-title mb-4">
            Khám Phá{' '}
            <span className="gradient-text">Thế Giới Công Nghệ</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Từ lập trình cơ bản đến phát triển game, thiết kế web và robotics — KidsTech Academy cung cấp hành trình học toàn diện cho trẻ em.
          </p>
        </div>

        {/* Desktop Grid */}
        <div
          className={`hidden lg:grid transition-all duration-700 delay-200 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`
          }
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(10, 1fr)',
            gridTemplateRows: 'repeat(2, 1fr)',
            gap: '20px'
          }}>
          
          {activities.map((activity) =>
          <div
            key={activity.id}
            className="relative rounded-xl3 overflow-hidden text-white cursor-pointer min-h-64 flex items-end pb-5 transition-transform duration-300 hover:-translate-y-1.5"
            style={{
              gridArea: activity.gridArea,
              backgroundImage: `linear-gradient(transparent 49.92%, ${activity.color} 99.74%), url(${activity.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
            onMouseEnter={() => setHoveredId(activity.id)}
            onMouseLeave={() => setHoveredId(null)}>
            
              {/* Default title */}
              <div
              className={`absolute bottom-6 left-6 z-10 transition-opacity duration-300 ${
              hoveredId === activity.id ? 'opacity-0' : 'opacity-100'}`
              }>
              
                <h3 className="text-2xl font-bold text-shadow">
                  {activity.emoji} {activity.title}
                </h3>
              </div>

              {/* Hover content */}
              <div
              className={`absolute inset-0 flex items-end p-5 transition-all duration-300 ${
              hoveredId === activity.id ? 'opacity-100' : 'opacity-0'}`
              }
              style={{
                background: `linear-gradient(180deg, transparent 10%, ${activity.color} 100%)`
              }}>
              
                <div className="glass rounded-xl2 p-4 w-full">
                  <h3 className="text-lg font-bold mb-2">{activity.emoji} {activity.title}</h3>
                  <p className="text-white/90 text-sm leading-relaxed mb-3">{activity.description}</p>
                  <a
                  href="#courses"
                  className="inline-flex items-center gap-1 bg-white text-primary text-sm font-semibold px-4 py-2 rounded-full hover:bg-gray-100 transition-colors">
                  
                    Tìm Hiểu Thêm
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Grid */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
          {activities.map((activity, i) =>
          <div
            key={activity.id}
            className={`relative rounded-xl2 overflow-hidden text-white min-h-48 flex items-end pb-4 transition-all duration-500 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`
            }
            style={{
              backgroundImage: `linear-gradient(transparent 30%, ${activity.color} 100%), url(${activity.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transitionDelay: `${i * 0.1}s`
            }}>
            
              <div className="px-4 pb-2">
                <h3 className="text-lg font-bold">{activity.emoji} {activity.title}</h3>
                <p className="text-white/80 text-xs">{activity.description}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}