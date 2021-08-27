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
                .lds-ring {
                    display: inline-block;
                    position: relative;
                    width: 120px;
                    height: 120px;
                    background-color:#ffff;
                    box-shadow: 2px 2px 15px rgba(0,0,0,.1)
                }
                .lds-ring div {
                    box-sizing: border-box;
                    display: block;
                    position: absolute;
                    color:#28C76F;
                    width: 64px;
                    height: 64px;
                    margin: 27px;
                    border: 8px solid #fff;
                    border-radius: 50%;
                    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
                    border-color: #28C76F transparent transparent transparent;
                }
                .lds-ring div:nth-child(1) {
                    animation-delay: -0.45s;
                }
                .lds-ring div:nth-child(2) {
                    animation-delay: -0.3s;
                }
                .lds-ring div:nth-child(3) {
                    animation-delay: -0.15s;
                }
                @keyframes lds-ring {
                    0% {
                    transform: rotate(0deg);
                    }
                    100% {
                    transform: rotate(360deg);
                    }
                }
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