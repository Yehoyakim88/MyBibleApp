const API_KEY = '8b75be227ca2700d696006a40edfea9c';

async function init() {
    getBibleVersions();
    // let url;
    // let response;
    // let responseAsJson;

    // url = "https://api.scripture.api.bible/";
    // response = await fetch(url);
    // responseAsJson = await response.json();

    // console.log(response);
}

/**
 * Gets Bible versions from API.Bible
 * @returns {Promise} containing list of Bible versions
 */
function getBibleVersions() {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.withCredentials = false;
  
    //   xhr.addEventListener(`readystatechange`, function() {
    //     if (this.readyState === this.DONE) {
    //       const {data} = JSON.parse(this.responseText);
    //       const versions = data.map( (data) => {
    //         return {
    //           name: data.name,
    //           id: data.id,
    //           abbreviation: data.abbreviation,
    //           description: data.description,
    //           language: data.language.name
    //         };
    //       });
    //       resolve(versions);
    //     }
    //   });
  
    //   xhr.open(`GET`, `https://v2.api.bible/bibles`);
      xhr.open(`GET`, `https://api.scripture.api.bible/v1/bibles`);
      xhr.setRequestHeader(`api-key`, API_KEY);
  
      xhr.onerror = () => reject(xhr.statusText);
  
      xhr.send();
    });
  }