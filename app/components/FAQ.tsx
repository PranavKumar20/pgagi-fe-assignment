"use client";

import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  { question: "What is Toingg's pricing?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { question: "What is Toingg?", answer: "Lorem ipsum dolor sit amet, consectetur." },
  { question: "How secure is Toingg?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing." },
  { question: "How does billing work?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { question: "What phone numbers can I use with Toingg?", answer: "Lorem ipsum dolor sit amet, consectetur." },
  { question: "Does Toingg support multiple languages?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-3xl font-semibold mb-12">Frequently asked questions</h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 py-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex text-lg justify-between items-center text-left text-gray-800 font-medium"
            >
              <span>{faq.question}</span>
              {openIndex === index ? (
                <FaMinus className="text-gray-500" />
              ) : (
                <FaPlus className="text-gray-500" />
              )}
            </button>
            {openIndex === index && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
