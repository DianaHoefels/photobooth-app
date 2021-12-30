import "@tensorflow/tfjs-backend-webgl";
import "@tensorflow/tfjs-core";
import "@tensorflow/tfjs-converter";
import * as blazeface from '@tensorflow-models/blazeface';

export let model: blazeface.BlazeFaceModel

export const loadModel = async () => {
    model = await blazeface.load();
}

export const getModel = () => {
    return model;
}