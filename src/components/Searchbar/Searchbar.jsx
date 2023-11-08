import { Component } from 'react';

export class Searchbar extends Component { 
    state = {
        
    }
    
    handleSubmit = (event) => {
        event.preventDefault();

        // const name = event.currentTarget.elements.name.value;
        // const number = event.currentTarget.elements.number.value;

        // const contact = {
        //     name,
        //     number //: Number.parseFloat(number), //має бути число
        // };
            
        // this.props.handleAddContact(contact)
        console.log("Submit")
    }

    render () {
        return (
            <header className="searchbar">
                <form onSubmit={this.handleSubmit}
                    className="form">
                <button type="submit" className="button">
                <span className="button-label">Search</span>
                </button>

                <input
                className="input"
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                //onChange={this.onChange}
                //value={this.state.name}        
                />
            </form>
            </header>
        )
    }
}