const Student = require('../database/models').Students;
const Campus = require('../database/models').Campus;

const campusList = [
  {
    college_name: "Brooklyn College",
    college_address: "Brooklyn",
    image_url: "https://homepages.cae.wisc.edu/~ece533/images/fruits.png",
    description: "A college in Brooklyn",
  },
  {
    college_name: "Another College",
    college_address: "Brooklyn",
    image_url: "https://homepages.cae.wisc.edu/~ece533/images/cat.png",
    description: "Just quick dummy data",
  },
  {
    college_name: "Also another College",
    college_address: "Brooklyn",
    image_url: "https://homepages.cae.wisc.edu/~ece533/images/tulips.png",
    description: "A college somewhere",
  }
]

const studentList = [
  {
    first_name: "John",
    last_name: "Cena",
    email: "youcantseeme@wwe.com",
    CampusId: "1",
  },
  {
    first_name: "Monkey D",
    last_name: "Luffy",
    email: "pirateking@931.com",
    CampusId: "2",
  },
  {
    first_name: "Giannis",
    last_name: "Antetokounmpo",
    email: "Milwaukee@bucks.com",
    CampusId: "3",
  },
  {
    first_name: "John",
    last_name: "Smith",
    email: "hello@something.com",
    CampusId: "1",
  }
]

const seedDatabase = () => {
  return Campus.bulkCreate(campusList)
  .then(() => Student.bulkCreate(studentList))
}


module.exports = seedDatabase;