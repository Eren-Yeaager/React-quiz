import React, { useState } from "react";
import { fetchQuizQuestions } from "./API";
// Components
import QuestionCard from "./components/QuestionCard";
// types
import { Question } from "./API";
// Styles
import { GlobalStyle, Wrapper } from "./App.styles";

const App: React.FC = () => {
  const [start, setStart] = useState(false);
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [verdict, setVerdict] = useState("");

  const startTrivia = async () => {
    setLoading(true);
    setStart(true);
    const newQuestions = await fetchQuizQuestions();
    // console.log(newQuestions);
    setQuestions(newQuestions);
    setLoading(false);
  };

  const nextQuestion = async () => {
    const newQuestions = await fetchQuizQuestions();
    setVerdict("");
    setQuestions(newQuestions);
    setLoading(false);
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>REACT QUIZ</h1>
        {!start ? (
          <button className="start" onClick={startTrivia}>
            Start
          </button>
        ) : (
          <button className="next" onClick={nextQuestion}>
            Next Question
          </button>
        )}
        {loading ? <p>Loading Questions...</p> : null}
        {!loading && questions[0] && (
          <QuestionCard
            question={questions[0].question}
            answer={questions[0].answer}
            verdict={verdict}
            setVerdict={setVerdict}
          />
        )}
      </Wrapper>
    </>
  );
};

export default App;
