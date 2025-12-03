"use client";

import {useState} from 'react';

import { authClient } from '@/lib/auth-client';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Home() {

  const { data: session } = authClient.useSession();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    authClient.signUp.email({
      email,
      name,
      password,
    },{
      onError: () => {
        window.alert("Error signing up");
      },
      onSuccess: () => {
        window.alert("Successfully signed up");
      }

    });
  }

  if (session) {
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold">Welcome, {session.user.name}!</h1>
        <Button className="mt-4" onClick={() => authClient.signOut()}>Sign Out</Button>
      </div>
    );
  }
 
  return (
    <div className="flex flex-col gap-4 p-4">
      <Input placeholder="name" value={name} onChange={(e)=> setName(e.target.value)}/>
      <Input placeholder="email" value={email} onChange={(e)=> setEmail(e.target.value)}  />
      <Input placeholder="password" type="password" value={password} onChange={(e)=> setPassword(e.target.value)}  />
      <Button onClick={onSubmit}>Register</Button>
    </div>  );
}
