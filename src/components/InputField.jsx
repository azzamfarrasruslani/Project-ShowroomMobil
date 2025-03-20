export default function InputField({ label, type, placeholder, onChange }) {
  return (
    <div className="mb-2">
      <label className="block text-blue-900 font-medium">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full border-2 border-gray-300 text-gray-700 py-2 px-3 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
        onChange={onChange}
      />
    </div>
  );
}
