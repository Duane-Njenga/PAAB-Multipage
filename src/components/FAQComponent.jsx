function FAQComponent({question, answer}) {
    return (
        <div
        className="shadow-lg rounded-xl w-full p-4 "
        >
            <h2
            className="text-gray-800 text-lg font-semibold mb-2"
            >{question}
            </h2>
            <p
            className="overflow-auto text-sm text-gray-700"    
            >
            {answer}
            </p>
        </div>
    )
}

export default FAQComponent;