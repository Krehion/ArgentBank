const mongoose = require("mongoose");

const databaseUrl = process.env.MONGODB_URI || "mongodb://mongo:27017/argentBank";

module.exports = async () => {
	try {
		await mongoose.connect(databaseUrl, { useNewUrlParser: true, useUnifiedTopology: true });
		console.log("✅ Database successfully connected");
	} catch (error) {
		console.error(`❌ Database Connectivity Error: ${error}`);
		throw new Error(error);
	}
};
