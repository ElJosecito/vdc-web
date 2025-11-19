import React, { useState } from 'react'

//motion framer
import { motion } from 'framer-motion'

// minus icon from react-icons
import { FaMinus } from 'react-icons/fa'
import { FaPlus } from 'react-icons/fa'

function QuestionsSquare() {
    // Set the default active index to 0 to open the first question by default
    const [activeIndex, setActiveIndex] = useState(0);

    const showAnswer = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    const questions = [
        {
            question: "What is Netflix?",
            answer: "Netflix is a streaming service that offers a wide variety of TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single commercial – all for one low monthly price."
        },
        {
            question: "How much does Netflix cost?",
            answer: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $8.99 to $17.99 a month. No extra costs, no contracts."
        },
        {
            question: "Where can I watch?",
            answer: "Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles."
        },
        {
            question: "How do I cancel?",
            answer: "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="w-full max-w-screen-sm"
        >
            {questions.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className={`px-10  rounded-lg mb-0 ${activeIndex === index ? 'bg-primary text-white py-7' : 'bg-white text-black py-4'}`}
                >
                    <div className="flex justify-between">
                        <h3>{item.question}</h3>
                        <div className="flex">
                            <FaMinus className={`minus cursor-pointer ${activeIndex === index ? '' : 'hidden'}`} onClick={() => showAnswer(index)} />
                            <FaPlus className={`plus cursor-pointer ${activeIndex === index ? 'hidden' : ''}`} onClick={() => showAnswer(index)} />
                        </div>
                    </div>
                    <div className={`w-full h-[0.5px] ${activeIndex === index ? 'bg-white' : 'bg-black'} my-3`}></div>
                    <motion.div
                        initial={{ height: activeIndex === index ? 'auto' : 0, opacity: activeIndex === index ? 1 : 0 }}
                        animate={{ height: activeIndex === index ? 'auto' : 0, opacity: activeIndex === index ? 1 : 0 }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                        className="overflow-hidden"
                    >
                        <div className={`answer ${activeIndex === index ? '' : 'hidden'}`}>
                            <p>{item.answer}</p>
                        </div>
                    </motion.div>
                </motion.div>
            ))}
        </motion.div>
    );
}

export default QuestionsSquare;
