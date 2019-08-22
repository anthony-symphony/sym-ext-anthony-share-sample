var myAppId = 'sym-support-share-sample'
var myAppService = myAppId + ":app"
var baseUrl = 'https://localhost:3000/'
var newsIcon = 'data:image/png;base64,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'

var share1Article = {
    id: 'example-12345',
    title: 'Example 12345',
    subTitle: 'This is the subtitle for Article Example 12345',
    blurb: 'This is a quick summary of Article Example 12345',
    date: 1548268729,
    publisher: 'Sample Share App',
    author: 'Symphony Example',
    thumbnail: newsIcon
}

var share2Article = {
    id: 'example-6789',
    title: 'Example 6789',
    subTitle: 'This is the subtitle for Article Example 6789',
    blurb: 'This is a quick summary of Article Example 6789',
    date: 1548355129,
    publisher: 'Sample Share App',
    author: 'Symphony Example',
    thumbnail: newsIcon
}

SYMPHONY.remote.hello().then(function(data) {
    // Set the theme of the app module
    var themeColor = data.themeV2.name;
    var themeSize = data.themeV2.size;
    // You must add the symphony-external-app class to the body element
    document.body.className = "symphony-external-app " + themeColor + " " + themeSize;

    SYMPHONY.application.connect(myAppId, ['share'], [myAppService]).then(function(response) {
        var shareService = SYMPHONY.services.subscribe('share')
        document.getElementById('share-example-1').addEventListener('click', function(){
            shareService.share('article', share1Article)
        })
        document.getElementById('share-example-2').addEventListener('click', function(){
            shareService.share('article', share1Article)
        })
        document.getElementById('shareSite').addEventListener('click', function(){
            let customShareSiteArticle = {
                id: document.getElementById('siteToShare').value,
                title: document.getElementById('sharedSiteTitle').value,
                subtitle: document.getElementById('sharedSiteSubtitle').value,
                blurb: document.getElementById('sharedSiteBlurb').value,
                date: document.getElementById('siteToShare').value,
                publisher: document.getElementById('sharedSitePublisher').value,
                author: document.getElementById('sharedSiteAuthor').value
            }
            shareService.share('article', customShareSiteArticle)
        })
    })
})