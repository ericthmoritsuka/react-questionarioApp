import React, { useState } from "react";
import Radio from "./Form/Radio";

const perguntas = [
  {
    pergunta: "Qual método é utilizado para criar componentes?",
    options: [
      "React.makeComponent()",
      "React.createComponent()",
      "React.createElement()",
    ],
    resposta: "React.createElement()",
    id: "p1",
  },
  {
    pergunta: "Como importamos um componente externo?",
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: "p2",
  },
  {
    pergunta: "Qual hook não é nativo?",
    options: ["useEffect()", "useFetch()", "useCallback()"],
    resposta: "useFetch()",
    id: "p3",
  },
  {
    pergunta: "Qual palavra deve ser utilizada para criarmos um hook?",
    options: ["set", "get", "use"],
    resposta: "use",
    id: "p4",
  },
];

function App() {
  const [respostas, setRespostas] = useState({
    p1: "",
    p2: "",
    p3: "",
    p4: "",
  });
  const [slide, setSlide] = useState(0);
  const [resultado, setResultado] = useState(null);

  const changeHandler = (event) => {
    setRespostas({ ...respostas, [event.target.id]: event.target.value });
  };

  const previousHandler = () => {
    if (slide > 0) {
      setSlide(slide - 1);
    }
  };

  const checarRespostas = () => {
    const corretas = perguntas.filter(
      ({ id, resposta }) => respostas[id] === resposta
    );
    if (corretas.length === perguntas.length) {
      setResultado ('Você acertou toda as perguntas, parabéns!')
    } else if (corretas.length === 0) {
      setResultado('Tente novamente')
    }
    setResultado(
      `Você acertou ${corretas.length} de ${perguntas.length} perguntas.`
    );
    console.log(corretas)
  };

  const nextHandler = () => {
    if (slide < perguntas.length - 1) {
      setSlide(slide + 1);
    } else {
      setSlide(slide + 1);
      checarRespostas();
    }
  };

  const restartHandler = () => {
    setSlide(0);
    setResultado(null);
  };

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      {perguntas.map((pergunta, index) => (
        <Radio
          active={slide === index}
          key={pergunta.id}
          value={respostas[pergunta.id]}
          onChange={changeHandler}
          {...pergunta}
        />
      ))}

      {resultado && (resultado === 4) ? (
        <div>
          <p>{resultado}</p>
          <button onClick={restartHandler}>Refazer o teste</button>
        </div>
      ) : (
        <div>
          {slide > 0 && (
            <button style={{ marginRight: "30px" }} onClick={previousHandler}>
              Anterior
            </button>
          )}
          <button onClick={nextHandler}>Próxima</button>
        </div>
      )}
    </form>
  );
}

export default App;
