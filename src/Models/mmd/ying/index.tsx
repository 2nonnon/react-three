import { useFrame, useLoader } from '@react-three/fiber'
import { MMDLoader } from 'three/examples/jsm/loaders/MMDLoader'
import { MMDAnimationHelper } from 'three/examples/jsm/animation/MMDAnimationHelper';
import { useThree } from '@react-three/fiber'
import { AnimationClip } from 'three';

function Ying() {
    const scene = useThree((state) => state.scene)
    const modelFile = '/mmd/ye/ye.pmx';
    const vmdFiles = '/mmd/vmds/wavefile_v2.vmd';
    const mesh = useLoader(MMDLoader, modelFile);
    const loader = new MMDLoader();
    const helper = new MMDAnimationHelper({
        afterglow: 2.0
    });
    loader.loadAnimation(vmdFiles, mesh, async function (clip) {
        helper.add(mesh, {
            animation: clip as AnimationClip,
            physics: true
        });

        const ikHelper = helper.objects.get(mesh)!.ikSolver.createHelper();
        ikHelper.visible = false;
        scene.add(ikHelper);

        const physicsHelper = helper.objects.get(mesh)!.physics!.createHelper();
        physicsHelper.visible = false;
        scene.add(physicsHelper);
    });

    useFrame((_, delta) => {
        helper.update(delta);
    })

    return <>
        <primitive castShadow receiveShadow position={[0, -10, 0]} object={mesh} />
    </>
}

export default Ying