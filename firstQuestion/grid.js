let generateGrid = {
  createAndShowGrid: function () {
    let goltable = document.createElement("tbody");
    let tablehtml = '';
    for (let h=0; h<4; h++) {
      tablehtml += "<tr id='row+" + h + "'>";
      for (let w=0; w<4; w++) {
        tablehtml += "<td id='" + w + "-" + h + "'></td>";
      }
      tablehtml += "</tr>";
    }
    goltable.innerHTML = tablehtml;

    // add table to the #grid element
    let grid = document.getElementById('grid');
    grid.appendChild(goltable);
    this.table = goltable;
  }
}
generateGrid.createAndShowGrid();
