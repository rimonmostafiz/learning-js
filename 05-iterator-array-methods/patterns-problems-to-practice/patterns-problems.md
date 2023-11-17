P1
```
*****
*****
*****
*****
*****
```
---
P2
```
*
**
***
****
*****
```
---
P3
```
1
12
123
1234
12345
```
---
P4
```
1
22
333
4444
55555
```
---
P5
```
*****
****
***
**
*
```
---
P6
```
12345
1234
123
12
1
```
---
P7
```
    *    
   ***   
  *****  
 ******* 
*********
```
---
P8
```
*********
 ******* 
  *****  
   ***   
    *    
```
---
P9
```
    *    
   ***   
  *****  
 ******* 
*********
*********
 ******* 
  *****  
   ***   
    *    
```
---
P10
```
*
**
***
****
*****
****
***
**
*
```
---
P11
```
1
0 1
1 0 1
0 1 0 1
1 0 1 0 1
```
---
P12
```
1      1
12    21
123  321
12344321
```
---
P13
```
1
2 3
4 5 6
7 8 9 10
11 12 13 14 15
```
---
P14
```
A
AB
ABC
ABCD
ABCDE
```
---
P15
```
ABCDE
ABCD
ABC
AB
A
```
---
P16
```
A
BB
CCC
DDDD
EEEEE
```
---
P17
```
   A
  ABA
 ABCBA 
ABCDCBA
```
---
P18
```
E
D E
C D E
B C D E
A B C D E
```
---
P19
```
**********
****  ****
***    ***
**      **
*        *
*        *
**      **
***    ***
****  ****
**********
```
---
P20
```
*        *
**      **
***    ***
****  ****
**********
**********
****  ****
***    ***
**      **
*        * 
```
---
P21
```
****
*  *
*  *
****
```
---
P22
```
4 4 4 4 4 4 4
4 3 3 3 3 3 4
4 3 2 2 2 3 4
4 3 2 1 2 3 4
4 3 2 2 2 3 4
4 3 3 3 3 3 4
4 4 4 4 4 4 4
```

There are 4 general rules for solving a pattern-based question : 

- We always use nested loops for printing the patterns. For the outer loop, we count the number of lines/rows and loop for them.

- Next, for the inner loop, we focus on the number of columns and somehow connect them to the rows by forming a logic such that for each row we get the required number of columns to be printed.

- We print the ‘*’ inside the inner loop.

- Observe symmetry in the pattern or check if a pattern is a combination of two or more similar patterns or not.