import React, { Component } from "react";
import Table from "./Table";
import Form from "./Form";
import API from "./Api";
import Counter from './Counter'
import HtmlForm from './HtmlForm'
import Textarea from './Textarea'
import Select from './Select'
import MultipleInput from './MultipleInput'
import Calculator from './TempratureCalculator';
import Timer from './Timer';
import Toggle from './Toggle';
import Greeting from './Greeting';
class App extends Component {
  state = {
    characters: []
  };

  removeCharacter = index => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      })
    });
  };

  handleSubmit = character => {
    this.setState({ characters: [...this.state.characters, character] });
  };

  render() {
    const { characters } = this.state;
    return (
      <div className="container">
        <API />
        <Form handleSubmit={this.handleSubmit} />
        <Table
          characterData={characters}
          removeCharacter={this.removeCharacter}
        />
        <Counter/>
        <HtmlForm />
        <Textarea />
        <Select />
        <MultipleInput />
        <Calculator />
        <Timer />
        <Toggle />
        <Greeting isLoggedIn={true} />
      </div>
    );
  }
}



export default App;
