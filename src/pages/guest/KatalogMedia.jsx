import Mobil3DViewer from "../../components/guest/katalogMedia/Mobil3DViewer";

export default function KatalogMedia() {
  const fotoData = [
    { id: 1, src: "/images/mobil1.jpg", alt: "Toyota Avanza 2020" },
    { id: 2, src: "/images/mobil2.jpg", alt: "Honda Jazz RS 2019" },
    { id: 3, src: "/images/mobil3.jpg", alt: "Suzuki Ertiga 2021" },
    { id: 4, src: "/images/mobil4.jpg", alt: "Daihatsu Xenia 2018" },
  ];

  const videoData = [
    {
      id: 1,
      src: "https://www.youtube.com/embed/o5-woMYpsM4?si=-4UIREUmsL9ZetzR",
      title: "Review Toyota Veloz",
    },
    {
      id: 2,
      src: "https://www.youtube.com/embed/Po9MIxR5nHM?si=SPNAvsfLYjsONv-Y",
      title: "Test Drive Honda Jazz RS",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 px-4 py-12 md:px-10">
      {/* Header Section */}
      <div className="mb-12 text-center">
        <div className="inline-block rounded-full bg-yellow-100 px-4 py-1 text-sm font-medium text-yellow-700">
          📸 Galeri Mobilin
        </div>
        <h1 className="mt-4 text-4xl font-extrabold text-gray-900 sm:text-5xl">
          Katalog Media
        </h1>
        <p className="mx-auto mt-2 max-w-xl text-lg text-gray-600">
          Lihat dokumentasi foto dan video mobil terbaik dari Mobilin. Review,
          test drive, dan fitur menarik lainnya.
        </p>
      </div>

      {/* Foto Gallery */}
      <section className="mb-16">
        <h2 className="mb-6 inline-block border-b-2 border-yellow-400 pb-1 text-2xl font-semibold text-gray-800">
          📷 Galeri Foto
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {fotoData.map((foto) => (
            <div
              key={foto.id}
              className="group relative overflow-hidden rounded-xl bg-white shadow-md transition hover:shadow-xl"
            >
              <img
                src={foto.src}
                alt={foto.alt}
                className="h-48 w-full transform object-cover transition duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 w-full bg-black/50 p-2 text-center text-sm font-medium text-white">
                {foto.alt}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video Gallery */}
      <section>
        <h2 className="mb-6 inline-block border-b-2 border-yellow-400 pb-1 text-2xl font-semibold text-gray-800">
          🎥 Galeri Video
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {videoData.map((video) => (
            <div
              key={video.id}
              className="overflow-hidden rounded-xl bg-white shadow-md transition hover:shadow-xl"
            >
              <div className="h-[420px] w-full">
                <iframe
                  src={video.src}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full rounded-t-xl"
                ></iframe>
              </div>

              <div className="bg-gray-50 p-3 text-center text-sm font-medium text-gray-700">
                {video.title}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3D Viewer Section */}
      <section className="mt-16">
        <h2 className="mb-6 inline-block border-b-2 border-yellow-400 pb-1 text-2xl font-semibold text-gray-800">
          🧊 Model 3D Mobil
        </h2>
        <p className="mb-4 text-gray-600">
          Putar dan jelajahi tampilan 3D mobil secara interaktif.
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <Mobil3DViewer />
        <Mobil3DViewer />
        <Mobil3DViewer /></div>
      </section>
    </div>
  );
}
