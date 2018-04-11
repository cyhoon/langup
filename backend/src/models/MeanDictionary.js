// idx ( auto Increment, integer , primary key )	
// word ( varchar(500) )			
// mean_word( varchar(500) )
module.exports = (sequelize, DataTypes) => {
    const MeanDictionary = sequelize.define('MeanDictionary', {
        idx: {
            field: 'idx',
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,  
        },
        eng_word: {
            field: 'eng_word',
            type: DataTypes.STRING(500),
            allowNull: false,
        },
        kor_word: {
            field: 'kor_word',
            type: DataTypes.STRING(500),
            allowNull: false,
        },
    }, {
        tableName: 'mean_dictionary',
        timestamps: false,
    });

    MeanDictionary.associate = (models) => { // Define associate models.
        models.MeanDictionary.belongsTo(models.EngDictionary, { foreignKey: 'eng_word' });
        // models.MeanDictionary.belongsTo(models.KorDictionary, { foreignKey: 'kor_word' });
    };

    return MeanDictionary;
}