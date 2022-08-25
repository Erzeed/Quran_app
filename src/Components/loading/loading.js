import * as style from './loading.css'

class loading extends HTMLElement {
    constructor(){
        super()
        this.shadowDOM = this.attachShadow({ mode: 'open'})
    }

    connectedCallback() {
        this.render()
    }

    render(){
        this.shadowDOM.innerHTML = `
            <style>
                ${style}
            </style>
            <div class="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        `
    }
}

customElements.define('loading-roll', loading)