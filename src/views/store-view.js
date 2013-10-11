(function () {

  window.StoreView = Backbone.View.extend({

    initialize: function (options) {
      //listens for an event "add", when it registers the event, onProductADd is called.
      this.listenTo(this.collection,'add', this.onProductAdd);
    },

    onProductAdd: function(newProduct) {
      // this function requires a newProduct to be passed in as an argument.  When done, it takes the product (which is a model and JSONifies  & renders the product info via the globally created ProductView in product-view.js)
      newProduct.ProductView = new ProductView({
        model: newProduct
      });

      //render the new view with products
      newProduct.ProductView.render();
      $(this.el).prepend( newProduct.ProductView.el );
    },

    render: function(){
      // this is only needed if the whole collection needs to be re-rendered. 
      // $(this.el).empty();


      // Performs the onProductAdd function on each model/product in our collection.
      // We need to specifically tell .each call the onProductAdd function and pass it the required new Product, which can be referenced using this, since we're already in the object. 
      this.collection.each(this.onProductAdd,this);
    }

  });

})();
