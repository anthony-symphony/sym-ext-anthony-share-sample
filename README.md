# Extensions Share Example

This is a quick and barebones example on how to use the Symphony share feature to open up shared pages within Symphony. Code is provided AS-IS and is to be used as reference.

## Prerequisites

* Have 'node and 'npm' installed
* Have port 3000 available. 3000 is used by default but, can be changed.

## How to run

* Start server by running command 'npm start'
* First load https://localhost:3000/bundle.json and accept security prompt.
* After accepting security prompt navigate to https://podsubdomain.symphony.com/client/index.html?bundle=https://localhost:3000/bundle.json
* Accept the "Warning: Unauthorized App(s)" dialog
* Click on the "Applications > App Store" entry in your left nav to install the Sample App

## How to use

After adding the sample app you should see a new entry in the leftnav. From there you can share 2 premade articles which are hosted on the app itself or share any site you want.

Note: The site you share must not have X-Frame-Options set or it will fail to load due to browser security.

## Sharing article via a Bot

In order to create the Share Button via a Bot you can use the Share API https://developers.symphony.com/restapi/reference#share-v3

For this extension app the body would be something like this

```
{
   "type": "com.symphony.sharing.article",
   "content":{
        "articleId":"example-6789",
        "title": "Article 6789",
        "description": "Check this out",
        "publisher": "Symphony Support Publisher",
        "thumbnailUrl": "https://localhost:3000/news-icon.png",
        "author": "Symphony Support Engineer",
        "summary": "This is a sample share payload to share the article 6789",
        "appId": "sym-support-share-sample",
        "appName": "Symphony Share Sample",
        "appIconUrl": "https://localhost:3000/news-icon.png"
    }
}
```
