import SubscribeButton from '@/components/subscribeButton/subscribe'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-8">Welcome to EticNewsletter</h1>
      <p className="mb-6 text-lg text-gray-300 text-center max-w-xl">
        Stay updated with our latest news and updates. Subscribe to our newsletter below!
      </p>

      <SubscribeButton />
    </main>
  )
}

export const metadata = {
  title: 'EticNewsletter',
  description: 'Subscribe to our newsletter for the latest updates',
}