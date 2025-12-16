'use client';
import { Button } from '@mui/material';
import { useState } from 'react';
import { WalletModal } from './WalletButton';

interface WalletButtonProps {
  account: string;
  setAccount: (acc: string) => void;
}

export const WalletButton: React.FC<WalletButtonProps> = ({ account, setAccount }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        sx={{
          bgcolor: '#3BB77E',
          color: '#fff',
          borderRadius: 2,
          px: 2,
          py: 0.7,
          fontSize: 13,
          textTransform: 'none',
          '&:hover': { bgcolor: '#32A176' },
        }}
      >
        {account ? account.slice(0, 6) + '...' + account.slice(-4) : 'Connect Wallet'}
      </Button>

      <WalletModal
        open={open}
        onClose={() => setOpen(false)}
        account={account}
        setAccount={setAccount}
      />
    </>
  );
};
