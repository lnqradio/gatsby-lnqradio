import * as THREE from "three"
import React, { Suspense, useCallback, useRef, useMemo } from "react"
import { Canvas, useFrame } from "react-three-fiber"
import Effects from "./Effects"
import "./style.css"
import { Helmet } from "react-helmet"

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
      <div class="misiles w-64">
        <img
          src="https://www.lnqradio.com/static/d48f304c1226a8516e36c27e44eef047/630fb/gatsby-icon.png"
          alt=""
        />
        <div class="title">
          <h2 className="text-white">Momento Flaming Lips</h2>
          <h3 className="text-white">Flaming Lynch</h3>
          <div class="headphones">
            <div class="icon">
              <svg
                class="svg-icon"
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
      </div>
      <div className="help ">
        <p className="inline-block mr-3">Scroll para zoom</p>
        <p className="inline-block ">Click para rotar</p>
      </div>

      <div className="w-full h-screen canvas" onMouseMove={onMouseMove}>
        <audio
          className="w-64 fiberAudio"
          controls
          src="https://assets.ctfassets.net/mai25em38k9q/2qHoL9NrIDZWOJylxocaDX/cf74660368fceb495674db96b500267e/MFL-Flaming-Lynch.mp3"
        >
          Your browser does not support the
          <code>audio</code> element.
        </audio>

        <Canvas
          gl={{ alpha: true, antialias: false, logarithmicDepthBuffer: true }}
          camera={{ fov: 75, position: [0, 0, 70] }}
          onCreated={({ gl }) => {
            gl.toneMapping = THREE.ACESFilmicToneMapping
            gl.outputEncoding = THREE.sRGBEncoding
          }}
        >
          <ambientLight intensity={1.1} />
          <pointLight position={[100, 100, 100]} intensity={2.2} />
          <pointLight position={[-100, -100, -100]} intensity={5} color="red" />
          <Swarm mouse={mouse} count={15} />
          <Suspense fallback={null}>
            <Effects />
          </Suspense>
        </Canvas>
        <div className="fullscreen-bg">
          <video
            loop=""
            muted=""
            autoplay=""
            poster="img/videoframe.jpg"
            className="fullscreen-bg__video"
          >
            <source
              src="https://videos.ctfassets.net/mai25em38k9q/b4zP4YL30d0ldA1sGljqu/d58238d856d714b2daf18a20995cf436/demo.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </>
  )
}

export default FiberDemo
