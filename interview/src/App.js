import React , { useState }from 'react';
//import logo from './logo.svg';
import './App.css';
import { Multiselect } from 'multiselect-react-dropdown';

function App() {
  const data=[
    {
      Language:'English',
      id:1
    },
    {
      Language:'Mandrian',
      id:2
    },
    {
      Language:'Tamil',
      id:3
    },
    {
      Language:'Urdu',
      id:4
    },
    {
      Language:'Others',
      id:5
    }

  ]
  const [options]= useState(data);
  this.state = {
    Language: '',
    id: '',
};

function handleChange(value) {
  this.setState({
      Language: value
  });
}
  function onSelect(selectedList, selectedItem) {
    if(this.selectedItem=="Other")
    {
      
        <label>
          Enter Language:
          <input type="text" value={this.state.new} onChange={(e) =>this.handleChange(e.target.value)} />
          <input type="submit" value="Add Word" onClick={() => this.increment()} />
      </label>
    }
  }
  
  return (
    <div style={{width:'90%',justifyContent:'center',display:'flex'}}>
      <div className="App">
        <h3 style={{color:"blue"}}>Languages</h3>
        <Multiselect 
          options={options} 
          displayValue="Language"
          placeholder="Select"
          onSelect={this.onSelect}
        />
        
    
      </div>
    </div>
  );
}

export default App;
