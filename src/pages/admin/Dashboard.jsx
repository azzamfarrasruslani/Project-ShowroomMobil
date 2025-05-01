// import { FaStar, FaMoneyBillWave } from "react-icons/fa";
// import { LineChart, Line, Tooltip, ResponsiveContainer, CartesianGrid, XAxis, YAxis } from "recharts";
import PageHeader from "../../components/admin/dashboard/PageHeader";

// const data = [
//   { name: "Sen", upload: 3 },
//   { name: "Sel", upload: 5 },
//   { name: "Rab", upload: 2 },
//   { name: "Kam", upload: 8 },
//   { name: "Jum", upload: 4 },
//   { name: "Sab", upload: 6 },
//   { name: "Min", upload: 7 },
// ];

export default function Dashboard() {
  return (
    <div id="dashboard-container">
      <PageHeader />

      <div className="grid gap-6 p-5 md:grid-cols-3">
        {/* Mobil Terfavorit */}
        <div className="flex items-center space-x-4 rounded-xl bg-white p-5 shadow-md transition hover:shadow-lg">
          <div className="rounded-full bg-purple-600 p-4 text-white">
            {/* <FaStar className="text-xl" /> */}
          </div>
          <div>
            <p className="text-sm text-gray-500">Mobil Terfavorit</p>
            <p className="text-lg font-bold">Toyota Avanza 2015</p>
          </div>
        </div>

        {/* Total Penjualan */}
        <div className="flex items-center space-x-4 rounded-xl bg-white p-5 shadow-md transition hover:shadow-lg">
          <div className="rounded-full bg-green-500 p-4 text-white">
            {/* <FaMoneyBillWave className="text-xl" /> */}
          </div>
          <div>
            <p className="text-sm text-gray-500">Total Penjualan</p>
            <p className="text-lg font-bold">Rp 12.500.000</p>
          </div>
        </div>

        {/* Grafik Tren Upload Mobil */}
        <div className="col-span-1 rounded-xl bg-white p-5 shadow-md transition hover:shadow-lg md:col-span-1">
          <h3 className="mb-2 font-semibold text-gray-700">
            Upload Mobil Mingguan
          </h3>
          {/* <ResponsiveContainer width="100%" height={150}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis hide />
              <Tooltip />
              <Line type="monotone" dataKey="upload" stroke="#4F46E5" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer> */}
        </div>
      </div>
    </div>
  );
}
