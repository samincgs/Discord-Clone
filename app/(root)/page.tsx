import { DarkModeToggle } from '@/components/DarkModeToggle';
import { UserButton } from '@clerk/nextjs';

const HomePage = () => {
  return (
    <div>
      <UserButton afterSignOutUrl='/' />
      <DarkModeToggle />
    </div>
  );
};
export default HomePage;
