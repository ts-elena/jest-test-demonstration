export default interface Wizard {
  name: string;
  species: string;
  gender: string;
  house: string;
  dateOfBirth: string;
  yearOfBirth: number;
  ancestry: Ancestry;
  eyeColour: string;
  hairColour: string;
  wand: {
    wood: string;
    core: string;
    length: number;
  };
  patronus: string;
  hogwartsStudent: boolean;
  hogwartsStaff: boolean;
  actor: string;
  alive: boolean;
  image: string;
}

enum Ancestry {
  pureBlood = "pure-blood",
  muggleborn = "muggleborn",
  halfBlood = "half-blood",
}

// export const nameof = <T>(name: keyof T) => name;
