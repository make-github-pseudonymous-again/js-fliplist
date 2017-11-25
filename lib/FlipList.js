'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Node = require('./Node');

var _Iterator = require('./Iterator');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FlipList = function () {
	function FlipList() {
		var iterable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

		_classCallCheck(this, FlipList);

		/**
   *  head  -> tail
   *    |        |
   *  rtail <- rhead
   */
		this.head = new _Node.Node(null);
		this.rtail = new _Node.Node(null);
		this.tail = new _Node.Node(null);
		this.rhead = new _Node.Node(null);
		this.head.sibling = this.rtail;
		this.rtail.sibling = this.head;
		this.rhead.sibling = this.tail;
		this.tail.sibling = this.rhead;
		this.head.next = this.tail;
		this.rhead.next = this.rtail;

		if (iterable) {
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = iterable[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var value = _step.value;
					this.append(value);
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}
		}
	}

	_createClass(FlipList, [{
		key: 'reverse',
		value: function reverse() {
			var head = this.head;
			var tail = this.tail;
			this.head = this.rhead;
			this.tail = this.rtail;
			this.rhead = head;
			this.rtail = tail;
		}
	}, {
		key: 'reversebetween',
		value: function reversebetween(itleft, itright) {

			var left = itleft.node;
			var right = itright.node;

			left.sibling.next.sibling.next = right.sibling.next;
			right.sibling.next.sibling.next = left.sibling.next;
			right.sibling.next = left;
			left.sibling.next = right;
		}
	}, {
		key: Symbol.iterator,
		value: /*#__PURE__*/regeneratorRuntime.mark(function value() {
			var node;
			return regeneratorRuntime.wrap(function value$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							node = this.head;

						case 1:
							if (!(node.next !== this.tail)) {
								_context.next = 7;
								break;
							}

							node = node.next;
							_context.next = 5;
							return node.value;

						case 5:
							_context.next = 1;
							break;

						case 7:
						case 'end':
							return _context.stop();
					}
				}
			}, value, this);
		})
	}, {
		key: 'prepend',
		value: function prepend(value) {

			var forward = new _Node.Node(value);
			var backward = new _Node.Node(value);

			forward.next = this.head.next;
			backward.next = this.rtail;

			forward.sibling = backward;
			backward.sibling = forward;

			this.head.next = forward;
			forward.next.sibling.next = backward;
		}
	}, {
		key: 'append',
		value: function append(value) {

			var forward = new _Node.Node(value);
			var backward = new _Node.Node(value);

			forward.next = this.tail;
			backward.next = this.rhead.next;

			forward.sibling = backward;
			backward.sibling = forward;

			this.rhead.next = backward;
			backward.next.sibling.next = forward;
		}
	}, {
		key: 'extend',
		value: function extend(other) {
			this.rhead.next.sibling.next = other.head.next;
			other.head.next.sibling.next = this.rhead.next;

			this.tail = other.tail;
			this.rhead = other.rhead;
		}
	}, {
		key: 'begin',
		value: function begin() {
			return new _Iterator.Iterator(this.head.next);
		}
	}, {
		key: 'rbegin',
		value: function rbegin() {
			return new _Iterator.Iterator(this.rhead.next);
		}
	}, {
		key: 'end',
		value: function end() {
			return new _Iterator.Iterator(this.tail);
		}
	}, {
		key: 'rend',
		value: function rend() {
			return new _Iterator.Iterator(this.rtail);
		}
	}]);

	return FlipList;
}();

