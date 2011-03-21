$(document).ready(function() {
  $("tr[style='height:10px']").remove();
  $("td textarea").attr('cols', '100').attr('rows', '10');

  $("td[align='right'].title").css({
    'padding-top': '11px'
  });

  $("input[type=submit]").css({
    'font-size': '12pt'
  });

  $("form").css({
    'margin-bottom': '0px'
  });

  $(".pagetop").parent().siblings().css({
    'padding': '4px 5px'
  });
  $(".pagetop").parent().css({
    'height': '30px'
  });
  $(".pagetop").css({
    'font-size': '13pt'
  });

  $(".comment").css({
    'font-size': '10pt',
    'color': '#111',
    'line-height': '1.5',
  });

  $(".subtext").css({
    'font-size': '9pt',
    'font-family': 'Arial',
    'color': '#777',
  });

  $("img[src='http://ycombinator.com/images/grayarrow.gif']").css({
    'height': '30px'
  });
});