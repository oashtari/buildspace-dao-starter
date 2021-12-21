import {ethers} from "ethers";
import sdk from "./1-initialize-sdk.js";

const bundleDropModule = sdk.getBundleDropModule("0x69D44315A58CF1bcd533dc9b8502c213cd7A2F59");
const tokenModule = sdk.getTokenModule("0xcf9CE4EC4cBA9Ab8C99BCC5b87ef4c3B81161B04");

(async () => {
    try {
        const walletAddress = await bundleDropModule.getAllClaimerAddresses("0");

        if(walletAddress.length == 0) {
            console.log(
                "No NFTs have been claimed yet, maybe get some friends to claim your free NFTs!",
              );
            process.exit(0);
        };

        const airdropTargets = walletAddress.map((address) => {
            const randomAmount = Math.floor(Math.random() * (100-10+1) + 1);
            console.log("✅ Going to airdrop", randomAmount, "tokens to", address);

            const airdropTarget = {
                address,
                amount: ethers.utils.parseUnits(randomAmount.toString(), 18),
            };
            return airdropTarget;
        });

        console.log("🌈 Starting airdrop...");
        await tokenModule.transferBatch(airdropTargets);
        console.log("✅ Successfully airdropped tokens to all the holders of the NFT!");
    } catch (err) {
        console.error("Failed to airdrop tokens", err);
    }
})();