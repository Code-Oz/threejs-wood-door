import * as THREE from "three";
import {
  doorColorTexture,
  doorAlphaTexture,
  doorAmbientOcclusionTexture,
  doorHeightTexture,
  doorNormalTexture,
  doorMetalnessTexture,
  doorRoughnessTexture,
} from "./textures";

import {
  DEFAULT_AOP_MAP_INTENSITY,
  DEFAULT_FACE,
  DEFAULT_NORMAL_SCALE,
  DEFAULT_DISPLACEMENT_SCALE,
} from "./config";

export const material = new THREE.MeshStandardMaterial();

export const applyColorTexture = (material) => {
  material.map = doorColorTexture;
};

export const applyAmbientOcclusionTexture = (material, geometry) => {
  geometry.setAttribute(
    "uv2",
    new THREE.BufferAttribute(geometry.attributes.uv.array, 2)
  );
  material.aoMap = doorAmbientOcclusionTexture;
  material.aoMapIntensity = DEFAULT_AOP_MAP_INTENSITY;
};

export const applyDisplacementMapTexture = (material) => {
  material.displacementMap = doorHeightTexture;
  material.displacementScale = DEFAULT_DISPLACEMENT_SCALE;
};

export const removeDisplacementMapTexture = (material) => {
  material.displacementMap = null;
};

export const applyMetalnessTexture = (material) => {
  material.metalnessMap = doorMetalnessTexture;
};

export const applyRoughnessTexture = (material) => {
  material.roughnessMap = doorRoughnessTexture;
};

export const applyAlphaTexture = (material) => {
  material.transparent = true;
  material.alphaMap = doorAlphaTexture;
};

export const applyNormalTexture = (material) => {
  material.normalMap = doorNormalTexture;
  material.normalScale.set(DEFAULT_NORMAL_SCALE, DEFAULT_NORMAL_SCALE);
};

export const applySideTexture = (material) => {
  material.side = DEFAULT_FACE;
};

export const applyAllTexture = (material, geometry) => {
  applyColorTexture(material);
  applyAmbientOcclusionTexture(material, geometry);
  applyDisplacementMapTexture(material);
  applyMetalnessTexture(material);
  applyRoughnessTexture(material);
  applyAlphaTexture(material);
  applyNormalTexture(material);
  applySideTexture(material);
};
