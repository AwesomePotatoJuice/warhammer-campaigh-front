import React from "react";
import BaseUnitComponent from "./base-unit-component";

class HeavySupportComponent extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <BaseUnitComponent onUnitChange={this.props.onUnitChange} label={"Heavy-Support"} list={this.props.list}/>

        );
    }
}
export default HeavySupportComponent;

