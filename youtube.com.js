$(document).ready(function() {
  $("#homepage-main-content").css('width', '100%').css('margin-right', '0px').css('font-size', '16px');
  $("#homepage-main-content .user-account").css('margin-right', '20px');
  $(".main-spacer-bottom").remove();

  $("#completeTable").css({'z-index': '99999'});
  $("#search-pva-content, .single-line-lego-list").remove();
  $("#results-main-content").css('width', '100%');
  $("#search-results .result-item").css({
    'font-size': '16px',
    'line-height': '1.6',
    'margin-bottom': '8px',
    'border-bottom': '1px solid #ccc'
  });
  $("#search-results .result-item .description").css('max-height', 'none');
  $(".metadata-separator").html('&nbsp;&nbsp');

  $("#watch-description-extra-info, #watch-description-expand").remove();

  setTimeout(function() {
    $("#watch-headline h1").css({'color': '#111'});
    $("#watch-username").css({'color': '#444'});

    $("#content").css({
      'background-image': 'none',
      'background-color': '#fff',
      'color': '#111'});
  }, 3000);

  $("#watch-headline-container, #watch-video-container, #watch-main-container").css({
    'width': '700px',
    'margin': '0 auto'
  });

  $("#watch-container").append("<div id='watch-related-container'></div>");
  $("#watch-related-container").css({
    'display': 'block',
    'width': '700px',
    'margin': '5px auto'
  });

  var watch_related_items = $("ul#watch-related li span.ux-thumb-wrap.contains_addto").parent();
  $("#watch-related-container").append(watch_related_items);
  $("#watch-related-container a").css({
    'display': 'inline-block',
    'height': '70px',
    'padding': '0 5px 0 0'
  });
  $("#watch-related-container span.title, #watch-related-container span.stat, #watch-related-container span.stat.alt, #watch-related-container span.stat.view-count").remove();

  $('#watch-sidebar, #watch-discussion, #watch-video-extra').remove();

  $('#feed_all-content, #iyt-login-suggest-box, #feedmodule-REC, #feedmodule-TOP, #homepage-side-content').remove();
  $('#homepage-side-content').remove();
  $('a[href=/inbox#comments/1]').remove();
  $('a[href=http://upload.youtube.com/my_videos_upload]').remove();
  $('#masthead-search-term').css('height', '35px').css('font-size', '28px');

});
