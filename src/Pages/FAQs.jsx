import FAQComponent from "../components /FAQComponent";

const faqs = [
  {
    question: "What makes PAAB Capital different from other financial institutions?",
    answer:
      "PAAB Capital is more than a financial firm — we are a kingdom-driven powerhouse. We combine expert financial strategies with divine insight to offer wealth solutions rooted in purpose, impact, and sustainability.",
  },
  {
    question: "Who can invest or partner with PAAB Capital?",
    answer:
      "Individuals, businesses, ministries, and institutions can all engage with PAAB Capital. Whether you're just starting out or managing large capital, we offer pathways tailored to your vision.",
  },
  {
    question: "Is there a minimum investment or savings amount?",
    answer:
      "Yes. The minimum investment amount is KES 135,000, and 500,000 with top-ups starting from KES 50,000. For savings plans, we offer flexible options — get in touch for personalized guidance.",
  },
  {
    question: "Is PAAB Capital regulated?",
    answer:
      "Yes. PAAB Capital is a regulated investment company domiciled in Kenya, operating under financial best practices with full compliance to local and global standards.",
  },
  {
    question: "How do I access your training and financial education programs?",
    answer:
      "Our training and mentorship programs are available both online and through scheduled in-person sessions. You can access these via the Learn & Grow section or by subscribing to our newsletter.",
  },
  {
    question: "Can PAAB Capital work with churches and ministries?",
    answer:
      "Absolutely. We believe in the economic empowerment of the Body of Christ. We offer tailored services for ministries, including sustainable funding models, financial planning, and investment strategies.",
  },
  {
    question: "What kind of returns can I expect?",
    answer:
      "Our targeted return is 13% and 30% per annum net of fees, though this is not guaranteed. Returns depend on market conditions and the specific financial products or strategies used.",
  },
  {
    question: "How do I get started with PAAB Capital?",
    answer:
      "Simply click “Book a Consultation”, fill out our brief form, and our team will reach out with your personalized onboarding steps. Welcome to the Portals of Wealth Transfer!",
  },
];

function FAQs() {
    return (
        <>
            <h1
            className="text-center text-2xl font-bold underline"
            >Frequently Asked Questions</h1>
            <div className="space-y-6 px-4 ">
                {faqs.map((faq, index) => (
                    <FAQComponent key={index} answer={faq.answer} question={faq.question} />
                ))}
                
            </div>
            <div className="space-y-4 pt-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
                    <a href="#" className="text-indigo-600 font-medium hover:underline">
                    Download Brochure
                    </a>
                    <p className="text-gray-700">
                    – an overview of PAAB Capital’s mission, services, and philosophy
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
                    <a href="#" className="text-indigo-600 font-medium hover:underline">
                    Company Profile PDF
                    </a>
                    <p className="text-gray-700">
                    – Detailed breakdown of our operations, leadership, and financial structure
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
                    <a href="#" className="text-indigo-600 font-medium hover:underline">
                    Application Form
                    </a>
                    <p className="text-gray-700">
                    – Ready to invest? Fill and submit your onboarding form 
                    </p>
                    
                </div>
                <p>
                    Need help filling out the form? Contact our support team for guidance.
                </p>
            </div>
        </>    
    )   
};

export default FAQs;