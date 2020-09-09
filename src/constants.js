import globe from './globe.svg';
import phone from './phone.svg';
import facebook from './facebook.svg';

const staticStrings = {
  govtLines: 'Government of India has awarded the ',
  awrded: '"National Energy Conservation Award 2018"',
  criFluidSys: 'C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS',
  heading: 'C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.',
  pumpVlaues: 'Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors',
  installedOver: 'INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. ',
  afterAwardLine: '. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.',
  informn: '                ',
};

const bulletPointsHeading = [
  `C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.`,
  'C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.',
]

const informatroyText = [
  { label: 'CHEMICALS & PROCESS' },
  { label: 'POWER' },
  { label: 'WATER & WASTE WATER' },
  { label: 'OILS & GAS' },
  { label: 'PHARMA' },
  { label: 'SUGARS & DISTILLERIES' },
  { label: 'PAPER & PULP' },
  { label: 'MARINE & DEFENCE' },
  { label: 'METAL & MINING' },
  { label: 'FOOD & BEVERAGE' },
  { label: 'PETROCHEMICAL & REFINERIES' },
  { label: 'SOLAR' },
  { label: 'BUILDING' },
  { label: 'HVAC' },
  { label: 'FIRE FIGHTING' },
  { label: 'AGRICULTURE & RESIDENTIAL' },
]

const footerData = [
  {
    icon: phone,
    mainLabel: 'Toll Free',
    subLabel: '1800 200 1234',
  },
  {
    icon: facebook,
    mainLabel: 'www.facebook.com/cripumps'
  },
  {
    icon: globe,
    mainLabel: 'www.crigroups.com'
  }
]
export {
  footerData,
  staticStrings,
  informatroyText,
  bulletPointsHeading,
};
