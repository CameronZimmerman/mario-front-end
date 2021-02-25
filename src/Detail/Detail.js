import React, { Component } from 'react'
import { getCategories, updateCharacter, getCharacter, deleteCharacter } from '../api-utils.js'

export default class Create extends Component {
    state = {
        name: '',
        good_guy: false,
        age: 0,
        image_url: '',
        quote: '',
        category_id: 1,
        categories: [],
    }

    componentDidMount = async() => {
        console.log(this.props)
        let categories = await getCategories();
        let character = await getCharacter(this.props.match.params.name);
        this.setState(character)
        this.setState({categories: categories})
    }

    handleGeneralChange = (e, key) => {
        let stateObj = {}
        stateObj[key] = e.target.value
        this.setState(stateObj)
    }
    handleGoodGuyChange = () => {
        this.setState({good_guy: !this.state.good_guy})
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        let char = {
            name: this.state.name,
            good_guy: this.state.good_guy,
            image_url: this.state.image_url,
            age: this.state.age,
            category_id: this.state.category_id,
            quote: this.state.quote,
        }
        await updateCharacter(this.state.name, char)
        this.props.history.push('/');
    }
    handleDelete = async () => {
        await deleteCharacter(this.state.name);
        this.props.history.push('/');
    }
    
    render() {
        console.log(this.state);
        return (
            <div className = 'container'>
                <form onSubmit = {this.handleSubmit}>
                    <label>Name
                        <input disabled = {true} onChange = {(e) => this.handleGeneralChange(e,'name')} value = {this.state.name}/>
                    </label>
                    <label>Good guy?
                        <input type = 'checkbox' checked = {this.state.good_guy} onChange = {this.handleGoodGuyChange}></input>
                    </label>
                    <label>Age
                        <input type = 'number' onChange = {(e) => this.handleGeneralChange(e, 'age')} value = {this.state.age}></input>
                    </label>
                    <label>Image Url
                        <input onChange = {(e) => this.handleGeneralChange(e, 'image_url')} value = {this.state.image_url}></input>
                    </label>
                    <label>Quote
                        <input onChange = {(e) => this.handleGeneralChange(e, 'quote')} value = {this.state.quote}></input>
                    </label>
                    <label>Category
                        <select onChange = {(e) => this.handleGeneralChange(e, 'category_id')}>
                            {this.state.categories.map(category => {
                                return <option value = {category.id}>{category.category_name}</option>
                            })}
                        </select>
                    </label>
                    <button value = 'submit'> Update </button>
                    <button onClick = {this.handleDelete}> Delete </button>
                </form>
            </div>
        )
    }
}