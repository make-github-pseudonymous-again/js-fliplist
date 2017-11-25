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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9GbGlwTGlzdC5qcyJdLCJuYW1lcyI6WyJGbGlwTGlzdCIsImhlYWQiLCJ0YWlsIiwiZnciLCJmZCIsImJkIiwidmFsaWRpdHkiLCJidyIsIkl0ZXJhdG9yIiwiUmV2ZXJzZUl0ZXJhdG9yIiwibm9kZSIsInZhbHVlIiwibGFzdCIsImZpcnN0Iiwib3RoZXIiLCJ2YWxpZCIsInRoaXNsYXN0Iiwib3RoZXJmaXJzdCIsIm90aGVybGFzdCIsInJldmVyc2VkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O3FqQkFBQTtBQUNBOztBQUVBOztBQUNBOztBQUNBOzs7O0lBRWFBLFEsV0FBQUEsUTtBQUVaLHFCQUFlO0FBQUE7O0FBRWQsT0FBS0MsSUFBTCxHQUFZLGVBQVMsSUFBVCxFQUFlLElBQWYsRUFBcUIsSUFBckIsQ0FBWjtBQUNBLE9BQUtDLElBQUwsR0FBWSxlQUFTLEtBQUtELElBQWQsRUFBb0IsSUFBcEIsRUFBMEIsSUFBMUIsQ0FBWjtBQUNBLE9BQUtBLElBQUwsQ0FBVUUsRUFBVixHQUFlLEtBQUtELElBQXBCOztBQUVBLE9BQUtFLEVBQUwsR0FBVSx5QkFBYyxLQUFkLENBQVY7QUFDQSxPQUFLQyxFQUFMLEdBQVUseUJBQWMsSUFBZCxDQUFWO0FBQ0EsT0FBS0MsUUFBTCxHQUFnQixpQ0FBa0IsSUFBbEIsQ0FBaEI7QUFFQTs7OzswQkFFUztBQUNULFVBQU8sS0FBS0wsSUFBTCxDQUFVTSxFQUFWLEtBQWlCLElBQWpCLEdBQXdCLEtBQUtOLElBQUwsQ0FBVU0sRUFBbEMsR0FBdUMsS0FBS04sSUFBTCxDQUFVRSxFQUF4RDtBQUNBOzs7eUJBRVE7QUFDUixVQUFPLEtBQUtELElBQUwsQ0FBVUssRUFBVixLQUFpQixJQUFqQixHQUF3QixLQUFLTCxJQUFMLENBQVVLLEVBQWxDLEdBQXVDLEtBQUtMLElBQUwsQ0FBVUMsRUFBeEQ7QUFDQTs7OzBCQUVTO0FBQ1QsVUFBTyxJQUFJSyxRQUFKLENBQWEsSUFBYixFQUFtQixLQUFLUCxJQUF4QixFQUE4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S0MsSUFBakI7QUFDQSxRQUFLQSxJQUFMLEdBQVlELElBQVo7O0FBRUE7QUFDQSxRQUFLa0IsUUFBTCxHQUFnQixDQUFDLEtBQUtBLFFBQXRCO0FBRUEiLCJmaWxlIjoiRmxpcExpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB3aGVuIHRyYXZlcnNpbmcgYSBub2RlLCBtYWtlIGl0IHZhbGlkIGFnYWluIGFuZCB1cGRhdGUgZGlyZWN0aW9uXG4vLyBvciB1c2UgdW5pb24gZmluZCBkc1xuXG5pbXBvcnQgeyBOb2RlIH0gZnJvbSAnLi9Ob2RlJyA7XG5pbXBvcnQgeyBWYWxpZGl0eVRva2VuIH0gZnJvbSAnLi9WYWxpZGl0eVRva2VuJyA7XG5pbXBvcnQgeyBEaXJlY3Rpb24gfSBmcm9tICcuL0RpcmVjdGlvbicgO1xuXG5leHBvcnQgY2xhc3MgRmxpcExpc3Qge1xuXG5cdGNvbnN0cnVjdG9yICgpIHtcblxuXHRcdHRoaXMuaGVhZCA9IG5ldyBOb2RlKG51bGwsIG51bGwsIG51bGwpO1xuXHRcdHRoaXMudGFpbCA9IG5ldyBOb2RlKHRoaXMuaGVhZCwgbnVsbCwgbnVsbCk7XG5cdFx0dGhpcy5oZWFkLmZ3ID0gdGhpcy50YWlsO1xuXG5cdFx0dGhpcy5mZCA9IG5ldyBEaXJlY3Rpb24oZmFsc2UpO1xuXHRcdHRoaXMuYmQgPSBuZXcgRGlyZWN0aW9uKHRydWUpO1xuXHRcdHRoaXMudmFsaWRpdHkgPSBuZXcgVmFsaWRpdHlUb2tlbih0cnVlKTtcblxuXHR9XG5cblx0Zmlyc3QgKCApIHtcblx0XHRyZXR1cm4gdGhpcy5oZWFkLmJ3ICE9PSBudWxsID8gdGhpcy5oZWFkLmJ3IDogdGhpcy5oZWFkLmZ3IDtcblx0fVxuXG5cdGxhc3QgKCApIHtcblx0XHRyZXR1cm4gdGhpcy50YWlsLmJ3ICE9PSBudWxsID8gdGhpcy50YWlsLmJ3IDogdGhpcy50YWlsLmZ3IDtcblx0fVxuXG5cdGJlZ2luICggKSB7XG5cdFx0cmV0dXJuIG5ldyBJdGVyYXRvcih0aGlzLCB0aGlzLmhlYWQsIG51bGwsIGZhbHNlKTtcblx0fVxuXG5cdGVuZCAoICkge1xuXHRcdHJldHVybiBuZXcgSXRlcmF0b3IodGhpcywgdGhpcy50YWlsLCBudWxsLCBmYWxzZSk7XG5cdH1cblxuXHRyYmVnaW4gKCApIHtcblx0XHRyZXR1cm4gbmV3IFJldmVyc2VJdGVyYXRvcih0aGlzLCB0aGlzLnRhaWwsIG51bGwsIGZhbHNlKTtcblx0fVxuXG5cdHJlbmQgKCApIHtcblx0XHRyZXR1cm4gbmV3IFJldmVyc2VJdGVyYXRvcih0aGlzLCB0aGlzLmhlYWQsIG51bGwsIGZhbHNlKTtcblx0fVxuXG5cdC8vIGFzc2VydCB2YWxpZFxuXHRpbnNlcnRfYmVmb3JlIChub2RlLCB2YWx1ZSkge1xuXG5cdH1cblxuXHQvLyBhc3NlcnQgdmFsaWRcblx0aW5zZXJ0X2FmdGVyIChub2RlLCB2YWx1ZSkge1xuXG5cdH1cblxuXHRhcHBlbmQgKHZhbHVlKSB7XG5cblx0XHRjb25zdCBsYXN0ID0gdGhpcy5sYXN0KCk7XG5cdFx0Y29uc3QgdGFpbCA9IHRoaXMudGFpbDtcblx0XHRjb25zdCBub2RlID0gbmV3IE5vZGUobGFzdCwgdGFpbCwgdmFsdWUpO1xuXG5cdFx0aWYgKGxhc3QuYncgPT09IHRhaWwpIGxhc3QuYncgPSBub2RlO1xuXHRcdGVsc2UgbGFzdC5mdyA9IG5vZGU7XG5cblx0XHRpZiAodGFpbC5idyAhPT0gbnVsbCkgdGFpbC5idyA9IG5vZGU7XG5cdFx0ZWxzZSB0YWlsLmZ3ID0gbm9kZTtcblxuXHRcdHJldHVybiBub2RlO1xuXG5cdH1cblxuXHRwcmVwZW5kICh2YWx1ZSkge1xuXG5cdFx0Y29uc3QgZmlyc3QgPSB0aGlzLmZpcnN0KCk7XG5cdFx0Y29uc3QgaGVhZCA9IHRoaXMuaGVhZDtcblx0XHRjb25zdCBub2RlID0gbmV3IE5vZGUoaGVhZCwgZmlyc3QsIHZhbHVlKTtcblxuXHRcdGlmIChmaXJzdC5idyA9PT0gaGVhZCkgZmlyc3QuYncgPSBub2RlO1xuXHRcdGVsc2UgZmlyc3QuZncgPSBub2RlO1xuXG5cdFx0aWYgKGhlYWQuYncgIT09IG51bGwpIGhlYWQuYncgPSBub2RlO1xuXHRcdGVsc2UgaGVhZC5mdyA9IG5vZGU7XG5cblx0XHRyZXR1cm4gbm9kZTtcblxuXHR9XG5cblx0ZXh0ZW5kIChvdGhlcikge1xuXG5cdFx0Ly8gaW52YWxpZGF0ZSBhbGwgaXRlcmF0b3JzIHRvIG5vZGVzIGluIG90aGVyIGxpc3Rcblx0XHRvdGhlci52YWxpZCA9IGZhbHNlO1xuXG5cdFx0Ly8gY29tcHV0ZSBsYXN0IGVsZW1lbnQgb2YgdGhpcyA9PT0gcHJldmlvdXMgb2YgdGhpcy50YWlsXG5cdFx0Y29uc3QgdGhpc2xhc3QgPSB0aGlzLmxhc3QoKSA7XG5cdFx0Ly8gY29tcHV0ZSBmaXJzdCBlbGVtZW50IG9mIG90aGVyID09PSBuZXh0IG9mIG90aGVyLmhlYWRcblx0XHRjb25zdCBvdGhlcmZpcnN0ID0gb3RoZXIuZmlyc3QoKSA7XG5cdFx0Ly8gY29tcHV0ZSBsYXN0IGVsZW1lbnQgb2Ygb3RoZXIgPT09IHByZXZpb3VzIG9mIG90aGVyLnRhaWxcblx0XHRjb25zdCBvdGhlcmxhc3QgPSBvdGhlci5sYXN0KCkgO1xuXG5cdFx0Ly8gbWFrZSB0aGlzbGFzdCBuZXh0IHBvaW50IHRvIG90aGVyZmlyc3Rcblx0XHRpZiAodGhpc2xhc3QuYncgPT09IHRoaXMudGFpbCkgdGhpc2xhc3QuYncgPSBvdGhlcmZpcnN0O1xuXHRcdGVsc2UgdGhpc2xhc3QuZncgPSBvdGhlcmZpcnN0O1xuXG5cdFx0Ly8gbWFrZSBvdGhlcmZpcnN0IHByZXYgcG9pbnQgdG8gdGhpc2xhc3Rcblx0XHRpZiAob3RoZXJmaXJzdC5idyA9PT0gb3RoZXIuaGVhZCkgb3RoZXJmaXJzdC5idyA9IHRoaXNsYXN0O1xuXHRcdGVsc2Ugb3RoZXJmaXJzdC5mdyA9IHRoaXNsYXN0O1xuXG5cdFx0Ly8gbWFrZSB0aGlzLnRhaWwgcHJldiBwb2ludCB0byBvdGhlcmxhc3Rcblx0XHRpZiAodGhpcy50YWlsLmJ3ICE9PSBudWxsKSB0aGlzLnRhaWwuYncgPSBvdGhlcmxhc3Q7XG5cdFx0ZWxzZSB0aGlzLnRhaWwuZncgPSBvdGhlcmxhc3Q7XG5cblx0XHQvLyBtYWtlIG90aGVybGFzdCBuZXh0IHBvaW50IHRvIHRoaXMudGFpbFxuXHRcdGlmIChvdGhlcmxhc3QuYncgPT09IG90aGVyLnRhaWwpIG90aGVybGFzdC5idyA9IHRoaXMudGFpbDtcblx0XHRlbHNlIG90aGVybGFzdC5mdyA9IHRoaXMudGFpbDtcblxuXHR9XG5cblx0cmV2ZXJzZSAoKSB7XG5cblx0XHQvLyByZXZlcnNlIGhlYWQgYW5kIHRhaWwgcG9pbnRlcnNcblx0XHRjb25zdCBoZWFkID0gdGhpcy5oZWFkO1xuXHRcdHRoaXMuaGVhZCA9IHRoaXMudGFpbDtcblx0XHR0aGlzLnRhaWwgPSBoZWFkO1xuXG5cdFx0Ly8gcmV2ZXJzZSBpdGVyYXRvciBkaXJlY3Rpb25zXG5cdFx0dGhpcy5yZXZlcnNlZCA9ICF0aGlzLnJldmVyc2VkO1xuXG5cdH1cblxufVxuIl19