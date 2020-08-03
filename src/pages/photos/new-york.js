import React from "react"
import { graphql } from "gatsby"
import PhotoLayout from "../../components/photo-layout"
import PhotoGroup from "../../components/photo-group"

export default ({ data }) => {
  const list = [
    data.centralPark.childImageSharp.fluid,
    data.centralPark.childImageSharp.fluid,
    data.centralPark.childImageSharp.fluid,
    data.centralPark.childImageSharp.fluid,
    data.centralPark.childImageSharp.fluid,
    data.centralPark.childImageSharp.fluid,
    data.centralPark.childImageSharp.fluid];

  const introText = 
    "We were invited to a wedding in New Jersey towards the end of 2019 and \
    decided to make a week-long trip of it, dropping by Manhattan too";
  
  return(
    <PhotoLayout
        titlePhoto={data.centralPark.childImageSharp.fluid}
        titleText="NEW YORK"
        subtitleText="September 2019"
        introText={introText}>
      <div>
        <PhotoGroup photos={list}/>
      </div>
    </PhotoLayout>
  );
}

export const query = graphql`
  query {
    centralPark: s3ImageAsset(Key: {eq: "photos/new-york/central-park.jpg"}) { ...titlePhotoFields }
  }
`