import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/onboarding", // Redirect users here if not logged in
  },
});
