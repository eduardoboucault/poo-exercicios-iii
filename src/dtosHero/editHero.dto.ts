import z from "zod";

export interface EditHeroInputDTO {
  id: string;
  name: string;
  hero_class: string;
  kingdom: string;
  race: string;
}

export interface EditHeroOutputDTO {
  message: string;
  editedHero: {
    name: string;
    hero_class: string;
    kingdom: string;
    race: string;
  };
}

export interface EditedHeroOutputDTO {
  name: string;
  hero_class: string;
  kingdom: string;
  race: string;
}

export const EditHeroSchema = z
  .object({
    id: z.string().min(1),
    name: z.string().optional(),
    hero_class: z.string().optional(),
    kingdom: z.string().optional(),
    race: z.string().optional(),
  })
  .transform((data) => data as EditHeroInputDTO);
