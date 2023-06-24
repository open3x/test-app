if (!process.env.NEXT_PUBLIC_ALCHEMY_ID || !process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID) throw new Error("required env");

export const alchemyID = process.env.NEXT_PUBLIC_ALCHEMY_ID;
export const walletConnectProjectID = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID;
