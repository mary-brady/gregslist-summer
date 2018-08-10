import CarService from "./CarService.js";

let carService = new CarService()

function drawCars() {
  let cars = carService.getCars()
  let template = ''

  for (let i = 0; i < cars.length; i++) {
    const car = cars[i];
    template += `
    <div style="outline: 1px solid black" class="col-3">
        <p>Make: ${car.make}</p>
        <p>${car.model}</p>
        <p>${car.price}</p>
        <p>${car.year}</p>
        <p>${car.color}</p>
        <img src="${car.imgUrl}" alt="somethingelse">
    </div>`
  }
  document.getElementById('submissions').innerHTML = template
  drawCars()
}

export default class CarController {

  constructor() {

  }
  carSetup() {
    let template = `
      <form onsubmit="app.controllers.carController.addCar(event)">
        <label for="bedrooms">Make</label>
        <input type="text" name="make" placeholder="Make" required>
      
        <label for="bathrooms">Model</label>
        <input type="text" name="model" placeholder="Model" required>
      
        <label for="bedrooms">Price</label>
        <input type="number" name="price" placeholder="Price" required>
      
        <label for="bedrooms">Year</label>
        <input type="text" name="year" placeholder="Year" required>
      
        <label for="imgUrl">Color</label>
        <input type="url" name="color" placeholder="Color" required>
      
        <label for="imgUrl">Image URL</label>
        <input type="url" name="imgUrl" placeholder="Image Link" required>
      
        <button type="submit">Add Car</button>
      </form>
      `
    document.getElementById("form").innerHTML = template
    drawCars()
  }

  addCar(event) {
    event.preventDefault();
    let formData = event.target
    carService.addCar(formData)
    formData.reset()
    drawCars()
  }

}
