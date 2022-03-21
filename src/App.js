import React from "react";

export default class App extends React.Component {
  numeroAleatorio = () => Math.floor(Math.random() * 100);
  divisivelPorDois = () => this.numeroAleatorio() % 2 === 0;

  render() {
    console.log(this.divisivelPorDois());
    const { numeroAleatorio, divisivelPorDois } = this;
    return (
      <div className="App">
        <h1>{divisivelPorDois()}</h1>
        <h2>{numeroAleatorio() ? <p> Sim</p> : <p>Não</p>}</h2>
      </div>
    );
  }
}
