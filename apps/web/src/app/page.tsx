import { UserButton } from '@clerk/nextjs'

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <UserButton afterSignOutUrl="/" />
    </div>
  )
}
