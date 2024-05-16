'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

import { Button } from '@/components/ui/button';

import { useModal } from '@/hooks/use-modal-store';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export const DeleteServerModal = () => {
  const { onOpen, isOpen, onClose, type, data } = useModal();
  const router = useRouter();

  const isModalOpen = isOpen && type === 'deleteServer';
  const { server } = data;

  const [loading, setIsLoading] = useState(false);

  const onClick = async () => {
    try {
      setIsLoading(true);

      await axios.delete(`/api/servers/${server?.id}`);
      onClose();
      router.refresh();
      window.location.reload();
      router.push('/');
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className='bg-white text-black p-0 max-w-xl'>
        <DialogHeader className='px-4 pt-8'>
          <DialogTitle className='text-center text-2xl font-bold pt-2'>
            Delete Server
          </DialogTitle>
          <DialogDescription className='text-center text-zinc-500 pt-2'>
            Are you sure you want to do this? <br />
            <span className='text-indigo-500 font-semibold'>
              {server?.name}
            </span>{' '}
            will be permanently deleted.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className='bg-gray-100 px-6 py-4'>
          <Button
            disabled={loading}
            variant='destructive'
            className='bg-rose-600'
            onClick={onClick}
          >
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
