import { profile } from "@/data/content";
import { rooms, type RoomName } from "@/lib/rooms";
import { cn } from "@/lib/cn";

export function Footer({ room }: { room: RoomName }) {
  const r = rooms[room];
  return (
    <footer className={cn("border-t", r.rule)}>
      <div className="mx-auto flex max-w-page flex-col justify-between gap-2 px-6 py-8 md:flex-row md:px-10">
        <p className={cn("label text-xs", r.text)}>
          &copy; {new Date().getFullYear()} {profile.name}
        </p>
        <p className={cn("label text-xs opacity-70", r.text)}>
          {profile.location} · {profile.timezone}
        </p>
      </div>
    </footer>
  );
}
