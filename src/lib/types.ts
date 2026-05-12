export interface Database {
  public: {
    Tables: {
      categories: {
        Row: { id: string; name: string; slug: string; created_at: string };
        Insert: { name: string; slug: string };
        Update: Partial<{ name: string; slug: string }>;
      };
      projects: {
        Row: {
          id: string;
          title: string;
          slug: string;
          description: string;
          location: string;
          year: number | null;
          category_id: string | null;
          hero_image: string;
          thumbnail: string;
          featured: boolean;
          sort_order: number;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['projects']['Row'], 'id' | 'created_at'>;
        Update: Partial<Database['public']['Tables']['projects']['Insert']>;
      };
      gallery_images: {
        Row: { id: string; project_id: string | null; url: string; caption: string; sort_order: number; created_at: string };
        Insert: { project_id?: string; url: string; caption?: string; sort_order?: number };
        Update: Partial<Database['public']['Tables']['gallery_images']['Insert']>;
      };
      services: {
        Row: { id: string; title: string; description: string; icon: string; sort_order: number; created_at: string };
        Insert: { title: string; description?: string; icon?: string; sort_order?: number };
        Update: Partial<Database['public']['Tables']['services']['Insert']>;
      };
      messages: {
  Row: {
    id: number;
    name: string;
    email: string;
    phone: string | null;
    subject: string | null;
    message: string;
    created_at: string;
  };
  Insert: {
    name: string;
    email: string;
    phone?: string | null;
    subject?: string | null;
    message: string;
  };
  Update: {
    name?: string;
    email?: string;
    phone?: string | null;
    subject?: string | null;
    message?: string;
  };
};
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
  };
}

export type Project = Database['public']['Tables']['projects']['Row'] & {
  categories?: { name: string; slug: string } | null;
};
export type Service = Database['public']['Tables']['services']['Row'];
export type Category = Database['public']['Tables']['categories']['Row'];
export type Message = Database['public']['Tables']['messages']['Insert'];

