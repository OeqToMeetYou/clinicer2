import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function SmileSection() {
  return (
    <section className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Text Content - Spans 5 columns */}
          <div className="lg:col-span-5 space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm">Hemen Randevu Alın</span>
            </div>
            
            <h2 className="text-6xl font-serif leading-tight">
              Modern Diş Hekimliğini Deneyimleyin
            </h2>
            
            <p className="text-xl text-gray-400">
            İleri teknolojiyi kişiselleştirilmiş bakım ile birleştiriyoruz. Uzman diş ekibimizle hak ettiğiniz gülüşü yaratın.
            </p>

            <div className="flex items-center space-x-8">
              
              <p className="text-gray-400">5000 den fazla Mutlu hastalarımıza katılın</p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/consultation"
                className="group bg-white text-black px-8 py-4 rounded-full hover:bg-gray-100 transition-colors inline-flex items-center"
              >
                Randevu Alın
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Image Grid - Spans 7 columns */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-4 h-full">
            <div className="space-y-4">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1606265752439-1f18756aa5fc"
                  alt="Dental procedure"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-3xl">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-semibold">Hasta Bakımı</h3>
                  <span className="text-3xl">⭐️</span>
                </div>
                <p className="text-gray-400">
                Hastalarımız tarafından olağanüstü diş bakımı ve hizmeti için 4.9/5 puanla değerlendirildik.
                </p>
              </div>
            </div>

            <div className="space-y-4 mt-12">
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-6 rounded-3xl backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-3xl font-bold mb-1">10B+</p>
                    <p className="text-sm text-gray-400">Başarılı Prosedür</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold mb-1">10+</p>
                    <p className="text-sm text-gray-400">Deneyimli Hekim</p>
                  </div>
                </div>
              </div>
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1600170311833-c2cf5280ce49"
                  alt="Modern dental equipment"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-lg font-medium">Gelişmiş Teknoloji</p>
                  <p className="text-sm text-gray-200">
                    Hassas tedaviler için son model ekipman.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}