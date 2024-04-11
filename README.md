# Shop-The-Look Lens Assignment Reference

### Problem 1: Identifying the White Box in a Black & White Matrix

1. **Initialization**: Begin by setting variables to track the top-left corner, height, and width of the white box.
2. **Finding the Top-Left Corner**: Iterate over the matrix to find the first occurrence of a 'w' character. This position will be the top-left corner of the white box.
3. **Determining Width and Height**: Continue iterating to determine the width (how many 'w' characters are there horizontally from the top-left corner) and height (how many 'w' characters are there vertically from the top-left corner).
4. **Return Values**: Finally, return an object or a structure containing the top-left corner coordinates, the width, and the height of the white box.

### Problem 2: Array Division and Exception Handling

1. **Iteration**: Go through the array elements one by one.
2. **Division Logic**: For each element, divide it by the next element in the array. For the last element, divide it by the first element.
3. **Exception Handling**: Implement a check for division by zero and handle it appropriately, possibly by skipping the operation or setting a specific value (like None or an error message).

### Problem 3: Sum of Numbers Divisible by 3 in a String

1. **Extract Numbers**: Use a method to find all numbers in the given string.
2. **Check Divisibility and Sum**: Iterate through these numbers. If a number is divisible by 3, add it to a sum variable and keep track of it as the last divisible number found.
3. **Result**: After iteration, return the total sum and the last number that was divisible by 3.

### Problem 4: Last Man Standing in a Circle

1. **Initialization**: Create a list representing people in a circle, numbered from 1 to 100.
2. **Elimination Process**: Repeatedly remove every second person from the list. This process should continue until only one person is left.
3. **Finding the Survivor**: The last remaining number in the list represents the person who survives.

### Problem 5: Database Schema for Hotels and Menus

1. **Identify Entities and Relationships**: Recognize that there are three main entities: Hotels, Menus, and Food Items. Understand the relationships: a hotel can have multiple menus, a menu can have multiple food items, and food items can be on multiple menus.
2. **Designing Tables**: Create separate tables for Hotels, Menus, and Food Items.
3. **Managing Many-to-Many Relationship**: Since a food item can belong to multiple menus, create a junction table (like MenuFoodItems) to handle this many-to-many relationship.
4. **Key Considerations**: Define primary keys for each table and use foreign keys to establish relationships between tables.
