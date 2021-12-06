const newLayerBtn = document.getElementById("new-layer");
const newNeuronBtn = document.getElementById("new-neuron");
const neuralNetwork = document.querySelector(".neural-network-field");

let layers = [...document.querySelectorAll(".layer")];
let selectedLayer = layers[layers.length - 1];

function setSelectedLayer(evt) {
  const layer = evt.target;

  selectedLayer = layer;

  for (const l of layers) {
    l.classList.remove("selected");
  }

  layer.classList.add("selected");
}

function init() {
  for (const layer of layers) {
    layer.addEventListener("click", setSelectedLayer);
  }
}

function createNewNeuron() {
  const newNeuron = document.createElement("div");
  newNeuron.className = "neuron";
  selectedLayer.appendChild(newNeuron);
}

function createNewLayer() {
  const newLayer = document.createElement("div");
  newLayer.className = "layer";
  setSelectedLayer({ target: newLayer });
  newLayer.addEventListener("click", setSelectedLayer);
  createNewNeuron();
  layers.push(newLayer);
  neuralNetwork.appendChild(newLayer);
}

newNeuronBtn.addEventListener("click", createNewNeuron);
newLayerBtn.addEventListener("click", createNewLayer);

init();
