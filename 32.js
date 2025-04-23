// Switch to the database (create if not exists)
use test

// Insert sample product data
db.products.insertMany([
  { _id: 1, name: "Laptop", price: 500, quantity: 40 },
  { _id: 2, name: "Mobile", price: 300, quantity: 50 },
  { _id: 3, name: "Tablet", price: 200, quantity: 60 },
  { _id: 4, name: "Headphones", price: 100, quantity: 200 },
  { _id: 5, name: "Monitor", price: 150, quantity: 30 },
  { _id: 6, name: "Keyboard", price: 75, quantity: 300 },
  { _id: 7, name: "Mouse", price: 25, quantity: 150 },
  { _id: 8, name: "Charger", price: 40, quantity: 250 }
])

Find the products information whose price is greater than or equal to 200.
db.products.find({
  price:{
    $gte:200
  }
})

Find the products information whose price is less than 200.
db.products.find({
  price:{
    $lt:200
  }
})

Find the products information whose quantity is not equal to 300.
db.products.find({
  quantity:{
    $ne:300
  }
})

Find the products information whose price is equal to 200 and quantity is
equal to 60.
db.products.find({
  $and:[
    {
      price:{
        $eq:200
      }
    },
    {
      quantity:{
        $eq:60
      }
    }
    ]
})

Find the products information whose price is equal to 500 or quantity is equal
to 60.
db.products.find({
  $or:[
    {
      price:{
        $eq:500
      }
    },
    {
      quantity:{
        $eq:60
      }
    }
    ]
})

Find the products information whose price is not equal to 400 or quantity is
not equal to 40.
db.products.find({
  $or:[
    {
      price:{
        $ne:400
      }
    },
    {
      quantity:{
        $ne:40
      }
    }
    ]
})

Find the products information whose price is either 200 or 400.
db.products.find({
  price:{
    $in:[200,400]
  }
})
(or)
db.products.find({
  $or:[
    {
      price:{
        $eq:200
      }
    },
    {
       price:{
        $eq:400
      }
    }
    ]
})

Find the products information whose price is neither 100 nor 500
db.products.find({
  price:{
    $nin:[100,500]
  }
})

(or)
db.products.find({
  $and:[
    {
      price:{
        $ne:100
      }
    },
    {
       price:{
        $ne:500
      }
    }
    ]
})

Update the price of laptop to 700.
db.products.updateOne({ name: "Laptop" }, { $set: { price: 700 } })

Find the name, and price of the products whose _id is 5.
db.products.find({ _id: 5 }, { name: 1, price: 1, _id: 0 })

Find the name, and price of the products whose _id is 5.
db.products.find().sort({name:1})

Sort the products collection based on the descending order of price and limit the result to 2 documents.
db.products.find().sort({price:-1}).limit(2)

Retrieve the name, and price of the product with the lowest price
db.products.find({},{name:1,price:1,_id:0}).sort({price:1}).limit(1)

or 

db.products.find().sort({ price: 1 }).limit(1).forEach(product => {
  print(product.name, product.price);
})

Retrieve the third lowest-priced product, displaying only its name and price
db.products.find().sort({price:1}).skip(2).limit(1).forEach(product=>{
  print(product.name,product.price);
})

or
db.products.find({},{name:1,price:1,_id:0}).sort({price:1}).skip(2).limit(1)

Delete the product whose _id is 7.
db.products.deleteOne({ _id: 7 })





  

