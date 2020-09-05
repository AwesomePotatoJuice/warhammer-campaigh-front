import React from "react";
import TextField from "@material-ui/core/TextField";
import BaseUnitRowComponent from "./base-unit-row-component";
import Arrow from "../../img/arrow.svg"
import Button from "@material-ui/core/Button";


class BaseUnitComponent extends React.Component {
    constructor(props) {
        super(props)
        this.openModal = this.openModal.bind(this);

        this.state = {unitList: this.props.list, display: "none", ptsSum: "", modelsSum: "", newUnit: {label:"", points:"", modelsCount:""}}
    }

    componentDidMount() {
        this.calculateStats();
    }

    calculateStats() {
        let ptsSum = 0;
        let modelsSum = 0;
        this.state.unitList.forEach(unit => {
            ptsSum += +unit.points;
            modelsSum += +unit.modelsCount;
        })
        this.setState({ptsSum: ptsSum, modelsSum: modelsSum})

        this.props.onUnitChange(this.state.unitList);
    }

    onPointsChange = (unitName, newPoints) => {
        let unitList = this.state.unitList;
        let findIndex = unitList.findIndex(unit => unit.label === unitName);
        let newUnit = unitList[findIndex];
        newUnit.points = newPoints;
        unitList[findIndex] = newUnit;
        this.setState({unitList: unitList})
        this.calculateStats();
    }
    onCountChange = (unitName, newModelsCount) => {
        let unitList = this.state.unitList;
        let findIndex = unitList.findIndex(unit => unit.label === unitName);
        let newUnit = unitList[findIndex];
        newUnit.modelsCount = newModelsCount;
        unitList[findIndex] = newUnit;
        this.setState({unitList: unitList})
        this.calculateStats();
    }
    onLabelChange = (unitName, newModelName) => {
        let unitList = this.state.unitList;
        let findIndex = unitList.findIndex(unit => unit.label === unitName);
        let newUnit = unitList[findIndex];
        newUnit.label = newModelName;
        unitList[findIndex] = newUnit;
        this.setState({unitList: unitList})
        this.calculateStats();
    }

    onDeleteUnit = (unitLabel) => {
        let unitList = this.state.unitList;
        let findIndex = unitList.findIndex(unit => unit.label === unitLabel);
        unitList.splice(findIndex, 1)
        this.setState({unitList: unitList})
        this.calculateStats();
    }

    render() {
        const style = {
            backgroundColor: "rgba(151,151,151,0.74)",
            width: "200px",
            height: "106px",
            border: "dashed aquamarine",
            marginRight: "4px",
            display: "flex",
            color: "white"
        };
        let calculatedHeight = (163 + +this.state.unitList.length * 126).toString().concat("px");
        const styleWindow = {
            backgroundColor: "rgb(151,151,151)",
            width: "194px",
            height: {calculatedHeight},
            border: "dashed aquamarine",
            marginRight: "4px",
            flexWrap: "wrap",
            color: "white",
            position: "relative",
            display: this.state.display
        };
        const rotate = {
            transform:"rotate(225.5deg)",
            width:'35px',
            height:'40px',
            marginLeft: "auto",
            marginRight: "auto"
        }
        const imgPosition = {
            marginTop: "-47px"
        }

        return (
            <div>
                <table onClick={this.openModal} style={style}>
                    <thead><tr><th rowSpan={2}>{this.props.label}</th></tr></thead>
                    <tbody>
                        <tr>
                            <td><TextField id="pts" disabled={true} value={this.state.ptsSum} label={"Pts"}/></td>
                            <td><TextField id="sum" disabled={true} value={this.state.modelsSum} label={"Models"}/></td>
                        </tr>
                    </tbody>
                </table>
                <div onClick={this.openModal} style={imgPosition}>
                    <img style={rotate} src={Arrow} alt={"arrow"} width="70%" height="70%"/>
                </div>
                <div style={styleWindow}>
                    {this.props.label} content
                    <table>
                        <tbody>
                        {this.state.unitList.map((unit, index)=> {
                             return   <BaseUnitRowComponent onDeleteUnit={this.onDeleteUnit} onLabelChange={this.onLabelChange} onPointsChange={this.onPointsChange} onCountChange={this.onCountChange} key={unit.label} unit={unit} index={index}/>
                            }
                        )}
                        </tbody>
                    </table>
                    <table>
                        <thead>
                            <tr>
                                <td>Edit first</td>
                                <td><Button onClick={this.addUnit}>Add</Button ></td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan={"2"}><TextField onChange={this.handleLabelChange} label={"unit"} value={this.state.newUnit.label}/></td>
                                <td/>
                            </tr>
                            <tr>
                                <td><TextField onChange={this.handlePointsChange} label={"pts"} value={this.state.newUnit.points}/></td>
                                <td><TextField onChange={this.handleCountChange} label={"count"} value={this.state.newUnit.modelsCount}/></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

    addUnit = (e) => {
        if(this.checkNewUnitIsFilled()){
        let unitList = this.state.unitList;
        unitList.push(this.state.newUnit)
        this.setState({newUnit: {label:"", points:"", modelsCount:""}})
        this.setState({unitList: unitList})
        this.calculateStats();
        }else
            alert("FILL ME COMPLETELY")

    }
    checkNewUnitIsFilled = (e) => {
        return this.state.newUnit.label && this.state.newUnit.modelsCount && this.state.newUnit.points
    }

    handleLabelChange = (e) => {
        let newUnit = this.state.newUnit;
        newUnit.label = e.target.value
        this.setState({newUnit: {...newUnit}})
    }
    handlePointsChange = (e) => {
        let newUnit = this.state.newUnit;
        newUnit.points = e.target.value
        this.setState({newUnit: {...newUnit}})
    }
    handleCountChange = (e) => {
        let newUnit = this.state.newUnit;
        newUnit.modelsCount = e.target.value
        this.setState({newUnit: {...newUnit}})
    }

    openModal() {
        if(this.state.display === "")
            this.setState({display: "none"})
        if(this.state.display === "none")
            this.setState({display: ""})
        }

}
export default BaseUnitComponent;

