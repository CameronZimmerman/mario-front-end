import React, { Component } from 'react'
import { getCharacters } from '../api-utils.js'
import { Link } from 'react-router-dom'

export default class List extends Component {
    state = {
        characters: [],
      }
      async componentDidMount(){
        let characters = await getCharacters()
        this.setState({characters: characters})
      }
      render() {
        return (
          <div className = 'container'>
            <section>
              {
                this.state.characters.map(character => <Link to={`/characters/${character.name}`} ><div><img src = {character.image_url} alt = {character.name}/><p style = {{backgroundColor: 'white'}}>{character.name} is a {character.good_guy ? <span>good</span> : <span>bad</span>} person. They are {character.age} years old. Their favorite quote is "{character.quote}"</p></div></Link>)
              }
            </section>
            
          </div>
        )
      }
}
