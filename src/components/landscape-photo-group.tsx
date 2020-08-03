import React, { FunctionComponent } from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

type PhotoGroupProps = {
  photos: Array<any>
}

const LandscapePhotoGroup: FunctionComponent<PhotoGroupProps> = ({ photos }) => {
  const photoItems = photos.map((photo) =>
    <li className="photo-group__item">
      <Img className="photo-group__photo--landscape" fluid={photo}/>
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

export default LandscapePhotoGroup;

export const query = graphql`
  fragment landscapePhotoFields on S3ImageAsset {
    childImageSharp {
      fluid(maxWidth: 700) {
        ...GatsbyImageSharpFluid,
        ...GatsbyImageSharpFluidLimitPresentationSize
      }
    }
  }
`
