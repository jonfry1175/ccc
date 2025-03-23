export type Candidate = {
  id: number;
  created_at: string;
  first_name: string;
  last_name: string;
  date_of_birth: string;
  gender: string;
  passport_id: string;
  email: string;
  whatsapp_number: string;
  department: string;
  position: string;
  cv_url: string;
  certificate_url: string;
};

export type Partner = {
  id: number;
  created_at: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  company_name: string;
  company_website: string;
  country: string;
  message: string;
};

export type Database = {
  public: {
    Tables: {
      candidates: {
        Row: Candidate;
        Insert: Omit<Candidate, 'id' | 'created_at'>;
        Update: Partial<Omit<Candidate, 'id' | 'created_at'>>;
      };
      partners: {
        Row: Partner;
        Insert: Omit<Partner, 'id' | 'created_at'>;
        Update: Partial<Omit<Partner, 'id' | 'created_at'>>;
      };
    };
  };
}; 