import React, { useState, useRef } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { Canvas, extend, useThree } from "react-three-fiber"
import { useSpring, a } from "react-spring/three"
//import { Link } from "gatsby"
import { Helmet } from "react-helmet"

extend({ OrbitControls })

const Controls = () => {
  const orbitRef = useRef()
  const { camera, gl } = useThree()

  //useRender(() => {
  //  orbitRef.current.update()
  //})

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
    scale: active ? [1.5, 1.5, 1.5] : [1, 1, 1],
    color: hovered ? "hotpink" : "gray",
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
      <div className="w-full h-screen canvas">
        {isBrowser && (
          <Canvas
            camera={{ position: [0, 0, 5] }}
            onCreated={({ gl }) => {
              gl.shadowMap.enabled = true
              gl.shadowMap.type = THREE.PCFSoftShadowMap
            }}
          >
            <ambientLight intensity={0.5} />
            <spotLight position={[15, 20, 5]} penumbra={1} castShadow />
            {/*<fog attach="fog" args={["black", 10, 25]} /> */}
            <Controls />
            <Box />
            <Plane />
          </Canvas>
        )}
      </div>
    </>
  )
}
