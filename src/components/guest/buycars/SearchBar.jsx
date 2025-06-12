// Icons
import Icon from "../../../lib/Icon";

const SearchBar = ({ searchTerm, onSearch }) => (
  <div className="relative">
    <Icon
      name="search"
      className="text-md absolute top-1/2 left-3 -translate-y-1/2 transform text-gray-400"
    />
    <input
      type="text"
      value={searchTerm}
      onChange={onSearch}
      className="w-full rounded-md border border-gray-300 bg-gray-800 p-3 pl-10 text-sm text-white placeholder-gray-400 focus:ring-2 focus:ring-white focus:outline-none md:text-base"
      placeholder="Cari berdasarkan Merek, Model, atau Kata Kunci"
    />
  </div>
);
export default SearchBar;
