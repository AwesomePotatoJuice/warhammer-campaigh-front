import React from "react";
import BaseUnitComponent from "./base-unit-component";

class HqComponent extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <BaseUnitComponent onUnitChange={this.props.onUnitChange} label={"HQ"} list={this.props.list}/>
        );
    }
}
export default HqComponent;

