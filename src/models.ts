export interface ITodoItem {
    _id: string;
    title: string;
    completed: boolean;
  }
  
  export enum ApiStatus {
    LOADING = 'loading',
    LOADED = 'loaded',
    FAILED = 'failed'
  }