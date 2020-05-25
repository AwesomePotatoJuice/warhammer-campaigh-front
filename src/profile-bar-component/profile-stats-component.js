import React from "react";
import TextField from "@material-ui/core/TextField";

class ProfileStatsComponent extends React.Component {
    constructor(props) {
        super(props)
        this.onChangeLimit = this.onChangeLimit.bind(this);
        this.onChangeFCP = this.onChangeFCP.bind(this);
    }
    render() {
        const position = {
            backgroundColor: "rgba(8,0,57,0.46)",
            width: "150px",
            height: "100px",
            border: "dashed aquamarine",
            marginRight: "4px",
            display: "inline-block",
            color: "white"
        };
        let statsLabel = "Limit " + this.props.stats.limit + "/" +this.props.stats.maxLimit;
        let FCPLabel = "FCP  " + this.props.stats.FCP
        return (
            <div style={position}>
                <TextField id="limit" onChange={this.onChangeLimit}  label={statsLabel} />
                <TextField id="FCP" onChange={this.onChangeFCP} label={FCPLabel}/>
            </div>
        );
    }

    onChangeLimit(e) {
        this.props.onChangeLimit(e.target.value);
    }

    onChangeFCP(e) {
        this.props.onChangeFCP(e.target.value);
    }
}
export default ProfileStatsComponent;

