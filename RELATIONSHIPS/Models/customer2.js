const mongoose = require('mongoose');
const {Schema} = mongoose;

main()
    .then(() => console.log("connection successful"))
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}


const orderSchema = new Schema({
    item: String,
    price: Number,
});



const customerSchema = new Schema({
    name: String,
    orders: [
        {
            type: Schema.Types.ObjectId,
            ref: "Order"
        }
    ]
});

// customerSchema.pre("findOneAndDelete", async () => {
//     console.log("PRE MIDDLEWARE");
// });

customerSchema.post("findOneAndDelete", async (customer) => {
    if(customer.orders.length) {
        let res = await Order.deleteMany({ _id: { $in: customer.orders }});
        console.log(res);
    }
});


const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

//Function
const findCustomer = async () => {
    let result = await Customer.find({}).populate("orders");
    console.log(result);
};

const addCust = async () => {
    let newCust = new Customer({
        name: "Karan Arjun"
    });

    let newOrder = new Order({
        item: "Burger", 
        price: 250
    });

    await newOrder.save();
    await newCust.save();

    console.log("added new customer");
};

const delCust = async () => {
    let data = await Customer.findByIdAndDelete('6787cf2e3da990335d279b9d');
    console.log(data);
}

// addCust();
delCust();


// const addOrders = async () => {
//     let res = await Order.insertMany([
//         {item: "Somosa", price: 12},
//         {item: "Chips", price: 10},
//         {item: "Chocolate", price: 40},
//     ]);
//     console.log(res);
// };

// addOrders(); 