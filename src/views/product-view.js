(function () {

  var productTemplateHTML = $('#templates .product').html();
  var productTemplate = _.template(productTemplateHTML);


  window.ProductView = Backbone.View.extend({

    render: function () {
      $(this.el).html( this.model.get('name') );

      var newProductHtml = productTemplate( this.model.toJSON() );
      $(this.el).html(newProductHtml);
      console.log("hey world, let's make a vegetarian beezilla!");


    }

  });

})();
