import "@mantine/core/styles.css";
import "@fontsource-variable/outfit";
import "@fontsource-variable/jetbrains-mono";

import { MantineProvider, ColorSchemeScript, Group } from "@mantine/core";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { AppShell } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

export function Layout({ children }: { children: React.ReactNode }) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider
          theme={{
            fontFamily: '"Outfit Variable", system-ui, sans-serif',
            fontFamilyMonospace: '"JetBrains Mono Variable", Monaco, Courier, monospace',
            colors: {
              // override dark colors to change them for all components
              dark: [
                '#d5d7e0',
                '#acaebf',
                '#8c8fa3',
                '#666980',
                '#4d4f66',
                '#34354a',
                '#2b2c3d',
                '#1d1e30',
                '#0c0d21',
                '#01010a',
              ],
            },
          }}
        >
          <AppShell
            header={{ height: 60 }}
            padding="md"
          >
            <AppShell.Header>
              <Group h="100%" px="md">
                <p>Pointkey</p>
              </Group>
            </AppShell.Header>
            <AppShell.Main>{children}</AppShell.Main>
          </AppShell>
        </MantineProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html >
  );
}

export default function App() {
  return <Outlet />;
}
