
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, MessageSquare, HeartPulse } from 'lucide-react';
import { SERVICES, WHATSAPP_NUMBER } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom duration-500">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">خدمات طب الأسنان لدينا</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            نقدم مجموعة كاملة من رعاية الأسنان لجميع أفراد الأسرة، 
            من خلال الجمع بين الخبرة الطبية والراحة التكنولوجية.
          </p>
        </div>

        <div className="space-y-24">
          {SERVICES.map((service, index) => (
            <div key={service.id} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="w-full lg:w-1/2">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-teal-100 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity blur-2xl"></div>
                  <img 
                    src={service.image} 
                    alt={service.titleAr} 
                    className="relative w-full h-[400px] object-cover rounded-3xl shadow-xl transition-transform duration-500 hover:scale-[1.02]"
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl p-3 bg-white shadow-md rounded-2xl">{service.icon}</span>
                  <h2 className="text-3xl font-bold text-gray-900">{service.titleAr}</h2>
                </div>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  {service.description}
                </p>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-3 text-gray-600">
                    <CheckCircle2 className="text-teal-500" size={20} />
                    <span>تكنولوجيا متطورة</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-600">
                    <CheckCircle2 className="text-teal-500" size={20} />
                    <span>نتائج طبيعية ودائمة</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-600">
                    <CheckCircle2 className="text-teal-500" size={20} />
                    <span>علاج سريع وبدون ألم</span>
                  </li>
                </ul>
                <div className="flex gap-4">
                  <Link to="/contact" className="px-8 py-3 bg-teal-600 text-white rounded-xl font-bold hover:bg-teal-700 transition-all">
                    حجز موعد
                  </Link>
                  <a 
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('مرحباً د. يوسف، أرغب في الحصول على معلومات حول ' + service.titleAr)}`}
                    className="px-8 py-3 bg-white text-teal-600 border border-teal-600 rounded-xl font-bold hover:bg-teal-50 transition-all flex items-center gap-2"
                  >
                    <MessageSquare size={18} /> واتساب
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action footer */}
        <div className="mt-32 p-12 bg-teal-600 rounded-3xl text-white text-center shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 left-0 p-8 opacity-10">
            <HeartPulse size={200} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">هل أنت جاهز لابتسامتك الجديدة؟</h2>
          <p className="text-teal-50 text-lg mb-8 max-w-xl mx-auto relative z-10">
            لا تنتظر أكثر للعناية بصحة فمك وأسنانك. الدكتور يوسف بولعيش في خدمتك.
          </p>
          <Link to="/contact" className="inline-block px-10 py-4 bg-white text-teal-600 rounded-full font-bold text-lg hover:bg-teal-50 transition-all shadow-lg hover:scale-105 relative z-10">
            ابدأ الآن
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
