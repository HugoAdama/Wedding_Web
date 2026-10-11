export interface WeddingTheme {
  id: string;
  name: string;
  subtitle: string;
  colors: string[];
  variables: Record<string, string>;
}

export const weddingThemes: Record<string, WeddingTheme> = {
  oliva: {
    id: 'oliva',
    name: 'Oliva & Oro',
    subtitle: 'Campestre & Clásico',
    colors: ['#4A5740', '#C9A961', '#E8DCC8'],
    variables: {
      '--oliva': '#6B7A5A',
      '--oliva-oscuro': '#4A5740',
      '--oliva-profundo': '#323C2C',
      '--dorado': '#C9A961',
      '--dorado-oscuro': '#9E7F38',
      '--arena': '#E8DCC8',
      '--arena-suave': '#F0E8DC',
      '--terracota': '#C97B5A',
    },
  },
  rosa: {
    id: 'rosa',
    name: 'Rosa Polvo',
    subtitle: 'Romántico Floral',
    colors: ['#6B404E', '#D99B8B', '#F2DDD8'],
    variables: {
      '--oliva': '#8C5666',
      '--oliva-oscuro': '#5C3341',
      '--oliva-profundo': '#3B1E28',
      '--dorado': '#D99B8B',
      '--dorado-oscuro': '#A8695A',
      '--arena': '#F2DDD8',
      '--arena-suave': '#F9EDE9',
      '--terracota': '#BD6B7D',
    },
  },
  azul: {
    id: 'azul',
    name: 'Azul Noche',
    subtitle: 'Elegancia Sobria',
    colors: ['#2B3D52', '#8FAEC9', '#DCE5ED'],
    variables: {
      '--oliva': '#4A627E',
      '--oliva-oscuro': '#2A3C52',
      '--oliva-profundo': '#1A2736',
      '--dorado': '#8FAEC9',
      '--dorado-oscuro': '#5B7E9E',
      '--arena': '#DCE5ED',
      '--arena-suave': '#ECF1F6',
      '--terracota': '#53789E',
    },
  },
  terracota: {
    id: 'terracota',
    name: 'Terracota',
    subtitle: 'Boho & Cálido',
    colors: ['#3B4D3C', '#C97B5A', '#EBDDCE'],
    variables: {
      '--oliva': '#526654',
      '--oliva-oscuro': '#384A3A',
      '--oliva-profundo': '#243326',
      '--dorado': '#C97B5A',
      '--dorado-oscuro': '#9E5638',
      '--arena': '#EBDDCE',
      '--arena-suave': '#F5ECE1',
      '--terracota': '#A85232',
    },
  },
};
