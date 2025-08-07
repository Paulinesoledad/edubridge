import { useState } from "react";
import "./FAQ.css";
import { useEffect } from "react";

const faqs = [
  {
    question: "What is EduBridge?",
    answer: "EduBridge is a micro-tutoring platform that connects students to short-term academic help in specific subjects."
  },
  {
    question: "Is tutoring available online or in person?",
    answer: "We offer both! You can choose your preferred mode of learning when submitting a tutor request."
  },
  {
    question: "How long will it take to be matched with a tutor?",
    answer: "Most students are matched within 24–48 hours after submitting a request."
  },
  {
    question: "Is EduBridge free to use?",
    answer: "Yes, submitting a request is free. However, some tutors may charge a fee based on your request."
  }
];

function FAQ() {
  useEffect(() => {
    document.title = "EduBridge | FAQ";
  }, []);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq-page">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className={`faq-item ${activeIndex === index ? "active" : ""}`}>
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span>{activeIndex === index ? "−" : "+"}</span>
            </div>
            {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
