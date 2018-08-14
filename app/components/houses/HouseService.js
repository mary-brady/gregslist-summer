import House from "../../models/House.js"

// @ts-ignore
const houseApi = axios.create({
    baseURL: 'https://bcw-gregslist.herokuapp.com/api/houses',
    timeout: 3000
})

export default class HouseService {
    constructor() {

    }
    getHouses(draw) {
        houseApi.get()
            .then(res => {
                let houses = res.data.data.map(rawHouse => {
                    return new House(rawHouse)
                })
                draw(houses)
            })
    }
    postHouse(formData, draw) {
        let house = new House({
            bedrooms: formData.bedrooms.value,
            bathrooms: formData.bathrooms.value,
            imgUrl: formData.imgUrl.value,
            levels: formData.levels.value,
            year: formData.year.value,
            price: formData.price.value,
            description: formData.description.value,
        })
    }
}