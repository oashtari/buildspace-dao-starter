import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";

const voteModule = sdk.getVoteModule("0x04D362aEB810Ef6E9Fb1E4EC4a1E74eB9ed8169d");

const tokenModule = sdk.getTokenModule("0xcf9CE4EC4cBA9Ab8C99BCC5b87ef4c3B81161B04");

(async () => {
    try {
        const amount = 1_525;

        await voteModule.propose(
            "Should the DAO mint an additional " + amount + " tokens into the treasury?",
            [
                {
                    nativeTokenValue: 0,
                    transactionData: tokenModule.contract.interface.encodeFunctionData(
                        "mint",
                        [
                            voteModule.address,
                            ethers.utils.parseUnits(amount.toString(), 18),
                        ]
                    ),
                    toAddress: tokenModule.address,
                },
            ]
        );

        console.log("✅ Successfully created proposal to mint tokens");
    } catch (err) {
        console.error("failed to create first proposal", err);
    process.exit(1);
    }

    try {
        const amount = 227;

        await voteModule.propose(
            "Should the DAO transfer " +
        amount + " tokens from the treasury to " +
        process.env.WALLET_ADDRESS + " for being awesome?",
        [
            {
                nativeTokenValue:0,
                transactionData: tokenModule.contract.interface.encodeFunctionData(
                    "transfer",
                    [
                        process.env.WALLET_ADDRESS,
                        ethers.utils.parseUnits(amount.toString(),18),
                    ]
                ),
                toAddress: tokenModule.address,
            },
        ]
        );
    } catch (err) {
        console.error("failed to create first proposal", err);
    }
})();