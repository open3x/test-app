"use client";

import "wagmi/window";
import { configureChains, createConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { polygon } from "wagmi/chains";
import { connectorsForWallets, getDefaultWallets } from "@rainbow-me/rainbowkit";
import { alchemyID, walletConnectProjectID } from "./config";

const { chains, publicClient } = configureChains([polygon], [alchemyProvider({ apiKey: alchemyID }), publicProvider()]);

const { wallets } = getDefaultWallets({ appName: "TestApp", chains, projectId: walletConnectProjectID });

const connectors = connectorsForWallets(wallets);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

export { chains, wagmiConfig };
