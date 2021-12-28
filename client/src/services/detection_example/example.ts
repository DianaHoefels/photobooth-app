import "@tensorflow/tfjs-backend-webgl";
import "@tensorflow/tfjs-core";
import "@tensorflow/tfjs-converter";
import * as blazeface from '@tensorflow-models/blazeface';

const run = async () => {
  const model = await blazeface.load();
  const img = document.getElementById("img") as HTMLImageElement;
  const res = await model.estimateFaces(img);
  console.log("detection", JSON.stringify(res, null, 4));
};

run();
