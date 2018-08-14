import HouseService from './HouseService.js'

let houseService = new HouseService()

function drawHouse(houses) {
    let template = ''
    for (let i = 0; i < houses.length; i++) {
        const house = houses[i];
        template += `
        <div style="outline: 1px solid black" class="col-3">
        <p>Make: ${house.bedrooms}</p>
        <p>${house.bathrooms}</p>
        <img src="${house.imgUrl}" alt="somethingelse">
        <p>${house.levels}</p>
        <p>${house.year}</p>
        <p>${house.price}</p>
        <p>${house.description}</p>
    </div>`
    }
    document.getElementById("submissions").innerHTML = template
}

export default class HouseController {
    constructor() {

    }
    houseSetup() {
        let template = `
            <form onsubmit="app.controllers.houseController.postHouse(event)">
            <label for="bedrooms">Bedrooms: </label>
            <input type="text" name="bedrooms" placeholder="Bedrooms" required>
            
            <label for="bathrooms">Bathrooms: </label>
            <input type="text" name="bathrooms" placeholder="Bathrooms" required>
            
            <label for="imgUrl">Image URL: </label>
            <input type="url" name="imgUrl" placeholder="Image URL" required>

            <label for="levels">Levels: </label>
            <input type="levels" name="levels" placeholder="Levels" required>
            
            <label for="year">Year: </label>
            <input type="text" name="year" placeholder="year" required>

            <label for="price">Price: </label>
            <input type="text" name="price" placeholder="Price" required>

            <label for="description">Description: </label>
            <input type="text" name="description" placeholder="description">
            
            
            <button type="submit">Add House</button>
            </form>
            `
        document.getElementById("form").innerHTML = template
        houseService.getHouses(drawHouse)
    }

    postHouse(e) {
        e.preventDefault();
        let formData = e.target;
        houseService.postHouse(formData, drawHouse)
        formData.reset()
    }

}




