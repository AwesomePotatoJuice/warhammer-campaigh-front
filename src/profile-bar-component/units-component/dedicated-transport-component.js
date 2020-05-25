import React from "react";
import BaseUnitComponent from "./base-unit-component";

class DedicatedTransportComponent extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <BaseUnitComponent onChangePts={this.props.onChangePts} label={"Dedicated Transport"} list={this.props.list}/>
        );
    }
}
export default DedicatedTransportComponent;

