const { default: mongoose } = require("mongoose");

const hadiths = [
  {
    text: {
      bn: "আমি ‘উমর ইব্‌নুল খাত্তাব (রাঃ)-কে মিম্বারের উপর দাঁড়িয়ে বলতে শুনেছিঃ আ…",
      en: "'I heard 'Umar Ibn al-Khattab (may Allah be pleased with him) standing …",
      ar: " حَدَّثَنَا الْحُمَيْدِيُّ عَبْدُ اللَّهِ بْنُ الزُّبَيْرِ، قَالَ حَدَ…",
    },
    authenticity: {
      bn: "সহিহ",
      en: "Sahih",
    },
    narrator: {
      bn: "আলক্বামাহ ইব্‌নু ওয়াক্কাস আল-লায়সী (রহঃ)",
      en: "Alqamah ibn Waqqas al-Laysi (RA)",
    },
    colorCode: "#008000",
    chapter_id: "66edb2c84e8b5147df2dcc00",
    book_id: "66edb2c24e8b5147df2dcbfc",
    subject_id: "66edb2d34e8b5147df2dcc04",
  },
  {
    text: {
      bn: "হারিস ইব্‌নু হিশাম (রাঃ) আল্লাহর রসূল (সাল্লাল্লাহু ‘আলাইহি ওয়া সাল্লা…",
      en: "'Harith Ibn Hisham (RA) asked the Messenger of Allah (PBUH), 'O Messeng…",
      ar: " حَدَّثَنَا عَبْدُ اللَّهِ بْنُ يُوسُفَ، قَالَ أَخْبَرَنَا مَالِكٌ، عَ…",
    },
    authenticity: {
      bn: "সহিহ",
      en: "Sahih",
    },
    narrator: {
      bn: "উম্মুল মু’মিনীন ‘আয়িশা (রাঃ)",
      en: "Umm al-Mu'minin 'Aisha (RA)",
    },
    colorCode: "#008000",
    chapter_id: "66edb2c84e8b5147df2dcc00",
    book_id: "66edb2c24e8b5147df2dcbfc",
    subject_id: "66edb2d34e8b5147df2dcc04",
  },
];

module.exports = hadiths;
