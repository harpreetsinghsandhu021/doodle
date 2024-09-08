import * as z from 'zod';

const statusValues = [
  'ongoing',
  'completed',
  'inprocess',
  'cancelled',
] as const;

const todoSchema = z.object({
  title: z.string().min(1, {message: 'Title is required'}),
  status: z.enum(statusValues),
  description: z
    .string()
    .min(20, {message: 'description must be at least 20 characters long'}),
});

export default todoSchema;
