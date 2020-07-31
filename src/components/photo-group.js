import React from 'react';
import Img from 'gatsby-image';

const PhotoGroup = props => {
  const photos = props.photos;
  const photoItems = photos.map((photo) =>
    <li className="photo-group__item">
      <Img className="photo-group__photo" fluid={photo}/>
    </li>
  );
  return(
    <div>
      <ul className="photo-group">
        {photoItems}
      </ul>
    </div>
  );
};

export default PhotoGroup;