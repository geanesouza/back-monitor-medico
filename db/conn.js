const mongoose = require("mongoose");

async function main() {
    //await mongoose.connect("mongodb://localhost:27017/admin-monitor-medico");
    await mongoose.connect(process.env.CONNECTION_STRING);
    console.log("Conectado ao Mongoose...");

}

main().catch((err) => console.log(err));

module.exports = mongoose;