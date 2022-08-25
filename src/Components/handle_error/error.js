import * as style from './error.css'

class err extends HTMLElement {
    constructor(){
        super()
        this.shadowDOM = this.attachShadow({mode: 'open'})
    }

    connectedCallback() {
        this.render()
    }

    render(){
        this.shadowDOM.innerHTML = `
        <style>
            ${style}
        </style>
        <div class="err">
            <h3>Mohon cek jaringan anda</h3>
        </div>
        `
    }
}

customElements.define('err-load', err);