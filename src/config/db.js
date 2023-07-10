import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

const connect = async () => {
    const mongod = await MongoMemoryServer.create();
    const getUri = mongod.getUri();

    const db = await mongoose.connect(getUri);
    console.log(`Database Connected Successfully ✨`);
    return db;
}

export { connect };