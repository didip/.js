$(document).ready(function() {
  $("#homepage-main-content").css('width', '100%').css('margin-right', '0px').css('font-size', '16px');
  $("#homepage-main-content .user-account").css('margin-right', '20px');
  $(".main-spacer-bottom").remove();

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

  var watch_related_items = $("ul#watch-related li span.ux-thumb-wrap.contains_addto");
  console.log(watch_related_items);
  $("#watch-related-container").append(watch_related_items);
  $("#watch-related-container span").css({
    'margin': '0 2px 7px 0'
  });

  $('#watch-sidebar, #watch-discussion').remove();

  $('#feed_all-content, #iyt-login-suggest-box, #feedmodule-REC, #feedmodule-TOP, #homepage-side-content').remove();
  $('#homepage-side-content').remove();
  $('a[href=/inbox#comments/1]').remove();
  $('a[href=http://upload.youtube.com/my_videos_upload]').remove();
  $('#masthead-search-term').css('height', '35px').css('font-size', '28px');

});
