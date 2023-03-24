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

export interface ITourExpanded extends ITour {
  images: {
    image_url: string;
  }[];
  price: string;
  description: string;
}

export interface IPaginatedTours {
  links: {
    previous: null | string;
    next: null | string;
  };
  per_page: number;
  current_page: number;
  total_pages: number;
  total: number;
  results: ITour[];
}