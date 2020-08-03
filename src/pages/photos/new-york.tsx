import React, { FunctionComponent } from "react"
import { graphql } from "gatsby"
import PhotoLayout from "../../components/photo-layout"
import LandscapePhotoGroup from "../../components/landscape-photo-group"
import PortraitPhotoGroup from "../../components/portrait-photo-group"

interface Props {
  data: any
}

const NewYorkPhotos: FunctionComponent<Props> = ({ data }) => {
  const list1 = [
    data.highline1.childImageSharp.fluid,
    data.highline2.childImageSharp.fluid,
  ];

  const list2 = [
    data.highline3.childImageSharp.fluid,
    data.honeycomb.childImageSharp.fluid,
    data.highline3.childImageSharp.fluid,
  ]

  const introText = 
    "We were invited to a wedding in New Jersey towards the end of 2019 and \
    decided to make a week-long trip of it, dropping by Manhattan too";
  
  return(
    <PhotoLayout
        titlePhoto={data.centralParkSkyline1.childImageSharp.fluid}
        titleText="NEW YORK"
        subtitleText="September 2019"
        introText={introText}>
      <div>
        <LandscapePhotoGroup photos={list1}/>
        <PortraitPhotoGroup photos={list2}/>

        <p>That was the skyline, here are some other photos:</p>

        <LandscapePhotoGroup photos={list1}/>
      </div>
    </PhotoLayout>
  );
}

export default NewYorkPhotos;

export const query = graphql`
  query {
    highline1: s3ImageAsset(Key: {eq: "photos/new-york/highline-1.jpg"}) { ...landscapePhotoFields },
    highline2: s3ImageAsset(Key: {eq: "photos/new-york/highline-2.jpg"}) { ...landscapePhotoFields },
    highline3: s3ImageAsset(Key: {eq: "photos/new-york/highline-3.jpg"}) { ...portraitPhotoFields },
    honeycomb: s3ImageAsset(Key: {eq: "photos/new-york/honeycomb.jpg"}) { ...portraitPhotoFields },
    walkSign: s3ImageAsset(Key: {eq: "photos/new-york/walk-sign.jpg"}) { ...landscapePhotoFields },
    nbcSign: s3ImageAsset(Key: {eq: "photos/new-york/nbc-sign.jpg"}) { ...landscapePhotoFields },
    topRockView1: s3ImageAsset(Key: {eq: "photos/new-york/top-rock-view-1.jpg"}) { ...landscapePhotoFields },
    topRockView2: s3ImageAsset(Key: {eq: "photos/new-york/top-rock-view-2.jpg"}) { ...landscapePhotoFields },
    atlas: s3ImageAsset(Key: {eq: "photos/new-york/atlas.jpg"}) { ...landscapePhotoFields },
    flags: s3ImageAsset(Key: {eq: "photos/new-york/flags.jpg"}) { ...landscapePhotoFields },
    pikachu: s3ImageAsset(Key: {eq: "photos/new-york/pikachu.jpg"}) { ...portraitPhotoFields },
    nintendoStore: s3ImageAsset(Key: {eq: "photos/new-york/nintendo-store.jpg"}) { ...landscapePhotoFields },
    libraryBuilding: s3ImageAsset(Key: {eq: "photos/new-york/library-building.jpg"}) { ...landscapePhotoFields },
    libraryInside: s3ImageAsset(Key: {eq: "photos/new-york/library-inside.jpg"}) { ...portraitPhotoFields },
    centralParkSkyline1: s3ImageAsset(Key: {eq: "photos/new-york/central-park-skyline-1.jpg"}) { ...titlePhotoFields },
    centralParkSkyline2: s3ImageAsset(Key: {eq: "photos/new-york/central-park-skyline-2.jpg"}) { ...landscapePhotoFields },
    newJerseySkyline1: s3ImageAsset(Key: {eq: "photos/new-york/new-jersey-skyline-1.jpg"}) { ...landscapePhotoFields },
    newJerseySkyline2: s3ImageAsset(Key: {eq: "photos/new-york/new-jersey-skyline-2.jpg"}) { ...landscapePhotoFields },
    newJerseySkyline3: s3ImageAsset(Key: {eq: "photos/new-york/new-jersey-skyline-3.jpg"}) { ...landscapePhotoFields },
    empireState: s3ImageAsset(Key: {eq: "photos/new-york/empire-state.jpg"}) { ...portraitPhotoFields },
    empireStateView1: s3ImageAsset(Key: {eq: "photos/new-york/empire-state-view-1.jpg"}) { ...landscapePhotoFields },
    empireStateView2: s3ImageAsset(Key: {eq: "photos/new-york/empire-state-view-2.jpg"}) { ...landscapePhotoFields },
    statueLiberty: s3ImageAsset(Key: {eq: "photos/new-york/statue-liberty.jpg"}) { ...portraitPhotoFields },
    brooklynBridgeView1: s3ImageAsset(Key: {eq: "photos/new-york/brooklyn-bridge-view-1.jpg"}) { ...landscapePhotoFields },
    brooklynBridgeView2: s3ImageAsset(Key: {eq: "photos/new-york/brooklyn-bridge-view-2.jpg"}) { ...landscapePhotoFields },
    brooklynBridgeView3: s3ImageAsset(Key: {eq: "photos/new-york/brooklyn-bridge-view-3.jpg"}) { ...landscapePhotoFields }
  }
`