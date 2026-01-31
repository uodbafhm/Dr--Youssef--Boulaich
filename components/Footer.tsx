
import React from 'react';
import { Instagram, MapPin, Phone, Clock, MessageSquare } from 'lucide-react';
import { WHATSAPP_NUMBER, PHONE_VOICE, INSTAGRAM_URL, MAPS_URL } from '../constants';

const Footer: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-950 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-16 text-right">
        {/* About */}
        <div>
          <h3 className="text-3xl font-black text-teal-400 mb-8">د. يوسف بولعيش</h3>
          <p className="text-gray-400 leading-relaxed mb-8 text-lg font-medium">
            نحن هنا لنرسم الابتسامة التي طالما حلمتم بها، باستخدام أحدث التقنيات وأفضل الخبرات الطبية في مدينة تطوان الجميلة.
          </p>
          <div className="flex justify-end gap-4">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 rounded-2xl hover:bg-teal-600 transition-all hover:-translate-y-2">
              <Instagram size={24} />
            </a>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 rounded-2xl hover:bg-green-600 transition-all hover:-translate-y-2">
              <MessageSquare size={24} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-black mb-8 border-r-4 border-teal-500 pr-4">روابط سريعة</h4>
          <ul className="space-y-5 text-lg">
            <li><a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="text-gray-400 hover:text-teal-400 transition-colors">الرئيسية</a></li>
            <li><a href="#services" onClick={(e) => scrollToSection(e, '#services')} className="text-gray-400 hover:text-teal-400 transition-colors">خدماتنا</a></li>
            <li><a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="text-gray-400 hover:text-teal-400 transition-colors">حجز موعد</a></li>
            <li><a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition-colors">موقعنا على الخريطة</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-black mb-8 border-r-4 border-teal-500 pr-4">معلومات الاتصال</h4>
          <ul className="space-y-6">
            <li className="flex flex-row-reverse items-start gap-4">
              <MapPin className="text-teal-400 mt-1 flex-shrink-0" size={24} />
              <span className="text-gray-400 text-lg">عيادة طب الأسنان د. يوسف بولعيش، تطوان، المغرب</span>
            </li>
            <li className="flex flex-row-reverse items-center gap-4">
              <Phone className="text-teal-400 flex-shrink-0" size={24} />
              <span className="text-gray-400 text-lg">{PHONE_VOICE} / {WHATSAPP_NUMBER}+</span>
            </li>
            <li className="flex flex-row-reverse items-center gap-4">
              <Clock className="text-teal-400 flex-shrink-0" size={24} />
              <span className="text-gray-400 text-lg">الاثنين - السبت: 09:00 - 18:00</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="mt-20 pt-8 border-t border-white/5 text-center text-gray-500 text-base font-bold">
        <p>&copy; {new Date().getFullYear()} د. يوسف بولعيش. جميع الحقوق محفوظة.</p>
        <p className="mt-2 text-sm text-gray-600">تصميم وبناء بأرقى المعايير الحديثة</p>
      </div>
    </footer>
  );
};

export default Footer;
