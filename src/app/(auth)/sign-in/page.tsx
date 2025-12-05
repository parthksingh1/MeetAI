import { SignInView } from "@/modules/auth/ui/views/sign-in-view";
import {headers } from 'next/headers';
import {redirect} from 'next/navigation';
import { auth } from '@/lib/auth';

const Page = async () => {
  const seesion = await auth.api.getSession({
          headers: await headers(),
      });
  
      if (!!seesion) {
          redirect("/");
      }

  return <SignInView />
}

export default Page;