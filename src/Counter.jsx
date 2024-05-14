import React from "react";
import attack from "./images/attack.png";
import defense from "./images/defend.png";
class Counter extends React.Component {

    constructor(props){
        super(props);
        this.handleAttack = this.handleAttack.bind(this);
        this.handleDefense = this.handleDefense.bind(this);
        this.state = {
            count: 0,
            lastPlay: "",
            gameStatus:"",
        }
    }
    handleAttack = () =>{
        this.setState((previousState) => {
            let newCount = previousState.count + Math.round(Math.random() * 10);
            return{
                count: newCount,
                lastPlay: "Attack",
                gameStatus: newCount>=10?"You Win!!!": previousState.gameStatus,
                // count: previousState.count + 1,
            };
        });
        // this.setState({count: this.state.count +1});
    };

    handleDefense = () => {
        // alert("Defense Clicked");
        this.setState((previousState) => {
            let newCount = previousState.count - Math.round(Math.random() * 10);
            return{
                count: newCount,
                lastPlay: "Defense",
                gameStatus: newCount<=-10?"You Lose!!": previousState.gameStatus,
                // count: previousState.count - 1,
            };
        });
    };

    handleRandomPlay = () =>{
        let playMode = Math.round(Math.random());
        if(playMode == 0){
            this.handleAttack();
        }
        else{
            this.handleDefense();
        }
    };

    handleReset = () =>{
        this.setState(() =>{
        return{
            count: 0,
            lastPlay: "",
            gameStatus: "",
            };
        });
    };
    render(){
        return(
            <div className="row text-white text-center">
                 <h1>Game Score: {this.state.count}</h1>
                 <p>You win at +10 and lose at -10 points!!!</p>
                 <p>Last Play: {this.state.lastPlay}</p>
                 <h3>Game Status: {this.state.gameStatus}</h3>
                 <div className="col-6 col-md-3 offset-md-2">
                    <img src={attack} onClick={this.handleAttack} style={{
                        width: "100%",
                        cursor: "pointer",
                        border: "1px solid green",
                        }}
                        className ="p-4 rounded" />
                 </div>
                 <div className="col-6 col-md-3 offset-md-2">
                    <img src={defense} onClick={this.handleDefense} style={{
                        width: "100%",
                        cursor: "pointer",
                        border: "1px solid red",
                    }}
                    className="p-4 rounded" />
                 </div>
                 <div className="col-12 col-md-4 offset-md-4">
                    <button className="btn btn-secondary w-100 mt-2" onClick={this.handleRandomPlay}> Random Play</button><br />
                    <button className="btn btn-warning w-100 mt-2" onClick={this.handleReset}> Reset </button>
                 </div>
            </div>
        )
    }
}

export default Counter;