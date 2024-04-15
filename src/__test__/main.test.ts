import { add } from "../main";
import { addTodo } from "../main";
import { Todo } from "../models/Todo";
import { toggleTodo } from "../main";


describe("Testing the add() function", () =>{
    test("Is it adding correctly?", () =>{
        //Assign
        const x = 10;
        const y = 20;
        let result = 0;

        //Act
        result = add(x,y);

        //Assert
        expect(result).toBe(30);
    });
});


describe("Testing todos", () =>{
    test("It should add a todo to the list", () =>{
        //Assign
            const theTodoText = "Spela mer golf";
            const tests: Todo[] = [];
            const LenghtFromBeginning = tests.length;

        //Act
            addTodo(theTodoText,tests);

        //Assert
            expect(tests.length).toBe(LenghtFromBeginning + 1);
            expect(tests[tests.length - 1].text).toBe(theTodoText);
            expect(tests[tests.length - 1].isDone).toBeFalsy()
    });

    test("It should not add an empty todo", () =>{
        //Assign
        const theTodoText = "";
        const todos: Todo[] = [];
        const LenghtFromBeginning = todos.length;

        //Act
        addTodo(theTodoText,todos);

        //Assert
        expect(todos.length).toBe(LenghtFromBeginning);
    });

    test("It should be marked as done", () =>{
        //Assign
        const theTodoText = "lorem"
        const todos: Todo[]=[];
        addTodo(theTodoText,todos);

        //Act
        toggleTodo(0,todos);

        //Assert
        expect(todos[0].isDone).toBeTruthy();

    });
});
