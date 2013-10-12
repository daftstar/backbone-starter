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
     desc: 'Buzz Buzz BuzZzzz...',
     price: '$300'},

    {name: "Uranium 252-b",
     desc: 'Artificially flavored for maximum enjoyment',
     price: "$2300"},

    {name: "Bag of Gently Used Spinach",
     desc: "Hey sailor boy, wouldn't you like to be a sailor man?",
     price: "$3"}

    ]);


    var inputView = new ProductInputView({
    collection: products,
    el: 'form.new-product'
  });

})();


