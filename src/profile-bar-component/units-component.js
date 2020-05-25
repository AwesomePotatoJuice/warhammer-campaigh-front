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
    }
    render() {
        const style = {
        };
        return (
            <div style={style}>
                <HQ />
                <Troops />
                <Elite />
                <HeavySupport />
                <FastAttack />
                <DedicatedTransport />
            </div>
        );
    }
}
export default UnitsComponent;

