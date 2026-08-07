"use client";

import { create } from "zustand";

export type ConnectionStatus = "disconnected" | "connecting" | "connected" | "error";

export type CloudAccount = {
  provider: "AWS";
  accountAlias: string;
  accountId: string;
  region: string;
  lastVerified: string;
};

type CloudAccountState = {
  connectionStatus: ConnectionStatus;
  account: CloudAccount | null;
  setConnectionStatus: (status: ConnectionStatus) => void;
  connect: (account: CloudAccount) => void;
  disconnect: () => void;
};

export const useCloudAccountStore = create<CloudAccountState>((set) => ({
  connectionStatus: "disconnected",
  account: null,
  setConnectionStatus: (connectionStatus) => set({ connectionStatus }),
  connect: (account) => set({ account, connectionStatus: "connected" }),
  disconnect: () => set({ account: null, connectionStatus: "disconnected" }),
}));
