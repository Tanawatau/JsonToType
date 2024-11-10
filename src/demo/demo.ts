type RootObject = {
  id: number;
  name: string;
  isActive: boolean;
  details: Details;
  tags: Tag[];
  createdAt: string;
  metadata: null;
}

type Tag = {
  id: number;
  label: string;
}

type Details = {
  age: number;
  address: Address;
  preferences: Preferences;
}

type Preferences = {
  colors: string[];
  notifications: Notifications;
}

type Notifications = {
  email: boolean;
  sms: boolean;
}

type Address = {
  street: string;
  city: string;
  postalCode: string;
  coordinates: Coordinates;
}

type Coordinates = {
  latitude: number;
  longitude: number;
}