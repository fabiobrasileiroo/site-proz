// Importa o módulo de exportação
import { exportToURL } from "three/examples/jsm/export/export-three";

// Cria um cubo
const cube = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({color: "red"})
);

// Exporta o código
exportToURL(cube, "cubo.js");

// Carrega o código
import * as THREE from "three";
import { cubo } from "./cubo.js";

// Cria uma cena
const scene = new THREE.Scene();

// Adiciona o cubo à cena
scene.add(cubo);

// Cria uma câmera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Cria um renderizador
const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Define a posição da câmera
camera.position.z = 5;

// Inicia o loop de renderização
function animate() {
  requestAnimationFrame(animate);

  // Atualiza a câmera
  camera.updateMatrixWorld();

  // Renderiza a cena
  renderer.render(scene, camera);
}

animate();
