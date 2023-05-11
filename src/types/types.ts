import { Battle } from "../models/Battle";
import { Hero } from "../models/Hero";
import { Kingdom } from "../models/Kingdom";

export interface HeroDB {
  id: string;
  name: string;
  hero_class: string;
  kingdom: string;
  race: string;
  created_at: string;
}

export interface HeroDBpost {
  id: string;
  name: string;
  hero_class: string;
  kingdom: string;
  race: string;
  created_at: string;
}

export interface InputHero {
  id: string;
  name: string;
  hero_class: string;
  kingdom: string;
  race: string;
  created_at: string;
}

export interface KingdomDB {
  id: string;
  name: string;
  age: string;
  kingdom_hero: string;
}

export interface KingdomDBpost {
  id: string;
  name: string;
  age: string;
  kingdom_hero: string;
}

export interface InputKingdom {
  id: string;
  name: string;
  age: string;
  kingdom_hero: string;
}

export interface BattleDB {
  id: string;
  location: string;
  date: string;
  winner_id: string;
  loser_id: string;
  kingdom_id: string;
}

export interface BattleDBpost {
  id: string;
  location: string;
  date: string;
  winner_id: string;
  loser_id: string;
  kingdom_id: string;
}

export interface InputBattle {
  id: string;
  location: string;
  date: string;
  winner_id: string;
  loser_id: string;
  kingdom_id: string;
}

export type InputQuery = {
  q: string | undefined;
};

export type OutputInformation = {
  message: string;
  information: Battle | Kingdom | Hero;
};
