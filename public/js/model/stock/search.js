define(
    [
        'backbone'
    ]
    , function(Backbone){
        
        return Backbone.Model.extend({
        	urlRoot: 'http://zixuangu.kingchung.net/api/stock/search',
            initialize: function(){

            }
        });
    }
);