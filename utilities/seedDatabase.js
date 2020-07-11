const Student = require('../database/models').Students;
const Campus = require('../database/models').Campus;

const seedDatabase = async () => {
  await Promise.all([
    // For campuses
    Campus.create({
      college_name: "Brooklyn College",
      college_address: "Brooklyn",
      image_url: "https://homepages.cae.wisc.edu/~ece533/images/fruits.png",
      description: "A college in Brooklyn",
    }),
    Campus.create({
        college_name: "Another College",
        college_address: "Brooklyn",
        image_url: "https://homepages.cae.wisc.edu/~ece533/images/cat.png",
        description: "Just quick dummy data",
      }),
      Campus.create({
        college_name: "Also another College",
        college_address: "Brooklyn",
        image_url: "https://homepages.cae.wisc.edu/~ece533/images/tulips.png",
        description: "A college somewhere",
      }),

    //For students
    Student.create({
        first_name: "John",
        last_name: "Cena",
        email: "youcantseeme@wwe.com",
        CampusId: "1",
      }),
    Student.create({
        first_name: "Monkey D",
        last_name: "Luffy",
        email: "pirateking@931.com",
        CampusId: "2",
      }),
    Student.create({
        first_name: "John",
        last_name: "Smith",
        email: "hello@something.com",
        CampusId: "1",
      }),
    Student.create({
        first_name: "Giannis",
        last_name: "Antetokounmpo",
        email: "Milwaukee@bucks.com",
        CampusId: "3",
      }),
  ]);
};

module.exports = seedDatabase;