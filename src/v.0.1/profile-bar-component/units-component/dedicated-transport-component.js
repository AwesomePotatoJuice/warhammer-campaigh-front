import React from "react";
import BaseUnitComponent from "./base-unit-component";

class DedicatedTransportComponent extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <BaseUnitComponent onUnitChange={this.props.onUnitChange} label={"Dedicated Transport"} list={this.props.list}/>
        );
    }
}
export default DedicatedTransportComponent;

