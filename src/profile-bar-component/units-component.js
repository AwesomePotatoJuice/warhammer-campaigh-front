import React from "react";
import HQ from "./units-component/hq-component.js"
import Troops from "./units-component/troops-component.js"
import Elite from "./units-component/elite-component.js"
import HeavySupport from "./units-component/heavy-support-component.js"
import FastAttack from "./units-component/fast-attack-component.js"
import DedicatedTransport from "./units-component/dedicated-transport-component.js"


class UnitsComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = ({list: this.props.armyList, ptsSum: 0})
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        let ptsSum = 0;
        this.state.list.hq.forEach(units =>{
            ptsSum += +units.points;
        })
        this.state.list.troops.forEach(units =>{
            ptsSum += +units.points;
        })
        this.state.list.elites.forEach(units =>{
            ptsSum += +units.points;
        })
        this.state.list.heavySupport.forEach(units =>{
            ptsSum += +units.points;
        })
        this.state.list.fastAttack.forEach(units =>{
            ptsSum += +units.points;
        })
        this.state.list.dedicatedTransport.forEach(units =>{
            ptsSum += +units.points;
        })
        if(prevState.ptsSum !== ptsSum){
            this.props.onChangeLimit(ptsSum)
            this.props.onChangeArmy(this.state.list)
            this.setState({ptsSum: ptsSum})
        }
    }
    render() {
        const style = {
            display: "flex",
            flexDirection: "row"
        };
        return (
            <div style={style}>
                <HQ onUnitChange={this.onChangeHQ} list={this.state.list.hq}/>
                <Troops onUnitChange={this.onChangeTroops} list={this.state.list.troops}/>
                <Elite onUnitChange={this.onChangeElites} list={this.state.list.elites}/>
                <HeavySupport onUnitChange={this.onChangeHeavy} list={this.state.list.heavySupport}/>
                <FastAttack onUnitChange={this.onChangeFast} list={this.state.list.fastAttack}/>
                <DedicatedTransport onUnitChange={this.onChangeTransport} list={this.state.list.dedicatedTransport}/>
            </div>
        );
    }
    onChangeHQ = (unit) => {
        let list = this.state.list;
        list.hq = unit
        this.setState({list: list});
    }
    onChangeTroops = (unit) => {
        let list = this.state.list;
        list.troops = unit
        this.setState({list: list});
    }
    onChangeElites = (unit) => {
        let list = this.state.list;
        list.elites = unit
        this.setState({list: list});
    }
    onChangeHeavy = (unit) => {
        let list = this.state.list;
        list.heavySupport = unit
        this.setState({list: list});
    }
    onChangeFast = (unit) => {
        let list = this.state.list;
        list.fastAttack = unit
        this.setState({list: list});
    }
    onChangeTransport = (unit) => {
        let list = this.state.list;
        list.dedicatedTransport = unit
        this.setState({list: list});
    }

}
export default UnitsComponent;

