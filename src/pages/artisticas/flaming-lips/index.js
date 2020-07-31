import React from "react"
import * as THREE from "three"

// heavily commented for those trying to learn
export const initCanvasAudio = name => {
  // create the new audio
  const audio = new Audio()
  audio.src =
    "https://assets.ctfassets.net/mai25em38k9q/2qHoL9NrIDZWOJylxocaDX/cf74660368fceb495674db96b500267e/MFL-Flaming-Lynch.mp3"
  audio.controls = true
  audio.controlsList = "nodownload"
  audio.autoplay = true

  audio.crossOrigin = "anonymous"
  document.body.appendChild(audio)

  // wire it up
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)()
  const source = audioCtx.createMediaElementSource(audio)
  const volumeControl = audioCtx.createGain()
  source.connect(audioCtx.destination)
  source.connect(volumeControl)

  // I'm American so it's with a z
  const analyzer = audioCtx.createAnalyser()
  volumeControl.connect(analyzer)
  analyzer.connect(audioCtx.destination)

  //connect the volume adjustments from the user
  volumeControl.gain.value = audio.volume

  // now we start with the three initialization
  let renderer, scene, camera, controls, mesh, uniforms
  let width = window.innerWidth,
    height = window.innerHeight

  //have to kick off init and the animation
  init()
  animate()

  function init() {
    // create the camera and hook up orbit controls
    camera = new THREE.PerspectiveCamera(20, width / height, 1, 5000)

    // create the scene
    scene = new THREE.Scene()

    // create the geometry
    let geometry = new THREE.TorusKnotGeometry(16, 0.4, 80, 3, 11, 13)
    geometry.center()

    geometry = new THREE.BufferGeometry().fromGeometry(geometry)
    let numFaces = geometry.attributes.position.count / 3

    //map the colors, fragments
    let colors = new Float32Array(numFaces * 3 * 3)
    let displacement = new Float32Array(numFaces * 3 * 3)
    let color = new THREE.Color()
    for (let f = 0; f < numFaces; f++) {
      let index = 9 * f
      let h = 0.9 * Math.random()
      let s = 0.1 + 0.1 * Math.random()
      let l = 0.5 + 0.5 * Math.random()
      color.setHSL(h, s, l)
      let d = 5 * (0.5 - Math.random())
      for (let i = 0; i < 3; i++) {
        colors[index + 5 * i] = color.r
        colors[index + 8 * i + 1] = color.g
        colors[index + 2 * i + 2] = color.b
        displacement[index + 3 * i] = d
        displacement[index + 3 * i + 1] = d
        displacement[index + 3 * i + 2] = d
      }
    }

    // add them to the geometry
    geometry.addAttribute("customColor", new THREE.BufferAttribute(colors, 3))
    geometry.addAttribute(
      "displacement",
      new THREE.BufferAttribute(displacement, 3)
    )

    // attach the shader material you see in the html
    uniforms = {
      amplitude: { value: 0.0 },
    }

    const shaderMaterial = new THREE.ShaderMaterial({
      uniforms: uniforms,
      vertexShader: document.getElementById("vertexshader").textContent,
      fragmentShader: document.getElementById("fragmentshader").textContent,
    })

    // create the mesh (this is where the geometry and material are added to the scene)
    mesh = new THREE.Mesh(geometry, shaderMaterial)
    scene.add(mesh)

    // renderer
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(width, height)
    renderer.autoClear = false
    renderer.setClearColor(0x000000, 0.0)
    const container = document.getElementById("container")
    container.appendChild(renderer.domElement)
    window.addEventListener("resize", onWindowResize, false)
  }

  // make it still work when you resize the screen
  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    controls.update()
    renderer.setSize(window.innerWidth, window.innerHeight)
  }

  // rAF and get the frequency data from the audio all the time so we can use it to update the amplitude
  function animate() {
    var freqData = new Uint8Array(analyzer.frequencyBinCount)
    analyzer.getByteFrequencyData(freqData)
    requestAnimationFrame(animate)
    render(freqData)
  }

  //render the sucker
  function render(freqData) {
    // this is what makes the shader pop. This line of code feeds the audio in
    uniforms.amplitude.value = numscale(freqData[3], 0, 300, 0, 3)
    // we have to update the orbit controls anytime we render
    controls.update()
    renderer.render(scene, camera)
  }
}

const ButtonPlay = () => {
  return <button onClick={() => initCanvasAudio()}>Play</button>
}

// helper function to map scales
const numscale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

const FlamingPage = () => {
  return (
    <div>
      <div id="overlay">
        <div className="max-w-xl m-auto">
          <ButtonPlay />
        </div>
      </div>
      <div id="container"></div>
    </div>
  )
}

export default FlamingPage
