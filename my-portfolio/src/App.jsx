
import './App.css'; // Import custom CSS for styling
import CoverImage from './assets/cover.jpg'; // Assuming the uploaded file is saved in the assets folder

function App() {
  return (
    <div className="portfolio">
      {/* Cover Page */}
      <section className="cover-page">
        <img src={CoverImage} alt="Cover" className="cover-image" />
        <div className="cover-details">
          <h1>Trainee Name</h1>
          <p>CodeTribe Location: Location Name</p>
          <p>Program Enrolled: Program Name</p>
          <p>Contact: email@example.com | +123456789</p>
          <p>Last Updated: [Date]</p>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="table-of-contents">
        <h2>Table of Contents</h2>
        <ol>
          <li>Personal Introduction</li>
          <li>Resume</li>
          <li>Skills Matrix</li>
          <li>Individual Projects</li>
          <li>Group Projects</li>
          <li>Assessments</li>
          <li>Feedback and Reflections</li>
          <li>Post-Program Goals</li>
        </ol>
      </section>

      {/* Other sections (placeholders for now) */}
      <section className="personal-introduction">
        <h2>Personal Introduction</h2>
        <p>A brief introduction about yourself, your journey, and aspirations.</p>
        <img src="profile.jpg" alt="Professional" className="profile-photo" /> {/* Placeholder for profile photo */}
      </section>

      <section className="resume">
        <h2>Resume</h2>
        <p>A one-page resume highlighting your skills, experience, and education.</p>
        <a href="resume.pdf" download className="download-link">Download Resume</a>
      </section>

      <section className="skills-matrix">
        <h2>Skills Matrix</h2>
        <table>
          <thead>
            <tr>
              <th>Skill</th>
              <th>Proficiency Level</th>
              <th>Notes/Examples of Use</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>HTML</td>
              <td>Intermediate</td>
              <td>Used in multiple projects.</td>
            </tr>
            <tr>
              <td>CSS</td>
              <td>Advanced</td>
              <td>Styled responsive layouts.</td>
            </tr>
            <tr>
              <td>JavaScript</td>
              <td>Intermediate</td>
              <td>Built dynamic web applications.</td>
            </tr>
            <tr>
              <td>React Native</td>
              <td>Intermediate</td>
              <td>Developed a to-do list app.</td>
            </tr>
            <tr>
              <td>TypeScript</td>
              <td>Beginner</td>
              <td>Applied in API integrations.</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Add other sections as needed */}
    </div>
  );
}

export default App;
