import type { ReactNode } from "react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageWipe } from "@/components/PageWipe";
import { rooms, type RoomName } from "@/lib/rooms";
import { cn } from "@/lib/cn";

// Full-bleed coloured "room" wrapping the nav, page content, and footer.
export function Room({
  room,
  children,
}: {
  room: RoomName;
  children: ReactNode;
}) {
  const r = rooms[room];
  return (
    <div className={cn("flex min-h-screen flex-col", r.bg, r.text)}>
      <PageWipe color={r.wipe} />
      <Nav room={room} />
      <div className="flex-1">{children}</div>
      <Footer room={room} />
    </div>
  );
}
