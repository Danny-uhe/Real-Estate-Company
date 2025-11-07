// data.ts
import house1 from '../assets/videos/house1.mp4';
import house2 from '../assets/videos/house2.mp4';
import house3 from '../assets/videos/house3.mp4';
import house4 from '../assets/videos/house4.mp4';
import house5 from '../assets/videos/house5.mp4';
import profile1 from '../assets/profile1.jpg';
import profile2 from '../assets/profile2.jpg';
import profile3 from '../assets/profile3.jpg';
import profile4 from '../assets/profile4.jpg';
import profile5 from '../assets/profile5.jpg';

export interface Property {
  id: number;
  video: string;
  title: string;
  address: string;
  beds: number;
  baths: number;
  garage: number;
  sqft: number;
  price: string;
  profilePic: string;
}

export const Properties: Property[] = [
  {
    id: 1,
    video: house1,
    title: 'New Apartment Nice Wiew',
    address: 'Quincy St, Brooklyn, NY, USA',
    beds: 4,
    baths: 5,
    garage: 1,
    sqft: 1200,
    price: '$2,800/mo',
    profilePic: profile1,
  },
  {
    id: 2,
    video: house2,
    title: 'New Apartment Nice Wiew',
    address: 'Quincy St, Brooklyn, NY, USA',
    beds: 4,
    baths: 5,
    garage: 1,
    sqft: 1200,
    price: '$7,500/mo',
    profilePic: profile2,
  },
  {
    id: 3,
    video: house3,
    title: 'New Apartment Nice Wiew',
    address: 'Quincy St, Brooklyn, NY, USA',
    beds: 4,
    baths: 5,
    garage: 1,
    sqft: 1200,
    price: '$7,500/mo',
    profilePic: profile3,
  },
  {
    id: 4,
    video: house4,
    title: 'New Apartment Nice Wiew',
    address: 'Quincy St, Brooklyn, NY, USA',
    beds: 4,
    baths: 5,
    garage: 1,
    sqft: 1200,
    price: '$6,200/mo',
    profilePic: profile4,
  },
  {
    id: 5,
    video: house5,
    title: 'New Apartment Nice Wiew',
    address: 'Quincy St, Brooklyn, NY, USA',
    beds: 4,
    baths: 5,
    garage: 1,
    sqft: 1200,
    price: '$8,000/mo',
    profilePic: profile5,
  },
];