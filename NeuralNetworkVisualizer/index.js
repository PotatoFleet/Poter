const newLayerBtn = document.getElementById("new-layer");
const newNeuronBtn = document.getElementById("new-neuron");
const neuralNetwork = document.querySelector(".neural-network-field");
const menu = document.querySelector(".menu");
const mutableProperties = []

let neurons = [...document.querySelectorAll(".neuron")];
let layers = [...document.querySelectorAll(".layer")];
let selectedLayer = layers[0];

let selectedObject = selectedLayer;

String.prototype.replaceAt = function (index, replacement) {
  return (
    this.substr(0, index) +
    replacement +
    this.substr(index + replacement.length)
  );
};

function setSelectedLayer(event) {
  const layer = event.target;

  selectedLayer = layer;
  selectedObject = layer;

  for (const l of layers) {
    l.classList.remove("selected");
  }

  layer.classList.add("selected");

  displayMenu();
}

function setSelectedNeuron(event) {
  event.stopPropagation();
  selectedObject = event.target;

  const layer = event.target.parentElement;

  selectedLayer = layer;

  for (const l of layers) {
    l.classList.remove("selected");
  }

  layer.classList.add("selected");

  displayMenu();
}

function setInputOutputLayers() {
  layers[0].details.layerType = "input";
  layers[layers.length - 1].details.layerType = "output";
}

function init() {
  for (const layer of layers) {
    layer.details = {};
    layer.addEventListener("click", setSelectedLayer);
    setObjectDetails(layer);
  }

  setInputOutputLayers();

  for (const neuron of neurons) {
    neuron.details = {};
    neuron.addEventListener("click", setSelectedNeuron);
    setObjectDetails(neuron);
  }

  selectedLayer.classList.add("selected");

  displayMenu();
}

function setValue(object, key, value) {
  object.details[key] = value;
}

function createNewNeuron() {
  const neuron = document.createElement("div");
  neuron.className = "neuron";
  neuron.addEventListener("click", setSelectedNeuron);
  selectedLayer.appendChild(neuron);
  setObjectDetails(neuron);
  neurons.add(neuron);
  setSelectedNeuron({ target: neuron });
}

function createNewLayer() {
  const newLayer = document.createElement("div");
  newLayer.className = "layer";
  newLayer.addEventListener("click", setSelectedLayer);
  layers.push(newLayer);
  setObjectDetails(newLayer);
  setSelectedLayer({ target: newLayer });
  createNewNeuron();
  setInputOutputLayers();
  neuralNetwork.appendChild(newLayer);
}

function isEmptyObject(obj) {
  return (
    obj &&
    Object.keys(obj).length === 0 &&
    Object.getPrototypeOf(obj) === Object.prototype
  );
}

function setObjectDetails(object) {
  object.details = {};

  if (object.classList.contains("layer")) {
    setValue(object, "type", "layer");
    setValue(object, "name", "Unnamed Layer " + layers.indexOf(object));
    setValue(object, "neurons", object.children.length);
    setValue(object, "layerIndex", layers.indexOf(object));
    setValue(object, "layerType", "Hidden Layer");
  } else {
    setValue(object, "type", "neuron");
    setValue(
      object,
      "name",
      "Unnamed Neuron " + [...object.parentElement.children].indexOf(object)
    );
    setValue(object, "layer", object.parentElement.details.name);
    setValue(object, "LNI", [...object.parentElement.children].indexOf(object));
    setValue(object, "ANI", neurons.indexOf(object));
    setValue(object, "bias", 0);
  }
}

function modifyValue(event) {
  let valueDiv = event.target;
  const pairDiv = valueDiv.parentElement;
  const keyText = pairDiv.querySelector(".key").textContent;
  const key = titleCaseToCamelCase(keyText);
  const value = valueDiv.textContent;
  const input = document.createElement("input");
  input.type = "text";
  input.value = value;
  input.maxlength = 15;
  input.size = 10;
  input.placeholder = keyText;
  input.classList.add("value-input");
  input.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
      selectedObject.details[`${key}`] = input.value;
      valueDiv = document.createElement("div");
      valueDiv.textContent = selectedObject.details[`${key}`];
      valueDiv.classList.add("value");
      if (key === "name") {
        document.querySelector(".selected-object-name").textContent =
          selectedObject.details[`${key}`];
      }
      valueDiv.addEventListener("click", modifyValue);
      pairDiv.removeChild(input);
      pairDiv.appendChild(valueDiv);
    }
  });
  pairDiv.removeChild(valueDiv);
  pairDiv.appendChild(input);
  input.focus();
}

function titleCaseToCamelCase(text) {
  text = text.replace(/\s+(.)/g, function (_match, group) {
    return group.toUpperCase();
  });
  text = text.replaceAt(0, text[0].toLowerCase());
  return text;
}

function camelCaseToTitleCase(text) {
  const result = text.replace(/([A-Z])/g, " $1");
  const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
  return finalResult;
}

function displayMenu() {
  menu.innerHTML = "";
  const selectedObjectNameDiv = document.createElement("div");
  selectedObjectNameDiv.textContent = selectedObject.details.name;
  selectedObjectNameDiv.classList.add("selected-object-name");
  menu.appendChild(selectedObjectNameDiv);

  for (let [key, value] of Object.entries(selectedObject.details)) {
    const pairDiv = document.createElement("div");
    const keyDiv = document.createElement("div");
    const valueDiv = document.createElement("div");

    keyDiv.classList.add("key");
    valueDiv.classList.add("value");

    if (key === "ANI") {
      keyDiv.classList.add("ani");
      keyDiv.classList.add("tooltip");
    } else if (key === "LNI") {
      keyDiv.classList.add("lni");
      keyDiv.classList.add("tooltip");
    } else {
      key = camelCaseToTitleCase(key);
    }

    keyDiv.textContent = key;
    valueDiv.textContent = value;

    valueDiv.addEventListener("click", modifyValue);

    pairDiv.appendChild(keyDiv);
    pairDiv.innerHTML += " : ";
    pairDiv.appendChild(valueDiv);

    menu.appendChild(pairDiv);
  }
}

newNeuronBtn.addEventListener("click", createNewNeuron);
newLayerBtn.addEventListener("click", createNewLayer);

init();
