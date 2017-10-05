
export class ReversibleInternalIterator {

	constructor ( direction, validity, predecessor, successor, node ) {
		this.direction = direction;
		this.validity = validity;
		this.pred = predecessor;
		this.succ = successor;
		this.node = node;
		this.value = node.value;
		this.done = (node.fw === null) || (node.bw === null);
	}

	valid () {
		return this.validity.valid;
	}

	next () {
		if (this.direction.reversed) {

			if (this.pred === null) {
				const pred = this.node.fw !== this.succ ? this.node.fw : this.node.bw;
				return new ReversibleInternalIterator(this.direction, this.validity, null, this.node, pred);
			}

			else {
				return new ReversibleInternalIterator(this.direction, this.validity, null, this.node, this.pred);
			}

		}

		else {
			if (this.succ === null) {
				const succ = this.node.fw !== this.pred ? this.node.fw : this.node.bw;
				return new ReversibleInternalIterator(this.direction, this.validity, this.node, null, succ);
			}

			else {
				return new ReversibleInternalIterator(this.direction, this.validity, this.node, null, this.succ);
			}
		}
	}

}
