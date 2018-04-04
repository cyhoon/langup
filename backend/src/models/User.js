module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: {
            field: 'email',
            type: DataTypes.STRING(50),
            primaryKey: true,
        },
        password: {
            field: 'password',
            type: DataTypes.STRING(300),
        },
        name: {
            field: 'name',
            type: DataTypes.STRING(40),
            allowNull: false,
        },
        profileImage: {
            field: 'profile_image',
            type: DataTypes.STRING(300),
            defaultValue: 'base.png',
        },
        introduce: {
            field: 'introduce',
            type: DataTypes.STRING(500),
            defaultValue: '',
        },
        createDate: {
            field: 'create_date',
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    }, {
        tableName: 'user',
        timestamps: false,
    });

    return User;
}
