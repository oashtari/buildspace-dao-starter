import sdk from "./1-initialize-sdk.js";

const bundleDrop = sdk.getBundleDropModule("0x69D44315A58CF1bcd533dc9b8502c213cd7A2F59");

(async () => {
    try {
        const claimConditionFactory = bundleDrop.getClaimConditionFactory();
        claimConditionFactory.newClaimPhase({
            startTime: new Date(),
            maxQuantity: 1_000,
            maxQuantityPerTransaction: 1,
        });

        await bundleDrop.setClaimCondition(0, claimConditionFactory);
        console.log("✅ Sucessfully set claim condition!");
    } catch (err) {
        console.error("Failed to set claim condition", error);
    }
})()