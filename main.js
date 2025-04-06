import * as THREE from 'three' ;

const scene  = new THREE.Scene();
scene.background = new THREE.Color('#F0F0F0');

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight,0.1,1000);
camera.position.z = 4;

const geometry = new THREE.TetrahedronGeometry();
const material = new THREE.MeshPhongMaterial({ color: "purple", emissive: "purple"});

const cube = new THREE.Mesh(geometry,material);
scene.add(cube);

const light = new THREE.DirectionalLight("red",100);
light.position.set(10, 1, 1);
scene.add(light);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

function animate()
{
   requestAnimationFrame(animate);
   cube.rotation.x+=0.01;
   cube.rotation.y+=0.01;
   renderer.render(scene, camera);
}
animate();
