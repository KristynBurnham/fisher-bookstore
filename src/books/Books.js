import React from "react";
import "./Books.css";

export class Books {
    constructor() {
        render();
        {
            return (<div className="Books">
                <div className="lander">
                    <BookDisplay books={this.state.books} />
                </div>
            </div>);
        }
        ;
        constructor(props);
        {
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
                    }
                ]
            };
        }
    }
}
