import React, { useState, useEffect } from "react";
import Axios from "axios";

const GetQuestion = () => {
  const [questions, setQuestions] = useState([]);
  const [questionData, setQuestionData] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(async () => {
    if (loading) {
      let questionstemp = [];

      const { data } = await Axios.get(
        "https://radiant-scrubland-91561.herokuapp.com/api/questions/all"
      );
      data.map((questionId) => {
        questions.push(questionId);
      });
      for (const ques of data) {
        const { data: question } = await Axios.get(
          `https://radiant-scrubland-91561.herokuapp.com/api/questions/${ques}`
        );
        questionData.push(question);
      }
    }
  }, [loading]);

  const deletequestion = (id) => {
    console.log(id);
    Axios.delete(
      `https://radiant-scrubland-91561.herokuapp.com/api/questions/${id}`
    ).then((res) => {
      setloading(true);
      console.log("deleted");
    });
  };

  return (
    <>
      <h1>GetQuestion</h1>
      {console.log(questions, questionData)}
      <input type="text" />
      {
        <div>
          {/* <p> Question: {question.Question.Title} </p>
          <p> Category: {question.Question.Category} </p>
          <p>
            {" "}
            {question.Options.map((option) => (
              <p> {option.title} </p>
            ))}{" "}
          </p>
          <button onClick={() => deletequestion()}> Delete Question </button>
          <br />
          <br /> */}
        </div>
      }
    </>
  );
};

export default GetQuestion;
