import { useEffect, useState } from "react";

export default function LanguageSelector({ changeLanguage, currentLang, languages }) {
  const [selectedLang, setSelectedLang] = useState(currentLang || "en");

  useEffect(() => {
    const savedLang = localStorage.getItem("language");
    if (savedLang && languages.includes(savedLang)) {
      setSelectedLang(savedLang);
      changeLanguage(savedLang); // Set ulang bahasa saat reload
    }
  }, [languages, changeLanguage]);

  const handleChange = (e) => {
    const newLang = e.target.value;
    setSelectedLang(newLang);
    localStorage.setItem("language", newLang); // Simpan pilihan
    changeLanguage(newLang);
      window.location.reload(); //   refresh otomatis setelah ganti bahasa
  };

  return (
    <select
      className="rounded-lg bg-gray-200 px-3 py-1 text-sm font-bold text-gray-800"
      value={selectedLang}
      onChange={handleChange}
    >
      {languages.map((lng) => (
        <option key={lng} value={lng} className="bg-white text-black">
          {lng.toUpperCase()}
        </option>
      ))}
    </select>
  );
}
