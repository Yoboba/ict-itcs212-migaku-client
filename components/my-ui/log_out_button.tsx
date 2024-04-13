"use client";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export function LogOutButton() {
  const router = useRouter();
  async function handleLogOut() {
    const response = await fetch("/login/api", { method: "DELETE" });
    const data = await response.json();
    console.log(data);
    router.refresh();
  }
  return (
    <Button onClick={handleLogOut} variant="default">
      Log Out
    </Button>
  );
}
