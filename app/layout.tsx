import Providers from "./providers";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth/authOptions";
import "@/styles/app.scss";
import AdminTemplate from "@/components/template/admin-template";

export const metadata = {
  title: "Next Ecommerce",
  description: "...",
};

export default async function RootLayout({ children }: any) {
  const session: any = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Providers session={session}>
          <AdminTemplate>{children}</AdminTemplate>
        </Providers>
      </body>
    </html>
  );
}
