"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental";
import { Dispatch, SetStateAction, createContext, useState } from "react";

export const ModalContext = createContext<{ modal: JSX.Element | null; setModal: Dispatch<SetStateAction<JSX.Element | null>> }>({ modal: <></>, setModal: function () {} });

function Providers({ children }: React.PropsWithChildren) {
  const [client] = useState(new QueryClient());
  const [modal, setModal] = useState<JSX.Element | null>(null);

  return (
    <QueryClientProvider client={client}>
      <ReactQueryStreamedHydration>
        <ModalContext.Provider value={{ modal, setModal }}>{children}</ModalContext.Provider>
      </ReactQueryStreamedHydration>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default Providers;
