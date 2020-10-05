import React, { useState } from "react"
import { useSpring, animated } from "react-spring"
import { IoMdEye } from "react-icons/io"
import { kebabCase } from "lodash"
import { Link } from "gatsby"
const Toggle = (props) => {
  const [isToggled, setToggle] = useState(false)
  const fade = useSpring({
    transform: isToggled ? "translateY(0px)" : "translateY(300px)",
    config: { mass: 3, tension: 500, friction: 80 },
  })
  return (
    <div>
      <animated.div
        className="absolute inset-0 z-40 px-4 pt-4 pb-2 bg-gray-800"
        style={fade}
      >
        <Link
          to={`/columnas/${kebabCase(props.author)}/${kebabCase(props.slug)}/`}
          className="block pr-12 mb-1 font-sans text-2xl text-red-500 hover:text-white"
        >
          {props.title}
        </Link>

        <p className="text-sm">{props.text}</p>
        <button
          className="absolute bottom-0 left-0 right-0 flex items-center justify-between w-full p-2 px-4 font-sans text-center bg-gray-800 outline-none listen hover:text-red-500"
          onClick={() => setToggle(!isToggled)}
        >
          <span className="text-white">By {props.author}</span>
          <span>cerrar</span>
        </button>
      </animated.div>
      <button
        className="absolute top-0 right-0 z-50 p-5 px-4 text-white border-none outline-none hover:text-red-500"
        onClick={() => setToggle(!isToggled)}
      >
        <IoMdEye className="text-2xl " />
      </button>
    </div>
  )
}

export default Toggle
