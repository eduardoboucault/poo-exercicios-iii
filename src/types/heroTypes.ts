export interface HeroDB {
  id: string;
  name: string;
  hero_class: string;
  kingdom: string;
  race: string;
  created_at: string;
}

export type GetInputHero = {
  q?: string;
};

export type EditInputHero = {
  id?: string;
};
