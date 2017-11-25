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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbGQvUmV2ZXJzZUl0ZXJhdG9yLmpzIl0sIm5hbWVzIjpbIlJldmVyc2VJdGVyYXRvciIsInBhcmVudCIsIm5vZGUiLCJ2YWx1ZSIsImRvbmUiLCJjdXJyZW50IiwidmFsaWQiLCJyZXZlcnNlZCIsInlhbmciLCJ5aW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQ2FBLGUsV0FBQUEsZTtBQUVaLDBCQUFhQyxNQUFiLEVBQXFCQyxJQUFyQixFQUEyQkMsS0FBM0IsRUFBa0NDLElBQWxDLEVBQXdDO0FBQUE7O0FBQ3ZDLE9BQUtILE1BQUwsR0FBY0EsTUFBZDtBQUNBLE9BQUtJLE9BQUwsR0FBZUEsT0FBZjtBQUNBLE9BQUtGLEtBQUwsR0FBYUEsS0FBYjtBQUNBLE9BQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNBOzs7OzBCQUVPO0FBQ1AsVUFBTyxLQUFLSCxNQUFMLENBQVlLLEtBQW5CO0FBQ0E7Ozt5QkFFTTtBQUNOLE9BQUksS0FBS0wsTUFBTCxDQUFZTSxRQUFoQixFQUEwQjtBQUN6QixXQUFPLElBQUlQLGVBQUosQ0FBb0IsS0FBS0MsTUFBekIsRUFBaUMsS0FBS0MsSUFBTCxDQUFVTSxJQUEzQyxFQUFpRCxLQUFLTixJQUFMLENBQVVDLEtBQTNELEVBQWtFLEtBQUtELElBQUwsQ0FBVU0sSUFBVixLQUFtQixJQUFyRixDQUFQO0FBQ0EsSUFGRCxNQUdLO0FBQ0osV0FBTyxJQUFJUixlQUFKLENBQW9CLEtBQUtDLE1BQXpCLEVBQWlDLEtBQUtDLElBQUwsQ0FBVU8sSUFBM0MsRUFBaUQsS0FBS1AsSUFBTCxDQUFVQyxLQUEzRCxFQUFrRSxLQUFLRCxJQUFMLENBQVVPLElBQVYsS0FBbUIsSUFBckYsQ0FBUDtBQUNBO0FBQ0QiLCJmaWxlIjoiUmV2ZXJzZUl0ZXJhdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgY2xhc3MgUmV2ZXJzZUl0ZXJhdG9yIHtcblxuXHRjb25zdHJ1Y3RvciAocGFyZW50LCBub2RlLCB2YWx1ZSwgZG9uZSkge1xuXHRcdHRoaXMucGFyZW50ID0gcGFyZW50O1xuXHRcdHRoaXMuY3VycmVudCA9IGN1cnJlbnQ7XG5cdFx0dGhpcy52YWx1ZSA9IHZhbHVlO1xuXHRcdHRoaXMuZG9uZSA9IGRvbmU7XG5cdH1cblxuXHR2YWxpZCAoKXtcblx0XHRyZXR1cm4gdGhpcy5wYXJlbnQudmFsaWQ7XG5cdH1cblxuXHRuZXh0ICgpe1xuXHRcdGlmICh0aGlzLnBhcmVudC5yZXZlcnNlZCkge1xuXHRcdFx0cmV0dXJuIG5ldyBSZXZlcnNlSXRlcmF0b3IodGhpcy5wYXJlbnQsIHRoaXMubm9kZS55YW5nLCB0aGlzLm5vZGUudmFsdWUsIHRoaXMubm9kZS55YW5nID09PSBudWxsKTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRyZXR1cm4gbmV3IFJldmVyc2VJdGVyYXRvcih0aGlzLnBhcmVudCwgdGhpcy5ub2RlLnlpbmcsIHRoaXMubm9kZS52YWx1ZSwgdGhpcy5ub2RlLnlpbmcgPT09IG51bGwpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=