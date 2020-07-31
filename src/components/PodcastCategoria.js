import { Link } from "gatsby"
import React from "react"

import {
  GiSpellBook,
  GiAstronautHelmet,
  GiBookCover,
  GiRomanToga,
} from "react-icons/gi"
import { MdPersonPin, MdLocalMovies } from "react-icons/md"
import { IoMdMicrophone, IoMdMusicalNotes } from "react-icons/io"

const PodcastCategorias = () => (
  <>
    <Link
      to={`/podcasts/musicales`}
      className="block font-mono text-base text-red-500 hover:text-white"
    >
      <IoMdMusicalNotes />

      <span>musicales</span>
    </Link>
    <Link
      to={`/podcasts/cine`}
      className="block font-mono text-base text-red-500 hover:text-white"
    >
      <MdLocalMovies />

      <span>cine</span>
    </Link>

    <Link
      to={`/podcasts/entrevistas/`}
      className="block font-mono text-base text-red-500 hover:text-white"
    >
      <IoMdMicrophone />
      <span>entrevistas</span>
    </Link>
    <Link
      to={`/podcasts/perfiles`}
      className="block font-mono text-base text-red-500 hover:text-white"
    >
      <MdPersonPin />

      <span>perfiles</span>
    </Link>
    <Link
      to={`/podcasts/historias`}
      className="block font-mono text-base text-red-500 hover:text-white"
    >
      <GiSpellBook />

      <span>historias</span>
    </Link>
    <Link
      to={`/podcasts/psiconautica`}
      className="block font-mono text-base text-red-500 hover:text-white"
    >
      <GiAstronautHelmet />

      <span>psiconáutica</span>
    </Link>
    <Link
      to={`/podcasts/politica`}
      className="block font-mono text-base text-red-500 hover:text-white"
    >
      <GiRomanToga />

      <span>política</span>
    </Link>
    <Link
      to={`/podcasts/literatura`}
      className="block font-mono text-base text-red-500 hover:text-white"
    >
      <GiBookCover />

      <span>Literatura</span>
    </Link>
  </>
)

export default PodcastCategorias
