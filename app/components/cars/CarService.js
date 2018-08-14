import Car from '../../models/Car.js'

// @ts-ignore
const carsApi = axios.create({
  baseURL: 'https://bcw-gregslist.herokuapp.com/api/cars',
  timeout: 3000
})

export default class CarService {
  constructor() {

  }

  getCars(draw) {
    carsApi.get()
      .then(res => {
        let cars = res.data.data.map(rawCar => {
          return new Car(rawCar)
        })
        draw(cars)
      })
  }

  addCar(formData, draw) {
    let newCar = new Car({
      make: formData.make.value,
      model: formData.model.value,
      year: formData.year.value,
      price: formData.price.value,
      description: formData.description.value,
      imgUrl: formData.imgUrl.value,
    })
  }
}