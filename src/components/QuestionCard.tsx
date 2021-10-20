import React from "react";
import { useState } from "react";
import { Wrapper } from "./QuestionCard.styles";

type Props = {
  question: string;
  answer: string;
  verdict: string,
  setVerdict: any,
};

const QuestionCard: React.FC<Props> = ({
  question,
  answer,
  verdict,
  setVerdict,
}) => {
  const [userAnswer, setUserAnswer] = useState("");

  return (
    <Wrapper>
      <p>{question}</p>
      <div>
        <input
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
        />
        <button
          onClick={() => {
            setVerdict(answer === userAnswer ? "correct" : "incorrect");
            setUserAnswer("");
          }}
        >
          Submit
        </button>
        {
          verdict !== "" && (verdict === "correct" ? <h1>Correct</h1> : <h1>Incorrect</h1>) 
        }
      </div>
    </Wrapper>
  );
};

export default QuestionCard;
