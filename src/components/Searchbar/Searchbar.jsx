export const Searchbar = ({
    searchQuery,
    onChange,
    handleSubmit
    
}) => {

    // const handleOnChange = () => {
    //    console.log(searchQuery) 
    // }

    return (
            <header className="searchbar">
                <form
                    onSubmit={handleSubmit}
                    className="form">  
                <input
                className="input"
                name="searchQuery"
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                onChange={onChange}
                value={searchQuery}        
                />
                    
                <button type="submit" className="button">
                <span className="button-label">Search</span>
                </button>  
            </form>
            </header>
        )
    

}





// import { Component } from 'react';

// export class Searchbar extends Component { 

//     // handleSubmit = (event) => {
//     //     event.preventDefault();
//     //     // console.log("Submit", event)

//     //     //const searchQuery = event.currentTarget.elements.number.value;

//     //     const searchQuery = event.target[0].value;


//     //     // this.setState({
//     //     //     searchQuery: searchQuery
//     //     // })
        
//     //     // const number = event.currentTarget.elements.number.value;

//     //     // const contact = {
//     //     //     name,
//     //     //     number //: Number.parseFloat(number), //має бути число
//     //     // };
            
//     //     this.props.fetchPictures(searchQuery)

//     //     console.log("Submit", searchQuery)

//     // }

//     render () {
//         return (
//             <header className="searchbar">
//                 <form
//                     onSubmit={this.handleSubmit}
//                     className="form">  
//                 <input
//                 className="input"
//                 name="searchQuery"
//                 type="text"
//                 autoComplete="off"
//                 autoFocus
//                 placeholder="Search images and photos"
//                 //onChange={this.onChange}
//                 //value={this.state.name}        
//                 />
                    
//                 <button type="submit" className="button">
//                 <span className="button-label">Search</span>
//                 </button>  
//             </form>
//             </header>
//         )
//     }
// }