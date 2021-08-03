import React, {Component} from 'react';
import cronometro from './assets/cronometro.png';
import './style.css'
class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            numero: 0,
            botao: 'Iniciar'
        }
        this.timer = null;
        this.iniciarTempo = this.iniciarTempo.bind(this);
        this.pararTempo = this.pararTempo.bind(this);

    }

    iniciarTempo(){

        let state = this.state;

        if(this.timer !== null){
            clearInterval(this.timer)
            this.timer = null;
            state.botao = 'Iniciar'
        } else {

            this.timer = setInterval(() => {
                state.numero += 0.1;
                this.setState(state);
            }, 100)
            state.botao = 'Parar'
        }

        this.setState(state)

    }

    pararTempo(){
        if(this.timer !== null) {
            clearInterval(this.timer)
            this.timer = null;
        }

        let state = this.state;
        state.numero = 0;
        state.botao = 'Iniciar'
        this.setState(state)
    }

    render(){
        return(
            <div className="container" >
                <img src={cronometro} alt="cronometro" className="img" />
                <p className="time">{this.state.numero.toFixed(1)}</p>
                <div className="botao">
                    <button onClick={this.iniciarTempo}>{this.state.botao}</button>
                    <button onClick={this.pararTempo}>Parar</button>
                </div>
            </div>
        )
    }
}

export default App;