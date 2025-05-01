export default function ContactUs() {
    return (
      <div className="flex justify-center items-center min-h-screen bg-white px-4">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-100 rounded-2xl shadow-lg p-10">
          {/* Bagian Gambar */}
          <div className="relative flex justify-center items-center">
            <div className="absolute -z-10 w-[400px] h-[400px] bg-yellow-500 blur-[120px] rounded-full opacity-30"></div>
            <img
              src="image/contact.png"
              alt="Contact illustration"
              className="w-full max-w-md object-contain"
            />
          </div>
  
          {/* Form Kontak */}
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl font-bold text-gray-800">Hubungi Kami</h2>
            <p className="text-gray-600 text-base">
              Jika kamu memiliki pertanyaan, kritik, atau saran, silakan kirimkan pesanmu melalui form di bawah ini.
            </p>
  
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-800 font-medium mb-1">Nama Depan</label>
                <input
                  type="text"
                  placeholder="John"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div>
                <label className="block text-gray-800 font-medium mb-1">Nama Belakang</label>
                <input
                  type="text"
                  placeholder="Doe"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
            </div>
  
            <div>
              <label className="block text-gray-800 font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="johndoe@example.com"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
  
            <div>
              <label className="block text-gray-800 font-medium mb-1">Pesan</label>
              <textarea
                rows="5"
                placeholder="Tulis pesanmu di sini..."
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              ></textarea>
            </div>
  
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 rounded-lg transition duration-300">
              Kirim Pesan
            </button>
          </div>
        </div>
      </div>
    );
  }
  