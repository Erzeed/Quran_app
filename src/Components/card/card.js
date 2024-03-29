import '../cardData/cardData'
import * as style from './card.css'

class card extends HTMLElement {
    constructor(){
        super()
        this.shadowDOM = this.attachShadow({mode: "open"})
    }


    set surat(surah){
        this._surah = surah
        this.render()
    }

    render(){
        this.shadowDOM.innerHTML = `
        <style>
            ${style}
        </style>
        `
        this._surah.forEach(el => {
            const cardData = document.createElement('card-data')
            cardData.surah = el
            this.shadowDOM.appendChild(cardData);
        })

}}

customElements.define("card-container" , card)