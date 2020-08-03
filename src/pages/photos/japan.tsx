import React, { FunctionComponent } from "react"
import { graphql } from "gatsby"
import PhotoLayout from "../../components/photo-layout"
import LandscapePhotoGroup from "../../components/landscape-photo-group"

interface Props {
  data: any
}

const JapanPhotos: FunctionComponent<Props> = ({ data }) => {
  const list = [
    data.japan.childImageSharp.fluid,
    data.japan.childImageSharp.fluid,
    data.japan.childImageSharp.fluid,
    data.japan.childImageSharp.fluid,
    data.japan.childImageSharp.fluid,
    data.japan.childImageSharp.fluid,
    data.japan.childImageSharp.fluid];

  const introText: string = 
    "A three week holiday in Japan, basing ourselves in Tokyo and Osaka, and \
    taking various day trips to the other nearby cities";
  
  return(
    <PhotoLayout 
        titlePhoto={data.japan.childImageSharp.fluid}
        titleText="JAPAN"
        subtitleText="August 2018"
        introText={introText}>
      <div>
        <LandscapePhotoGroup photos={list}/>
      </div>
    </PhotoLayout>
  );
};

export default JapanPhotos;

export const query = graphql`
  query {
    japan: s3ImageAsset(Key: {eq: "photos/japan/miyajima.jpg"}) { ...titlePhotoFields }
  }
`