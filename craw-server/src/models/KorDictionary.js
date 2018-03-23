// word( primary key, varchar(500))
module.exports = (sequelize, DataTypes) => {
    const KorDictionary = sequelize.define('KorDictionary', {
        word: {
            field: 'word',
            type: DataTypes.STRING(500),
            primaryKey: true,
        }
    }, {
        tableName: 'kor_dictionary',
        timestamps: false,
    });

    KorDictionary.associate = (models) => { // Define associate models.
        // models.KorDictionary.hasMany(models.MeanDictionary, { as: 'meanDictionary', foreignKey: 'kor_word' });
    };

    return KorDictionary;
}