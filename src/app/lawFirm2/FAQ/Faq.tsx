"use client"

import ScrollStack, { ScrollStackItem } from '@/reactBits/ScrollStack/ScrollStack'
import React, { useState } from 'react'
import { ChevronDown } from "lucide-react"
import { FiBriefcase, FiPhoneCall, FiUsers, FiFileText, FiDollarSign } from "react-icons/fi"

type FAQItem = {
  question: string;
  answer: string;
  icon: React.ReactNode;
};

const faqData: FAQItem[] = [
  {
    question: "What areas of law does your firm specialize in?",
    answer: "Our firm provides legal services in corporate law, family law, real estate, and criminal defense. We also offer advisory services for businesses and individuals.",
    icon: <FiBriefcase className="text-sky-400 w-6 h-6" />,
  },
  {
    question: "How are legal fees determined?",
    answer: "Fees vary depending on the complexity of the case. We provide transparent pricing, and some services may be billed hourly while others are offered at a flat rate.",
    icon: <FiDollarSign className="text-sky-400 w-6 h-6" />,
  },
  {
    question: "Do you offer free initial consultations?",
    answer: "Yes, we provide a complimentary 30-minute initial consultation to understand your legal needs and explain how we can assist you.",
    icon: <FiUsers className="text-sky-400 w-6 h-6" />,
  },
  {
    question: "How do I schedule a consultation?",
    answer: "You can schedule a consultation by filling out the contact form on our website or calling our office directly. A member of our team will confirm your appointment.",
    icon: <FiPhoneCall className="text-sky-400 w-6 h-6" />,
  },
  {
    question: "What should I bring to my first meeting with a lawyer?",
    answer: "Bring all relevant documents such as contracts, identification, court papers, or correspondence related to your legal matter. This helps us evaluate your case quickly.",
    icon: <FiFileText className="text-sky-400 w-6 h-6" />,
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className='relative min-h-screen overflow-auto w-full flex items-center justify-center'>
      <div className='w-full mx-auto'>
        <ScrollStack
          itemDistance={100}
          itemScale={0.05}
          itemStackDistance={40}
          stackPosition="30%"
          scaleEndPosition="15%"
          baseScale={0.9}
          scaleDuration={0.6}
          rotationAmount={2}
          blurAmount={1}
          className="h-[90vh] overflow-auto scroll-custom"
        >
          {faqData.map((item, index) => (
            <ScrollStackItem
              key={index}
              itemClassName="w-[80%] backdrop-blur-sm bg-black/70 border border-sky-400/30 hover:border-sky-400/50 transition-all duration-300"
            >
              <div className="h-full flex flex-col justify-between">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-lf-db/30 backdrop-blur-sm">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-white mb-4">
                      {item.question}
                    </h3>
                    <p className="text-white/80 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-6 pt-6 border-t border-sky-400/20">
                  <span className="text-sky-400 text-sm">Click to expand</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-sky-400 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </div>
              </div>
            </ScrollStackItem>
          ))}
          <ScrollStackItem itemClassName="w-[80%] backdrop-blur-md bg-black/30 border border-sky-400/30">
            <div className="h-full flex flex-col justify-center items-center text-center px-8">
              <h2 className="text-3xl font-bold text-sky-400 mb-6">
                Why Choose Our Firm
              </h2>
              <p className="text-white/90 text-lg leading-relaxed">
                Choosing legal representation is more than hiring a lawyer—it's securing an ally. 
                Our firm combines decades of proven experience with a client-first approach, 
                ensuring that every case is handled with dedication, transparency, and strategic insight.
              </p>
            </div>
          </ScrollStackItem>
        </ScrollStack>
      </div>
    </section>
  )
}

export default Faq