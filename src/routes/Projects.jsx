import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// attempted to use popovers - too much for not alot of functionality, along with having to initialize them due to 
// 'Popovers are opt-in for performance reasons, so you must initialize them yourself.' - per Bootstrap's website
import 'bootstrap/dist/js/bootstrap.min.js';

class Project {
    constructor(key, pname, details, link){
        this.key = key;
        this.pname = pname;
        this.details = details;
        this.link = link;
    }
}

let p1 = new Project(
    1,
    "C++", 
    "Currently learning. Memory allocation. C++ language content, comparisions with Java/C/*other programming languages.", 
    "Go somewhere"
);
let p2 = new Project (
    2,
    "Java",
    "Good support for arrays, mathmatic operations, first OOP language learned. Java language content, comparisions with C++/C/*other programming languages.",
    "Go somewhere"
);
let p3 = new Project (
    3,
    "Javascript",
    "Javascript language content, comparisions with *other programming languages.",
    "Go somewhere"
);
let p4 = new Project (
    4,
    "SQL",
    "SQL content. Relactional databases. Query language. \n *sytax* SELECT column_names FROM table_name WHERE logic GROUP BY table_name ORDER BY table_name;.",
    "Go Somewhere"
);

const projects = [p1, p2, p3, p4];

const project = projects.map((projects) =>
    <div class="card col-sm-6">
        <img src="" class="card-img-top placeholder" alt="..."></img>
        <div class="card-body">
            <h5 class="card-title"> {projects.pname} </h5>
            <p class="card-text"> {projects.details} </p>
            <a href="Projects" class="btn btn-primary"> {projects.link} </a>
        </div>
    </div>
);


export default function Projects() {
    //WORKING ON FOR EACH PROJECT IN PROJECTS DISPLAYING A CARD.
    return (
        <div class="container-fluid">
            <div className='row'>
                {project}
            </div>
        </div>
    );
}
