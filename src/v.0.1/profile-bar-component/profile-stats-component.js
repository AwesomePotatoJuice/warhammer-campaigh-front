import React from "react";
import TextField from "@material-ui/core/TextField";

class ProfileStatsComponent extends React.Component {
    constructor(props) {
        super(props)
        this.onChangeFCP = this.onChangeFCP.bind(this);
    }
    render() {
        const position = {
            backgroundColor: "rgba(151,151,151,0.74)",
            width: "150px",
            height: "100px",
            border: "dashed aquamarine",
            marginRight: "4px",
            display: "inline-block",
            color: "white"
        };
        return (
            <div style={position}>
                <TextField id="limit" disabled={true} label={"Limit"} value={this.props.stats.limit}/>
                <TextField id="FCP" onChange={this.onChangeFCP} value={this.props.stats.fcp} label={"FCP"}/>
            </div>
        );
    }

    onChangeFCP(e) {
        this.props.onChangeFCP(e.target.value);
    }
}
export default ProfileStatsComponent;

