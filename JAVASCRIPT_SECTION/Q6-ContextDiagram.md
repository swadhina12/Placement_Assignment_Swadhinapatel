Execution Context Diagram for Code Snippet 1:

        Execution Context        |          Execution Stack
------------------------------- | -------------------------------
1. Global Execution Context     |   [Global Execution Context]
2.                            |  
3. Function Execution Context   | 
   (setTimeout callback)        | [Function Execution Context]
4.                            |   
5. Function Execution Context   |   
   (console.log callback)       | [Function Execution Context]
6.                            |   
7. Function Execution Context   |   
   (console.log callback)       | [Function Execution Context]
------------------------------- | -------------------------------

Execution Context Diagram for Code Snippet 2:

        Execution Context        |          Execution Stack
------------------------------- | -------------------------------
1. Global Execution Context     |   [Global Execution Context]
2.                            |   
3. Function Execution Context   |   
   (console.log callback)       | [Function Execution Context]
4.                            |   
5. Function Execution Context   |   
   (secondCall)                 | [Function Execution Context]
6.                            |   
7. Function Execution Context   |   
   (setTimeout callback)        | [Function Execution Context]
------------------------------- | -------------------------------
