export default function SelectField({ label, options, onChange }) {
  return (
    <div className="mb-2">
      <label className="block font-medium text-blue-900">{label}</label>
      <select
        className="w-full rounded-md border-2 border-gray-300 px-3 py-2 text-gray-700 focus:ring focus:ring-blue-500 focus:outline-none"
        onChange={onChange}
        defaultValue=""
      >
        <option value="" disabled selected>
          Pilih opsi
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
