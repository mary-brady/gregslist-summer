import HouseService from './HouseService.js'

let houseService = new HouseService()

function drawHouse() {
    let housesCopy = houseService.getHouses()
    let template = ''
    for (let i = 0; i < housesCopy.length; i++) {
        const house = housesCopy[i];
        template += `
        <div class="col-3">
        <p>Make: ${house.bedrooms}</p>
        <p>${house.bathrooms}</p>
        <p>${house.squareFeet}</p>
        <p>${house.address}</p>
        <p>${house.price}</p>
        <img src="${house.imgUrl}" alt="somethingelse">
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
            
            <label for="bedrooms">Square Feet: </label>
            <input type="number" name="squareFeet" placeholder="Square Feet" required>
            
            <label for="price">Price: </label>
            <input type="text" name="price" placeholder="Price" required>

            <label for="address">Address: </label>
            <input type="text" name="address" placeholder="Address" required>
            
            <label for="imgUrl">Image URL: </label>
            <input type="url" name="imgUrl" placeholder="Image URL" required>
            
            <button type="submit">Add House</button>
            </form>
            `
        document.getElementById("form").innerHTML = template
        drawHouse()
    }

    postHouse(event) {
        event.preventDefault();
        let formData = event.target;
        houseService.postHouse(formData)
        formData.reset()
        drawHouse()
    }

}




