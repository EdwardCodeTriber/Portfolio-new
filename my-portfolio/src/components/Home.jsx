import picture from "../../public/Image2.jpg";
import storm from "../assets/image.jpg";
import code from "../assets/code.jpg";
import work from "../assets/work.jpg";
import codeline from "../assets/codeline.jpg";
import "./style.css";
import Projects from "./Projects";
import cv from "../assets/Resume_Of_Thapelo_Edward_Somo.pdf";

const Home = () => {
  return (
    <div>
      <nav>
        <a href="#" className="Logo">
          <span>Edward</span>
        </a>
        <ul className="Links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </ul>

        <i className="bx bx-menu-alt-right" id="menu"></i>

        <a href="#contact" className="btn">
          Contact Me
        </a>
      </nav>
      <section id="home">
        <img src={picture} alt="" />

        <div className="info-box">
          <h1>
            <span>Hello, I'm Edward</span>
          </h1>
          <h3>
            <span>MERN Stack Developer</span> based in Soweto
          </h3>
          <p>
            I’m a Junior MERN stack developer, who loves to collaborate with
            other developers. I believe in teamwork, building projects that are
            more challenging and complex.
          </p>
        </div>
        <div className="btn-box">
          <a href={cv} download="My_CV.pdf" className="btn">
            CV
          </a>
          <a href="#contact" className="btn">
            Contact
          </a>
        </div>
      </section>

      <section id="about">
        <div className="about-box">
          <div className="about-info">
            <h1>
              <span>About Me</span>
            </h1>
            <p>
              I'm a Junior MERN (MongoDB, Express.js, React, Node.js) stack
              developer with a passion for collaborative software development.
              My expertise spans full-stack web application development, where I
              specialize in creating scalable and interactive web solutions. I
              thrive in team environments and actively seek out challenging
              projects that push the boundaries of my technical skills. My
              portfolio includes complex applications that demonstrate
              proficiency in both front-end and back-end technologies,
              showcasing my ability to design responsive user interfaces and
              develop robust server-side logic. I'm committed to continuous
              learning, staying updated with the latest web development trends,
              and solving intricate technical challenges through innovative
              coding approaches and effective teamwork.{" "}
            </p>
          </div>
          <h2>
            <span>Skills Matrix</span>
          </h2>
          <div className="skills">
            <ul>
              <li>
                <span>
                  <i class="bx bx-chevron-right"></i>HTML
                </span>
                <span>Intermediate</span>
              </li>
              <li>
                <span>
                  <i class="bx bx-chevron-right"></i>CSS
                </span>
                <span>Intermediate</span>
              </li>
              <li>
                <span>
                  <i class="bx bx-chevron-right"></i>Javascript
                </span>
                <span>Intermediate</span>
              </li>
            </ul>
            <ul>
              <li>
                <span>
                  <i class="bx bx-chevron-right"></i>React
                </span>
                <span>Beginner</span>
              </li>
              <li>
                <span>
                  <i class="bx bx-chevron-right"></i>MongoDB
                </span>
                <span>Beginner</span>
              </li>
              <li>
                <span>
                  <i class="bx bx-chevron-right"></i>Node
                </span>
                <span>Beginner</span>
              </li>
              <li>
                <span>
                  <i class="bx bx-chevron-right"></i>React Native
                </span>
                <span>Beginner</span>
              </li>
            </ul>
          </div>
        </div>
        <img src={storm} />
      </section>

      <section id="services">
        <h1 className="header">
          <span>Journey at CodeTribe Academy</span>
        </h1>
        <div className="services-container">
          <div className="box">
            <h1>
              <span>Development</span>
            </h1>
            <p>
              During my development journey, I began as a trainee, focusing on
              foundational concepts and hands-on practice. Starting with
              front-end development, I gained proficiency in creating intuitive
              user interfaces using HTML, CSS, and JavaScript, along with React
              for dynamic components. Transitioning to the back end, I delved
              into Node.js, Express.js, and MongoDB, building robust APIs and
              handling data securely. This phase allowed me to understand the
              full development cycle, laying a strong foundation for creating
              seamless, full-stack applications.
            </p>
            <img src={code} />
          </div>
          <div className="box">
            <h1>
              <span>Frontend</span>
            </h1>
            <p>
              During my journey as a frontend trainee, I focused on mastering
              the art of creating engaging and user-friendly interfaces. I honed
              my skills in HTML, CSS, and JavaScript, along with frameworks like
              React, to build dynamic and responsive web applications. This
              phase taught me the importance of design consistency,
              accessibility, and performance optimization, enabling me to
              deliver intuitive and visually appealing user experiences.
            </p>
            <img src={codeline} />
          </div>
          <div className="box">
            <h1>
              <span>Backend</span>
            </h1>
            <p>
              During my journey as a backend trainee, I concentrated on building
              the foundation for secure, efficient, and scalable server-side
              applications. I worked with Node.js and Express.js to create
              RESTful APIs, manage server logic, and handle data processing.
              Learning MongoDB for database integration allowed me to store and
              retrieve data efficiently. This phase emphasized the importance of
              security, error handling, and performance optimization in ensuring
              smooth communication between the frontend and backend systems
            </p>
            <img src={work} />
          </div>
        </div>
        <Projects />
      </section>

      <section id="contact">
        <div className="header">
          <span>Contact</span>
        </div>
        <form action="#">
          <div className="input-box">
            <span>Full Name</span>
            <input type="text" placeholder="Enter your Full Name" />
          </div>
          <div className="input-box">
            <span>Email</span>
            <input type="email" placeholder="Enter your Email" />
          </div>
          <div className="input-box">
            <span>Your Massage</span>
            <input type="text" placeholder="Enter your Massage here" />
          </div>
          <div className="btn">Submit</div>
        </form>
      </section>

      <footer>
        <div className="col-left">
          <div className="col-box">
            <span>
              <i class="bx bxs-location-plus"></i>
            </span>
            <span>15760 alpine St., Glen Ridge Soweto</span>
          </div>
          <div className="col-box">
            <span>
              <i class="bx bx-phone"></i>
            </span>
            <span>067 759 7654</span>
          </div>
          <div className="col-box">
            <span>
              <i class="bx bx-envelope"></i>
            </span>
            <span>edwardthapelo55@gmail.com</span>
          </div>
        </div>
        <div className="col-right">
          <span>About my Services</span>
          <p>
            I offer professional MERN stack development services, including the
            creation of full-stack web applications, RESTful APIs, and dynamic
            front-end interfaces. My services cover responsive design, seamless
            database integration, and performance optimization, ensuring secure
            and scalable solutions tailored to your specific needs. Whether it's
            building a new application from scratch or enhancing an existing
            project, I deliver high-quality, efficient, and user-friendly web
            solutions.
          </p>
          <div className="social-icons">
            <span>
              <i class="bx bxl-linkedin-square"></i>
            </span>
            <span>
              <i class="bx bxl-github" href=""></i>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
