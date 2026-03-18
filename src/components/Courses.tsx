'use client';
import React, { useRef, useEffect, useState } from 'react';

interface Course {
  id: number;
  emoji: string;
  title: string;
  subtitle: string;
  description: string;
  ageRange: string;
  duration: string;
  level: string;
  levelColor: string;
  features: string[];
  image: string;
  color: string;
  bgColor: string;
  badge: string;
  badgeColor: string;
}

const courses: Course[] = [
{
  id: 1,
  emoji: '🐱',
  title: 'Scratch Programming',
  subtitle: 'Lập Trình Kéo Thả Sáng Tạo',
  description:
  'Khóa học nhập môn lập trình hoàn hảo cho trẻ em. Sử dụng ngôn ngữ lập trình trực quan Scratch, trẻ sẽ tạo ra các hoạt hình, trò chơi và câu chuyện tương tác của riêng mình.',
  ageRange: '6 – 10 tuổi',
  duration: '8 tuần',
  level: 'Cơ Bản',
  levelColor: 'bg-success/20 text-success',
  features: [
  'Tạo hoạt hình và trò chơi',
  'Tư duy logic cơ bản',
  'Lập trình kéo thả trực quan',
  'Dự án cá nhân cuối khóa',
  'Chứng chỉ hoàn thành'],

  image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=500&q=80',
  color: 'from-[#10B981] to-[#059669]',
  bgColor: 'bg-success/10',
  badge: 'Phổ Biến Nhất',
  badgeColor: 'bg-success text-white'
},
{
  id: 2,
  emoji: '🌐',
  title: 'Web Development',
  subtitle: 'Xây Dựng Website Chuyên Nghiệp',
  description:
  'Học cách xây dựng website từ đầu với HTML, CSS và JavaScript. Trẻ sẽ hiểu cách internet hoạt động và tạo ra những trang web đẹp, chức năng đầy đủ.',
  ageRange: '10 – 16 tuổi',
  duration: '12 tuần',
  level: 'Trung Cấp',
  levelColor: 'bg-secondary/20 text-secondary',
  features: [
  'HTML, CSS, JavaScript cơ bản',
  'Thiết kế giao diện responsive',
  'Tích hợp API đơn giản',
  'Deploy website thực tế',
  'Portfolio cá nhân'],

  image: "https://images.unsplash.com/photo-1603354350317-6f7aaa5911c5",
  color: 'from-[#06B6D4] to-[#0891B2]',
  bgColor: 'bg-secondary/10',
  badge: 'Mới Nhất',
  badgeColor: 'bg-secondary text-white'
},
{
  id: 3,
  emoji: '🎮',
  title: 'Game Development',
  subtitle: 'Tạo Game Của Riêng Bạn',
  description:
  'Khóa học nâng cao giúp trẻ tạo ra những trò chơi 2D thú vị với Unity và C#. Từ thiết kế nhân vật đến lập trình gameplay, mọi thứ đều được dạy từ đầu.',
  ageRange: '12 – 16 tuổi',
  duration: '16 tuần',
  level: 'Nâng Cao',
  levelColor: 'bg-primary/20 text-primary',
  features: [
  'Unity Engine cơ bản',
  'Lập trình C# cho game',
  'Thiết kế nhân vật & màn chơi',
  'Âm thanh & hiệu ứng',
  'Publish game lên store'],

  image: "https://img.rocket.new/generatedImages/rocket_gen_img_180a86386-1773844980504.png",
  color: 'from-[#7C3AED] to-[#6D28D9]',
  bgColor: 'bg-primary/10',
  badge: 'Hot 🔥',
  badgeColor: 'bg-primary text-white'
}];


export default function Courses() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {if (entry.isIntersecting) setVisible(true);},
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="courses" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container-main relative z-10" ref={ref}>
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`
          }>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <span>📚</span>
            <span>Chương Trình Học</span>
          </div>
          <h2 className="section-title mb-4">
            Khóa Học{' '}
            <span className="gradient-text">Công Nghệ</span>
            {' '}Cho Trẻ Em
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Ba chương trình học được thiết kế riêng cho từng độ tuổi, giúp trẻ phát triển
            tư duy lập trình và kỹ năng công nghệ từ cơ bản đến nâng cao.
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, i) =>
          <div
            key={course.id}
            className={`group relative bg-white rounded-xl3 overflow-hidden shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`
            }
            style={{ transitionDelay: `${i * 0.15}s` }}>
            
              {/* Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${course.badgeColor}`}>
                  {course.badge}
                </span>
              </div>

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              
                <div className={`absolute inset-0 bg-gradient-to-t ${course.color} opacity-60`} />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-4xl mb-1">{course.emoji}</div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Level badge */}
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${course.levelColor}`}>
                  {course.level}
                </span>

                <h3 className="text-xl font-bold text-kidsText mb-1">{course.title}</h3>
                <p className="text-primary font-semibold text-sm mb-3">{course.subtitle}</p>
                <p className="text-kidsGray text-sm leading-relaxed mb-4">{course.description}</p>

                {/* Meta info */}
                <div className="flex items-center gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-1 text-kidsGray">
                    <span>👶</span>
                    <span>{course.ageRange}</span>
                  </div>
                  <div className="flex items-center gap-1 text-kidsGray">
                    <span>⏱️</span>
                    <span>{course.duration}</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {course.features.map((feature) =>
                <li key={feature} className="flex items-center gap-2 text-sm text-kidsGray">
                      <span className="w-4 h-4 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0">
                        <svg className="w-2.5 h-2.5 text-success" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      {feature}
                    </li>
                )}
                </ul>

                {/* CTA */}
                <a
                href="#register"
                className={`w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold text-white bg-gradient-to-r ${course.color} transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 shadow-md`}>
                
                  Đăng Ký Khóa Học
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-12 transition-all duration-700 delay-500 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`
          }>
          
          <p className="text-kidsGray mb-4">Chưa biết nên chọn khóa học nào?</p>
          <a href="#contact" className="btn-outline">
            Tư Vấn Miễn Phí
          </a>
        </div>
      </div>
    </section>);

}