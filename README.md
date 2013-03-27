Dynamic Float for jQuery
-------------
A tiny jQuery plugin for dynamically updating DOM elements based on the current window scroll position. Especially useful for dynamically "locking" elements such as menus and headers in place.

### Usage

HTML

```html
<!DOCTYPE html>
<html>
  <div id="menu" style="position: relative; top: 100px;">
    Stuff
  </div>
</html>
```

JavaScript

```javascript
$('#menu').dynamicFloat([
	[
		function (scrolTop) {
			return scrollTop > 100;
		},
		function (toggle) {
			if (toggle) {
				$(this).css('position', 'fixed');
				$(this).css('top', '0px');
			} else {
				$(this).css('position', 'relative');
				$(this).css('top', '100px');
			}
		}
	]
]);
```

### Copyright
Written by Cole Brown @ drip.fm
Released under the MIT license.

