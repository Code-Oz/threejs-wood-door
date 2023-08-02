import { DEFAULT_NORMAL_SCALE } from "../config";

export const createAoMapIntensityDebugGUI = (gui, mesh) => {
  const folder = gui.addFolder("material");

  folder
    .add(mesh.material, "aoMapIntensity")
    .name("aoMapIntensity")
    .min(0)
    .max(1)
    .step(0.01);
};

export const createAlphaDebugGUI = (gui, mesh) => {
  const params = {
    alpha: true,
  };
  const folder = gui.addFolder("alpha");

  folder
    .add(params, "alpha")
    .name("alpha")
    .onChange((value) => {
      mesh.material.transparent = value;
    });
};

export const createNormalDebugGUI = (gui, mesh) => {
  const params = {
    normalScale: DEFAULT_NORMAL_SCALE,
  };
  const folder = gui.addFolder("normalScale");

  folder
    .add(params, "normalScale")
    .name("normalScale")
    .min(0)
    .max(1)
    .step(0.01)
    .onChange((value) => {
      mesh.material.normalScale.set(value, value);
    });
};

export const createDisplacementMapDebugGUI = (gui, mesh) => {
  const folder = gui.addFolder("displacementScale");

  folder
    .add(mesh.material, "displacementScale")
    .name("displacementScale")
    .min(0)
    .max(1)
    .step(0.01);
};
