import * as style from './quran.css'
import play from '../../img/icons/play-line.png';
import pause from '../../img/icons/pause-line.png';
import {Howl} from 'howler';
class quran extends HTMLElement {
    constructor(){
        super()
        this.shadowDOM = this.attachShadow({mode: "open"})
    }
    
    set ayat(ayat){
        this._ayat = ayat;
        this._ayatt = ayat.ayahs;
        this.render();
    }

    mapping(){
        let ayat = this.shadowDOM.querySelector('.ayatt')
        this._ayatt.map(el => {
            let numb = el.numberInSurah;
            if(numb === 1) {
                const filterData = el.text.substring(39)
                const span = `<span class="surah_${numb}">${filterData} {${numb}} </span>`;
                if(filterData == '') {
                    const txt = `<span class="surah_${numb}">${filterData}</span>`
                    ayat.innerHTML += txt
                }else {
                    ayat.innerHTML += span
                }
            }else {
                const txt = `<span class="surah_${numb}">${el.text} {${numb}} </span>`
                ayat.innerHTML += txt
            }
        })
    }

    playList(){
        const baseAudio = `https://cdn.islamic.network/quran/audio/128/ar.alafasy`
        const playList = [];
        const lastIdSong = this._ayatt[this._ayatt.length - 1].number
        for (let i = this._ayatt[0].number; i <= lastIdSong; i++) {
            playList.push(`${baseAudio}/${i}.mp3`)
        }
        return playList
    }

    playSong(){
        let playList = this.playList()
        let numberSurah = sessionStorage.getItem('i')
        let tempNumberSurah = sessionStorage.getItem('i')
        const lastIdSong = this._ayatt[this._ayatt.length - 1].number
        const imgPause = this.shadowDOM.querySelector('button .pause')
        
        const sound = new Howl({
            src: [playList[numberSurah]],
            html5: true,
            volume: 1
        });
        sound.play()
        imgPause.addEventListener('click',() => {
            sound.pause()
        })
        sound.on('play',() => {
            tempNumberSurah++
            if (tempNumberSurah > 0){
                try{
                    const addClassActive = this.shadowDOM.querySelector(`.surah_${tempNumberSurah}`)
                    const removeClassActive = this.shadowDOM.querySelector(`.surah_${numberSurah}`)
                    addClassActive.classList.add('active')
                    removeClassActive.classList.remove('active')
                }catch(err){
                    
                }
            }
        })
        sound.on('end',() => {
            numberSurah++
            sessionStorage.setItem('i',`${numberSurah}`)
            this.playSong()
            if(numberSurah === lastIdSong){
                const removeClassActive = this.shadowDOM.querySelector(`.surah_${lastIdSong}`)
                removeClassActive.classList.remove('active')
                sessionStorage.clear('i')
                imgPause.src = play
                imgPause.classList.value = 'play'
            } 
        })
        return sound
    }

    audioControl(button) {
        const img = this.shadowDOM.querySelector('button .play')
        const imgPause = this.shadowDOM.querySelector('button .pause')
        const numberSurah = sessionStorage.getItem('i')
        numberSurah === null ? sessionStorage.setItem('i',0) : '';

        if(button == 'play'){
            img.src = pause
            img.classList.value = 'pause'
            this.playSong()
        }else if(button == 'pause'){
            imgPause.src = play
            imgPause.classList.value = 'play'
            
        } 
    }

    render(){
        this.shadowDOM.innerHTML = `
            <style>
                ${style}
            </style>
            <div class="quran">
                <div class="quran_header">
                    <div class="quran_name">
                        <p>${this._ayat.englishName}</p>
                    </div>
                    <div class="quran_namee">
                        <p>${this._ayat.englishName}</p>
                        <p>${this._ayat.englishNameTranslation}</p>
                    </div>
                    <div class="quran_jumlahayat">
                        <p>${this._ayat.numberOfAyahs}</p>
                    </div>
                </div>
                <div class="quran_main">
                    <div class="header_ayat">
                        <h1>بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</h1>
                    </div>
                    <div class="ayat">
                        <p class="ayatt"></p>
                    </div>
                </div>
                <div class="audio-quran">
                    <button> <img class="play" src='${play}' /> </button>
                </div>
            </div>
                
        `    
        this.mapping()
        this.playList()
        this.shadowDOM.querySelector('button').addEventListener('click',(e) => this.audioControl(e.target.classList))
    }
}

customElements.define('quran-main', quran)