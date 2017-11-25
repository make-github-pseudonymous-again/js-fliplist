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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9JbnRlcm5hbEl0ZXJhdG9yLmpzIl0sIm5hbWVzIjpbIlJldmVyc2libGVJbnRlcm5hbEl0ZXJhdG9yIiwiZGlyZWN0aW9uIiwidmFsaWRpdHkiLCJwcmVkZWNlc3NvciIsInN1Y2Nlc3NvciIsIm5vZGUiLCJwcmVkIiwic3VjYyIsInZhbHVlIiwiZG9uZSIsImZ3IiwiYnciLCJ2YWxpZCIsInJldmVyc2VkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQ2FBLDBCLFdBQUFBLDBCO0FBRVoscUNBQWNDLFNBQWQsRUFBeUJDLFFBQXpCLEVBQW1DQyxXQUFuQyxFQUFnREMsU0FBaEQsRUFBMkRDLElBQTNELEVBQWtFO0FBQUE7O0FBQ2pFLE9BQUtKLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsT0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxPQUFLSSxJQUFMLEdBQVlILFdBQVo7QUFDQSxPQUFLSSxJQUFMLEdBQVlILFNBQVo7QUFDQSxPQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDQSxPQUFLRyxLQUFMLEdBQWFILEtBQUtHLEtBQWxCO0FBQ0EsT0FBS0MsSUFBTCxHQUFhSixLQUFLSyxFQUFMLEtBQVksSUFBYixJQUF1QkwsS0FBS00sRUFBTCxLQUFZLElBQS9DO0FBQ0E7Ozs7MEJBRVE7QUFDUixVQUFPLEtBQUtULFFBQUwsQ0FBY1UsS0FBckI7QUFDQTs7O3lCQUVPO0FBQ1AsT0FBSSxLQUFLWCxTQUFMLENBQWVZLFFBQW5CLEVBQTZCOztBQUU1QixRQUFJLEtBQUtQLElBQUwsS0FBYyxJQUFsQixFQUF3QjtBQUN2QixTQUFNQSxPQUFPLEtBQUtELElBQUwsQ0FBVUssRUFBVixLQUFpQixLQUFLSCxJQUF0QixHQUE2QixLQUFLRixJQUFMLENBQVVLLEVBQXZDLEdBQTRDLEtBQUtMLElBQUwsQ0FBVU0sRUFBbkU7QUFDQSxZQUFPLElBQUlYLDBCQUFKLENBQStCLEtBQUtDLFNBQXBDLEVBQStDLEtBQUtDLFFBQXBELEVBQThELElBQTlELEVBQW9FLEtBQUtHLElBQXpFLEVBQStFQyxJQUEvRSxDQUFQO0FBQ0EsS0FIRCxNQUtLO0FBQ0osWUFBTyxJQUFJTiwwQkFBSixDQUErQixLQUFLQyxTQUFwQyxFQUErQyxLQUFLQyxRQUFwRCxFQUE4RCxJQUE5RCxFQUFvRSxLQUFLRyxJQUF6RSxFQUErRSxLQUFLQyxJQUFwRixDQUFQO0FBQ0E7QUFFRCxJQVhELE1BYUs7QUFDSixRQUFJLEtBQUtDLElBQUwsS0FBYyxJQUFsQixFQUF3QjtBQUN2QixTQUFNQSxPQUFPLEtBQUtGLElBQUwsQ0FBVUssRUFBVixLQUFpQixLQUFLSixJQUF0QixHQUE2QixLQUFLRCxJQUFMLENBQVVLLEVBQXZDLEdBQTRDLEtBQUtMLElBQUwsQ0FBVU0sRUFBbkU7QUFDQSxZQUFPLElBQUlYLDBCQUFKLENBQStCLEtBQUtDLFNBQXBDLEVBQStDLEtBQUtDLFFBQXBELEVBQThELEtBQUtHLElBQW5FLEVBQXlFLElBQXpFLEVBQStFRSxJQUEvRSxDQUFQO0FBQ0EsS0FIRCxNQUtLO0FBQ0osWUFBTyxJQUFJUCwwQkFBSixDQUErQixLQUFLQyxTQUFwQyxFQUErQyxLQUFLQyxRQUFwRCxFQUE4RCxLQUFLRyxJQUFuRSxFQUF5RSxJQUF6RSxFQUErRSxLQUFLRSxJQUFwRixDQUFQO0FBQ0E7QUFDRDtBQUNEIiwiZmlsZSI6IkludGVybmFsSXRlcmF0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBjbGFzcyBSZXZlcnNpYmxlSW50ZXJuYWxJdGVyYXRvciB7XG5cblx0Y29uc3RydWN0b3IgKCBkaXJlY3Rpb24sIHZhbGlkaXR5LCBwcmVkZWNlc3Nvciwgc3VjY2Vzc29yLCBub2RlICkge1xuXHRcdHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuXHRcdHRoaXMudmFsaWRpdHkgPSB2YWxpZGl0eTtcblx0XHR0aGlzLnByZWQgPSBwcmVkZWNlc3Nvcjtcblx0XHR0aGlzLnN1Y2MgPSBzdWNjZXNzb3I7XG5cdFx0dGhpcy5ub2RlID0gbm9kZTtcblx0XHR0aGlzLnZhbHVlID0gbm9kZS52YWx1ZTtcblx0XHR0aGlzLmRvbmUgPSAobm9kZS5mdyA9PT0gbnVsbCkgfHwgKG5vZGUuYncgPT09IG51bGwpO1xuXHR9XG5cblx0dmFsaWQgKCkge1xuXHRcdHJldHVybiB0aGlzLnZhbGlkaXR5LnZhbGlkO1xuXHR9XG5cblx0bmV4dCAoKSB7XG5cdFx0aWYgKHRoaXMuZGlyZWN0aW9uLnJldmVyc2VkKSB7XG5cblx0XHRcdGlmICh0aGlzLnByZWQgPT09IG51bGwpIHtcblx0XHRcdFx0Y29uc3QgcHJlZCA9IHRoaXMubm9kZS5mdyAhPT0gdGhpcy5zdWNjID8gdGhpcy5ub2RlLmZ3IDogdGhpcy5ub2RlLmJ3O1xuXHRcdFx0XHRyZXR1cm4gbmV3IFJldmVyc2libGVJbnRlcm5hbEl0ZXJhdG9yKHRoaXMuZGlyZWN0aW9uLCB0aGlzLnZhbGlkaXR5LCBudWxsLCB0aGlzLm5vZGUsIHByZWQpO1xuXHRcdFx0fVxuXG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0cmV0dXJuIG5ldyBSZXZlcnNpYmxlSW50ZXJuYWxJdGVyYXRvcih0aGlzLmRpcmVjdGlvbiwgdGhpcy52YWxpZGl0eSwgbnVsbCwgdGhpcy5ub2RlLCB0aGlzLnByZWQpO1xuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0ZWxzZSB7XG5cdFx0XHRpZiAodGhpcy5zdWNjID09PSBudWxsKSB7XG5cdFx0XHRcdGNvbnN0IHN1Y2MgPSB0aGlzLm5vZGUuZncgIT09IHRoaXMucHJlZCA/IHRoaXMubm9kZS5mdyA6IHRoaXMubm9kZS5idztcblx0XHRcdFx0cmV0dXJuIG5ldyBSZXZlcnNpYmxlSW50ZXJuYWxJdGVyYXRvcih0aGlzLmRpcmVjdGlvbiwgdGhpcy52YWxpZGl0eSwgdGhpcy5ub2RlLCBudWxsLCBzdWNjKTtcblx0XHRcdH1cblxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHJldHVybiBuZXcgUmV2ZXJzaWJsZUludGVybmFsSXRlcmF0b3IodGhpcy5kaXJlY3Rpb24sIHRoaXMudmFsaWRpdHksIHRoaXMubm9kZSwgbnVsbCwgdGhpcy5zdWNjKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxufVxuIl19