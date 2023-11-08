//import css from './Modal.module.css';
import React, { Component } from 'react';

//import { StyledModal } from './Styled';



export class Modal extends Component {
    render () {
        return (
            <div className="modal">
                    <button
                        // onClick={this.props.closeModal}
                        className="closeBtn">
                        ✖
                    </button>
                        
                <h3>picture</h3>
                    <img src=""
                        alt="" />
                </div>

            
        )
    }
}

// import * as basicLightbox from 'basiclightbox'

// const instance = basicLightbox.create(`
//     <div class="modal">
//         <p>
//             Your first lightbox with just a few lines of code.
//             Yes, it's really that simple.
//         </p>
//     </div>
// `)

// instance.show()

// //======//

// import * as basicLightbox from 'basiclightbox'

// const instance = basicLightbox.create(`
//     <img src="assets/images/image.png" width="800" height="600">
// `)

// instance.show()
