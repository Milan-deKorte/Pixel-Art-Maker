// Create variables heightEl and widthEl
var heightEl = document.getElementById('inputHeight');
var widthEl = document.getElementById('inputWidth');

// Function clickColor: Add submit eventlistener to run the makeGrid function.
document.querySelector("#sizePicker").addEventListener('submit', function(evt) {
  evt.preventDefault()
  const height = heightEl.value;
  const width = widthEl.value;

  makeGrid(height, width);
});

// Function clickColor: Add change color click eventlistener to each cell
function clickColor(cells) {
  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', function (evt) {
      const color = document.querySelector('#colorPicker').value;
      evt.target.style.backgroundColor = color;
    });
  }
}

// Function makeGrid: appends a table in the pixelCanvas html element.
function makeGrid(height, width) {
  const mainElement = document.querySelector('#pixelCanvas');


  const tableElement = document.createElement('table');
  for (let i = 0; i < height; i++) {
    const trElement = document.createElement('tr');
    // Defining amount of rows.

    for (let j = 0; j < width; j++) {
      trElement.appendChild(document.createElement('td'));
      // Defining amount of columns and use appendChild to add td to tr element.

    }

    tableElement.appendChild(trElement);
  }
  mainElement.innerHTML = '';
  mainElement.appendChild(tableElement);
  const cells = document.querySelectorAll('td');
  clickColor(cells);


}
