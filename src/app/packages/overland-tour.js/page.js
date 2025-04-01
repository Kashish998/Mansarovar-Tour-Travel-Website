"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt, FaQuestionCircle, FaPlus, FaMinus, FaCalendarAlt, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { ChevronDown } from "lucide-react";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function LhasaKailashTour() {
  const [openDay, setOpenDay] = useState(null);
 
 
    const faqs = [
      {
        question: "What is the Saga Dawa Package Tour of Kailash Mansarovar?",
        answer:
          "The Saga Dawa Package Tour of Kailash Mansarovar is a special pilgrimage journey that takes place during the Saga Dawa festival, a significant spiritual event for Buddhists. It includes visiting the sacred Mount Kailash and Lake Mansarovar, offering a spiritual journey during one of the most auspicious times of the year.",
      },
      {
        question: "When does the Saga Dawa Package Tour take place?",
        answer:
          "The Saga Dawa Package Tour is typically held around May or June, coinciding with the Saga Dawa festival. The exact dates depend on the lunar calendar, so it’s important to check the tour schedule with the tour operator.",
      },
      {
        question: "What are the highlights of the Saga Dawa Package Tour?",
        answer:
          "The tour includes visits to Mount Kailash, Lake Mansarovar, and other spiritual sites such as Tarchen, Darchen, Dirapuk, and Zutulpuk. Participants also engage in sacred rituals, prayers, and can experience the spiritual energy of the Saga Dawa festival.",
      },
      {
        question: "Is the Saga Dawa Package Tour physically challenging?",
        answer:
          "The Saga Dawa tour involves high-altitude trekking, particularly around Mount Kailash, which can be physically demanding due to the altitude (over 15,000 feet). Adequate preparation, acclimatization, and proper fitness are necessary for participants.",
      },
      {
        question: "What permits are needed for the Saga Dawa Package Tour?",
        answer:
          "The tour requires a Tibet Travel Permit and possibly an Alien's Travel Permit. Your tour operator will arrange these permits for you as part of the package.",
      },
      {
        question: "Can I participate in the Saga Dawa Package Tour if I have health conditions?",
        answer:
          "It is advisable to consult a doctor before undertaking the Saga Dawa tour, especially if you have heart, respiratory, or altitude-related health issues. Acclimatization is critical, and medical clearance is necessary to ensure your safety at high altitudes.",
      },
      {
        question: "What accommodations are available during the Saga Dawa Package Tour?",
        answer:
          "Accommodations during the Saga Dawa tour are basic, including guesthouses, tents, and monasteries along the trekking route. While the amenities are simple, they offer a place to rest and recover during the journey.",
      },
      {
        question: "What is the best time to go for the Saga Dawa Package Tour?",
        answer:
          "The best time to participate in the Saga Dawa Package Tour is during the Saga Dawa festival, which typically falls in May or June. This is when the pilgrimage is at its most auspicious and spiritually significant.",
      },
      {
        question: "What should I pack for the Saga Dawa Package Tour?",
        answer:
          "Essential items include warm clothing, sturdy trekking shoes, a sleeping bag, sunscreen, a hat, personal medications, a first-aid kit, water purification tablets, and snacks. Due to the high altitude, be sure to bring medications for altitude sickness.",
      },
      {
        question: "Can I undertake the Saga Dawa Package Tour alone?",
        answer:
          "It is not recommended to travel alone for the Saga Dawa Package Tour due to the remote locations and physical challenges of the trek. It is best to join an organized group with experienced guides for safety and support.",
      },
      {
        question: "Will there be any mobile network or Wi-Fi during the Saga Dawa tour?",
        answer:
          "Mobile network and Wi-Fi are limited along the route due to its remote nature. It’s advisable to inform your family or friends about your travel plans before departure and understand that communication may be difficult during the trek.",
      },
      {
        question: "What is the duration of the Saga Dawa Package Tour?",
        answer:
          "The Saga Dawa Package Tour typically lasts around 10 to 14 days, depending on the specific itinerary, including travel time to and from Nepal and Tibet, as well as the pilgrimage route around Mount Kailash and Lake Mansarovar.",
      },
    ];
    
    
  
 
  const itineraryData = [
  
      {
        day: "Day 1",
        title: "Arrival in Kathmandu",
        description: `Arrive at Tribhuvan International Airport in Kathmandu, Nepal. Your guide will meet you at the airport and transfer you to your hotel for check-in and acclimatization. Spend the rest of the day at leisure, exploring the rich cultural heritage of Kathmandu. Visit historical temples like Swayambhunath (Monkey Temple), Pashupatinath, and Boudhanath Stupa. These iconic landmarks are not just architectural marvels, but they hold immense spiritual significance, especially during Saga Dawa, when thousands of pilgrims gather for ceremonies. In the evening, enjoy a traditional welcome dinner, meeting your fellow travelers and preparing for the spiritual journey ahead. This is a perfect time to get familiar with the culture, food, and history of Nepal, as you prepare for the sacred trek that awaits you.`,
        image: "/images/kathmandu.jpg",
        highlights: [
          "Arrival at Tribhuvan International Airport",
          "Hotel Check-in",
          "Explore Kathmandu's Cultural Heritage",
          "Welcome Dinner with Fellow Travelers"
        ]
      },
      {
        day: "Day 2",
        title: "Kathmandu to Nepalgunj",
        description: `On Day 2, you'll take a flight from Kathmandu to Nepalgunj, a city near the Nepal-Tibet border, and gateway to the Kailash region. Upon arrival, check into your hotel and take some time to relax and adjust to the tropical climate. Nepalgunj is known for its unique blend of cultures, with influences from Hinduism, Buddhism, and indigenous traditions. After settling in, take a stroll through local markets to experience the city's vibrant culture. In the evening, you’ll attend a briefing session where your guide will provide important details about the upcoming Saga Dawa trek. You’ll be informed about safety precautions, trek preparation, and the religious significance of the journey during the Saga Dawa festival. The day ends with a restful night in Nepalgunj, resting before the challenging days ahead.`,
        image: "/images/nepalgunj.jpg",
        highlights: [
          "Flight from Kathmandu to Nepalgunj",
          "Hotel Check-in",
          "Explore Nepalgunj Market",
          "Pre-Trek Briefing"
        ]
      },
      {
        day: "Day 3",
        title: "Nepalgunj to Simikot",
        description: `On Day 3, board a flight from Nepalgunj to Simikot, a small town nestled in the Himalayan foothills. Simikot is the base for your Saga Dawa pilgrimage and the gateway to Tibet. Upon arrival, check into your accommodation and acclimatize to the high-altitude environment. This day will be spent in preparation for the trek ahead. Your guide will brief you on the route, safety measures, and spiritual aspects of the pilgrimage. The town of Simikot offers breathtaking views of the surrounding mountains and valleys. Spend the rest of the day exploring the local area, visiting monasteries, or resting to ensure you’re well-prepared for the days of trekking ahead. The region holds deep cultural significance for Tibetan Buddhists, and you’ll have an opportunity to learn about the unique religious practices in the area during your stay.`,
        image: "/images/simikot.jpg",
        highlights: [
          "Flight to Simikot",
          "Acclimatization and Rest",
          "Introduction to Trekking Route",
          "Visit Local Monasteries"
        ]
      },
      {
        day: "Day 4",
        title: "Trek from Simikot to Dharapuri",
        description: `Day 4 marks the beginning of your trek. Start your journey from Simikot to Dharapuri, a beautiful location that offers stunning views of the surrounding landscape. The trek involves a moderate hike through the rugged terrain of the Himalayan foothills. You’ll pass through alpine forests, small villages, and high mountain meadows. The air is crisp, and the surroundings offer a sense of serenity that is hard to match. After arriving in Dharapuri, set up camp and rest. The landscape is filled with ancient cultural sites and natural beauty, providing a peaceful retreat for pilgrims on the Saga Dawa journey. Take time to reflect, meditate, or pray as you acclimatize to the higher altitude and prepare for the challenges ahead. This day will introduce you to the trekking environment, giving you a glimpse of the spiritual power of the region.`,
        image: "/images/dharapuri.jpg",
        highlights: [
          "Trek from Simikot to Dharapuri",
          "Scenic Himalayan Views",
          "Camp Setup and Rest",
          "Spiritual Reflection in Dharapuri"
        ]
      },
      {
        day: "Day 5",
        title: "Trek from Dharapuri to Hilsa",
        description: `On Day 5, continue your trek from Dharapuri to Hilsa, a small Tibetan border town. The trek will take you through alpine meadows, crossing small rivers, and offering stunning panoramic views of the surrounding mountains. Upon arrival at Hilsa, you’ll cross the Nepal-Tibet border and enter the Tibetan region. The high-altitude landscape and clear skies offer some of the most breathtaking views you’ll encounter on this journey. Hilsa, with its peaceful Tibetan culture, is a place for pilgrims to stop, rest, and reflect. Here, you'll have an opportunity to learn about Tibetan Buddhism and the significance of the Saga Dawa festival. After the long trek, you can rest at your accommodation in Hilsa and prepare for the next leg of the journey toward Mount Kailash. The spiritual significance of the land continues to resonate with every step.`,
        image: "/images/hilsa.jpg",
        highlights: [
          "Trek to Hilsa",
          "Cross the Nepal-Tibet Border",
          "Tibetan Cultural Experience",
          "Rest in Hilsa"
        ]
      },
      {
        day: "Day 6",
        title: "Trek to Kailash Base Camp",
        description: `On Day 6, embark on the trek from Hilsa to the sacred Kailash Base Camp. This journey takes you through high-altitude terrain, where the air is thin and the landscape awe-inspiring. As you trek toward the base camp, you'll get your first views of Mount Kailash, the spiritual heart of Tibet and one of the most revered mountains in the world. Upon arrival at Kailash Base Camp, take time to rest, reflect, and acclimatize. The region is sacred to millions of people from various religious traditions, and you’ll have the opportunity to participate in rituals or meditative practices. This day offers a profound connection with the land and with the spiritual significance of Kailash. As the sun sets, the view of Mount Kailash in the distance will fill you with awe and reverence, marking the beginning of the most spiritual part of the journey.`,
        image: "/images/kailash-base-camp.jpg",
        highlights: [
          "Trek to Kailash Base Camp",
          "First Views of Mount Kailash",
          "Rest and Acclimatization",
          "Reflection and Prayer"
        ]
      },
      {
        day: "Day 7",
        title: "Saga Dawa Festival at Kailash",
        description: `On Day 7, experience the spiritual celebration of Saga Dawa, which marks the birth, enlightenment, and death anniversary of Lord Buddha. This day will be spent in the presence of thousands of pilgrims who come to Kailash to celebrate this auspicious occasion. You will witness elaborate rituals, prayers, and ceremonies performed by Tibetan Buddhists, and it’s a chance for you to deepen your spiritual connection. The festival atmosphere, combined with the stunning landscape of Kailash, provides a truly transformative experience. Pilgrims circle the sacred mountain, offering prayers and performing rites. Take part in these sacred acts to align your own spiritual energy with that of Kailash. The atmosphere is charged with devotion and reverence, making it an unforgettable part of your pilgrimage.`,
        image: "/images/saga-dawa-festival.jpg",
        highlights: [
          "Celebrate Saga Dawa Festival",
          "Witness Rituals and Ceremonies",
          "Join in Pilgrimage Rites",
          "Spiritual Reflection at Kailash"
        ]
      },
      {
        day: "Day 8",
        title: "Trek around Mount Kailash",
        description: `Day 8 marks the start of your trek around the sacred Mount Kailash, also known as the Inner Kora. The trek will take you around the base of the mountain, through rugged terrain and high-altitude paths. This sacred circuit is believed to purify the soul and wash away karma. Along the way, you will encounter ancient monasteries, sacred lakes, and prayer flags fluttering in the wind. The beauty and power of Kailash will surround you as you journey through the heart of Tibet’s spiritual landscape. The trek can be physically demanding due to the altitude and terrain, but the spiritual benefits and connection to the land make every step worth it. Your guide will provide spiritual insights and help you connect with the profound energy of Kailash during the journey.`,
        image: "/images/trek-kailash.jpg",
        highlights: [
          "Begin Inner Kora Trek Around Kailash",
          "Ancient Monasteries and Sacred Lakes",
          "Spiritual Significance of the Trek",
          "Physical and Spiritual Challenge"
        ]
      },
      {
        day: "Day 9",
        title: "Completion of the Saga Dawa Pilgrimage",
        description: `On Day 9, complete your pilgrimage and the Saga Dawa circuit around Mount Kailash. As you finish the trek, you will have a deep sense of spiritual fulfillment, having completed one of the most revered pilgrimages in the world. The completion of the journey is both a personal and spiritual milestone. Reflect on your experiences and the connections you’ve made with fellow travelers and with the sacred land. After completing the trek, return to Hilsa for rest and recuperation. The day ends with a sense of profound peace and spiritual growth, as you prepare for the return journey.`,
        image: "/images/saga-dawa-completion.jpg",
        highlights: [
          "Complete the Saga Dawa Pilgrimage",
          "Reflect on Spiritual Growth",
          "Return to Hilsa",
          "Rest and Recuperation"
        ]
      },
      {
        day: "Day 10",
        title: "Return to Kathmandu",
        description: `On the final day of your journey, return from Tibet to Kathmandu. As you travel, you’ll have time to reflect on the transformative experience and the spiritual growth achieved during the pilgrimage. Upon arrival in Kathmandu, check into your hotel for a restful evening. Enjoy your last moments in Nepal with a farewell dinner, where you can share your experiences with fellow travelers and celebrate the completion of this sacred journey. The memories of the Saga Dawa pilgrimage, the energy of Mount Kailash, and the lessons learned along the way will stay with you long after you return home.`,
        image: "/images/kathmandu-return.jpg",
        highlights: [
          "Return from Tibet to Kathmandu",
          "Farewell Dinner and Reflection",
          "Final Views of the Himalayas",
          "Celebrate Spiritual Completion"
        ]
      }
    ];
    
  
  const [openFAQ, setOpenFAQ] = useState(null);

 
  const [selectedDay, setSelectedDay] = useState(0); // Default: Show Day 1 in Desktop


  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="relative w-full h-[250px] md:h-[450px]">
        <Image src="/lhasa-kailash.jpg" alt="Lhasa Kailash Tour" layout="fill" objectFit="cover" />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold">Kailash Helicopter Tour</h1>
          <p className="text-white mt-4 text-lg">  Embark on a once-in-a-lifetime spiritual adventure, trekking under the full moon to the sacred Mount Kailash. </p>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 md:px-0 pt-8 space-y-8">
      <div className="max-w-6xl mx-auto px-4 md:px-0 pt-8 space-y-8">
  <div className="bg-gray-50 py-10 px-4 md:px-8">
    {/* Animated Card Container */}
    <motion.div
      className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden flex flex-col md:flex-row transition-all duration-500 hover:shadow-2xl"
      whileHover={{ scale: 1.02 }}
    >
      {/* Image Grid Section */}
      <motion.div
        className="w-full md:w-1/2 grid grid-cols-2 gap-2"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Image src="/overview-lhasa.jpg" alt="Lhasa City" width={350} height={250} className="w-full h-full object-cover" />
        <Image src="/potala-palace.jpg" alt="Potala Palace" width={350} height={250} className="w-full h-full object-cover" />
        <Image src="/lake-mansarovar.jpg" alt="Lake Mansarovar" width={350} height={250} className="w-full h-full object-cover" />
        <Image src="/mount-kailash.jpg" alt="Mount Kailash" width={350} height={250} className="w-full h-full object-cover" />
      </motion.div>

      {/* Content Section */}
      <motion.div
        className="p-6 md:p-10 flex flex-col justify-center w-full md:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
     <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
  Saga Dawa Kailash Mansarovar Tour
