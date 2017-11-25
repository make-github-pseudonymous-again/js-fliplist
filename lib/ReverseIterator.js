"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ReverseIterator = exports.ReverseIterator = function () {
	function ReverseIterator(parent, node, value, done) {
		_classCallCheck(this, ReverseIterator);

		this.parent = parent;
		this.current = current;
		this.value = value;
		this.done = done;
	}

	_createClass(ReverseIterator, [{
		key: "valid",
		value: function valid() {
			return this.parent.valid;
		}
	}, {
		key: "next",
		value: function next() {
			if (this.parent.reversed) {
				return new ReverseIterator(this.parent, this.node.yang, this.node.value, this.node.yang === null);
			} else {
				return new ReverseIterator(this.parent, this.node.ying, this.node.value, this.node.ying === null);
			}
		}
	}]);

	return ReverseIterator;
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9SZXZlcnNlSXRlcmF0b3IuanMiXSwibmFtZXMiOlsiUmV2ZXJzZUl0ZXJhdG9yIiwicGFyZW50Iiwibm9kZSIsInZhbHVlIiwiZG9uZSIsImN1cnJlbnQiLCJ2YWxpZCIsInJldmVyc2VkIiwieWFuZyIsInlpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFDYUEsZSxXQUFBQSxlO0FBRVosMEJBQWFDLE1BQWIsRUFBcUJDLElBQXJCLEVBQTJCQyxLQUEzQixFQUFrQ0MsSUFBbEMsRUFBd0M7QUFBQTs7QUFDdkMsT0FBS0gsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsT0FBS0ksT0FBTCxHQUFlQSxPQUFmO0FBQ0EsT0FBS0YsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsT0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0E7Ozs7MEJBRU87QUFDUCxVQUFPLEtBQUtILE1BQUwsQ0FBWUssS0FBbkI7QUFDQTs7O3lCQUVNO0FBQ04sT0FBSSxLQUFLTCxNQUFMLENBQVlNLFFBQWhCLEVBQTBCO0FBQ3pCLFdBQU8sSUFBSVAsZUFBSixDQUFvQixLQUFLQyxNQUF6QixFQUFpQyxLQUFLQyxJQUFMLENBQVVNLElBQTNDLEVBQWlELEtBQUtOLElBQUwsQ0FBVUMsS0FBM0QsRUFBa0UsS0FBS0QsSUFBTCxDQUFVTSxJQUFWLEtBQW1CLElBQXJGLENBQVA7QUFDQSxJQUZELE1BR0s7QUFDSixXQUFPLElBQUlSLGVBQUosQ0FBb0IsS0FBS0MsTUFBekIsRUFBaUMsS0FBS0MsSUFBTCxDQUFVTyxJQUEzQyxFQUFpRCxLQUFLUCxJQUFMLENBQVVDLEtBQTNELEVBQWtFLEtBQUtELElBQUwsQ0FBVU8sSUFBVixLQUFtQixJQUFyRixDQUFQO0FBQ0E7QUFDRCIsImZpbGUiOiJSZXZlcnNlSXRlcmF0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBjbGFzcyBSZXZlcnNlSXRlcmF0b3Ige1xuXG5cdGNvbnN0cnVjdG9yIChwYXJlbnQsIG5vZGUsIHZhbHVlLCBkb25lKSB7XG5cdFx0dGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG5cdFx0dGhpcy5jdXJyZW50ID0gY3VycmVudDtcblx0XHR0aGlzLnZhbHVlID0gdmFsdWU7XG5cdFx0dGhpcy5kb25lID0gZG9uZTtcblx0fVxuXG5cdHZhbGlkICgpe1xuXHRcdHJldHVybiB0aGlzLnBhcmVudC52YWxpZDtcblx0fVxuXG5cdG5leHQgKCl7XG5cdFx0aWYgKHRoaXMucGFyZW50LnJldmVyc2VkKSB7XG5cdFx0XHRyZXR1cm4gbmV3IFJldmVyc2VJdGVyYXRvcih0aGlzLnBhcmVudCwgdGhpcy5ub2RlLnlhbmcsIHRoaXMubm9kZS52YWx1ZSwgdGhpcy5ub2RlLnlhbmcgPT09IG51bGwpO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHJldHVybiBuZXcgUmV2ZXJzZUl0ZXJhdG9yKHRoaXMucGFyZW50LCB0aGlzLm5vZGUueWluZywgdGhpcy5ub2RlLnZhbHVlLCB0aGlzLm5vZGUueWluZyA9PT0gbnVsbCk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==