import React from "react";
import Stats from "./profile-bar-component/profile-stats-component.js"
import Units from "./profile-bar-component/units-component.js"

class profileBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {currentLimit: 0, maxLimit: 0};
    }
    render() {
        let initLimit = this.getInitLimit(this.props.currentPlayerData);
        let initMaxLimit = this.getInitMaxLimit(this.props.currentPlayerData);
        // this.setState({currentLimit: initLimit, maxLimit: initMaxLimit})
        const barPosition = {
            position: "absolute",
            left: "0px",
            top: "0px",
            height: "100px",
            width: "100%",
            backgroundColor: "rgba(255,255,255,0)",
            display: "flex",
            flexDirection: "row"
        };
        return (
            <div style={barPosition}>
                <Stats onChangeLimit={this.props.onChangeLimit} onChangeFCP={this.props.onChangeFCP} stats={this.props.currentPlayerData.stats}/>
                <Units onChangeTotalPts={this.props.onChangeLimit} armyList={this.props.currentPlayerData.armyList}/>
            </div>
        );
    }
    getInitLimit(playerData) {
        return playerData.stats
    }

    getInitMaxLimit(playerData) {
        return playerData.maxLimit
    }
}
export default profileBar;

