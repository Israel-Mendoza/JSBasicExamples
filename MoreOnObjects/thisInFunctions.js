
function test() {
    const obj = {
        objFunc() {
            setTimeout(function () {
                console.log(this);
            }, 0);
        }
    }
    obj.objFunc();
}


test();