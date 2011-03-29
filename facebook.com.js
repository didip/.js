$(document).ready(function() {
  $("#pagelet_groups_nav, #pagelet_apps_nav").remove();

  $(".uiComposerMessageBox .composerTypeahead .wrap").css('height', '25px');
  $(".uiComposerMessageBox .composerTypeahead .wrap textarea").css({
    'font-size': '22px',
    'height': '25px'
  });

  $("#rightCol").remove();
  $("#home_sponsor_nile").remove();
  $("#contentArea").css('width', '95%');

  $(".mbl.ego_column:last").remove();

  $(".fbProfileByline").css('width', '100%');

  setInterval(function() {
    $(".uiUfi").css('width', '100%');
    $(".commentContent, .messageBody").css('font-size', '14px').css('line-height', '1.6');
  }, 50000);

});
