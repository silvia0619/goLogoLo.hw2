import React, { Component } from 'react'
/*import { Modal } from 'react-materialize'*/;

class TextEditSidebar extends Component {
    constructor(props) {
        super();

        // WE'LL MANAGE THE UI CONTROL
        // VALUES HERE
        this.state = {
            text : props.logo.text,
            textColor : props.logo.textColor,
            fontSize : props.logo.fontSize,
            backgroundColor : props.logo.backgroundColor,
            borderColor : props.logo.borderColor,
            borderRadius : props.logo.borderRadius,
            borderThickness : props.logo.borderThickness,
            padding : props.logo.padding,
            margin : props.logo.margin
        }
    }

    handleTextChange = () => {
        console.log("handleTextChange to ", "dont know yet");
        this.props.changeLogoCallback(this.props.logo, this.props.logo.key, "New Text", this.state.textColor, this.state.fontSize, this.state.backgroundColor, this.state.borderColor, this.state.borderRadius, this.state.borderThickness, this.state.padding, this.state.margin);
    }


    handleUndo = () => {
        this.props.undoCallback();
    }
    handleRedo = () => {
        this.props.redoCallback();
    }

    handleTextColorChange = (event) => {
        console.log("handleTextColorChange to " + event.target.value);
        this.setState({ textColor: event.target.value }, this.completeUserEditing);
    }

    handleFontSizeChange = (event) => {
        console.log("handleTextColorChangeComplete to " + event.target.value);
        this.setState({ fontSize: event.target.value }, this.completeUserEditing);
    }

    handleBackgroundColorChange = (event) => {
        console.log("handlebackgroundColorChange to " + event.target.value);
        this.setState({ backgroundColor: event.target.value }, this.completeUserEditing);
    }

    handleBorderColorChange = (event) => {
        console.log("handleBorderColorChange to " + event.target.value);
        this.setState({ borderColor: event.target.value }, this.completeUserEditing);
    }

    handleBorderRadiusChange = (event) => {
        console.log("handleBorderRadiusChangeComplete to " + event.target.value);
        this.setState({ borderRadius: event.target.value }, this.completeUserEditing);
    }

    handleBorderThicknessChange = (event) => {
        console.log("handleBorderWidthChangeComplete to " + event.target.value);
        this.setState({ borderThickness: event.target.value }, this.completeUserEditing);
    }

    handlePaddingChange = (event) => {
        console.log("handlePaddingChangeComplete to " + event.target.value);
        this.setState({ padding: event.target.value }, this.completeUserEditing);
    }

    handleMarginChange = (event) => {
        console.log("handleMarginChangeComplete to " + event.target.value);
        this.setState({ margin: event.target.value }, this.completeUserEditing);
    }

    completeUserEditing = () => {
        console.log("completeUserEditing");
        console.log("this.state.textColor: " + this.state.textColor);
        this.props.changeLogoCallback(this.props.logo, this.props.logo.key, this.props.logo.text, this.state.textColor, this.state.fontSize, this.state.backgroundColor, this.state.borderColor, this.state.borderRadius, this.state.borderThickness, this.state.padding, this.state.margin);
    }

    render() {
        let undoDisabled = !this.props.canUndo();
        let redoDisabled = !this.props.canRedo();
        let undoClass = "waves-effect waves-light btn-small";
        let redoClass = "waves-effect waves-light btn-small";
        if (undoDisabled)
            undoClass += " disabled";
        if (redoDisabled)
            redoClass += " disabled";
        return (
            <div className="card-panel col s4">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <button className="waves-effect waves-light btn-small" onClick={this.handleTextChange}>&#9998;</button>
                        <button className={undoClass} onClick={this.handleUndo}>Undo</button>
                        <button className={redoClass} onClick={this.handleRedo}>Redo</button>
                    </div>
                </div>
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                    {/*<span className="card-title">Text</span>*/}
                        <div className="row">
                            <div className="col s4">Text Color:</div>
                            <div className="col s8">
                                <input type="color"
                                        onChange={this.handleTextColorChange}
                                        value={this.props.logo.textColor}
                                        id="textColorSlider"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Font Size:</div>
                            <div className="col s8">
                                <p>{this.state.fontSize}</p>
                                <input type="range" min="4" max="144" 
                                    onChange={this.handleFontSizeChange}
                                    value={this.props.logo.fontSize}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Background Color:</div>
                            <div className="col s8">
                                <input type="color"
                                        onChange={this.handleBackgroundColorChange}
                                        value={this.props.logo.backgroundColor}
                                        id="backgroundColorSlider"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Border Color:</div>
                            <div className="col s8">
                                <input type="color"
                                        onChange={this.handleBorderColorChange}
                                        value={this.props.logo.borderColor}
                                        id="borderColorSlider"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Border Radius:</div>
                            <div className="col s8">
                                <p>{this.state.borderRadius}</p>
                                <input type="range" max="144" 
                                    onChange={this.handleBorderRadiusChange}
                                    value={this.props.logo.borderRadius}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Border Thickness:</div>
                            <div className="col s8">
                               <p>{this.state.borderThickness}</p>
                               <input type="range" max="144" 
                                    onChange={this.handleBorderThicknessChange}
                                    value={this.props.logo.borderThickness}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Padding:</div>
                            <div className="col s8">
                               <p>{this.state.padding}</p>
                               <input type="range" max="144" 
                                    onChange={this.handlePaddingChange}
                                    value={this.props.logo.padding}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Margin:</div>
                            <div className="col s8">
                               <p>{this.state.margin}</p>
                               <input type="range" max="144" 
                                    onChange={this.handleMarginChange}
                                    value={this.props.logo.margin}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TextEditSidebar