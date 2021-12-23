export interface ToDo {
  id: number;
  task: string;
  complete: boolean;
}

export function generateTodos(): ToDo[] {
  return [
    {
      id: 1,
      task: 'Watch Ozark Season2',
      complete: false,
    },
    {
      id: 2,
      task: 'Use NgRx in my to-do app',
      complete: true,
    },
  ];
}
