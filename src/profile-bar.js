import React from "react";
import Stats from "./profile-bar-component/profile-stats-component.js"
import Units from "./profile-bar-component/units-component.js"

class profileBar extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
    }
    render() {
        const barPosition = {
            position: "absolute",
            left: "0px",
            top: "0px",
            height: "100px",
            width: "100%",
            backgroundColor: "#FFFFFF",
            display: "flex",
            flexDirection: "row"
        };
        return (
            <div style={barPosition}>
                <Stats onChangeLimit={this.props.onChangeLimit} onChangeFCP={this.props.onChangeFCP} stats={this.props.currentPlayerData.stats}/>
                <Units armyList={this.props.currentPlayerData.armyList}/>
            </div>
        );
    }
}
export default profileBar;

