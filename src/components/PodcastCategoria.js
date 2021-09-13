import { Link } from "gatsby"
import React from "react"
import {
  GiSpellBook,
  GiFlame,
  GiBookCover,
  GiRomanToga,
  GiRingedPlanet,
} from "react-icons/gi"
import { MdPersonPin, MdLocalMovies } from "react-icons/md"
import { IoMdMicrophone, IoMdMusicalNotes, IoPlanet } from "react-icons/io"

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
    <Link to={`/podcasts/astrologia`} className="bg-gray-800 hover:text-white">
      <GiRingedPlanet />
      <span>Astrología</span>
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
