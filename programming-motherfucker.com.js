$('body').css({
  'margin': '0 auto',
  'font-size': '20px',
  'line-height': '1.3'
});

$('h1, h2, h3, h4').css({
  'margin': '8px 0',
});

$('a').css({
  'text-decoration': 'none',
  'text-shadow': '0px 2px 2px #ccc'
});
$('a:hover').css({
  'text-decoration': 'underline'
});

$("img[src='/programming-motherfuckers.jpg']").css({
  '-moz-border-radius': '4px',
  '-webkit-border-radius': '4px',
  'border-radius': '4px',
  '-moz-box-shadow': '0 0 7px #bbb',
  '-webkit-box-shadow': '0 0 7px #bbb',
  'box-shadow': '0 0 7px #bbb',
});

if($.browser.webkit) {
  $("img[src='/programming-motherfuckers.jpg']").css({
    'margin-top': '25px'
  });
}

$("table, th, tr, td").css({
  'border': 'none'
});
$("th, tr, td").css({
  'padding': '10px 18px'
});
$("table").css({
  '-moz-box-shadow': '0 0 7px #888',
  '-webkit-box-shadow': '0 0 7px #888',
  'box-shadow': '0 0 7px #888',
});

$("th").css({
  'text-align': 'left',
  'border-bottom': '1px dotted #ccc',
  'padding': '10px 18px 5px'
});