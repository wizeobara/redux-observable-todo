export interface ITodo {
    _id: string;
    title: string;
    completed:boolean
  }
  
export const API_URL = "http://localhost:5000/progress/"