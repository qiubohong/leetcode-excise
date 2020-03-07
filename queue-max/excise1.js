var MaxQueue = function () {
    this.queue = [];
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function () {
    var max = this.queue[0] || -1;

    for (var i = 1, len = this.queue.length; i < len; i++) {
        if (max < this.queue[i]) {
            max = this.queue[i]
        }
    }

    return max;
};

/** 
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function (value) {
    this.queue.push(value);
    return null;
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function () {
    if (this.queue.length == 0) {
        return -1;
    }
    return this.queue.splice(0, 1);
};

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */