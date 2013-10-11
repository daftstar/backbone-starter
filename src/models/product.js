(function () {


  // creating a model called product. This is what will be listed as individual products in the store. Multiple models (e.g. individual products) will exist in a collection, known as Inventory.
  window.Product = Backbone.Model.extend({
    defaults: {
      // foo: 'default val'
    }
  });



  // a collection is the group of each product that has been created.  In this case, each product is a model. 

  window.Inventory = Backbone.Collection.extend({
    model: Product
  });


})();
