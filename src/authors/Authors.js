import React, { Component } from "react";
import "./Authors.css";
import { AuthorDisplay } from "./AuthorDisplay";

export default class Authors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authors: [
                {
                    id: 1,
                    author: "Eric Evans",
                    title: "SciFi"
                },
                {
                    id: 2,
                    author: "Nicole Forsgren",
                    title: "Horror"
                },
                {
                    id: 3,
                    author: "Kristyn Burnham",
                    title: "Fictional"
                }
            ]
        };
    } 
    
    render() {
        return (
            <div className="Authors">
                <div className="lander">
                    <AuthorDisplay authors={this.state.authors} />
                </div>
            </div>
        );
    }
}