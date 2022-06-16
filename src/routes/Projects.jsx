import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// attempted to use popovers - too much for not alot of functionality, along with having to initialize them due to 'Popovers are opt-in for performance reasons, so you must initialize them yourself.' - per Bootstrap's website
import 'bootstrap/dist/js/bootstrap.min.js';

class Project {
    constructor(pname, details, link){
        this.pname = pname;
        this.details = details;
        this.link = link;
    }
}

let p1 = new Project(
    "C++", 
    "Currently learning. Memory allocation. C++ language content, comparisions with Java/C/*other programming languages.", 
    "Go somewhere"
);
let p2 = new Project (
    "Java",
    "Good support for arrays, mathmatic operations, first OOP language learned. Java language content, comparisions with C++/C/*other programming languages.",
    "Go somewhere"
);
let p3 = new Project (
    "Javascript",
    "Javascript language content, comparisions with *other programming languages.",
    "Go somewhere"
);
let p4 = new Project (
    "Java",
    "Good support for arrays, mathmatic operations, first OOP language learned. Java language content, comparisions with C++/C/*other programming languages.",
    "SQL content. Relactional databases. Query language. *sytax* SELECT column_names FROM table_name WHERE logic GROUP BY table_name ORDER BY table_name;"
);

const projects = [p1, p2, p3, p4];




export default function Projects(projects) {
    //WORKING ON FOR EACH PROJECT IN PROJECTS DISPLAYING A CARD.
    return (
        <div class="container-fluid">
            {/* {projects.forEach()} */}
            <div class="row">
                <div class="card col-sm-6">
                    <img src="" class="card-img-top placeholder" alt="..."></img>
                    <div class="card-body">
                        {/* <h5 class="card-title">{projects[0].pname}</h5> */}
                        <p class="card-text">Currently learning. Memory allocation. C++ language content, comparisions with Java/C/*other programming languages.</p>
                        <a href="Projects" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div class="card col-sm-6">
                    <img src="" class="card-img-top placeholder" alt="..."></img>
                    <div class="card-body">
                        <h5 class="card-title">Java</h5>
                        <p class="card-text">Good support for arrays, mathmatic operations, first OOP language learned. Java language content, comparisions with C++/C/*other programming languages.</p>
                        <a href="Projects" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="card col-sm-6">
                    <img src="" class="card-img-top placeholder" alt="..."></img>
                    <div class="card-body">
                        <h5 class="card-title">Javascript</h5>
                        <p class="card-text">Javascript language content, comparisions with *other programming languages.</p>
                        <a href="Projects" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div class="card col-sm-6">
                    <img src="" class="card-img-top placeholder" alt="..."></img>
                    <div class="card-body">
                        <h5 class="card-title">SQL</h5>
                        <p class="card-text">SQL content. Relactional databases. Query language. <br></br>*sytax* SELECT column_names FROM table_name WHERE logic GROUP BY table_name ORDER BY table_name;</p>
                        <a href="Projects" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
    );
}