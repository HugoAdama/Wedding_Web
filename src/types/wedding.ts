export interface WeddingEvent {
  title: string;
  time: string;
  description: string;
  locationName: string;
  address: string;
  mapUrl: string;
  wazeUrl?: string;
}

export interface StoryMilestone {
  year: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

export interface HotelOption {
  name: string;
  distance: string;
  pricePerNight: string;
  link?: string;
}

export interface BankAccount {
  bank: string;
  accountType: string;
  accountNumber: string;
  cci: string;
  beneficiary: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface GalleryPhoto {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface ScheduleItem {
  time: string;
  title: string;
  description: string;
  iconName: string;
}

export interface MenuOption {
  id: string;
  title: string;
  description: string;
  icon: string;
  badge?: string;
}

export interface RsvpFormData {
  nombre: string;
  asistencia: 'si' | 'no';
  personas: number;
  menu?: string;
  restricciones?: string;
  mensaje?: string;
}
