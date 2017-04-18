const BookModel = require('../db/BookModel');

module.exports = class BookService {

  static addBook(userObject) {
    const user = new BookModel(userObject);
    return user.save().then(model => model.toObject());
  }

  static getAllBooks() {
    return BookModel.find({}).then((model) => {
      const books = model.map(arg => arg.toObject());
      return books;
    });
  }

  static initWithRandomData() {
    const genres = ["Arts &amp; Photography", "Biographies &amp; Memoirs", "Business &amp; Money", "Calendars", "Children's Books", "Christian Books &amp; Bibles", "Comics &amp; Graphic Novels", "Computers &amp; Technology", "Cookbooks, Food &amp; Wine", "Crafts, Hobbies &amp; Home", "Education &amp; Teaching", "Engineering &amp; Transportation", "Gay &amp; Lesbian", "Health, Fitness &amp; Dieting", "History", "Humor &amp; Entertainment", "Law", "Literature &amp; Fiction", "Medical Books", "Mystery, Thriller &amp; Suspense", "Parenting &amp; Relationships", "Politics &amp; Social Sciences", "Reference", "Religion &amp; Spirituality", "Romance", "Science &amp; Math", "Science Fiction &amp; Fantasy", "Self-Help", "Sports &amp; Outdoors", "Teen &amp; Young Adult", "Test Preparation", "Travel", "Ship to Belarus", "Paperback", "Hardcover", "Kindle Edition", "Large Print", "Audible Audio Edition", "Printed Access Code", "Digital Access Code", "Loose Leaf", "Audio CD", "Board Book", "Kindle Unlimited Eligible", "Penelope Ward", "Vi Keeland", "Sarah A. Denzil", "K.L. Slater", "Wizards RPG Team", "Corinne Michaels", "Prima Games", "First 100", "A Brit in the FBI", "Elements", "Commissario Guido Brunetti", "Detective Erika Foster", "D&amp;D Core Rulebook", "The Boudreaux Series", "English", "German", "French", "Spanish", "Italian", "Russian", "Japanese", "Free Shipping by Amazon", "Caldecott Medal", "Man Booker Prize", "National Book Award", "Newbery Medal", "The Pulitzer Prize", "Hugo &amp; Nebula Awards", "Eisner Award", "Frustration-Free Packaging", "Bargain Books", " &amp; Up", " &amp; Up", " &amp; Up", " &amp; Up", "Used", "New", "Collectible"];
    const authors = JSON.parse('[{"firstName":"Debera","lastName":"Ketterman"},{"firstName":"Emogene","lastName":"Clauson"},{"firstName":"Ronnie","lastName":"Hardt"},{"firstName":"Leticia","lastName":"Howton"},{"firstName":"Ruthann","lastName":"Riehle"},{"firstName":"Lorette","lastName":"Mcinturff"},{"firstName":"Kitty","lastName":"Bayliss"},{"firstName":"Andree","lastName":"Colin"},{"firstName":"Bari","lastName":"Doiron"},{"firstName":"Elizebeth","lastName":"Nedd"},{"firstName":"Janet","lastName":"Wurst"},{"firstName":"Pearlene","lastName":"Bucklin"},{"firstName":"Eulah","lastName":"Anwar"},{"firstName":"Kanisha","lastName":"Grose"},{"firstName":"Eloy","lastName":"Turrell"},{"firstName":"Sherika","lastName":"Netter"},{"firstName":"Brad","lastName":"Fellers"},{"firstName":"Darrick","lastName":"Doty"},{"firstName":"Fabiola","lastName":"Lamothe"},{"firstName":"Cathern","lastName":"Ramaker"},{"firstName":"Leoma","lastName":"Pacheco"},{"firstName":"Genia","lastName":"Spiller"},{"firstName":"Melodee","lastName":"Oles"},{"firstName":"Lavada","lastName":"Delozier"},{"firstName":"Gayle","lastName":"Kugler"},{"firstName":"Danita","lastName":"Dearborn"},{"firstName":"Alena","lastName":"Holt"},{"firstName":"Domonique","lastName":"Vacca"},{"firstName":"Melony","lastName":"Stocks"},{"firstName":"Kaitlyn","lastName":"Crass"},{"firstName":"Miriam","lastName":"Phillips"},{"firstName":"Marquerite","lastName":"Underdown"},{"firstName":"Jolene","lastName":"Jarrett"},{"firstName":"Neil","lastName":"Hyppolite"},{"firstName":"Gaylord","lastName":"Walther"},{"firstName":"Altha","lastName":"Kroeger"},{"firstName":"Danette","lastName":"Sweetser"},{"firstName":"Milford","lastName":"Phu"},{"firstName":"Vinnie","lastName":"Massengale"},{"firstName":"Taunya","lastName":"Wood"},{"firstName":"Somer","lastName":"Hartig"},{"firstName":"Cathie","lastName":"Musto"},{"firstName":"Shauna","lastName":"Luckett"},{"firstName":"Kenna","lastName":"Breazeale"},{"firstName":"Les","lastName":"Laskowski"},{"firstName":"Karole","lastName":"Neal"},{"firstName":"Jared","lastName":"Elwell"},{"firstName":"Cierra","lastName":"Coombs"},{"firstName":"Elanor","lastName":"Mccutchen"},{"firstName":"Erminia","lastName":"Mccrae"}]');
    for (let i = 0; i < 10000; i++) {
      const genreNumber = Math.floor(Math.random() * 5) + 3;
      const bookGenres = [];
      for (let i2 = 0; i2 < genreNumber; i2++) {
        bookGenres.push(genres[Math.floor(Math.random() * genres.length)]);
      }
      const author = authors[Math.floor(Math.random() * authors.length)];
      const title = 'Book number ' + i.toString();
      const object = {
        genres: bookGenres, author, title,
      };
      const book = BookModel(object);
      book.save();
    }
  }
};
