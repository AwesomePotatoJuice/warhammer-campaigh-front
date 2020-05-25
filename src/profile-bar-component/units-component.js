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

        let list = props.armyList;
        this.state = {hq: this.getPts(list.HQ), troops: this.getPts(list.troops), elites: this.getPts(list.elites), heavy: this.getPts(list.heavySupport), fast: this.getPts(list.fastAttack), transport: this.getPts(list.dedicatedTransport)}

        this.onChangeTotalPts = this.onChangeTotalPts.bind(this);
        this.onChangePtsHQ = this.onChangePtsHQ.bind(this);
        this.onChangePtsTroops = this.onChangePtsTroops.bind(this);
        this.onChangePtsElites = this.onChangePtsElites.bind(this);
        this.onChangePtsHeavy = this.onChangePtsHeavy.bind(this);
        this.onChangePtsFast = this.onChangePtsFast.bind(this);
        this.onChangePtsTransport = this.onChangePtsTransport.bind(this);
    }


    render() {
        const style = {
            display: "flex",
            flexDirection: "row"
        };
        let list = this.props.armyList;
        return (
            <div style={style}>
                <HQ onChangePts={this.onChangePtsHQ} list={list.HQ}/>
                <Troops onChangePts={this.onChangePtsTroops} list={list.troops}/>
                <Elite onChangePts={this.onChangePtsElites} list={list.elites}/>
                <HeavySupport onChangePts={this.onChangePtsHeavy} list={list.heavySupport}/>
                <FastAttack onChangePts={this.onChangePtsFast} list={list.fastAttack}/>
                <DedicatedTransport onChangePts={this.onChangePtsTransport} list={list.dedicatedTransport}/>
            </div>
        );
    }
    onChangePtsHQ(pts){
        this.setState({hq: pts});
        let totalSum = this.getTotalSum("hq", pts);
        this.onChangeTotalPts(totalSum);
    }
    onChangePtsTroops(pts){
        this.setState({troops: pts});
        let totalSum = this.getTotalSum("troops", pts);
        this.onChangeTotalPts(totalSum);
    }
    onChangePtsElites(pts){
        this.setState({elites: pts});
        let totalSum = this.getTotalSum("elites", pts);
        this.onChangeTotalPts(totalSum);
    }
    onChangePtsHeavy(pts){
        this.setState({heavy: pts});
        let totalSum = this.getTotalSum("heavy", pts);
        this.onChangeTotalPts(totalSum);
    }
    onChangePtsFast(pts){
        this.setState({fast: pts});
        let totalSum = this.getTotalSum("fast", pts);
        this.onChangeTotalPts(totalSum);
    }
    onChangePtsTransport(pts){
        this.setState({transport: pts});
        let totalSum = this.getTotalSum("transport", pts);
        this.onChangeTotalPts(totalSum);
    }

    onChangeTotalPts(e){
        this.props.onChangeTotalPts(e);
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
        list.forEach(unit =>{
            pts += unit.points;
        })
        return pts;
    }
}
export default UnitsComponent;

