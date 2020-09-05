import React from "react";
import Sidebar from "react-sidebar";

class reactSidebarWhC extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarOpen: true
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open});
    }


    render() {
        const divStyle = {
            position: "absolute",
            top: "50%",
            left: "20px",

        };
        return (
            <Sidebar
                sidebar={<b>Sidebar content</b>}
                open={this.state.sidebarOpen}
                onSetOpen={this.onSetSidebarOpen}
                styles={{ sidebar: { background: "white", height: "70%", marginTop: "auto", marginBottom: "auto"} }}
            >
                <button style={divStyle} onClick={() => this.onSetSidebarOpen(true)}>
                    Open sidebar
                </button>
            </Sidebar>
        );
    }
}

export default reactSidebarWhC;