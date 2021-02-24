import React, { Component } from 'react'
import request from 'superagent'

export default class List extends Component {
    state = {
        characters: [],
        search: '',
        category: ''
      }
      async componentDidMount(){
        await this.fetchAllCharacters();
      }
    
      handleNameChange = async (e) => {
        let searchBy = e.target.value;
        await this.setState({search: searchBy});
    
        if(searchBy === '') {
    
          await this.fetchAllCharacters();
        }
        else {
    
          let data = await request.get(`https://evening-bayou-98803.herokuapp.com/characters${this.state.search}`)
          await this.setState({characters: [data.body]});
    
        }
      }
    
      handleCategoryChange = async (e) => {
        let newCategory = e.target.value;
        await this.setState({category: newCategory})
    
        if(newCategory === '') {
    
          await this.fetchAllCharacters();
        }
        else {
          const data = await request.get(`https://evening-bayou-98803.herokuapp.com/categories/${newCategory}`);
          this.setState({characters: data.body})
        }
      }
    
      fetchAllCharacters = async() => {
        const data = await request.get('https://evening-bayou-98803.herokuapp.com/characters');
        this.setState({characters: data.body})
      }
      render() {
        return (
          <div className = 'container'>
            <section>
              <div>
                <label>Character: </label>
                  <select onChange = {this.handleNameChange}>
                    <option value = ''>All</option>
                    <option value = '/mario'>Mario</option>
                    <option value = '/luigi'>Luigi</option>
                    <option value = '/princess toadstool'>Princess Toadstool</option>
                    <option value = '/goomba'>Goomba</option>
                    <option value = '/bullet bill'>Bullet Bill</option>
                    <option value = '/bowser'>Bowser</option>
                  </select>
              </div>
    
              <div>
                <label>Categories: </label>
                  <select onChange = {this.handleCategoryChange}>
                    <option value = ''>All</option>
                    <option value = 'hero'>heros</option>
                    <option value = 'enemy'>enemies</option>
                    <option value = 'damsel'>damsels</option>
                    <option value = 'boss'>bosses</option>
                  </select>
              </div>
              
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
