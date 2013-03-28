(function ($) {
  $.fn.dynamicFloat = function (lockPoints) {
    var self = this;

    lockPoints.forEach(function (lockPoint) {
      var predicate = lockPoint[0].bind(self)
        , toggle    = lockPoint[1].bind(self)
        , locked    = false;

      $(window).on('scroll', function () {
        var scrollTop = $(this).scrollTop();
        if (!locked && predicate(scrollTop)) {
          locked = true;
          toggle(locked);
        } else if (locked && !predicate(scrollTop)) {
          locked = false;
          toggle(locked);
        }
      });
    });
  };
})(jQuery);