exports.default = FlipList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9GbGlwTGlzdC5qcyJdLCJuYW1lcyI6WyJGbGlwTGlzdCIsIml0ZXJhYmxlIiwiaGVhZCIsInJ0YWlsIiwidGFpbCIsInJoZWFkIiwic2libGluZyIsIm5leHQiLCJ2YWx1ZSIsImFwcGVuZCIsIml0bGVmdCIsIml0cmlnaHQiLCJsZWZ0Iiwibm9kZSIsInJpZ2h0IiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJmb3J3YXJkIiwiYmFja3dhcmQiLCJvdGhlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFDQTs7OztJQUVxQkEsUTtBQUVwQixxQkFBZ0M7QUFBQSxNQUFsQkMsUUFBa0IsdUVBQVAsSUFBTzs7QUFBQTs7QUFDL0I7Ozs7O0FBS0EsT0FBS0MsSUFBTCxHQUFZLGVBQVMsSUFBVCxDQUFaO0FBQ0EsT0FBS0MsS0FBTCxHQUFhLGVBQVMsSUFBVCxDQUFiO0FBQ0EsT0FBS0MsSUFBTCxHQUFZLGVBQVMsSUFBVCxDQUFaO0FBQ0EsT0FBS0MsS0FBTCxHQUFhLGVBQVMsSUFBVCxDQUFiO0FBQ0EsT0FBS0gsSUFBTCxDQUFVSSxPQUFWLEdBQW9CLEtBQUtILEtBQXpCO0FBQ0EsT0FBS0EsS0FBTCxDQUFXRyxPQUFYLEdBQXFCLEtBQUtKLElBQTFCO0FBQ0EsT0FBS0csS0FBTCxDQUFXQyxPQUFYLEdBQXFCLEtBQUtGLElBQTFCO0FBQ0EsT0FBS0EsSUFBTCxDQUFVRSxPQUFWLEdBQW9CLEtBQUtELEtBQXpCO0FBQ0EsT0FBS0gsSUFBTCxDQUFVSyxJQUFWLEdBQWlCLEtBQUtILElBQXRCO0FBQ0EsT0FBS0MsS0FBTCxDQUFXRSxJQUFYLEdBQWtCLEtBQUtKLEtBQXZCOztBQUVBLE1BQUtGLFFBQUw7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBZ0IseUJBQXFCQSxRQUFyQjtBQUFBLFNBQVlPLEtBQVo7QUFBZ0MsVUFBS0MsTUFBTCxDQUFZRCxLQUFaO0FBQWhDO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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QW5CLENBQVA7QUFDQTs7Ozs7O2tCQXpHbUJILFEiLCJmaWxlIjoiRmxpcExpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOb2RlIH0gZnJvbSAnLi9Ob2RlJyA7XG5pbXBvcnQgeyBJdGVyYXRvciB9IGZyb20gJy4vSXRlcmF0b3InIDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmxpcExpc3Qge1xuXG5cdGNvbnN0cnVjdG9yICggaXRlcmFibGUgPSBudWxsICkge1xuXHRcdC8qKlxuXHRcdCAqICBoZWFkICAtPiB0YWlsXG5cdFx0ICogICAgfCAgICAgICAgfFxuXHRcdCAqICBydGFpbCA8LSByaGVhZFxuXHRcdCAqL1xuXHRcdHRoaXMuaGVhZCA9IG5ldyBOb2RlKG51bGwpO1xuXHRcdHRoaXMucnRhaWwgPSBuZXcgTm9kZShudWxsKTtcblx0XHR0aGlzLnRhaWwgPSBuZXcgTm9kZShudWxsKTtcblx0XHR0aGlzLnJoZWFkID0gbmV3IE5vZGUobnVsbCk7XG5cdFx0dGhpcy5oZWFkLnNpYmxpbmcgPSB0aGlzLnJ0YWlsO1xuXHRcdHRoaXMucnRhaWwuc2libGluZyA9IHRoaXMuaGVhZDtcblx0XHR0aGlzLnJoZWFkLnNpYmxpbmcgPSB0aGlzLnRhaWw7XG5cdFx0dGhpcy50YWlsLnNpYmxpbmcgPSB0aGlzLnJoZWFkO1xuXHRcdHRoaXMuaGVhZC5uZXh0ID0gdGhpcy50YWlsO1xuXHRcdHRoaXMucmhlYWQubmV4dCA9IHRoaXMucnRhaWw7XG5cblx0XHRpZiAoIGl0ZXJhYmxlICkgZm9yICggY29uc3QgdmFsdWUgb2YgaXRlcmFibGUgKSB0aGlzLmFwcGVuZCh2YWx1ZSk7XG5cdH1cblxuXHRyZXZlcnNlICggKSB7XG5cdFx0Y29uc3QgaGVhZCA9IHRoaXMuaGVhZDtcblx0XHRjb25zdCB0YWlsID0gdGhpcy50YWlsO1xuXHRcdHRoaXMuaGVhZCA9IHRoaXMucmhlYWQ7XG5cdFx0dGhpcy50YWlsID0gdGhpcy5ydGFpbDtcblx0XHR0aGlzLnJoZWFkID0gaGVhZDtcblx0XHR0aGlzLnJ0YWlsID0gdGFpbDtcblx0fVxuXG5cdHJldmVyc2ViZXR3ZWVuICggaXRsZWZ0ICwgaXRyaWdodCApIHtcblxuXHRcdGNvbnN0IGxlZnQgPSBpdGxlZnQubm9kZTtcblx0XHRjb25zdCByaWdodCA9IGl0cmlnaHQubm9kZTtcblxuXHRcdGxlZnQuc2libGluZy5uZXh0LnNpYmxpbmcubmV4dCA9IHJpZ2h0LnNpYmxpbmcubmV4dDtcblx0XHRyaWdodC5zaWJsaW5nLm5leHQuc2libGluZy5uZXh0ID0gbGVmdC5zaWJsaW5nLm5leHQ7XG5cdFx0cmlnaHQuc2libGluZy5uZXh0ID0gbGVmdDtcblx0XHRsZWZ0LnNpYmxpbmcubmV4dCA9IHJpZ2h0O1xuXG5cdH1cblxuXHQqW1N5bWJvbC5pdGVyYXRvcl0gKCApIHtcblx0XHRsZXQgbm9kZSA9IHRoaXMuaGVhZDtcblx0XHR3aGlsZSAobm9kZS5uZXh0ICE9PSB0aGlzLnRhaWwpIHtcblx0XHRcdG5vZGUgPSBub2RlLm5leHQ7XG5cdFx0XHR5aWVsZCBub2RlLnZhbHVlO1xuXHRcdH1cblx0fVxuXG5cdHByZXBlbmQgKCB2YWx1ZSApIHtcblxuXHRcdGNvbnN0IGZvcndhcmQgPSBuZXcgTm9kZSh2YWx1ZSk7XG5cdFx0Y29uc3QgYmFja3dhcmQgPSBuZXcgTm9kZSh2YWx1ZSk7XG5cblx0XHRmb3J3YXJkLm5leHQgPSB0aGlzLmhlYWQubmV4dDtcblx0XHRiYWNrd2FyZC5uZXh0ID0gdGhpcy5ydGFpbDtcblxuXHRcdGZvcndhcmQuc2libGluZyA9IGJhY2t3YXJkO1xuXHRcdGJhY2t3YXJkLnNpYmxpbmcgPSBmb3J3YXJkO1xuXG5cdFx0dGhpcy5oZWFkLm5leHQgPSBmb3J3YXJkO1xuXHRcdGZvcndhcmQubmV4dC5zaWJsaW5nLm5leHQgPSBiYWNrd2FyZDtcblxuXHR9XG5cblx0YXBwZW5kICggdmFsdWUgKSB7XG5cblx0XHRjb25zdCBmb3J3YXJkID0gbmV3IE5vZGUodmFsdWUpO1xuXHRcdGNvbnN0IGJhY2t3YXJkID0gbmV3IE5vZGUodmFsdWUpO1xuXG5cdFx0Zm9yd2FyZC5uZXh0ID0gdGhpcy50YWlsO1xuXHRcdGJhY2t3YXJkLm5leHQgPSB0aGlzLnJoZWFkLm5leHQ7XG5cblx0XHRmb3J3YXJkLnNpYmxpbmcgPSBiYWNrd2FyZDtcblx0XHRiYWNrd2FyZC5zaWJsaW5nID0gZm9yd2FyZDtcblxuXHRcdHRoaXMucmhlYWQubmV4dCA9IGJhY2t3YXJkO1xuXHRcdGJhY2t3YXJkLm5leHQuc2libGluZy5uZXh0ID0gZm9yd2FyZDtcblxuXHR9XG5cblx0ZXh0ZW5kICggb3RoZXIgKSB7XG5cdFx0dGhpcy5yaGVhZC5uZXh0LnNpYmxpbmcubmV4dCA9IG90aGVyLmhlYWQubmV4dDtcblx0XHRvdGhlci5oZWFkLm5leHQuc2libGluZy5uZXh0ID0gdGhpcy5yaGVhZC5uZXh0O1xuXG5cdFx0dGhpcy50YWlsID0gb3RoZXIudGFpbDtcblx0XHR0aGlzLnJoZWFkID0gb3RoZXIucmhlYWQ7XG5cdH1cblxuXHRiZWdpbiAoICkge1xuXHRcdHJldHVybiBuZXcgSXRlcmF0b3IoIHRoaXMuaGVhZC5uZXh0ICkgO1xuXHR9XG5cblx0cmJlZ2luICggKSB7XG5cdFx0cmV0dXJuIG5ldyBJdGVyYXRvciggdGhpcy5yaGVhZC5uZXh0ICkgO1xuXHR9XG5cblx0ZW5kICggKSB7XG5cdFx0cmV0dXJuIG5ldyBJdGVyYXRvciggdGhpcy50YWlsICkgO1xuXHR9XG5cblx0cmVuZCAoICkge1xuXHRcdHJldHVybiBuZXcgSXRlcmF0b3IoIHRoaXMucnRhaWwgKSA7XG5cdH1cblxufVxuIl19