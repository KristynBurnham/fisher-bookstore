import React, { Component } from "react";
import "./Books.css";
import { BookDisplay } from "./BookDisplay";

export default class Books extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [
                {
                    id: 1,
                    title: "Domain Driven Design",
                    author: "Eric Evans",
                    isbn: "978-0321125217"
                },
                {
                    id: 2,
                    title: "Accelerate",
                    author: "Nicole Forsgren",
                    isbn: "978-1942788331"
                },
                {
                    id: 3,
                    title: "Cassandra's Story",
                    author: "Kristyn Burnham",
                    isbn: "978-1234567890"
                },
                {
                    id: 4,
                    title: "Henry's Story",
                    author: "Kristyn Burnham",
                    isbn: "978-1234567891"
                },
                {
                    id: 5,
                    title: "Joshua's Story",
                    author: "Kristyn Burnham",
                    isbn: "978-1234567892"    
                },
                {
                    id: 6,
                    title: "Xavier's Story",
                    author: "Kristyn Burnham",
                    isbn: "978-1234567893"
                },
                {
                    id: 7,
                    title: "Last One",
                    author: "Kristyn Burnham",
                    isbn: "978-1234567894"    
                }
            ]
        };
    } 
    
    render() {
        return (
            <div className="Books">
                <div className="lander">
                    <BookDisplay books={this.state.books} />
                </div>
            </div>
        );
    }
}