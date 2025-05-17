import LoginForm from '@/components/auth/LoginForm';

export default function LoginPage() {
  return (
    <div className="container mx-auto py-16 px-4 md:py-24">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Sign In</h1>
        <LoginForm />
      </div>
    </div>
  );
}