(function () {

  window.StoreView = Backbone.View.extend({

    initialize: function (options) {
      this.listenTo(this.collection,'add', this.onProductAdd);
    },

    onProductAdd: function(newProduct) {
      newProduct.view = new ProductView({model: product });
    },

    render: function(){
      $(this.el).empty();
      this.collection.each(this.onProductAdd,this);
    }

  });

})();
