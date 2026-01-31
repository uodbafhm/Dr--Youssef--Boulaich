
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Star, ShieldCheck, Users, HeartPulse } from 'lucide-react';
import { SERVICES, MAPS_IFRAME, MAPS_URL } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-teal-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
          <div className="animate-in fade-in slide-in-from-right duration-700">
            <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-1 rounded-full text-sm font-bold mb-6">
              <Star size={16} fill="currentColor" />
              <span>عيادة طب الأسنان الموثوقة</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
              استرجع <span className="text-teal-600">ابتسامة</span> أحلامك
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
              يرحب بكم الدكتور يوسف بولعيش وفريقه لتقديم رعاية أسنان حديثة، بدون ألم وشخصية في مدينة تطوان.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="px-8 py-4 bg-teal-600 text-white rounded-xl font-bold text-lg hover:bg-teal-700 transition-all hover:shadow-xl flex items-center justify-center gap-2 group">
                حجز موعد
                <ArrowLeft className="group-hover:-translate-x-1 transition-transform" />
              </Link>
              <Link to="/services" className="px-8 py-4 bg-white text-gray-900 border-2 border-gray-200 rounded-xl font-bold text-lg hover:border-teal-600 hover:text-teal-600 transition-all flex items-center justify-center">
                خدماتنا
              </Link>
            </div>
          </div>
          <div className="relative hidden lg:block animate-in fade-in zoom-in duration-1000">
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-teal-100 rounded-full blur-3xl opacity-60"></div>
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-60"></div>
            <img 
              src="https://images.pexels.com/photos/3845806/pexels-photo-3845806.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="طبيب أسنان محترف" 
              className="relative rounded-3xl shadow-2xl z-20 object-cover w-full h-[600px]"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-2xl bg-teal-50">
              <div className="text-4xl font-bold text-teal-600 mb-2">+15</div>
              <div className="text-gray-600 font-bold">تقييم جوجل ⭐</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-teal-50">
              <div className="text-4xl font-bold text-teal-600 mb-2">+10</div>
              <div className="text-gray-600 font-bold">سنوات من الخبرة</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-teal-50">
              <div className="text-4xl font-bold text-teal-600 mb-2">100%</div>
              <div className="text-gray-600 font-bold">رضا المرضى</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-teal-50">
              <div className="text-4xl font-bold text-teal-600 mb-2">+4</div>
              <div className="text-gray-600 font-bold">خدمات متخصصة</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">خدماتنا المتخصصة</h2>
            <div className="w-20 h-1 bg-teal-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group">
                <div className="h-48 overflow-hidden">
                  <img src={service.image} alt={service.titleAr} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <span className="text-2xl mb-4 block">{service.icon}</span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.titleAr}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/services" className="inline-flex items-center gap-2 text-teal-600 font-bold hover:underline">
              عرض جميع التفاصيل <ArrowLeft size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 mb-6">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4">جودة معتمدة</h3>
            <p className="text-gray-600">أحدث المعدات وتعقيم صارم لضمان سلامتك الكاملة.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-6">
              <Users size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4">المريض أولاً</h3>
            <p className="text-gray-600">استماع دقيق لاقتراح العلاج الأنسب لاحتياجاتك.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-red-600 mb-6">
              <HeartPulse size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4">بدون ألم</h3>
            <p className="text-gray-600">نهج لطيف وتقنيات حديثة لراحة مثالية أثناء العلاج.</p>
          </div>
        </div>
      </section>

      {/* Map Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">أين تجدنا؟</h2>
          <div className="rounded-3xl overflow-hidden shadow-2xl h-[450px]">
            <iframe 
              src={MAPS_IFRAME} 
              width="100%" 
              height="100%" 
              loading="lazy" 
              className="border-0 grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="mt-8 inline-block text-teal-600 font-bold underline">
            فتح في خرائط جوجل
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
