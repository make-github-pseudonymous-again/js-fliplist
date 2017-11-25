'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.FlipList = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // when traversing a node, make it valid again and update direction
// or use union find ds

var _Node = require('./Node');

var _ValidityToken = require('./ValidityToken');

var _Direction = require('./Direction');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FlipList = exports.FlipList = function () {
	function FlipList() {
		_classCallCheck(this, FlipList);

		this.head = new _Node.Node(null, null, null);
		this.tail = new _Node.Node(this.head, null, null);
		this.head.fw = this.tail;

		this.fd = new _Direction.Direction(false);
		this.bd = new _Direction.Direction(true);
		this.validity = new _ValidityToken.ValidityToken(true);
	}

	_createClass(FlipList, [{
		key: 'first',
		value: function first() {
			return this.head.bw !== null ? this.head.bw : this.head.fw;
		}
	}, {
		key: 'last',
		value: function last() {
			return this.tail.bw !== null ? this.tail.bw : this.tail.fw;
		}
	}, {
		key: 'begin',
		value: function begin() {
			return new Iterator(this, this.head, null, false);
		}
	}, {
		key: 'end',
		value: function end() {
			return new Iterator(this, this.tail, null, false);
		}
	}, {
		key: 'rbegin',
		value: function rbegin() {
			return new ReverseIterator(this, this.tail, null, false);
		}
	}, {
		key: 'rend',
		value: function rend() {
			return new ReverseIterator(this, this.head, null, false);
		}

		// assert valid

	}, {
		key: 'insert_before',
		value: function insert_before(node, value) {}

		// assert valid

	}, {
		key: 'insert_after',
		value: function insert_after(node, value) {}
	}, {
		key: 'append',
		value: function append(value) {

			var last = this.last();
			var tail = this.tail;
			var node = new _Node.Node(last, tail, value);

			if (last.bw === tail) last.bw = node;else last.fw = node;

			if (tail.bw !== null) tail.bw = node;else tail.fw = node;

			return node;
		}
	}, {
		key: 'prepend',
		value: function prepend(value) {

			var first = this.first();
			var head = this.head;
			var node = new _Node.Node(head, first, value);

			if (first.bw === head) first.bw = node;else first.fw = node;

			if (head.bw !== null) head.bw = node;else head.fw = node;

			return node;
		}
	}, {
		key: 'extend',
		value: function extend(other) {

			// invalidate all iterators to nodes in other list
			other.valid = false;

			// compute last element of this === previous of this.tail
			var thislast = this.last();
			// compute first element of other === next of other.head
			var otherfirst = other.first();
			// compute last element of other === previous of other.tail
			var otherlast = other.last();

			// make thislast next point to otherfirst
			if (thislast.bw === this.tail) thislast.bw = otherfirst;else thislast.fw = otherfirst;

			// make otherfirst prev point to thislast
			if (otherfirst.bw === other.head) otherfirst.bw = thislast;else otherfirst.fw = thislast;

			// make this.tail prev point to otherlast
			if (this.tail.bw !== null) this.tail.bw = otherlast;else this.tail.fw = otherlast;

			// make otherlast next point to this.tail
			if (otherlast.bw === other.tail) otherlast.bw = this.tail;else otherlast.fw = this.tail;
		}
	}, {
		key: 'reverse',
		value: function reverse() {

			// reverse head and tail pointers
			var head = this.head;
			this.head = this.tail;
			this.tail = head;

			// reverse iterator directions
			this.reversed = !this.reversed;
		}
	}]);

	return FlipList;
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbGQvRmxpcExpc3QuanMiXSwibmFtZXMiOlsiRmxpcExpc3QiLCJoZWFkIiwidGFpbCIsImZ3IiwiZmQiLCJiZCIsInZhbGlkaXR5IiwiYnciLCJJdGVyYXRvciIsIlJldmVyc2VJdGVyYXRvciIsIm5vZGUiLCJ2YWx1ZSIsImxhc3QiLCJmaXJzdCIsIm90aGVyIiwidmFsaWQiLCJ0aGlzbGFzdCIsIm90aGVyZmlyc3QiLCJvdGhlcmxhc3QiLCJyZXZlcnNlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztxakJBQUE7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7OztJQUVhQSxRLFdBQUFBLFE7QUFFWixxQkFBZTtBQUFBOztBQUVkLE9BQUtDLElBQUwsR0FBWSxlQUFTLElBQVQsRUFBZSxJQUFmLEVBQXFCLElBQXJCLENBQVo7QUFDQSxPQUFLQyxJQUFMLEdBQVksZUFBUyxLQUFLRCxJQUFkLEVBQW9CLElBQXBCLEVBQTBCLElBQTFCLENBQVo7QUFDQSxPQUFLQSxJQUFMLENBQVVFLEVBQVYsR0FBZSxLQUFLRCxJQUFwQjs7QUFFQSxPQUFLRSxFQUFMLEdBQVUseUJBQWMsS0FBZCxDQUFWO0FBQ0EsT0FBS0MsRUFBTCxHQUFVLHlCQUFjLElBQWQsQ0FBVjtBQUNBLE9BQUtDLFFBQUwsR0FBZ0IsaUNBQWtCLElBQWxCLENBQWhCO0FBRUE7Ozs7MEJBRVM7QUFDVCxVQUFPLEtBQUtMLElBQUwsQ0FBVU0sRUFBVixLQUFpQixJQUFqQixHQUF3QixLQUFLTixJQUFMLENBQVVNLEVBQWxDLEdBQXVDLEtBQUtOLElBQUwsQ0FBVUUsRUFBeEQ7QUFDQTs7O3lCQUVRO0FBQ1IsVUFBTyxLQUFLRCxJQUFMLENBQVVLLEVBQVYsS0FBaUIsSUFBakIsR0FBd0IsS0FBS0wsSUFBTCxDQUFVSyxFQUFsQyxHQUF1QyxLQUFLTCxJQUFMLENBQVVDLEVBQXhEO0FBQ0E7OzswQkFFUztBQUNULFVBQU8sSUFBSUssUUFBSixDQUFhLElBQWIsRUFBbUIsS0FBS1AsSUFBeEIsRUFBOEIsSUFBOUIsRUFBb0MsS0FBcEMsQ0FBUDtBQUNBOzs7d0JBRU87QUFDUCxVQUFPLElBQUlPLFFBQUosQ0FBYSxJQUFiLEVBQW1CLEtBQUtOLElBQXhCLEVBQThCLElBQTlCLEVBQW9DLEtBQXBDLENBQVA7QUFDQTs7OzJCQUVVO0FBQ1YsVUFBTyxJQUFJTyxlQUFKLENBQW9CLElBQXBCLEVBQTBCLEtBQUtQLElBQS9CLEVBQXFDLElBQXJDLEVBQTJDLEtBQTNDLENBQVA7QUFDQTs7O3lCQUVRO0FBQ1IsVUFBTyxJQUFJTyxlQUFKLENBQW9CLElBQXBCLEVBQTBCLEtBQUtSLElBQS9CLEVBQXFDLElBQXJDLEVBQTJDLEtBQTNDLENBQVA7QUFDQTs7QUFFRDs7OztnQ0FDZVMsSSxFQUFNQyxLLEVBQU8sQ0FFM0I7O0FBRUQ7Ozs7K0JBQ2NELEksRUFBTUMsSyxFQUFPLENBRTFCOzs7eUJBRU9BLEssRUFBTzs7QUFFZCxPQUFNQyxPQUFPLEtBQUtBLElBQUwsRUFBYjtBQUNBLE9BQU1WLE9BQU8sS0FBS0EsSUFBbEI7QUFDQSxPQUFNUSxPQUFPLGVBQVNFLElBQVQsRUFBZVYsSUFBZixFQUFxQlMsS0FBckIsQ0FBYjs7QUFFQSxPQUFJQyxLQUFLTCxFQUFMLEtBQVlMLElBQWhCLEVBQXNCVSxLQUFLTCxFQUFMLEdBQVVHLElBQVYsQ0FBdEIsS0FDS0UsS0FBS1QsRUFBTCxHQUFVTyxJQUFWOztBQUVMLE9BQUlSLEtBQUtLLEVBQUwsS0FBWSxJQUFoQixFQUFzQkwsS0FBS0ssRUFBTCxHQUFVRyxJQUFWLENBQXRCLEtBQ0tSLEtBQUtDLEVBQUwsR0FBVU8sSUFBVjs7QUFFTCxVQUFPQSxJQUFQO0FBRUE7OzswQkFFUUMsSyxFQUFPOztBQUVmLE9BQU1FLFFBQVEsS0FBS0EsS0FBTCxFQUFkO0FBQ0EsT0FBTVosT0FBTyxLQUFLQSxJQUFsQjtBQUNBLE9BQU1TLE9BQU8sZUFBU1QsSUFBVCxFQUFlWSxLQUFmLEVBQXNCRixLQUF0QixDQUFiOztBQUVBLE9BQUlFLE1BQU1OLEVBQU4sS0FBYU4sSUFBakIsRUFBdUJZLE1BQU1OLEVBQU4sR0FBV0csSUFBWCxDQUF2QixLQUNLRyxNQUFNVixFQUFOLEdBQVdPLElBQVg7O0FBRUwsT0FBSVQsS0FBS00sRUFBTCxLQUFZLElBQWhCLEVBQXNCTixLQUFLTSxFQUFMLEdBQVVHLElBQVYsQ0FBdEIsS0FDS1QsS0FBS0UsRUFBTCxHQUFVTyxJQUFWOztBQUVMLFVBQU9BLElBQVA7QUFFQTs7O3lCQUVPSSxLLEVBQU87O0FBRWQ7QUFDQUEsU0FBTUMsS0FBTixHQUFjLEtBQWQ7O0FBRUE7QUFDQSxPQUFNQyxXQUFXLEtBQUtKLElBQUwsRUFBakI7QUFDQTtBQUNBLE9BQU1LLGFBQWFILE1BQU1ELEtBQU4sRUFBbkI7QUFDQTtBQUNBLE9BQU1LLFlBQVlKLE1BQU1GLElBQU4sRUFBbEI7O0FBRUE7QUFDQSxPQUFJSSxTQUFTVCxFQUFULEtBQWdCLEtBQUtMLElBQXpCLEVBQStCYyxTQUFTVCxFQUFULEdBQWNVLFVBQWQsQ0FBL0IsS0FDS0QsU0FBU2IsRUFBVCxHQUFjYyxVQUFkOztBQUVMO0FBQ0EsT0FBSUEsV0FBV1YsRUFBWCxLQUFrQk8sTUFBTWIsSUFBNUIsRUFBa0NnQixXQUFXVixFQUFYLEdBQWdCUyxRQUFoQixDQUFsQyxLQUNLQyxXQUFXZCxFQUFYLEdBQWdCYSxRQUFoQjs7QUFFTDtBQUNBLE9BQUksS0FBS2QsSUFBTCxDQUFVSyxFQUFWLEtBQWlCLElBQXJCLEVBQTJCLEtBQUtMLElBQUwsQ0FBVUssRUFBVixHQUFlVyxTQUFmLENBQTNCLEtBQ0ssS0FBS2hCLElBQUwsQ0FBVUMsRUFBVixHQUFlZSxTQUFmOztBQUVMO0FBQ0EsT0FBSUEsVUFBVVgsRUFBVixLQUFpQk8sTUFBTVosSUFBM0IsRUFBaUNnQixVQUFVWCxFQUFWLEdBQWUsS0FBS0wsSUFBcEIsQ0FBakMsS0FDS2dCLFVBQVVmLEVBQVYsR0FBZSxLQUFLRCxJQUFwQjtBQUVMOzs7NEJBRVU7O0FBRVY7QUFDQSxPQUFNRCxPQUFPLEtBQUtBLElBQWxCO0FBQ0EsUUFBS0EsSUFBTCxHQUFZLEtBQUtDLElBQWpCO0FBQ0EsUUFBS0EsSUFBTCxHQUFZRCxJQUFaOztBQUVBO0FBQ0EsUUFBS2tCLFFBQUwsR0FBZ0IsQ0FBQyxLQUFLQSxRQUF0QjtBQUVBIiwiZmlsZSI6IkZsaXBMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gd2hlbiB0cmF2ZXJzaW5nIGEgbm9kZSwgbWFrZSBpdCB2YWxpZCBhZ2FpbiBhbmQgdXBkYXRlIGRpcmVjdGlvblxuLy8gb3IgdXNlIHVuaW9uIGZpbmQgZHNcblxuaW1wb3J0IHsgTm9kZSB9IGZyb20gJy4vTm9kZScgO1xuaW1wb3J0IHsgVmFsaWRpdHlUb2tlbiB9IGZyb20gJy4vVmFsaWRpdHlUb2tlbicgO1xuaW1wb3J0IHsgRGlyZWN0aW9uIH0gZnJvbSAnLi9EaXJlY3Rpb24nIDtcblxuZXhwb3J0IGNsYXNzIEZsaXBMaXN0IHtcblxuXHRjb25zdHJ1Y3RvciAoKSB7XG5cblx0XHR0aGlzLmhlYWQgPSBuZXcgTm9kZShudWxsLCBudWxsLCBudWxsKTtcblx0XHR0aGlzLnRhaWwgPSBuZXcgTm9kZSh0aGlzLmhlYWQsIG51bGwsIG51bGwpO1xuXHRcdHRoaXMuaGVhZC5mdyA9IHRoaXMudGFpbDtcblxuXHRcdHRoaXMuZmQgPSBuZXcgRGlyZWN0aW9uKGZhbHNlKTtcblx0XHR0aGlzLmJkID0gbmV3IERpcmVjdGlvbih0cnVlKTtcblx0XHR0aGlzLnZhbGlkaXR5ID0gbmV3IFZhbGlkaXR5VG9rZW4odHJ1ZSk7XG5cblx0fVxuXG5cdGZpcnN0ICggKSB7XG5cdFx0cmV0dXJuIHRoaXMuaGVhZC5idyAhPT0gbnVsbCA/IHRoaXMuaGVhZC5idyA6IHRoaXMuaGVhZC5mdyA7XG5cdH1cblxuXHRsYXN0ICggKSB7XG5cdFx0cmV0dXJuIHRoaXMudGFpbC5idyAhPT0gbnVsbCA/IHRoaXMudGFpbC5idyA6IHRoaXMudGFpbC5mdyA7XG5cdH1cblxuXHRiZWdpbiAoICkge1xuXHRcdHJldHVybiBuZXcgSXRlcmF0b3IodGhpcywgdGhpcy5oZWFkLCBudWxsLCBmYWxzZSk7XG5cdH1cblxuXHRlbmQgKCApIHtcblx0XHRyZXR1cm4gbmV3IEl0ZXJhdG9yKHRoaXMsIHRoaXMudGFpbCwgbnVsbCwgZmFsc2UpO1xuXHR9XG5cblx0cmJlZ2luICggKSB7XG5cdFx0cmV0dXJuIG5ldyBSZXZlcnNlSXRlcmF0b3IodGhpcywgdGhpcy50YWlsLCBudWxsLCBmYWxzZSk7XG5cdH1cblxuXHRyZW5kICggKSB7XG5cdFx0cmV0dXJuIG5ldyBSZXZlcnNlSXRlcmF0b3IodGhpcywgdGhpcy5oZWFkLCBudWxsLCBmYWxzZSk7XG5cdH1cblxuXHQvLyBhc3NlcnQgdmFsaWRcblx0aW5zZXJ0X2JlZm9yZSAobm9kZSwgdmFsdWUpIHtcblxuXHR9XG5cblx0Ly8gYXNzZXJ0IHZhbGlkXG5cdGluc2VydF9hZnRlciAobm9kZSwgdmFsdWUpIHtcblxuXHR9XG5cblx0YXBwZW5kICh2YWx1ZSkge1xuXG5cdFx0Y29uc3QgbGFzdCA9IHRoaXMubGFzdCgpO1xuXHRcdGNvbnN0IHRhaWwgPSB0aGlzLnRhaWw7XG5cdFx0Y29uc3Qgbm9kZSA9IG5ldyBOb2RlKGxhc3QsIHRhaWwsIHZhbHVlKTtcblxuXHRcdGlmIChsYXN0LmJ3ID09PSB0YWlsKSBsYXN0LmJ3ID0gbm9kZTtcblx0XHRlbHNlIGxhc3QuZncgPSBub2RlO1xuXG5cdFx0aWYgKHRhaWwuYncgIT09IG51bGwpIHRhaWwuYncgPSBub2RlO1xuXHRcdGVsc2UgdGFpbC5mdyA9IG5vZGU7XG5cblx0XHRyZXR1cm4gbm9kZTtcblxuXHR9XG5cblx0cHJlcGVuZCAodmFsdWUpIHtcblxuXHRcdGNvbnN0IGZpcnN0ID0gdGhpcy5maXJzdCgpO1xuXHRcdGNvbnN0IGhlYWQgPSB0aGlzLmhlYWQ7XG5cdFx0Y29uc3Qgbm9kZSA9IG5ldyBOb2RlKGhlYWQsIGZpcnN0LCB2YWx1ZSk7XG5cblx0XHRpZiAoZmlyc3QuYncgPT09IGhlYWQpIGZpcnN0LmJ3ID0gbm9kZTtcblx0XHRlbHNlIGZpcnN0LmZ3ID0gbm9kZTtcblxuXHRcdGlmIChoZWFkLmJ3ICE9PSBudWxsKSBoZWFkLmJ3ID0gbm9kZTtcblx0XHRlbHNlIGhlYWQuZncgPSBub2RlO1xuXG5cdFx0cmV0dXJuIG5vZGU7XG5cblx0fVxuXG5cdGV4dGVuZCAob3RoZXIpIHtcblxuXHRcdC8vIGludmFsaWRhdGUgYWxsIGl0ZXJhdG9ycyB0byBub2RlcyBpbiBvdGhlciBsaXN0XG5cdFx0b3RoZXIudmFsaWQgPSBmYWxzZTtcblxuXHRcdC8vIGNvbXB1dGUgbGFzdCBlbGVtZW50IG9mIHRoaXMgPT09IHByZXZpb3VzIG9mIHRoaXMudGFpbFxuXHRcdGNvbnN0IHRoaXNsYXN0ID0gdGhpcy5sYXN0KCkgO1xuXHRcdC8vIGNvbXB1dGUgZmlyc3QgZWxlbWVudCBvZiBvdGhlciA9PT0gbmV4dCBvZiBvdGhlci5oZWFkXG5cdFx0Y29uc3Qgb3RoZXJmaXJzdCA9IG90aGVyLmZpcnN0KCkgO1xuXHRcdC8vIGNvbXB1dGUgbGFzdCBlbGVtZW50IG9mIG90aGVyID09PSBwcmV2aW91cyBvZiBvdGhlci50YWlsXG5cdFx0Y29uc3Qgb3RoZXJsYXN0ID0gb3RoZXIubGFzdCgpIDtcblxuXHRcdC8vIG1ha2UgdGhpc2xhc3QgbmV4dCBwb2ludCB0byBvdGhlcmZpcnN0XG5cdFx0aWYgKHRoaXNsYXN0LmJ3ID09PSB0aGlzLnRhaWwpIHRoaXNsYXN0LmJ3ID0gb3RoZXJmaXJzdDtcblx0XHRlbHNlIHRoaXNsYXN0LmZ3ID0gb3RoZXJmaXJzdDtcblxuXHRcdC8vIG1ha2Ugb3RoZXJmaXJzdCBwcmV2IHBvaW50IHRvIHRoaXNsYXN0XG5cdFx0aWYgKG90aGVyZmlyc3QuYncgPT09IG90aGVyLmhlYWQpIG90aGVyZmlyc3QuYncgPSB0aGlzbGFzdDtcblx0XHRlbHNlIG90aGVyZmlyc3QuZncgPSB0aGlzbGFzdDtcblxuXHRcdC8vIG1ha2UgdGhpcy50YWlsIHByZXYgcG9pbnQgdG8gb3RoZXJsYXN0XG5cdFx0aWYgKHRoaXMudGFpbC5idyAhPT0gbnVsbCkgdGhpcy50YWlsLmJ3ID0gb3RoZXJsYXN0O1xuXHRcdGVsc2UgdGhpcy50YWlsLmZ3ID0gb3RoZXJsYXN0O1xuXG5cdFx0Ly8gbWFrZSBvdGhlcmxhc3QgbmV4dCBwb2ludCB0byB0aGlzLnRhaWxcblx0XHRpZiAob3RoZXJsYXN0LmJ3ID09PSBvdGhlci50YWlsKSBvdGhlcmxhc3QuYncgPSB0aGlzLnRhaWw7XG5cdFx0ZWxzZSBvdGhlcmxhc3QuZncgPSB0aGlzLnRhaWw7XG5cblx0fVxuXG5cdHJldmVyc2UgKCkge1xuXG5cdFx0Ly8gcmV2ZXJzZSBoZWFkIGFuZCB0YWlsIHBvaW50ZXJzXG5cdFx0Y29uc3QgaGVhZCA9IHRoaXMuaGVhZDtcblx0XHR0aGlzLmhlYWQgPSB0aGlzLnRhaWw7XG5cdFx0dGhpcy50YWlsID0gaGVhZDtcblxuXHRcdC8vIHJldmVyc2UgaXRlcmF0b3IgZGlyZWN0aW9uc1xuXHRcdHRoaXMucmV2ZXJzZWQgPSAhdGhpcy5yZXZlcnNlZDtcblxuXHR9XG5cbn1cbiJdfQ==