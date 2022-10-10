import React, { useState } from 'react';
import "./assets/QuizStyles.css"
export default function Quiz() {
	const questions = [
		{
			questionText: 'Solve for x : x + 15 = 3',
			answerOptions: [
				{ answerText: '18', isCorrect: false },
				{ answerText: '12', isCorrect: false },
				{ answerText: '-12', isCorrect: true },
				{ answerText: '6', isCorrect: false },
			],
		},
		{
			questionText: 'Solve for y: y – 13 = –3',
			answerOptions: [
				{ answerText: '-10', isCorrect: false },
				{ answerText: '10', isCorrect: true },
				{ answerText: '3', isCorrect: false },
				{ answerText: '2', isCorrect: false },
			],
		},
		{
			questionText: 'Solve for x: 8 – x = –4',
			answerOptions: [
				{ answerText: '12', isCorrect: true },
				{ answerText: '4', isCorrect: false },
				{ answerText: '-12', isCorrect: false },
				{ answerText: '8', isCorrect: false },
			],
		},
		{
			questionText: 'Solve for y: –3 – y = 7',
			answerOptions: [
				{ answerText: '10', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '-10', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className="quiz-container">
		<div className='app_quiz'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)} className="quiz-btn">{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
		</div>
	);
}