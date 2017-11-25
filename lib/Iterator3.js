"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Iterator = exports.Iterator = function () {
	function Iterator(direction, node, value, done) {
		_classCallCheck(this, Iterator);

		this.direction = direction;
		this.node = node;
		this.value = value;
		this.done = done;
	}

	_createClass(Iterator, [{
		key: "next",
		value: function next() {
			if (this.direction.value === 0) {
				return new Iterator(this.direction, this.node.yang, this.node.value, this.node.yang === null);
			} else {
				return new Iterator(this.direction, this.node.ying, this.node.value, this.node.ying === null);
			}
		}
	}]);

	return Iterator;
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9JdGVyYXRvcjMuanMiXSwibmFtZXMiOlsiSXRlcmF0b3IiLCJkaXJlY3Rpb24iLCJub2RlIiwidmFsdWUiLCJkb25lIiwieWFuZyIsInlpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFDYUEsUSxXQUFBQSxRO0FBRVosbUJBQWFDLFNBQWIsRUFBd0JDLElBQXhCLEVBQThCQyxLQUE5QixFQUFxQ0MsSUFBckMsRUFBMkM7QUFBQTs7QUFDMUMsT0FBS0gsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxPQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDQSxPQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxPQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDQTs7Ozt5QkFFTTtBQUNOLE9BQUksS0FBS0gsU0FBTCxDQUFlRSxLQUFmLEtBQXlCLENBQTdCLEVBQWdDO0FBQy9CLFdBQU8sSUFBSUgsUUFBSixDQUFhLEtBQUtDLFNBQWxCLEVBQTZCLEtBQUtDLElBQUwsQ0FBVUcsSUFBdkMsRUFBNkMsS0FBS0gsSUFBTCxDQUFVQyxLQUF2RCxFQUE4RCxLQUFLRCxJQUFMLENBQVVHLElBQVYsS0FBbUIsSUFBakYsQ0FBUDtBQUNBLElBRkQsTUFHSztBQUNKLFdBQU8sSUFBSUwsUUFBSixDQUFhLEtBQUtDLFNBQWxCLEVBQTZCLEtBQUtDLElBQUwsQ0FBVUksSUFBdkMsRUFBNkMsS0FBS0osSUFBTCxDQUFVQyxLQUF2RCxFQUE4RCxLQUFLRCxJQUFMLENBQVVJLElBQVYsS0FBbUIsSUFBakYsQ0FBUDtBQUNBO0FBQ0QiLCJmaWxlIjoiSXRlcmF0b3IzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgY2xhc3MgSXRlcmF0b3Ige1xuXG5cdGNvbnN0cnVjdG9yIChkaXJlY3Rpb24sIG5vZGUsIHZhbHVlLCBkb25lKSB7XG5cdFx0dGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG5cdFx0dGhpcy5ub2RlID0gbm9kZTtcblx0XHR0aGlzLnZhbHVlID0gdmFsdWU7XG5cdFx0dGhpcy5kb25lID0gZG9uZTtcblx0fVxuXG5cdG5leHQgKCl7XG5cdFx0aWYgKHRoaXMuZGlyZWN0aW9uLnZhbHVlID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gbmV3IEl0ZXJhdG9yKHRoaXMuZGlyZWN0aW9uLCB0aGlzLm5vZGUueWFuZywgdGhpcy5ub2RlLnZhbHVlLCB0aGlzLm5vZGUueWFuZyA9PT0gbnVsbCk7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0cmV0dXJuIG5ldyBJdGVyYXRvcih0aGlzLmRpcmVjdGlvbiwgdGhpcy5ub2RlLnlpbmcsIHRoaXMubm9kZS52YWx1ZSwgdGhpcy5ub2RlLnlpbmcgPT09IG51bGwpO1xuXHRcdH1cblx0fVxuXG5cblxufVxuIl19