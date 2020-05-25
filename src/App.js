import React from 'react';
// import ReactSidebarWhC from "./react-sidebar-wh-c";
import ProfileBar from "./profile-bar.js";
import NextPlayer from "./carousel/stump/next-player-component.js";
// import Carousel from "./carousel/carousel.js";

import './App.css';


const players = {
    an: "Андрей",
    al: "Алексей",
    nik: "Никита"
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {currentPlayer: players.an, turnsCounter: 1, currentPlayerData: this.getPlayerData(players.an)}
        this.handleChangeLimit = this.handleChangeLimit.bind(this);
        this.handleChangeFCP = this.handleChangeFCP.bind(this);
        this.handleNextPlayer = this.handleNextPlayer.bind(this);
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
            backgroundColor: "#50006a"
        };
        return (
            <div style={style} className="App">
                <ProfileBar onChangeLimit={this.handleChangeLimit} onChangeFCP={this.handleChangeFCP} currentPlayerData={this.state.currentPlayerData}/>
                {/*<ReactSidebarWhC/>*/}
                <NextPlayer onChangeNextPlayer={this.handleNextPlayer} currentPlayer={this.state.currentPlayer}/>
                {/*<Carousel/>*/}
            </div>
        );
    }

    getPlayerData(player) {
        switch (player) {
            case players.an:
                return sampleChaosSM;
            case players.al:
                return sampleBlood;
            case players.nik:
                return sampleAdMech;
            default:
                return undefined
        }
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
                console.log("Ты тупой")
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
}

let sampleChaosSM = {stats: {limit: 300,
    maxLimit: 600, FCP: 4},
    armyList:{HQ: [{label: "Sample label HQ CHAOS", points: 110, modelsCount: 1},{label: "Sample label HQ 2", points: 220, modelsCount: 2}],
        troops:[{label: "Sample label troops", points: 50, modelsCount: 10}, {label: "Sample label troops 2", points: 60, modelsCount: 5}]}}
let sampleBlood = {stats: {limit: 333,
        maxLimit: 600, FCP: 4},
    armyList:{HQ: [{label: "Sample label HQ BLOOD", points: 110, modelsCount: 1},{label: "Sample label HQ 2", points: 220, modelsCount: 2}],
        troops:[{label: "Sample label troops", points: 50, modelsCount: 10}, {label: "Sample label troops 2", points: 60, modelsCount: 5}]}}
let sampleAdMech = {stats: {limit: 555,
        maxLimit: 600, FCP: 4},
    armyList:{HQ: [{label: "Sample label HQ ADMECH", points: 110, modelsCount: 1},{label: "Sample label HQ 2", points: 220, modelsCount: 2}],
        troops:[{label: "Sample label troops", points: 50, modelsCount: 10}, {label: "Sample label troops 2", points: 60, modelsCount: 5}]}}

export default App;
