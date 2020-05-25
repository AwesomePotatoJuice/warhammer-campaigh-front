import React from "react";
import BaseUnitComponent from "./base-unit-component";

class EliteComponent extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <BaseUnitComponent onChangePts={this.props.onChangePts} label={"Elite"} list={this.props.list}/>

        );
    }
}
export default EliteComponent;

