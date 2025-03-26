import { useState } from 'react'
import './style_nav.css'


function App() {
  // State to track the currently selected section
  const [selectedSection, setSelectedSection] = useState('home');

  // Function to handle navbar item clicks
  const handleNavClick = (section) => {
    setSelectedSection(section);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      <div className='container'>
      <h3 id='name'>About Me</h3>
            <br />
            <p>
              My name is Abhinandan Suresh Geddannavar, and I am a passionate tech enthusiast with a strong interest in software development. 
              I love working on challenging coding problems and exploring new technologies that can improve efficiency and innovation. 
              My journey in the tech world began with my curiosity about how applications work behind the scenes. 
              Over time, I developed a keen interest in backend development and AI-driven applications. 
              I actively participate in coding challenges on platforms like LeetCode and GeeksforGeeks. 
              I also enjoy contributing to open-source projects and collaborating with like-minded individuals. 
              Apart from coding, I like researching and exploring AI-based tools that can enhance human productivity. 
              My goal is to build solutions that positively impact people's daily lives. 
              Learning new concepts and staying updated with the latest trends in technology excites me. 
              I always strive to improve my skills and work on innovative projects that make a difference. 
            </p>
          </div>
          <div className='container'>
          <h1>Education</h1>
          <br />
        <p>
            I have completed my Bachelor's in Computer Applications (BCA) from KLE's J.T. College of Arts, Commerce, and Science in Gadag. 
            Currently, I am pursuing a Master of Computer Applications (MCA) through PGCET, focusing on advanced topics in software development. 
            My coursework includes subjects such as Data Structures, Algorithms, Web Development, and Artificial Intelligence. 
            I actively engage in hands-on projects and coding competitions to enhance my practical knowledge. 
            Apart from my formal education, I follow structured learning resources like Striver’s A2Z DSA sheet. 
            I dedicate a few hours every day to problem-solving and implementing efficient algorithms. 
            Continuous learning is my priority, and I aim to gain expertise in full-stack development and cloud technologies. 
            My academic journey has shaped my logical thinking and problem-solving approach. 
            I believe in lifelong learning and adapting to new challenges in the ever-evolving tech industry. 
            With my education and practical experience, I am preparing myself for a successful career in software development. 
        </p>
          </div>
          <div className='container'>
            <h3 id='name'>Contact</h3>
            <br />
            <p>
              If you would like to connect with me, feel free to reach out through LinkedIn or email. 
              I am always open to networking, collaborating on exciting projects, and discussing the latest technology trends. 
              Whether it is about software development, coding challenges, or AI-based applications, I love exchanging ideas. 
              I believe in learning from others and sharing knowledge to grow together as a community. 
              If you have any interesting opportunities, technical discussions, or research ideas, I would love to hear about them. 
              You can also connect with me to explore project collaborations in AI, web development, or software engineering. 
              My inbox is always open for meaningful conversations and knowledge-sharing. 
              I regularly engage with the tech community on various platforms to stay updated. 
              If you need assistance or guidance in coding, I am happy to help. 
              Looking forward to connecting and building a strong professional network! 
            </p>
          </div>
          <footer>
        <p>Copyright all rights reserved 2025</p>
      </footer> 

      {/* <nav>
        <ul>
          <li onClick={() => handleNavClick('home')}>Home</li>
          <li onClick={() => handleNavClick('about')}>About Me</li>
          <li onClick={() => handleNavClick('contact')}>Contact Us</li>
          <li onClick={() => handleNavClick('help')}>Help</li>
          <button>Login / Signup</button>
        </ul>
      </nav>
      <div className="container">
        {selectedSection === 'home' && (
          <div>
            <h3 id='name'>Home</h3>
            <br />
            <p>Welcome to my personal website!</p>
            <p>This is <span id='name'>Abhinandan</span></p>
            
          </div>
        )}
        {selectedSection === 'about' && (
          <div>
            <h3 id='name'>About Me</h3>
            <br />
            <p>
              My name is Abhinandan Suresh Geddannavar, and I am a passionate tech enthusiast with a strong interest in software development. 
              I love working on challenging coding problems and exploring new technologies that can improve efficiency and innovation. 
              My journey in the tech world began with my curiosity about how applications work behind the scenes. 
              Over time, I developed a keen interest in backend development and AI-driven applications. 
              I actively participate in coding challenges on platforms like LeetCode and GeeksforGeeks. 
              I also enjoy contributing to open-source projects and collaborating with like-minded individuals. 
              Apart from coding, I like researching and exploring AI-based tools that can enhance human productivity. 
              My goal is to build solutions that positively impact people's daily lives. 
              Learning new concepts and staying updated with the latest trends in technology excites me. 
              I always strive to improve my skills and work on innovative projects that make a difference. 
            </p>
          </div>
        )}
        {selectedSection === 'contact' && (
          <div>
            <h3 id='name'>Contact</h3>
            <br />
            <p>
              If you would like to connect with me, feel free to reach out through LinkedIn or email. 
              I am always open to networking, collaborating on exciting projects, and discussing the latest technology trends. 
              Whether it is about software development, coding challenges, or AI-based applications, I love exchanging ideas. 
              I believe in learning from others and sharing knowledge to grow together as a community. 
              If you have any interesting opportunities, technical discussions, or research ideas, I would love to hear about them. 
              You can also connect with me to explore project collaborations in AI, web development, or software engineering. 
              My inbox is always open for meaningful conversations and knowledge-sharing. 
              I regularly engage with the tech community on various platforms to stay updated. 
              If you need assistance or guidance in coding, I am happy to help. 
              Looking forward to connecting and building a strong professional network! 
            </p>
          </div>
        )}
        {selectedSection === 'help' && (
          <div>
            <h3 id='name'>Help</h3>
            <br />
            <p>If you need help, please reach out to our support team.</p>
          </div>
        )}
      </div>
      <footer>
        <p>Copyright all rights reserved 2025</p>
      </footer> */}

    </>
  );
}
export default App
