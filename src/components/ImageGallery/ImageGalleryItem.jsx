//import css from './FriendList.module.css';

export const ImageGalleryItem = ({ id, tags, webformatURL }) => {
    
    return (
        <li className="gallery-item" id={id}>
            <img
                src={webformatURL}
                alt={tags}
            />
        </li>
    )
}