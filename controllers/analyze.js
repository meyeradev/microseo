module.exports = function(app) {
    var crawler = app.controllers.crawler,
        htmlAnalyzer = app.controllers.analyzers.html,
        httpAnalyzer = app.controllers.analyzers.http,
        speedAnalyzer = app.controllers.analyzers.speed,
        responsiveAnalyzer = app.controllers.analyzers.responsive;
    
    return {
        init: function(url, cb) {
            crawler.getDom(url, function($) {
                var results = {};
                
                results.url = url;
                results.html = htmlAnalyzer.init($);
//                speedAnalyzer.init($);
//                responsiveAnalyzer.init($);
//                speedAnalyzer.init($);
//                httpAnalyzer.init($);
                cb(results);
            });
            
//            crawler.checkUrl('https://fr.wikipedia.or', function(valid) {
//                if(!valid) {
//                    res.send({
//                        status: 'error',
//                        error: 'bad url'
//                    })
//                }
//
//                crawler.getDom('https://fr.wikipedia.or', function($) {
//                    if(!!$('h1').text().length)
//                        console.log($('h1').text().trim());
//                });
//            });
            
            
        },
        globalScore: function() {

        }
    }
}