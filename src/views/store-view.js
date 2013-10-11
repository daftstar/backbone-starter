(function () {

  window.StoreView = Backbone.View.extend({

    initialize: function (options) {
      //listens for an event "add", when it registers the event, onProductADd is called.
      this.listenTo(this.collection,'add', this.onProductAdd);
    },

    onProductAdd: function(newProduct) {
      newProduct.ProductView = new ProductView({
        model: newProduct
      });

      //render the new view with products
      newProduct.ProductView.render();
      $(this.el).prepend( newProduct.ProductView.el );
    },

    render: function(){
      $(this.el).empty();
      this.collection.each(this.onProductAdd,this);
    }

  });

})();
