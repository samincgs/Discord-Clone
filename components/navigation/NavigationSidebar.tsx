import { currentProfile } from '@/lib/current-profile';
import { db } from '@/lib/db';
import { redirect } from 'next/navigation';
import NavigationAction from './NavigationAction';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import NavigationItem from './NavigationItem';
import { DarkModeToggle } from '../DarkModeToggle';
import { UserButton } from '@clerk/nextjs';

const NavigationSidebar = async () => {
  const profile = await currentProfile();

  if (!profile) {
    return redirect('/');
  }

  const servers = await db.server.findMany({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  return (
    <div className='h-full w-full flex flex-col dark:bg-[#1E1F22] space-y-4 items-center text-primary py-3'>
      <NavigationAction />
      <Separator className='w-10 h-[2px] bg-zinc-300 dark:bg-zinc-700 rounded-md ' />
      <ScrollArea className='flex-1 w-full'>
        {servers.map((server) => (
          <div key={server.id} className='mb-4'>
            <NavigationItem
              id={server.id}
              name={server.name}
              imageUrl={server.imageUrl}
            />
          </div>
        ))}
      </ScrollArea>
      <div className='flex flex-col items-center justify-center gap-y-4 pb-3'>
        <DarkModeToggle />
        <UserButton
          afterSignOutUrl='/'
          appearance={{
            elements: {
              avatarBox: 'h-[48px] w-[48px]',
            },
          }}
        />
      </div>
    </div>
  );
};
export default NavigationSidebar;
