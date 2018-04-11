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
            type: DataTypes.DATE,
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

    return UserBook;
}
