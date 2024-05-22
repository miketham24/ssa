import React, {useState} from 'react';
import './Team.css';
import TeamItem from './TeamItem';

const teamData = {
  2024: [
    // Data for 2024/2025 team
    { src: 'images/team_photos/2022team/vic.jpg', text: 'Victoria Cheah', role: 'Co-President', path: '/' },
    { src: 'images/team_photos/2024team/matts2.jpg', text: 'Matthew Soh', role: 'Co-President', path: '/' },
    { src: 'images/team_photos/2023team/ym.png', text: 'Foo Yong Ming', role: 'Treasurer', path: '/' },
    { src: 'images/team_photos/2024team/alyssa.jpeg', text: 'Alyssa Tang', role: 'Secetary', path: '/' },
    { src: 'images/team_photos/2023team/py.jpg', text: 'Pinn Yee Scott', role: 'Marketing Director', path: '/' },
    { src: 'images/team_photos/2023team/zara.jpg', text: 'Zara Hassan', role: 'Marketing Director', path: '/' },
    { src: 'images/team_photos/2024team/nich.jpg', text: 'Nicholas Low', role: 'Logistics Director', path: '/' },
    { src: 'images/team_photos/2024team/jamey.jpg', text: 'Jamey Laoroekutai', role: 'External Director', path: '/' },
    { src: 'images/team_photos/2024team/bruno.jpg', text: 'Bruno Brett', role: 'External Director', path: '/' },
    { src: 'images/team_photos/2024team/daphne.jpg', text: 'Daphne Sng', role: 'Events Director', path: '/' },
  ],
  2023: [
    // Data for 2023/2024 team
    { src: 'images/team_photos/2022team/aarthi.JPG', text: 'Aarthi Krishnan', role: 'Co-President', path: '/' },
    { src: 'images/team_photos/2022team/mattw.JPG', text: 'Matthew Wong', role: 'Co-President', path: '/' },
    { src: 'images/team_photos/2021team/mike.jpg', text: 'Michael Tham', role: 'Treasurer', path: '/' },
    { src: 'images/team_photos/2022team/ria.jpg', text: 'Ria Harjani', role: 'Secetary', path: '/' },
    { src: 'images/team_photos/2022team/ang.jpg', text: 'Angela Yandrofski', role: 'Marketing Director', path: '/' },
    { src: 'images/team_photos/2023team/zara.JPG', text: 'Zara Hassan', role: 'Marketing Director', path: '/' },
    { src: 'images/team_photos/2023team/ise.JPG', text: 'Denise Ong', role: 'Social Media Coordinator', path: '/' },
    { src: 'images/team_photos/2023team/matts.JPG', text: 'Matthew Soh', role: 'Logistics Director', path: '/' },
    { src: 'images/team_photos/2023team/leo.JPG', text: 'Leopold Tse', role: 'Logistics Director', path: '/' },
    { src: 'images/team_photos/2023team/virg.png', text: 'Virginia Tung', role: 'Logistics Coordinator', path: '/' },
    { src: 'images/team_photos/2022team/vic.jpg', text: 'Victoria Cheah', role: 'External Director', path: '/' },
    { src: 'images/team_photos/2022team/char.JPG', text: 'Charlene Medina', role: 'External Director', path: '/' },
    { src: 'images/team_photos/2023team/ym.png', text: 'Foo Yong Ming', role: 'Outreach Coordinator', path: '/' },
    { src: 'images/team_photos/2021team/cris.JPG', text: 'Cristiana Bonifacio', role: 'Events Director', path: '/' },
    { src: 'images/team_photos/2021team/el.JPG', text: 'Elisabeth Chew', role: 'Events Director', path: '/' },
    { src: 'images/team_photos/2023team/py.JPG', text: 'Pinn Yee Scott', role: 'Events Coordinator', path: '/' },
    { src: 'images/team_photos/2023team/emma.JPG', text: 'Emma Lim', role: 'Events Coordinator', path: '/' },
    { src: 'images/team_photos/2021team/mar.png', text: 'Mariena Teo', role: 'Internal Director', path: '/' },
    { src: 'images/team_photos/2021team/car.JPG', text: 'Carissa Chua', role: 'Internal Director', path: '/' }
  ],
  2022: [
    // Data for 2022/2023 team
    { src: 'images/team_photos/2021team/josh.jpg', text: 'Joshua Teo', role: 'Co-President', path: '/' },
    { src: 'images/team_photos/2021team/car.JPG', text: 'Carissa Chua', role: 'Co-President', path: '/' },
    { src: 'images/team_photos/2021team/mike.jpg', text: 'Michael Tham', role: 'Treasurer', path: '/' },
    { src: 'images/team_photos/2022team/aarthi.JPG', text: 'Aarthi Krishnan', role: 'Secetary', path: '/' },
    { src: 'images/team_photos/2021team/steffi.jpg', text: 'Steffi Chang', role: 'Marketing Director', path: '/' },
    { src: 'images/team_photos/2021team/cris.jpg', text: 'Cristiana Bonifacio', role: 'Marketing Director', path: '/' },
    { src: 'images/team_photos/2022team/mattw.JPG', text: 'Matthew Wong', role: 'Logistics Director', path: '/' },
    { src: 'images/team_photos/2022team/el.JPG', text: 'Elisabeth Chew', role: 'Logistics Director', path: '/' },
    { src: 'images/team_photos/2022team/vic.jpg', text: 'Victoria Cheah', role: 'External Director', path: '/' },
    { src: 'images/team_photos/2022team/char.JPG', text: 'Charlene Medina', role: 'External Director', path: '/' },
    { src: 'images/team_photos/2021team/mar.png', text: 'Mariena Teo', role: 'Events Director', path: '/' },
    { src: 'images/team_photos/2021team/kyle.png', text: 'Kyle Azarae', role: 'Events Director', path: '/' },
    { src: 'images/team_photos/2024team/jamey.jpg', text: 'Jamey Laoroekutai', role: 'Events Coordinator', path: '/' },
    { src: 'images/team_photos/2022team/ria.JPG', text: 'Ria Harjani', role: 'Events Coordinator', path: '/' },
    { src: 'images/team_photos/2022team/ky.JPG', text: 'Kylie Ng', role: 'Events Coordinator', path: '/' },
    { src: 'images/team_photos/2022team/ang.JPG', text: 'Angela Yandrofski', role: 'Graphic Designer', path: '/' }
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
    { src: 'images/team_photos/2022team/el.jpg', text: 'Elisabeth Chew', role: 'Logistics Director', path: '/' },
    { src: 'images/team_photos/2021team/sarah.png', text: 'Sarah Ong', role: 'External Director', path: '/' },
    { src: 'images/team_photos/2021team/ella.png', text: 'Ella Cheah', role: 'External Director', path: '/' },
    { src: 'images/team_photos/2021team/gauri.png', text: 'Gauri Gupta', role: 'Admin Director', path: '/' },
    { src: 'images/team_photos/2021team/car.JPG', text: 'Carissa Chua', role: 'Events Director', path: '/' },
    { src: 'images/team_photos/2021team/mar.png', text: 'Mariena Teo', role: 'Events Director', path: '/' },
    { src: 'images/team_photos/2021team/mike.jpg', text: 'Michael Tham', role: 'Events Coordinator', path: '/' },
    { src: 'images/team_photos/2021team/kyle.png', text: 'Kyle Azarae', role: 'Events Coordinator', path: '/' },
    { src: 'images/team_photos/2021team/lizzy.png', text: 'Lizzie Ou', role: 'Graphic Designer', path: '/' }
  ],
};


