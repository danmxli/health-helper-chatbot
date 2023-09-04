const userConfigServices = require("../services/userConfigServices");

const getAllConfigData = async (req, res) => {
    try {
        const allConfigData = await userConfigServices.getAllConfigData();
        res.send({
            status: "OK",
            data: allConfigData
        });
    }
    catch (error) {
        throw error;
    }

}

const addNewConfig = async (req, res) => {
    const { body } = req;
    try {
        const newDoc = {
            name: body.name,
            prompt: body.prompt,
        };
        const newConfig = await userConfigServices.addNewConfig(newDoc);
        res.send({
            status: "OK",
            data: newConfig
        });
    }
    catch (error) {
        throw error;
    }
}

const deleteConfig = (req, res) => {
    const name = req.params.name;
    try {
        const updatedConfig = userConfigServices.deleteConfig(name);
        res.send({
            status: "OK",
            data: updatedConfig
        });
    }
    catch (error) {
        throw error;
    }

}

module.exports = {
    getAllConfigData,
    addNewConfig,
    deleteConfig
};