const conn = require("./conn");
const { STRING, INTEGER, UUID, UUIDV4 } = conn.Sequelize;

const WatchedMovie = conn.define("watchedmovie", {
    id: {
        type: UUID,
        primaryKey: true,
        defaultValue: UUIDV4,
    },
    movieid: {
        type: INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    rating: {
        type: INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
});

module.exports = WatchedMovie;