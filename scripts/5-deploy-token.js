import sdk from "./1-initialize-sdk.js";

const app = sdk.getAppModule("0x3029dC322Dcd20309AC58eEaDC6A5C23961Bb881");

(async () => {
    try {
        const tokenModule = await app.deployTokenModule({
            name: "Gunner DAO governance token",
            symbol: "GunDog",
        });
        console.log(
            "✅ Successfully deployed token module, address:",
            tokenModule.address,
          );
    } catch (err) {
        console.error("failed to deploy token module", err);
    }
})()