var myAppId = 'sym-support-share-sample'
var myLeftNavId = 'share-sample-nav'
var myLeftNavName = 'Share Sample'
var myModuleId = 'share-sample-module'
var myAppName = 'Share Sample App'

var baseUrl = 'https://localhost:3000/'

var appControllerServiceName = myAppId + ':controller'
var appControllerService = SYMPHONY.services.register(appControllerServiceName)

SYMPHONY.remote.hello().then(function(data) {
    SYMPHONY.application.register(myAppId, ['modules','applications-nav', 'share'], [appControllerServiceName]).then(function(response) {
        let shareService = SYMPHONY.services.subscribe('share')
        let navService = SYMPHONY.services.subscribe('applications-nav')
        let modulesService = SYMPHONY.services.subscribe('modules')

        navService.add(myLeftNavId, myLeftNavName, appControllerServiceName)

        appControllerService.implement({
            //Open up the App Module to let you share
            select: function(id) {
                if (id == myLeftNavId) {
                    navService.focus(myLeftNavId)
                }
                modulesService.show(myModuleId, {title:myAppName}, appControllerServiceName, baseUrl + 'app.html', {'canFloat': true})
                navService.focus(myLeftNavId)
            },

            //What to do when an article for your app is clicked
            link: function(type, articleId) {
                if(type == 'article') {
                    let articleURL;
                    if (articleId.startsWith('http://') || articleId.startsWith('https://')){
                        articleURL = articleId
                    }
                    else {
                        articleURL = baseUrl + articleId
                    }
                    modulesService.show(`${myAppId}:${articleId}`, {title: `${myAppName} article`}, appControllerServiceName, articleURL, {"canFloat":"true"})
                    modulesService.focus(`${myAppId}:${articleId}`)
                }
            }
        })

        shareService.handleLink("article", appControllerServiceName)
    })
})