"use client";

import { awsQuestions } from '@/app/data/questions';
import { useEffect, useState } from 'react';
import Answer from "@/app/ui/Answer";

export default function Home() {

    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [explanation, setExplanation] = useState("");
    const [selectedOption, setSelectedOption] = useState([]);
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
    const [isMultipleAnswer, setIsMultipleAnswer] = useState(null);
    const [numberOfAnswer, setNumberOfAnswer] = useState(null);
    const [numberOfQuestionDone, setNumberOfQuestionDone] = useState(0);
    const [numberOfQuestionValid, setNumberOfQuestionValid] = useState(0);

    useEffect(() => {
        changeQuestion();
    }, []);

    const setSelectedOptionOverride = (option) => {
        if (isMultipleAnswer) {
            if (selectedOption.includes(option.answer)) {
                setSelectedOption(selectedOption.filter(item => item !== option.answer));
            } else {
                setSelectedOption([...selectedOption, option.answer]);
            }
        } else {
            setSelectedOption([option.answer]);
        }
    };


    const setIsMultipleAnswerAccepted = (question) =>{
        let numberOfAnswer = 0;
        question.options.forEach(option => {
            if (option.isCorrect){
                numberOfAnswer++;
            }
        })
        setIsMultipleAnswer(numberOfAnswer>1);
        setNumberOfAnswer(numberOfAnswer)
    }

    const changeQuestion = () => {
        const question = awsQuestions[Math.floor(Math.random() * awsQuestions.length)];
        setCurrentQuestion(question);
        setIsMultipleAnswerAccepted(question)
        setExplanation("");
        setSelectedOption("");
        setIsAnswerCorrect(null);
        clearInput()
    };

    const validateAnswer = () => {
        setNumberOfQuestionDone(numberOfQuestionDone + 1);
        let isAnswersValid = true;
        document.querySelectorAll("input").forEach(input => {
            if (input.checked && !currentQuestion.options.find(e => e.answer === input.value).isCorrect ||
                !input.checked && currentQuestion.options.find(e => e.answer === input.value).isCorrect) {
                isAnswersValid = false;
                setIsAnswerCorrect(false)
            }
        });
        if (isAnswersValid) {
            setNumberOfQuestionValid(numberOfQuestionValid + 1);
            setIsAnswerCorrect(true)
        }
        setExplanation(currentQuestion.explanation);
    };

    const clearInput = () => {
        document.querySelectorAll('input').forEach(input => {
            input.checked = false
        })
    }
    const successRate = numberOfQuestionDone > 0 ? ((numberOfQuestionValid / numberOfQuestionDone) * 100).toFixed(2) : 0;

    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
            <div className="max-w-xl w-full bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4 p-4 bg-gray-800 rounded-lg text-white">
                    <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                            <p className="text-lg font-semibold">Total Questions</p>
                            <p className="text-2xl">{numberOfQuestionDone}</p>
                        </div>
                        <div>
                            <p className="text-lg font-semibold">Correct Answers</p>
                            <p className="text-2xl">{numberOfQuestionValid}</p>
                        </div>
                        <div>
                            <p className="text-lg font-semibold">Accuracy Rate</p>
                            <p className="text-2xl">{successRate}%</p>
                        </div>
                    </div>
                </div>


                {currentQuestion ? (
                    <>
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">
                            {currentQuestion.question + " (" + numberOfAnswer + " answers)"}
                        </h2>
                        <div className="flex flex-col gap-2">
                            {currentQuestion.options.map((option, index) => (
                                // eslint-disable-next-line react/jsx-key
                                <Answer
                                    key={index}
                                    option={option}
                                    hasAnswered={isAnswerCorrect !== null}
                                    setSelectedOption={setSelectedOptionOverride}
                                    selectedOption={selectedOption}
                                    isMultipleAnswer={isMultipleAnswer}
                                />
                            ))}
                        </div>
                        <button
                            onClick={validateAnswer}
                            className="w-full mt-4 py-2 px-4 bg-amber-400 text-white font-semibold rounded hover:bg-amber-500 disabled:opacity-50"
                            disabled={!selectedOption || explanation !== ""}
                        >
                            Confirm
                        </button>
                        {explanation && (
                            <p className="mt-4 p-4 text-gray-700 bg-gray-100 rounded-lg border-l-4 border-amber-400">
                                {explanation}
                            </p>
                        )}
                        <button
                            id="next"
                            onClick={changeQuestion}
                            className="w-full mt-4 py-2 px-4 bg-gray-300 text-gray-800 font-semibold rounded hover:bg-gray-400"
                            style={{display: explanation ? "block" : "none"}}
                        >
                            Go to the next question
                        </button>
                    </>
                ) : (
                    <p className="text-gray-700">Chargement...</p>
                )}
            </div>
        </div>
    );
}
