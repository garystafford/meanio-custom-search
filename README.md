## Google Custom Search API Example  
###  Using MEAN.io Framework

Google Custom Search API example, build on top of MEAN.io framework.

#### Commands
```
sudo npm install -g mean-cli
mean init meanio-custom-search
cd meanio-custom-search
npm install
bower install
mean package search #creates package    
```

#### Changes to MEAN.io base framework
* Files modified:
  * packages/custom/search/app.js
  * packages/custom/search/public/controllers/search.js
  * packages/custom/search/public/services/search.js
  * packages/custom/search/public/views/index.html
* Files added:
  * packages/custom/search/public/assets/cse_config.json

#### Links
MEAN.io:
http://mean.io  
Google Developers Console - Projects (API Kkey):
https://console.developers.google.com/project  
Best practices for securely using API keys:
https://developers.google.com/console/help/new/#usingkeys  
Google Custom Search Engine Setup (Search Engine ID): 
https://www.google.com/cse/all  
Google CustomSearch API v1: 
http://developers.google.com/apis-explorer/#p/customsearch/v1  
