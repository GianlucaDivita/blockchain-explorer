
import mongoose from "mongoose";
const Schema = mongoose.Schema;


let connectionString = "mongodb://mongo:27017/blockchain-explorer";;
mongoose.connect(connectionString);

//connection to mongoose
mongoose
 .connect(connectionString, { useNewUrlParser: true } )
 .then( () => { console.log("Mongoose connected successfully to Mongo DB"); },
   error => { console.log("Mongoose could not connected to database: " + error); }
 );

 const transactionSchema = new Schema({
    source: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    amount: {
      type:  Number,
      required: true
    },
    status: {
      type: Boolean,
      required: true
    },
    gasUsed: {
      type: Number,
      required: true
    },
    receiptHash: {
      type: String,
      required: true
    },
}, { timestamps: true })

const Transaction = mongoose.model('Transaction', transactionSchema);


Transaction.insertMany([
    {
        source: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
        destination: '0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC',
        amount: 100,
        status: true,
        gasUsed: 21000,
        receiptHash: '0xd9ae90073a2285d94ba419598e37b0b37206ba9ac54a09c45b5d3b6bab30a8fb'
      },{
        source: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
        destination: '0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC',
        amount: 120,
        status: true,
        gasUsed: 21000,
        receiptHash: '0xd9ae90073a2285d94ba419598e37b0b37206ba9ac54a09c45b5d3b6bab30a8fb'
      },{
        source: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
        destination: '0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC',
        amount: 180,
        status: true,
        gasUsed: 21000,
        receiptHash: '0xd9ae90073a2285d94ba419598e37b0b37206ba9ac54a09c45b5d3b6bab30a8fb'
      }

]).then(function(){
    console.log("Transaction data inserted")  // Success
}).catch(function(error){
    console.log(`Error loading Transaction data`)      // Failure
});

export default Transaction;

