export default function SelectField({ label, onChange }) {
    return (
      <div className="mb-2">
        <label className="block text-blue-900font-medium">{label}</label>
        <select
          className="w-full border-2 border-gray-300 text-gray-700 py-2 px-3 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          onChange={onChange}
        >
          <option selected disabled value="">Pilih tenor</option>
          <option value="12">12 Bulan</option>
          <option value="24">24 Bulan</option>
          <option value="36">36 Bulan</option>
        </select>
      </div>
    );
  }
  