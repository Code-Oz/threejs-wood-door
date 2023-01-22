import * as THREE from "three";
export const createPlaneGeometry = (xVertices, yVertices) => {
  return new THREE.PlaneBufferGeometry(1, 1, xVertices, yVertices);
};

export const createSphereGeometry = (xVertices, yVertices) => {
  return new THREE.SphereBufferGeometry(0.5, xVertices, yVertices);
};
