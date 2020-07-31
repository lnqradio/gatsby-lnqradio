import React, { useState, useRef } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
//import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { Canvas, extend, useThree } from "react-three-fiber"
import { useSpring, a } from "react-spring/three"
import { Link } from "gatsby"

import { Helmet } from "react-helmet"
import ReactPlayer from "react-player"

extend({ OrbitControls })

const Controls = () => {
  const orbitRef = useRef()
  const { camera, gl } = useThree()

  return (
    <orbitControls
      autoRotate
      maxPolarAngle={Math.PI / 3}
      minPolarAngle={Math.PI / 3}
      args={[camera, gl.domElement]}
      ref={orbitRef}
    />
  )
}

const Plane = () => (
  <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
    <planeBufferGeometry attach="geometry" args={[100, 100]} />
    <meshPhysicalMaterial attach="material" color="white" />
  </mesh>
)

const Box = () => {
  const [hovered, setHovered] = useState(false)
  const [active, setActive] = useState(false)
  const props = useSpring({
    scale: active ? [2, 2, 2] : [1, 1, 1],
    color: hovered ? "white" : "black",
  })

  return (
    <a.mesh
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => setActive(!active)}
      scale={props.scale}
      castShadow
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <a.meshPhysicalMaterial attach="material" color={props.color} />
    </a.mesh>
  )
}

export default () => {
  const isBrowser = typeof window !== "undefined"

  return (
    <>
      <Helmet>
        <body className="domFiber" />
      </Helmet>
      <div className="w-64 misiles">
        <div className="title">
          <div className="headphones">
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
            <small>Se recomienda auriculares</small>
          </div>
          <small>Momento Flaming Lips</small>
          <h2 className="my-3 text-white">Jesus</h2>
          <div className="player-wrapper">
            <ReactPlayer
              className=" react-player"
              url="https://soundcloud.com/lnqescech/13-momento-flaming-lips-jes-s&auto_play=true&show_artwork=false"
              height="80px"
              width="100%"
              light="true"
              controls="true"
            />
          </div>
          <div className="mt-3">
            <Link
              to={`/artisticas/flaming-lynch/`}
              className="block my-2 mr-3 font-bold text-red-600 hover:text-white "
            >
              Flaming Lynch
            </Link>

            <Link
              to={`/artisticas/loloapps/`}
              className="block my-2 mr-3 font-bold text-red-600 hover:text-white "
            >
              Lolo App
            </Link>
          </div>
        </div>
      </div>
      {isBrowser && (
        <Canvas
          camera={{ position: [5, 5, 5] }}
          onCreated={({ gl }) => {
            gl.shadowMap.enabled = true
            gl.shadowMap.type = THREE.PCFSoftShadowMap
          }}
        >
          <ambientLight intensity={0.5} />
          <spotLight position={[1, 1, 1]} penumbra={0.1} castShadow />
          <fog attach="fog" args={["black", 10, 25]} />
          <Controls />
          <Box />
          <Plane />
        </Canvas>
      )}
    </>
  )
}
