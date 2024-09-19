
import mongoose from "mongoose";
const connectToDB=async()=>{
const connectURL="mongodb://localhost:27017";

mongoose
.connect(connectURL)
.then(()=>console.log("Auth database"))
.catch((e)=>console.log(e));
};
export default connectToDB;