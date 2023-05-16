import z from "zod";

export interface CreateHeroInputDTO {
  id: string;
  name: string;
  hero_class: string;
  kingdom: string;
  race: string;
  created_at: string;
}

export interface CreateHeroOutputDTO {
  message: string;
  hero: {
    id: string;
    name: string;
    hero_class: string;
    kingdom: string;
    race: string;
    created_at: string;
  };
}

export const CreateHeroSchema = z
  .object({
    id: z.string().min(1),
    name: z.string().min(2),
    hero_class: z.string().min(3),
    kingdom: z.string().min(2),
    race: z.string().min(2),
  })
  .transform((data) => data as CreateHeroInputDTO);
