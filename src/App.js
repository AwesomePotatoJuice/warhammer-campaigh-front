import React from 'react';
import ProfileBar from "./profile-bar.js";
import NextPlayer from "./carousel/stump/next-player-component.js";
import Axios from "axios";
import BackgroundImage from "./img/background-stars.jpg";
import System from "./system/System";

import './App.css';


// const serverUrl = "warhammer-matchup.com:8080/"
const serverUrl = "http://localhost:8080"

const players = {
    an: "Андрей",
    al: "Алексей",
    nik: "Никита",
    full: "full"
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {currentPlayer: players.an, turnsCounter: 1, currentPlayerData: this.getPlayerData(players.an)}
        this.bindAll();
    }

    handleNextPlayer(){
        this.setNextPlayer();
    }
    handleChangeLimit(newLimit){
        this.setLimit(this.state.currentPlayer, newLimit);
    }
    handleChangeFCP(newFCP){
        this.setFCP(this.state.currentPlayer, newFCP);
    }
    render() {
        const style = {
            backgroundColor: "#50006a",
            backgroundImage: `url(${BackgroundImage})`, backgroundRepeat: 'round',width:'100%',height:'966px',color:'white'
        };

        return (
            <div style={style} className="App">

                <ProfileBar onChangeTotalPts={this.handleChangeLimit} onChangeLimit={this.handleChangeLimit} onChangeFCP={this.handleChangeFCP} currentPlayerData={this.state.currentPlayerData}/>

                <NextPlayer turnCounter={this.state.turnsCounter} onChangeNextPlayer={this.handleNextPlayer} currentPlayer={this.state.currentPlayer}/>

                <System/>
            </div>
        );
    }

    getPlayerData(player) {
        Axios.get(serverUrl + "/getData?player=" + player, {headers: {"x-dsi-restful":1}})
            .then((response)=>{
                this.setState({currentPlayerData : response.data});
            })
    }

    setLimit(currentPlayer, newLimit) {
         let playerData = this.getPlayerData(currentPlayer);
         playerData.stats.limit = newLimit;
         this.setPlayerData(currentPlayer, playerData);
    }

    setFCP(currentPlayer, newFCP) {
        let playerData = this.getPlayerData(currentPlayer);
        playerData.stats.FCP = newFCP;
        this.setPlayerData(currentPlayer, playerData);
    }

    setPlayerData(currentPlayer, playerData) {
        //TODO STUMP
        switch (currentPlayer) {
            case players.an:
                sampleChaosSM = playerData;
                break;
            case players.al:
                sampleBlood = playerData;
                break;
            case players.nik:
                sampleAdMech = playerData;
                break;
            default:
        }
        this.setState({currentPlayerData: playerData})
    }

    setNextPlayer() {
        //TODO STUMP
        let currentPlayer = this.state.currentPlayer;
        let nextPlayer = '';
        switch (currentPlayer) {
            case players.an:
                nextPlayer = players.al
                break
            case players.al:
                nextPlayer = players.nik
                break
            case players.nik:
                this.makeNextTurn();
                nextPlayer = players.an
                break
            default:
                this.setNextPlayer();
                return null;
        }
        this.setState({currentPlayer: nextPlayer})
        this.setState({currentPlayerData: this.getPlayerData(nextPlayer)})
    }

    makeNextTurn() {
        //TODO STUMP
    }

    bindAll() {
        this.handleChangeLimit = this.handleChangeLimit.bind(this);
        this.handleChangeFCP = this.handleChangeFCP.bind(this);
        this.handleNextPlayer = this.handleNextPlayer.bind(this);
    }

    initValues() {
        this.getPlayerData(players.full)
    }
}

let sampleChaosSM = {stats: {limit: 300,
    maxLimit: 600, FCP: 4},
    armyList:{HQ: [{label: "Sample label HQ CHAOS", points: 110, modelsCount: 1},{label: "Sample label HQ 2", points: 20, modelsCount: 2}],
        troops:[{label: "Sample label troops", points: 50, modelsCount: 10}, {label: "Sample label troops 2", points: 60, modelsCount: 5}],
        elites:[{label: "213", points: "", modelsCount: ""}],
        heavySupport:[{label: "", points: "", modelsCount: ""}],
        fastAttack:[{label: "", points: "", modelsCount: ""}],
        dedicatedTransport:[{label: "", points: "", modelsCount: ""}]}}
let sampleBlood = {stats: {limit: 333,
        maxLimit: 600, FCP: 4},
    armyList:{HQ: [{label: "Sample label HQ BLOOD", points: 110, modelsCount: 1},{label: "Sample label HQ 2", points: 520, modelsCount: 2}],
        troops:[{label: "Sample label troops", points: 50, modelsCount: 10}, {label: "Sample label troops 2", points: 60, modelsCount: 5}],
    elites:[{label: "", points: "", modelsCount: ""}],
    heavySupport:[{label: "", points: "", modelsCount: ""}],
    fastAttack:[{label: "", points: "", modelsCount: ""}],
    dedicatedTransport:[{label: "", points: "", modelsCount: ""}]}}
let sampleAdMech = {stats: {limit: 555,
        maxLimit: 600, FCP: 4},
    armyList:{HQ: [{label: "Sample label HQ ADMECH", points: 110, modelsCount: 1},{label: "Sample label HQ 2", points: 1020, modelsCount: 2}],
        troops:[{label: "Sample label troops", points: 50, modelsCount: 10}, {label: "Sample label troops 2", points: 60, modelsCount: 5}],
    elites:[{label: "", points: "", modelsCount: ""}],
    heavySupport:[{label: "", points: "", modelsCount: ""}],
    fastAttack:[{label: "", points: "", modelsCount: ""}],
    dedicatedTransport:[{label: "", points: "", modelsCount: ""}]}}

export default App;
