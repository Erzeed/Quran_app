import * as style from './cardData.css'

class cardData extends HTMLElement {
    constructor(){
        super()
        this.shadowDOM = this.attachShadow({mode : "open"})
    }

    connectedCallback() {
        this.render();
    }

    set surah(surah){
        this._surah = surah
        this.render()
    }

    render(){
        this.shadowDOM.innerHTML = `
        <style>
            ${style}
        </style>
        <div class="card">
            <div class="card_header">
                <div class="nomor_surat" >
                    <p>${this._surah.number}</p>
                </div>
                <div class="jumlah_ayat">
                    <p>${this._surah.numberOfAyahs}</p>
                </div>
            </div>
            <div class="body_card">
                <p>${this._surah.englishName}</p>
                <p>${this._surah.englishNameTranslation}</p>
            </div>
            <button id=${this._surah.number}></a></button>
        </div>
        `

    }
}

customElements.define("card-data" , cardData)
