"use client";

import "@rainbow-me/rainbowkit/styles.css";

import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { avalanche, avalancheFuji } from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { RainbowKitSiweNextAuthProvider } from "@rainbow-me/rainbowkit-siwe-next-auth";
import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type ReactNode } from "react";

const config = getDefaultConfig({
  appName: "Frontend Lesson",
  projectId: "ef550d7e9801590fd3dbee7ea0c450f6",
  chains: [avalanche, avalancheFuji],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const WalletProvider = ({
  children,
  session,
}: {
  children: ReactNode;
  session: Session | null;
}) => {
  const queryClient = new QueryClient();
  return (
    <WagmiProvider config={config}>
      <SessionProvider refetchInterval={0} session={session}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitSiweNextAuthProvider>
            <RainbowKitProvider>{children}</RainbowKitProvider>
          </RainbowKitSiweNextAuthProvider>
        </QueryClientProvider>
      </SessionProvider>
    </WagmiProvider>
  );
};
