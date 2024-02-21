import React, { useState } from "react";

export default function App() {
  const questions = [
    {
      questionText: "Soy músico y toco un instrumento afinable ¿Cuál?",
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
          { answerText: "Lesionados medulares", isCorrect: false },
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
        questionText: "En el instituto, gané un premio en un concurso de ",
        answerOptions: [
            { answerText: "Atletismo", isCorrect: false },
            { answerText: "Ortografía", isCorrect: true },
          { answerText: "Matemáticas", isCorrect: false },
          { answerText: "Música", isCorrect: false },
        ],
      },
      {
        questionText: "No puedo vivir sin comer",
        answerOptions: [
            { answerText: "Gonminolas", isCorrect: true },
            { answerText: "Jamón serrano", isCorrect: false },
          { answerText: "Helado", isCorrect: false },
          { answerText: "Chocolate", isCorrect: false },
        ],
      },
    
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleAnswerButtonClick = (isCorrect) => {
    setIsAnswered(true);
    if (isCorrect === true) {
      setScore(score + 1);
    }

  };

  const handleNextAnswer = () => {

    setIsAnswered(false)
    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  }

  const scoreText = () => {
    if (score < 2) {
      return (
        <p>
          Parece que tu gato se ha sentado encima del teclado. Prueba otra vez.
        </p>
      );
    }
    if (score > 1 || score < 5) {
      return <p>Aprobado raspado. Tus padres no estarían orgullosos...</p>;
    }
    if (score > 4 || score < 8) {
      return <p>Sabes bastantes cosas sobre mí. ¿Debería preocuparme?</p>;
    }
    if (score > 6) {
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
      return "w-100 text-xl bg-[#252d4a] border-4 rounded-full text-center border-[#234668] flex justify-center items-center p-2 hover:bg-[#5b6898]";
    } else {
      if (isCorrect) {
        return "cursor-default w-100 text-xl bg-green-600 border-4 rounded-full text-center border-[#234668] flex justify-center items-center p-2 ";
      }
      if (!isCorrect) { return "invisible   cursor-default w-100 text-xl bg-red-600 border-4 rounded-full text-center border-[#234668] flex justify-center items-center p-2 ";}
    }
  };

  return (
    <div className="app flex justify-evenly  bg-[#252d4a] h-min rounded-lg p-8 shadow-lg text-white">
      {/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
      {showScore ? (
        <div className="score-section flex flex-col gap-y-4 text-2xl items-center">
          <p>
            Has acertado {score} de {questions.length}
          </p>
          {scoreText()}
          <button
            className="w-100 text-xl bg-[#252d4a] border-4 rounded-full text-center border-[#234668] flex justify-center items-center p-2 hover:bg-[#5b6898]"
            onClick={() => handleRestart()}
          >
            Volver a jugar
          </button>
        </div>
      ) : (
        <>
          <div className="question-section w-100 relative">
            <div className="question-count mb-8">
              <span className="text-3xl">Pregunta {currentQuestion + 1}</span>/
              {questions.length}
            </div>
            <div className="question-text mb-4">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section w-100 flex flex-col justify-between gap-y-2">
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
                  ? "cursor-not-allowed w-100 text-xl bg-[#252d4a] border-4 rounded-full text-center border-[#234668] flex justify-center items-center p-2"
                  : "w-100 text-xl bg-[#252d4a] border-4 rounded-full text-center border-[#234668] flex justify-center items-center p-2 hover:bg-[#5b6898]"
              }
            >
              Siguiente
            </button>
          </div>
        </>
      )}
    </div>
  );
}
