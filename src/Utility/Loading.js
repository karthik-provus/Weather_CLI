


export const createLoading = () => {

    let arr = ['|', '/', '\\', '-']

    let i = 0;

    let interval = setInterval(() => {
        process.stdout.write(`\r${arr[i]} Loading...`)
        i = (i+1) % arr.length;
    }, 100);

    return {
        succeed(message = "Done!") {
            clearInterval(interval);
            process.stdout.write(`\r✔ ${message}\n`);
        },
        fail(message = "Failed!") {
            clearInterval(interval);
            process.stdout.write(`\r✖ ${message}\n`);
        },
        stop() {
            clearInterval(interval);
            process.stdout.write("\r");
        }
    }

}