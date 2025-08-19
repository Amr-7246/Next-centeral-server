"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FiBriefcase, FiPhoneCall, FiUsers, FiFileText, FiDollarSign } from "react-icons/fi";

type FAQItem = {
  question: string;
  answer: string;
  icon: React.ReactNode;
};

const faqData: FAQItem[] = [
  {
    question: "What areas of law does your firm specialize in?",
    answer:
      "Our firm provides legal services in corporate law, family law, real estate, and criminal defense. We also offer advisory services for businesses and individuals.",
    icon: <FiBriefcase className="text-[#E6A61E] w-6 h-6" />,
  },
  {
    question: "How are legal fees determined?",
    answer:
      "Fees vary depending on the complexity of the case. We provide transparent pricing, and some services may be billed hourly while others are offered at a flat rate.",
    icon: <FiDollarSign className="text-[#E6A61E] w-6 h-6" />,
  },
  {
    question: "Do you offer free initial consultations?",
    answer:
    "Yes, we provide a complimentary 30-minute initial consultation to understand your legal needs and explain how we can assist you.",
    icon: <FiUsers className="text-[#E6A61E] w-6 h-6" />,
  },
  {
    question: "How do I schedule a consultation?",
    answer:
      "You can schedule a consultation by filling out the contact form on our website or calling our office directly. A member of our team will confirm your appointment.",
    icon: <FiPhoneCall className="text-[#E6A61E] w-6 h-6" />,
  },
  {
    question: "What should I bring to my first meeting with a lawyer?",
    answer:
      "Bring all relevant documents such as contracts, identification, court papers, or correspondence related to your legal matter. This helps us evaluate your case quickly.",
    icon: <FiFileText className="text-[#E6A61E] w-6 h-6" />,
  },
  {
    question: "How are legal fees determined?",
    answer:
      "Fees vary depending on the complexity of the case. We provide transparent pricing, and some services may be billed hourly while others are offered at a flat rate.",
    icon: <FiDollarSign className="text-[#E6A61E] w-6 h-6" />,
  },
];

const DropList: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative h-[80vh] w-full p-6 md:p-12 bg-lf-dw ">
      <div className = "absolute -top-20 left-0 z-10 w-[70%] bg-lf-db px-10 py-[150px]" >
        <h2 className="text-3xl md:text-4xl font-bold text-lf-dw mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="border border-[#D9D9E2] shadow-sm bg-lf-dw transition hover:shadow-md"
            >
              <button
                className="flex w-full justify-between items-center p-5 text-left font-medium text-[#252B3D]"
                onClick={() => toggle(index)}
              >
                <div className="flex items-center gap-3">
                  {item.icon}
                  <span>{item.question}</span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-[#0C1B63] transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="p-5 text-sm text-[#252B3D] border-t border-[#D9D9E2] bg-lf-dw animate-fadeIn">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-20 right-0 w-[30%] p-5 " >
        <h2 className="text-lf-db font-bold text-[30px] p-3 mb-3 border-b border-lf-db" >
          Why Choose Our Firm . . .
        </h2>
        <p className="text-lf-b text-[20px] " >
          Choosing legal representation is more than hiring a lawyer—it's securing an ally.  
          Our firm combines decades of proven experience with a client-first approach,  
          ensuring that every case is handled with dedication, transparency, and strategic insight.  
          We don’t just provide legal advice—we fight for your peace of mind and your future.
        </p>
      </div>
    </section>
  );
};

export default DropList;
