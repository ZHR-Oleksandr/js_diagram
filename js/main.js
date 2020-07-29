var a = [5, 8, 2, 1, 15, 2, 3, 5, 9, 11, 10, 4, 3, 14, 1, 7, 10, 3, 2, 13];
createDiagram(a, 40, 40);

function createDiagram(masiv, height, width) {
  var fullDiagram = document.createElement("div");
  document.body.insertBefore(fullDiagram, document.body.firstChild);

  var fullDiagramRows = Math.max.apply(Math, masiv);
  var fullDiagramColls = masiv.length;
  fullDiagram.style.width = fullDiagramColls * width + 24 + "px";
  fullDiagram.style.height = fullDiagramRows * height + 4 + "px";
  fullDiagram.className = "diagramCanvas";

  var number = document.createElement("span");
  number.style.fontSize = "14px";
  number.style.position = "absolute";
  number.style.left = "-20px";
  for (var i = 0; i <= fullDiagramRows; ++i) {
    number.style.bottom = i * height + "px";
    number.innerHTML = i;
    fullDiagram.insertBefore(number.cloneNode(true), fullDiagram.firstChild);
  }
  number.style.bottom = "-20px";
  number.style.fontSize = "14px";
  number.style.paddingLeft = width / 2 + "px";

  for (i = 1; i <= fullDiagramColls; ++i) {
    number.style.left = i * width - width + "px";
    number.innerHTML = i;
    fullDiagram.insertBefore(number.cloneNode(true), fullDiagram.firstChild);
  }
  var column = document.createElement("div");
  column.style.width = width + "px";
  column.style.display = "inline-block";
  column.style.border = "1px solid";
  column.style.marginRight = "1px";
  for (i = 1; i <= fullDiagramColls; ++i) {
    column.style.height = height * masiv[i - 1] + "px";
    var color = "rgb(241, 79, 30) ";
    if (masiv[i - 1] <= 10) {
      color = "rgb(238, 234, 8)";
    }
    if (masiv[i - 1] <= 5) {
      color = " rgb(8, 238, 112)";
    }
    column.style.backgroundColor = color;
    fullDiagram.appendChild(column.cloneNode(true));
  }
}
