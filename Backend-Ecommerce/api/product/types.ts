type filterByPrice = "lower" | "higher";

export interface ISearchParams {
  category?: string;
  filterByPrice?: filterByPrice;
  priceRange?: string;
  page?: string;
  limit?: string;
}
