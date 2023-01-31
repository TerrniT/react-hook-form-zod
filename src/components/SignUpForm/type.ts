import { SignupSchema } from "@/src/schemas";
import * as z from "zod";

export type SignUpFormValues = z.infer<typeof SignupSchema>;
