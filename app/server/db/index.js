const conn = require("./conn");
const User = require("./User");
const Genre = require("./Genre");
const WatchedMovie = require("./WatchedMovie");
const GenrePref = require("./GenrePref");

Genre.belongsTo(GenrePref);
GenrePref.belongsTo(User);
WatchedMovie.belongsTo(User);
User.hasMany(GenrePref);