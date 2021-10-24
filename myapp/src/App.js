import React, {Component} from 'react';
import Ninjas from './ninjas';
import AddNinja from './AddNinja';

class App extends Component {
  state = {
    ninjas : [
      {name:'Ryu',age:24, belt:'black',id:1 },
      {name:'misha', age:50,belt:"green",id:2},
      {name:'crystal',age:30,belt:"pink",id:3 }
    ]
  }
  addNinja = (ninja) => {
      ninja.id = Math.random();
      let ninjas = [...this.state.ninjas, ninja];
      this.setState ({
        ninjas : ninjas
      })
      // console.log(ninja);
  }

  deleteNinja = (id) =>{
    // console.log(id);
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !==id
    })
    this.setState({
      ninjas: ninjas
    })

  }
  render(){
    return (
    <div className="App">
      <header className="App-header">
       <h1>My first React app</h1>
       <p>welcome:)</p>
       <Ninjas deleteNinja = {this.deleteNinja} ninjas={this.state.ninjas}/>
       <AddNinja addNinja = {this.addNinja}/>
      </header>
    </div>
  );
  }
}

export default App;
