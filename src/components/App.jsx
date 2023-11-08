import '../index.css';
import axios from 'axios';

import { Component } from 'react';
//import { nanoid } from 'nanoid';

import { Modal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';
import { Loader } from './Loader/Loader'


import { Button } from './Button/Button'
import { ImageGallery } from './ImageGallery/ImageGallery';


// {
// "id": 3273425,
// "tags": "northern lights, aurora, light phenomenon",
// "webformatURL": "https://pixabay.com/get/ge6ea4e24ead762ed5fdfea56ddd35b5aa3acf45537a5089ac2eb228456589c9fdf043eb269339ec69a97455a3f0140315036aee3942bafaea6d32f3232836538_640.jpg",
// "largeImageURL": "https://pixabay.com/get/gbb17875f4860de1c77a4a53350d8b3356b7f11017f33ad64a980731dba44f393375d73b9a96ce8852d2bd581dd372bd4511bef8534036a219809502ae45d3605_1280.jpg",
// }


export class App extends Component {
  state = {
    pictures: [],
    page: 1,
    per_page: 12,
    totalPictures: '',

    q: '',


    isLoading: false,
    error: null,
    
  }

  fetchPictures = async () => {
    const { data } = await axios.get('https://pixabay.com/api/?key=39251396-18173d9ed82e61dff39932134&image_type=photo&orientation=horizontal&safesearch=true&q=gold&page=3&per_page=12');

    this.setState({
      pictures: data.hits,
      totalPictures: data.totalHits

    })


  }

  componentDidMount() {
    this.fetchPictures();
  }

  render() {   
    return (
      <>
        <h1>3-nd Image Gallery HW! 🐱‍🏍</h1>

        <Searchbar
          //onChange={this.handleChange}    
        />

        <Loader/>


        
        <ImageGallery
          pictures={this.state.pictures}
          // filter={this.state.filter}
          // handleDeleteContact={this.handleDeleteContact}
        >

          <Loader/>
                  
        </ImageGallery>  


        

                 
             
      </>
    );
  };
}

