import ora from "ora";

export const withErrorHandling = (callback) => async(...args) => {
    let spinning = ora("Loading...").start();
    try {
        await callback(...args);
        spinning.succeed("Data Loaded.")
    } catch (err) {
        spinning.fail("Failed to fetch the data.")
        console.log("\n Error:", err.message || err);
        process.exit(1)
    }
}