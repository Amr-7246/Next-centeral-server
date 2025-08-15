import { logo, textContent } from "@/pub/assets";
import Image from "next/image";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const content = textContent.contact

export default function Page() {
  return (
    <div className="p-6 rounded-lg shadow-lg shadow-black">
      <h2 className="text-2xl font-bold text-text mb-5 flex items-center gap-2">
        <FaEnvelope className="text-text" />
        {content.header}
      </h2>

      <div className="flex flex-col lg:flex-row gap-5 items-start">
        <Image
          className="lg:w-[30%] w-full rounded-lg object-cover"
          src={logo}
          alt="Contact us illustration"
        />

        <div className="flex flex-col gap-4 w-full">
          <p className="text-gray-700">{content.mainText}</p>

          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-text" />
            <span className="text-gray-800">{content.phone}</span>
          </div>

          <div className="flex items-center gap-3">
            <FaEnvelope className="text-text" />
            <span className="text-gray-800">{content.email}</span>
          </div>

          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-text" />
            <span className="text-gray-800">{content.address}</span>
          </div>

          <div className="flex items-center gap-3">
            <FaClock className="text-text" />
            <span className="text-gray-800">{content.workingHours}</span>
          </div>
        </div>

      </div>
    </div>
  );
}
