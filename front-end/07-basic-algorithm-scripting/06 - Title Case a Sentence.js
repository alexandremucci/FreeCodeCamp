function titleCase(str) {
    return str.toLowerCase().split(' ').map(function(value) {
        return value.substring(0, 1).toUpperCase() + value.substring(1)
    }).join(' ');
}

console.log(titleCase("I'm a little tea pot"));