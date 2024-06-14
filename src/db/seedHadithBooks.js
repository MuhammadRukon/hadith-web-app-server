const HadithBook = require("./../models/hadithBooksModel");

const seedHadithBooks = async () => {
  const hadithBooks = [
    {
      book_name: {
        en: "Sahih Bukhari",
        bn: "সহিহ বুখারী"
      },
      hadith_range: {
        en: 7563,
        bn: "৭৫৬৩"
      }
    },
    {
      book_name: {
        en: "Sahih Muslim",
        bn: "সহিহ মুসলিম"
      },
      hadith_range: {
        en: 7453,
        bn: "৭৪৫৩"
      }
    },
    {
      book_name: {
        en: "Sunan An-Nasa'i",
        bn: "সুনানে আন-নাসায়ী"
      },
      hadith_range: {
        en: 5758,
        bn: "৫৭৫৮"
      }
    },
    {
      book_name: {
        en: "Sunan Abu Dawud",
        bn: "সুনানে আবু দাউদ"
      },
      hadith_range: {
        en: 5274,
        bn: "৫২৭৪"
      }
    },
    {
      book_name: {
        en: "Jame' at-Tirmidhi",
        bn: "জামে' আত-তিরমিজি"
      },
      hadith_range: {
        en: 3956,
        bn: "৩৯৫৬"
      }
    },
    {
      book_name: {
        en: "Sunan Ibn Majah",
        bn: "সুনানে ইবনে মাজাহ"
      },
      hadith_range: {
        en: 4341,
        bn: "৪৩৪১"
      }
    }
  ];

  try {
    await HadithBook.deleteMany(); //deletes all existing data
    // await HadithBook.insertMany(hadithBooks); //inserts default data
    console.log("Hadith books seeded successfully");
  } catch (error) {
    console.error("Error seeding hadith books:", error);
  }
};

module.exports = seedHadithBooks;