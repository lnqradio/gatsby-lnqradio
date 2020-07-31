import React, { useRef, useState, Suspense } from "react"
//R3F
import { Canvas, useFrame } from "react-three-fiber"
// Deai - R3F
import { softShadows, MeshWobbleMaterial, OrbitControls } from "drei"
//Components
// React Spring
import { useSpring, a } from "react-spring/three"
import { PositionalAudio, Text, Stars } from "drei"
import { Helmet } from "react-helmet"
import { IoIosArrowBack } from "react-icons/io"
import { GiClick } from "react-icons/gi"

import { Link } from "gatsby"
// soft Shadows
softShadows()

const SpinningMesh = ({ position, color, speed, args }) => {
  //ref to target the mesh
  const mesh = useRef()

  //useFrame allows us to re-render/update rotation on each frame
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))

  //Basic expand state
  const [expand, setExpand] = useState(false)
  // React spring expand animation
  const props = useSpring({
    scale: expand ? [2.4, 1.4, 1.4] : [1, 1, 1],
  })
  return (
    <a.mesh
      position={position}
      ref={mesh}
      onClick={() => setExpand(!expand)}
      scale={props.scale}
      castShadow
    >
      <boxBufferGeometry attach="geometry" args={args} />
      <MeshWobbleMaterial
        color={color}
        speed={speed}
        attach="material"
        factor={0.6}
      />
      <Suspense fallback={null}>
        <PositionalAudio url="https://assets.ctfassets.net/mai25em38k9q/2qHoL9NrIDZWOJylxocaDX/cf74660368fceb495674db96b500267e/MFL-Flaming-Lynch.mp3" />
      </Suspense>
    </a.mesh>

    //Using Drei box if you want
    // <Box {...props} ref={mesh} castShadow>
    //   <MeshWobbleMaterial
    //     {...props}
    //     attach='material'
    //     factor={0.6}
    //     Speed={1}
    //   />
    // </Box>
  )
}

export default () => {
  return (
    <>
      {/* Our Scene & Camera is already built into our canvas */}
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
        <h2 className="text-white">Momento Flaming Lynch</h2>
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
          <GiClick />
          <span className="px-2">Scroll: Subir y bajar volumen </span>
          <span className="px-2">Boton izquierdo mouse: Rotar audio 360°</span>
          <span className="px-2">
            Boton derecho mouse: mover posición audio
          </span>
        </div>
      </div>
      <Canvas
        colorManagement
        shadowMap
        className="cursor-move canvas"
        camera={{ position: [0, 10, 45], fov: 12 }}
      >
        {/* This light makes things look pretty */}
        <ambientLight intensity={0.3} />
        {/* Our main source of light, also casting our shadow */}
        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={0.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        {/* A light to help illumnate the spinning boxes */}
        <pointLight position={[-10, 0, -20]} intensity={0.5} />
        <pointLight position={[0, -10, 0]} intensity={1.5} />
        <group>
          {/* This mesh is the plane (The floor) */}
          <mesh
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -3, 0]}
            receiveShadow
          >
            <planeBufferGeometry attach="geometry" args={[-50, 100]} />
            <shadowMaterial attach="material" opacity={0.2} />
          </mesh>

          <SpinningMesh
            position={[0, 1, 5]}
            color="#7f0f32"
            args={[3, 2, 1]}
            speed={1}
          />
        </group>
        <Text
          color="#333"
          fontSize={0.3}
          maxWidth={10}
          lineHeight={2}
          letterSpacing={1}
          textAlign={"center"}
          font="https://fonts.gstatic.com/s/orbitron/v9/yMJRMIlzdpvBhQQL_Qq7dys.woff"
          anchorX="center"
          anchorY="middle"
        >
          No hay banda! There is no band. Il n'est pas de orquestra! This is all
          a tape-recording. No hay banda! And yet, we hear a band. If we want to
          hear a clarinette, listen. It's all a tape. It is an illusion.
        </Text>

        {/* Allows us to move the canvas around for different prespectives */}
        <OrbitControls maxPolarAngle={Math.PI / 1} />
        <Stars
          radius={100} // Radius of the inner sphere (default=100)
          depth={50} // Depth of area where stars should fit (default=50)
          count={5000} // Amount of stars (default=5000)
          factor={4} // Size factor (default=4)
          saturation={1} // Saturation 0-1 (default=0)
          fade // Faded dots (default=false)
        />
      </Canvas>
    </>
  )
}