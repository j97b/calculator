import React from 'react';
import './App.css';
import Output from './Output';
import Button from './Button';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      inputValue: "",
      output: ""
    }
  }
  handleClick = ({ target }) => {
    console.log(target.textContent);
    switch (target.textContent) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        this.setState({ inputValue: (this.state.inputValue === "") ? Number.parseInt(target.textContent) : this.state.inputValue * 10 + Number.parseInt(target.textContent) });
        break;
      case "+":
      case "-":
      case "*":
      case "/":
        console.log(typeof this.state.inputValue);
        this.setState({
          output: (typeof this.state.inputValue === "number" && this.state.output.substr(-1) !== " ") ?  `${this.state.output}${this.state.inputValue} ${target.textContent} ` : this.state.output,
          inputValue: ""
        });
        break;
      case "=":
        console.log(this.state.output.slice(-2, -1));
        switch (this.state.output.slice(-2, -1)) {
          case "+":
            this.setState({
              output: (typeof this.state.inputValue == "number") ? Number.parseInt(this.state.output.slice(0, -3)) + Number.parseInt(this.state.inputValue) : this.state.output,
              inputValue: ""
            });
            break;
          case "-":
            this.setState({
              output: (typeof this.state.inputValue == "number") ? Number.parseInt(this.state.output.slice(0, -3)) - Number.parseInt(this.state.inputValue) : this.state.output,
              inputValue: ""
            });
            break;
          case "*":
            this.setState({
              output: (typeof this.state.inputValue == "number") ? Number.parseInt(this.state.output.slice(0, -3)) * Number.parseInt(this.state.inputValue) : this.state.output,
              inputValue: ""
            });
            break;
          case "/":
            this.setState({
              output: (typeof this.state.inputValue == "number") ? Number.parseFloat(this.state.output.slice(0, -3)) / Number.parseFloat(this.state.inputValue) : this.state.output,
              inputValue: ""
            });
            break;
        }
        break;
        case "C":
          this.setState({ output: '', inputValue: '' });
          break;
      default:
        console.log('NOPE');
    }
  }

  render() {
    return (
      <div>
        <Output output={this.state.output} inputValue={this.state.inputValue} />
        <div>
          <Button value='7' handleClick={this.handleClick} />
          <Button value='8' handleClick={this.handleClick} />
          <Button value='9' handleClick={this.handleClick} />
          <Button value='=' handleClick={this.handleClick} />
          <Button value='C' handleClick={this.handleClick} /><br />
          <Button value='4' handleClick={this.handleClick} />
          <Button value='5' handleClick={this.handleClick} />
          <Button value='6' handleClick={this.handleClick} />
          <Button value='+' handleClick={this.handleClick} />
          <Button value='-' handleClick={this.handleClick} /><br />
          <Button value='1' handleClick={this.handleClick} />
          <Button value='2' handleClick={this.handleClick} />
          <Button value='3' handleClick={this.handleClick} />
          <Button value='*' handleClick={this.handleClick} />
          <Button value='/' handleClick={this.handleClick} /><br />
          <Button value='0' handleClick={this.handleClick} />
        </div>
      </div>
    );
  }
}