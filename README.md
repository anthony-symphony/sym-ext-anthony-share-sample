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