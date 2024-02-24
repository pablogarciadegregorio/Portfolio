import React, { useState } from "react";
import closeIcon from "../../public/images/close-icon.svg";
import rightArrow from "../../public/images/projects/rightarrow.svg";
import Image from "next/image";

export default function Quiz({quizClose}) {
  const questions = [
    {
      questionText: "Toco un instrumento afinable ¿Cuál?",
      answerOptions: [
        { answerText: "Violín", isCorrect: false },
        { answerText: "Guitarra", isCorrect: false },
        { answerText: "Batería", isCorrect: true },
        { answerText: "Piano", isCorrect: false },
      ],
    },
    {
      questionText: "Amo el deporte y soy entrenador de ____",
      answerOptions: [
        { answerText: "Hockey", isCorrect: false },
        { answerText: "Waterpolo", isCorrect: true },
        { answerText: "Balonmano", isCorrect: false },
        { answerText: "Escalada", isCorrect: false },
      ],
    },
    {
        questionText: "¿Qué deporte no he practicado nunca?",
        answerOptions: [
          { answerText: "Quidditch", isCorrect: false },
          { answerText: "Tenis en silla de ruedas", isCorrect: false },
          { answerText: "Ajedrez", isCorrect: false },
          { answerText: "Esquí", isCorrect: true },
        ],
      },
      {
        questionText: "¿En cuál de estos programas de TV no he aparecido?",
        answerOptions: [
          { answerText: "Grand Prix", isCorrect: true },
          { answerText: "Megatrix", isCorrect: false },
          { answerText: "Madrid se mueve", isCorrect: false },
          { answerText: "Conciertos de Radio3", isCorrect: false },
        ],
      },

      {
        questionText: "Llevo 8 años trabajando con un colectivo muy especial",
        answerOptions: [
          { answerText: "Personas sordociegas", isCorrect: false },
          { answerText: "Personas con discapacidad intelectual", isCorrect: true },
          { answerText: "Personas sin hogar", isCorrect: false },
          { answerText: "Ancianos", isCorrect: false },
        ],
      },
      {
        questionText: "¿Qué certificado estoy preparandome actualmente?",
        answerOptions: [
          { answerText: "Master en IA", isCorrect: false },
          { answerText: "Neuromarketing", isCorrect: false },
          { answerText: "Master en Pascal", isCorrect: false },
          { answerText: "Curso avanzado de Figma", isCorrect: true },
        ],
      },
    {
      questionText: "¿Qué opino de la Inteligencia Artificial Generativa?",
      answerOptions: [
        { answerText: "Es una herramienta más", isCorrect: true },
        { answerText: "Utilizarla es robar y no es ético", isCorrect: false },
        { answerText: "Van a quitar muchos puestos de trabajo", isCorrect: false },
        { answerText: "No sirve para nada", isCorrect: false },
      ],
    },

    {
        questionText: "¿Dónde programé por primera vez?",
        answerOptions: [
            { answerText: "Spectrum", isCorrect: false },
            { answerText: "CMD en MS-DOS", isCorrect: false },
            { answerText: "RPG maker", isCorrect: true },
          { answerText: "Commodore Amiga", isCorrect: false },
        ],
      },
      {
        questionText: "De pequeño gané un premio en un concurso de ",
        answerOptions: [
            { answerText: "Atletismo", isCorrect: false },
            { answerText: "Ortografía", isCorrect: true },
          { answerText: "Matemáticas", isCorrect: false },
          { answerText: "Música", isCorrect: false },
        ],
      },
      {
        questionText: "Soy adicto a una de estas comidas",
        answerOptions: [
            { answerText: "Gominolas", isCorrect: true },
            { answerText: "Jamón serrano", isCorrect: false },
          { answerText: "Helado", isCorrect: false },
          { answerText: "Chocolate", isCorrect: false },
        ],
      },
    
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [grade,setGrade] = useState(0)
  const [isAnswered, setIsAnswered] = useState(false);

  

  const handleAnswerButtonClick = (isCorrect) => {
    setIsAnswered(true);
    if (isCorrect === true) {
      setScore(score + 1);
    }

  };

  const handleNextAnswer = () => {

    if (!isAnswered) {return null}

    setIsAnswered(false)
    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  }

  const scoreText = () => {


    if (score < 5) {
      return (
        <p>
          Parece que tu gato se ha sentado encima del teclado. Prueba otra vez.
        </p>
      );
    }
    if (score >= 5 || grade < 6) {
      return <p>Aprobado raspado. Tus padres no estarían orgullosos...</p>;
    }
    if (score >= 6 || grade < 8) {
      return <p>Sabes bastantes cosas sobre mí. ¿Debería preocuparme?</p>;
    }
    if (score >= 8) {
      return <p>Venga, ahora intentalo sin hacer trampas.</p>;
    }
  };

  const handleRestart = () => {
    setShowScore(false);
    setCurrentQuestion(0);
    setScore(0);
    setIsAnswered(false);
  };

  const handleAnswerClassName = (isCorrect) => {
    if (!isAnswered) {
      return "w-100 text-xl bg-gradienteBoton border-[2px] rounded-full text-center border-[#ffffff] border-opacity-40	 flex justify-center items-center p-2 hover:bg-gradienteBotonHover";
    } else {
      if (isCorrect) {
        return "cursor-default w-100 text-xl bg-green-600 border-4 rounded-full text-center border-green-700 flex justify-center items-center p-2 ";
      }
      if (!isCorrect) { return "invisible   cursor-default w-100 text-xl bg-red-600 border-4 rounded-full text-center border-[#234668] flex justify-center items-center p-2 ";}
    }
  };

  return (
    <div className="flex flex-col bg-transparent backdrop-blur-sm border-2 border-slate-600 h-full rounded-lg p-8 shadow-lg text-white">
     
      {showScore ? (
        <div className="score-section flex flex-col gap-y-4 text-2xl items-center">
          <p>
            Has acertado {score} de {questions.length}
          </p>
          {scoreText()}
          <button
            className="w-100 text-xl bg-gradienteBoton  rounded-full text-center  flex justify-center items-center  p-2 hover:bg-gradienteBotonHover"
            onClick={() => handleRestart()}
          >
            Volver a jugar
          </button>
        </div>
      ) : (
        <>
          <div className="question-section w-full relative">
            <div className="question-count text-xl mb-8">
              <span className="text-3xl">{currentQuestion + 1}</span>/
              {questions.length}
              <span>
              <Image
              onClick={() => quizClose(false)}
              className="mt-1 w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] md:w-[25px] md:h-[25px]  float-right hover:cursor-pointer"
              src={closeIcon}
              alt="close button"
      />
              </span>
            </div>
            <div className="question-text mb-4 text-xl">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section  flex flex-col  gap-y-5 mt-4">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                className={handleAnswerClassName(answerOption.isCorrect, )}
                onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
            <button
              onClick={() => handleNextAnswer()}
              className={
                !isAnswered
                  ? "cursor-not-allowed  w-fit text-xl   bg-[#252d4a] bg-opacity-10 rounded-full text-center   flex justify-center  self-end p-2"
                  : "w-fit text-xl border-2 rounded-full bg-[#252d4a] border-[#000] border-opacity-20 text-center flex justify-center items-center self-end p-2 hover:bg-[#5b6898]"
              }
            >
              <Image
              className="mt-1 w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] md:w-[25px] md:h-[25px]"
              src={rightArrow}
              alt="next button"/>
            </button>
          </div>
        </>
      )}
    </div>
  );
}