</h2>

<p className="mt-4 text-gray-700 text-base leading-relaxed">
  The Saga Dawa Kailash Mansarovar Tour is a spiritual journey that coincides with the Saga Dawa Festival, one of the most significant events in Tibetan Buddhism. The tour takes you to the sacred Mount Kailash and the serene Lake Mansarovar, offering a transformative experience that brings pilgrims closer to the divine. During Saga Dawa, Tibetans and pilgrims from around the world gather to celebrate the birth, enlightenment, and death anniversary of Lord Buddha, making it a time of profound spiritual significance.
</p>

<p className="mt-2 text-gray-700 text-base leading-relaxed">
  This journey typically spans 10 to 14 days, including air travel, scenic drives, and trekking across the rugged Tibetan landscape. Pilgrims have the opportunity to circumambulate Mount Kailash, perform rituals at the sacred Lake Mansarovar, and engage in spiritual practices during the festival. The altitude and terrain pose challenges, but the rewards of peace, purification, and connection to the sacred are immense. This tour offers an unparalleled chance to be part of one of the most revered religious festivals in Tibet while experiencing the breathtaking beauty and spiritual power of the Kailash region.
</p>


{/* Key Highlights */}
<div className="mt-6 grid grid-cols-2 gap-3 text-gray-800 text-xs font-medium">
  <div className="flex items-center space-x-1">
    <span className="text-lg">📅</span>
    <p><strong>Duration:</strong> 10 to 14 Days</p>
  </div>
  <div className="flex items-center space-x-1">
    <span className="text-lg">✈️</span>
    <p><strong>Mode of Travel:</strong> Air travel and Trekking</p>
  </div>
  <div className="flex items-center space-x-1">
    <span className="text-lg">🌕</span>
    <p><strong>Best Time:</strong> May to June (Saga Dawa Festival)</p>
  </div>
  <div className="flex items-center space-x-1">
    <span className="text-lg">🌍</span>
    <p><strong>Region:</strong> Tibet</p>
  </div>
  <div className="flex items-center space-x-1">
    <span className="text-lg">🏞️</span>
    <p><strong>Altitude:</strong> 5,600 meters (Near Kailash)</p>
  </div>
  <div className="flex items-center space-x-1">
    <span className="text-lg">⚠️</span>
    <p><strong>Health Precautions:</strong> High-altitude trekking and spiritual rituals</p>
  </div>
