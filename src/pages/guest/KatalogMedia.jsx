export default function KatalogMedia() {
    const fotoData = [
        { id: 1, src: "/images/mobil1.jpg", alt: "Toyota Avanza 2020" },
        { id: 2, src: "/images/mobil2.jpg", alt: "Honda Jazz RS 2019" },
        { id: 3, src: "/images/mobil3.jpg", alt: "Suzuki Ertiga 2021" },
        { id: 4, src: "/images/mobil4.jpg", alt: "Daihatsu Xenia 2018" },
    ];

    const videoData = [
        { id: 1, src: "https://www.youtube.com/embed/VIDEO_ID_1", title: "Review Toyota Avanza 2020" },
        { id: 2, src: "https://www.youtube.com/embed/VIDEO_ID_2", title: "Test Drive Honda Jazz RS" },
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="mb-6 text-center text-2xl font-bold">Katalog Media (Galeri Video & Foto)</h2>

            {/* Galeri Foto */}
            <div className="mb-10">
                <h3 className="mb-4 text-xl font-semibold">Galeri Foto</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {fotoData.map((foto) => (
                        <div key={foto.id} className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                            <img src={foto.src} alt={foto.alt} className="object-cover w-full h-48" />
                            <div className="p-2 text-center text-sm font-medium">{foto.alt}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Galeri Video */}
            <div>
                <h3 className="mb-4 text-xl font-semibold">Galeri Video</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {videoData.map((video) => (
                        <div key={video.id} className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                            <div className="aspect-w-16 aspect-h-9">
                                <iframe 
                                    src={video.src}
                                    title={video.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full"
                                ></iframe>
                            </div>
                            <div className="p-2 text-center text-sm font-medium">{video.title}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
