import 'regenerator-runtime/runtime'
import axios from "axios"
import '../../Components/cardData.js'

const baseUrl  = `http://api.alquran.cloud/v1`;
export const surah = async () => {
    try {
        const resp = await axios.get(`${baseUrl}/surah`);
        const {data} = resp
        return data;
    } catch (error) {
        console.log(error)
    }
}

export const juz = async () => {
    try {
        const iD = localStorage.getItem('id');
        const resp = await axios.get(`${baseUrl}/surah/${iD}`);
        const {data} = resp
        return data
    } catch (error) {
        console.log(error)
    }
}