/**
 * Temporary pre-launch password gate.
 * To remove it: unwrap <PasswordGate> in src/main.tsx, delete this file and
 * src/components/PasswordGate.tsx, and drop the robots meta in index.html.
 *
 * Only the SHA-256 hash of the password lives here. Input is lowercased and
 * whitespace-stripped before hashing, so "Curtain Up" and "curtainup" both work.
 * To change it: node -e "console.log(require('crypto').createHash('sha256').update('newpassword').digest('hex'))"
 */
export const gate = {
  passwordHash: "a8972ec1e64627f4110ee6ca057ced48119b3c7e66a35c2a3894d5a1c2c50d3a",
  eyebrow: "Rehearsals in progress",
  title: "The curtain is still down",
  message:
    "Something wonderful is being staged behind it. If you were handed a ticket, step inside.",
  inputLabel: "Your ticket",
  submitLabel: "Enter",
  errorMessage: "That ticket doesn't open this door. Try again.",
} as const;
