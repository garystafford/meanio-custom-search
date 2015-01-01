## Google Custom Search API Example  
###  Using MEAN.io Framework

Google Custom Search API example, build on top of **MEAN.io** framework. This project requires you to create a Google API key and search engine ID. There are two examples of calling the API. See 'Branches' below.


#### Preview
[![Custom Search API](https://github.com/garystafford/meanio-custom-search/blob/nodesearch/previews/CustomSeachExample_preview.png?raw=true)](https://github.com/garystafford/meanio-custom-search/blob/nodesearch/previews/CustomSeachExample.png?raw=true)

#### Branches
##### master
Custom Search API is called from the client-side by an AngularJS factory. You will need to create a `cse_config.json` file to hold your own `search engine id` and `API key` values. See notes below. Note, this method exposes your private API key. It is only intented for demostration purposes.

##### nodesearch (ACTIVE)
Custom Search API is called from the backend by Node.js. Node.js then exposes a restful end-point (i.e. `http://localhost:3000/search/foo`), which is called from the client-side by an AngularJS factory.  
You will need to create two environment variables to hold your own `search engine id` and `API key` values. See notes below. This method protects your private `API key` from exposure on the client-side. 

#### Commands
Basic commands used to setup MEAN.io and create `search` package:
```
sudo npm install -g mean-cli
mean init meanio-custom-search
cd meanio-custom-search
npm install
mean package search  
```
If your using the `nodesearch` branch (Node.js), create two environmental varibles, `GOOGLE_CSE_ID` and `GOOGLE_API_KEY`, to hold your own `search engine id` and `API key` values.  
If your using the `master` branch (AngularJS), add your own `search engine id` and `API key` values to the `packages/custom/search/public/assets/cse_config.json` file. This file is not included in repository, since these values should be kept private.
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
  * packages/custom/search/server/routes/search.js
* Files added:
  * packages/custom/search/server/controllers/search.js
  * packages/custom/search/server/controllers/sample_search.js
  * packages/custom/search/server/controllers/sample_data.js
* Files you need to add (for AngularJS exmaple):
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
