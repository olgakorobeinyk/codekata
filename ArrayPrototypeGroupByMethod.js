Array.prototype.groupBy = function(fn) {
    func = fn ? fn : el => el;
    newObj = Object.create(Array.prototype);

    this.forEach(function(item, i, arr) {
        key = func(item).toString();
        if(newObj[key]) {
            newObj[key].push(item);
        } else {
            newObj[key] = [item];
        }
    });

    return newObj;
}

[1,2,3,4,2,1].groupBy(function(el){ return el % 2; })