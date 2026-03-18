'use client';
import React, { useRef, useEffect, useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  course: string;
  age: string;
  message: string;
}

const courseOptions = [
  { value: '', label: 'Chọn khóa học...' },
  { value: 'scratch', label: 'Scratch Programming (6-10 tuổi)' },
  { value: 'web', label: 'Web Development (10-16 tuổi)' },
  { value: 'game', label: 'Game Development (12-16 tuổi)' },
  { value: 'consult', label: 'Tư vấn miễn phí' },
];

export default function RegistrationForm() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    course: '',
    age: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = 'Vui lòng nhập họ tên';
    if (!formData.email.trim()) {
      newErrors.email = 'Vui lòng nhập email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email không hợp lệ';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Vui lòng nhập số điện thoại';
    } else if (!/^[0-9]{9,11}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Số điện thoại không hợp lệ';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="register" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container-main relative z-10" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Info */}
          <div
            className={`transition-all duration-700 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              <span>📝</span>
              <span>Đăng Ký Học</span>
            </div>

            <h2 className="section-title mb-4">
              Bắt Đầu Hành Trình{' '}
              <span className="gradient-text">Công Nghệ</span>
              {' '}Của Con
            </h2>

            <p className="text-kidsGray text-lg leading-relaxed mb-8">
              Đăng ký ngay hôm nay để nhận tư vấn miễn phí và bắt đầu hành trình khám phá công nghệ cùng con. Chúng tôi sẽ liên hệ trong vòng 24 giờ.
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-8">
              {[
                { icon: '🎁', title: 'Buổi Học Thử Miễn Phí', desc: 'Trải nghiệm 1 buổi học trước khi quyết định' },
                { icon: '👨‍🏫', title: 'Giáo Viên 1-1', desc: 'Hỗ trợ cá nhân hóa cho từng học sinh' },
                { icon: '📱', title: 'Học Online & Offline', desc: 'Linh hoạt theo lịch của gia đình' },
                { icon: '🏆', title: 'Chứng Chỉ Quốc Tế', desc: 'Công nhận bởi các tổ chức giáo dục' },
              ].map((benefit) => (
                <div key={benefit.title} className="flex items-start gap-4 p-4 bg-white rounded-xl2 shadow-sm hover:shadow-card transition-shadow duration-200">
                  <span className="text-2xl flex-shrink-0">{benefit.icon}</span>
                  <div>
                    <div className="font-bold text-kidsText">{benefit.title}</div>
                    <div className="text-kidsGray text-sm">{benefit.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact info */}
            <div className="flex flex-wrap gap-4">
              <a href="tel:0901234567" className="flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors">
                <span className="text-xl">📞</span>
                <span>0901 234 567</span>
              </a>
              <a href="mailto:hello@kidstech.vn" className="flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors">
                <span className="text-xl">📧</span>
                <span>hello@kidstech.vn</span>
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div
            className={`transition-all duration-700 delay-200 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="bg-white rounded-xl3 shadow-card-hover p-8 border border-gray-100">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="text-6xl mb-4 animate-bounce-slow">🎉</div>
                  <h3 className="text-2xl font-bold text-kidsText mb-3">Đăng Ký Thành Công!</h3>
                  <p className="text-kidsGray mb-6">
                    Cảm ơn bạn đã đăng ký. Đội ngũ của chúng tôi sẽ liên hệ với bạn trong vòng 24 giờ để tư vấn và sắp xếp buổi học thử miễn phí.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                      onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', course: '', age: '', message: '' }); }}
                      className="btn-outline"
                    >
                      Đăng Ký Thêm
                    </button>
                    <a href="#courses" className="btn-primary">
                      Xem Khóa Học
                    </a>
                  </div>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-kidsText mb-2">Đăng Ký Tư Vấn Miễn Phí</h3>
                  <p className="text-kidsGray text-sm mb-6">Nhập thông tin để nhận tư vấn và buổi học thử miễn phí</p>

                  <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-semibold text-kidsText mb-1.5">
                        Họ và Tên Phụ Huynh <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Nguyễn Văn A"
                        className={`form-input ${
                          errors.name ? 'border-red-400 focus:border-red-400 focus:ring-red-200' : ''
                        }`}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-semibold text-kidsText mb-1.5">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="email@example.com"
                        className={`form-input ${
                          errors.email ? 'border-red-400 focus:border-red-400 focus:ring-red-200' : ''
                        }`}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-semibold text-kidsText mb-1.5">
                        Số Điện Thoại <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="0901 234 567"
                        className={`form-input ${
                          errors.phone ? 'border-red-400 focus:border-red-400 focus:ring-red-200' : ''
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                      )}
                    </div>

                    {/* Course & Age row */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-kidsText mb-1.5">
                          Khóa Học
                        </label>
                        <select
                          name="course"
                          value={formData.course}
                          onChange={handleChange}
                          className="form-input bg-white"
                        >
                          {courseOptions.map((opt) => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-kidsText mb-1.5">
                          Tuổi Của Con
                        </label>
                        <input
                          type="number"
                          name="age"
                          value={formData.age}
                          onChange={handleChange}
                          placeholder="6 - 16"
                          min="6"
                          max="16"
                          className="form-input"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-semibold text-kidsText mb-1.5">
                        Tin Nhắn (Tùy Chọn)
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Nhập câu hỏi hoặc yêu cầu của bạn..."
                        rows={3}
                        className="form-input resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full btn-accent py-4 text-base font-bold rounded-xl disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Đang Gửi...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          Đăng Ký Ngay – Miễn Phí
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </span>
                      )}
                    </button>

                    <p className="text-center text-xs text-kidsGray">
                      Bằng cách đăng ký, bạn đồng ý với{' '}
                      <a href="#" className="text-primary hover:underline">chính sách bảo mật</a>{' '}
                      của chúng tôi.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
