import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import { Test } from "@my/core";
import { Header } from "./components/Header";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <header className="App-header">
          <Header />
          <Test />
        </header>
      </div>
    </QueryClientProvider>
  );
}

export default App;
