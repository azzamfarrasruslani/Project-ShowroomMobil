const TabPagination = ({ totalTabs, activeTab, onTabChange }) => (
  <div className="mt-6 flex justify-center">
    {Array.from({ length: totalTabs }, (_, index) => (
      <button
        key={index}
        onClick={() => onTabChange(index)}
        className={`mx-1 rounded px-4 py-2 ${
          activeTab === index
            ? "bg-gray-800 text-white"
            : "bg-gray-200 text-gray-700"
        }`}
      >
        {index + 1}
      </button>
    ))}
  </div>
);

export default TabPagination;