import { z } from 'zod';

const exampleSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
});

export default exampleSchema;