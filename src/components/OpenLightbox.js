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
        <Button onClick={() => openLightbox()}>
          Ponele play & abrid la galería
        </Button>
        <a
          href="https://www.instagram.com/protojulieta/"
          target="_blank"
          rel="noopener noreferrer"
          className="my-12 text-xl text-center text-gray-700 hover:text-red-600"
        >
          by @protojulieta
        </a>
      </ButtonContainter>
    </>
  )
}

export default OpenLightbox

const Button = styled.button`
  ${tw`hidden py-2 pr-12 text-base font-bold text-center text-gray-800 uppercase border-b-2 border-gray-900 md:block md:pr-0 hover:text-red-500`}
  body.dark & {
    ${tw`text-gray-800 border-gray-100`}
  }
`

const ButtonContainter = styled.div`
  ${tw`flex flex-col justify-center w-full m-auto mb-12 text-left md:px-12`}
`
