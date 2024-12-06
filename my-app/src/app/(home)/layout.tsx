

export default function HomeLayout({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="container">{children}</main>
    )
}
