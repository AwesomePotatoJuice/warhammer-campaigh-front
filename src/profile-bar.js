import React from "react";
import Stats from "./profile-bar-component/profile-stats-component.js"
import Units from "./profile-bar-component/units-component.js"

class profileBar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let playerData = this.props.currentPlayerData;
        let stats;
        let armyList;
        if(playerData) {
            stats = this.props.currentPlayerData.stats;
            armyList = this.props.currentPlayerData.armyList;
        }
        const barPosition = {
            position: "absolute",
            left: "0px",
            top: "0px",
            height: "100px",
            width: "100%",
            backgroundColor: "rgba(255,255,255,0)",
            display: "flex",
            flexDirection: "row",
            zIndex: "2"
        };
        return (
            <div style={barPosition}>
                <Stats onChangeFCP={this.props.onChangeFCP} stats={stats}/>
                <Units onChangeLimit={this.props.onChangeLimit} stats={stats} armyList={armyList}/>
            </div>
        );
    }
}
export default profileBar;

