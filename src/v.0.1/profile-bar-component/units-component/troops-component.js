import React from "react";
import BaseUnitComponent from "./base-unit-component";

class TroopsComponent extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <BaseUnitComponent onUnitChange={this.props.onUnitChange} label={"Troops"} list={this.props.list}/>
        );
    }
}
export default TroopsComponent;

