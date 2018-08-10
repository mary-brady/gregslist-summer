import House from "../../models/House.js"

let houses = []

export default class HouseService {
    constructor() {

    }
    getHouses() {
        let copyHouses = []
        houses.forEach(h => {
            copyHouses.push({
                bedrooms: h.bedrooms,
                bathrooms: h.bathrooms,
                squareFeet: h.squareFeet,
                price: h.price,
                address: h.address,
                imgUrl: h.imgUrl
            })
        })
        return copyHouses
    }
    postHouse(data) {
        let house = new House(
            data.bedrooms.value,
            data.bathrooms.value,
            data.squareFeet.value,
            data.price.value,
            data.address.value,
            data.imgUrl.value)
        houses.push(house)
    }

}