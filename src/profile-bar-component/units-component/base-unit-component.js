import React from "react";
import TextField from "@material-ui/core/TextField";

class BaseUnitComponent extends React.Component {
    constructor(props) {
        super(props)
        this.onChangePts = this.onChangePts.bind(this);
        this.onChangeSum = this.onChangeSum.bind(this);
    }
    render() {
        const style = {
            backgroundColor: "rgba(151,151,151,0.74)",
            width: "200px",
            height: "106px",
            border: "dashed aquamarine",
            marginRight: "4px",
            display: "flex",
            flexWrap: "wrap",
            color: "white"
        };

        let list = this.props.list;
        let sum = this.getSum(list);
        let sumStr = "Models: " + sum;
        let pts = this.getPts(list);
        let ptsStr = "Pts: " + pts;

        return (
            <table style={style}>
                <thead><tr><th rowSpan={2}>{this.props.label}</th></tr></thead>
                <tbody>
                    <tr><td><TextField id="sum" onChange={this.onChangeSum} label= {sumStr}/></td>
                        <td><TextField id="pts" onChange={this.onChangePts} label={ptsStr}/></td>
                    </tr>
                </tbody>
            </table>
        );
    }

    getSum(list) {
        let sum = 0;
        list.forEach(unit =>{
            sum += unit.modelsCount;
        })
        return sum;
    }

    getPts(list) {
        let pts = 0;
        list.forEach(unit =>{
            pts += unit.points;
        })
        return pts;
    }

    onChangePts(e) {
        this.props.onChangePts(e.target.value);
    }

    onChangeSum(e) {
        this.props.onChangeFCP(e.target.value);
    }
}
export default BaseUnitComponent;

