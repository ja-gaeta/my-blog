import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const Hero = ({ img, className, children }) => {
  return (
    <BackgroundImage className={className} fluid={img}>
      {children}
    </BackgroundImage>
  )
}

export default styled(Hero)`
  min-height: "50vh";
  background: "none";
  background-position: center;
  background-size: cover;
  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: center;
`
