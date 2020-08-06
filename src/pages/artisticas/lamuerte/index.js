import * as THREE from "three"
import React, { useRef, useMemo, Suspense } from "react"
import { Canvas, extend, useFrame, useThree } from "react-three-fiber"
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer"
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass"
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass"
import { AfterimagePass } from "three/examples/jsm/postprocessing/AfterimagePass"
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass"

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
//import "./styles.css"
import { Helmet } from "react-helmet"

import { PositionalAudio, HTML } from "drei"
import { IoIosArrowBack } from "react-icons/io"

import { Link } from "gatsby"

extend({ OrbitControls })

const Controls = () => {
  const orbitRef = useRef()
  const { camera, gl } = useThree()

  return <orbitControls args={[camera, gl.domElement]} ref={orbitRef} />
}

// Makes these prototypes available as "native" jsx-string elements
extend({
  EffectComposer,
  ShaderPass,
  RenderPass,
  AfterimagePass,
  UnrealBloomPass,
})

function Swarm({ count, mouse }) {
  const mesh = useRef()
  const light = useRef()
  const { size, viewport } = useThree()
  const aspect = size.width / viewport.width

  const dummy = useMemo(() => new THREE.Object3D(), [])
  // Generate some random positions, speed factors and timings
  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100
      const factor = 20 + Math.random() * 100
      const speed = 0.01 + Math.random() / 200
      const xFactor = -50 + Math.random() * 100
      const yFactor = -50 + Math.random() * 100
      const zFactor = -50 + Math.random() * 100
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 })
    }
    return temp
  }, [count])
  // The innards of this hook will run every frame
  useFrame(state => {
    // Makes the light follow the mouse
    light.current.position.set(
      mouse.current[1] / aspect,
      -mouse.current[1] / aspect,
      0
    )
    // Run through the randomized data to calculate some movement
    particles.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle
      // There is no sense or reason to any of this, just messing around with trigonometric functions
      t = particle.t += speed / 2
      const a = Math.cos(t) + Math.sin(t * 1) / 10
      const b = Math.sin(t) + Math.cos(t * 2) / 10
      const s = Math.cos(t)
      particle.mx += (mouse.current[0] - particle.mx) * 0.01
      particle.my += (mouse.current[1] * -1 - particle.my) * 0.01
      // Update the dummy object
      dummy.position.set(
        (particle.mx / 100) * a +
          xFactor +
          Math.cos((t / 100) * factor) +
          (Math.sin(t * 1) * factor) / 100,
        (particle.my / 100) * b +
          yFactor +
          Math.sin((t / 100) * factor) +
          (Math.cos(t * 2) * factor) / 100,
        (particle.my / 100) * b +
          zFactor +
          Math.cos((t / 100) * factor) +
          (Math.sin(t * 3) * factor) / 100
      )
      dummy.scale.set(s, s, s)
      dummy.rotation.set(s * 5, s * 5, s * 5)
      dummy.updateMatrix()
      // And apply the matrix to the instanced item
      mesh.current.setMatrixAt(i, dummy.matrix)
    })
    mesh.current.instanceMatrix.needsUpdate = true
  })
  return (
    <>
      <pointLight ref={light} distance={20} intensity={8} color="white">
        <mesh>
          <sphereBufferGeometry attach="geometry" args={[1, 2, 2]} />
          <meshBasicMaterial attach="material" color="white" />
        </mesh>
      </pointLight>
      <instancedMesh ref={mesh} args={[null, null, count]}>
        <dodecahedronBufferGeometry attach="geometry" args={[1, 0]} />
        <meshStandardMaterial attach="material" color="black" />
      </instancedMesh>
    </>
  )
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
  const mouse = useRef([0, 0])

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
        <h2 className="text-white">Momento Flaming Lips: La Muerte</h2>
      </div>
      <Link
        className="fixed bottom-0 left-0 z-50 items-center justify-end hidden p-3 m-3 text-right text-white lg:flex hover:text-red-600 "
        activeClassName="active"
        to="/artisticas/"
      >
        <IoIosArrowBack className="w-6 h-6 text-2xl " />
      </Link>
      <div className="fixed bottom-0 z-50 w-full">
        <div className="flex flex-col justify-center py-2 text-xs font-bold text-center text-red-600 md:flex-row title">
          <span className="px-2">Scroll hace zoom </span>
          <span className="px-2">Boton izquierdo mouse: Rotar cámara 360°</span>
          <span className="px-2">Boton derecho mouse: mover cámara</span>
        </div>
      </div>

      <div className="w-full h-screen bg-black canvas">
        {isBrowser && (
          <div style={{ width: "100%", height: "100%" }}>
            <Canvas
              className="fixed inset-0 cursor-move"
              shadowMap
              camera={{ position: [0, 0, 50], fov: 60 }}
            >
              <Lights />

              <pointLight distance={60} intensity={2} color="black" />
              <spotLight
                intensity={0.5}
                position={[0, 0, 70]}
                penumbra={1}
                color="lightblue"
              />

              <Swarm mouse={mouse} count={20000} />

              {/*<Dolly />*/}
              <Controls />

              <Suspense
                fallback={
                  <HTML center>
                    <h1 className="w-32 text-white">Cargando audio</h1>
                  </HTML>
                }
              >
                <PositionalAudio url="https://downloads.ctfassets.net/mai25em38k9q/49c8unScoxc8AtLirOjUd6/9fd30c772d5026d6ba5f691549d18f18/7_-_MFL_-_La_muerte.mp3" />
              </Suspense>
            </Canvas>
          </div>
        )}
      </div>
    </>
  )
}
