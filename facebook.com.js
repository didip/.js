$(document).ready(function() {
  $("#pagelet_groups_nav").remove();
  $("#pagelet_apps_nav").remove();
  $("#chatFriendsOnline").remove();
  $(".fbDockWrapper.fbDockWrapperBottom.fbDockWrapperRight").remove();
  $(".uiComposerMessageBox .composerTypeahead .wrap textarea")
    .css('font-size', '22px')
    .css('height', '25px');

  $(".uiComposerMessageBox .composerTypeahead .wrap")
    .css('height', '25px');

  $("#rightCol").remove();
  $("#home_sponsor_nile").remove();
  $("#contentArea").css('width', '95%');
  $(".uiUfi").css('width', '100%');
  $(".commentContent").css('font-size', '14px').css('line-height', '1.6');
});
