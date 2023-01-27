import bgFirst from '../public/workOne.png';
import bgSecond from '../public/workTwo.png';
import bgTheard from '../public/workThree.png';

export const costData = [
    {title: 'Plan 1', isPerTimeframe: false, price: 30, isMostPopular: false, programOptions:['Curabitur blandit tempus', 'Curabitur blandit tempus', 'Curabitur blandit tempus', 'Curabitur blandit tempus', 'Curabitur blandit tempus'] },
    {title: 'Plan 2', isPerTimeframe: true, price: 45, isMostPopular: true, programOptions:['Curabitur blandit tempus', 'Curabitur blandit tempus', 'Curabitur blandit tempus', 'Curabitur blandit tempus', 'Curabitur blandit tempus'] },
    {title: 'Plan 3', isPerTimeframe: true, price: 60, isMostPopular: false, programOptions:['Curabitur blandit tempus', 'Curabitur blandit tempus', 'Curabitur blandit tempus', 'Curabitur blandit tempus', 'Curabitur blandit tempus'] },
  ];

export const subHeaderData = [
    {title: 'Covid test', dots: true},
    {title: 'Health app', dots: true},
    {title: 'Supplements', dots: false},
  ];

export const cardData = [
    {id: 1, title: "Plan 1", subtitle: "View work out >", bgImg: bgFirst, shadowColor: "#6AFBC6"},
    {id: 2, title: "Plan 2", subtitle: "View work out >", bgImg: bgSecond, shadowColor: "#FFDE33"},
    {id: 3, title: "Plan 3", subtitle: "View work out >", bgImg: bgTheard,  shadowColor: "#16D2EC"},
  ];
  