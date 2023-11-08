import { ImageGalleryItem } from './ImageGalleryItem';

//import css from './FriendList.module.css';

export const ImageGallery = ({pictures}) => {

    return (
        <ul className="gallery">
            {pictures
                .map(pictures => (
                    <ImageGalleryItem
                        key={pictures.id}
                        id={pictures.id}
                        tags = {pictures.tags}
                        webformatURL={pictures.webformatURL}
                        largeImageURL={pictures.largeImageURL}                     
                />
            ))}
        </ul>
    )
}