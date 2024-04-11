
CREATE TABLE Hotels (
    hotel_id INT PRIMARY KEY,
    hotel_name VARCHAR(100),
);

CREATE TABLE Menus (
    menu_id INT PRIMARY KEY,
    hotel_id INT,
    menu_name VARCHAR(100),
    FOREIGN KEY (hotel_id) REFERENCES Hotels(hotel_id)
);

CREATE TABLE FoodItems (
    food_item_id INT PRIMARY KEY,
    food_item_name VARCHAR(100),
);

CREATE TABLE Menu_Food_Items (
    menu_id INT,
    food_item_id INT,
    FOREIGN KEY (menu_id) REFERENCES Menus(menu_id),
    FOREIGN KEY (food_item_id) REFERENCES FoodItems(food_item_id),
    PRIMARY KEY (menu_id, food_item_id)
);
