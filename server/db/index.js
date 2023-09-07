import User from "./User.js";
import Movie from "./Movie.js";
import Genre from "./Genre.js";
import GenreWeight from "./GenreWeight.js";

// Relations
User.hasMany(GenreWeight, { foreignKey: "userId" });
GenreWeight.belongsTo(User, { foreignKey: "userId" });

Genre.hasMany(GenreWeight, { foreignKey: "genreId" });
GenreWeight.belongsTo(Genre, { foreignKey: "genreId" });

User.belongsToMany(Genre, { through: "UserGenres" });
Genre.belongsToMany(User, { through: "UserGenres" });

Movie.belongsToMany(Genre, { through: "MovieGenres" });
Genre.belongsToMany(Movie, { through: "MovieGenres" });

export { User, Movie, Genre, GenreWeight };
