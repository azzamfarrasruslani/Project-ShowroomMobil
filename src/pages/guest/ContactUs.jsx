import { useState } from "react";
import { kontakAPI } from "../../services/kontakAPI";
import AlertBox from "../../components/common/AlertBox";

export default function ContactUs() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [dataForm, setDataForm] = useState({
    nama_depan: "",
    nama_belakang: "",
    email: "",
    pesan: "",
  });

  // Handle perubahan nilai input form
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");
      setSuccess("");
      await kontakAPI.create(dataForm);
      setSuccess("Kontak berhasil ditambahkan!");
      setDataForm({ nama_depan: "", nama_belakang: "", email: "", pesan: "" });
      setTimeout(() => setSuccess(""), 3000);
    } catch (err) {
      setError(`Terjadi kesalahan: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4">
      <div className="grid w-full max-w-6xl grid-cols-1 gap-8 rounded-2xl bg-gray-100 p-10 shadow-lg md:grid-cols-2">
        {/* Bagian Gambar */}
        <div className="relative flex items-center justify-center">
          <div className="absolute -z-10 h-[400px] w-[400px] rounded-full bg-yellow-500 opacity-30 blur-[120px]"></div>
          <img
            src="image/contact.png"
            alt="Contact illustration"
            className="w-full max-w-md object-contain"
          />
        </div>

        {/* Form Kontak */}
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl font-bold text-gray-800">Hubungi Kami</h2>
          <p className="text-base text-gray-600">
            Jika kamu memiliki pertanyaan, kritik, atau saran, silakan kirimkan
            pesanmu melalui form di bawah ini.
          </p>
          {error && <AlertBox type="error">{error}</AlertBox>}

          {success && <AlertBox type="success">{success}</AlertBox>}
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="mb-1 block font-medium text-gray-800">
                  Nama Depan
                </label>
                <input
                  type="text"
                  name="nama_depan"
                  onChange={handleChange}
                  placeholder="John"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="mb-1 block font-medium text-gray-800">
                  Nama Belakang
                </label>
                <input
                  type="text"
                  name="nama_belakang"
                  onChange={handleChange}
                  placeholder="Doe"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                  required
                />
              </div>
            </div>

            <div>
              <label className="mb-1 block font-medium text-gray-800">
                Email
              </label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                placeholder="johndoe@example.com"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="mb- block font-medium text-gray-800">
                Pesan
              </label>
              <textarea
                rows="5"
                name="pesan"
                onChange={handleChange}
                placeholder="Tulis pesanmu di sini..."
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full mt-3 rounded-lg bg-yellow-500 py-3 font-bold text-white transition duration-300 hover:bg-yellow-600"
            >
              {loading ? "Mohon Tunggu..." : "Kirim Pesan"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
