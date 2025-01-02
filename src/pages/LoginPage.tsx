import { login } from "@/api/login";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Cookies from "js-cookie";
import { FormEvent } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;
    try {
      const response = await login(email, password);
      console.log(response);
      toast.success("تم تسجيل الدخول بنجاح");
      Cookies.set("musc-admin-token", response.token);
      navigate("/categories");
    } catch (error) {
      toast.error("خطأ في تسجيل الدخول");
      console.error(error);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className=" shadow-lg rounded-b-2xl">
        <div className="rounded-t-2xl  text-center bg-black text-white px-40 py-8">
          <h1 className="text-lg font-semibold">Musc</h1>
          <h2 className="text-3xl font-semibold">نسجيل الدخول</h2>
        </div>
        <form
          onSubmit={handleLogin}
          className=" p-8 flex flex-col gap-6"
          dir="rtl"
        >
          <div>
            <Label className="text-lg">البريد الاكتروني</Label>
            <Input
              type="email"
              placeholder="البريد الاكتروني"
              required
              name="email"
              className="mt-2"
            />
          </div>
          <div>
            <Label className="text-lg">كلمة المرور </Label>
            <Input
              type="password"
              placeholder=" كلمة المرور"
              required
              name="password"
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
