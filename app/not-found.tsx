import Link from "next/link";
import { Room } from "@/components/Room";

export default function NotFound() {
  return (
    <Room room="cobalt">
      <section className="mx-auto flex max-w-page flex-col items-center justify-center px-6 py-32 text-center">
        <p className="label text-xs text-lime">404</p>
        <h1 className="mt-6 text-d2 font-bold tracking-tightest">Lost the thread.</h1>
        <p className="mt-6 text-oncobalt">That page wandered off.</p>
        <Link
          href="/"
          className="label mt-10 rounded-full bg-lime px-6 py-3 text-sm text-ink transition-colors hover:bg-paper"
        >
          Back home
        </Link>
      </section>
    </Room>
  );
}