function Team() {

  const [year, setYear] = useState(2024);
  const [selectedYear, setSelectedYear] = useState(2024);

  const handleYearChange = (selectedYear) => {
    setYear(selectedYear);
    setSelectedYear(selectedYear);
  };

  const renderTeamItems = (members) => {
    return members.map((member, index) => (
      <li className="cards__item" key={index}>
        <TeamItem
          src={member.src}
          text={member.text}
          role={member.role}
          path={member.path}
        />
      </li>
    ));
  };

  return (
    <div className='team-section' id="team">
      <h1 className='team-h1'>
        Our Executive Teams!</h1>
        <div className='yr_btn_style'>
        <button className={selectedYear === 2024 ? 'selected' : ''}onClick={() => handleYearChange(2024)}>2024/2025</button>
        <button className={selectedYear === 2023 ? 'selected' : ''}onClick={() => handleYearChange(2023)}>2023/2024</button>
        <button className={selectedYear === 2022 ? 'selected' : ''}onClick={() => handleYearChange(2022)}>2022/2023</button>
        <button className={selectedYear === 2021 ? 'selected' : ''} onClick={() => handleYearChange(2021)}>2021/2022</button>
        </div>
      <div className='cards__container' data-aos="zoom-in-left" data-aos-duration="3200">
        {/* <ul className='cards__items'>
          {teamData[year].map((member,index) => (
          <TeamItem
              key={index}
              src={member.src}
              text={member.text}
              role={member.role}
              path={member.path}
            />))}
            </ul> */}
          <ul className="cards__items">
          {renderTeamItems(teamData[year])}
        </ul>
       </div>
    </div>
  );
}

export default Team;
