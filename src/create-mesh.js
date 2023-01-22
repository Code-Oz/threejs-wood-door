import * as THREE from "three";

export const createMesh = (geometry, material, position) => {
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(position.x, position.y, position.z);

  return mesh;
};
