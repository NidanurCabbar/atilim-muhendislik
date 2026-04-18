import Image from 'next/image';
import { contactInfo } from '@/data/projects';

export default function Footer() {
  return (
    <footer id="contact" className="bg-black px-6 md:px-12 py-7">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">

        <Image
          src="/logo.png"
          alt="Atılım Mühendislik"
          width={90}
          height={36}
          className="h-9 w-auto object-contain brightness-0 invert"
        />

        <div className="flex items-center gap-6 text-sm">
          <a
            href={`tel:${contactInfo.phone1.replace(/[\s()]/g, '')}`}
            className="text-gray-400 hover:text-white transition-colors duration-200 tracking-wide"
          >
            {contactInfo.phone1}
          </a>
          <span className="text-white/20">|</span>
          <a
            href={`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent('Merhaba, projeleriniz hakkında bilgi almak istiyorum.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-200 tracking-wide"
          >
            WhatsApp
          </a>
        </div>

        <span className="text-gray-600 text-xs tracking-wide">
          © {new Date().getFullYear()} {contactInfo.companyName}
        </span>

      </div>
    </footer>
  );
}
