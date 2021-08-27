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
        .err {
            padding: 10px 30px;
            box-shadow: 0 0 10px rgb(255, 185, 185);
            margin-top: calc(50vh - 150px);
        }
        </style>
        <div class="err">
            <h3>Mohon cek jaringan anda</h3>
        </div>
        `
    }
}

customElements.define('err-load', err);