import * as THREE from "three"
import React, { useEffect, useRef } from "react"
import { useSprings, a } from "react-spring/three"
import { Canvas, extend, useThree } from "react-three-fiber"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
//import "./styles.css"
import { Helmet } from "react-helmet"
import ReactPlayer from "react-player"

extend({ OrbitControls })

const Controls = () => {
  const orbitRef = useRef()
  const { camera, gl } = useThree()

  return (
    <orbitControls autoRotate args={[camera, gl.domElement]} ref={orbitRef} />
  )
}

const number = 35
const colors = ["#e80e2e", "#a7162b", "#250f31"]
const random = i => {
  const r = Math.random()
  return {
    position: [100 - Math.random() * 100, 100 - Math.random() * 100, i * 1.5],
    color: colors[Math.round(Math.random() * (colors.length - 1))],
    scale: [1 + r * 14, 1 + r * 14, 1 + r * 7],
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
    config: { mass: 20, tension: 150, friction: 50 },
  }))
  useEffect(
    () =>
      void setInterval(() => set(i => ({ ...random(i), delay: i * 40 })), 3000),
    []
  )
  return data.map((d, index) => (
    <a.mesh key={index} {...springs[index]} castShadow receiveShadow>
      <boxBufferGeometry attach="geometry" args={d.args} />
      <a.meshStandardMaterial
        attach="material"
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
      <div className="w-64 misiles">
        <div className="title">
          <h2 className="text-white">Momento Flaming Lips</h2>
          <h3 className="text-white">LoloApps</h3>
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
        </div>
        <div className="player-wrapper">
          <ReactPlayer
            className=" react-player"
            url="https://soundcloud.com/lnqescech/16-momento-flaming-lips-lolo&auto_play=true&show_artwork=false"
            height="160px"
            width="100%"
            light="true"
            controls="true"
          />
        </div>
      </div>
      <div className="w-full h-screen canvas">
        {isBrowser && (
          <Canvas
            className="fixed inset-0 cursor-move"
            shadowMap
            camera={{ position: [0, 0, 100], fov: 50 }}
          >
            <Lights />
            <Controls />
            <Content />
          </Canvas>
        )}
      </div>
    </>
  )
}
