## Google Custom Search API Example  
###  Using MEAN.io Framework

Google Custom Search API example, build on top of MEAN.io framework. Project requires you to create and insert a Google API key and search engine ID into the `cse_config.json` file.
#### Commands
Basic commands I used to setup MEAN.io and creae `search` package:
```
sudo npm install -g mean-cli
mean init meanio-custom-search
cd meanio-custom-search
npm install
bower install
mean package search  
```
Add your own `search engine id` value and your `API key` value to the `packages/custom/search/public/assets/cse_config.json` file. This file is not included in repository, since these values should be kept private.
```
{
    "cse_id" : "<your_search_engine_id>",
    "api_key": "<your_api_key>"
}
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
* MEAN.io:  
http://mean.io  
* Google Developers Console - Projects (API Kkey):  
https://console.developers.google.com/project
* Best practices for securely using API keys:  
https://developers.google.com/console/help/new/#usingkeys
* Google Custom Search Engine Setup (search Eegine ID):  
https://www.google.com/cse/all
* Google CustomSearch API v1:  
http://developers.google.com/apis-explorer/#p/customsearch/v1
