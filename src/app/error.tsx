"use client";

import { Button } from "@heroui/react";
import { AlertCircle } from "lucide-react";

export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="flex flex-col items-center justify-center p-8 rounded-lg bg-neutral-900/50 border border-neutral-800 max-w-md w-full">
        <div className="text-primary mb-4">
          <AlertCircle className="w-12 h-12" />
        </div>
        <h2 className="text-xl font-semibold mb-2">Something went wrong</h2>
        <p className="text-neutral-400 text-center mb-4">
          An unexpected error occurred. Please try again.
        </p>
        <Button onPress={() => reset()} variant="bordered">
          Try Again
        </Button>
      </div>
    </div>
  );
}
