import React from "react";
import BasePlanetComponent from "./system-objects/base-planet-component";
import BaseShipComponent from "./ships/base-ship-component";
import StarComponent from "./system-objects/star-component";

import ChaosShip from "../img/ships/chaos mini.png"
import BloodShip from "../img/ships/blood mini.png"
import MechShip from "../img/ships/mech mini.png"

import ChaosScoutShip from "../img/ships/chaos scout mini.png"
import BloodScoutShip from "../img/ships/blood scout mini.png"
import MechScoutShip from "../img/ships/mech scout mini.png"


import Anerog from "../img/planets/Anerog mini.png"
import Canatt from "../img/planets/Canatt.png"
import Galyan from "../img/planets/Gal`yan mini.png"
import Genar from "../img/planets/Genar mini.png"
import Mustan from "../img/planets/Mustan mini.png"
import XAE12 from "../img/planets/XAE-12 mini.png"
import Teslin from "../img/planets/Teslin mini.png"
import Prisus from "../img/planets/Prisus mini.png"
import Rannari from "../img/planets/Rannari mini.png"

import Danadat from "../img/planets/Danadat mini.png"

import CanvasComponent from "./system-objects/canvas-component";

class System extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        const style = {
            backgroundColor: "rgba(151,151,151,0.74)",
            width: "200px",
            height: "106px",
            border: "dashed aquamarine",
            marginRight: "4px",
            display: "flex",
            flexWrap: "wrap",
            color: "white"
        };

        return (
            <div style={this.props.style}>
                <CanvasComponent/>
                <BaseShipComponent player={this.props.players.an} src={ChaosShip} top={"30%"} left={"34%"}/>
                <BaseShipComponent player={this.props.players.al} src={BloodShip} top={"60%"} left={"75%"}/>
                <BaseShipComponent player={this.props.players.nik} src={MechShip} top={"15%"} left={"80%"}/>

                <BaseShipComponent player={this.props.players.an} scout={"true"} src={ChaosScoutShip} top={"26%"} left={"32%"}/>
                <BaseShipComponent player={this.props.players.al} scout={"true"} src={BloodScoutShip} top={"56%"} left={"73%"}/>
                <BaseShipComponent player={this.props.players.nik} scout={"true"} src={MechScoutShip} top={"13%"} left={"77%"}/>

                <BasePlanetComponent src={Anerog} top={"17%"}/>
                <BasePlanetComponent src={Canatt} top={"25%"}/>
                <BasePlanetComponent src={Galyan} top={"33%"}/>
                <BasePlanetComponent src={Genar} top={"41%"}/>
                <BasePlanetComponent src={Mustan} top={"61%"}/>
                <BasePlanetComponent src={XAE12 } top={"69%"}/>
                <BasePlanetComponent src={Teslin} top={"77%"}/>
                <BasePlanetComponent src={Prisus} top={"85%"}/>
                <BasePlanetComponent src={Rannari} top={"93%"}/>


                <StarComponent src={Danadat} top={"49.5%"}/>
            </div>
        );
    }
}
export default System;

