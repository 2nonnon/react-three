import { Canvas } from '@react-three/fiber'

function Three() {
    return (
        <div id='canvas__container'>
            <Canvas>
                <ambientLight intensity={0.1} />
                <directionalLight color="red" position={[0, 0, 5]} />
                <mesh>
                    <boxGeometry args={[2, 2, 2]} />
                    <meshStandardMaterial />
                </mesh>
            </Canvas>
        </div>
    )
}

export default Three