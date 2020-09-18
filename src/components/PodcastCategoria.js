import { Link } from "gatsby"
import React from "react"

import { GiSpellBook, GiFlame, GiBookCover, GiRomanToga } from "react-icons/gi"

import { MdPersonPin, MdLocalMovies } from "react-icons/md"
import { IoMdMicrophone, IoMdMusicalNotes } from "react-icons/io"
import tw from "twin.macro"
import styled from "@emotion/styled"

const PodcastCategorias = () => (
  <>
    <Link to={`/podcasts/musicales`} className="bg-gray-800 hover:text-white">
      <IoMdMusicalNotes />
      <span>musicales</span>
    </Link>
    <Link to={`/podcasts/cine`} className="bg-gray-800 hover:text-white">
      <MdLocalMovies />

      <span>cine</span>
    </Link>

    <Link
      to={`/podcasts/entrevistas/`}
      className="bg-gray-800 hover:text-white"
    >
      <IoMdMicrophone />
      <span>entrevistas</span>
    </Link>
    <Link to={`/podcasts/perfiles`} className="bg-gray-800 hover:text-white">
      <MdPersonPin />

      <span>perfiles</span>
    </Link>
    <Link to={`/podcasts/historias`} className="bg-gray-800 hover:text-white">
      <GiSpellBook />

      <span>historias</span>
    </Link>
    <Link to={`/podcasts/previas`} className="bg-gray-800 hover:text-white">
      <GiFlame />

      <span>previas</span>
    </Link>
    <Link to={`/podcasts/politica`} className="bg-gray-800 hover:text-white">
      <GiRomanToga />

      <span>política</span>
    </Link>
    <Link to={`/podcasts/literatura`} className="bg-gray-800 hover:text-white">
      <GiBookCover />

      <span>Literatura</span>
    </Link>
  </>
)

export default PodcastCategorias

const HomeHeroLinks = styled.div`
  ${tw`grid justify-center w-full grid-cols-4 py-6 md:pt-24`}
  min-height: 60vh
`
