import React from "react";
import BaseUnitComponent from "./base-unit-component";

class FastAttackComponent extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <BaseUnitComponent onUnitChange={this.props.onUnitChange} label={"Fast-Attack"} list={this.props.list}/>
        );
    }
}
export default FastAttackComponent;

