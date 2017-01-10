var generateGrid = {
  createAndShowGrid: function () {
    var goltable = document.createElement("tbody");
    var tablehtml = '';
    for (var h=0; h<4; h++) {
      tablehtml += "<tr id='row+" + h + "'>";
      for (var w=0; w<4; w++) {
        tablehtml += "<td id='" + w + "-" + h + "'></td>";
      }
      tablehtml += "</tr>";
    }
    goltable.innerHTML = tablehtml;

    // add table to the #grid element
    var grid = document.getElementById('grid');
    grid.appendChild(goltable);
    this.table = goltable;
  }
}

generateGrid.createAndShowGrid();
