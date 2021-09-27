import { Link } from "gatsby"
import React from "react"
import {
  GiSpellBook,
  GiBookCover,
  GiRomanToga,
  GiRingedPlanet,
} from "react-icons/gi"
import { MdPersonPin, MdLocalMovies } from "react-icons/md"
import { IoMdMicrophone, IoMdMusicalNotes } from "react-icons/io"

const PodcastCategorias = () => (
  <>
    <Link to={`/podcasts/musicales`} className="bg-gray-800 hover:text-white">
      <IoMdMusicalNotes />
      <span>Musicales</span>
    </Link>
    <Link to={`/podcasts/cine`} className="bg-gray-800 hover:text-white">
      <MdLocalMovies />
      <span>Cine</span>
    </Link>
    <Link
      to={`/podcasts/entrevistas/`}
      className="bg-gray-800 hover:text-white"
    >
      <IoMdMicrophone />
      <span>Entrevistas</span>
    </Link>
    <Link to={`/podcasts/perfiles`} className="bg-gray-800 hover:text-white">
      <MdPersonPin />
      <span>Perfiles</span>
    </Link>
    <Link to={`/podcasts/historias`} className="bg-gray-800 hover:text-white">
      <GiSpellBook />
      <span>Historias</span>
    </Link>
    <Link to={`/podcasts/astrologia`} className="bg-gray-800 hover:text-white">
      <GiRingedPlanet />
      <span>Astrología</span>
    </Link>
    <Link to={`/podcasts/politica`} className="bg-gray-800 hover:text-white">
      <GiRomanToga />
      <span>Política</span>
    </Link>
    <Link to={`/podcasts/literatura`} className="bg-gray-800 hover:text-white">
      <GiBookCover />
      <span>Literatura</span>
    </Link>
  </>
)

export default PodcastCategorias
