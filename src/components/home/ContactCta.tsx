import { contactInfo } from '@/data/projects';

export default function ContactCta() {
  return (
    <section className="bg-white px-4 md:px-8 py-16 border-t border-gray-400">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 leading-tight">
          Ayrıcalıklı bir yaşam sizi bekliyor
        </h2>

        <p className="text-gray-400 text-sm md:text-base mb-10">
          Proje hakkında detaylı bilgi ve özel satış fırsatları için bizimle iletişime geçin.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          <a
            href={`tel:${contactInfo.phone1.replace(/[\s()]/g, '')}`}
            className="flex items-center gap-4 bg-white border border-gray-100 shadow-md rounded-2xl px-6 py-5 hover:shadow-lg transition-shadow text-left"
          >
            <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.65 3.44 2 2 0 0 1 3.62 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.94a16 16 0 0 0 6.15 6.15l.62-.94a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div>
              <p className="font-bold text-black mb-1">Telefon</p>
              <p className="text-gray-500 text-sm">{contactInfo.phone1}</p>
              <p className="text-gray-500 text-sm">{contactInfo.phone2}</p>
            </div>
          </a>

          <a
            href={`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent('Merhaba, projeleriniz hakkında bilgi almak istiyorum.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-white border border-gray-100 shadow-md rounded-2xl px-6 py-5 hover:shadow-lg transition-shadow text-left"
          >
            <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
              </svg>
            </div>
            <div>
              <p className="font-bold text-black mb-1">Whatsapp</p>
              <p className="text-gray-500 text-sm">Satış uzmanımızdan</p>
              <p className="text-gray-500 text-sm">anında bilgi alın.</p>
            </div>
          </a>

        </div>
      </div>
    </section>
  );
}
