import * as THREE from "three"
import React, { useEffect, useRef, useState, useMemo, Suspense } from "react"
import { Canvas, extend, useFrame, useThree } from "react-three-fiber"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { Helmet } from "react-helmet"
import { PositionalAudio, HTML } from "drei"
import { IoIosArrowBack } from "react-icons/io"
import niceColors from "nice-color-palettes"
import { Link } from "gatsby"
import { EffectComposer, Bloom } from "react-postprocessing"

extend({ OrbitControls })

const Controls = () => {
  const orbitRef = useRef()
  const { camera, gl } = useThree()

  return <orbitControls args={[camera, gl.domElement]} ref={orbitRef} />
}

const tempObject = new THREE.Object3D()
const tempColor = new THREE.Color()
const colors = new Array(1000)
  .fill()
  .map(() => niceColors[15][Math.floor(Math.random() * 1)])

function Boxes() {
  const [hovered, set] = useState()
  const colorArray = useMemo(
    () =>
      Float32Array.from(
        new Array(1000)
          .fill()
          .flatMap((_, i) => tempColor.set(colors[i]).toArray())
      ),
    []
  )

  const ref = useRef()
  const previous = useRef()
  useEffect(() => void (previous.current = hovered), [hovered])

  useFrame(state => {
    const time = state.clock.getElapsedTime()
    ref.current.rotation.x = Math.sin(time / 15)
    ref.current.rotation.y = Math.sin(time / 15)
    let i = 0
    for (let x = 0; x < 10; x++)
      for (let y = 0; y < 10; y++)
        for (let z = 0; z < 10; z++) {
          const id = i++
          tempObject.position.set(5 - x, 5 - y, 5 - z)
          tempObject.rotation.y =
            Math.sin(x / 15 + time) +
            Math.sin(y / 15 + time) +
            Math.sin(z / 15 + time)
          tempObject.rotation.z = tempObject.rotation.y * 1
          if (hovered !== previous.current) {
            tempColor
              .set(id === hovered ? "white" : colors[id])
              .toArray(colorArray, id * 3)
            ref.current.geometry.attributes.color.needsUpdate = true
          }
          const scale = id === hovered ? 1 : 1
          tempObject.scale.set(scale, scale, scale)
          tempObject.updateMatrix()
          ref.current.setMatrixAt(id, tempObject.matrix)
        }
    ref.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh
      ref={ref}
      args={[null, null, 1000]}
      onPointerMove={e => set(e.instanceId)}
      onPointerOut={e => set(undefined)}
    >
      <boxBufferGeometry attach="geometry" args={[0.15, 0.15, 0.15]}>
        <instancedBufferAttribute
          attachObject={["attributes", "color"]}
          args={[colorArray, 3]}
        />
      </boxBufferGeometry>
      <meshPhongMaterial attach="material" vertexColors={THREE.VertexColors} />
    </instancedMesh>
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
        <h2 className="text-white">Momento Flaming Lips: El Movimiento</h2>
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

      <div className="w-full h-screen canvas">
        {isBrowser && (
          <Canvas
            className="fixed inset-0 cursor-move "
            shadowMap
            gl={{ antialias: false, alpha: false }}
            camera={{ position: [0, 0, 50], fov: 20 }}
            onCreated={({ gl }) => gl.setClearColor("#000")}
          >
            <Controls />
            <Suspense
              fallback={
                <HTML center>
                  <h1 className="w-32 text-white">Cargando audio</h1>
                </HTML>
              }
            >
              <PositionalAudio url="https://downloads.ctfassets.net/mai25em38k9q/7GlUq4O58kl1z4w2fKB31z/b7c17f8687a0762080fc1f3a9b63b61e/Momento_flaming_lips_3.mp3" />
            </Suspense>
            <EffectComposer>
              <Bloom
                luminanceThreshold={0}
                luminanceSmoothing={0.1}
                height={300}
                opacity={1}
              />
            </EffectComposer>
            <ambientLight intensity={0.1} />
            {/* A light to help illumnate the spinning boxes */}
            <pointLight position={[-10, 0, -20]} intensity={0.5} />
            <pointLight position={[0, -10, 0]} intensity={0.5} />
            <Boxes />
          </Canvas>
        )}
      </div>
    </>
  )
}
