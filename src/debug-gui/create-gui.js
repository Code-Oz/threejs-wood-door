import * as dat from "dat.gui";
import { createAxeDebugGUI } from "./create-axe-debug-ui";
import { isHrefExist } from "../url-parser";
import {
  createAoMapIntensityDebugGUI,
  createAlphaDebugGUI,
  createDisplacementMapDebugGUI,
  createNormalDebugGUI,
} from "./create-material-debug-ui";

const URL_FLAG_DEBUG = "debug";
const isDebug = isHrefExist(URL_FLAG_DEBUG);

export const createGUI = (scene, planeMesh) => {
  if (!isDebug) {
    return;
  }

  const gui = new dat.GUI({
    width: 300,
  });

  createAxeDebugGUI(scene);
  createAoMapIntensityDebugGUI(gui, planeMesh);
  createAlphaDebugGUI(gui, planeMesh);
  createNormalDebugGUI(gui, planeMesh);
  createDisplacementMapDebugGUI(gui, planeMesh);

  return gui;
};
