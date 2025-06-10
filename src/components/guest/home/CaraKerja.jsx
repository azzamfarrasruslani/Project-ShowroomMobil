import { useState } from "react";

export default function CaraKerja() {
    const [currentStep, setCurrentStep] = useState(1);

    const steps = [
        {
            id: 1,
            title: "How to Buy",
            description: "Panduan bagaimana membeli barang dengan mudah dan aman.",
            image: "/img/buy.png", // Ganti sesuai nama gambar
        },
        {
            id: 2,
            title: "How to Sell",
            description: "Cara menjual produk Anda secara efisien dan cepat.",
            image: "/img/sell.png",
        },
        {
            id: 3,
            title: "How to Trade-In",
            description: "Langkah-langkah untuk melakukan trade-in produk Anda.",
            image: "/img/trade.png",
        },
    ];

    const current = steps.find(step => step.id === currentStep);

    return (
        <div className="max-w-5xl mx-auto p-6">
            {/* Tabs */}
            <div className="flex justify-center space-x-10 relative border-b border-gray-200">
                {steps.map(step => (
                    <button
                        key={step.id}
                        className={`relative pb-2 text-sm font-semibold transition-colors duration-300
                            ${currentStep === step.id
                                ? "text-blue-900"
                                : "text-gray-400 hover:text-gray-600"}`}
                        onClick={() => setCurrentStep(step.id)}
                    >
                        {step.title}
                        {currentStep === step.id && (
                            <span className="absolute left-0 -bottom-1 w-full h-1 bg-yellow-400 rounded-full" />
                        )}
                    </button>
                ))}
            </div>

            {/* Content */}
            <div className="mt-10 flex flex-col items-center text-center bg-white rounded-xl shadow-lg p-6">
                <img src={current.image} alt={current.title} className="h-48 object-contain mb-4" />
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{current.title}</h2>
                <p className="text-gray-600 max-w-xl">{current.description}</p>
            </div>
        </div>
    );
}
