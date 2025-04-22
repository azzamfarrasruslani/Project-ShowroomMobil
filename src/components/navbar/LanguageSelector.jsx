export default function LanguageSelector({ changeLanguage, currentLang, languages }) {
    return (
      <select
        className="rounded-lg bg-gray-200 px-3 py-1 text-sm font-bold text-gray-800"
        value={currentLang}
        onChange={(e) => changeLanguage(e.target.value)}
      >
        {languages.map((lng) => (
          <option key={lng} value={lng} className="bg-white text-black">
            {lng.toUpperCase()}
          </option>
        ))}
      </select>
    );
  }
  