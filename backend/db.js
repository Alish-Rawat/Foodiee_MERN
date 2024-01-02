const mongoose = require('mongoose');

const mongoURI = "mongodb://foodiee:1234567890@ac-dokwmsd-shard-00-00.awt0z3t.mongodb.net:27017,ac-dokwmsd-shard-00-01.awt0z3t.mongodb.net:27017,ac-dokwmsd-shard-00-02.awt0z3t.mongodb.net:27017/foodieemern?ssl=true&replicaSet=atlas-5se2xv-shard-0&authSource=admin&retryWrites=true&w=majority"
 
 
const mongoDB = async()=>{

   await mongoose.connect(mongoURI)

   console.log('connected');

   const fetchedData = await mongoose.connection.db.collection("food_items")

   fetchedData.find({}).toArray((err,data)=>{
    console.log(data);
  if(err) console.log(err)
  else console.log(data);

})
} 





// const conn = mongoose.createConnection(mongoURI)
// conn.on('connected', async(err,result) =>{
// if(err) console.log(err);
// else{
//   console.log('connected');
//   const fetchedData = await mongoose.connection.db.collection("food_items")
//   fetchedData.find({}).toArray(function(err,data){
//     if(err) console.log(err);
//     else console.log(data);
//   })
// }
// } );


module.exports = mongoDB