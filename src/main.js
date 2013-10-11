(function () {

  // creates a new empty collection of products
  var products = new Inventory();

  //Creates a new list view for the above collection.
  // Now need to say where to render info (div id=store)

  var productView = new StoreView({
    collection: products,
    el: '#store'
  });

  // create seed / dummy data
  // add event/method is being listened to

  products.add([
    {name: "Box O' Honey Bees",
     description: 'Buzz Buzz BuzZzzz...',
     price: '$300'},

    {name: "Uranium 252-b",
     description: 'Artificially flavored for maximum enjoyment',
     price: "$2300"},

    {name: "Bag of Gently Used Spinach",
     description: "Hey Sailor boy, wouldn't you like to be a sailor man?",
     price: "$3"}

    ]);

})();






// (function () {

//   var productOne = new Product({
//     name: 'Honey Bees',
//     description: 'buzz buzz buzz :) '
//   });

//   var productTwo = new Product({
//     name: 'Uranium 252-b',
//     description: 'Artificially flavored for maximum enjoyment'

//   });


//   var productThree = new Product({
//     name: 'Spinach',
//     description: 'Make a sailor man out of your whole family! '

//   });
//   var happyFunTime = [productOne, productTwo, productThree];


//   _.each(happyFunTime, function (product) {
//     var view = new ProductView({ model: product });
//     view.render();
//     console.log('ProductView.el', ProductView.el);
//     $('#store').append(view.el);
//   });


// })();