
import React, { useState } from 'react';
import { ArrowLeft, Star, ShieldCheck, Users, HeartPulse, Send, MapPin, Phone, Instagram, Clock, MessageCircle, CheckCircle2, MessageSquare } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { SERVICES, MAPS_IFRAME, MAPS_URL, DR_NAME, WHATSAPP_NUMBER, PHONE_VOICE, INSTAGRAM_URL } from './constants';

const App: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = encodeURIComponent(
      `مرحباً د. يوسف بولعيش،\n\n` +
      `أرغب في حجز موعد :\n` +
      `👤 الاسم الكامل: ${formData.fullName}\n` +
      `📞 الهاتف: ${formData.phone}\n` +
      `📧 البريد الإلكتروني: ${formData.email}\n` +
      `🦷 الخدمة: ${formData.service}\n` +
      `📅 التاريخ: ${formData.date}\n` +
      `⏰ الوقت: ${formData.time}\n\n` +
      `يرجى تأكيد التوافر. شكراً.`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-teal-100 selection:text-teal-900 bg-white overflow-x-hidden">
      <Navbar />
      
      <main className="flex-grow">
        {/* HERO SECTION */}
        <section id="home" className="relative min-h-screen flex items-center pt-20 bg-gradient-to-br from-teal-50 via-white to-blue-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10 py-12">
            <div className="text-right animate-in fade-in slide-in-from-right duration-700">
              <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-extrabold mb-8">
                <Star size={16} fill="currentColor" />
                <span>عيادة طب الأسنان الموثوقة بتطوان</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-gray-900 leading-[1.2] mb-8">
                استرجع <span className="text-teal-600">ابتسامة</span> أحلامك مع د. يوسف
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-xl ml-auto leading-relaxed font-medium">
                نقدم لكم أرقى خدمات طب الأسنان في تطوان بأحدث التقنيات العالمية وبدون ألم. راحتكم وجمال ابتسامتكم هي غايتنا الأولى.
              </p>
              <div className="flex flex-col sm:flex-row-reverse gap-4">
                <button onClick={scrollToContact} className="px-10 py-5 bg-teal-600 text-white rounded-2xl font-black text-xl hover:bg-teal-700 transition-all hover:shadow-2xl flex items-center justify-center gap-3 group active:scale-95">
                  حجز موعد الآن
                  <ArrowLeft className="group-hover:-translate-x-2 transition-transform" />
                </button>
                <a href="#services" className="px-10 py-5 bg-white text-gray-900 border-2 border-gray-200 rounded-2xl font-black text-xl hover:border-teal-600 hover:text-teal-600 transition-all flex items-center justify-center active:scale-95">
                  استكشف خدماتنا
                </a>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute -top-20 -left-20 w-96 h-96 bg-teal-200 rounded-full blur-[120px] opacity-40 animate-pulse"></div>
              <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-200 rounded-full blur-[120px] opacity-40"></div>
              <img 
                src="https://images.pexels.com/photos/3845806/pexels-photo-3845806.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                alt="طبيب أسنان محترف" 
                className="relative rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] z-20 object-cover w-full h-[650px] border-8 border-white"
              />
            </div>
          </div>
        </section>

        {/* STATS SECTION */}
        <section className="py-16 bg-white border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: 'تقييم جوجل ⭐', value: '+15' },
                { label: 'سنوات خبرة', value: '+10' },
                { label: 'رضا المرضى', value: '100%' },
                { label: 'خدمات متخصصة', value: '+4' }
              ].map((stat, i) => (
                <div key={i} className="text-center p-8 rounded-3xl bg-gray-50/50 hover:bg-teal-50 transition-colors duration-500">
                  <div className="text-4xl sm:text-5xl font-black text-teal-600 mb-2">{stat.value}</div>
                  <div className="text-gray-500 font-bold text-sm sm:text-base">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-5xl font-black text-gray-900 mb-6">خدماتنا المتميزة</h2>
              <div className="w-24 h-2 bg-teal-600 mx-auto rounded-full"></div>
              <p className="mt-8 text-lg text-gray-600 max-w-2xl mx-auto font-medium">نجمع بين الفن والعلم لنمنحكم أفضل النتائج العلاجية والتجميلية</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {SERVICES.map((service) => (
                <div key={service.id} className="group flex flex-col bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500">
                  <div className="h-[300px] overflow-hidden relative">
                    <img src={service.image} alt={service.titleAr} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span className="absolute bottom-6 right-6 text-5xl bg-white/90 backdrop-blur p-4 rounded-2xl shadow-xl">{service.icon}</span>
                  </div>
                  <div className="p-10 flex flex-col flex-grow text-right">
                    <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-4">{service.titleAr}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8 flex-grow font-medium">{service.description}</p>
                    <div className="flex flex-wrap gap-4 justify-end">
                      <button onClick={scrollToContact} className="px-6 py-3 bg-teal-600 text-white rounded-xl font-bold hover:bg-teal-700 transition-all active:scale-95 shadow-lg shadow-teal-100">احجز موعد</button>
                      <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('مرحباً، أرغب في استفسار عن ' + service.titleAr)}`} className="px-6 py-3 bg-white text-teal-600 border-2 border-teal-100 rounded-xl font-bold hover:bg-teal-50 transition-all flex items-center gap-2">
                        <MessageSquare size={20} /> واتساب
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="py-24 bg-teal-600 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
            <div className="text-center group">
              <div className="w-20 h-20 bg-white/20 backdrop-blur rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:bg-white group-hover:text-teal-600 transition-all duration-500 transform group-hover:rotate-12">
                <ShieldCheck size={40} />
              </div>
              <h3 className="text-2xl font-black mb-4">جودة طبية عالمية</h3>
              <p className="text-teal-50 text-lg font-medium">نلتزم بأعلى معايير التعقيم والجودة الطبية لسلامتكم.</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-white/20 backdrop-blur rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:bg-white group-hover:text-teal-600 transition-all duration-500 transform group-hover:-rotate-12">
                <Users size={40} />
              </div>
              <h3 className="text-2xl font-black mb-4">عناية شخصية فائقة</h3>
              <p className="text-teal-50 text-lg font-medium">كل مريض لدينا هو فرد من العائلة، نهتم بأدق تفاصيل راحتكم.</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-white/20 backdrop-blur rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:bg-white group-hover:text-teal-600 transition-all duration-500 transform group-hover:rotate-12">
                <HeartPulse size={40} />
              </div>
              <h3 className="text-2xl font-black mb-4">تقنيات بدون ألم</h3>
              <p className="text-teal-50 text-lg font-medium">نستخدم أحدث وسائل التخدير والتقنيات لضمان تجربة مريحة.</p>
            </div>
          </div>
        </section>

        {/* CONTACT & MAP SECTION */}
        <section id="contact" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-5xl font-black text-gray-900 mb-6">احجز موعدك اليوم</h2>
              <div className="w-24 h-2 bg-teal-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Form */}
              <div className="bg-white p-8 sm:p-12 rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-100 order-2 lg:order-1">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-right">
                    <div>
                      <label className="block text-sm font-black text-gray-700 mb-3">الاسم الكامل</label>
                      <input required type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-4 focus:ring-teal-500/10 transition-all font-bold" placeholder="أدخل اسمك" />
                    </div>
                    <div>
                      <label className="block text-sm font-black text-gray-700 mb-3">رقم الهاتف</label>
                      <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-4 focus:ring-teal-500/10 transition-all font-bold" placeholder="06..." />
                    </div>
                  </div>
                  <div className="text-right">
                    <label className="block text-sm font-black text-gray-700 mb-3">الخدمة المطلوبة</label>
                    <select required name="service" value={formData.service} onChange={handleChange} className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-4 focus:ring-teal-500/10 transition-all font-bold appearance-none bg-white">
                      <option value="">اختر الخدمة...</option>
                      {SERVICES.map(s => <option key={s.id} value={s.titleAr}>{s.titleAr}</option>)}
                      <option value="استشارة">استشارة عامة</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-right">
                    <div>
                      <label className="block text-sm font-black text-gray-700 mb-3">التاريخ المفضل</label>
                      <input required type="date" name="date" value={formData.date} onChange={handleChange} className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-4 focus:ring-teal-500/10 transition-all font-bold" />
                    </div>
                    <div>
                      <label className="block text-sm font-black text-gray-700 mb-3">الوقت المفضل</label>
                      <input required type="time" name="time" value={formData.time} onChange={handleChange} className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-4 focus:ring-teal-500/10 transition-all font-bold" />
                    </div>
                  </div>
                  <button type="submit" className="w-full py-5 bg-green-600 text-white rounded-2xl font-black text-xl hover:bg-green-700 transition-all shadow-xl shadow-green-100 flex items-center justify-center gap-4 active:scale-95">
                    <MessageCircle size={28} />
                    إرسال الطلب عبر واتساب
                  </button>
                </form>
              </div>

              {/* Info & Map */}
              <div className="space-y-12 order-1 lg:order-2 text-right">
                <div id="location" className="space-y-8">
                  <h3 className="text-3xl font-black text-gray-900 mb-8">معلومات التواصل</h3>
                  <div className="space-y-6">
                    <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 p-6 bg-white rounded-3xl hover:bg-teal-50 transition-all group shadow-sm">
                      <div className="flex-grow">
                        <h4 className="font-black text-gray-900">موقع العيادة</h4>
                        <p className="text-gray-500 font-bold">تطوان، المغرب (قرب المحطة الطرقية القديمة)</p>
                      </div>
                      <div className="p-4 bg-teal-100 text-teal-600 rounded-2xl group-hover:bg-teal-600 group-hover:text-white transition-all">
                        <MapPin size={24} />
                      </div>
                    </a>
                    <div className="flex items-center gap-6 p-6 bg-white rounded-3xl shadow-sm">
                      <div className="flex-grow">
                        <h4 className="font-black text-gray-900">أرقامنا</h4>
                        <p className="text-gray-500 font-bold text-lg">{PHONE_VOICE} / {WHATSAPP_NUMBER}+</p>
                      </div>
                      <div className="p-4 bg-teal-100 text-teal-600 rounded-2xl">
                        <Phone size={24} />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="rounded-[2.5rem] overflow-hidden shadow-2xl h-[400px] border-8 border-white group">
                  <iframe src={MAPS_IFRAME} width="100%" height="100%" loading="lazy" className="border-0 grayscale group-hover:grayscale-0 transition-all duration-700" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
