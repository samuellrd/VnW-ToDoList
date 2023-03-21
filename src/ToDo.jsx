import React from "react";
import {
  Add,
  Box,
  ClearAll,
  ClearInput,
  Container,
  GlobalStyle,
  Input,
  List,
  Main,
  SpaceBT,
  Title,
  Ul,
} from "./Globalstyles";

export default class App extends React.Component {
  state = {
    task: "",
    taskslist: [],
  };
  // função para pegar o valor digitado no input.
  hadleChange = (e) => {
    this.setState({
      task: e.target.value,
    });
  };
  // função para que ao clicar no botão, o valor adicionado no input seja adicionado a uma array. também para verificar se foi digitado algum valor no input.
  addTask = () => {
    if (this.state.task.trim() !== "") {
      this.setState({
        taskslist: [
          ...this.state.taskslist,
          { task: this.state.task.trim(), completed: false },
        ],
        task: "",
      });
    } else {
      alert("Digite alguma tarefa antes!");
    }
  };
  //função para quando apertar o botão 'Enter' do teclado, também adicione o que foi digitado no input.
  pressEnter = (e) => {
    if (e.key === "Enter") {
      this.addTask();
    }
  };
  //função para que ao clicar no botão, limpe todo o array.
  clearAll = () => {
    this.setState({ taskslist: [] });
  };
  //função para que ao clicar no botão 'check', mude o estado para verdadeiro e passa uma linha através da palavra.
  conclud = (index) => {
    const updatedList = [...this.state.taskslist];
    updatedList[index].completed = true;
    this.setState({ taskslist: updatedList });
  };
  //função para deletar o item.
  delete = (index) => {
    const updatedList = [...this.state.taskslist];
    updatedList.splice(index, 1);
    this.setState({ taskslist: updatedList });
  };
  //função para limpar o input quando apertar o botão.
  clearInput = () => {
    this.setState({ task: "" });
  };

  render() {
    //variável que mostra o botão somente quando a lista é maior que dois itens.
    const showClearAllButton = this.state.taskslist.length > 2;

    return (
      <Main>
        <Container>
          <Title>TO DO LIST</Title>
          <Box>
            {this.state.task !== "" && (
              <ClearInput onClick={this.clearInput}>Limpar</ClearInput>
            )}
            <Input
              onChange={this.hadleChange}
              onKeyDown={this.pressEnter}
              type="text"
              value={this.state.task}
              placeholder="Digite sua tarefa aqui"
              required
              maxLength={60}
            />
            {showClearAllButton && (
              <ClearAll onClick={this.clearAll}>
                <i class="bx bx-x clearAll"></i>
              </ClearAll>
            )}
          </Box>
          <Add onClick={this.addTask}>Adicionar tarefa</Add>
          <Ul>
            {this.state.taskslist.map((item, index) => (
              <List key={index}>
                {item.completed === false ? (
                  <p>{item.task}</p>
                ) : (
                  <p className="lineThrough">{item.task}</p>
                )}
                <SpaceBT>
                  <button onClick={() => this.conclud(index)}>
                    <i class="bx bx-check iconCheck"></i>
                  </button>
                  <button
                    onClick={() => {
                      this.delete(item.index);
                    }}
                  >
                    <i class="bx bxs-trash-alt"></i>
                  </button>
                </SpaceBT>
              </List>
            ))}
          </Ul>
        </Container>
      </Main>
    );
  }
}
