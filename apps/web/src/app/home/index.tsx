import { UserButton } from '@clerk/nextjs'

import { ActionsSection } from './components/ActionsSection'

export default function Home() {
  return (
    <div className="h-screen ">
      <header className="flex justify-end p-2">
        <UserButton afterSignOutUrl="/" />
      </header>

      <ActionsSection />
    </div>
  )
}
