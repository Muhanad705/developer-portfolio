const projects = [
  {
    number: "01",
    category: "PERSONAL PROJECT",
    title: "Emtiaz Al Sulay",
    description:
      "A personal e-commerce project focused on Toyota and Nissan spare parts. The platform is being developed to help customers find compatible products, browse categories, and place orders online. The project involves frontend development, backend services, database management, and order and inventory workflows.",
    technologies: ["Next.js", "Node.js","Express" , "SQL Server"],
    accent: "purple",
    icon: "store",
    image: "/images/emtiaz-al-sulay.png",
    imageAlt: "Emtiaz Al Sulay online spare parts store",
  },
  {
    number: "02",
    category: "GRADUATION PROJECT",
    title: "Rasad — Smart Reporting",
    link: "https://github.com/Muhanad705/SmartReportApp",
    description:
      "A university graduation project developed collaboratively to make reporting public issues easier. The application allows users to submit reports with descriptions and location details, then track their status. The project involved mobile app development, backend services, and database management using React Native, Expo, Node.js, Express, and SQL Server.",
    technologies: [
      "React Native",
      "Expo",
      "Node.js",
      "Express",
      "SQL Server",
    ],
    accent: "blue",
    icon: "mobile",
    image: "/images/rasd.png",
    imageAlt: "Rasd smart public-service reporting mobile application",
    
  },
];

