module.exports = (sequelize, DataTypes) => {
    const UserWord = sequelize.define('UserWord', {
        idx: {
            field: 'idx',
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        userBookIdx: {
            field: 'user_book_idx',
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        word: {
            field: 'word',
            type: DataTypes.STRING(500),
            allowNull: false,
        },
        createTime: {
            field: 'create_time',
            type: DataTypes.TIME,
            defaultValue: DataTypes.NOW,
        },
    }, {
        tableName: 'user_word',
        timestamps: false,
    });

    UserWord.associate = (models) => {
        models.UserWord.belongsTo(models.UserBook, { foreignKey: 'userBookIdx' });
    }

    return UserWord;
}
