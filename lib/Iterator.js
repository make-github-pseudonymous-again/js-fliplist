"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Iterator = exports.Iterator = function () {
	function Iterator(node) {
		_classCallCheck(this, Iterator);

		this.node = node;
	}

	_createClass(Iterator, [{
		key: "next",
		value: function next() {
			return new Iterator(this.node.next);
		}
	}, {
		key: "prev",
		value: function prev() {
			return new Iterator(this.node.sibling.next.sibling);
		}
	}, {
		key: "value",
		value: function value() {
			return this.node.value;
		}
	}, {
		key: "reversed",
		value: function reversed() {
			return new Iterator(this.node.sibling);
		}
	}, {
		key: "skip",
		value: function skip(n) {

			var node = this.node;

			for (var i = 0; i < n; ++i) {
				node = node.next;
			}return new Iterator(node);
		}
	}, {
		key: "rewind",
		value: function rewind(n) {

			var node = this.node.sibling;

			for (var i = 0; i < n; ++i) {
				node = node.next;
			}return new Iterator(node.sibling);
		}
	}]);

	return Iterator;
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9JdGVyYXRvci5qcyJdLCJuYW1lcyI6WyJJdGVyYXRvciIsIm5vZGUiLCJuZXh0Iiwic2libGluZyIsInZhbHVlIiwibiIsImkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFDYUEsUSxXQUFBQSxRO0FBRVosbUJBQWNDLElBQWQsRUFBcUI7QUFBQTs7QUFDcEIsT0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0E7Ozs7eUJBRVE7QUFDUixVQUFPLElBQUlELFFBQUosQ0FBYyxLQUFLQyxJQUFMLENBQVVDLElBQXhCLENBQVA7QUFDQTs7O3lCQUVRO0FBQ1IsVUFBTyxJQUFJRixRQUFKLENBQWMsS0FBS0MsSUFBTCxDQUFVRSxPQUFWLENBQWtCRCxJQUFsQixDQUF1QkMsT0FBckMsQ0FBUDtBQUNBOzs7MEJBRVM7QUFDVCxVQUFPLEtBQUtGLElBQUwsQ0FBVUcsS0FBakI7QUFDQTs7OzZCQUVZO0FBQ1osVUFBTyxJQUFJSixRQUFKLENBQWMsS0FBS0MsSUFBTCxDQUFVRSxPQUF4QixDQUFQO0FBQ0E7Ozt1QkFFTUUsQyxFQUFJOztBQUVWLE9BQUlKLE9BQU8sS0FBS0EsSUFBaEI7O0FBRUEsUUFBTSxJQUFJSyxJQUFJLENBQWQsRUFBa0JBLElBQUlELENBQXRCLEVBQTBCLEVBQUVDLENBQTVCO0FBQWdDTCxXQUFPQSxLQUFLQyxJQUFaO0FBQWhDLElBRUEsT0FBTyxJQUFJRixRQUFKLENBQWNDLElBQWQsQ0FBUDtBQUVBOzs7eUJBRVFJLEMsRUFBSTs7QUFFWixPQUFJSixPQUFPLEtBQUtBLElBQUwsQ0FBVUUsT0FBckI7O0FBRUEsUUFBTSxJQUFJRyxJQUFJLENBQWQsRUFBa0JBLElBQUlELENBQXRCLEVBQTBCLEVBQUVDLENBQTVCO0FBQWdDTCxXQUFPQSxLQUFLQyxJQUFaO0FBQWhDLElBRUEsT0FBTyxJQUFJRixRQUFKLENBQWNDLEtBQUtFLE9BQW5CLENBQVA7QUFFQSIsImZpbGUiOiJJdGVyYXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGNsYXNzIEl0ZXJhdG9yIHtcblxuXHRjb25zdHJ1Y3RvciAoIG5vZGUgKSB7XG5cdFx0dGhpcy5ub2RlID0gbm9kZTtcblx0fVxuXG5cdG5leHQgKCApIHtcblx0XHRyZXR1cm4gbmV3IEl0ZXJhdG9yKCB0aGlzLm5vZGUubmV4dCApIDtcblx0fVxuXG5cdHByZXYgKCApIHtcblx0XHRyZXR1cm4gbmV3IEl0ZXJhdG9yKCB0aGlzLm5vZGUuc2libGluZy5uZXh0LnNpYmxpbmcgKSA7XG5cdH1cblxuXHR2YWx1ZSAoICkge1xuXHRcdHJldHVybiB0aGlzLm5vZGUudmFsdWUgO1xuXHR9XG5cblx0cmV2ZXJzZWQgKCApIHtcblx0XHRyZXR1cm4gbmV3IEl0ZXJhdG9yKCB0aGlzLm5vZGUuc2libGluZyApIDtcblx0fVxuXG5cdHNraXAgKCBuICkge1xuXG5cdFx0bGV0IG5vZGUgPSB0aGlzLm5vZGU7XG5cblx0XHRmb3IgKCBsZXQgaSA9IDAgOyBpIDwgbiA7ICsraSApIG5vZGUgPSBub2RlLm5leHQ7XG5cblx0XHRyZXR1cm4gbmV3IEl0ZXJhdG9yKCBub2RlICkgO1xuXG5cdH1cblxuXHRyZXdpbmQgKCBuICkge1xuXG5cdFx0bGV0IG5vZGUgPSB0aGlzLm5vZGUuc2libGluZztcblxuXHRcdGZvciAoIGxldCBpID0gMCA7IGkgPCBuIDsgKytpICkgbm9kZSA9IG5vZGUubmV4dDtcblxuXHRcdHJldHVybiBuZXcgSXRlcmF0b3IoIG5vZGUuc2libGluZyApIDtcblxuXHR9XG5cbn1cbiJdfQ==