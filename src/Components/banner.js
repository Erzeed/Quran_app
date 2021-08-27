import quran from '../img/quran.png'
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

                * {
                    box-sizing: border-box;
                    padding: 0;
                    margin: 0;
                }
                .banner {
                    font-family: 'Merriweather', serif;
                    width: 80vw;
                    height:200px ;
                    color:#fff;
                    text-shadow: 0 0 10px rgba(0,0,0,0.4);
                    margin-bottom: 20px;
                    border-radius: 10px;
                    position:relative;
                    display:flex;
                    background-color: #08AEEA;
                    background-image: linear-gradient(270deg, #08AEEA 0%, #2AF598 100%);
                }

                .banner > .title {
                    display:flex;
                    padding-left:50px;
                    flex-direction:column;
                    justify-content: center;
                    width:300px;
                    height:100%;
                }

                .banner > .img > img{
                    width: 320px;
                    height: 250px;
                    position:absolute;
                    right: -20px;
                    top: -10px;
                }
                @media only screen and (max-width: 375px) {
                    /* For smarytphone: */
                    .banner > .img > img{
                        display: none;
                    }
                  }
                @media only screen and (max-width: 414px) {
                    /* For smarytphone: */
                    .banner > .img > img{
                        display: none;
                    }
                  }
                @media only screen and (max-width: 600px) {
                    /* For smarytphone: */
                    .banner > .img > img{
                        display: none;
                    }
                  }
                @media only screen and (max-width: 768px) {
                    /* For smarytphone: */
                    .banner > .img > img{
                        width: 290px;
                        height: 220px;
                    }
                  }
            </style>
            <div class="banner">
                <div class="title">
                    <h1>Ayo</h1>
                    <h1>Baca Al-Quran</h1>
                </div>
                <div class="img">
                    <img src="${quran}" alt="">
                </div>
            </div>
        `
    }
}

customElements.define('banner-quran', banner)