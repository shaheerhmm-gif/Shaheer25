import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Contact = {
  id: string;
  name: string;
  email: string;
  phone: string;
  restaurant_name: string;
  city: string;
  service_type: string;
  message?: string;
  created_at: string;
};

export type ARModel = {
  id: string;
  title: string;
  description: string;
  category: string;
  model_url: string;
  thumbnail_url?: string;
  price?: number;
  restaurant_id?: string;
  created_at: string;
  updated_at: string;
};

export type Testimonial = {
  id: string;
  client_name: string;
  client_role: string;
  testimonial: string;
  rating: number;
  results?: string;
  image_url?: string;
  is_featured: boolean;
  created_at: string;
};

export type CaseStudy = {
  id: string;
  restaurant_name: string;
  location: string;
  challenge: string;
  solution: string;
  results: string;
  services_used: string[];
  image_url?: string;
  created_at: string;
};
