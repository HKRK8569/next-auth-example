"use client";

import NextAuthProvider from "@/provder/NextAuth";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <NextAuthProvider>{children}</NextAuthProvider>;
}
