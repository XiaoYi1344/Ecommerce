'use client';
import React, { useState } from 'react';
import {
  Modal,
  Paper,
  Button,
  Box,
  Stack,
  IconButton,
  Avatar,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { SiweMessage } from 'siwe';
import { ethers } from 'ethers';

interface EthereumProvider {
  request: (args: { method: string; params?: unknown[] }) => Promise<unknown>;
}

declare global {
  interface Window {
    ethereum?: EthereumProvider;
  }
}

type WalletState = 'select' | 'connecting' | 'info' | 'disconnect';

interface WalletModalProps {
  open: boolean;
  onClose: () => void;
  account: string;
  setAccount: (acc: string) => void;
}

export const WalletModal: React.FC<WalletModalProps> = ({
  open,
  onClose,
  account,
  setAccount,
}) => {
  const [walletState, setWalletState] = useState<WalletState>('select');
  const [connectingWalletName, setConnectingWalletName] = useState('');
  const [walletBalance, setWalletBalance] = useState('0');
  const [profile, setProfile] = useState<{ addressWallet: string } | null>(
    null,
  );

  const walletIcons: Record<'metamask' | 'pione', string> = {
    metamask: '/icons/metamask.svg',
    pione: '/icons/pione.svg',
  };

  const shortenAddress = (addr: string) =>
    addr ? `${addr.slice(0, 6)}...${addr.slice(-4)}` : '';

  const connectWallet = async (wallet: 'metamask' | 'pione') => {
  setWalletState('connecting');
  setConnectingWalletName(wallet);

  if (wallet === 'metamask') {
    try {
      const ethereum = window.ethereum;
      if (!ethereum) throw new Error('Please install MetaMask');

      const accounts = (await ethereum.request({
        method: 'eth_requestAccounts',
      })) as string[];

      if (!accounts?.length) throw new Error('No Ethereum account found');

      const userAddress = ethers.getAddress(accounts[0]);

      //
      // 1️⃣ Lấy nonce từ backend
      //
      const nonceRes = await fetch('/api/nonce', {
        method: 'POST',
      });

      const { nonce } = await nonceRes.json();
      if (!nonce) throw new Error('Nonce not received from backend');

      //
      // 2️⃣ Tạo SIWE message
      //
      const siweMessage = new SiweMessage({
        domain: window.location.host,
        uri: window.location.origin,
        address: userAddress,
        statement: 'Sign in to My App',
        version: '1',
        chainId: 1,
        nonce,
      });

      const messageToSign = siweMessage.prepareMessage();

      //
      // 3️⃣ Ký message
      //
      const signature = await ethereum.request({
        method: 'personal_sign',
        params: [messageToSign, userAddress],
      });

      //
      // 4️⃣ Gửi để verify + nhận JWT
      //
      const verifyRes = await fetch('/api/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: messageToSign,
          signature,
        }),
      });

      const data = await verifyRes.json();

      if (!verifyRes.ok) throw new Error(data.error || 'Verify failed');
      if (!data.token) throw new Error('JWT token missing');

      // Lưu user
      setAccount(userAddress);
      setProfile({ addressWallet: userAddress });

      //
      // 5️⃣ Lấy balance thật
      //
      const provider = new ethers.BrowserProvider(ethereum);
      const balanceWei = await provider.getBalance(userAddress);
      const balanceEth = ethers.formatEther(balanceWei);
      setWalletBalance(balanceEth);

      //
      // 6️⃣ Chuyển sang giao diện info
      //
      setWalletState('info');
    } catch (err: unknown) {
      alert(err instanceof Error ? err.message : 'Unknown error');
      setWalletState('select');
    }
  } else {
    //
    // Fake wallet (Pione)
    //
    setTimeout(() => {
      const fakeAddress = '0xABCDEF1234567890';
      setProfile({ addressWallet: fakeAddress });
      setWalletBalance('1.234');
      setAccount(fakeAddress);
      setWalletState('info');
    }, 1200);
  }
};


  // const connectWallet = async (wallet: 'metamask' | 'pione') => {
  //   setWalletState('connecting');
  //   setConnectingWalletName(wallet);

  //   if (wallet === 'metamask') {
  //     try {
  //       const ethereum = window.ethereum;
  //       if (!ethereum) throw new Error('Please install MetaMask');

  //       const accounts = (await ethereum.request({ method: 'eth_requestAccounts' })) as string[];
  //       if (!accounts?.length) throw new Error('No Ethereum account found');

  //       const checksumAddress = ethers.getAddress(accounts[0]);

  //       // 1️⃣ fetch nonce từ backend
  //       const nonceRes = await fetch('/api/login', {
  //         method: 'POST',
  //         headers: { 'Content-Type': 'application/json' },
  //         body: JSON.stringify({ address: checksumAddress }),
  //       });

  //       const nonceData = await nonceRes.json();
  //       if (!nonceRes.ok) throw new Error(nonceData.error || 'Failed to fetch nonce');

  //       // 2️⃣ Tạo message SIWE
  //       const message = new SiweMessage({
  //         domain: window.location.host,
  //         address: checksumAddress,
  //         statement: 'Sign in to My App',
  //         uri: window.location.origin,
  //         version: '1',
  //         chainId: 1,
  //         nonce: nonceData.nonce,
  //       }).prepareMessage();

  //       // 3️⃣ Ký message
  //       const signature = await ethereum.request({
  //         method: 'personal_sign',
  //         params: [message, checksumAddress],
  //       });

  //       // 4️⃣ Gửi message + signature để nhận JWT
  //       const loginRes = await fetch('/api/nonce', {
  //         method: 'POST',
  //         headers: { 'Content-Type': 'application/json' },
  //         body: JSON.stringify({ address: checksumAddress, signature }),
  //       });

  //       const loginData = await loginRes.json();
  //       if (!loginRes.ok) throw new Error(loginData.error || 'Login failed');

  //       // 5️⃣ Lưu account + token
  //       setAccount(checksumAddress);
  //       setProfile({ addressWallet: checksumAddress });
  //       setWalletBalance('1.234');
  //       setWalletState('info');
  //     } catch (err: unknown) {
  //       alert(err instanceof Error ? err.message : 'Unknown error');
  //       setWalletState('select');
  //     }
  //   } else {
  //     // Fake wallet
  //     setTimeout(() => {
  //       const fakeAddress = '0xABCDEF1234567890';
  //       setProfile({ addressWallet: fakeAddress });
  //       setWalletBalance('1.234');
  //       setAccount(fakeAddress);
  //       setWalletState('info');
  //     }, 1200);
  //   }
  // };

  const handleDisconnect = () => {
    setWalletState('disconnect');
    setAccount('');
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box className="fixed inset-0 flex items-center justify-center bg-black/30">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <Paper
            sx={{ width: 400, borderRadius: 3, p: 4, position: 'relative' }}
          >
            <IconButton
              onClick={onClose}
              sx={{ position: 'absolute', top: 16, right: 16 }}
            >
              <CloseIcon />
            </IconButton>

            {walletState === 'select' && (
              <Stack spacing={2}>
                {(['metamask', 'pione'] as const).map((w) => (
                  <Button
                    key={w}
                    onClick={() => connectWallet(w)}
                    startIcon={
                      <Image
                        src={walletIcons[w]}
                        width={24}
                        height={24}
                        alt={w}
                      />
                    }
                  >
                    {w === 'pione' ? 'Pione' : 'MetaMask'}
                  </Button>
                ))}
              </Stack>
            )}

            {walletState === 'connecting' && (
              <Typography>Connecting {connectingWalletName}...</Typography>
            )}

            {walletState === 'info' && profile && (
              <Stack spacing={2} alignItems="center">
                <Avatar sx={{ width: 80, height: 80 }}>
                  {shortenAddress(profile.addressWallet)}
                </Avatar>
                <Typography>{shortenAddress(profile.addressWallet)}</Typography>
                <Typography>Balance: {walletBalance}</Typography>
                <Button onClick={handleDisconnect}>Disconnect</Button>
              </Stack>
            )}

            {walletState === 'disconnect' && (
              <Button onClick={() => setWalletState('select')}>
                Reconnect Wallet
              </Button>
            )}
          </Paper>
        </motion.div>
      </Box>
    </Modal>
  );
};
