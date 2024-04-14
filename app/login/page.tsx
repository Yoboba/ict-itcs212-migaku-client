import LoginSection from "@/containers/login-page/login-section";
import ContentSection from "@/containers/login-page/content-section";

export default function LoginPage() {
  return (
    <div className="flex h-screen w-full">
      <ContentSection />
      <LoginSection />
    </div>
  );
}
