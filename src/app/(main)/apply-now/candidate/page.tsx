import CandidatePage from "@/components/molecules/ApplyPage/CandidatePage";
import React from "react";
import { candidateMetadata } from "../../metadata";

export const metadata = candidateMetadata;

export default function page() {
  return <CandidatePage />;
}
