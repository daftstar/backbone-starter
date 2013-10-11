(function () {

  var productOne = new Product({
    name: 'Honey Bees',
    description: 'buzz buzz buzz :) '
  });

  var productTwo = new Product({
    name: 'Uranium 252-b',
    description: 'Artificially flavored for maximum enjoyment'

  });


  var productThree = new Product({
    name: 'Spinach',
    description: 'Make a sailor man out of your whole family! '

  });
  var happyFunTime = [productOne, productTwo, productThree];


  _.each(happyFunTime, function (product) {
    var view = new ProductView({ model: product });
    view.render();
    console.log('ProductView.el', ProductView.el);
    $('#store').append(view.el);
  });


})();