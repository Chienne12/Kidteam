'use client';
import React, { useRef, useEffect, useState } from 'react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
  course: string;
  courseColor: string;
}

const testimonials: Testimonial[] = [
{
  id: 1,
  name: 'Nguyễn Minh Anh',
  role: 'Phụ huynh học sinh lớp 4',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_103f5ca56-1772098876057.png",
  content:
  'Con tôi bắt đầu học Scratch tại KidsTech Academy và tôi thực sự ngạc nhiên với sự tiến bộ của bé. Chỉ sau 2 tháng, bé đã tự tạo được trò chơi đơn giản và rất tự hào về thành quả của mình. Giáo viên rất nhiệt tình và phương pháp dạy học rất phù hợp với trẻ nhỏ.',
  rating: 5,
  course: 'Scratch Programming',
  courseColor: 'bg-success/20 text-success'
},
{
  id: 2,
  name: 'Trần Văn Hùng',
  role: 'Phụ huynh học sinh lớp 7',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1faebea67-1772340489273.png",
  content:
  'Cháu nhà tôi học Web Development và đã tự xây dựng được website giới thiệu bản thân. Điều tôi ấn tượng nhất là cách KidsTech Academy dạy không chỉ kỹ thuật mà còn cả tư duy sáng tạo và giải quyết vấn đề. Đây là kỹ năng cực kỳ quan trọng cho tương lai.',
  rating: 5,
  course: 'Web Development',
  courseColor: 'bg-secondary/20 text-secondary'
},
{
  id: 3,
  name: 'Lê Thị Hoa',
  role: 'Phụ huynh học sinh lớp 9',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_174ec3a6b-1766906300206.png",
  content:
  'Con gái tôi rất đam mê game và khi biết có khóa Game Development tại KidsTech, bé đã xin học ngay. Sau 4 tháng, bé đã hoàn thành game đầu tiên và được bạn bè khen ngợi. Tôi thấy bé tự tin hơn rất nhiều và có định hướng nghề nghiệp rõ ràng hơn.',
  rating: 5,
  course: 'Game Development',
  courseColor: 'bg-primary/20 text-primary'
},
{
  id: 4,
  name: 'Phạm Đức Thành',
  role: 'Học sinh 13 tuổi',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_174ec3a6b-1766906300206.png",
  content:
  'Em học Game Development tại KidsTech và đây là quyết định tuyệt vời nhất của em. Thầy cô dạy rất dễ hiểu, bài học thú vị và em luôn mong đến giờ học. Em đã tạo được 3 game và đang lên kế hoạch cho game thứ 4. Em muốn trở thành lập trình viên game trong tương lai!',
  rating: 5,
  course: 'Game Development',
  courseColor: 'bg-primary/20 text-primary'
}];


export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {if (entry.isIntersecting) setVisible(true);},
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-kidsDark to-kidsCard relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
            'radial-gradient(circle, rgba(124,58,237,0.8) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} />
        
      </div>

      <div className="container-main relative z-10" ref={ref}>
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`
          }>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-semibold mb-4">
            <span>💬</span>
            <span>Phụ Huynh & Học Sinh Nói Gì</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Câu Chuyện{' '}
            <span className="gradient-text">Thành Công</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Hàng nghìn gia đình đã tin tưởng KidsTech Academy để đồng hành cùng con trên hành trình khám phá công nghệ.
          </p>
        </div>

        {/* Main testimonial display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Featured testimonial */}
          <div
            key={active}
            className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl3 p-8 transition-all duration-500 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`
            }>
            
            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(testimonials[active].rating)].map((_, i) =>
              <svg key={i} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              )}
            </div>

            {/* Quote */}
            <blockquote className="text-white/90 text-lg leading-relaxed mb-6 italic">
              &ldquo;{testimonials[active].content}&rdquo;
            </blockquote>

            {/* Course badge */}
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${testimonials[active].courseColor}`}>
              {testimonials[active].course}
            </span>

            {/* Author */}
            <div className="flex items-center gap-4">
              <img
                src={testimonials[active].avatar}
                alt={testimonials[active].name}
                className="w-14 h-14 rounded-full object-cover border-2 border-primary/50" />
              
              <div>
                <div className="text-white font-bold text-lg">{testimonials[active].name}</div>
                <div className="text-white/60 text-sm">{testimonials[active].role}</div>
              </div>
            </div>
          </div>

          {/* Testimonial list */}
          <div className="flex flex-col gap-4">
            {testimonials.map((t, i) =>
            <button
              key={t.id}
              onClick={() => setActive(i)}
              className={`text-left p-4 rounded-xl2 border transition-all duration-300 ${
              i === active ?
              'bg-primary/20 border-primary/50 scale-[1.02]' :
              'bg-white/5 border-white/10 hover:bg-white/10'}`
              }>
              
                <div className="flex items-center gap-3">
                  <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover flex-shrink-0" />
                
                  <div className="flex-1 min-w-0">
                    <div className="text-white font-semibold text-sm">{t.name}</div>
                    <div className="text-white/50 text-xs truncate">{t.role}</div>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(t.rating)].map((_, j) =>
                  <svg key={j} className="w-3 h-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                  )}
                  </div>
                </div>
                <p className="text-white/60 text-xs mt-2 line-clamp-2">{t.content}</p>
              </button>
            )}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2">
          {testimonials.map((_, i) =>
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`transition-all duration-300 rounded-full ${
            i === active ? 'w-6 h-2 bg-primary' : 'w-2 h-2 bg-white/30'}`
            } />

          )}
        </div>
      </div>
    </section>);

}