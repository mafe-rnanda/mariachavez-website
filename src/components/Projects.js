import { useState } from "react";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import "./Projects.scss";
// import arrow from '../assets/arrowRight.svg';
import more from '../assets/moreIcon.svg';
import helpBook1 from '../assets/helpBook/App_Dashboard.gif';
import helpBook2 from '../assets/helpBook/Landing_Page.png';
import helpBook3 from '../assets/helpBook/Organization_Profile.png';
import helpBook4 from '../assets/helpBook/Donor_Profile.png';
import smarToDo1 from '../assets/smarToDo/home_page_no_login.png'
import smarToDo2 from '../assets/smarToDo/opened_card_layout.png'
import smarToDo3 from '../assets/smarToDo/check_completed_tasks_delete.gif'
import smarToDo4 from '../assets/smarToDo/add_new_todo_mark_completed.gif'

export default function Work(props) {
  //Open and close project
  const [project, setProject] = useState(false);
  const openProject = () => setProject(project ? false : true);
  
  //Slideshow images for each project
  const helpBook = [helpBook2,helpBook3,helpBook4,helpBook1];
  const smarToDo = [smarToDo1,smarToDo2,smarToDo3,smarToDo4];


  return (
    <div id="projects" className="grid">
      
      <h1 class="header">PROJECTS</h1>

      <div class="project-container">
        <div class="number">01</div>
        <div class="project-name">HelpBook</div>
        <img src={more} className="showMore" onClick={openProject} />
        <div className="divider"></div>
        <Slide>
            {helpBook.map((image)=> (
              <div className="each-slide-effect">
                <img src={image}/>
              </div>))}
        </Slide>
        <p className="project-description">HelpBook is a SPA (Single Page Application) which provides a platform for people and organizations to request help and users to provide it. On HelpBook donors can make a donation securely and easily and the receivers will have a profile to ask for the help they need, that will be easily accessable to donors. <br /><br/>The App utilizes React built-in and hooks and allows users (donors) to donate and follow users in real time. The app also allow users (receivers) to seamlessly edit, add or remove wishlist items or money goals with a user friendly pattern. Data is persisted by the API server using a PostgreSQL database. The client application communicates with an API server over HTTP with axios library, using the JSON format.</p>
      </div>

      <div class="project-container">
        <div class="number">02</div>
        <div class="project-name">smarToDo</div>
        <img src={more} className="showMore" onClick={openProject} />
        <div className="divider"></div>
        <Slide>
            {smarToDo.map((image)=> (
              <div className="each-slide-effect">
                <img src={image}/>
              </div>))}
        </Slide>
        <p className="project-description">Making lists is a smart way to keep your thoughts in order, but what if there was an app that could auto-categorize the input in different sections?<br />
        This smart ToDo adds the entered item to one of the 4 categories: To Read, To Buy, To Watch, To Eat. If the program does not get the category correct, users have the option to drag and drop into the desired list.<br />
        To-dos can be completed and/or deleted. Once completed, the user can see them in the complete section of each category card. <br /><br/>The App utilizes xxxxxxxxxxx.</p>
      </div>
 
    </div>
  );
}

