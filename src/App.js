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
    an: "Andrey",
    al: "Alexei",
    nik: "Nikita",
    full: "full"
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {currentPlayer: players.an, turnsCounter: 1, currentPlayerData: ""}
        this.bindAll();
    }

    componentDidMount() {
        Axios.get(serverUrl + "/getData?player=" + players.an, {headers: {"x-dsi-restful":1}})
            .then((response)=>{
                this.setState({currentPlayerData : response.data});
            })
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
    handleChangeArmyList(newArmyList){
        this.setArmyList(newArmyList)
    }
    render() {
        const style = {
            backgroundColor: "#50006a",
            backgroundImage: `url(${BackgroundImage})`, backgroundRepeat: 'round',width:'100%',height:'966px',color:'white'
        };
        const systemStyle = {
            zIndex: "1",
            position: "absolute",
            height: "930px",
            width: "100%"
        };
        const profileStyle = {
            position: "relative",
            zIndex: "2"
        };

        return (
            <div style={style} className="App">
                {this.state.currentPlayerData &&
                <ProfileBar style={profileStyle} onChangeArmyList={this.handleChangeArmyList}
                            onChangeTotalPts={this.handleChangeLimit} onChangeLimit={this.handleChangeLimit}
                            onChangeFCP={this.handleChangeFCP} currentPlayerData={this.state.currentPlayerData}/>
                }
                {this.state.turnsCounter && this.state.currentPlayer &&
                    <NextPlayer turnCounter={this.state.turnsCounter} onChangeNextPlayer={this.handleNextPlayer}
                                currentPlayer={this.state.currentPlayer}/>
                }
                <System style={systemStyle} players={players}/>
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
        let playerData = this.state.currentPlayerData ? this.state.currentPlayerData : this.getPlayerData(currentPlayer);
        playerData.stats.limit = newLimit;
        this.setPlayerData(currentPlayer, playerData);
    }

    setFCP(currentPlayer, newFCP) {
        let playerData = this.state.currentPlayerData ? this.state.currentPlayerData : this.getPlayerData(currentPlayer);
        playerData.stats.FCP = newFCP;
        this.setPlayerData(currentPlayer, playerData);
    }

    setArmyList(newArmyList){
        let currentPlayerData = this.state.currentPlayerData;
        // if(currentPlayerData.armyList !== newArmyList){
            currentPlayerData.armyList = newArmyList
            this.setPlayerData(this.state.currentPlayer, currentPlayerData)
        // }
    }

    setPlayerData(currentPlayer, playerData) {
        //TODO STUMP
        Axios.post(serverUrl + "/setData?player=" + currentPlayer, playerData)
            .then((response)=>{
            })
        switch (currentPlayer) {
            case players.an:
                // sampleChaosSM = playerData;
                break;
            case players.al:
                // sampleBlood = playerData;
                break;
            case players.nik:
                // sampleAdMech = playerData;
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
        this.setState({turnsCounter: +this.state.turnsCounter + 1})
    }

    bindAll() {
        this.handleChangeLimit = this.handleChangeLimit.bind(this);
        this.handleChangeFCP = this.handleChangeFCP.bind(this);
        this.handleNextPlayer = this.handleNextPlayer.bind(this);
        this.handleChangeArmyList = this.handleChangeArmyList.bind(this);
    }

    initValues() {
        this.getPlayerData(players.full)
    }
}

export default App;
