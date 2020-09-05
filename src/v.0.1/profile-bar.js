import React from "react";
import Stats from "./profile-bar-component/profile-stats-component.js"
import Units from "./profile-bar-component/units-component.js"

class profileBar extends React.Component {
    constructor(props) {
        super(props);
        this.state={stats: this.props.currentPlayerData.stats, armyList: this.props.currentPlayerData.armyList}
    }
    render() {
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
                <Stats onChangeFCP={this.props.onChangeFCP} stats={this.state.stats}/>
                <Units onChangeArmy={this.onChangeArmy} onChangeLimit={this.handleChangeLimit} armyList={this.state.armyList}/>
            </div>
        );
    }
    handleChangeLimit = (newPtsSum) => {
        let stats = this.state.stats;
        stats.limit = newPtsSum;
        this.setState({stats: stats})
    }
    onChangeArmy = (armyList) =>{
        this.props.onChangeArmyList(armyList);
    }
}
export default profileBar;

