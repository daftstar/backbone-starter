(function () {

  //Each product will be rendered within the id templates and class product.
  var productTemplateHTML = $('#templates .product').html();
  var productTemplate = _.template(productTemplateHTML);

  // the above could also be written as this: 
  // var productTemplate = _.template($('#templates .product').html());




  // Creating a globally available view that renders the templated products into JSON for HTML appending. 
  window.ProductView = Backbone.View.extend({

    render: function () {
      // this was used before introducing templates
      // $(this.el).html( this.model.get('name') );
      
      var newProductHtml = productTemplate(this.model.toJSON() );

      $(this.el).html(newProductHtml);
      console.log("hey world, let's make a vegetarian beezilla!");
    }

  });

})();
