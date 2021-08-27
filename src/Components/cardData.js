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
            * {
                box-sizing: border-box;
                padding: 0;
                margin: 0;
            }
            
            .card {
                width: 230px;
                height: 130px;
                display: block;
                background-color: #fff;
                border-radius: 5px;
                padding: 20px;
                box-shadow: 0 0 20px rgba(0, 0, 0, 0.08);
                font-family: 'Andada Pro', serif;
                transition-duration: .1s;
                margin: 10px;
                position:relative;
            }
            
            .card > button {
                background-color: transparent;
                border: none;
                cursor: pointer;
                width:100%;
                height:100%;
                position:absolute;
                top:0;
                left:0;
            }

            .card:hover {
                transform: scale(1.1);
                box-shadow: 0 0 20px rgba(188, 255, 185, 1);
            }
            
            .card > .card_header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 20px;
            }
            
            .card_header > .nomor_surat {
                background-color: #BCFFB9;
                width: 25px;
                height: 25px;
                border-radius: 50%;
                color: #368B85;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .body_card > p:last-child {
                color: rgba(0, 0, 0, 0.5);
                margin-top: 5px;
            }
            @media only screen and (max-width: 375px)  {
                /* For smarytphone: */
                .card {
                    width: 275px;
                }
            }
            @media only screen and (max-width: 768px) {
                /* For tablet: */
                .card {
                    width: 275px;
                }
            }
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
