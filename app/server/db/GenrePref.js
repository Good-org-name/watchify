const conn = require('./conn');
const { FLOAT, UUID, UUIDV4 } = conn.Sequelize;


const GenrePref = conn.define("genrepref", {
    id: {
        type: UUID,
        primaryKey: true,
        defaultValue: UUIDV4,
    },
    weight: {
        type: FLOAT,
        allowNull: false,
        defaultValue: 0,
        validate: {
            min: 0,
            max: 1,
        }
    },
});

module.exports = GenrePref;