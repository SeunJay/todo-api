export interface Payload {
  title: string;
  color: string;
}

export interface Todo extends Payload {
  completed: boolean;
}


