const Student = require('../database/models').Students;
const Campus = require('../database/models').Campus;

const campusList = [
  {
    campus_name: "Brooklyn College",
    campus_address: "Brooklyn",
    image_url: "https://homepages.cae.wisc.edu/~ece533/images/fruits.png",
    description: "A college in Brooklyn",
  },
  {
    campus_name: "Another College",
    campus_address: "Brooklyn",
    image_url: "https://homepages.cae.wisc.edu/~ece533/images/cat.png",
    description: "Just quick dummy data",
  },
  {
    campus_name: "Also another College",
    campus_address: "Brooklyn",
    image_url: "https://homepages.cae.wisc.edu/~ece533/images/tulips.png",
    description: "A college somewhere",
  }
]

const studentList = [
  {
    first_name: "John",
    last_name: "Cena",
    email: "youcantseeme@wwe.com",
    gpa: "3.5",
    CampusId: "1",
  },
  {
    first_name: "Monkey D",
    last_name: "Luffy",
    email: "pirateking@931.com",
    gpa: "2.0",
    CampusId: "2",
    image_url: "https://homepages.cae.wisc.edu/~ece533/images/cat.png",
  },
  {
    first_name: "Giannis",
    last_name: "Antetokounmpo",
    email: "Milwaukee@bucks.com",
    gpa: "4.0",
    CampusId: "3",
  },
  {
    first_name: "John",
    last_name: "Smith",
    email: "hello@something.com",
    gpa: "3.6",
    CampusId: "1",
  }
]

const seedDatabase = () => {
  return Campus.bulkCreate(campusList)
  .then(() => Student.bulkCreate(studentList))
}


module.exports = seedDatabase;