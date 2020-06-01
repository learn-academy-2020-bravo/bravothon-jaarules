import React from 'react';
import './App.css';
import Select from 'react-select';


const options = [
  { value: 'gala', label: 'Gala' },
  { value: 'house', label: 'House' },
  { value: 'work', label: 'Work' },
];

const itemObj = {
  gala: ['chocolate fountain', 'go go dancers'],
  house: ['chips', 'guacamole'],
  work: ['hawaiian shirts', 'sandwiches'],
  empty: []
}

class App extends React.Component {
  state = {
    selectedOption: {value: 'empty'},
  };
  handleChange = selectedOption => {
    this.setState(
      { selectedOption },
      () => console.log(`Option selected:`, this.state)
    );
  };
  render() {
    const { selectedOption } = this.state;

    return (
      <>
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />
      <div>
        {itemObj[this.state.selectedOption.value].map((name, index) => {
          return <div>{name}</div>
        })}
      </div>
      </>
    );
  }
}

export default App;

