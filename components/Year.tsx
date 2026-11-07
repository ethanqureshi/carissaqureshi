"use client";

import { useEffect, useState } from "react";

/** Shows the build-time year from the server, then the visitor's current year after hydration. */
export default function Year({ fallback }: { fallback: number }) {
  const [year, setYear] = useState<number | null>(null);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time sync with the client clock
    setYear(new Date().getFullYear());
  }, []);
  return <>{year ?? fallback}</>;
}
