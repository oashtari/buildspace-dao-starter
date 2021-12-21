import sdk from "./1-initialize-sdk.js";
import {readFileSync} from "fs";

const bundleDrop = sdk.getBundleDropModule("0x69D44315A58CF1bcd533dc9b8502c213cd7A2F59",);

(async () => {
    try {
        await bundleDrop.createBatch([
            {
                name: "Gunner's sweet face",
                description: "This NFT will give you access to GunnerDAO!",
                image: readFileSync("scripts/assets/gunner19.png"),
            },
        ]);
        console.log("✅ Successfully created a new NFT in the drop!");
    } catch (err) {
        console.error("failed to create the new NFT", error);
    }
})()
