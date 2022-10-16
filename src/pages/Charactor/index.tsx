import { Canvas } from '@react-three/fiber'
import Ying from '../../Models/mmd/ying'
import { useThree } from '@react-three/fiber'
import { useEffect } from 'react'
import { OutlineEffect } from 'three/examples/jsm/effects/OutlineEffect'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { WebGLRenderer } from 'three'

function Init() {
    const { camera, gl } = useThree((state) => ({ gl: state.gl, camera: state.camera }))

    useEffect(() => {
        const controls = new OrbitControls(camera, gl.domElement);
        controls.minDistance = 10;
        controls.maxDistance = 100;
    })

    return <></>
}

function Charator() {

    return (
        <div id='canvas__container' style={{ height: "100vh" }
        }>
            <Canvas camera={{ position: [0, 0, 30], fov: 45, far: 2000 }} gl={(canvas => {
                const renderer = new WebGLRenderer({ antialias: true, canvas, });
                renderer.setPixelRatio(window.devicePixelRatio);
                renderer.setSize(window.innerWidth, window.innerHeight);
                const effect = new OutlineEffect(renderer)
                effect.enabled = true
                return effect
            })}>
                <Init />
                <polarGridHelper args={[30, 0]} position={[0, -10, 0]}></polarGridHelper>
                <ambientLight color={'#fff'} intensity={0.1} />
                <directionalLight color="#fff"
                    intensity={1.1} position={[-3, 7, 6]} />
                <Ying />
            </Canvas>
        </div >
    )
}

export default Charator