var shopper = {
    groceryCart: ["carrots", "milk", "rice", "bread"],
    gender: "female",
    paymentType: "cash",
    didPay: true,
    total: 123.05,
    custMessage: function() {
        console.log("Thank you for shopping with us!");
    }
}
console.log(shopper.groceryCart[3]);
shopper.custMessage();
console.log(shopper.total);
