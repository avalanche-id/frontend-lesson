import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="container px-10">
      <header className="flex justify-end w-full p-10">
        <ConnectButton />
      </header>

      {children}
    </main>
  );
}
