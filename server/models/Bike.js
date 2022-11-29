const { Model, DataTypes}= require('sequilize')


Bike.init({

    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },

    brand:{
        type: DataTypes.STRING,
        allowNull: false,

    }

    Rear_Travel:{
         type: DataTypes.INTEGER,
         allowNull: false,
    },

    Fork:{
        type: DataTypes.STRING,
        allowNull: false,

    }

    Front_Trave:{
        type: DataTypes.INTEGER,
        allowNull: false,

    },

    Headset:{
        type: DataTypes.STRING,
        allowNull: false,

    }

    Shifters:{
        type: DataTypes.STRING,
        allowNull: false,

    },

    ISCG_TABS:{
        type: DataTypes.STRING,
        allowNull: false,

    },

    Crankset:{
        type: DataTypes.STRING,
        allowNull: false,

    },

    Chainring_Size:{
        type: DataTypes.INTEGER,
        allowNull: false,

    },

    Crank_Arm_Lenght:{
        type: DataTypes.INTEGER,
        allowNull: false,

    },

    Bottom_Bracket:{
        type: DataTypes.STRING,
        allowNull: false,

    },

    Cassette:{
        type: DataTypes.STRING,
        allowNull: false,
    },

    Chain:{
        type: DataTypes.STRING,
        allowNull: false,
    },

    Brakeset:{
        type: DataTypes.STRING,
        allowNull: false,
    },

    Rotor:{
        type: DataTypes.STRING,
        allowNull: false,
    },

    Handlebar:{
        type: DataTypes.STRING,
        allowNull: false,
    },

    Grips:{
        type: DataTypes.STRING,
        allowNull: false,
    },

    Stem_Lenght:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    Saddle:{
        type: DataTypes.STRING,
        allowNull: false,
    },

    Seatpost:{
        type: DataTypes.STRING,
        allowNull: false,
    },

    Wheelset:{
        type: DataTypes.STRING,
        allowNull: false,
    },

    Hubs:{
        type: DataTypes.STRING,
        allowNull: false,
    },

    Tire_Clearance:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    Manufacturer_Warranty:{
        type: DataTypes.STRING,
        allowNull: false,
    }

})

module.exports= Bike