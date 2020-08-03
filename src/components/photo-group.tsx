import React, { FunctionComponent } from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

type PhotoGroupProps = {
  photos: Array<any>
}

const PhotoGroup: FunctionComponent<PhotoGroupProps> = ({ photos }) => {
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

export const query = graphql`
  fragment photoFields on S3ImageAsset {
    childImageSharp {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid,
        ...GatsbyImageSharpFluidLimitPresentationSize
      }
    }
  }
`
