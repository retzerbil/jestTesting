import { Todo } from "./models/Todo";

//import "./style.css"
export const add = (x: number, y: number) => {
  return x + y;
}

const todos: Todo[] = [];

export const addTodo = (theTask: string, theList: Todo[]) => {
  if (theTask.length > 0) {
    const newTodo = new Todo(theTask, false);
    theList.push(newTodo);
  }

}

export const toggleTodo = (i:number, theList:Todo[])=>{
  theList[i].isDone = !theList[i].isDone;
}

addTodo("test",todos);