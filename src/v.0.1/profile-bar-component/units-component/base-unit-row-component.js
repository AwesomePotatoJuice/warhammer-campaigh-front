import React from "react";
import TextField from "@material-ui/core/TextField";

class BaseUnitRowComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {label: this.props.unit.label, points: this.props.unit.points, count: this.props.unit.modelsCount}
    }

    render() {
        const separator = {
            backgroundColor: "white",
            width: "105%",
            height: "3px",
            marginLeft: "-5px",
            marginTop: "3px"
        }
        return (
            <tbody onContextMenu={(e) => this.deleteUnit(e, this.state.label)}>
                <tr>
                    <td colSpan={"2"}><TextField onChange={this.handleLabelChange} label={"unit"} value={this.state.label}/></td>
                    <td/>
                </tr>
                <tr>
                    <td><TextField onChange={this.handlePointsChange} label={"pts"} value={this.state.points}/></td>
                    <td><TextField onChange={this.handleCountChange} label={"count"} value={this.state.count}/></td>
                </tr>
                <tr><td colSpan={"2"}><div style={separator} /></td></tr>
            </tbody>

        );
    }

    handleLabelChange = (e) => {
        this.setState({label: e.target.value})
        this.props.onLabelChange(this.state.label, e.target.value)
        e.target.focus()
    }
    handlePointsChange = (e) => {
        this.setState({points: e.target.value})
        this.props.onPointsChange(this.state.label, e.target.value)
    }
    handleCountChange = (e) => {
        this.setState({count: e.target.value})
        this.props.onCountChange(this.state.label, e.target.value)
    }
    deleteUnit = (e, unitLabel) => {
        e.preventDefault();
        this.props.onDeleteUnit(unitLabel)
    }
}
export default BaseUnitRowComponent;

