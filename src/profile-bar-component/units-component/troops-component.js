import React from "react";
import BaseUnitComponent from "./base-unit-component";

class TroopsComponent extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <BaseUnitComponent onChangePts={this.props.onChangePts} label={"Troops"} list={this.props.list}/>
        );
    }
}
export default TroopsComponent;

