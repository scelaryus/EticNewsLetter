import SubscribeButton from '@/components/subscribeButton/subscribe'

export default function Home() {
  return (
    <main>
      <h1>Welcome to My Site</h1>
      <SubscribeButton />
    </main>
  )
}

export const metadata = {
  title: 'Welcome to My Site',
  description: 'Subscribe to our newsletter',
}
