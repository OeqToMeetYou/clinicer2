import { ShieldCheck, Stethoscope, Clock, Award } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'Temiz',
    description: 'Sizin Sağlınızı ön plana koyan temizlik prosedürleri.',
  },
  {
    icon: Stethoscope,
    title: 'Deneyimli Hekimler',
    description: 'Yıllarca Deneyimi olan Diş Hekimleri.',
  },
  {
    icon: Clock,
    title: 'Hızlı Hizmet',
    description: 'Size en müsait zamanda.',
  },
  {
    icon: Award,
    title: 'En iyi',
    description: "Isparta'nın en iyi Diş Kliniği.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-6xl font-serif font-semibold mb-6">Neden Biz?</h2>
          <p className="text-xl text-gray-600">
            Size En iyi Deneyimi sunabilmek için son teknoloji ve özeni birleştiriyoruz.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group"
            >
              <div className="bg-gray-100 border-2 border-black rounded-3xl p-8 transition-transform duration-300 group-hover:-translate-y-2">
                <div className="inline-flex p-3 rounded-2xl bg-black mb-6">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-black rounded-3xl p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-4xl font-serif mb-6">
                Gülüşünüzü Değiştirmeye Hazırmısınız?
              </h3>
              <p className="text-lg text-white/90 mb-8">
Diş bakım ihtiyaçları için bizi tercih eden binlerce memnun hastaya katılın. Bugün randevunuzu alın ve farkı yaşayın.
              </p>
              <button className="bg-white text-black px-8 py-4 rounded-full hover:bg-gray-100 transition-colors">
                Randevu Alın
              </button>
            </div>
            <div className="grid grid-cols-2 gap-6 lg:gap-8">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white">
                <p className="text-3xl font-semibold mb-2">98%</p>
                <p className="text-white/100">Müşteri Memnuniyeti</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white">
                <p className="text-3xl font-semibold mb-2">10+</p>
                <p className="text-white/100">Yetenekli Hekimler</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white">
                <p className="text-3xl font-semibold mb-2">10B+</p>
                <p className="text-white/100">Tamamlanan Seans</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white">
                <p className="text-3xl font-semibold mb-2">100%</p>
                <p className="text-white/100">Steril ve Güvenli Klinik Ortamı</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}