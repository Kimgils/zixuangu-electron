define(
    [
        'backbone',
        'store'
    ]
    , function(Backbone, Store){
        
        return Backbone.Model.extend({
        	urlRoot: 'http://zixuangu.kingchung.net/api/stock/instant',
            defaults: {
                id: '',
                name: '',
                opening_price: '',
                last_price: '',
                current_price: '',
                change_price: '',
                change_percent: '',
                day_s_high: '',
                day_s_low: '',
                date: '',
                time: ''
            },
            initialize: function(){
            }
        });
    }
);