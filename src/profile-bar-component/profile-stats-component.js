import React from "react";
import TextField from "@material-ui/core/TextField";

class ProfileStatsComponent extends React.Component {
    constructor(props) {
        super(props)
        this.onChangeFCP = this.onChangeFCP.bind(this);
    }
    render() {
        let fcp = "";
        let limitValue = "";
        let maxLimit;
        let delimiter;
        let limit;
        const position = {
            backgroundColor: "rgba(151,151,151,0.74)",
            width: "150px",
            height: "100px",
            border: "dashed aquamarine",
            marginRight: "4px",
            display: "inline-block",
            color: "white"
        };
        if (this.props.stats) {
            limit = this.props.stats.limit;
            delimiter = "/";
            maxLimit = this.props.stats.maxLimit;
            limitValue = limit + delimiter + maxLimit;

            fcp = this.props.stats.fcp;
        }
        return (
            <div style={position}>
                <TextField id="limit" disabled={true} label={"Limit"} value={limitValue}/>
                <TextField id="FCP" onChange={this.onChangeFCP} value={fcp} label={"FCP"}/>
            </div>
        );
    }

    onChangeFCP(e) {
        this.props.onChangeFCP(e.target.value);
    }
}
export default ProfileStatsComponent;

