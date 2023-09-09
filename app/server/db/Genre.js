const conn = require('./conn');
const { STRING, UUID, UUIDV4 } = conn.Sequelize;

const Genre = conn.define("genre", {
    id: {
        type: UUID,
        primaryKey: true,
        defaultValue: UUIDV4,
    },
    name: {
        type: STRING,
        allowNull: false,
        unique: true,
    }
});

module.exports = Genre;