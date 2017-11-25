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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbGQvSXRlcmF0b3IzLmpzIl0sIm5hbWVzIjpbIkl0ZXJhdG9yIiwiZGlyZWN0aW9uIiwibm9kZSIsInZhbHVlIiwiZG9uZSIsInlhbmciLCJ5aW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQ2FBLFEsV0FBQUEsUTtBQUVaLG1CQUFhQyxTQUFiLEVBQXdCQyxJQUF4QixFQUE4QkMsS0FBOUIsRUFBcUNDLElBQXJDLEVBQTJDO0FBQUE7O0FBQzFDLE9BQUtILFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsT0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsT0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsT0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0E7Ozs7eUJBRU07QUFDTixPQUFJLEtBQUtILFNBQUwsQ0FBZUUsS0FBZixLQUF5QixDQUE3QixFQUFnQztBQUMvQixXQUFPLElBQUlILFFBQUosQ0FBYSxLQUFLQyxTQUFsQixFQUE2QixLQUFLQyxJQUFMLENBQVVHLElBQXZDLEVBQTZDLEtBQUtILElBQUwsQ0FBVUMsS0FBdkQsRUFBOEQsS0FBS0QsSUFBTCxDQUFVRyxJQUFWLEtBQW1CLElBQWpGLENBQVA7QUFDQSxJQUZELE1BR0s7QUFDSixXQUFPLElBQUlMLFFBQUosQ0FBYSxLQUFLQyxTQUFsQixFQUE2QixLQUFLQyxJQUFMLENBQVVJLElBQXZDLEVBQTZDLEtBQUtKLElBQUwsQ0FBVUMsS0FBdkQsRUFBOEQsS0FBS0QsSUFBTCxDQUFVSSxJQUFWLEtBQW1CLElBQWpGLENBQVA7QUFDQTtBQUNEIiwiZmlsZSI6Ikl0ZXJhdG9yMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGNsYXNzIEl0ZXJhdG9yIHtcblxuXHRjb25zdHJ1Y3RvciAoZGlyZWN0aW9uLCBub2RlLCB2YWx1ZSwgZG9uZSkge1xuXHRcdHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuXHRcdHRoaXMubm9kZSA9IG5vZGU7XG5cdFx0dGhpcy52YWx1ZSA9IHZhbHVlO1xuXHRcdHRoaXMuZG9uZSA9IGRvbmU7XG5cdH1cblxuXHRuZXh0ICgpe1xuXHRcdGlmICh0aGlzLmRpcmVjdGlvbi52YWx1ZSA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIG5ldyBJdGVyYXRvcih0aGlzLmRpcmVjdGlvbiwgdGhpcy5ub2RlLnlhbmcsIHRoaXMubm9kZS52YWx1ZSwgdGhpcy5ub2RlLnlhbmcgPT09IG51bGwpO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHJldHVybiBuZXcgSXRlcmF0b3IodGhpcy5kaXJlY3Rpb24sIHRoaXMubm9kZS55aW5nLCB0aGlzLm5vZGUudmFsdWUsIHRoaXMubm9kZS55aW5nID09PSBudWxsKTtcblx0XHR9XG5cdH1cblxuXG5cbn1cbiJdfQ==