import React from "react"
import { useLightbox } from "simple-react-lightbox"
import tw from "twin.macro"
import styled from "@emotion/styled"

const OpenLightbox = (props) => {
  // Custom Hook
  const { openLightbox } = useLightbox()

  return (
    <>
      <ButtonContainter>
        <Button onClick={() => openLightbox()}>Abrir galería</Button>
      </ButtonContainter>
    </>
  )
}

export default OpenLightbox

const Button = styled.button`
  ${tw`py-2 pr-12 text-base font-bold text-center uppercase border-b-2 border-gray-900 md:pr-0`}
  body.dark & {
    ${tw`text-white border-gray-100`}
  }
`

const ButtonContainter = styled.div`
  ${tw`max-w-6xl m-auto text-left `}
`
