import * as THREE from "three"
import React, { Suspense, useCallback, useRef, useMemo } from "react"
import { Canvas, extend, useThree, useFrame } from "react-three-fiber"
import Effects from "./Effects"
import "./style.css"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { Link } from "gatsby"
import { IoIosArrowBack } from "react-icons/io"
import { PositionalAudio, Stars } from "drei"
import { Helmet } from "react-helmet"

extend({ OrbitControls })

const Controls = () => {
  const orbitRef = useRef()
  const { camera, gl } = useThree()

  return (
    <orbitControls autoRotate args={[camera, gl.domElement]} ref={orbitRef} />
  )
}

function Swarm({ count, mouse }) {
  const mesh = useRef()
  const dummy = useMemo(() => new THREE.Object3D(), [])

  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100
      const factor = 20 + Math.random() * 100
      const speed = 0.01 + Math.random() / 200
      const xFactor = -20 + Math.random() * 40
      const yFactor = -20 + Math.random() * 40
      const zFactor = -20 + Math.random() * 40
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 })
    }
    return temp
  }, [count])

  useFrame(state => {
    particles.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle
      t = particle.t += speed / 2
      const a = Math.cos(t) + Math.sin(t * 1) / 10
      const b = Math.sin(t) + Math.cos(t * 2) / 10
      const s = Math.max(1.5, Math.cos(t) * 5)
      particle.mx += (mouse.current[0] - particle.mx) * 0.02
      particle.my += (-mouse.current[1] - particle.my) * 0.02
      dummy.position.set(
        (particle.mx / 10) * a +
          xFactor +
          Math.cos((t / 10) * factor) +
          (Math.sin(t * 1) * factor) / 10,
        (particle.my / 10) * b +
          yFactor +
          Math.sin((t / 10) * factor) +
          (Math.cos(t * 2) * factor) / 10,
        (particle.my / 10) * b +
          zFactor +
          Math.cos((t / 10) * factor) +
          (Math.sin(t * 3) * factor) / 10
      )
      dummy.scale.set(s, s, s)
      dummy.updateMatrix()
      mesh.current.setMatrixAt(i, dummy.matrix)
    })
    mesh.current.instanceMatrix.needsUpdate = true
  })

  return (
    <>
      <instancedMesh ref={mesh} args={[null, null, count]}>
        <sphereBufferGeometry attach="geometry" args={[1, 32, 32]} />
        <meshPhongMaterial attach="material" />
        <Suspense fallback={null}>
          <PositionalAudio url="https://downloads.ctfassets.net/mai25em38k9q/3GgN5fumOZ4b5UxRgcQxr4/c804b98a51bbb398c10f55222ac2dfa0/18_-_MFL_-_Human_beings.mp3" />
        </Suspense>
      </instancedMesh>
    </>
  )
}

const FiberDemo = props => {
  const mouse = useRef([0, 0])
  const onMouseMove = useCallback(
    ({ clientX: x, clientY: y }) =>
      (mouse.current = [x - window.innerWidth / 2, y - window.innerHeight / 2]),
    []
  )
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
        <h2 className="text-white">18 · Momento Flaming Lips: Human beings</h2>
      </div>
      <Link
        className="fixed bottom-0 left-0 z-50 items-center justify-end hidden p-3 m-3 text-right text-white lg:flex hover:text-red-600 "
        activeClassName="active"
        to="/garmendia/"
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

      <div className="w-full h-screen canvas" onMouseMove={onMouseMove}>
        <Canvas
          gl={{ alpha: true, antialias: false, logarithmicDepthBuffer: true }}
          camera={{ fov: 75, position: [0, 0, 70] }}
          className="cursor-move"
          onCreated={({ gl }) => {
            gl.toneMapping = THREE.ACESFilmicToneMapping
            gl.outputEncoding = THREE.sRGBEncoding
          }}
        >
          <ambientLight intensity={0.1} />
          <pointLight position={[100, 100, 100]} intensity={2.2} />
          <pointLight
            position={[-100, -100, -100]}
            intensity={1}
            color="#1d1b38"
          />
          <Controls />
          <Swarm mouse={mouse} count={9} />

          <Stars
            radius={100} // Radius of the inner sphere (default=100)
            depth={50} // Depth of area where stars should fit (default=50)
            count={5000} // Amount of stars (default=5000)
            factor={4} // Size factor (default=4)
            saturation={1} // Saturation 0-1 (default=0)
            fade // Faded dots (default=false)
          />
        </Canvas>
      </div>
    </>
  )
}

export default FiberDemo
