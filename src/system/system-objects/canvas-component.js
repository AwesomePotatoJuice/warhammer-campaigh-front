import React from "react";

class CanvasComponent extends React.Component {
    constructor(props) {
        super(props)
        this.canvas = React.createRef()

    }

    componentDidMount() {
        let canvas = this.canvas.current;
        let position = canvas.getBoundingClientRect();
        if (canvas.getContext) {
            let ctx = canvas.getContext('2d');
            // this.drawEllipseWithEllipse(ctx, 130, 100, 100, 60, 'red');
            let rx = 1;
            let ry = 1;
            this.drawEllipseWithEllipse(ctx, position.width/2, position.height/2, rx, ry, 'red');
        }
    }

    drawEllipseWithEllipse(ctx, cx, cy, rx, ry, style) {
        if (ctx.ellipse) {
            ctx.imageSmoothingEnabled = true;
            ctx.save();
            ctx.beginPath();
            ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
            ctx.strokeStyle = style;
            ctx.stroke();
            ctx.restore();
        }
    }

    render() {
        const position = {
            top: this.props.top,
            left: this.props.left
        }

        const canvasStyle={
            width: "100%",
            height: "930px"
        }
        return (
            <canvas ref={this.canvas} width={"1903px"} height={"930px"}/>
        );

    }
}
export default CanvasComponent;