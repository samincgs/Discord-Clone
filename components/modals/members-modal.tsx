'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import { useModal } from '@/hooks/use-modal-store';
import { Check, Copy, RefreshCw } from 'lucide-react';
import { useOrigin } from '@/hooks/use-origin';
import { useState } from 'react';
import axios from 'axios';

export const MembersModal = () => {
  const { onOpen, isOpen, onClose, type, data } = useModal();

  const isModalOpen = isOpen && type === 'members';
  const { server } = data;

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className='bg-white text-black p-0 max-w-xl'>
        <DialogHeader className='px-8 pt-12'>
          <DialogTitle className='text-center text-2xl font-bold'>
            Manage Members
          </DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
