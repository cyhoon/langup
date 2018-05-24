module.exports = (sequelize, DataTypes) => {
    const UserBook = sequelize.define('UserBook', {
        idx: {
            field: 'idx',
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            field: 'title',
            type: DataTypes.STRING(120),
            allowNull: false,
        },
        userEmail: {
            field: 'user_email',
            type: DataTypes.STRING(80),
            allowNull: false,
        },
        createDate: {
            field: 'create_date',
            type: DataTypes.DATEONLY,
            defaultValue: DataTypes.NOW,
        }
    }, {
        tableName: 'user_book',
        timestamps: false,
    });

    UserBook.associate = (models) => {
        models.UserBook.belongsTo(models.User, { foreignKey: 'userEmail' });
        models.UserBook.hasMany(models.UserWord, { foreignKey: 'userBookIdx' });
    }

    UserBook.selectByUserBookToday = (models, userEmail, nowDate) => {
        return UserBook.findOne({
            where: {
                userEmail,
                createDate: nowDate,
            },
            raw: true,
        });
    }

    UserBook.selectByAllVocabulary = (userEmail) => {
        return UserBook.findAll({
            where: {
                userEmail,
            },
            raw: true,
        });
    }

    UserBook.getUserBook = (idx, userEmail) => {
        return UserBook.findOne({
            where: {
                idx,
                userEmail,
            },
            raw: true
        });
    }

    return UserBook;
}
