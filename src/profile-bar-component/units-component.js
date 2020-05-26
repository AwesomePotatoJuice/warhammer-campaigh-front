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
        this.bindAll();
    }

    render() {
        let dedicatedTransport;
        let fastAttack;
        let heavySupport;
        let elites;
        let troops;
        let hq;
        let list = this.props.armyList;
        const style = {
            display: "flex",
            flexDirection: "row"
        };
        if (list) {
            hq = list.hq;
            troops = list.troops;
            elites = list.elites;
            heavySupport = list.heavySupport;
            fastAttack = list.fastAttack;
            dedicatedTransport = list.dedicatedTransport;
        }
        return (
            <div style={style}>
                <HQ onChangePts={this.onChangePtsHQ} list={hq}/>
                <Troops onChangePts={this.onChangePtsTroops} list={troops}/>
                <Elite onChangePts={this.onChangePtsElites} list={elites}/>
                <HeavySupport onChangePts={this.onChangePtsHeavy} list={heavySupport}/>
                <FastAttack onChangePts={this.onChangePtsFast} list={fastAttack}/>
                <DedicatedTransport onChangePts={this.onChangePtsTransport} list={dedicatedTransport}/>
            </div>
        );
    }
    onChangeModelsHQ(pts){}
    onChangePtsHQ(pts){
        this.setState({hq: pts});
        let totalSum = this.getTotalSum("hq", pts);
        this.onChangeLimit(totalSum);
    }
    onChangePtsTroops(pts){
        this.setState({troops: pts});
        let totalSum = this.getTotalSum("troops", pts);
        this.onChangeLimit(totalSum);
    }
    onChangePtsElites(pts){
        this.setState({elites: pts});
        let totalSum = this.getTotalSum("elites", pts);
        this.onChangeLimit(totalSum);
    }
    onChangePtsHeavy(pts){
        this.setState({heavy: pts});
        let totalSum = this.getTotalSum("heavy", pts);
        this.onChangeLimit(totalSum);
    }
    onChangePtsFast(pts){
        this.setState({fast: pts});
        let totalSum = this.getTotalSum("fast", pts);
        this.onChangeLimit(totalSum);
    }
    onChangePtsTransport(pts){
        this.setState({transport: pts});
        let totalSum = this.getTotalSum("transport", pts);
        this.onChangeLimit(totalSum);
    }

    onChangeLimit(e){
        this.props.onChangeLimit(e);
    }

    getTotalSum(changed, newPts) {
        switch (changed) {
            case "hq":
                return +newPts +
                    + +this.state.troops
                    + +this.state.elites
                    + +this.state.heavy
                    + +this.state.fast
                    + +this.state.transport;
            case "troops":
                return +this.state.hq +
                    + +newPts
                    + +this.state.elites
                    + +this.state.heavy
                    + +this.state.fast
                    + +this.state.transport;
            case "elites":
                return +this.state.hq +
                    + +this.state.troops
                    + +newPts
                    + +this.state.heavy
                    + +this.state.fast
                    + +this.state.transport;
            case "heavy":
                return +this.state.hq +
                    + +this.state.troops
                    + +this.state.elites
                    + +newPts
                    + +this.state.fast
                    + +this.state.transport;
            case "fast":
                return +this.state.hq +
                    + +this.state.troops
                    + +this.state.elites
                    + +this.state.heavy
                    + +newPts
                    + +this.state.transport;
            case "transport":
                return +this.state.hq +
                    + +this.state.troops
                    + +this.state.elites
                    + +this.state.heavy
                    + +this.state.fast
                    + +newPts;
            default: return 0;
        }
    }

    getPts(list) {
        let pts = 0;
        if(list && list.size)
        list.forEach(unit =>{
            pts += unit.points;
        })
        return pts;
    }



    bindAll() {
        this.onChangeLimit = this.onChangeLimit.bind(this);
        this.onChangePtsHQ = this.onChangePtsHQ.bind(this);
        this.onChangePtsTroops = this.onChangePtsTroops.bind(this);
        this.onChangePtsElites = this.onChangePtsElites.bind(this);
        this.onChangePtsHeavy = this.onChangePtsHeavy.bind(this);
        this.onChangePtsFast = this.onChangePtsFast.bind(this);
        this.onChangePtsTransport = this.onChangePtsTransport.bind(this);
    }
}
export default UnitsComponent;

