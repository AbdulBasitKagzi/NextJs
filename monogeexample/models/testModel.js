import mongoose, { model, Schema } from "mongoose";

const testSchema = new Schema({
    name: {
        type: String
    }
})

export const Test = mongoose.models.Test || model('Test', testSchema)