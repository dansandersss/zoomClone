import StreamVideoProvider from "@/providers/StreamClientProvider";
import { ReactNode } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yoom",
  description: "Video calling app | My first ever project using Next JS",
  icons: {
    icon: "/icons/logo.svg",
  },
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <main>
        <StreamVideoProvider>{children}</StreamVideoProvider>
      </main>
    </>
  );
};

export default RootLayout;
