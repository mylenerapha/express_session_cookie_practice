const mongoose = require("mongoose");

module.exports.connect = async (DATABASE_URL) => {
    try {
        await mongoose.connect(DATABASE_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log("Database Connected Successful!");
    } catch (e) {
        console.log(e.message());
    }
}