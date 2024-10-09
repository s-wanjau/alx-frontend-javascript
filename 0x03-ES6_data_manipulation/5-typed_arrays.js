const createInt8TypedArray = (length, position, value) => {

	//create a buffer with a specified lenght
	const buffer = new ArrayBuffer(length);

	//create a view of the buffer
	const int8View = new Int8Array(buffer);

	//check if the position is within acceptable range
	if(position < 0 || position >= length){
		throw new error("Position outside range");
	}

	//sets the value at a specific position
	int8View[position] = value;

	//returns the buffer
	return buffer;
};

export default createInt8Array;
