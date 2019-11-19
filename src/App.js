import React from 'react';
import './App.css';

/* function Helloworld(props) {
  return (
    <div id="hello">
      <h3>{props.subtitle}</h3>
      {props.mytext}
    </div>
  )
} */

class Helloworld extends React.Component {

  state = {
    show: true
  }

  toggleShow = () => {
    this.setState({show: !this.state.show})
  }

  render() {
    if (this.state.show){
      return (
        <div id="hello">
          <h3>{this.props.subtitle}</h3>
          {this.props.mytext}
          <button onClick={this.toggleShow}>Toggle Show</button>
        </div>
      )
    } else {
      return <h1>
        No hay elementos a mostrar
        <button onClick={this.toggleShow}>
          Toggle Show
          </button>
        </h1>
    }
  }
}


function App() {
  return (
    <div>
      This is my component: 
      <Helloworld mytext="Hello Gera" subtitle="Lorem Ipsum"/>
      <Helloworld mytext="Hola Mundo" subtitle="Lorem Ipsum"/>
      <Helloworld mytext="Hello!" subtitle="Lorem Ipsum"/>
    </div>
  );
}

export default App;
