/*
  # Restaurant Agency Platform Schema
  
  ## Overview
  Complete database schema for a multi-service restaurant consultancy and digital solutions agency platform.
  
  ## New Tables
  
  ### 1. contacts
  Stores all inquiry form submissions from potential clients
  - `id` (uuid, primary key)
  - `name` (text) - Client name
  - `email` (text) - Client email
  - `phone` (text) - Client phone number
  - `restaurant_name` (text) - Name of restaurant/business
  - `city` (text) - City location
  - `service_type` (text) - Type of service interested in
  - `message` (text, optional) - Additional message
  - `created_at` (timestamptz) - Timestamp of submission
  
  ### 2. ar_models
  Stores uploaded AR 3D models for restaurant menus
  - `id` (uuid, primary key)
  - `title` (text) - Name of the food item
  - `description` (text) - Description of the item
  - `category` (text) - Food category (appetizer, main, dessert, etc.)
  - `model_url` (text) - URL to the GLB file
  - `thumbnail_url` (text, optional) - Preview image URL
  - `price` (numeric, optional) - Price of the item
  - `restaurant_id` (uuid, optional) - Link to restaurant (future use)
  - `created_at` (timestamptz) - Upload timestamp
  - `updated_at` (timestamptz) - Last update timestamp
  
  ### 3. testimonials
  Stores client testimonials and case study results
  - `id` (uuid, primary key)
  - `client_name` (text) - Client/Restaurant name
  - `client_role` (text) - Role (Owner, Manager, etc.)
  - `testimonial` (text) - Testimonial content
  - `rating` (integer) - Rating out of 5
  - `results` (text, optional) - Measurable results achieved
  - `image_url` (text, optional) - Client photo URL
  - `is_featured` (boolean) - Whether to feature on homepage
  - `created_at` (timestamptz) - Creation timestamp
  
  ### 4. case_studies
  Detailed case studies of successful projects
  - `id` (uuid, primary key)
  - `restaurant_name` (text) - Restaurant name
  - `location` (text) - City/location
  - `challenge` (text) - Problem they faced
  - `solution` (text) - What we provided
  - `results` (text) - Measurable outcomes
  - `services_used` (text[]) - Array of services utilized
  - `image_url` (text, optional) - Featured image
  - `created_at` (timestamptz) - Creation timestamp
  
  ## Security
  - Enable RLS on all tables
  - Public read access for ar_models, testimonials, and case_studies
  - Only authenticated admins can write to these tables
  - Contacts table: public insert (for form submissions), admin read only
*/

-- Create contacts table
CREATE TABLE IF NOT EXISTS contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  restaurant_name text NOT NULL,
  city text NOT NULL,
  service_type text NOT NULL,
  message text,
  created_at timestamptz DEFAULT now()
);

-- Create ar_models table
CREATE TABLE IF NOT EXISTS ar_models (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  category text NOT NULL DEFAULT 'main',
  model_url text NOT NULL,
  thumbnail_url text,
  price numeric(10, 2),
  restaurant_id uuid,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name text NOT NULL,
  client_role text NOT NULL,
  testimonial text NOT NULL,
  rating integer NOT NULL DEFAULT 5,
  results text,
  image_url text,
  is_featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Create case_studies table
CREATE TABLE IF NOT EXISTS case_studies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  restaurant_name text NOT NULL,
  location text NOT NULL,
  challenge text NOT NULL,
  solution text NOT NULL,
  results text NOT NULL,
  services_used text[] NOT NULL,
  image_url text,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE ar_models ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE case_studies ENABLE ROW LEVEL SECURITY;

-- Contacts policies: anyone can insert (form submissions), only authenticated can read
CREATE POLICY "Anyone can submit contact form"
  ON contacts FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read contacts"
  ON contacts FOR SELECT
  TO authenticated
  USING (true);

-- AR Models policies: public read, authenticated write
CREATE POLICY "Anyone can view AR models"
  ON ar_models FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Authenticated users can insert AR models"
  ON ar_models FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update AR models"
  ON ar_models FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete AR models"
  ON ar_models FOR DELETE
  TO authenticated
  USING (true);

-- Testimonials policies: public read, authenticated write
CREATE POLICY "Anyone can view testimonials"
  ON testimonials FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Authenticated users can insert testimonials"
  ON testimonials FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update testimonials"
  ON testimonials FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete testimonials"
  ON testimonials FOR DELETE
  TO authenticated
  USING (true);

-- Case studies policies: public read, authenticated write
CREATE POLICY "Anyone can view case studies"
  ON case_studies FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Authenticated users can insert case studies"
  ON case_studies FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update case studies"
  ON case_studies FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete case studies"
  ON case_studies FOR DELETE
  TO authenticated
  USING (true);

-- Insert sample testimonials
INSERT INTO testimonials (client_name, client_role, testimonial, rating, results, is_featured) VALUES
('Café Aroma', 'Owner - Priya Sharma', 'The team transformed our café completely. From menu engineering to digital presence, everything improved. The free micro-influencer campaign brought 40% more footfall in just 2 months!', 5, '40% increase in footfall, 25% revenue growth', true),
('Spice Kitchen', 'Manager - Rahul Verma', 'Their AR menu system is a game-changer. Customers love seeing dishes in 3D before ordering. Our average order value increased by 30% after implementation.', 5, '30% higher average order value', true),
('Cloud Bites', 'Founder - Amit Patel', 'Best investment for our cloud kitchen. SEO and Google ranking services got us on the first page. Orders tripled in 3 months. Highly recommend!', 5, '3x order increase in 3 months', true);

-- Insert sample case study
INSERT INTO case_studies (restaurant_name, location, challenge, solution, results, services_used) VALUES
('The Golden Fork Restaurant', 'Mumbai', 'Low footfall, outdated menu, no online presence, high food costs eating into profits', 'Complete menu engineering with cost optimization, modern website with SEO, Google Business optimization, free micro-influencer campaign with 20 local influencers, AR 3D menu for premium items', 'Revenue increased by 65% in 4 months, food cost reduced by 18%, Google ranking jumped to position 2, 500+ new customers from influencer campaign, 35% increase in premium item orders via AR menu', ARRAY['Restaurant Consultancy', 'Digital Transformation', 'AR Menu System', 'Free Influencer Marketing']);
