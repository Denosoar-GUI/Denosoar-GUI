import { AppProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export default function App({ Component }: AppProps) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/app.css" />
        <link rel="icon" href="../components/super-deno.png"/>
      </Head>
      <Component />
    </>
  );
}
  