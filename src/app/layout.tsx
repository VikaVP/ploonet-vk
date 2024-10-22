import type { Metadata } from "next";

import { Header } from "@/shared";
import { siteConfig } from "@/config/site";
import Script from "next/script";

import "./globals.css";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script id="typekit-script" strategy="lazyOnload">
          {`(function(d) {
						const config = {
							kitId: '${process.env.FONT_ADOBE_ID}',
							scriptTimeout: 3000,
							async: true
						};
						let h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\\bwf-loading\\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s);
					})(document);`}
        </Script>
      </head>
      <body>
        <Header />

        <main className="flex flex-col">{children}</main>
      </body>
    </html>
  );
}
