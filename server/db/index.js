const User = require("./User");
const Movie = require("./Movie");
const Genre = require("./Genre");
const GenreWeight = require("./GenreWeight");

// Relations
User.hasMany(GenreWeight, { foreignKey: "userId" });
GenreWeight.belongsTo(User, { foreignKey: "userId" });

Genre.hasMany(GenreWeight, { foreignKey: "genreId" });
GenreWeight.belongsTo(Genre, { foreignKey: "genreId" });

User.belongsToMany(Genre, { through: "UserGenres" });
Genre.belongsToMany(User, { through: "UserGenres" });

Movie.belongsToMany(Genre, { through: "MovieGenres", as: "movieGenres" });
Genre.belongsToMany(Movie, { through: "MovieGenres", as: "genreMovies" });

module.exports = {
  User,
  Movie,
  Genre,
  GenreWeight,
};
