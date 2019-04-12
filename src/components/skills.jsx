import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';

const doughnutdata = {
  labels: [
    "React", "CSS", "HTML", "Redux", "React Redux", "React Router", "Flex-box", "CSS Grid", "Material UI",
  ],
  datasets: [{
    data: [35, 10, 11, 10, 10, 10, 15, 7, 7],
    backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
    ],
    hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
    ]
  }]
};

const pieData = {
  labels: [
    "React", "CSS", "HTML", "Redux", "React Redux", "React Router", "Flex-box", "CSS Grid", "Material UI",
  ],
  datasets: [{
    data: [35, 10, 11, 10, 10, 10, 15, 7, 7],
    backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
    ],
    hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
    ]
  }]
};

const Skills = () => {

  return (
    <div className="charts" >
      <div>
        <Pie data={pieData} legend={false} />
      </div>
      <div>
        <Doughnut data={doughnutdata} legend={false} />
      </div>
      <div>
        <Pie data={pieData} legend={false} />
      </div>
    </div>
  );
}

export default Skills;