</div>

        {/* CTA Buttons - Optimized for Mobile & Desktop */}
        <div className="mt-5 flex flex-col md:flex-row md:space-x-3 space-y-2 md:space-y-0">
          {/* Call Now Button */}
          <a href="tel:+1234567890" className="w-full md:w-auto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="w-full md:w-auto px-3 py-2 bg-green-600 text-white text-sm font-medium rounded-md shadow-md flex items-center justify-center space-x-2 transition-all hover:bg-green-700"
            >
              <FaPhoneAlt className="text-base" />
              <span>Call</span>
            </motion.button>
          </a>

          {/* Enquiry Now Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="w-full md:w-auto px-3 py-2 bg-yellow-500 text-white text-sm font-medium rounded-md shadow-md flex items-center justify-center space-x-2 transition-all hover:bg-yellow-600"
          >
            <FaEnvelope className="text-base" />
            <span>Enquiry</span>
          </motion.button>

          {/* WhatsApp Button */}
          <a href="https://wa.me/YOUR_PHONE_NUMBER" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="w-full md:w-auto px-3 py-2 bg-blue-500 text-white text-sm font-medium rounded-md shadow-md flex items-center justify-center space-x-2 transition-all hover:bg-blue-600"
            >
              <FaWhatsapp className="text-base" />
              <span>WhatsApp</span>
            </motion.button>
          </a>
        </div>
      </motion.div>
    </motion.div>
  </div>
