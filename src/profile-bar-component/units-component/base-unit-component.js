import React from "react";
import TextField from "@material-ui/core/TextField";
import Modal from "@material-ui/core/Modal";

class BaseUnitComponent extends React.Component {
    constructor(props) {
        super(props)
        this.onChangePts = this.onChangePts.bind(this);
        this.onChangeSum = this.onChangeSum.bind(this);
        this.openModal = this.openModal.bind(this);
        this.bindAll();
        this.state = {display: "none",
            value11 :  "",value12 :  "",value13 :  "",
            value21 :  "",value22 :  "",value23 :  "",
            value31 :  "",value32 :  "",value33 :  "",
            value41 :  "",value42 :  "",value43 :  "",
            value51 :  "",value52 :  "",value53 :  "",
        }
    }


    render() {
        let pts = "";
        let sum = "";
        const style = {
            backgroundColor: "rgba(151,151,151,0.74)",
            width: "200px",
            height: "106px",
            border: "dashed aquamarine",
            marginRight: "4px",
            display: "flex",
            color: "white"
        };
        const styleWindow = {
            backgroundColor: "rgb(151,151,151)",
            width: "194px",
            height: "568px",
            border: "dashed aquamarine",
            marginRight: "4px",
            flexWrap: "wrap",
            color: "white",
            position: "relative",
            display: this.state.display
        };
        const minWidth = {
            minWidth: "186px"
        }

        let list = this.props.list;
        if(list) {
            this.state = {
                value11: list[0] ? list[0].label : "", value12: list[0] ? list[0].points : "", value13: list[0] ? list[0].modelsCount : "",
                value21: list[1] ? list[1].label : "", value22: list[1] ? list[1].points : "", value23: list[1] ? list[1].modelsCount : "",
                value31: list[2] ? list[2].label : "", value32: list[2] ? list[2].points : "", value33: list[2] ? list[2].modelsCount : "",
                value41: list[3] ? list[3].label : "", value42: list[3] ? list[3].points : "", value43: list[3] ? list[3].modelsCount : "",
                value51: list[4] ? list[4].label : "", value52: list[4] ? list[4].points : "", value53: list[4] ? list[4].modelsCount : "",
                display : this.state.display
            }
        }

        return (
            <div>
                <table onClick={this.openModal} style={style}>
                    <thead><tr><th rowSpan={2}>{this.props.label}</th></tr></thead>
                    <tbody>
                        <tr><td><TextField id="sum" disabled={true} onChange={this.onChangeSum} value={sum} label={"Models"}/></td>
                            <td><TextField id="pts" disabled={true} onChange={this.onChangePts} value={pts} label={"Pts"}/></td>
                        </tr>
                    </tbody>
                </table>
                <div style={styleWindow}>
                    {this.props.label} content
                    <table>
                        <tbody>
                        <tr>
                            <td colSpan={"2"}><TextField style={minWidth} onChange={this.handleTextFieldChange11} label={"unit"} value={this.state.value11}/></td>
                            <td/>
                            </tr><tr>
                            <td><TextField onChange={this.handleTextFieldChange12} label={"pts"} value={this.state.value12}/></td>
                            <td><TextField onChange={this.handleTextFieldChange13} label={"count"} value={this.state.value13}/></td>
                        </tr>
                        </tbody>
                    </table>
                    <table>
                        <tbody>
                        <tr><td colSpan={"2"}><TextField onChange={this.handleTextFieldChange21} label={"unit"} value={this.state.value21}/></td>
                            <td/>
                            </tr><tr>
                            <td><TextField onChange={this.handleTextFieldChange22} label={"pts"} value={this.state.value22}/></td>
                            <td><TextField onChange={this.handleTextFieldChange23} label={"count"} value={this.state.value23}/></td>
                        </tr>
                        </tbody>
                    </table>
                    <table>
                        <tbody>
                        <tr><td colSpan={"2"}><TextField onChange={this.handleTextFieldChange31} label={"unit"} value={this.state.value31}/></td>
                            <td/>
                        </tr><tr>
                            <td><TextField onChange={this.handleTextFieldChange32} label={"pts"} value={this.state.value32}/></td>
                            <td><TextField onChange={this.handleTextFieldChange33} label={"count"} value={this.state.value33}/></td>
                        </tr>
                        </tbody>
                    </table>
                    <table>
                        <tbody>
                        <tr><td colSpan={"2"}><TextField onChange={this.handleTextFieldChange41} label={"unit"} value={this.state.value41}/></td>
                            <td/>
                        </tr><tr>
                            <td><TextField onChange={this.handleTextFieldChange42} label={"pts"} value={this.state.value42}/></td>
                            <td><TextField onChange={this.handleTextFieldChange43} label={"count"} value={this.state.value43}/></td>
                        </tr>
                        </tbody>
                    </table>
                    <table>
                        <tbody>
                        <tr><td colSpan={"2"}><TextField onChange={this.handleTextFieldChange51} label={"unit"} value={this.state.value51}/></td>
                            <td/>
                        </tr><tr>
                            <td><TextField onChange={this.handleTextFieldChange52} label={"pts"} value={this.state.value52}/></td>
                            <td><TextField onChange={this.handleTextFieldChange53} label={"count"} value={this.state.value53}/></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

    getSum(list) {
        let sum = 0;
        list.forEach(unit =>{
            sum += +unit.modelsCount;
        })
        return sum;
    }

    getPts(list) {
        let pts = 0;
        list.forEach(unit =>{
            pts += +unit.points;
        })
        return pts;
    }

    onChangePts(e) {
        this.props.onChangePts(e.target.value);
    }

    onChangeSum(e) {
        this.props.onChangeFCP(e.target.value);
    }

    openModal() {
        if(this.state.display === "")
            this.setState({display: "none"})
        if(this.state.display === "none")
            this.setState({display: ""})
        }

    handleTextFieldChange11(e){
        let listElement = this.props.list[0];
        // listElement.
        // this.props.onChangePts(this.props.list[0] = listElement)
        this.setState({value11: e.target.value});
    }

    handleTextFieldChange12(e){
        this.setState({value12: e.target.value});
    }

    handleTextFieldChange13(e){
        this.setState({value13: e.target.value});
    }

    handleTextFieldChange21(e){
        this.setState({value21: e.target.value});
    }

    handleTextFieldChange22(e){
        this.setState({value22: e.target.value});
    }
    handleTextFieldChange23(e){
        this.setState({value23: e.target.value});
    }

    handleTextFieldChange31(e){
        this.setState({value31: e.target.value});
    }

    handleTextFieldChange32(e){
        this.setState({value32: e.target.value});
    }

    handleTextFieldChange33(e){
        this.setState({value33: e.target.value});
    }

    handleTextFieldChange41(e){
        this.setState({value41: e.target.value});
    }
    handleTextFieldChange42(e){
        this.setState({value42: e.target.value});
    }

    handleTextFieldChange43(e){
        this.setState({value43: e.target.value});
    }

    handleTextFieldChange51(e){
        this.setState({value51: e.target.value});
    }

    handleTextFieldChange52(e){
        this.setState({value52: e.target.value});
    }

    handleTextFieldChange53(e){
        this.setState({value53: e.target.value});
    }



    bindAll() {
        this.handleTextFieldChange11 = this.handleTextFieldChange11.bind(this);
        this.handleTextFieldChange12 = this.handleTextFieldChange12.bind(this);
        this.handleTextFieldChange13 = this.handleTextFieldChange13.bind(this);
        this.handleTextFieldChange21 = this.handleTextFieldChange21.bind(this);
        this.handleTextFieldChange22 = this.handleTextFieldChange22.bind(this);
        this.handleTextFieldChange23 = this.handleTextFieldChange23.bind(this);
        this.handleTextFieldChange31 = this.handleTextFieldChange31.bind(this);
        this.handleTextFieldChange32 = this.handleTextFieldChange32.bind(this);
        this.handleTextFieldChange33 = this.handleTextFieldChange33.bind(this);
        this.handleTextFieldChange41 = this.handleTextFieldChange41.bind(this);
        this.handleTextFieldChange42 = this.handleTextFieldChange42.bind(this);
        this.handleTextFieldChange43 = this.handleTextFieldChange43.bind(this);
        this.handleTextFieldChange51 = this.handleTextFieldChange51.bind(this);
        this.handleTextFieldChange52 = this.handleTextFieldChange52.bind(this);
        this.handleTextFieldChange53 = this.handleTextFieldChange53.bind(this);
    }

}
export default BaseUnitComponent;

