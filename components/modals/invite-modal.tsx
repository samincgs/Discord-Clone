'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

import { useModal } from '@/hooks/use-modal-store';

export const InviteModal = () => {
  const { isOpen, onClose, type } = useModal();

  const isModalOpen = isOpen && type === 'invite';

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className='bg-white text-black p-0 max-w-xl'>
        <DialogHeader className='px-8 pt-12'>
          <DialogTitle className='text-center text-2xl font-bold'>
            Create your server
          </DialogTitle>
          <DialogDescription className='text-center text-zinc-500 font-medium pt-2'>
            Give your server a unique identity with a creative name and a custom
            avatar. You can change both anytime you want.
          </DialogDescription>
        </DialogHeader>
        Invite Modal!
      </DialogContent>
    </Dialog>
  );
};
