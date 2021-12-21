import sdk from "./1-initialize-sdk.js";

const appModule = sdk.getAppModule("0x3029dC322Dcd20309AC58eEaDC6A5C23961Bb881");

(async () => {
    try {
        const voteModule = await appModule.deployVoteModule({
            name: "GunnerDAO's fun-time proposals",
            votingTokenAddress: "0xcf9CE4EC4cBA9Ab8C99BCC5b87ef4c3B81161B04",
            proposalStartWaitTimeInSeconds: 0,
            proposalVotingTimeInSeconds: 24 * 60 * 60,
            votingQuorumFraction: 0,
            minimumNumberOfTokensNeededToPropose: "0",
        });

        console.log(
            "✅ Successfully deployed vote module, address:",
            voteModule.address,
          );
    } catch (err) {
        console.log("Failed to deploy vote module", err);
    }
})();