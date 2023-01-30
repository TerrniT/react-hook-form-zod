import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen">
      <h1 className="mockup-code">
        <pre>
          <code>Welcome to HomePage</code>
        </pre>
      </h1>
      <Link className="btn btn-outline" href={"/sign-up"}>
        Sign Up!
      </Link>
    </div>
  );
}
