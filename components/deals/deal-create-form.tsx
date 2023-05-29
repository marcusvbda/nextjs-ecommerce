"use client";

import { useEffect, useState } from "react";

export default function DealCreatePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;

  return (
    <>
      <h1>Deals Create</h1>
    </>
  );
}
