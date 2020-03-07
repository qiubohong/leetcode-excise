var MaxQueue = function () {
    this.queue = [];
    this.maxIndex = -1;
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function () {
    if (this.maxIndex < 0) {
        this.maxIndex = 0;
        var max = this.queue[this.maxIndex];
        for (var i = this.maxIndex + 1, len = this.queue.length - 1; i <= len; i++) {
            if (max < this.queue[i]) {
                max = this.queue[i]
                this.maxIndex = i
            }
        }
    }

    return this.queue[this.maxIndex] || -1;
};

/** 
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function (value) {
    this.queue.push(value);
    if (this.maxIndex == -1 || this.queue[this.maxIndex] < value) {
        this.maxIndex = this.queue.length - 1;
    }
    this.currentIndex += 1;
    return null;
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function () {
    if (this.queue.length == 0) {
        return -1;
    }
    var popValue = this.queue.splice(0, 1);
    this.maxIndex -= 1;
    this.max_value();
    return popValue;
};

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */