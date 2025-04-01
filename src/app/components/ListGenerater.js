"use client"; // Enables client-side rendering in Next.js

<<<<<<< HEAD
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
=======
import { useState } from "react"; // React hook to manage component state
import { motion } from "framer-motion"; // Library for animations
import { Download } from "lucide-react"; // Importing an icon for the download button

// Importing data for destinations, weather conditions, and packing suggestions
import { destinations, weatherConditions, packingSuggestions, weatherExtras } from "../data/packingData"; 

// Main component function
export default function PackingChecklist() {
  // State to store the selected destination
  const [destination, setDestination] = useState(""); 

  // State to store the selected weather condition
  const [weather, setWeather] = useState(""); 

  // State to store the generated packing list
  const [packingList, setPackingList] = useState([]); 

  // Function to generate the packing list based on selected destination and weather
  const generatePackingList = () => {
    if (!destination || !weather) return; // Prevents generating a list if selection is incomplete

    // Combine general packing suggestions for the destination and weather-specific items
    const list = [...(packingSuggestions[destination] || []), ...(weatherExtras[weather] || [])];

    // Update the state with the generated packing list
    setPackingList(list);
  };

  // Function to download the packing list as a text file
  const downloadChecklist = () => {
    // Create a formatted text string
    const text = `Packing Checklist for ${destination} (${weather} Weather)\n\n` + packingList.join("\n");

    // Convert the text into a downloadable file
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    // Create a temporary link element for downloading
    const a = document.createElement("a");
    a.href = url;
    a.download = `Packing-Checklist-${destination.replace(/\s+/g, "-")}.txt`;

    // Append, trigger download, then remove the link element
>>>>>>> 827b76d2b779c11277137b6cb34164097e9037ef
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
<<<<<<< HEAD
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
=======
    <div className="max-w-4xl mx-auto px-6 py-12 bg-white shadow-lg rounded-2xl border border-gray-200">
      {/* Section title */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900 relative">
          Kailash Mansarovar Packing Checklist
          <span className="block w-24 h-1 bg-yellow-500 rounded-full mx-auto mt-2"></span>
        </h1>
        <p className="text-gray-500 mt-3">Select your destination and weather to generate a customized packing list.</p>
      </div>

      {/* Selection area for destination and weather */}
      <div className="grid md:grid-cols-2 gap-6 bg-gray-100 p-6 rounded-lg">
        {/* Dropdown to select destination */}
        <div>
          <label htmlFor="destination" className="block font-medium text-gray-700 mb-2">Select Destination:</label>
          <select
            id="destination"
            className="w-full p-3 border rounded-lg bg-white"
            onChange={(e) => setDestination(e.target.value)} // Update destination state on change
            value={destination}
          >
            <option value="">-- Choose Destination --</option>
            {destinations.map((dest) => (
              <option key={dest} value={dest}>{dest}</option>
            ))}
          </select>
        </div>

        {/* Dropdown to select weather condition */}
        <div>
          <label htmlFor="weather" className="block font-medium text-gray-700 mb-2">Select Weather Condition:</label>
          <select
            id="weather"
            className="w-full p-3 border rounded-lg bg-white"
            onChange={(e) => setWeather(e.target.value)} // Update weather state on change
            value={weather}
          >
            <option value="">-- Choose Weather --</option>
            {weatherConditions.map((condition) => (
              <option key={condition} value={condition}>{condition}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Button to generate packing list */}
      <div className="text-center mt-6">
        <motion.button
          onClick={generatePackingList} // Calls function to generate list
          whileTap={{ scale: 0.95 }} // Adds a subtle click animation
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow-md hover:bg-blue-700 transition"
>>>>>>> 827b76d2b779c11277137b6cb34164097e9037ef
        >
          Generate Packing List
        </motion.button>
      </div>

<<<<<<< HEAD
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
=======
      {/* Display the generated packing list */}
      {packingList.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }} // Starts hidden and moves into view
          animate={{ opacity: 1, y: 0 }} // Animation for smooth appearance
          transition={{ duration: 0.3 }} // Controls animation speed
          className="mt-8 p-6 border rounded-lg bg-gray-50"
        >
          {/* Packing list title */}
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Your Packing List:</h3>
          
          {/* Display each item in the list */}
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
>>>>>>> 827b76d2b779c11277137b6cb34164097e9037ef
            {packingList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

<<<<<<< HEAD
          {/* Download Packing List Button */}
          <div className="text-center mt-6">
            <motion.button
              onClick={downloadChecklist}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center bg-yellow-600 text-white px-6 py-3 rounded-lg font-medium shadow-md hover:bg-black transition"
=======
          {/* Button to download the packing list */}
          <div className="text-center mt-6">
            <motion.button
              onClick={downloadChecklist} // Calls function to download list
              whileTap={{ scale: 0.95 }} // Adds a click animation
              className="flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-lg font-medium shadow-md hover:bg-green-700 transition"
>>>>>>> 827b76d2b779c11277137b6cb34164097e9037ef
            >
              <Download className="w-5 h-5 mr-2" /> Download Checklist
            </motion.button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
