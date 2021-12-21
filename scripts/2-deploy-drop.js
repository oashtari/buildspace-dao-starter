import {ethers} from "ethers";
import sdk from "./1-initialize-sdk.js";
import {readFileSync} from "fs";

const app = sdk.getAppModule("0x3029dC322Dcd20309AC58eEaDC6A5C23961Bb881");

(async () => {
    try {
        const bundleDropModule = await app.deployBundleDropModule({
            name: "Gunner DAO Membership",
            description: "A DAO for influencing the fun that Gunner has",
            image: readFileSync("scripts/assets/gunner18.png"),
            primarySaleRecipientAddress: ethers.constants.AddressZero,
        });

        console.log(
            "✅ Successfully deployed bundleDrop module, address:",
            bundleDropModule.address,
          );

        console.log(
            "✅ bundleDrop metadata:",
            await bundleDropModule.getMetadata(),
          );
    } catch (err) {
        console.log("failed to deploy bundleDrop module", err);
    }
})()