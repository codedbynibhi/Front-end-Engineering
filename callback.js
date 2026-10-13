function placeholder(callback) {
    setTimeout(() => {
        console.log("order placed");
        callback();
    }, 2000);
}

function process(callback) {
    setTimeout(() => {
        console.log("payment successful");
        callback();
    }, 2000);
}

function inventory(callback) {
    setTimeout(() => {
        console.log("updated inventory");
        callback();
    }, 2000);
}

function send(callback) {
    setTimeout(() => {
        console.log("email send");
        callback();
    }, 2000);
}

placeholder(() => {
    process(() => {
        inventory(() => {
            send(() => {
                console.log("All tasks completed");
            });
        });
    });
});