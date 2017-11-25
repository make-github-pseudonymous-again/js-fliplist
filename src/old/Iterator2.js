
export class Iterator2 {

	constructor (prev, node, value, done) {
		this.direction = direction;
		this.node = node;
		this.value = value;
		this.done = done;
	}

	next (){
		if (this.node.ying === this.prev) {
			return new Iterator2(this.node, this.node.yang, this.node.value, this.node.yang === null);
		}
		else {
			return new Iterator2(this.node, this.node.ying, this.node.value, this.node.ying === null);
		}
	}



}
