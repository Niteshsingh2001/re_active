
import { useEffect, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';

import Model from "./models/card.obj";
// import Model from "../../assets/gltf/scene.gltf";
interface View {
    scene: THREE.Scene
    camera: THREE.PerspectiveCamera
    renderer: THREE.WebGLRenderer
}



const loader = new OBJLoader();



// Helpers
const gridHelper = new THREE.GridHelper(200, 50)




export default function Card3D() {

    const [divWindow, SetDivWindow] = useState({ width: 0, height: 0 })
    const [view, setView] = useState<View | null>(null)



    useEffect(() => {
        const newWindow = document.getElementById("playground")

        if (newWindow) {
            SetDivWindow({
                height: newWindow.getBoundingClientRect().height,
                width: newWindow.getBoundingClientRect().width
            })
        }

    }, [])

    useEffect(() => {
        const canvasElement = document.getElementById("canvas")
        if (canvasElement) {
            setView({
                scene: new THREE.Scene(),
                camera: new THREE.PerspectiveCamera(75, divWindow.width / divWindow.height, 0.1, 1000),
                renderer: new THREE.WebGLRenderer({
                    canvas: canvasElement
                })
            })
        }
    }, [divWindow.height, divWindow.width])

    useEffect(() => {

        // const animate = function () {
        //     requestAnimationFrame(animate);
        //     torus.rotation.x += 0.001;
        //     torus.rotation.y += 0.005;
        //     torus.rotation.z += 0.001;
        //     view && view.renderer && view.renderer.render(view.scene, view.camera);
        // };




        if (view) {
            view && view.renderer.setPixelRatio(window.devicePixelRatio)
            view && view.renderer.setSize(divWindow.width, divWindow.height)
            view && view.camera.position.setZ(30)
            view && view.renderer.render(view.scene, view.camera)
            loader.load(
                // resource URL
                Model,
                // called when resource is loaded
                function (object) {

                    view.scene.add(object);

                },
                // called when loading is in progresses
                function (xhr) {

                    console.log((xhr.loaded / xhr.total * 100) + '% loaded');

                },
                // called when loading has errors
                function (error: any) {

                    console.log('An error happened');

                }
            );
            // animate()
            const controls = new OrbitControls(view.camera, view.renderer.domElement)

            controls.update()


        }
    }, [view, divWindow.height, divWindow.width])








    return (
        <div id='playground' className='h-full w-full'>
            <canvas id="canvas" className=""></canvas>


        </div>
    )
}
