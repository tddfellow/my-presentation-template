(function() {
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = window.location.search.match(/print-pdf/gi) ? '../my-presentation-template/css/print/pdf.css' : '../my-presentation-template/css/print/paper.css';
  document.getElementsByTagName('head')[0].appendChild(link);
})();
