import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export default function BentoGrid() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Top Card */}
          <div className="bg-gray-100 rounded-3xl p-8">
            <h2 className="text-5xl font-sans font-medium mb-4">
                Beceri ve Özenle Gülüşünüzü Tasarlıyoruz.
            </h2>
            <div className="space-y-2 text-gray-800">
              <p>Clinic'ER Özel Diş Kliniği</p>
              <p>Sermet Mahallesi </p>
              <p>Gülkent lisesi karşısı.</p>
            </div>
          </div>

          {/* Middle Card */}
          <div className="bg-[#FDF6F0] rounded-3xl p-8">
            <h3 className="text-3xl font-sans font-semibold mb-6">
              Isparta'nın<br />
              En iyi<br />
              Özel Diş Kliniği
            </h3>
            <div className="flex justify-between items-center">
              <Link href="/about" className="inline-flex items-center text-gray-900 hover:underline">
                Bizimle İletişime Geçin <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/start"
                className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors"
              >
                Randevu Al
              </Link>
            </div>
          </div>

          {/* Bottom Carousel */}
          <div className="grid grid-cols-2 gap-6">
            <div className="relative bg-[#F5F5F5] rounded-3xl overflow-hidden aspect-square">
              <Image
                src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80"
                alt="Dental X-ray"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative bg-[#F5F5F5] rounded-3xl overflow-hidden aspect-square">
              <Image
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80"
                alt="Dental Treatment"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="relative bg-[#F5F5F5] rounded-3xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?auto=format&fit=crop&q=80"
            alt="Happy Patient"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 space-y-6">
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl">
              <h4 className="text-xl font-semibold mb-2">Diş İmplantları</h4>
              <p className="text-gray-600">
              Eksik dişler için implantların dayanıklılıkları, fonksiyonellikleri ve doğal görünümleri sayesinde "Altın Standart" olduğu sürekli olarak duyuluyor.
              </p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl">
              <h4 className="text-xl font-semibold mb-2">Zirkonyum Sabit Protez</h4>
              <p className="text-gray-600">
              İster bir dişi ister birden fazla eksik dişi değiştirmek istiyor olun, Zirkonyum Sabit Protezimiz, geliştirilmiş çiğneme fonksiyonu sağlayan bir çözümdür.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}