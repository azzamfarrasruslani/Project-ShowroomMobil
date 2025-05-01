// Icons
import Icon from "../../../lib/Icon";

export default function TabPagination({ totalTabs, activeTab, onTabChange }) {
  const handlePrev = () => {
    if (activeTab > 0) {
      onTabChange(activeTab - 1);
    }
  };

  const handleNext = () => {
    if (activeTab < totalTabs - 1) {
      onTabChange(activeTab + 1);
    }
  };

  return (
    <div className="mt-6 flex justify-center">
      <button
        onClick={handlePrev}
        disabled={activeTab === 0}
        className={`mx-1 rounded px-4 py-2 ${
          activeTab === 0
            ? "cursor-not-allowed bg-gray-300 text-gray-500"
            : "bg-yellow-500 text-white hover:bg-yellow-600"
        }`}
        title="Sebelumnya"
      >
        <Icon name="arrowLeft" className="text-md" />
      </button>
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
      <button
        onClick={handleNext}
        disabled={activeTab === totalTabs - 1}
        className={`mx-1 rounded px-4 py-2 ${
          activeTab === totalTabs - 1
            ? "cursor-not-allowed bg-gray-300 text-gray-500"
            : "bg-yellow-500 text-white hover:bg-yellow-600"
        }`}
        title="Berikutnya"
      >
        <Icon name="arrowRight" className="text-md" />
      </button>
    </div>
  );
}
