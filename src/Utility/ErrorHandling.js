
export const withErrorHandling = (callback) => async(...args) => {
    try {
        await callback(...args);
    } catch (err) {
        console.log("\n Error:", err.message || err);
        process.exit(1)
    }
}