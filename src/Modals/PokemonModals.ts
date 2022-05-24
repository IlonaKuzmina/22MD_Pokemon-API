/* eslint-disable camelcase */
export type PokemonApiResponse = {
    page: number;
    next: string;
    previous: string;
    results: BasePokemonInfo[];
}

export type BasePokemonInfo = {
    name: string;
    url: string;
}

export type PokemonsExtend = {
    abilities: Ability[];
    base_experience: number;
    forms: BasePokemonInfo[];
    game_indices: Indices[];
    height: number;
    held_items: [];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: Moves[];
    name: string;
    order: number;
    past_types:[];
    species: BasePokemonInfo[];
    sprites: Sprites[];
    stats: PokiStates[];
    types: PokiTypes[]
    weight: number;
}

export type Ability = {
ability: BasePokemonInfo[];
is_hidden: boolean;
slot: number
}

export type Indices = {
    game__index: number;
    version: BasePokemonInfo[];
}

export type Moves = {
    move: BasePokemonInfo[];
    version_group_details: GroupDetails[];
}

export type GroupDetails = {
    level_learned_at: number;
    move_learn_method: BasePokemonInfo[];
    version_group: BasePokemonInfo[];
}

export type Sprites = {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
    other: Others[];
    // versions: Versions[];
}

export type Others = {
    dream_world: DreamWorld[];
    home: Home[];
    official_artwork: ArtWork[];
}

export type DreamWorld = {
    front_default: string;
    front_female: string;
}

export type Home = {
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
}

export type ArtWork = {
    front_default: string;
}

// export type Versions = {
// generation-i: GenOne[];
// // generation-ii:
// // generation-iii:
// // generation-iv:
// // generation-v:
// // generation-vi:
// // generation-vii:
// // generation-viii:
// }

// export type GenOne = {
//     red-blue:
//     yellow:
// }

export type PokiStates = {
base_stat: number;
effort: number;
stat: BasePokemonInfo[];
}

export type PokiTypes = {
slot: number;
type: BasePokemonInfo;
}

export type AbilityExtend = {
    effect_changes: [];
    effect_entries: EfectEntrie[];
    flavor_text_entries: FlavorText[];
    generation: BasePokemonInfo[];
    id: number;
    is_main_series: boolean;
    name: string;
    names: NamesM[];
    pokemon: AbilityPokemon[];
}

export type EfectEntrie = {
effect: string;
language: BasePokemonInfo;
short_effect: string;
}

export type FlavorText = {
    flavor_text: string;
    language: BasePokemonInfo[];
    version_group: BasePokemonInfo[];
}

export type NamesM = {
    language: BasePokemonInfo[];
    name: string;
}
export type AbilityPokemon = {
    is_hidden: boolean;
    pokemon: BasePokemonInfo[];
    slot:number;
}
