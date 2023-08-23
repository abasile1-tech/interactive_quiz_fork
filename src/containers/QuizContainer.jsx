import Question from "../components/Question";
import { useState } from "react";
import { useEffect } from "react";

function QuizContainer() {
  const [currentQuestionIndex, setCurrentQUestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10")
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data.results);
      });
  }, []);

  let question;
  let options;
  if (questions.length > 0) {
    question = questions[currentQuestionIndex];
    options = ["--Please choose an option--", ...question.incorrect_answers];
  }

  const handleAnswerSelect = (selectedAnswer) => {
    const question_answer = question.answer;
    if (selectedAnswer == question_answer) {
      setScore(score + 1);
    }
    console.log(`score: ${score}`);
    console.log(`selectedAnswer: ${selectedAnswer}`);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQUestionIndex(currentQuestionIndex + 1);
    } else {
      console.log("you reached the end");
    }
  };

  return (
    <>
      <h1>Use Effect Lesson</h1>
      {questions.length == 0 ? (
        <h1>Loading</h1>
      ) : (
        <>
          <h1>Score: {score}</h1>
          <Question
            question={question}
            options={options}
            handleAnswerSelect={handleAnswerSelect}
          />
        </>
      )}
    </>
  );
}

export default QuizContainer;
