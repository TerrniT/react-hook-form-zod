import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <h1 className="mockup-code">
        <pre>
          <code>Welcome to HomePage</code>
        </pre>
      </h1>
      <Link className="btn-outline btn" href={'/sign-up'}>
        Sign Up!
      </Link>
    </div>
  )
}
