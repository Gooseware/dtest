"use strict";

// var log = require('loglevel');

var jQuery = require('jquery');
window.mzn = {
    $ : jQuery,
    apiURL: "http://localhost:9002/api/",
    countries: false,
    Communicator: (function(){
        var instantiated;
        var retry = new Array();
        var cached_data = new Array();
        var $ = jQuery;
        var callbackQueue = {};
        var _rq = {};
        function init (){
            return {
                dispatch:function(url, callback){
                    var self = this;
                    if (mzn.Communicator.getInstance().cached_data[url])    {
                        callback(mzn.Communicator.getInstance().cached_data[url]);
                        return;
                    }
                    if (!retry[url])    {
                        retry[url] = 0;
                    }
                    if(typeof callbackQueue[url]=='undefined'){
                        callbackQueue[url] = [];
                    }
                    callbackQueue[url][callbackQueue[url].length] = callback;
                    if(typeof _rq[url] == 'undefined'){
                        _rq[url] = $.ajax({
                            url: url,
                            timeout: 30000,
                            success: function(_data){
                                mzn.Communicator.getInstance().cached_data[url] = _data;
                                if(callbackQueue[url].length>0){
                                    for(var i in callbackQueue[url]){
                                        callbackQueue[url][i](_data);
                                    }
                                    delete callbackQueue[url];
                                }
                            },
                            dataType: 'JSON',
                            error: function(){
                                if (retry[url] < 3)  {
                                    retry[url]++;
                                    delete _rq[url];
                                    dispatch(url, callback, retry[url]);
                                }   else    {
                                    callback("");   
                                }
                            }
                        });
                    }
                },
                cached_data: {}
            }
        }
    
        return {
            getInstance :function(){
                if (!instantiated){
                    console.log("instantiating");
                    var instantiated = init();
                }
                return instantiated; 
            }
        }
    })()
};
// Log level setup
// if (config.debug) {
//   log.setLevel('debug');
// }


// Single Page Apps only:
// jQuery override of the click event so all links use pushState
mzn.$(function(){
   var $ = mzn.$;

    var mainRouter = require('./main/Router');
});
