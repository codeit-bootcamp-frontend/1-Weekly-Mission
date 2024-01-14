import "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      email: string;
      name: string;
      profileImage: string;
    };
    tokens: {
      accessToken: string;
      refreshToken: string;
    };
  }
}
