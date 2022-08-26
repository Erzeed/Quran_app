import { surah,juz } from "../Api/surahAPI";
import Swal from 'sweetalert2'
import '../../Components/card/card.js'
import '../../Components/quran/quran.js'
import '../../Components/loading/loading.js'
import '../../Components/banner/banner.js'
import '../../Components/handle_error/error.js'

const main = () => {
    
    const card = document.querySelector('card-container')
    const main = document.querySelector('main')
    const quran = document.querySelector('quran-main')
    const banner = document.querySelector('banner-quran')
    const searchText = document.querySelector('.search input')
    const loading = document.querySelector('loading-roll')
    const Swal = require('sweetalert2')
    
    const showData = async () => {
        try {
            const dataSurah = await surah();
            if(dataSurah != undefined){
                const {data} = dataSurah
                card.surat = data
                searchText.addEventListener('change',() => {
                    search(data)
                })
                if(data){
                    loading.style.display = 'none'
                    banner.style.display = 'flex'
                }
                sessionStorage.setItem('i',0)
            }else {
                main.innerHTML = "<err-load></err-load>"
            }
        } catch (error) {
            
        }
    }

    const showJuz = async () =>{
        try {
            const dataJuz = await juz();
            const {data} = dataJuz
            quran.ayat = data
            if(data){
                loading.style.display = "none"
            }
        } catch (error) {
            
        }
    }

    const search = (data) => {
        const dataQuran = []
        data.forEach(e => {
            const name = e.englishName.toLowerCase()
            if(name.includes(`${searchText.value}`)){
                dataQuran.push(e)
            }
        })
        if(dataQuran == ''){
            // alert(`maaf ${searchText.value} tidak ditemukan`)
            Swal.fire({
                text: `maaf ${searchText.value} tidak ditemukan`,
                icon: 'error',
                confirmButtonText: 'Ok'
              })
        }else{
            card.surat = dataQuran
        }
    }

    const getId = (event) => {
        const id = event.path[0].id
        localStorage.setItem('id', id)
        showJuz()
    }
    
    window.addEventListener('click', event => {
        if(event.path[0].id != ''){
            getId(event)
            window.location.href = 'quran/index.html' 
        }
    })

    showData()
    showJuz()
}

export default main