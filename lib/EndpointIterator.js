"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HeadIterator = exports.HeadIterator = function () {
	function HeadIterator(direction, validity, node, value, done) {
		_classCallCheck(this, HeadIterator);

		this.direction = direction;
		this.node = node;
		this.value = value;
		this.done = done;
		this.validity = validity;
	}

	_createClass(HeadIterator, [{
		key: "valid",
		value: function valid() {
			return this.validity.valid;
		}
	}, {
		key: "next",
		value: function next() {
			if (this.direction.reversed) {
				if (this.node.bw === null) {
					return { done: true };
				} else {
					return new InternalIterator(this.direction, this.previous);
				}
				if (this.node.fw === null) {
					return { done: true };
				}
				return new Iterator(this.direction, this.validity, this.node.fw, this.node.value, this.node.fw === null);
			} else {
				return new Iterator(this.direction, this.validity, this.node.bw, this.node.value, this.node.bw === null);
			}
		}
	}]);

	return HeadIterator;
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9FbmRwb2ludEl0ZXJhdG9yLmpzIl0sIm5hbWVzIjpbIkhlYWRJdGVyYXRvciIsImRpcmVjdGlvbiIsInZhbGlkaXR5Iiwibm9kZSIsInZhbHVlIiwiZG9uZSIsInZhbGlkIiwicmV2ZXJzZWQiLCJidyIsIkludGVybmFsSXRlcmF0b3IiLCJwcmV2aW91cyIsImZ3IiwiSXRlcmF0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFDYUEsWSxXQUFBQSxZO0FBRVosdUJBQWFDLFNBQWIsRUFBd0JDLFFBQXhCLEVBQWtDQyxJQUFsQyxFQUF3Q0MsS0FBeEMsRUFBK0NDLElBQS9DLEVBQXFEO0FBQUE7O0FBQ3BELE9BQUtKLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsT0FBS0UsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsT0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsT0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsT0FBS0gsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQTs7OzswQkFFUTtBQUNSLFVBQU8sS0FBS0EsUUFBTCxDQUFjSSxLQUFyQjtBQUNBOzs7eUJBRU87QUFDUCxPQUFJLEtBQUtMLFNBQUwsQ0FBZU0sUUFBbkIsRUFBNkI7QUFDNUIsUUFBSSxLQUFLSixJQUFMLENBQVVLLEVBQVYsS0FBaUIsSUFBckIsRUFBMkI7QUFDMUIsWUFBTyxFQUFFSCxNQUFPLElBQVQsRUFBUDtBQUNBLEtBRkQsTUFHSztBQUNKLFlBQU8sSUFBSUksZ0JBQUosQ0FBcUIsS0FBS1IsU0FBMUIsRUFBcUMsS0FBS1MsUUFBMUMsQ0FBUDtBQUNBO0FBQ0QsUUFBSSxLQUFLUCxJQUFMLENBQVVRLEVBQVYsS0FBaUIsSUFBckIsRUFBMkI7QUFDMUIsWUFBTyxFQUFFTixNQUFPLElBQVQsRUFBUDtBQUNBO0FBQ0QsV0FBTyxJQUFJTyxRQUFKLENBQWEsS0FBS1gsU0FBbEIsRUFBNkIsS0FBS0MsUUFBbEMsRUFBNEMsS0FBS0MsSUFBTCxDQUFVUSxFQUF0RCxFQUEwRCxLQUFLUixJQUFMLENBQVVDLEtBQXBFLEVBQTJFLEtBQUtELElBQUwsQ0FBVVEsRUFBVixLQUFpQixJQUE1RixDQUFQO0FBQ0EsSUFYRCxNQVlLO0FBQ0osV0FBTyxJQUFJQyxRQUFKLENBQWEsS0FBS1gsU0FBbEIsRUFBNkIsS0FBS0MsUUFBbEMsRUFBNEMsS0FBS0MsSUFBTCxDQUFVSyxFQUF0RCxFQUEwRCxLQUFLTCxJQUFMLENBQVVDLEtBQXBFLEVBQTJFLEtBQUtELElBQUwsQ0FBVUssRUFBVixLQUFpQixJQUE1RixDQUFQO0FBQ0E7QUFDRCIsImZpbGUiOiJFbmRwb2ludEl0ZXJhdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgY2xhc3MgSGVhZEl0ZXJhdG9yIHtcblxuXHRjb25zdHJ1Y3RvciAoZGlyZWN0aW9uLCB2YWxpZGl0eSwgbm9kZSwgdmFsdWUsIGRvbmUpIHtcblx0XHR0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcblx0XHR0aGlzLm5vZGUgPSBub2RlO1xuXHRcdHRoaXMudmFsdWUgPSB2YWx1ZTtcblx0XHR0aGlzLmRvbmUgPSBkb25lO1xuXHRcdHRoaXMudmFsaWRpdHkgPSB2YWxpZGl0eTtcblx0fVxuXG5cdHZhbGlkICgpIHtcblx0XHRyZXR1cm4gdGhpcy52YWxpZGl0eS52YWxpZDtcblx0fVxuXG5cdG5leHQgKCkge1xuXHRcdGlmICh0aGlzLmRpcmVjdGlvbi5yZXZlcnNlZCkge1xuXHRcdFx0aWYgKHRoaXMubm9kZS5idyA9PT0gbnVsbCkge1xuXHRcdFx0XHRyZXR1cm4geyBkb25lIDogdHJ1ZSB9IDtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gbmV3IEludGVybmFsSXRlcmF0b3IodGhpcy5kaXJlY3Rpb24sIHRoaXMucHJldmlvdXMpXG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5ub2RlLmZ3ID09PSBudWxsKSB7XG5cdFx0XHRcdHJldHVybiB7IGRvbmUgOiB0cnVlIH0gO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG5ldyBJdGVyYXRvcih0aGlzLmRpcmVjdGlvbiwgdGhpcy52YWxpZGl0eSwgdGhpcy5ub2RlLmZ3LCB0aGlzLm5vZGUudmFsdWUsIHRoaXMubm9kZS5mdyA9PT0gbnVsbCk7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0cmV0dXJuIG5ldyBJdGVyYXRvcih0aGlzLmRpcmVjdGlvbiwgdGhpcy52YWxpZGl0eSwgdGhpcy5ub2RlLmJ3LCB0aGlzLm5vZGUudmFsdWUsIHRoaXMubm9kZS5idyA9PT0gbnVsbCk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==