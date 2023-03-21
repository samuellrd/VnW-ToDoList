import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  font-family: "Open Sans", sans-serif;

  ::selection {
    background-color: #b0c18b;
  }
};

body {
  background-color: #ccffcc;
}
`;

export const Main = styled.main`
  display: flex;
  justify-content: center;
`;
// estilização do container onde fica a ToDo List.
export const Container = styled.section`
  width: 50vw;
  height: 100vh;
  padding-top: 3vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: #6ea95e;
`;
// estilização da caixa onde fica o input e os 2 botões.
export const Box = styled.div`
  width: 39.8vw;
  height: 8vh;
  margin-top: 5vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
// estilização do input que recebe as tarefas.
export const Input = styled.input`
  outline: none;
  border: none;
  border-radius: 25px;
  margin-left: 4.9vw;
  padding: 1rem;
  width: 30vw;
  height: 7vh;
  font-size: 1.3rem;

  ::placeholder {
    color: #111111;
  }
`;
// posicionamento do botão para limpar o input.
export const ClearInput = styled.button`
  position: absolute;
  margin-left: 1vw;
  cursor: pointer;
`;
// estilização do botão que limpa todos os itens da lista.
export const ClearAll = styled.button`
  width: 50px;
  height: 50px;
  border: solid #6ea95e;
  border-radius: 25px;
  background-color: #6ea95e;
  cursor: pointer;

  :active {
    background-color: #9aaf6a;
    border: 1px solid #a5c99c;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
    transform: scale(97%);
  }
  :hover {
    color: #ffffff;
  }
  .clearAll {
    transform: scale(300%);
  }
`;
// estilização do botão "Adicionar".
export const Add = styled.button`
  width: 30vw;
  height: 7vh;
  border: solid 2px;
  border-radius: 25px;
  box-shadow: 0px 5px 5px 0;
  background-color: #6ea95e;
  margin-top: 1rem;
  font-size: 1.5rem;
  cursor: pointer;

  :active {
    background-color: #9aaf6a;
    border: 1px solid #a5c99c;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
    transform: scale(97%);
  }
  :hover {
    color: #ffffff;
  }
`;

export const Ul = styled.ul`
  overflow-y: auto;
  width: 45vw;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4vh;
  padding-bottom: 4vh;
  gap: 3vh;

  // estilização da scrollbar que aparece quando a lista é maior que dois itens.
  ::-webkit-scrollbar {
    width: 1.5vw;
  }
  ::-webkit-scrollbar-track {
    background-color: #a5c99c;
    border-radius: 35px;
  }
  ::-webkit-scrollbar-thumb {
    width: 0.3vw;
    border: solid #a5c99c;
    background-color: #4a743e;
    border-radius: 35px;
  }
`;
// estilização da lista onde vão as tarefas.
export const List = styled.li`
  width: 42vw;
  min-height: 9vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  padding: 7px 15px 7px 20px;
  background-color: #6ea95e;
  transition: ease-in-out 0.6s;

  :hover {
    background-color: #88b87a;
  }

  p {
    color: #fff;
    font-size: 1.4rem;
    max-width: 34vw;
  }

  .lineThrough {
    color: #fff;
    font-size: 1.4rem;
    text-decoration: line-through tomato;
  }
`;
// uma div para dar um "space-between" onde vão os dois botões 'cheked' e 'trash'.
export const SpaceBT = styled.div`
  display: flex;
  justify-content: space-between;
  color: #ffffff;
  width: 5vw;

  //estilizações dos dois botões.
  button {
    background: #5f9550;
    border: solid 2px #5f9550;
    border-radius: 25px;
    transition: 0.5s;

    :active {
      background-color: #9aaf6a;
      border: 1px solid #a5c99c;
      box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
    }
    :hover {
      opacity: 0.8;
      transform: scale(145%);
    }
  }

  i {
    font-size: 1.5rem;
    color: #ffffff;

    :hover {
      cursor: pointer;
    }
  }

  .iconCheck {
    transform: scale(145%);
  }
`;
