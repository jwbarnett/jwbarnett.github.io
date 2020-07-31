import React from 'react';
import Img from 'gatsby-image';

const TitleImage = props => {
  const photo = props.photo;
  return(
    <div className="title-photo">
      <Img className="title-photo__photo" fluid={photo}/>
      
      <div className="title-photo__text">
        <p className="title-photo__text--title">{props.titleText}</p>
        <p className="title-photo__text--subtitle">{props.subtitleText}</p>
      </div>
    </div>
  );
};

export default TitleImage;
