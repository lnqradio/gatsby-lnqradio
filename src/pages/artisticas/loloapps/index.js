import * as THREE from "three"
import React, { useEffect, useRef, Suspense } from "react"
import { useSprings, a } from "react-spring/three"
import { Canvas, extend, useThree } from "react-three-fiber"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
//import "./styles.css"
import { EffectComposer, Bloom } from "react-postprocessing"

import { Helmet } from "react-helmet"
import { IoIosArrowBack } from "react-icons/io"
import { Link } from "gatsby"
import { PositionalAudio, Stars, HTML } from "drei"

extend({ OrbitControls })

const Controls = () => {
  const orbitRef = useRef()
  const { camera, gl } = useThree()

  return (
    <orbitControls autoRotate args={[camera, gl.domElement]} ref={orbitRef} />
  )
}

const number = 9
const colors = ["#e80e2e", "#e80e2e", "#e80e2e"]
const random = i => {
  const r = Math.random()
  return {
    position: [5 - Math.random() * 5, 5 - Math.random() * 5, i * 3.5],
    color: colors[Math.round(Math.random() * (colors.length - 1))],
    scale: [1 + r * 2, 1 + r * 5, 1 + r * 2],
    rotation: [0, 0, THREE.Math.degToRad(Math.round(Math.random()) * 45)],
  }
}

const data = new Array(number).fill().map(() => {
  return {
    color: colors[Math.round(Math.random() * (colors.length - 1))],
    args: [0.1 + Math.random() * 9, 0.1 + Math.random() * 9, 10],
  }
})

function Content() {
  const [springs, set] = useSprings(number, i => ({
    from: random(i),
    ...random(i),
    config: { mass: 20, tension: 15, friction: 50 },
  }))
  useEffect(
    () =>
      void setInterval(() => set(i => ({ ...random(i), delay: i * 40 })), 300),
    []
  )
  return data.map((d, index) => (
    <a.mesh key={index} {...springs[index]} castShadow receiveShadow>
      <boxBufferGeometry attach="geometry" args={d.args} />
      <a.meshStandardMaterial
        attach="material"
        wireframe
        color={springs[index].color}
        roughness={0.75}
        metalness={0.5}
      />
    </a.mesh>
  ))
}

function Lights() {
  return (
    <group>
      <pointLight intensity={0.3} />
      <ambientLight intensity={2} />
      <spotLight
        castShadow
        intensity={0.2}
        angle={Math.PI / 7}
        position={[150, 150, 250]}
        penumbra={1}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
    </group>
  )
}

export default () => {
  const isBrowser = typeof window !== "undefined"

  return (
    <>
      <Helmet>
        <body className="domFiber" />
      </Helmet>
      <div className="fixed top-0 z-50 flex flex-col items-center justify-center w-full opacity-75 animated delay-2s fadeInDown">
        <div className="flex items-center justify-center w-full opacity-50 ">
          <div className="icon">
            <svg
              className="svg-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="300"
              width="300"
              viewBox="-949 951 100 100"
            >
              <switch>
                <g>
                  <path d="M-918.7 1015.1c-.4-2.3-2.5-3.8-4.8-3.5-1.2.2-2.1 1.4-1.9 2.6l5 30.9c.2 1.2 1.4 2.1 2.6 1.9 2.3-.4 3.8-2.5 3.5-4.8l-4.4-27.1zM-874.4 1011.6c-2.3-.4-4.4 1.2-4.8 3.5l-4.4 27.1c-.4 2.3 1.2 4.4 3.5 4.8 1.2.2 2.4-.6 2.6-1.9l5-30.9c.2-1.2-.6-2.4-1.9-2.6z" />
                  <path d="M-851.8 1003.2c0-27.4-21.2-49.7-47.2-49.7-26 0-47.2 22.3-47.2 49.7 0 6.2 1.1 12.2 3.1 17.8-1.9 3.3-2.8 7.2-2.1 11.2l.3 2.1c1.5 9.2 10.1 15.4 19.3 14 1.6-.3 2.6-1.7 2.4-3.3l-4.8-29.7c-.3-1.6-1.7-2.6-3.3-2.4-2 .3-3.8 1-5.4 1.9-1-3.7-1.5-7.6-1.5-11.6 0-11.8 4.7-22.5 12.1-30.1 1 .9 2.3 1.4 3.6 1.4 1.4 0 2.7-.5 3.7-1.5 5.3-5.3 12.3-7.5 19.5-7.5 6.8 0 13.4 1.9 18.6 6.6 2.1 1.9 5.3 1.8 7.3-.2 8.2 7.6 13.3 18.8 13.3 31.3 0 3.9-.5 7.8-1.5 11.5-1.6-.9-3.4-1.5-5.3-1.8-1.6-.3-3.1.8-3.3 2.4l-4.8 29.7c-.3 1.6.8 3.1 2.4 3.3 9.2 1.5 17.8-4.8 19.3-14l.3-2.1c.7-4.1-.2-8.1-2.2-11.4 2.3-5.6 3.4-11.5 3.4-17.6z" />
                </g>
              </switch>
            </svg>
          </div>
          <small className="block py-3 pl-3">Se recomienda auriculares</small>
        </div>
        <h2 className="text-white">Momento Flaming Lips: Lolo Apps</h2>
      </div>
      <Link
        className="fixed bottom-0 left-0 z-50 items-center justify-end hidden p-3 m-3 text-right text-white lg:flex hover:text-red-600 "
        activeClassName="active"
        to="/artisticas/"
      >
        <IoIosArrowBack className="w-6 h-6 text-2xl " />
      </Link>
      <div className="fixed bottom-0 w-full">
        <div className="flex flex-col justify-center py-2 text-xs font-bold text-center text-red-600 md:flex-row title">
          <span className="px-2">Scroll hace zoom </span>
          <span className="px-2">Boton izquierdo mouse: Rotar cámara 360°</span>
          <span className="px-2">Boton derecho mouse: mover cámara</span>
        </div>
      </div>

      <div className="w-full h-screen canvas">
        {isBrowser && (
          <Canvas
            className="fixed inset-0 cursor-move"
            shadowMap
            camera={{ position: [0, 0, 50], fov: 50 }}
          >
            <Lights />
            <Controls />
            <Content />
            <Suspense
              fallback={
                <HTML center>
                  <h1 className="w-32 text-white">Cargando audio</h1>
                </HTML>
              }
            >
              <PositionalAudio url="https://downloads.ctfassets.net/mai25em38k9q/4dxdWME11OG0flNUssdGqM/fbb55915e5ae4aa5a8449d98247bd5b0/16_-_MFL_-_Lolo_app.mp3" />
            </Suspense>

            <Stars
              radius={100} // Radius of the inner sphere (default=100)
              depth={50} // Depth of area where stars should fit (default=50)
              count={500} // Amount of stars (default=5000)
              factor={4} // Size factor (default=4)
              saturation={1} // Saturation 0-1 (default=0)
              fade // Faded dots (default=false)
            />
            <EffectComposer>
              <Bloom
                luminanceThreshold={0}
                luminanceSmoothing={0.1}
                height={100}
                opacity={2}
              />
            </EffectComposer>
          </Canvas>
        )}
      </div>
    </>
  )
}
