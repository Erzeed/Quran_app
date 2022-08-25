import * as styles from './banner.css'
import quran from '../../img/quran.png';


class banner extends HTMLElement{
    constructor(){
        super()
        this.shadowDOM = this.attachShadow({mode:"open"})
    }

    connectedCallback() {
        this.render()
    }
    render(){
        this.shadowDOM.innerHTML = `
        <style>
            ${styles}
        </style>            
            <div class="banner">
                <div class="title">
                    <h1>Ayo</h1>
                    <h1>Baca Al-Quran</h1>
                </div>
                <div class="img">
                    <img src="${quran}" alt="al-quran">
                </div>
            </div>
        `
    }
}


customElements.define('banner-quran', banner)