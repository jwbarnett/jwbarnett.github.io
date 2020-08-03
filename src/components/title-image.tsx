import React, { FunctionComponent } from "react";
import { graphql } from "gatsby";
import Img from 'gatsby-image';

type TitleImageProps = {
  photo: any,
  titleText: string,
  subtitleText: string
}

const TitleImage: FunctionComponent<TitleImageProps> = ({ photo, titleText, subtitleText }) => (
  <div className="title-photo">
    <Img className="title-photo__photo" fluid={photo}/>
    
    <div className="title-photo__text">
      <p className="title-photo__text--title">{titleText}</p>
      <p className="title-photo__text--subtitle">{subtitleText}</p>
    </div>
  </div>
);

export default TitleImage;

export const query = graphql`
  fragment titlePhotoFields on S3ImageAsset {
    childImageSharp {
      fluid(maxWidth: 1500) {
        ...GatsbyImageSharpFluid,
        ...GatsbyImageSharpFluidLimitPresentationSize
      }
    }
  }
`
