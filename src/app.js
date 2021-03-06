import $ from 'jquery';
import _ from 'underscore';

import InventoryList from './collections/inventory_list';
import InventoryListView from './views/inventory_list_view';
import MovieList from 'collections/movie_list';
import MovieListView from 'views/movie_list_view';
import CustomerList from 'collections/customer_list';
import CustomerListView from 'views/customer_list_view';
import RentalList from './collections/rental_list';
import RentalListView from './views/rental_list_view';

Backbone.pubSub = _.extend({}, Backbone.Events);

$(document).ready(function() {

  var inventoryList = new InventoryList();
  inventoryList.fetch();

  var options = {
    el:  $('.main-content'),
    model: inventoryList
  };

  var application = new InventoryListView(options);
  application.render();

  $("#search-form").submit(function(event) {
    event.preventDefault();
    var movieList = new MovieList();
    if ($('#movieName').val() === ""){
      alert("Please, enter message term")
    }
    else{
      movieList.fetch({data: {query: $('#movieName').val()  }});
    }

    var options = {
      el:  $('#all-movie-list'),
      model: movieList
    };
    var mlv = new MovieListView(options);
    mlv.render();

  });

  var customerList = new CustomerList();
  customerList.fetch();
  
  var options = {
    el:  $('.main-content'),
    model: customerList
  };

  var customerListView = new CustomerListView(options);
  customerListView.render();

});
