import * as z from 'zod';

const authSchema = z.object({
  fullName: z.string().min(1, {message: 'Full Name is required'}),
  emailAddress: z.string().email({message: 'Invalid email address'}),
  password: z
    .string()
    .min(8, {message: 'Password must be at least 8 characters long'}),
});

export default authSchema;
