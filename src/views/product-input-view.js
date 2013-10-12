(function () {

  window.ProductInputView = Backbone.View.extend({

    events: {
      'submit': 'createProduct'
    },

    createProduct: function(e) {
      //prevent the submit form submitting, thus refreshing the page on submit
      e.preventDefault();

      //Grab the new product's name, description & price
 
      
      var newProductDescription = $(this.el).find('[desc=p_desc]').val();
      var newProductPrice       = $(this.el).find('[price=p_price]').val();
      var newProductName        = $(this.el).find('[name=p_name]').val();




      //Add new product to product collection
      this.collection.add({
        
        desc: newProductDescription,
        price: newProductPrice,
        name: newProductName



      });
      console.log("product name: " + newProductName);
      console.log("description: " + newProductDescription);
      console.log("price: " + newProductPrice);
    }



  });

})();