import { currentProfile } from '@/lib/current-profile';
import { db } from '@/lib/db';
import { redirect } from 'next/navigation';
import NavigationAction from './NavigationAction';

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
    </div>
  );
};
export default NavigationSidebar;
