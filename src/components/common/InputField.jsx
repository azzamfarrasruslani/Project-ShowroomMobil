export default function InputField({ label, type, placeholder, onChange }) {
  return (
    <div className="mb-2">
      <label className="block font-medium text-blue-900">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-md border-2 border-gray-300 px-3 py-2 text-gray-700 focus:ring focus:ring-blue-500 focus:outline-none"
        onChange={onChange}
      />
    </div>
  );
}
