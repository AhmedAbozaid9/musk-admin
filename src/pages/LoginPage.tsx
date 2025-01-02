import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className=" shadow-lg rounded-b-2xl">
        <div className="rounded-t-2xl  text-center bg-black text-white px-40 py-8">
          <h1 className="text-lg font-semibold">Musc</h1>
          <h2 className="text-3xl font-semibold">نسجيل الدخول</h2>
        </div>
        <form className=" p-8 flex flex-col gap-6" dir="rtl">
          <div>
            <Label className="text-lg">البريد الاكتروني</Label>
            <Input
              type="email"
              placeholder="البريد الاكتروني"
              required
              className="mt-2"
            />
          </div>
          <div>
            <Label className="text-lg">كلمة المرور </Label>
            <Input
              type="password"
              placeholder=" كلمة المرور"
              required
              className="mt-2"
            />
          </div>
          <Button>تسجيل الدخول</Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
