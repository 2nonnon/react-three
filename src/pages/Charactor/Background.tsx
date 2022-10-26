import { Canvas } from '@react-three/fiber'
import Ying from '../../Models/mmd/ying'
import { Environment, MeshReflectorMaterial, OrbitControls } from '@react-three/drei'
import { Suspense } from 'react'
import { OutlineEffect } from 'three/examples/jsm/effects/OutlineEffect'
import { WebGLRenderer } from 'three'

function Init() {
    return <></>
}

function Background() {

    return (
        <div id='canvas__container' style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0 }}>
            <Canvas dpr={[1, 1.5]} shadows camera={{ position: [0, 10, 40], fov: 35 }} gl={(canvas) => {
                const renderer = new WebGLRenderer({ antialias: true, canvas, });
                renderer.setPixelRatio(window.devicePixelRatio);
                renderer.setSize(window.innerWidth, window.innerHeight);
                const effect = new OutlineEffect(renderer)
                effect.enabled = true
                const back = Object.assign({}, effect)

                return Object.assign(Object.assign(back, renderer), effect)
            }}>
                <Init />
                <fog attach="fog" args={['#95A7B5', 0, 100]} />
                <color attach="background" args={['#95A7B5']} />
                <ambientLight intensity={1} />
                <directionalLight castShadow intensity={1.5} position={[10, 6, 6]} shadow-mapSize={[1024, 1024]}>
                    <orthographicCamera attach="shadow-camera" left={-20} right={20} top={20} bottom={-20} />
                </directionalLight>
                <Suspense fallback={null}>
                    <Ying />
                    <mesh position={[0, -10.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                        <planeGeometry args={[5000, 5000]} />
                        <MeshReflectorMaterial
                            mirror={0.8}
                            blur={[400, 100]}
                            resolution={512}
                            mixBlur={1}
                            mixStrength={15}
                            depthScale={1}
                            minDepthThreshold={0.85}
                            color="#95A7B5"
                            metalness={0.5}
                            roughness={0.5}
                            opacity={0.5}
                            transparent
                        />
                    </mesh>
                    <Environment preset="dawn" />
                </Suspense>
                <OrbitControls />
            </Canvas>
            {/* <Stats /> */}
        </div >
    )
}

export default Background