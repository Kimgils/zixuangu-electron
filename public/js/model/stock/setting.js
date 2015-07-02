define(
    [
        'backbone'
    ]
    , function(Backbone){
        return Backbone.Model.extend({
        	urlRoot: 'http://zixuangu.kingchung.net/api/stock/setting',
            defaults: {
                stock_id: '',
                enable: true,
                count: 6,
                interval: 20, //second
                range_percent: 0.05
            }
        });
    }
);