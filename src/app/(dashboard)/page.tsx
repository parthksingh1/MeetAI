import {headers } from 'next/headers';
import {redirect} from 'next/navigation';

import { auth } from '@/lib/auth';
import HomeView from '@/modules/home/ui/views/home-view';

const Page = async () => {
    const seesion = await auth.api.getSession({
        headers: await headers(),
    });

    if (!seesion) {
        redirect("/sign-in");
    }

        return <HomeView />
    }

export default Page;
