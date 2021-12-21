import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";

const voteModule = sdk.getVoteModule("0x04D362aEB810Ef6E9Fb1E4EC4a1E74eB9ed8169d");

const tokenModule = sdk.getTokenModule("0xcf9CE4EC4cBA9Ab8C99BCC5b87ef4c3B81161B04");

(async () => {
    try {
        await tokenModule.grantRole("minter", voteModule.address);
        console.log(
            "Successfully gave vote module permissions to act on token module"
          );
    } catch (err) {
        console.error(
            "failed to grant vote module permissions on token module",
            error
          );
        process.exit(1);
    }

    try {
        const ownedTokenBalance = await tokenModule.balanceOf(process.env.WALLET_ADDRESS);

        const ownedAmount = ethers.BigNumber.from(ownedTokenBalance.value);
        const percent75 = ownedAmount.div(100).mul(75);

        await tokenModule.transfer(voteModule.address, percent75);
        console.log("✅ Successfully transferred tokens to vote module");
    } catch (err) {
        console.error("failed to transfer tokens to vote module", err);
    }
})();