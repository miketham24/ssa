import React, {useState} from 'react';
import './Team.css';
import TeamItem from './TeamItem';

const teamData = {
  2024: [
    { src: 'images/team_photos/2021team/.jpeg', text: 'Aarthi Krishnan', role: 'Co-President', path: '/' },
    { src: 'images/team_photos/2021team/.jpg', text: 'Matthew Wong', role: 'Co-President', path: '/' },
    { src: 'images/team_photos/2021team/mike.jpg', text: 'Michael Tham', role: 'Treasurer', path: '/' },
    { src: 'images/team_photos/2021team/.jpg', text: 'Ria Harjani', role: 'Secetary', path: '/' },
    { src: 'images/team_photos/2021team/steffi.jpg', text: 'Angela Yandrofski', role: 'Marketing Director', path: '/' },
    { src: 'images/team_photos/2021team/cris.jpg', text: 'Zara Hassan', role: 'Marketing Director', path: '/' },
    { src: 'images/team_photos/2021team/.png', text: 'Denise Ong', role: 'Social Media Coordinator', path: '/' },
    { src: 'images/team_photos/2021team/.jpg', text: 'Matthew Soh', role: 'Logistics Director', path: '/' },
    { src: 'images/team_photos/2021team/el.jpg', text: 'Leopold Tse', role: 'Logistics Director', path: '/' },
    { src: 'images/team_photos/2021team/el.jpg', text: 'Virginia Tung', role: 'Logistics Coordinator', path: '/' },
    { src: 'images/team_photos/2021team/.png', text: 'Victoria Cheah', role: 'External Director', path: '/' },
    { src: 'images/team_photos/2021team/.png', text: 'Charlene Medina', role: 'External Director', path: '/' },
    { src: 'images/team_photos/2021team/.png', text: 'Foo Yong Ming', role: 'Outreach Coordinator', path: '/' },
    { src: 'images/team_photos/2021team/mar.png', text: 'Cristiana Bonifacio', role: 'Events Director', path: '/' },
    { src: 'images/team_photos/2021team/kyle.png', text: 'Elisabeth Chew', role: 'Events Director', path: '/' },
    { src: 'images/team_photos/2021team/.jpg', text: 'Pinn Yee Scott', role: 'Events Coordinator', path: '/' },
    { src: 'images/team_photos/2021team/.jpg', text: 'Emma Lim', role: 'Events Coordinator', path: '/' },
    { src: 'images/team_photos/2021team/mar.png', text: 'Mariena Teo', role: 'Internal Director', path: '/' },
    { src: 'images/team_photos/2021team/carissa.jpeg', text: 'Carissa Chua', role: 'Internal Director', path: '/' }
  ],
  2023: [
    // Data for 2023/2024 team
    { src: 'images/team_photos/2021team/.jpeg', text: 'Aarthi Krishnan', role: 'Co-President', path: '/' },
    { src: 'images/team_photos/2021team/.jpg', text: 'Matthew Wong', role: 'Co-President', path: '/' },
    { src: 'images/team_photos/2021team/mike.jpg', text: 'Michael Tham', role: 'Treasurer', path: '/' },
    { src: 'images/team_photos/2021team/.jpg', text: 'Ria Harjani', role: 'Secetary', path: '/' },
    { src: 'images/team_photos/2021team/steffi.jpg', text: 'Angela Yandrofski', role: 'Marketing Director', path: '/' },
    { src: 'images/team_photos/2021team/cris.jpg', text: 'Zara Hassan', role: 'Marketing Director', path: '/' },
    { src: 'images/team_photos/2021team/.png', text: 'Denise Ong', role: 'Social Media Coordinator', path: '/' },
    { src: 'images/team_photos/2021team/.jpg', text: 'Matthew Soh', role: 'Logistics Director', path: '/' },
    { src: 'images/team_photos/2021team/el.jpg', text: 'Leopold Tse', role: 'Logistics Director', path: '/' },
    { src: 'images/team_photos/2021team/el.jpg', text: 'Virginia Tung', role: 'Logistics Coordinator', path: '/' },
    { src: 'images/team_photos/2021team/.png', text: 'Victoria Cheah', role: 'External Director', path: '/' },
    { src: 'images/team_photos/2021team/.png', text: 'Charlene Medina', role: 'External Director', path: '/' },
    { src: 'images/team_photos/2021team/.png', text: 'Foo Yong Ming', role: 'Outreach Coordinator', path: '/' },
    { src: 'images/team_photos/2021team/mar.png', text: 'Cristiana Bonifacio', role: 'Events Director', path: '/' },
    { src: 'images/team_photos/2021team/kyle.png', text: 'Elisabeth Chew', role: 'Events Director', path: '/' },
    { src: 'images/team_photos/2021team/.jpg', text: 'Pinn Yee Scott', role: 'Events Coordinator', path: '/' },
    { src: 'images/team_photos/2021team/.jpg', text: 'Emma Lim', role: 'Events Coordinator', path: '/' },
    { src: 'images/team_photos/2021team/mar.png', text: 'Mariena Teo', role: 'Internal Director', path: '/' },
    { src: 'images/team_photos/2021team/carissa.jpeg', text: 'Carissa Chua', role: 'Internal Director', path: '/' }
  ],
  2022: [
    // Data for 2022/2023 team
    { src: 'images/team_photos/2021team/josh.jpg', text: 'Joshua Teo', role: 'Co-President', path: '/' },
    { src: 'images/team_photos/2021team/carissa.jpeg', text: 'Carissa Chua', role: 'Co-President', path: '/' },
    { src: 'images/team_photos/2021team/mike.jpg', text: 'Michael Tham', role: 'Treasurer', path: '/' },
    { src: 'images/team_photos/2021team/.jpg', text: 'Aarthi Krishnan', role: 'Secetary', path: '/' },
    { src: 'images/team_photos/2021team/steffi.jpg', text: 'Steffi Chang', role: 'Marketing Director', path: '/' },
    { src: 'images/team_photos/2021team/cris.jpg', text: 'Cristiana Bonifacio', role: 'Marketing Director', path: '/' },
    { src: 'images/team_photos/2021team/.jpg', text: 'Matthew Wong', role: 'Logistics Director', path: '/' },
    { src: 'images/team_photos/2021team/el.jpg', text: 'Elisabeth Chew', role: 'Logistics Director', path: '/' },
    { src: 'images/team_photos/2021team/.png', text: 'Victoria Cheah', role: 'External Director', path: '/' },
    { src: 'images/team_photos/2021team/.png', text: 'Charlene Medina', role: 'External Director', path: '/' },
    { src: 'images/team_photos/2021team/mar.png', text: 'Mariena Teo', role: 'Events Director', path: '/' },
    { src: 'images/team_photos/2021team/kyle.png', text: 'Kyle Azarae', role: 'Events Director', path: '/' },
    { src: 'images/team_photos/2021team/.jpg', text: 'Jamey Laoroekutai', role: 'Events Coordinator', path: '/' },
    { src: 'images/team_photos/2021team/.png', text: 'Ria Harjani', role: 'Events Coordinator', path: '/' },
    { src: 'images/team_photos/2021team/.png', text: 'Kylie Ng', role: 'Events Coordinator', path: '/' },
    { src: 'images/team_photos/2021team/.png', text: 'Angela Yandrofski', role: 'Graphic Designer', path: '/' }
  ],
  2021: [
    // Data for 2021/2022 team
    { src: 'images/team_photos/2021team/keri.png', text: 'Keri Laoroekutai', role: 'President', path: '/' },
    { src: 'images/team_photos/2021team/bella.jpg', text: 'Christabella Tan', role: 'Vice President', path: '/' },
    { src: 'images/team_photos/2021team/alison.jpg', text: 'Alison Lin', role: 'Treasurer', path: '/' },
    { src: 'images/team_photos/2021team/dom.jpg', text: 'Dominic Chua', role: 'Secetary', path: '/' },
    { src: 'images/team_photos/2021team/steffi.jpg', text: 'Steffi Chang', role: 'Marketing Director', path: '/' },
    { src: 'images/team_photos/2021team/cris.jpg', text: 'Cristiana Bonifacio', role: 'Marketing Director', path: '/' },
    { src: 'images/team_photos/2021team/josh.jpg', text: 'Joshua Teo', role: 'Logistics Director', path: '/' },
    { src: 'images/team_photos/2021team/el.jpg', text: 'Elisabeth Chew', role: 'Logistics Director', path: '/' },
    { src: 'images/team_photos/2021team/sarah.png', text: 'Sarah Ong', role: 'External Director', path: '/' },
    { src: 'images/team_photos/2021team/ella.png', text: 'Ella Cheah', role: 'External Director', path: '/' },
    { src: 'images/team_photos/2021team/gauri.png', text: 'Gauri Gupta', role: 'Admin Director', path: '/' },
    { src: 'images/team_photos/2021team/carissa.jpeg', text: 'Carissa Chua', role: 'Events Director', path: '/' },
    { src: 'images/team_photos/2021team/mar.png', text: 'Mariena Teo', role: 'Events Director', path: '/' },
    { src: 'images/team_photos/2021team/mike.jpg', text: 'Michael Tham', role: 'Events Coordinator', path: '/' },
    { src: 'images/team_photos/2021team/kyle.png', text: 'Kyle Azarae', role: 'Events Coordinator', path: '/' },
    { src: 'images/team_photos/2021team/lizzy.png', text: 'Lizzie Ou', role: 'Graphic Designer', path: '/' }
  ],
};


function Team() {

  const [year, setYear] = useState(2021);

  const handleYearChange = (selectedYear) => {
    setYear(selectedYear);
  };

  return (
    <div className='team-section' id="team">
      <h1 className='team-h1'>
        Our Executive Teams!</h1>
        <button onClick={() => handleYearChange(2024)}>2024/2025</button>
        <button onClick={() => handleYearChange(2023)}>2023/2024</button>
        <button onClick={() => handleYearChange(2022)}>2022/2023</button>
        <button onClick={() => handleYearChange(2021)}>2021/2022</button>
      <div className='cards__container' data-aos="zoom-in-left" data-aos-duration="3200">
        <ul className='cards__items'>
          {teamData[year].map((member,index) => (
          <TeamItem
              key={index}
              src={member.src}
              text={member.text}
              role={member.role}
              path={member.path}
            />))}
            </ul>
       </div>
       </div>
  );
}

export default Team;
