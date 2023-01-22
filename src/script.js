import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { sizes } from "./config";
import { createGUI } from "./debug-gui/create-gui";
import { createMesh } from "./create-mesh";
import { createPlaneGeometry } from "./create-geometry";
import { material, applyAllTexture } from "./create-material";
import { PLANE_WIDTH_SEGMENTS, PLANE_HEIGHT_SEGMENTS } from "./config";

/**
 * Canvas
 */
const canvas = document.querySelector("canvas.webgl");

/**
 * Scene
 */
const scene = new THREE.Scene();

/**
 * Objects
 */
const planeGeometry = createPlaneGeometry(
  PLANE_WIDTH_SEGMENTS,
  PLANE_HEIGHT_SEGMENTS
);

applyAllTexture(material, planeGeometry);
const meshPosition = new THREE.Vector3(0, 0, 0);
const planeMesh = createMesh(planeGeometry, material, meshPosition);
scene.add(planeMesh);

/**
 * Light
 */
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);
const light = new THREE.PointLight(0xffffff, 1);
light.position.x = 2;
light.position.y = 3;
light.position.z = 4;
scene.add(light);

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

/**
 * Controls
 */
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

/**
 * GUI
 */
const gui = createGUI(scene, planeMesh);

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});

renderer.setSize(sizes.width, sizes.height);

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
});

const tick = () => {
  // Update controls
  controls.update();

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};
tick();
