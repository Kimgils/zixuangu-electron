define(
    [
        'backbone',
        'model/stock'
    ]
    , function(Backbone, StockModel){
        
        return Backbone.Collection.extend({
        	url: 'http://zixuangu.kingchung.net/api/stock/',
            model: StockModel
        });
    }
);