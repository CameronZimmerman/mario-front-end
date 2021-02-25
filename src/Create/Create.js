import React, { Component } from 'react'

export default class Create extends Component {
    state = {
        name: '',
        good_guy: false,
        age: 0,
        image_url: '',
        quote: '',
        category_id: 0,
        categories: [],
    }
    handleChange = (e, key) => {
        let stateObj = {}
        stateObj[key] = e.target.value
        this.setState(stateObj)
    }
    handleGoodGuyChange = () => {
        this.setState({good_guy: !this.state.good_guy})
    }
    
    render() {
        return (
            <div className = 'container'>
                <form>
                    <label>Name
                        <input></input>
                    </label>
                    <label>Good guy?
                        <input type = 'checkbox'></input>
                    </label>
                    <label>Age
                        <input type = 'number'></input>
                    </label>
                    <label>Image Url
                        <input></input>
                    </label>
                    <label>Quote
                        <input></input>
                    </label>
                    <label>Category
                        <select>
                            {this.state.categories.map(category => {
                                return <option value = {category.id}>{category.category_name}</option>
                            })}
                        </select>
                    </label>
                </form>
            </div>
        )
    }
}
