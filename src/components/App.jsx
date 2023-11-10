import '../index.css';
import axios from 'axios';
import Notiflix, { Notify } from 'notiflix'; 


import { Component } from 'react';
//import { nanoid } from 'nanoid';

import { Searchbar } from './Searchbar/Searchbar';
import { Loader } from './Loader/Loader'
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    pictures: [],
    totalPictures: 0,
    
    page: 1,
    perPage: 12,
    totalPages: 0,
    searchQuery: '',

    //searchQuery: 'book',
    isOpenModal: false,
    isMorePage: false,
    isLoading: false,
    error: null
  }

  fetchPictures = async () => {
    try {
      this.setState({
        isLoading: true,
      })

      let searchQuery = this.state.searchQuery;
      let page = this.state.page;
      let perPage = this.state.perPage;
      //let totalPages = this.state.totalPages;

      const urlApi = `https://pixabay.com/api/`;
      
      const params = new URLSearchParams({
        q: searchQuery,
        key: `39251396-18173d9ed82e61dff39932134`,
        image_type: `photo`,
        orientation: `horizontal`,
        safesearch: `true`,
        page: page,
        per_page: perPage,
      });

      const { data } = await axios.get(`${urlApi}?${params}`);

      let totalPages = Math.ceil(data.totalHits/perPage);
      //console.log(totalPages);

      this.setState({
        pictures: data.hits,
        totalPictures: data.totalHits,
        totalPages: totalPages,
      })
    }
    catch (error) {
      this.setState({error: error.message})
    }
    finally {
      this.setState({
        isLoading: false
      })
    }
  }

  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
        event.preventDefault();

        const searchQuery = event.currentTarget.elements.searchQuery.value.trim();
        //const searchQuery = event.target[0].value;

    if (searchQuery === "") {
      Notify.warning(`Attention! Field must be filled.`);
    }
    else { 
      this.fetchPictures();

      //  if(this.state.totalPictures === 0) {
      //       Notify.warning(`Sorry, there are no images matching your search query. Please try again.`);
      //   } else {
      //       Notify.success(`Hooray! We found ${this.state.totalPictures} images.`);
    
      //   // element.list.insertAdjacentHTML(`beforeend`, createMarkup(allPict.hits));
      //   // lightbox.refresh();
        
      //   // if (page < totalPages){
      //   //     element.loadMore.classList.replace(`load-more-hidden`, `load-more`)
      //   //  }
      //  }
        
      console.log("Submit", searchQuery)
    }
        // this.setState({
        //     searchQuery: searchQuery
        // })
        
        // const contact = {
        //     name,
        //     number //: Number.parseFloat(number), //має бути число
        // };
            
        // this.props.fetchPictures(searchQuery)  
  }
  
  handleClick = () => { 
    this.setState({ page: this.state.page + 1 })
    //console.log(this.state.page)
  }  

  componentDidMount() {

  }

  componentDidUpdate(_, prevState) {
    if (prevState.page !== this.state.page) { 
        this.fetchPictures();
    }
  }

  render() {   
    return (
      <>
        {/* <h1>3-nd Image Gallery HW! 🐱‍🏍</h1> */}
        <Searchbar
          searchQuery={this.state.searchQuery}
          onChange={this.handleInputChange}
          handleSubmit={this.handleSubmit}    
        />
        {this.state.isLoading && <Loader/>}
        {this.state.error !== null && (
          <p className="error-bage">
            Oops, some error occured... {this.state.error}
          </p>
        )}
       
        <ImageGallery
          pictures={this.state.pictures}
          // filter={this.state.filter}
          // handleDeleteContact={this.handleDeleteContact}
        >                  
        </ImageGallery>

        {this.state.totalPages >= this.state.page &&
          <Button
            handleClick={this.handleClick}
          />}

        {this.state.isOpenModal && <Modal
          pictures={this.state.pictures}
        />}
      </>
    );
  };
}