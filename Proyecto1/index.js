

    urlApi = "http://api.allorigins.win/get?url=https://newsapi.org/v2/everything?q=bitcoin&apiKey=6db6a643cb304edda455c178f88113fd"
    

    function loadDoc() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {

            respuesta = this.responseText;
            console.log(respuesta);
          }

    
    
        };
        xhttp.open("GET", urlApi, true);
        xhttp.send();
      }
 