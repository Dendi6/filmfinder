class AppBar extends HTMLElement {
 
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
  
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.shadowDOM.innerHTML = `
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            :host {
                display: block;
                width: 100%;
                background-color: #00a2c6;
                color: white;
                text-align : Center;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            }
            h2 {
                padding: 40px;
                letter-spacing: -0.8px;
                word-spacing: -0.2px;
                color: #FFFFFF;
                font-weight: 700;
                text-decoration: none solid rgb(68, 68, 68);
                font-style: normal;
                font-variant: small-caps;
                text-transform: none;
            }
        </style>
        <h2>KreasiKite</h2>`;
    }
 }
  
 customElements.define("app-bar", AppBar);