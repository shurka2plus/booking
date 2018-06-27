export interface Page<T> {
  content: T[];
  pageable: {
    pageSize: number;
    pageNumber: number;
  }
  totalElements: number;
}
