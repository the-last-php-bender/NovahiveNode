'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Profiles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey:true,
        type: Sequelize.INTEGER
      },
      public_key: {
        type: Sequelize.STRING,
        allowNull: false,
       unique:true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      picture: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      role: {
        type: Sequelize.ENUM('Client','Freelancer'),
        allowNull: true,
      },
      rating: {
        type: Sequelize.FLOAT,
        allowNull: true,
        defaultValue:0
      },
      experience: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      skill: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      user_id:{
        type:Sequelize.INTEGER,
        allowNull:false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async  (queryInterface, Sequelize) => {
     await queryInterface.dropTable('Profiles');
  }
};
