"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ReversibleInternalIterator = exports.ReversibleInternalIterator = function () {
	function ReversibleInternalIterator(direction, validity, predecessor, successor, node) {
		_classCallCheck(this, ReversibleInternalIterator);

		this.direction = direction;
		this.validity = validity;
		this.pred = predecessor;
		this.succ = successor;
		this.node = node;
		this.value = node.value;
		this.done = node.fw === null || node.bw === null;
	}

	_createClass(ReversibleInternalIterator, [{
		key: "valid",
		value: function valid() {
			return this.validity.valid;
		}
	}, {
		key: "next",
		value: function next() {
			if (this.direction.reversed) {

				if (this.pred === null) {
					var pred = this.node.fw !== this.succ ? this.node.fw : this.node.bw;
					return new ReversibleInternalIterator(this.direction, this.validity, null, this.node, pred);
				} else {
					return new ReversibleInternalIterator(this.direction, this.validity, null, this.node, this.pred);
				}
			} else {
				if (this.succ === null) {
					var succ = this.node.fw !== this.pred ? this.node.fw : this.node.bw;
					return new ReversibleInternalIterator(this.direction, this.validity, this.node, null, succ);
				} else {
					return new ReversibleInternalIterator(this.direction, this.validity, this.node, null, this.succ);
				}
			}
		}
	}]);

	return ReversibleInternalIterator;
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbGQvSW50ZXJuYWxJdGVyYXRvci5qcyJdLCJuYW1lcyI6WyJSZXZlcnNpYmxlSW50ZXJuYWxJdGVyYXRvciIsImRpcmVjdGlvbiIsInZhbGlkaXR5IiwicHJlZGVjZXNzb3IiLCJzdWNjZXNzb3IiLCJub2RlIiwicHJlZCIsInN1Y2MiLCJ2YWx1ZSIsImRvbmUiLCJmdyIsImJ3IiwidmFsaWQiLCJyZXZlcnNlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUNhQSwwQixXQUFBQSwwQjtBQUVaLHFDQUFjQyxTQUFkLEVBQXlCQyxRQUF6QixFQUFtQ0MsV0FBbkMsRUFBZ0RDLFNBQWhELEVBQTJEQyxJQUEzRCxFQUFrRTtBQUFBOztBQUNqRSxPQUFLSixTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLE9BQUtDLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsT0FBS0ksSUFBTCxHQUFZSCxXQUFaO0FBQ0EsT0FBS0ksSUFBTCxHQUFZSCxTQUFaO0FBQ0EsT0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsT0FBS0csS0FBTCxHQUFhSCxLQUFLRyxLQUFsQjtBQUNBLE9BQUtDLElBQUwsR0FBYUosS0FBS0ssRUFBTCxLQUFZLElBQWIsSUFBdUJMLEtBQUtNLEVBQUwsS0FBWSxJQUEvQztBQUNBOzs7OzBCQUVRO0FBQ1IsVUFBTyxLQUFLVCxRQUFMLENBQWNVLEtBQXJCO0FBQ0E7Ozt5QkFFTztBQUNQLE9BQUksS0FBS1gsU0FBTCxDQUFlWSxRQUFuQixFQUE2Qjs7QUFFNUIsUUFBSSxLQUFLUCxJQUFMLEtBQWMsSUFBbEIsRUFBd0I7QUFDdkIsU0FBTUEsT0FBTyxLQUFLRCxJQUFMLENBQVVLLEVBQVYsS0FBaUIsS0FBS0gsSUFBdEIsR0FBNkIsS0FBS0YsSUFBTCxDQUFVSyxFQUF2QyxHQUE0QyxLQUFLTCxJQUFMLENBQVVNLEVBQW5FO0FBQ0EsWUFBTyxJQUFJWCwwQkFBSixDQUErQixLQUFLQyxTQUFwQyxFQUErQyxLQUFLQyxRQUFwRCxFQUE4RCxJQUE5RCxFQUFvRSxLQUFLRyxJQUF6RSxFQUErRUMsSUFBL0UsQ0FBUDtBQUNBLEtBSEQsTUFLSztBQUNKLFlBQU8sSUFBSU4sMEJBQUosQ0FBK0IsS0FBS0MsU0FBcEMsRUFBK0MsS0FBS0MsUUFBcEQsRUFBOEQsSUFBOUQsRUFBb0UsS0FBS0csSUFBekUsRUFBK0UsS0FBS0MsSUFBcEYsQ0FBUDtBQUNBO0FBRUQsSUFYRCxNQWFLO0FBQ0osUUFBSSxLQUFLQyxJQUFMLEtBQWMsSUFBbEIsRUFBd0I7QUFDdkIsU0FBTUEsT0FBTyxLQUFLRixJQUFMLENBQVVLLEVBQVYsS0FBaUIsS0FBS0osSUFBdEIsR0FBNkIsS0FBS0QsSUFBTCxDQUFVSyxFQUF2QyxHQUE0QyxLQUFLTCxJQUFMLENBQVVNLEVBQW5FO0FBQ0EsWUFBTyxJQUFJWCwwQkFBSixDQUErQixLQUFLQyxTQUFwQyxFQUErQyxLQUFLQyxRQUFwRCxFQUE4RCxLQUFLRyxJQUFuRSxFQUF5RSxJQUF6RSxFQUErRUUsSUFBL0UsQ0FBUDtBQUNBLEtBSEQsTUFLSztBQUNKLFlBQU8sSUFBSVAsMEJBQUosQ0FBK0IsS0FBS0MsU0FBcEMsRUFBK0MsS0FBS0MsUUFBcEQsRUFBOEQsS0FBS0csSUFBbkUsRUFBeUUsSUFBekUsRUFBK0UsS0FBS0UsSUFBcEYsQ0FBUDtBQUNBO0FBQ0Q7QUFDRCIsImZpbGUiOiJJbnRlcm5hbEl0ZXJhdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgY2xhc3MgUmV2ZXJzaWJsZUludGVybmFsSXRlcmF0b3Ige1xuXG5cdGNvbnN0cnVjdG9yICggZGlyZWN0aW9uLCB2YWxpZGl0eSwgcHJlZGVjZXNzb3IsIHN1Y2Nlc3Nvciwgbm9kZSApIHtcblx0XHR0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcblx0XHR0aGlzLnZhbGlkaXR5ID0gdmFsaWRpdHk7XG5cdFx0dGhpcy5wcmVkID0gcHJlZGVjZXNzb3I7XG5cdFx0dGhpcy5zdWNjID0gc3VjY2Vzc29yO1xuXHRcdHRoaXMubm9kZSA9IG5vZGU7XG5cdFx0dGhpcy52YWx1ZSA9IG5vZGUudmFsdWU7XG5cdFx0dGhpcy5kb25lID0gKG5vZGUuZncgPT09IG51bGwpIHx8IChub2RlLmJ3ID09PSBudWxsKTtcblx0fVxuXG5cdHZhbGlkICgpIHtcblx0XHRyZXR1cm4gdGhpcy52YWxpZGl0eS52YWxpZDtcblx0fVxuXG5cdG5leHQgKCkge1xuXHRcdGlmICh0aGlzLmRpcmVjdGlvbi5yZXZlcnNlZCkge1xuXG5cdFx0XHRpZiAodGhpcy5wcmVkID09PSBudWxsKSB7XG5cdFx0XHRcdGNvbnN0IHByZWQgPSB0aGlzLm5vZGUuZncgIT09IHRoaXMuc3VjYyA/IHRoaXMubm9kZS5mdyA6IHRoaXMubm9kZS5idztcblx0XHRcdFx0cmV0dXJuIG5ldyBSZXZlcnNpYmxlSW50ZXJuYWxJdGVyYXRvcih0aGlzLmRpcmVjdGlvbiwgdGhpcy52YWxpZGl0eSwgbnVsbCwgdGhpcy5ub2RlLCBwcmVkKTtcblx0XHRcdH1cblxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHJldHVybiBuZXcgUmV2ZXJzaWJsZUludGVybmFsSXRlcmF0b3IodGhpcy5kaXJlY3Rpb24sIHRoaXMudmFsaWRpdHksIG51bGwsIHRoaXMubm9kZSwgdGhpcy5wcmVkKTtcblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdGVsc2Uge1xuXHRcdFx0aWYgKHRoaXMuc3VjYyA9PT0gbnVsbCkge1xuXHRcdFx0XHRjb25zdCBzdWNjID0gdGhpcy5ub2RlLmZ3ICE9PSB0aGlzLnByZWQgPyB0aGlzLm5vZGUuZncgOiB0aGlzLm5vZGUuYnc7XG5cdFx0XHRcdHJldHVybiBuZXcgUmV2ZXJzaWJsZUludGVybmFsSXRlcmF0b3IodGhpcy5kaXJlY3Rpb24sIHRoaXMudmFsaWRpdHksIHRoaXMubm9kZSwgbnVsbCwgc3VjYyk7XG5cdFx0XHR9XG5cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gbmV3IFJldmVyc2libGVJbnRlcm5hbEl0ZXJhdG9yKHRoaXMuZGlyZWN0aW9uLCB0aGlzLnZhbGlkaXR5LCB0aGlzLm5vZGUsIG51bGwsIHRoaXMuc3VjYyk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==