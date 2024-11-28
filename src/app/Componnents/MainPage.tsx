import React from 'react'
import { Star, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin } from 'lucide-react';


const MainPage = () => {
  return (
    <div>
       <div className="relative min-h-screen pt-16 pb-32 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-black text-black" />
                ))}
              </div>
              
              <h1 className="text-8xl font-serif tracking-tight text-clip">
                Clinic'
                <br />
                Er
              </h1>
              
              <p className="border-t pt-5 border-gray-200 text-xl text-gray-900 max-w-lg">
                Yeterki Siz Gülmeye devam edin.
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <div className=" bg-gray-100 rounded-full text-center p-2">
                <MapPin className=' text-black'/>
              </div>
              <div>
                <p className="text-lg text-gray-800">
                Sermet Mahallesi Gülkent Lisesi Karşısındayız. 
                </p>
              </div>
              
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/appointment"
                className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors"
              >
                Randevu Al
              </Link>
              <Link
                href="/plans"
                className="border border-gray-200 px-8 py-4 rounded-full hover:bg-gray-50 transition-colors"
              >
                Hizmetleri Görüntüle
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8 border-t">
              <div className="flex items-center space-x-4">
                <Star className="h-8 w-8" />
                <div>
                  <p className="text-2xl font-semibold">5.0</p>
                  <p className="text-gray-600">Değerli Hizmet</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Users className="h-8 w-8" />
                <div>
                  <p className="text-2xl font-semibold">2000+</p>
                  <p className="text-gray-600">Fazla Hasta</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-square overflow-hidden rounded-2xl">
            <img className='object-cover' src="./canavar.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default MainPage