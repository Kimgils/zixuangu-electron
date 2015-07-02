define(
    [
        'backbone',
        'model/stock/instant'
    ]
    , function(Backbone, StockModel){
        
        return Backbone.Collection.extend({
        	url: 'http://zixuangu.kingchung.net/api/stock/instant',
            model: StockModel
        });
    }
);