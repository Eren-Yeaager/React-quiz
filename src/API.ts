export type Question = {
  answer: string;
  question: string;
};

export type QuestionsState = Question;

export const fetchQuizQuestions = async ()=>{
  const endpoint = `https://jservice.io/api/random`;
  const data = await (await fetch(endpoint)).json();
  return data.map((question: any) => {
    return {question:question.question, answer:question.answer};
  })
};
