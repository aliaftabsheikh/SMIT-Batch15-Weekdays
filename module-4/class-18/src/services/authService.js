
export async function loginAPI(credentials) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (
        credentials.email === "test@gmail.com" &&
        credentials.password === "123456"
      ) {
        resolve({
          user: { id: 1, name: "Ali Aftab", email: "test@gmail.com" },
          token: "fake-jwt-token-123",
        });
      } else {
        reject("Invalid credentials");
      }
    }, 3000);
  });
}
