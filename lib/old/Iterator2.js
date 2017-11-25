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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbGQvSXRlcmF0b3IyLmpzIl0sIm5hbWVzIjpbIkl0ZXJhdG9yMiIsInByZXYiLCJub2RlIiwidmFsdWUiLCJkb25lIiwiZGlyZWN0aW9uIiwieWluZyIsInlhbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFDYUEsUyxXQUFBQSxTO0FBRVosb0JBQWFDLElBQWIsRUFBbUJDLElBQW5CLEVBQXlCQyxLQUF6QixFQUFnQ0MsSUFBaEMsRUFBc0M7QUFBQTs7QUFDckMsT0FBS0MsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxPQUFLSCxJQUFMLEdBQVlBLElBQVo7QUFDQSxPQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxPQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDQTs7Ozt5QkFFTTtBQUNOLE9BQUksS0FBS0YsSUFBTCxDQUFVSSxJQUFWLEtBQW1CLEtBQUtMLElBQTVCLEVBQWtDO0FBQ2pDLFdBQU8sSUFBSUQsU0FBSixDQUFjLEtBQUtFLElBQW5CLEVBQXlCLEtBQUtBLElBQUwsQ0FBVUssSUFBbkMsRUFBeUMsS0FBS0wsSUFBTCxDQUFVQyxLQUFuRCxFQUEwRCxLQUFLRCxJQUFMLENBQVVLLElBQVYsS0FBbUIsSUFBN0UsQ0FBUDtBQUNBLElBRkQsTUFHSztBQUNKLFdBQU8sSUFBSVAsU0FBSixDQUFjLEtBQUtFLElBQW5CLEVBQXlCLEtBQUtBLElBQUwsQ0FBVUksSUFBbkMsRUFBeUMsS0FBS0osSUFBTCxDQUFVQyxLQUFuRCxFQUEwRCxLQUFLRCxJQUFMLENBQVVJLElBQVYsS0FBbUIsSUFBN0UsQ0FBUDtBQUNBO0FBQ0QiLCJmaWxlIjoiSXRlcmF0b3IyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgY2xhc3MgSXRlcmF0b3IyIHtcblxuXHRjb25zdHJ1Y3RvciAocHJldiwgbm9kZSwgdmFsdWUsIGRvbmUpIHtcblx0XHR0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcblx0XHR0aGlzLm5vZGUgPSBub2RlO1xuXHRcdHRoaXMudmFsdWUgPSB2YWx1ZTtcblx0XHR0aGlzLmRvbmUgPSBkb25lO1xuXHR9XG5cblx0bmV4dCAoKXtcblx0XHRpZiAodGhpcy5ub2RlLnlpbmcgPT09IHRoaXMucHJldikge1xuXHRcdFx0cmV0dXJuIG5ldyBJdGVyYXRvcjIodGhpcy5ub2RlLCB0aGlzLm5vZGUueWFuZywgdGhpcy5ub2RlLnZhbHVlLCB0aGlzLm5vZGUueWFuZyA9PT0gbnVsbCk7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0cmV0dXJuIG5ldyBJdGVyYXRvcjIodGhpcy5ub2RlLCB0aGlzLm5vZGUueWluZywgdGhpcy5ub2RlLnZhbHVlLCB0aGlzLm5vZGUueWluZyA9PT0gbnVsbCk7XG5cdFx0fVxuXHR9XG5cblxuXG59XG4iXX0=