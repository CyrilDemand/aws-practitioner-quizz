import React from "react";

export default function Answer({ option, hasAnswered, setSelectedOption, selectedOption, isMultipleAnswer}) {

    const type = isMultipleAnswer ? "checkbox" : "radio"

    return (
        <label
            className={`p-3 rounded border cursor-pointer  ${
                hasAnswered && option.isCorrect
                    ? "bg-green-100 border-green-500"
                    : hasAnswered && selectedOption.includes(option.answer) && !option.isCorrect
                        ? "bg-red-100 border-red-500"
                        : ""
            }`}
        >
            <input
                type={type}
                name={"option"}
                value={option.answer}
                className="mr-2"
                onChange={() => setSelectedOption(option)}
                disabled={hasAnswered}
            />
            {option.answer}
        </label>
    );
}
