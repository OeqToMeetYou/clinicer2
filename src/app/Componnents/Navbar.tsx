import Link from 'next/link';
import { MapPin } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <div className="flex flex-row items-center">
          <Link href="/" className="text-3xl font-semibold flex flex-row ">
            <img className='w-7 h-7 mr-2 mt-1' src="./wow.png" alt="" />
            Clinic'ER
          </Link>
        </div>
        
        <div className="flex items-center space-x-4">
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/pricing" className="text-gray-600 hover:text-gray-900">
            Hizmetlerimiz
            </Link>
            <Link href="/treatment" className="text-gray-600 hover:text-gray-900">
              Hakkımızda
            </Link>
            <Link href="/signup" className="text-gray-600 hover:text-gray-900">
              Giriş Yap
            </Link>
          </nav>
          
          <Link
            href="/appointment"
            className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors"
          >
            Randevu Al
          </Link>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Navbar