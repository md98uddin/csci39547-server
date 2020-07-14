const Student = require('../database/models').Students;
const Campus = require('../database/models').Campus;

const campusList = [
  {
    campus_name: "Baruch College",
    campus_address: "New York, NY",
    image_url: "https://www.cuny.edu/wp-content/uploads/sites/4/assets//09_09_2004_bar_vertical_01233.jpg",
    description: "Popular majors include Finance, Accounting, and Merchandising and Buying Operations.",
  },
  {
    campus_name: "Brooklyn College",
    campus_address: "Brooklyn, NY",
    image_url: "https://www.cuny.edu/wp-content/uploads/sites/4/2015/01/09_20_2006_brc_quad_06.jpg",
    description: "Popular majors include Psychology, Business, and Accounting.",
  },
  {
    campus_name: "Hunter College",
    campus_address: "New York, NY",
    image_url: "https://www.cuny.edu/wp-content/uploads/sites/4/assets//09_10_2004_htc_huntercampus_33.jpg",
    description: "Popular majors include Psychology, English, and Sociology.",
  },
  {
    campus_name: "Lehman College",
    campus_address: "Bronx, NY",
    image_url: "https://www.cuny.edu/wp-content/uploads/sites/4/assets//2004_lhc_lehmancampus_56.jpg",
    description: "Popular majors include Business, Sociology, and Hospital Management.",
  }

]

const studentList = [
  {
    first_name: "Charil",
    last_name: "Bromilow",
    email: "cbromilow0@theguardian.com",
    gpa: "3.5",
    CampusId: '2'
  }, {
    first_name: "Shalom",
    last_name: "Gotts",
    email: "sgotts1@skyrock.com",
    gpa: '3.1',
    CampusId: '2'
  }, {
    first_name: "Janna",
    last_name: "Rourke",
    email: "jrourke2@networksolutions.com",
    gpa: '3.7',
    CampusId: '3'
  }, {
    first_name: "Hestia",
    last_name: "Barajas",
    email: "hbarajas3@seattletimes.com",
    gpa: '3.9',
    CampusId: '2'
  }, {
    first_name: "Kaye",
    last_name: "Morris",
    email: "kmorris4@hubpages.com",
    gpa: '2.1',
    CampusId: 1
  }, {
    first_name: "Dukie",
    last_name: "Duce",
    email: "dduce5@stanford.edu",
    gpa: '2.9',
    CampusId: '1'
  }, {
    first_name: "Lydia",
    last_name: "Bolgar",
    email: "lbolgar6@google.com",
    gpa: '3.7',
    CampusId: '4'
  }, {
    first_name: "Sascha",
    last_name: "Hatherill",
    email: "shatherill7@soup.io",
    gpa: '2.4',
    CampusId: '3'
  }, {
    first_name: "Sam",
    last_name: "Stranaghan",
    email: "sstranaghan8@columbia.edu",
    gpa: '2.8',
    CampusId: '3'
  }
]

const seedDatabase = () => {
  return Campus.bulkCreate(campusList)
  .then(() => Student.bulkCreate(studentList))
}


module.exports = seedDatabase;