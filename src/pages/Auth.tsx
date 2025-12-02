import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [signupData, setSignupData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // -----------------------------------------
  // LOGIN FUNCTION
  // -----------------------------------------

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: loginData.email,
        password: loginData.password,
      });

      if (error) throw error;

      toast.success("Login successful!");
      navigate("/dashboard");

    } catch (error: unknown) {
      const err = error as { message?: string };
      toast.error(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  // -----------------------------------------
  // SIGNUP FUNCTION
  // -----------------------------------------

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signUp({
        email: signupData.email,
        password: signupData.password,
        options: {
          data: {
            full_name: signupData.fullName,
            phone: signupData.phone,
          }
        }
      });

      if (error) throw error;

      toast.success("Account created successfully!");
      setLoginData({ email: signupData.email, password: signupData.password });

    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg"
      >

        <h2 className="text-2xl font-bold mb-6 text-center">
          {isLogin ? "Login" : "Create Account"}
        </h2>

        {/* SIGNUP FORM */}
        {!isLogin && (
          <form onSubmit={handleSignup} className="space-y-4">
            <div>
              <Label>Full Name</Label>
              <Input
                type="text"
                value={signupData.fullName}
                onChange={(e) =>
                  setSignupData({ ...signupData, fullName: e.target.value })
                }
                required
              />
            </div>

            <div>
              <Label>Phone Number</Label>
              <Input
                type="text"
                value={signupData.phone}
                onChange={(e) =>
                  setSignupData({ ...signupData, phone: e.target.value })
                }
                required
              />
            </div>

            <div>
              <Label>Email</Label>
              <Input
                type="email"
                value={signupData.email}
                onChange={(e) =>
                  setSignupData({ ...signupData, email: e.target.value })
                }
                required
              />
            </div>

            <div>
              <Label>Password</Label>
              <Input
                type="password"
                value={signupData.password}
                onChange={(e) =>
                  setSignupData({ ...signupData, password: e.target.value })
                }
                required
              />
            </div>

            <Button disabled={loading} className="w-full" type="submit">
              {loading ? "Creating..." : "Sign Up"}
            </Button>

            <p className="text-center text-sm cursor-pointer mt-2"
              onClick={() => setIsLogin(true)}>
              Already have an account? Login
            </p>
          </form>
        )}

        {/* LOGIN FORM */}
        {isLogin && (
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Label>Email</Label>
              <Input
                type="email"
                value={loginData.email}
                onChange={(e) =>
                  setLoginData({ ...loginData, email: e.target.value })
                }
                required
              />
            </div>

            <div>
              <Label>Password</Label>
              <Input
                type="password"
                value={loginData.password}
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
                required
              />
            </div>

            <Button disabled={loading} className="w-full" type="submit">
              {loading ? "Logging in..." : "Login"}
            </Button>

            <p className="text-center text-sm cursor-pointer mt-2"
              onClick={() => setIsLogin(false)}>
              Don't have an account? Create one
            </p>
          </form>
        )}
      </motion.div>
    </div>
  );
};

export default Auth;
