var traverseDomAndCollectElements = function (matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if (matchFunc(startEl)) {
    resultSet.push(startEl);
  }
  for (var i = 0; i < startEl.children.length; i++) {
    resultSet = resultSet.concat(
      traverseDomAndCollectElements(matchFunc, startEl.children[i])
    );
  }
  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

var selectorTypeMatcher = function (selector) {
  // tu código aquí
  //  if (selector[0] === "#") return "id";
  //  if (selector[0] === ".") return "class";
  //  if (selector.split(".").length === 2) return "tag.class";
  //  else return "tag";

  return selector[0] === "#"
    ? "id"
    : selector[0] === "."
    ? "class"
    : selector.includes(".")
    ? "tag.class"
    : "tag";
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function (selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") {
    matchFunction = (el) => `#${el.id}` === selector;
  } else if (selectorType === "class") {
    matchFunction = (el) => el.classList.contains(selector.substring(1));
  } else if (selectorType === "tag.class") {
    matchFunction = (el) =>
      el.tagName.toLowerCase() === selector.split(".")[0] &&
      el.classList.contains(selector.split(".")[1]);
  } else if (selectorType === "tag") {
    matchFunction = (el) => el.tagName.toLowerCase() === selector.toLowerCase();
  }
  return matchFunction;
};

var $ = function (selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
