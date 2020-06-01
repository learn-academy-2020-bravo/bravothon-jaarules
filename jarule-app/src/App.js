import React from 'react';
import './App.css';
import Select from 'react-select';


const options = [
  { value: 'birthdayParty', label: 'Birthday Party' },
  { value: 'happyHour', label: 'Happy Hour' },
  { value: 'office', label: 'Office Party' },
  { value: 'wedding', label: 'Wedding Party'},
  { value: 'holiday', label: 'Holiday Party'},
  { value: 'mitzvah', label: 'Bar/Bat Mitzvah'},
  { value: 'graduation', label: 'Graduation Party'}

];

const itemObj = {
  birthdayParty: ['venue', 'birthday cake', 'Entertainment rentals', 'Party favors', 'Food and beverage', 'plates, cups, napkins, silverware'],
  happyHour: ['chips', 'guacamole'],
  office: ['hawaiian shirts', 'sandwiches'],
  wedding: ['venue', 'party supplies', 'flower, invitations, tables and chairs'],
  holiday: ['glitter decor, warm drinks, party favors (unique), party supplies'],
  mitzvah: ['venue, food and bev, entertainment, party supplies'],
  graduation: ['venue, party supplie, food and bev, entertainment'],
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
