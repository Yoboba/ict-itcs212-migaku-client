import LoginSection from "@/containers/Login-Page/login-section";
import ContentSection from "@/containers/Login-Page/content-section";

export default async function LoginPage() {
  return (
    <div className="flex h-screen w-full">
      <ContentSection />
      <LoginSection />
    </div>
  );
}
