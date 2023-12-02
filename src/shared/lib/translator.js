// Error keywords and their corresponding error messages
const items = [
  {
    keyword: "auth/invalid-email",
    message: "The email address you provided is invalid.",
  },
  {
    keyword: "auth/invalid-credential",
    message: "The email or password you entered is incorrect.",
  },
  {
    keyword: "auth/missing-password",
    message: "The password field is missing.",
  },
];

/* Enhance the readability of raw error messages by translating them based on specific 
keywords found in the input raw string. If a keyword is identified, the corresponding 
user-friendly error message is returned; otherwise, the original raw error string is returned. */
export const translateError = (raw) => {
  for (const item of items) {
    if (raw.includes(item.keyword)) {
      return item.message;
    }
  }

  return raw;
};
