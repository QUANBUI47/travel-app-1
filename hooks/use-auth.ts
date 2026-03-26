import { useEffect } from "react";
import { useAuthStore } from "@/stores/auth-store";
// import { supabase } from "@/services/supabase"; // Giả định service đã có

export function useAuth() {
  const { user, session, isLoading, setLoading } = useAuthStore();

  useEffect(() => {
    // Logic giả lập check session từ Supabase
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
    
    /* 
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session?.user) {
        // Fetch profile from public.profiles
        setUser({
          id: session.user.id,
          email: session.user.email!,
          fullName: session.user.user_metadata.full_name,
          avatarUrl: session.user.user_metadata.avatar_url,
          role: "USER"
        });
      }
      setLoading(false);
    });
    */
  }, [setLoading]);

  return { user, session, isLoading };
}
