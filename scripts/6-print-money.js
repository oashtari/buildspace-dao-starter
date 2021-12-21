import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";

const tokenModule = sdk.getTokenModule("0xcf9CE4EC4cBA9Ab8C99BCC5b87ef4c3B81161B04");

(async () => {
    try {
        const amount = 1_000;
        const amountWith18Decimals = ethers.utils.parseUnits(amount.toString(),18);
        await tokenModule.mint(amountWith18Decimals);
        const totalSupply = await tokenModule.totalSupply();

        console.log(
            "✅ There now is",
            ethers.utils.formatUnits(totalSupply, 18),
            "$GunDog in circulation",
          );
    } catch(err) {
        console.error("Failed to print money", err);
    }
})();