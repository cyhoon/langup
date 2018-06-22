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
        models.UserBook.hasMany(models.UserWord, { as:'words', foreignKey: 'userBookIdx' });
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
            order: [
                ['createDate', 'DESC'],
            ],
            raw: true,
        });
    }

    UserBook.selectByVocabulary = (models, idx, userEmail) => {
        // return sequelize.query(`
        //     SELECT word, kor_word FROM user_word
        //     LEFT JOIN mean_dictionary on user_word.word = mean_dictionary.eng_word
        //     WHERE user_word.user_book_idx IN (
        //         SELECT idx FROM user_book
        //         WHERE user_book.idx = ${idx} AND user_book.user_email = '${userEmail}'
        //     );
        // `, {
        //     nested: false,
        //     model: models.UserWord,
        //     type: sequelize.QueryTypes.SELECT
        // });
        return UserBook.findOne({
            include: [
                {
                    // attributes: [
                    //     // [sequelize.literal(`(SELECT kor_word FROM mean_dictionary WHERE mean_dictionary.eng_word = userwords.word LIMIT 1)`), 'kor_words'],
                    //     'word',
                    //     'create_time',
                    // ],
                    // model: models.UserWord,
                    model: models.UserWord,
                    as: 'words',
                    order: [
                        ['create_time', 'DESC'],
                    ],
                }
            ],
            where: {
                idx,
                userEmail,
            },
            // order: [
            //     ['user_word.create_time', 'DESC']
            // ],
            // raw: true,
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
