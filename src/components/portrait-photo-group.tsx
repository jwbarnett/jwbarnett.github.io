import React, { FunctionComponent } from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

type PhotoGroupProps = {
  photos: Array<any>
}

const PortraitPhotoGroup: FunctionComponent<PhotoGroupProps> = ({ photos }) => {
  const photoItems = photos.map((photo) =>
    <li className="photo-group__item">
      <Img className="photo-group__photo--portrait" fluid={photo}/>
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

export default PortraitPhotoGroup;

export const query = graphql`
  fragment portraitPhotoFields on S3ImageAsset {
    childImageSharp {
      fluid(maxWidth: 700) {
        ...GatsbyImageSharpFluid,
        ...GatsbyImageSharpFluidLimitPresentationSize
      }
    }
  }
`
