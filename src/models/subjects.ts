import mongoose,{Schema} from "mongoose";



const subjectSchema = new Schema({
    name:String,
    author:String,
    type:String,
    description:String
})



const subject = mongoose.models.subjects || mongoose.model('subjects',subjectSchema)
export default subject;