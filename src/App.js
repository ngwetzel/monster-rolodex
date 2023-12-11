
import './App.css';
import { Component } from 'react';
import CardList from './components/card-list/card-list.component.jsx';
import SearchBox from './components/search-box/search-box.component.jsx';

class App extends Component {
constructor() {
  super();
  this.state = {
    monsters:[],
    searchField: ''
};
console.log('constructor');
}

componentDidMount() {
  console.log('componentDidMount')
  fetch("https://jsonplaceholder.typicode.com/users")
.then(response => 
  response.json())
  .then((users) => this.setState(() => {
    return {monsters: users}
  }))
  console.log(this.state);
}

onSearchChange = (event) => {
  const searchField = event.target.value.toLocaleLowerCase();

this.setState(() => {
  return {searchField};
});
}
  render() {
    console.log('render');

    const {monsters, searchField} = this.state;
    const {onSearchChange} = this;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField); 
    });
  return (
    <div className="App">


<SearchBox className='monster-search-box' placeholder='search monsters' onChangeHandler={onSearchChange}/>

<CardList monsters={filteredMonsters}/>
  
 
    </div>
  
  );
  
}
}
export default App;
