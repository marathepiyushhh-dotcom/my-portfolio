import React from "react";

const Projects = () => {
    return (
    <section id="projects" className="section">
    <h2>Projects</h2>

    <div className="project-card">
        <h3>Hostel Management System</h3>
        <p>
            • Built a Hostel Management System with room allocation, fee tracking, and student management. 
            • Implemented login system with JWT and role-based access (Admin/Student). 
            • Designed REST APIs for registration, rooms, fees, and complaints. 
            • Created a responsive UI using HTML, CSS, Bootstrap. 
            • Improved performance with optimized SQL queries.
        </p>
    </div>

    <div className="project-card">
        <h3>E-Shop Manager</h3>
        <p>
            • Built E-Shop Manager, a web application for managing products, orders, and customers. 
            • Implemented JWT-based authentication with Spring Security for secure access. 
            • Created REST APIs for product CRUD, cart, checkout, and order tracking. 
            • Developed a responsive UI using HTML, CSS, Bootstrap/React. 
            • Added Admin Dashboard for inventory, sales monitoring, and order status. 
            • Integrated input validations, exception handling, and optimized API performance 
        </p>
    </div>

<div className="project-card">
        <h3>React Portfolio Website</h3>
        <p>
            A personal portfolio built using React, showcasing my skills,
            projects, and contact information.
        </p>
    </div>

    </section>
    );
};

export default Projects;
