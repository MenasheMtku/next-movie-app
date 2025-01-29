interface commonProps {
  id: number;
  overview: string;
  poster_path: string;
  backdrop_path?: string;
  vote_average: number;
}
export type Movie = commonProps & {
  title: string;
  release_date: string;
};
export type Tv = commonProps & {
  name: string;
  first_air_date: string;
};
export function getTrendingAll() {
  throw new Error("Function not implemented.");
}

export interface Category {
  id: string;
  name: string;
}

export interface CategoryMenuProps {
  categories: Category[];
  onCategoryChange: (category: string) => void;
  defaultCategory: string;
  className?: string;
}