const skills = [
  {
    category: "FRONTEND",
    items: ["JavaScript", "React", "Next.js", "HTML", "CSS"],
  },
  {
    category: "BACKEND",
    items: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    category: "DATABASE",
    items: ["SQL Server", "SQL"],
  },
  {
    category: "MOBILE",
    items: ["React Native", "Expo"],
  },
];

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M7 17 17 7M7 7h10v10"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg
      aria-hidden="true"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="m8 17-5-5 5-5M16 7l5 5-5 5M14 4l-4 16"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ProjectIcon({ type }: { type: string }) {
  if (type === "mobile") {
    return (
      <svg
        aria-hidden="true"
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
      >
        <rect
          x="6.5"
          y="2.5"
          width="11"
          height="19"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M10 5h4M11 18.5h2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M3 4.5h18v12H3zM8 20h8M12 16.5V20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 8h10M7 11h6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="container nav-container">
          <a href="#home" className="brand" aria-label="Home">
            <span className="brand-mark">
              <CodeIcon />
            </span>
            <span>
              MOHANAD<span className="brand-dot">.</span>
            </span>
          </a>

          <nav className="navigation" aria-label="Main navigation">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>

          <a
            className="nav-cta"
            href="https://github.com/Muhanad705"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <ArrowIcon />
          </a>
        </div>
      </header>

      <section className="hero container" id="home">
        <div className="hero-content">
          <div className="availability">
            <span className="status-dot" />
            IT Graduate · Software Development
          </div>

          <p className="eyebrow">HELLO, I&apos;M MOHANAD</p>

          <h1>
            Building digital
            <br />
            experiences that
            <br />
            <span className="gradient-text">solve real problems.</span>
          </h1>

          <p className="hero-description">
            I&apos;m an IT graduate passionate about building web and mobile
            applications, working with databases, and turning ideas into
            practical software solutions.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="button button-primary">
              Explore My Work <ArrowIcon />
            </a>

            <a href="#contact" className="button button-secondary">
              Get in Touch
            </a>
          </div>

          <div className="hero-footer">
            <span>BASED IN RIYADH, SAUDI ARABIA</span>
            <span className="hero-footer-line" />
            <span>WEB &amp; MOBILE APPLICATIONS</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Developer illustration">
          <div className="visual-glow" />

          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />

          <div className="code-window">
            <div className="window-header">
              <div className="window-dots">
                <span />
                <span />
                <span />
              </div>

              <span className="window-filename">developer.ts</span>
              <span className="window-menu">•••</span>
            </div>

            <div className="code-content">
              <div className="code-line">
                <span className="line-number">01</span>
                <span>
                  <span className="code-purple">const</span>{" "}
                  <span className="code-blue">developer</span> = {"{"}
                </span>
              </div>

              <div className="code-line">
                <span className="line-number">02</span>
                <span className="code-indent">
                  name: <span className="code-green">&quot;Mohanad&quot;</span>,
                </span>
              </div>

              <div className="code-line">
                <span className="line-number">03</span>
                <span className="code-indent">
                  role: <span className="code-green">&quot;Developer&quot;</span>,
                </span>
              </div>

              <div className="code-line">
                <span className="line-number">04</span>
                <span className="code-indent">focus: [</span>
              </div>

              <div className="code-line">
                <span className="line-number">05</span>
                <span className="code-indent code-more">
                  <span className="code-green">&quot;Web&quot;</span>,
                </span>
              </div>

              <div className="code-line">
                <span className="line-number">06</span>
                <span className="code-indent code-more">
                  <span className="code-green">&quot;Mobile&quot;</span>,
                </span>
              </div>

              <div className="code-line">
                <span className="line-number">07</span>
                <span className="code-indent">],</span>
              </div>

              <div className="code-line">
                <span className="line-number">08</span>
                <span>
                  <span className="code-purple">const</span>{" "}
                  <span className="code-blue">build</span> = () =&gt;{" "}
                  <span className="code-yellow">&quot;solutions&quot;</span>;
                </span>
              </div>

              <div className="code-line">
                <span className="line-number">09</span>
                <span>{"};"}</span>
              </div>
            </div>

            <div className="window-footer">
              <span>
                <span className="status-dot" /> Ready to build
              </span>
              <span>TypeScript</span>
            </div>
          </div>

          <div className="floating-card floating-card-top">
            <span className="floating-icon purple-icon">
              <CodeIcon />
            </span>
            <span>
              <strong>Clean Code</strong>
              <small>Practical solutions</small>
            </span>
          </div>

          <div className="floating-card floating-card-bottom">
            <span className="floating-icon blue-icon">{"{ }"}</span>
            <span>
              <strong>Full-Stack</strong>
              <small>Web &amp; Mobile</small>
            </span>
          </div>

          <div className="visual-decoration decoration-one" />
          <div className="visual-decoration decoration-two" />
        </div>

        <a className="scroll-indicator" href="#about">
          <span className="scroll-line" />
          SCROLL TO EXPLORE
        </a>
      </section>

      <section className="about-section section" id="about">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">01 / ABOUT ME</p>
            <h2>
              Curious mind.
              <br />
              <span className="muted-heading">Practical builder.</span>
            </h2>
          </div>

          <div className="about-grid">
            <div className="about-copy">
              <p className="about-lead">
                I&apos;m an Information Technology graduate interested in
                software development and practical solutions.
              </p>

              <p>
                Through academic and personal projects, I&apos;ve gained
                experience with web and mobile applications, backend services,
                and databases.
              </p>

              <p>
                I&apos;m eager to strengthen my skills, contribute to
                real-world projects, and grow as a software developer.
              </p>
            </div>

            <div className="about-details">
              <div className="detail-row">
                <span className="detail-label">EDUCATION</span>
                <div>
                  <strong>Bachelor&apos;s in Information Technology</strong>
                  <p>University of Science and Technology</p>
                </div>
              </div>

              <div className="detail-row">
                <span className="detail-label">LOCATION</span>
                <strong>Riyadh, Saudi Arabia</strong>
              </div>

              <div className="detail-row">
                <span className="detail-label">INTERESTS</span>
                <strong>Web Development · Mobile Apps · Databases</strong>
              </div>

              <div className="detail-row">
                <span className="detail-label">GITHUB</span>
                <a
                  href="https://github.com/Muhanad705"
                  target="_blank"
                  rel="noreferrer"
                  className="text-link"
                >
                  github.com/Muhanad705 <ArrowIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="projects-section section" id="projects">
        <div className="container">
          <div className="section-topline">
            <div className="section-heading">
              <p className="eyebrow">02 / SELECTED WORK</p>
              <h2>
                Projects that
                <br />
                <span className="muted-heading">make an impact.</span>
              </h2>
            </div>

            <p className="section-intro">
              A selection of projects where I&apos;ve applied my skills to
              build practical digital solutions.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article
                className={`project-card ${project.accent}`}
                key={project.number}
              >
                <div className="project-card-top">
                  <span className="project-number">{project.number}</span>
                  <span className="project-category">{project.category}</span>
                  {project.link ? (
                    <a
                      className="project-arrow"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} on GitHub`}

                    >

                      
                      <ArrowIcon />
                      

                    </a>
                  ) : null}

                </div>

                <div className="project-art project-art-with-image">
                  <img
                    className="project-preview-image"
                    src={project.image}
                    alt={project.imageAlt}
                    loading="lazy"
                  />
                </div>

                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="technology-list">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="projects-note">
          Each project showcases my practical experience in software development, from building user interfaces to developing backend services and managing databases.

          </p>
        </div>
      </section>

      <section className="skills-section section" id="skills">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">03 / TECHNICAL SKILLS</p>
            <h2>
              Technologies 
              <br />
              <span className="muted-heading">I Work With.</span>
            </h2>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <article className="skill-card" key={skill.category}>
                <div className="skill-card-header">
                  <span className="skill-index">0{index + 1}</span>

                  <span className="skill-symbol">
                    {index === 0
                      ? "</>"
                      : index === 1
                        ? "{ }"
                        : index === 2
                          ? "DB"
                          : "APP"}
                  </span>
                </div>

                <h3>{skill.category}</h3>

                <div className="skill-tags">
                  {skill.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <p className="skills-note">
            Technologies listed are based on my project experience and
            practical learning.
          </p>
        </div>
      </section>

      <section className="contact-section section" id="contact">
        <div className="container">
          <div className="contact-card">
            <div className="contact-glow" />

            <p className="eyebrow">04 / GET IN TOUCH</p>

            <h2>
              Let&apos;s build
              <br />
              <span className="gradient-text">something meaningful.</span>
            </h2>

            <p className="contact-description">
              I&apos;m an Information Technology graduate interested in
              software development and new opportunities. Feel free to reach
              out and connect with me.
            </p>

            <a
              className="button button-primary contact-button"
              href="mailto:muhanad705xd@gmail.com"
            >
              Send Me an Email <ArrowIcon />
            </a>

            <div className="contact-links">
              <a
                className="contact-link"
                href="mailto:muhanad705xd@gmail.com"
              >
                <span className="contact-link-icon">@</span>
                <span className="contact-link-text">
                  <small>EMAIL</small>
                  <strong>Send an email</strong>
                </span>
                <ArrowIcon />
              </a>

              <a
                className="contact-link"
                href="https://wa.me/966553527262"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-link-icon">WA</span>
                <span className="contact-link-text">
                  <small>WHATSAPP</small>
                  <strong>Let&apos;s chat</strong>
                </span>
                <ArrowIcon />
              </a>

              <a
                className="contact-link"
                href="https://linkedin.com/in/muhanad-bin-madhi-163924428"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-link-icon">in</span>
                <span className="contact-link-text">
                  <small>LINKEDIN</small>
                  <strong>Connect with me</strong>
                </span>
                <ArrowIcon />
              </a>

              <a
                className="contact-link"
                href="https://github.com/Muhanad705"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-link-icon">&lt;/&gt;</span>
                <span className="contact-link-text">
                  <small>GITHUB</small>
                  <strong>Explore my projects</strong>
                </span>
                <ArrowIcon />
              </a>
            </div>

            <span className="contact-location">
              RIYADH, SAUDI ARABIA
            </span>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-content">
          <a href="#home" className="brand footer-brand">
            <span className="brand-mark">
              <CodeIcon />
            </span>
            <span>
              MOHANAD<span className="brand-dot">.</span>
            </span>
          </a>

          <p>Designed &amp; built with Next.js.</p>

          <a
            href="https://github.com/Muhanad705"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            GitHub <ArrowIcon />
          </a>

          <span className="copyright">© 2026 Mohanad</span>
        </div>
      </footer>
    </main>
  );
}