
import React, { useState } from 'react';
import { Send, MapPin, Phone, Instagram, Clock, MessageCircle } from 'lucide-react';
import { DR_NAME, WHATSAPP_NUMBER, PHONE_VOICE, INSTAGRAM_URL, MAPS_URL, SERVICES } from '../constants';

const Contact: React.FC = () => {
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
    
    // Construct WhatsApp message in Arabic
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
    
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-in fade-in duration-500">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">حجز موعد</h1>
          <p className="text-lg text-gray-600">املأ النموذج أدناه وأرسله مباشرة عبر واتساب.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Column */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">معلومات العيادة</h2>
              <div className="space-y-6">
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors group">
                  <div className="p-3 bg-teal-100 text-teal-600 rounded-xl group-hover:bg-teal-600 group-hover:text-white transition-all">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">عنواننا</h3>
                    <p className="text-gray-600">عيادة طب الأسنان د. يوسف بولعيش، تطوان، المغرب</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-2xl">
                  <div className="p-3 bg-teal-100 text-teal-600 rounded-xl">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">الهاتف</h3>
                    <p className="text-gray-600">{PHONE_VOICE}</p>
                    <p className="text-gray-600">واتساب: {WHATSAPP_NUMBER}+</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl">
                  <div className="p-3 bg-teal-100 text-teal-600 rounded-xl">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">ساعات العمل</h3>
                    <p className="text-gray-600">الاثنين - السبت: 09:00 - 18:00</p>
                    <p className="text-gray-600">الأحد: مغلق</p>
                  </div>
                </div>

                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors group">
                  <div className="p-3 bg-teal-100 text-teal-600 rounded-xl group-hover:bg-pink-600 group-hover:text-white transition-all">
                    <Instagram size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">إنستغرام</h3>
                    <p className="text-gray-600">@dr.boulaichyoussef</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="p-8 bg-teal-50 rounded-3xl text-right">
              <h3 className="text-xl font-bold text-teal-900 mb-4">لماذا تحجز هنا؟</h3>
              <ul className="space-y-3 text-teal-800">
                <li className="flex items-center gap-2">• تأكيد فوري عبر واتساب</li>
                <li className="flex items-center gap-2">• تذكيرات تلقائية قبل الموعد</li>
                <li className="flex items-center gap-2">• دعم مباشر مخصص</li>
              </ul>
            </div>
          </div>

          {/* Form Column */}
          <div className="bg-gray-50 p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">الاسم الكامل</label>
                  <input
                    required
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                    placeholder="اسمك بالكامل"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">رقم الهاتف</label>
                  <input
                    required
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                    placeholder="06..."
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">البريد الإلكتروني</label>
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all text-left"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">الخدمة المطلوبة</label>
                <select
                  required
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all bg-white"
                >
                  <option value="">اختر الخدمة</option>
                  {SERVICES.map(s => (
                    <option key={s.id} value={s.titleAr}>{s.titleAr}</option>
                  ))}
                  <option value="استشارة أخرى">استشارة أخرى</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">تاريخ الموعد</label>
                  <input
                    required
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all text-left"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">الوقت</label>
                  <input
                    required
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all text-left"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-green-600 text-white rounded-xl font-bold text-lg hover:bg-green-700 transition-all shadow-lg flex items-center justify-center gap-3 hover:scale-[1.01] active:scale-95"
              >
                <MessageCircle size={24} />
                إرسال عبر واتساب
              </button>
              
              <p className="text-center text-xs text-gray-400">
                بإرسال هذا النموذج، سيتم توجيهك إلى واتساب لإكمال طلبك مع العيادة.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
