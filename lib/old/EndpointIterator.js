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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbGQvRW5kcG9pbnRJdGVyYXRvci5qcyJdLCJuYW1lcyI6WyJIZWFkSXRlcmF0b3IiLCJkaXJlY3Rpb24iLCJ2YWxpZGl0eSIsIm5vZGUiLCJ2YWx1ZSIsImRvbmUiLCJ2YWxpZCIsInJldmVyc2VkIiwiYnciLCJJbnRlcm5hbEl0ZXJhdG9yIiwicHJldmlvdXMiLCJmdyIsIkl0ZXJhdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQ2FBLFksV0FBQUEsWTtBQUVaLHVCQUFhQyxTQUFiLEVBQXdCQyxRQUF4QixFQUFrQ0MsSUFBbEMsRUFBd0NDLEtBQXhDLEVBQStDQyxJQUEvQyxFQUFxRDtBQUFBOztBQUNwRCxPQUFLSixTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLE9BQUtFLElBQUwsR0FBWUEsSUFBWjtBQUNBLE9BQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLE9BQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNBLE9BQUtILFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0E7Ozs7MEJBRVE7QUFDUixVQUFPLEtBQUtBLFFBQUwsQ0FBY0ksS0FBckI7QUFDQTs7O3lCQUVPO0FBQ1AsT0FBSSxLQUFLTCxTQUFMLENBQWVNLFFBQW5CLEVBQTZCO0FBQzVCLFFBQUksS0FBS0osSUFBTCxDQUFVSyxFQUFWLEtBQWlCLElBQXJCLEVBQTJCO0FBQzFCLFlBQU8sRUFBRUgsTUFBTyxJQUFULEVBQVA7QUFDQSxLQUZELE1BR0s7QUFDSixZQUFPLElBQUlJLGdCQUFKLENBQXFCLEtBQUtSLFNBQTFCLEVBQXFDLEtBQUtTLFFBQTFDLENBQVA7QUFDQTtBQUNELFFBQUksS0FBS1AsSUFBTCxDQUFVUSxFQUFWLEtBQWlCLElBQXJCLEVBQTJCO0FBQzFCLFlBQU8sRUFBRU4sTUFBTyxJQUFULEVBQVA7QUFDQTtBQUNELFdBQU8sSUFBSU8sUUFBSixDQUFhLEtBQUtYLFNBQWxCLEVBQTZCLEtBQUtDLFFBQWxDLEVBQTRDLEtBQUtDLElBQUwsQ0FBVVEsRUFBdEQsRUFBMEQsS0FBS1IsSUFBTCxDQUFVQyxLQUFwRSxFQUEyRSxLQUFLRCxJQUFMLENBQVVRLEVBQVYsS0FBaUIsSUFBNUYsQ0FBUDtBQUNBLElBWEQsTUFZSztBQUNKLFdBQU8sSUFBSUMsUUFBSixDQUFhLEtBQUtYLFNBQWxCLEVBQTZCLEtBQUtDLFFBQWxDLEVBQTRDLEtBQUtDLElBQUwsQ0FBVUssRUFBdEQsRUFBMEQsS0FBS0wsSUFBTCxDQUFVQyxLQUFwRSxFQUEyRSxLQUFLRCxJQUFMLENBQVVLLEVBQVYsS0FBaUIsSUFBNUYsQ0FBUDtBQUNBO0FBQ0QiLCJmaWxlIjoiRW5kcG9pbnRJdGVyYXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGNsYXNzIEhlYWRJdGVyYXRvciB7XG5cblx0Y29uc3RydWN0b3IgKGRpcmVjdGlvbiwgdmFsaWRpdHksIG5vZGUsIHZhbHVlLCBkb25lKSB7XG5cdFx0dGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG5cdFx0dGhpcy5ub2RlID0gbm9kZTtcblx0XHR0aGlzLnZhbHVlID0gdmFsdWU7XG5cdFx0dGhpcy5kb25lID0gZG9uZTtcblx0XHR0aGlzLnZhbGlkaXR5ID0gdmFsaWRpdHk7XG5cdH1cblxuXHR2YWxpZCAoKSB7XG5cdFx0cmV0dXJuIHRoaXMudmFsaWRpdHkudmFsaWQ7XG5cdH1cblxuXHRuZXh0ICgpIHtcblx0XHRpZiAodGhpcy5kaXJlY3Rpb24ucmV2ZXJzZWQpIHtcblx0XHRcdGlmICh0aGlzLm5vZGUuYncgPT09IG51bGwpIHtcblx0XHRcdFx0cmV0dXJuIHsgZG9uZSA6IHRydWUgfSA7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0cmV0dXJuIG5ldyBJbnRlcm5hbEl0ZXJhdG9yKHRoaXMuZGlyZWN0aW9uLCB0aGlzLnByZXZpb3VzKVxuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMubm9kZS5mdyA9PT0gbnVsbCkge1xuXHRcdFx0XHRyZXR1cm4geyBkb25lIDogdHJ1ZSB9IDtcblx0XHRcdH1cblx0XHRcdHJldHVybiBuZXcgSXRlcmF0b3IodGhpcy5kaXJlY3Rpb24sIHRoaXMudmFsaWRpdHksIHRoaXMubm9kZS5mdywgdGhpcy5ub2RlLnZhbHVlLCB0aGlzLm5vZGUuZncgPT09IG51bGwpO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHJldHVybiBuZXcgSXRlcmF0b3IodGhpcy5kaXJlY3Rpb24sIHRoaXMudmFsaWRpdHksIHRoaXMubm9kZS5idywgdGhpcy5ub2RlLnZhbHVlLCB0aGlzLm5vZGUuYncgPT09IG51bGwpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=