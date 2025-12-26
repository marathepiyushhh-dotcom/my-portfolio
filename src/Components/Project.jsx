const projects = [
    {
    title: "Hostel Management System",
    desc: "Room allocation, JWT auth, REST APIs, SQL optimization."
    },
    {
    title: "E-Shop Manager",
    desc: "Product, order & customer management with Spring Security."
    },
    {
    title: "React Portfolio Website",
    desc: "Personal portfolio built using React."
    }
];

const Projects = () => {
    return (
    <section id="projects" className="section">
        <h2>Projects</h2>

        <div className="project-grid">
        {projects.map((p, i) => (
            <div className="project-card" key={i}>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <button className="btn">View Project</button>
            </div>
        ))}
        </div>
    </section>
    );
};

export default Projects;
