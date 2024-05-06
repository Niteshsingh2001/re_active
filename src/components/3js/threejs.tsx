
import { useEffect, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

interface View {
    scene: THREE.Scene
    camera: THREE.PerspectiveCamera
    renderer: THREE.WebGLRenderer
}

// Torus
const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial({ color: 0xff6347 });
const torus = new THREE.Mesh(geometry, material);

// Light
const pointLight = new THREE.PointLight(0xffffff)
pointLight.intensity = 100
pointLight.distance = 100
pointLight.position.set(0, 0, 5)
const ambientLight = new THREE.AmbientLight(0xffffff)

// Helpers
const lightHelper = new THREE.PointLightHelper(pointLight)
const gridHelper = new THREE.GridHelper(200, 50)


// Add Stars
function addStars() {
    const g = new THREE.SphereGeometry(0.25, 24, 24);
    const m = new THREE.MeshStandardMaterial({ color: 0xFFFFFF });
    const star = new THREE.Mesh(g, m);
    const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100))
    star.position.set(x, y, z)
    return star

}



export default function ThreeTS() {

    const [divWindow, SetDivWindow] = useState({ width: 0, height: 0 })

    const [view, setView] = useState<View | null>(null)



    useEffect(() => {
        const newWindow = document.getElementById("three")

        if (newWindow) {
            SetDivWindow({
                height: newWindow.getBoundingClientRect().height,
                width: newWindow.getBoundingClientRect().width
            })
        }

    }, [])

    useEffect(() => {
        const canvasElement = document.getElementById("bg")
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

        const animate = function () {
            requestAnimationFrame(animate);
            torus.rotation.x += 0.001;
            torus.rotation.y += 0.005;
            torus.rotation.z += 0.001;
            view && view.renderer && view.renderer.render(view.scene, view.camera);
        };




        if (view) {
            view && view.renderer.setPixelRatio(window.devicePixelRatio)
            view && view.renderer.setSize(divWindow.width, divWindow.height)
            view && view.camera.position.setZ(30)
            view && view.renderer.render(view.scene, view.camera)
            view && view.scene.add(torus)
            view && view.scene.add(pointLight, ambientLight)
            view && view.scene.add(lightHelper, gridHelper)
            animate()
            const controls = new OrbitControls(view.camera, view.renderer.domElement)

            controls.update()
            Array(200).fill(200).map(() => { view.scene.add(addStars()) })


        }
    }, [view, divWindow.height, divWindow.width])








    return (
        <div id='three' className='h-full w-full'>
            <canvas id="bg" className=""></canvas>


        </div>
    )
}
