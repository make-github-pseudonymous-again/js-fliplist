"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Iterator2 = exports.Iterator2 = function () {
	function Iterator2(prev, node, value, done) {
		_classCallCheck(this, Iterator2);

		this.direction = direction;
		this.node = node;
		this.value = value;
		this.done = done;
	}

	_createClass(Iterator2, [{
		key: "next",
		value: function next() {
			if (this.node.ying === this.prev) {
				return new Iterator2(this.node, this.node.yang, this.node.value, this.node.yang === null);
			} else {
				return new Iterator2(this.node, this.node.ying, this.node.value, this.node.ying === null);
			}
		}
	}]);

	return Iterator2;
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9JdGVyYXRvcjIuanMiXSwibmFtZXMiOlsiSXRlcmF0b3IyIiwicHJldiIsIm5vZGUiLCJ2YWx1ZSIsImRvbmUiLCJkaXJlY3Rpb24iLCJ5aW5nIiwieWFuZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUNhQSxTLFdBQUFBLFM7QUFFWixvQkFBYUMsSUFBYixFQUFtQkMsSUFBbkIsRUFBeUJDLEtBQXpCLEVBQWdDQyxJQUFoQyxFQUFzQztBQUFBOztBQUNyQyxPQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLE9BQUtILElBQUwsR0FBWUEsSUFBWjtBQUNBLE9BQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLE9BQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNBOzs7O3lCQUVNO0FBQ04sT0FBSSxLQUFLRixJQUFMLENBQVVJLElBQVYsS0FBbUIsS0FBS0wsSUFBNUIsRUFBa0M7QUFDakMsV0FBTyxJQUFJRCxTQUFKLENBQWMsS0FBS0UsSUFBbkIsRUFBeUIsS0FBS0EsSUFBTCxDQUFVSyxJQUFuQyxFQUF5QyxLQUFLTCxJQUFMLENBQVVDLEtBQW5ELEVBQTBELEtBQUtELElBQUwsQ0FBVUssSUFBVixLQUFtQixJQUE3RSxDQUFQO0FBQ0EsSUFGRCxNQUdLO0FBQ0osV0FBTyxJQUFJUCxTQUFKLENBQWMsS0FBS0UsSUFBbkIsRUFBeUIsS0FBS0EsSUFBTCxDQUFVSSxJQUFuQyxFQUF5QyxLQUFLSixJQUFMLENBQVVDLEtBQW5ELEVBQTBELEtBQUtELElBQUwsQ0FBVUksSUFBVixLQUFtQixJQUE3RSxDQUFQO0FBQ0E7QUFDRCIsImZpbGUiOiJJdGVyYXRvcjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBjbGFzcyBJdGVyYXRvcjIge1xuXG5cdGNvbnN0cnVjdG9yIChwcmV2LCBub2RlLCB2YWx1ZSwgZG9uZSkge1xuXHRcdHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuXHRcdHRoaXMubm9kZSA9IG5vZGU7XG5cdFx0dGhpcy52YWx1ZSA9IHZhbHVlO1xuXHRcdHRoaXMuZG9uZSA9IGRvbmU7XG5cdH1cblxuXHRuZXh0ICgpe1xuXHRcdGlmICh0aGlzLm5vZGUueWluZyA9PT0gdGhpcy5wcmV2KSB7XG5cdFx0XHRyZXR1cm4gbmV3IEl0ZXJhdG9yMih0aGlzLm5vZGUsIHRoaXMubm9kZS55YW5nLCB0aGlzLm5vZGUudmFsdWUsIHRoaXMubm9kZS55YW5nID09PSBudWxsKTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRyZXR1cm4gbmV3IEl0ZXJhdG9yMih0aGlzLm5vZGUsIHRoaXMubm9kZS55aW5nLCB0aGlzLm5vZGUudmFsdWUsIHRoaXMubm9kZS55aW5nID09PSBudWxsKTtcblx0XHR9XG5cdH1cblxuXG5cbn1cbiJdfQ==