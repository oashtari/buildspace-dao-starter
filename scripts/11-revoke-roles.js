import sdk from "./1-initialize-sdk.js";

const tokenModule = sdk.getTokenModule("0xcf9CE4EC4cBA9Ab8C99BCC5b87ef4c3B81161B04");

(async () => {
    try {
        console.log(
            "👀 Roles that exist right now:",
            await tokenModule.getAllRoleMembers()
          );
        await tokenModule.revokeAllRolesFromAddress(process.env.WALLET_ADDRESS);
        console.log(
            "🎉 Roles after revoking ourselves",
            await tokenModule.getAllRoleMembers()
          );
        console.log("✅ Successfully revoked our superpowers from the ERC-20 contract");
    } catch (err) {
        console.error("Failed to revoke ourselves from the DAO treasury", error);
    }
})();