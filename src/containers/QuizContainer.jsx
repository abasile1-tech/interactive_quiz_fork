import Question from "../components/Question";
import { useState } from "react";
import { useEffect } from "react";

function QuizContainer() {
  const [currentQuestionIndex, setCurrentQUestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  // const [questions, setQuestions] = useState([
  //   {
  //     question:
  //       "What was the name of the first computer virus that spread in the wild?",
  //     options: ["Creeper", "ILOVEYOU", "Melissa", "Brain"],
  //     answer: "Brain",
  //   },
  //   {
  //     question:
  //       "Which programming language is often referred to as the 'mother of all languages'?",
  //     options: ["Java", "C", "Fortran", "Assembly"],
  //     answer: "C",
  //   },
  //   {
  //     question: "In what year was the company Google founded?",
  //     options: ["1996", "1998", "2000", "2004"],
  //     answer: "1998",
  //   },
  // ]);

  // const [newQuestions, setNewQuestions] = useState([]);

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10")
      .then((res) => res.json())
      .then((data) => {
        //console.log("data", data);
        console.log("data.results", data.results);
        setQuestions(data.results);
        // setNewQuestions(data.results);
      });
    //console.log("response:", response);
  }, []);

  // let newQuestion;
  let incorrect_answers;
  let question;
  let options;
  if (questions.length > 0) {
    console.log("we are in the loop !!!!!!");
    console.log("questions:", questions);
    // console.log("newQuestions: ", newQuestions);

    // newQuestion = newQuestions[currentQuestionIndex];
    // console.log("newQuestion: ", newQuestion);

    // incorrect_answers = newQuestion["incorrect_answers"];
    // console.log("incorrect_answers: ", incorrect_answers);
    // const difficulty = newQuestion.difficulty;
    // console.log("difficulty: ", difficulty);
    question = questions[currentQuestionIndex];
    console.log("question:", question);
    // options = ["--Please choose an option--", ...question["options"]];
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
