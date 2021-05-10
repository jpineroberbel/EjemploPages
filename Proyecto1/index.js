
 
    urlApi = "https://api.allorigins.win/get?url="+encodeURIComponent("https://newsapi.org/v2/everything?q=bitcoin&apiKey=6db6a643cb304edda455c178f88113fd");
    

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
  
/*  fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://newsapi.org/v2/everything?q=bitcoin&apiKey=6db6a643cb304edda455c178f88113fd')}`)
.then(response => {
	if (response.ok) return response.json()
	throw new Error('Network response was not ok.')
})
.then(data => console.log(data.contents)); */