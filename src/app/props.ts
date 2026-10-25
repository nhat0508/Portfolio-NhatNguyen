export type SocialNetworkType = 'linkedin' | 'github';
export interface ExperienceItem {
  time: string;
  company: string;
  companyURL?: string;
  location: string;
  title: string;
  startDate: string;
  endData?: string;
  companyLogo?: string;
  content: {
    intro: string;
    list: string[];
    stack?: string[];
  };
  link?: {
    url: string;
    text: string;
  }[];
}

export const SOCIAL_NETWORK_LINKS: Record<SocialNetworkType, string> = {
  linkedin: 'https://www.linkedin.com/in/minhnhatnguyen0508/',
  github: 'https://github.com/nhat0508',
};

export const techStacks: string[] = [
  'Siemens TIA Portal',
  'Python',
  'TwinCAT Beckhoff',
  'PLC Programming',
  'HMI Design',
  'EPLAN',
  'SolidEdge',
  'MATLAB',
  'Simulink',
];

export const experienceProps: ExperienceItem[] = [
  {
    time: 'March 2026 - June 2026',
    startDate: '2026-3-12',
    company: 'Seinäjoki University of Applied Sciences',
    companyURL: 'https://www.seamk.fi',
    location: 'Full-time | Seinäjoki, Finland',
    title: 'Intern',
    companyLogo: '/seamk_logo.jpg',
    content: {
      intro:
        'Main duties:',
      list: [
        'Development of a user interface application for a multi-camera system.',
        'Software testing and documentation.',
        'Collection of image datasets for photogrammetric experiments.',
        'Collection of reference measurement data using a 3D profile scanner and RealityScan software.',
        'Processing and analysis of measurement and experimental data.',
        'Preparation of technical reports related to the assigned tasks.',
      ],
      stack: [
        'Photogrammetry',
        'Python',
        'Microsoft Office',
        'Microsoft Teams',
        'Git'
      ],
    },
    
  },
];

export interface ProjectItem {
  title: string;
  description: string;
  stack: string[];
  demoUrl?: string;
  url: string;
  image: string;
}

export const personalProjects: ProjectItem[] = [
    {
  title: 'Color Mixing & Bottle Filling Control System',
  description:
    'Simulated batch process for recipe-based color mixing and bottle filling using Siemens S7-1500 and WinCC Runtime Advanced. Features manual/automatic operation, recipe selection, timed dosing and mixing, conveyor handling, capping, and tank washing.',
  stack: [
    'Siemens S7-1500',
    'SCADA',
    'WinCC Runtime Advanced',
    'VBScript',
  ],
  url: 'https://github.com/nhat0508/color-mixing-filling',
  demoUrl: 'https://youtu.be/swesyQsCNtE',
  image: '/color_mixing_filling.png',
},
  {
    title: "Nhat Nguyen's Portfolio",
    description:
      'Personal portfolio website showcasing  my diverse skillset, with a collection of projects and work experiences.',
    stack: ['Next.js', 'Tailwind CSS', 'Vercel'],
    url: '',
    image: '/Portfolio_img.png',
  },
  {
    title: 'Multi Camera GUI',
    description:
      'A centralized industrial camera management and control system supporting both Basler and Hikrobot camera series. The project provides Live View capabilities, lens calibration, synchronized photo/video capture, and transmission bandwidth optimization.',
    stack: ['Pyside 6', 'GenIcam', '3D reconstruction', 'Multi Threading', 'Python'],
    url: 'https://github.com/nhat0508/SEAMKMultiCameraGUI',
    image: '/multi_camera_gui.png',
  },
  {
    title: 'NC Machine Control System',
    description:
      'Multi-axis CNC machine with TIA Portal PLC, G-code processing, axis interpolation (X/Y/Z), WinCC SCADA simulation, manual/jog/auto modes, real-time feedrate override..',
    stack: ['TwinCAT 3', 'PLC Motion Control', 'G-code Processing', 'React.js','Node.js', 'WebSocket'],
    url: 'https://github.com/nhat0508/NC-Machine-Control-System',
    image: '/nc_machine.png',
  },
  {
    title: 'Identification Station',
    description:
      'PLC-based identification station using modular logic blocks for material detection and sorting. Features multiple industrial sensors and HMI touchscreen interface for manual/automatic operation.',
    stack: ['TIA Portal', 'Siemens S7-1500 PLC', 'Express.js', 'HMI Design', 'Industrial Sensors'],
    url: 'https://github.com/nhat0508/Siemens_PLC_Identification_Station',
    image: '/id_station.png',
  },
  {
    title: 'Conveyor Station',
    description:
      'Automated conveyor system with PLC logic for motor control, cylinder actuators, and safety interlocks. Includes reference run sequence and HMI interface for operation control.',
    stack: ['TIA Portal', 'Siemens S7-1500 PLC', 'HMI Design', 'Inductive and Capacitive Sensors'],
    url: 'https://github.com/nhat0508/Siemens-PLC-Conveyor-Station',
    image: '/conveyor.png',
  },
];
