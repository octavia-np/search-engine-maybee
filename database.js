var websitesDB = [
    { title: "Example Website", description: "This is an example website with some content." },
    { title: "Another Website", description: "Another example website for testing purposes." }
  ];
  
  var articlesDB = [
    { title: "Introduction to JavaScript", description: "Learn the basics of JavaScript programming language." },
    { title: "HTML5 and CSS3 Fundamentals", description: "A beginner's guide to HTML5 and CSS3." }
  ];
  
  var productsDB = [
    { title: "Laptop", description: "A powerful laptop with high-performance specifications." },
    { title: "Smartphone", description: "The latest smartphone model with advanced features." }
  ];
  
  var booksDB = [
    { title: "The Great Gatsby", description: "A classic novel by F. Scott Fitzgerald." },
    { title: "To Kill a Mockingbird", description: "A Pulitzer Prize-winning novel by Harper Lee." }
  ];
  
  var moviesDB = [
    { title: "The Shawshank Redemption", description: "A powerful drama film directed by Frank Darabont." },
    { title: "The Godfather", description: "An American crime film directed by Francis Ford Coppola." }
  ];
  
  // Function to perform search in a given database
  function searchInDatabase(database, query) {
    var results = [];
    for (var i = 0; i < database.length; i++) {
      if (database[i].title.toLowerCase().includes(query.toLowerCase()) ||
          database[i].description.toLowerCase().includes(query.toLowerCase())) {
        results.push(database[i]);
      }
    }
    return results;
  }
  
  // Function to get storage information for a given database
  function getStorageInfo(databaseName) {
    var storageInfo = {
      "Websites": { storage: "100 MB" },
      "Articles": { storage: "80 MB" },
      "Products": { storage: "120 MB" },
      "Books": { storage: "90 MB" },
      "Movies": { storage: "150 MB" }
    };
    return storageInfo[databaseName];
  }
  
  // Exporting databases and related functions
  export { websitesDB, articlesDB, productsDB, booksDB, moviesDB, searchInDatabase, getStorageInfo };
  