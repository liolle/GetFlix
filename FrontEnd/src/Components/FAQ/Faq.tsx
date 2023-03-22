import React, { useState } from "react"

type FaqData = {
  question: string;
  answer: string;
};

const faqData: FaqData[] = [
  {
    question: "What is your streaming service?",
    answer:
      "Our streaming service is a platform that provides access to a wide range of movies and TV shows for a monthly or yearly subscription fee.",
  },
  {
    question: "How much does it cost?",
    answer:
      "The subscription fee is €7 per month or €60 per year. We offer a free trial period for new subscribers.",
  },
  {
    question: "Can I cancel my subscription?",
    answer:
      "Yes, you can cancel your subscription at any time. Your access will continue until the end of your current billing period.",
  },
  {
    question: "How can I watch movies and TV shows?",
    answer:
      "You can watch movies and TV shows on our website or by downloading our app on your mobile device or smart TV.",
  },
  {
    question: "Do you offer a family plan?",
    answer:
      "At this time, we do not offer a family plan. Each subscription is for one user.",
  },
];

function Faq(): JSX.Element {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleActiveIndex = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section className="max-w-3xl text-white mx-auto px-4 py-5 md-8">
      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
      {faqData.map((faq, index) => (
        <div key={index} className="border-t border-gray-200 pt-4">
          <button
            className="w-full text-left font-medium py-2"
            onClick={() => toggleActiveIndex(index)}
          >
            <div className="flex justify-between items-center">
              <span>{faq.question}</span>
              <span>
                {activeIndex === index ? (
                  <svg
                    className="w-4 h-4 fill-current text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5.293 7.293a1 1 0 011.414 0L12 12.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z" />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4 fill-current text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16.293 7.293a1 1 0 00-1.414 0L12 10.586l-2.879-2.88a1 1 0 00-1.414 1.414l3.5 3.5a1 1 0 001.414 0l3.5-3.5a1 1 0 000-                    1.414z" />
                  </svg>
                )}
              </span>
            </div>
          </button>
          <div
            className={`py-4 text-white ${
              activeIndex === index ? "block" : "hidden"
            }`}
          >
            {faq.answer}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Faq

