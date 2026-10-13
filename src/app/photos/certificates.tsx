// src/data/certificates.ts

export interface ICertificate {
    id: string;
    title: string;
    issuer: string;
    date: string;
    imageUrl: string;
    certificateUrl: string;
  }
  
  export const certificates: ICertificate[] = [
    {
      id: '1',
      title: "Internship at SeAMK's Robotic Lab",
      issuer: 'Seinäjoki University of Applied Sciences',
      date: 'August 2026',
      imageUrl: 'intern_seamk.png',
      certificateUrl: 'https://www.linkedin.com/in/minhnhatnguyen0508/overlay/Certifications/259856567/treasury/?profileId=ACoAAEFnXpgBUkgSYtmF378MijAuDL6DA3tSLMo',
    },
    // Add more certificates as needed
  ];
  