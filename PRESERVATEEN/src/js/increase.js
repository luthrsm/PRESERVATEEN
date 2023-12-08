function FontSize(type) {
  var ids = ["h1", ".increase", "h2","h3", "h4","h5", "h6", "p", "button"];
  ids.forEach(id => {
    var elemento = document.querySelector(id);
    var style = window.getComputedStyle(elemento);
    var size = parseFloat(style.getPropertyValue('font-size'));
    if (type == 'increase') {
      elemento.style.fontSize = (size + 5) + "px";
    } else {
      elemento.style.fontSize = (size - 5) + "px";
    }
  });
}
