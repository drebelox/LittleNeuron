var currentUrl = document.URL;

var genURL = 'http://littleneuron.org/linkgenerator.html?q=c2lnaHR3b3JkczovL3siaWQiOiJ3ZWVrMiIsIndvcmRzIjpbImNoaWNrZW4iLCIgZG9nIiwiIGZpc2ggIiwiY2FtZWwiXX0='

var url = atob(genURL.split('q=')[1]);
console.log(url);



window.location.replace(url);