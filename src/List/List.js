import React, { Component } from 'react'

export default class List extends Component {
    state = {
        characters: [],
      }
      async componentDidMount(){

      }
      render() {
        return (
          <div className = 'container'>
            <section>
              {
                this.state.characters.map(character => <div><img src = {character.image_url} alt = {character.name}/><p style = {{backgroundColor: 'white'}}>{character.name} is a {character.good_guy ? <span>good</span> : <span>bad</span>} person. They are {character.age} years old. Their favorite quote is "{character.quote}"</p></div>)
              }
            </section>
            
          </div>
        )
      }
}
