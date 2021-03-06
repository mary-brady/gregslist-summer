import CarService from "./CarService.js";

let carService = new CarService()

function drawCars(cars) {
  let template = ''
  for (let i = 0; i < cars.length; i++) {
    const car = cars[i];
    template += `
    <div style="outline: 1px solid black" class="col-3">
        <p>Make: ${car.make}</p>
        <p>${car.model}</p>
        <p>${car.price}</p>
        <button onclick="app.controllers.carController.bid('${car._id}')">BID!</button>
        <p>${car.year}</p>
        <p>${car.description}</p>
        <img src="${car.imgUrl}" alt="somethingelse">
        <button onclick="app.controllers.carController.deleteCar('${car._id}')">BUHLETE</button>

    </div>`
  }
  document.getElementById('submissions').innerHTML = template
}

export default class CarController {
  constructor() {

  }
  carSetup() {
    let template = `
      <form onsubmit="app.controllers.carController.addCar(event)">
      <h3>List Your Car:</h3>
      <label for="bedrooms">Make</label>
        <input type="text" name="make" placeholder="Make" required>
      
        <label for="bathrooms">Model</label>
        <input type="text" name="model" placeholder="Model" required>
      
        <label for="bedrooms">Price</label>
        <input type="number" name="price" placeholder="Price" required>
      
        <label for="bedrooms">Year</label>
        <input type="text" name="year" placeholder="Year" required>
      
        <label for="description">Description</label>
        <input type="text" name="description" placeholder="Description">
      
        <label for="imgUrl">Image URL</label>
        <input type="url" name="imgUrl" placeholder="Image Link" required>
      
        <button type="submit">Add Car</button>
      </form>
      `
    document.getElementById("form").innerHTML = template
    carService.getCars(drawCars)
  }

  addCar(e) {
    e.preventDefault();
    let formData = e.target
    carService.addCar(formData, drawCars)
    formData.reset()
  }

  deleteCar(carId) {
    carService.deleteCar(carId, drawCars)
  }
  bid(carId, carPrice) {
    carPrice += 100
    let update = {
      price: carPrice
    }
    carService.bid(carId, update, drawCars)
  }
}