</div> <div className="max-w-6xl mx-auto py-12 px-6">
  {/* Main Heading */}
  <h2 className="text-4xl font-bold text-center mb-10 text-gray-900 uppercase tracking-wide border-b-4 border-blue-600 pb-4">
  Saga Dawa Kailash Itinerary
  </h2>

  {/* Main Container */}
  <div className="flex flex-col md:flex-row">
    {/* Sidebar (Day List) */}
    <div className="w-full md:w-1/2 space-y-5 md:pr-5">
      {itineraryData.map((item, index) => (
        <div key={index}>
          <button
            onClick={() => setSelectedDay(index)}
            className={`w-full flex items-center justify-between py-3 px-4 rounded-lg font-semibold transition-all text-lg ${
              selectedDay === index
                ? "bg-blue-600 text-white shadow-md"
                : "bg-gray-200 hover:bg-gray-300 text-gray-800"
            }`}
          >
            <span className="flex items-center gap-2">
              <FaCalendarAlt className="text-blue-500" /> {item.day}: {item.title}
            </span>
            {selectedDay === index ? <FaChevronUp /> : <FaChevronDown />}
          </button>

          {/* ✅ Fixed Mobile View: Content Now Displays Properly Below Clicked Day */}
          {selectedDay === index && (
            <div className="md:hidden bg-white p-4 mt-2 rounded-lg shadow-md">
              {/* Image */}
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={300}
                className="rounded-lg shadow-lg w-full object-cover mb-4"
              />

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-4">{item.description}</p>

              {/* Key Features */}
              <div className="mt-4">
                <h4 className="text-xl font-semibold mb-3 text-gray-900 border-l-4 border-blue-600 pl-3">
                  Key Features
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {item.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-center gap-2 bg-gray-100 p-3 rounded-lg shadow-md transition-all hover:bg-blue-50">
                      <FaMapMarkerAlt className="text-blue-500" /> {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>

    {/* Desktop View: Content on the Right */}
    <div className="w-full md:w-2/3 bg-white p-6 rounded-lg shadow-md hidden md:block">
      <h3 className="text-3xl font-semibold mb-4 text-gray-900">
        {itineraryData[selectedDay].day} - {itineraryData[selectedDay].title}
      </h3>

      {/* Image on Top */}
      <div className="w-full mb-6">
        <Image
          src={itineraryData[selectedDay].image}
          alt={itineraryData[selectedDay].title}
          width={500}
          height={0}
          className="rounded-lg shadow-lg w-full object-cover h-[30vh]"
        />
      </div>

      {/* Description Below Image */}
      <p className="text-gray-700 leading-relaxed mb-6">{itineraryData[selectedDay].description}</p>

      {/* Key Features */}
      <div className="mt-6">
        <h4 className="text-xl font-semibold mb-3 text-gray-900 border-l-4 border-blue-600 pl-3">
          Key Features
        </h4>
        <ul className="grid grid-cols-1  gap-3">
          {itineraryData[selectedDay].highlights.map((highlight, i) => (
            <li key={i} className="flex items-center gap-2 bg-gray-100 p-3 rounded-lg shadow-md transition-all hover:bg-blue-50">
              <FaMapMarkerAlt className="text-blue-500" /> {highlight}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</div>

        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-2xl font-bold flex items-center gap-2"><FaQuestionCircle className="text-blue-500" /> Frequently Asked Questions</h2>
          <div className="mt-4 space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
                <button className="flex justify-between items-center w-full text-lg font-semibold" onClick={() => setOpenFAQ(openFAQ === index ? null : index)}>
                  {faq.question} <span className="text-blue-500 text-xl">{openFAQ === index ? <FaMinus /> : <FaPlus />}</span>
                </button>
                {openFAQ === index && <p className="mt-3 text-gray-700">{faq.answer}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
