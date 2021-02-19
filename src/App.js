import './App.css';
import React, { Component } from 'react'
import request from 'superagent';

export default class App extends Component {
  state = {
    characters: [],
    search: ''
  }
  async componentDidMount(){
    let bros = await (await request.get('https://mariobrosapi.herokuapp.com/bros')).body.response;
    console.log(bros);

    await this.setState({characters: bros})
  }

  handleCategory = async (e) => {
    let searchBy = e.target.value;
    await this.setState({search: searchBy});

    let char = await (await request.get(`https://mariobrosapi.herokuapp.com/bros${this.state.search}`)).body.response;

    await this.setState({characters: [char]});
  
  }
  render() {
    return (
      <div className = 'container'>
        <section>

          <label>Character: </label>

          <select onChange = {this.handleCategory}>
            <option value = ''>All</option>
            <option value = '/mario'>Mario</option>
            <option value = '/luigi'>Luigi</option>
            <option value = '/princess toadstool'>Princess Toadstool</option>
            <option value = '/goomba'>Goomba</option>
            <option value = '/bullet bill'>Bullet Bill</option>
            <option value = '/bowser'>Bowser</option>
          </select>

        </section>

        <section>
          {
            this.state.characters.map(character => <div><img src = {character.image_url} alt = {character.name}/><p style = {{backgroundColor: 'white'}}>{character.name} is a {character.good_guy ? <span>good</span> : <span>bad</span>} person. They are {character.age} years old. Their favorite quote is "{character.quote}"</p></div>)
          }
        </section>
        
      </div>
    )
  }
}
