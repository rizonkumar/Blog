import { SignIn } from "@clerk/clerk-react";

const Loginpage = () => {
  return (
    <div className="flex h-[calc(100vh-80px)] items-center justify-center">
      <SignIn signUpUrl="/register" />
    </div>
  );
};

export default Loginpage;
