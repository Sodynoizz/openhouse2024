import { ErrorBoundary, FallbackProps } from "react-error-boundary";
import Image from "next/image";
import LoginPage from "@/pages/login";

export default function Home() {
  return (
    <LoginPage />
  );
}
