// import { FaBell, FaSearch, FaLanguage } from "react-icons/fa";
// import { IoPerson } from "react-icons/io5"; // diperbaiki: ini dari io5
// // import { SlSettings } from "react-icons/sl"; // jika ingin dipakai nanti
// // import { FcAreaChart } from "react-icons/fc"; // tidak digunakan

export default function Header() {
    return (
        <div className="flex justify-between items-center px-6 py-3 bg-white border-b shadow-sm">
            {/* Search Bar */}
            <div className="relative w-full max-w-md">
                <input
                    type="text"
                    placeholder="Search Here..."
                    className="w-full bg-white border border-gray-200 rounded-md py-2 pr-10 pl-3 text-sm outline-none focus:ring-1 focus:ring-blue-500"
                />
                {/* <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" /> */}
            </div>

            {/* Icons & Profile */}
            <div className="flex items-center space-x-4 ml-6">
                {/* Notification */}
                <div className="relative p-2 bg-gray-100 rounded-xl cursor-pointer hover:bg-gray-200 transition">
                    {/* <FaBell className="text-gray-700" /> */}
                    <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-500 text-white text-xs px-1 rounded-full">
                        50
                    </span>
                </div>

                {/* Language */}
                <div className="p-2 bg-gray-100 rounded-xl cursor-pointer hover:bg-gray-200 transition">
                    {/* <FaLanguage className="text-gray-700" /> */}
                </div>

                {/* Settings (opsional) */}
                {/* 
                <div className="p-2 bg-gray-100 rounded-xl cursor-pointer hover:bg-gray-200 transition">
                    <SlSettings className="text-gray-700" />
                </div>
                */}

                {/* Profile */}
                <div className="flex items-center space-x-2 pl-4 border-l border-gray-300">
                    <span className="text-sm text-gray-700">
                        Hello, <b>Rizqi Abdan</b>
                    </span>
                    {/* <IoPerson className="text-3xl  cursor-pointer hover:text-gray-700 transition" /> */}
                </div>
            </div>
        </div>
    );
}
