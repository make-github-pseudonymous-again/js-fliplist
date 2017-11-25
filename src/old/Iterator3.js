
export class Iterator {

	constructor (direction, node, value, done) {
		this.direction = direction;
		this.node = node;
		this.value = value;
		this.done = done;
	}

	next (){
		if (this.direction.value === 0) {
			return new Iterator(this.direction, this.node.yang, this.node.value, this.node.yang === null);
		}
		else {
			return new Iterator(this.direction, this.node.ying, this.node.value, this.node.ying === null);
		}
	}



}
