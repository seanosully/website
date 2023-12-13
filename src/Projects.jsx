import React from 'react';
import Project from './Project';
import AnimatedText from './AnimatedText';
import './Projects.css'
import icon1 from './images/icon1.png';
import icon2 from './images/glance_logo_128.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';
import icon5 from './images/icon5.png';
import icon6 from './images/icon6.png';


function Projects() {
  const projectsData = [
    
    {
      id: 1,
      name: 'Decision Tree Classifier',
      language: 'Python',
      about: 'This program is a Decision Tree Classifier utilizing the ID3 algorithm with an added feature for chi-square pruning, enhancing its efficiency and reducing overfitting for more accurate data analysis.',
      link: 'https://github.com/seanosully/Decision-Tree-Learning',
      icon: icon1
    },
    {
        id: 2,
        name: 'Glance Chrome Extension',
        language: 'Javascript',
        about: 'A Chrome Extension that gives a quick summary overview of important and relevant information on a webpage. The program is powered by the ChatGPT API.',
        link: 'https://chromewebstore.google.com/detail/glance/amhhgbdlikegpjlobmepndgmddnpalda?hl=en-GB',
        icon: icon2
      },
      {
        id: 3,
        name: 'Deep Q-Learning Agent',
        language: 'Python',
        about: 'A program that uses the PyTorch Library to train a DQN agent on the game of snake and ball drop game.',
        link: 'https://github.com/seanosully/Deep-Q-Learning',
        icon: icon6
      },
    {
        id: 4,
        name: 'Wordle Bot',
        language: 'Python',
        about: 'A bot designed to solve daily Wordle puzzles. The user has the option to have the program solve a word that is known to the user, or help the user solve an unknown puzzle.',
        link: 'https://github.com/seanosully/Wordle-Bot',
        icon: icon3
      },
      {
        id: 5,
        name: 'Block Maze Solver',
        language: 'Python',
        about: 'A python program that finds the shortest solution to a rolling block maze using A* search. The program also has the option to choose between various heuristics.',
        link: 'https://github.com/seanosully/BlockMaze-Solver',
        icon: icon4
        
      },
      {
        id: 6,
        name: 'Light Up Maze Solver',
        language: 'Python',
        about: "A program designed to solve Nikoli's light-up puzzles which uses CNF logic and implements the Glucose SAT solver.",
        link: 'https://github.com/seanosully/Lightup-Maze-Solver',
        icon: icon5
      },

      
  ];

  return (
    <div id='projects'>
        <AnimatedText className='project-title' text="Projects" />
        <div className='projects-container'>
        {projectsData.map((project) => (
            <Project key={project.id} language={project.language} name={project.name} about={project.about} link={project.link} icon={project.icon}/>
        ))}
        </div>
        <div className='github-container'>
            <a className='view-more-tag' target='_blank' href='https://www.github.com'>
                View More on Github
            </a>
        </div>

    </div>

  );
}

export default Projects;
