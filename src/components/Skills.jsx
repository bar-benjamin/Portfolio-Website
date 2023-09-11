import React from 'react';

import PYTHON from '../assets/python-logo.png';
import JAVASCRIPT from '../assets/javascript-logo.png';
import REACT from '../assets/react-logo.png'
import NODEJS from '../assets/nodejs-logo.png'
import GCP from '../assets/gcp-logo.png'
import JAVA from '../assets/java-logo.png';
import C from '../assets/c-logo.png';
import SPRING from '../assets/spring-logo.png';
import GRADLE from '../assets/gradle-logo.png';
import MYSQL from '../assets/mysql-logo.png';
import MONGODB from '../assets/mongodb-logo.png';
import GIT from '../assets/git-logo.png';
import DOCKER from '../assets/docker-logo.png';
import LINUX from '../assets/linux-logo.png';
import INTELLIJ from '../assets/intellij-logo.png';
import VSCODE from '../assets/vscode-logo.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Tech Stack</p>
              <br></br>
              <br></br>
          </div>
          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={PYTHON} alt="PYTHON icon" />
                  <p className='my-4'>PYTHON</p>
              </div>    
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={JAVASCRIPT} alt="JAVASCRIPT icon" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={JAVA} alt="JAVA icon" />
                  <p className='my-4'>JAVA</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={C} alt="C icon" />
                  <p className='my-4'>C</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={REACT} alt="REACT icon" />
                  <p className='my-4'>REACT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={NODEJS} alt="NODEJS icon" />
                  <p className='my-4'>NODEJS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={GCP} alt="GCP icon" />
                  <p className='my-4'>Google Cloud</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={GIT} alt="GIT icon" />
                  <p className='my-4'>GIT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={SPRING} alt="SPRING icon" />
                  <p className='my-4'>SPRING</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={GRADLE} alt="GRADLE icon" />
                  <p className='my-4'>GRADLE</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={MYSQL} alt="MYSQL icon" />
                  <p className='my-4'>MYSQL</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={MONGODB} alt="MONGODB icon" />
                  <p className='my-4'>MONGODB</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={DOCKER} alt="DOCKER icon" />
                  <p className='my-4'>DOCKER</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={LINUX} alt="DOCKER icon" />
                  <p className='my-4'>LINUX</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={INTELLIJ} alt="INTELLIJ icon" />
                  <p className='my-4'>INTELLIJ</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={VSCODE} alt="VSCODE icon" />
                  <p className='my-4'>VSCODE</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;
