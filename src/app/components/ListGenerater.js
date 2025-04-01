"use client"; // Enables client-side rendering in Next.js

import { useState } from "react"; 
import { motion } from "framer-motion"; 
import { Download } from "lucide-react"; 
import {
  destinations,
  weatherConditions,
  packageChecklists,
  weatherExtras,
} from "../data/packingData"; 

export default function PackingChecklist() {
  const [destination, setDestination] = useState("");
  const [weather, setWeather] = useState("");
  const [selectedPackage, setSelectedPackage] = useState("");
  const [packingList, setPackingList] = useState([]);

  const generatePackingList = () => {
    if (!selectedPackage || !weather) return; 
    const list = [
      ...(packageChecklists[selectedPackage] || []),
      ...(weatherExtras[weather] || []),
    ];
    setPackingList(list);
  };

  const downloadChecklist = () => {
    const text = `Packing Checklist for ${selectedPackage} (${weather} Weather)\n\n` + 
      packingList.join("\n");

    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `Packing-Checklist-${selectedPackage.replace(/\s+/g, "-")}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 shadow-lg rounded-2xl border border-yellow-600 bg-white">
      {/* Title Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-black">
          Tour Package Packing Checklist
        </h1>
        <span className="block w-24 h-1 bg-yellow-600 rounded-full mx-auto mt-2"></span>
        <p className="mt-3 text-gray-700">
          Select your package and weather to generate a custom packing list.
        </p>
      </div>

      {/* Selection Fields */}
      <div className="grid md:grid-cols-2 gap-6 bg-gray-100 p-6 rounded-lg">
        {/* Package Selection */}
        <div>
          <label htmlFor="package" className="block font-medium mb-2">
            Select Package:
          </label>
          <select
            id="package"
            className="w-full p-3 border rounded-lg bg-white text-gray-700 focus:border-yellow-600 focus:ring-2 focus:ring-yellow-500 transition duration-300 outline-none"
            onChange={(e) => setSelectedPackage(e.target.value)}
            value={selectedPackage}
          >
            <option value="">-- Choose Package --</option>
            {packageChecklists &&
              Object.keys(packageChecklists).map((pkg) => (
                <option key={pkg} value={pkg}>
                  {pkg}
                </option>
              ))}
          </select>
        </div>

        {/* Weather Selection */}
        <div>
          <label htmlFor="weather" className="block font-medium mb-2">
            Select Weather:
          </label>
          <select
  id="package"
  className="w-full p-3 border rounded-lg bg-white text-gray-700 
    focus:border-yellow-600 focus:ring-2 focus:ring-yellow-500 
    hover:border-black transition duration-300 outline-none"
  onChange={(e) => setSelectedPackage(e.target.value)}
  value={selectedPackage}
>
  <option value="">-- Choose Package --</option>
  {packageChecklists &&
    Object.keys(packageChecklists).map((pkg) => (
      <option key={pkg} value={pkg}>
        {pkg}
      </option>
    ))}
</select>

        </div>
      </div>

      {/* Generate Packing List Button */}
      <div className="text-center mt-6">
        <motion.button
          onClick={generatePackingList}
          whileTap={{ scale: 0.95 }}
          className="bg-yellow-600 text-white px-6 py-3 rounded-lg font-medium shadow-md hover:bg-black transition"
        >
          Generate Packing List
        </motion.button>
      </div>

      {/* Display Packing List */}
      {packingList.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-8 p-6 border rounded-lg bg-gray-100"
        >
          {/* List Title */}
          <h3 className="text-xl font-semibold text-black mb-4">Your Packing List:</h3>
          
          {/* List Items */}
          <ul className="list-disc pl-5 space-y-1 text-gray-800">
            {packingList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          {/* Download Packing List Button */}
          <div className="text-center mt-6">
            <motion.button
              onClick={downloadChecklist}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center bg-yellow-600 text-white px-6 py-3 rounded-lg font-medium shadow-md hover:bg-black transition"
            >
              <Download className="w-5 h-5 mr-2" /> Download Checklist
            </motion.button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
