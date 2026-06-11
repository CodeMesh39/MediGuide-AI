import { useState } from "react";

export default function useAgentStore() {
  const [selectedAgent, setSelectedAgent] =
    useState("Symptom Expert");

  return {
    selectedAgent,
    setSelectedAgent,
  };
}