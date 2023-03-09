export interface ITourType {
  id: number;
  title: string;
}

export interface ITour {
  short_description: string;
  cover_image_url: string;
  title: string;
  tour_category_title?: string;
  id: number;
}