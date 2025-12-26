const skills = [
    "HTML", "CSS", "JavaScript", "React","JAVA",
    "Spring Boot", "MySQL", "Git"
];

const Skills = () => (
  <section id="skills" className="section">
    <h2>Skills</h2>

    <div className="skills-grid">
        {skills.map((skill, i) => (
        <div className="skill-card" key={i}>
            {skill}
        </div>
        ))}
    </div>
    </section>
);

export default Skills;
