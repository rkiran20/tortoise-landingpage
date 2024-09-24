import { faBookmark, faMessage } from "@fortawesome/free-regular-svg-icons";
import {
  faList,
  faZap,
  faPercent,
  faCreditCard,
  faBarChart,
  faPlus,
  faMinus,
  faRefresh,
  faFileText,
  faRepeat,
  faUserPlus,
  faUserMinus,
  faReceipt,
  faDollarSign,
  faClock,
  faCheck,
  faGear,
  faTableColumns,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import useScroll from "./components/useScroll";

export const myClientsData = [
  {
    id: "1",
    imageUrl:
      "https://www.tortoise.pro/images/image-removebg-preview-14-p-500.png",
  },
  {
    id: "2",
    imageUrl: "https://www.tortoise.pro/images/wishlinklogo-1-1.png",
  },
  {
    id: "3",
    imageUrl: "https://www.tortoise.pro/images/image-88-p-500.png",
  },
  {
    id: "4",
    imageUrl: "https://www.tortoise.pro/images/winth.png",
  },
  // {
  //   id: "5",
  //   imageUrl: "https://www.tortoise.pro/images/image-removebg-preview-28.png",
  // },
];

export const impactData = [
  {
    id: 1,
    text: "Partner Companies",
    number: "500",
  },
  {
    id: 2,
    text: "benefits Delivered",
    number: "$1000M",
  },
  {
    id: 3,
    text: "Employee Impacted",
    number: "1M",
  },
];

export const benefitsData = [
  {
    id: 1,
    headerLogo: "https://www.tortoise.pro/images/icon01.svg",
    heading: "Device Procurement",

    bodyParagraph:
      "Browse through our extensive catalogue of devices to purchase, activate and enjoy benefits up to 30%, and 0 cost EMIs.",
    paraPoints: [
      {
        icon: faList,
        paragraph: "Browse extensive catalogue",
      },
      {
        icon: faZap,
        paragraph: "Quick purchase and activation",
      },
      {
        icon: faPercent,
        paragraph: "Enjoy benefits up to 30%",
      },
      {
        icon: faCreditCard,
        paragraph: "0 cost EMIs available",
      },
    ],
  },
  {
    id: 2,
    headerLogo: "https://www.tortoise.pro/images/icon02.svg",
    heading: "Complete asset management",
    bodyParagraph:
      "Hassle free management of all company assets consolidated in a single place. Add, remove, allot and reallot devices with a single click.",
    paraPoints: [
      {
        icon: faBarChart,
        paragraph: "Consolidated overview",
      },
      {
        icon: faPlus,
        paragraph: "Add new devices easily",
      },
      {
        icon: faMinus,
        paragraph: "Remove outdated assets",
      },
      {
        icon: faRefresh,
        paragraph: "Reallocate with one click",
      },
    ],
  },
  {
    id: 3,
    headerLogo: "https://www.tortoise.pro/images/icon03.svg",
    heading: "Payroll and HRMS Integrations",
    bodyParagraph:
      "Manage employee eligibility, payroll changes, onboarding/off-boarding and asset transfers seamlessly through integrations with tools that you already use.",
    paraPoints: [
      {
        icon: faFileText,
        paragraph: "Manage employee eligibility",
      },
      {
        icon: faRepeat,
        paragraph: "Handle payroll changes",
      },
      {
        icon: faUserPlus,
        paragraph: "Streamline onboarding",
      },
      {
        icon: faUserMinus,
        paragraph: "Simplify off-boarding",
      },
    ],
  },
  {
    id: 4,
    headerLogo: "https://www.tortoise.pro/images/icon04.svg",
    heading: "Accounting reports",
    bodyParagraph:
      "Get Asset Recognition, GST Credit, Payslip Adjustment, and Reimbursement Reports within minutes.",
    paraPoints: [
      {
        icon: faFileText,
        paragraph: "Asset Recognition Reports",
      },
      {
        icon: faReceipt,
        paragraph: "GST Credit Reports",
      },
      {
        icon: faDollarSign,
        paragraph: "Payslip Adjustment Reports",
      },
      {
        icon: faClock,
        paragraph: "Reports ready within minutes",
      },
    ],
  },
];

export const awardsPoints = [
  {
    id: 1,
    icon: faCheck,
    text: "Data encryption at rest and in transit",
  },
  {
    id: 2,
    icon: faCheck,
    text: "Regular security audits and penetration testing",
  },
  {
    id: 3,
    icon: faCheck,
    text: "Strict access controls and authentication",
  },
];

export const testimonialsData = [
  {
    id: 1,
    imageUrl:
      "https://www.scorpion.co/cms/thumbnails/34/72x72/sub/26744/images/clients/hembree/josh-hembree.2301311419000.jpg",
    rating: 4,
    heading: "A Super Efficient Platform",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    name: "Name",
    position: "Position",
  },
  {
    id: 2,
    imageUrl:
      "https://www.scorpion.co/cms/thumbnails/34/72x72/sub/26744/images/clients/hembree/josh-hembree.2301311419000.jpg",
    rating: 4,
    heading: "A Super Efficient Platform",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    name: "Name",
    position: "Position",
  },
  {
    id: 3,
    imageUrl:
      "https://www.scorpion.co/cms/thumbnails/34/72x72/sub/26744/images/clients/hembree/josh-hembree.2301311419000.jpg",
    rating: 4,
    heading: "A Super Efficient Platform",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    name: "Name",
    position: "Position",
  },
  {
    id: 4,
    imageUrl:
      "https://www.scorpion.co/cms/thumbnails/34/72x72/sub/26744/images/clients/hembree/josh-hembree.2301311419000.jpg",
    rating: 4,
    heading: "A Super Efficient Platform",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    name: "Name",
    position: "Position",
  },
  {
    id: 5,
    imageUrl:
      "https://www.scorpion.co/cms/thumbnails/34/72x72/sub/26744/images/clients/hembree/josh-hembree.2301311419000.jpg",
    rating: 4,
    heading: "A Super Efficient Platform",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    name: "Name",
    position: "Position",
  },
  {
    id: 6,
    imageUrl:
      "https://www.scorpion.co/cms/thumbnails/34/72x72/sub/26744/images/clients/hembree/josh-hembree.2301311419000.jpg",
    rating: 4,
    heading: "A Super Efficient Platform",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    name: "Name",
    position: "Position",
  },
  {
    id: 7,
    imageUrl:
      "https://www.scorpion.co/cms/thumbnails/34/72x72/sub/26744/images/clients/hembree/josh-hembree.2301311419000.jpg",
    rating: 4,
    heading: "A Super Efficient Platform",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    name: "Name",
    position: "Position",
  },
  {
    id: 8,
    imageUrl:
      "https://www.scorpion.co/cms/thumbnails/34/72x72/sub/26744/images/clients/hembree/josh-hembree.2301311419000.jpg",
    rating: 4,
    heading: "A Super Efficient Platform",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    name: "Name",
    position: "Position",
  },
  {
    id: 9,
    imageUrl:
      "https://www.scorpion.co/cms/thumbnails/34/72x72/sub/26744/images/clients/hembree/josh-hembree.2301311419000.jpg",
    rating: 4,
    heading: "A Super Efficient Platform",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    name: "Name",
    position: "Position",
  },
  {
    id: 10,
    imageUrl:
      "https://www.scorpion.co/cms/thumbnails/34/72x72/sub/26744/images/clients/hembree/josh-hembree.2301311419000.jpg",
    rating: 4,
    heading: "A Super Efficient Platform",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    name: "Name",
    position: "Position",
  },
  {
    id: 11,
    imageUrl:
      "https://www.scorpion.co/cms/thumbnails/34/72x72/sub/26744/images/clients/hembree/josh-hembree.2301311419000.jpg",
    rating: 4,
    heading: "A Super Efficient Platform",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    name: "Name",
    position: "Position",
  },
  {
    id: 12,
    imageUrl:
      "https://www.scorpion.co/cms/thumbnails/34/72x72/sub/26744/images/clients/hembree/josh-hembree.2301311419000.jpg",
    rating: 4,
    heading: "A Super Efficient Platform",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    name: "Name",
    position: "Position",
  },
];

export const overview = [
  {
    id: 1,
    icon: faCheck,
    text: "Founders with a vision",
  },
  {
    id: 2,
    icon: faCheck,
    text: "Strategic CFOs",
  },
  {
    id: 3,
    icon: faCheck,
    text: "HR leaders driving change",
  },
];

export const services = [
  {
    id: 1,
    icon: faTableColumns,
    text: "Stackable benefits upto 30%",
    paragraph:
      "Purchase any device of your choice and get amazing benefits of upto 30% extra.",
  },
  {
    id: 2,
    icon: faGear,
    text: "No cost EMIs",
    paragraph:
      "Enjoy your benefits by getting your device now and paying overtime via salary sacrifice.",
  },
  {
    id: 3,
    icon: faMessage,
    text: "Access to a stack of benefits",
    paragraph:
      "Save tax by claiming your other benefits like HRA, LTA, food allowances and so on.",
  },
];

export const offerData = [
  {
    id: 1,
    icon: faBookmark,
    Header: "Employee App",
    Description: "Device lifecycle management",
    points: [
      "Request devices based on employer policy and eligibility criteria.",
      "Manage lease payments & reimbursements.",
      "Create service requests.",
      "Request ownership transfer at any point (exit or end of lease).",
      "Employer mobile device management.",
    ],
  },
  {
    id: 2,
    icon: faGlobe,
    Header: "Employer Dashboard",
    Description: "Complete program management",
    points: [
      "Set and manage company device policies and employee eligibility.",
      "End to end asset management.",
      "Manage integrations with HRMS and payroll systems.",
      "Downloadable reports for lease invoices, asset accounting, tax accounting.",
      "Manage employee adoption and engagement.",
    ],
  },
];
