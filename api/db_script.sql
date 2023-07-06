
CREATE TABLE `department` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `description` varchar(255) NOT NULL,
  `is_active` tinyint(1) DEFAULT 1,
  PRIMARY KEY (`id`)
);

CREATE TABLE `employee` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `mobile` varchar(15) NOT NULL,
  `address` varchar(500) NOT NULL,
  `city` varchar(25) NOT NULL,
  `designation` varchar(50) NOT NULL,
  `department_id` int NOT NULL,
  `is_active` tinyint(1) DEFAULT 1,
  PRIMARY KEY (`id`),
  KEY `fk_employee_department` (`department_id`),
  CONSTRAINT `fk_employee_department` FOREIGN KEY (`department_id`) REFERENCES `department` (`id`)
);


CREATE TABLE `salary` (
  `id` int NOT NULL AUTO_INCREMENT,
  `employee_id` int NOT NULL,
  `salary` decimal(18,2) NOT NULL,
  `is_active` tinyint(1) DEFAULT 1,
  PRIMARY KEY (`id`),
  KEY `fk_employee_salary` (`employee_id`),
  CONSTRAINT `fk_employee_salary` FOREIGN KEY (`employee_id`) REFERENCES `employee` (`id`)
);

INSERT INTO department (id,name,description,is_active) VALUES
	 (1,'Operations','Operations',1),
	 (2,'IT','IT',1),
	 (3,'Finance','Finance',1),
	 (4,'HR','HR',1),
	 (5,'Support','Support',0);


     INSERT INTO employee (id,first_name,last_name,email,gender,mobile,address,city,designation,department_id,is_active) VALUES
	 (1,'Cearic','Florentine','cflorentine@yahoo.com','Male','9964551698','1333, Superior Plazza','Gordeyevka','Manager',1,1),
	 (2,'Hilliard','Faragan','hfaragan@gmail.com','Male','99345519833','87, Holy Cross Hill','Mersam','Developer',2,0),
	 (3,'Martita','Townson','mtownson@gmail.com','Female','9946677086','53293 Cardinal Way','Pillar','Lead',4,0),
	 (4,'Lyssa','Seabert','lseabert3@rediff.com','Female','7853725372','64, Toughton Crossing','Pulilan','Developer',2,1),
	 (5,'Aileen','Colles','acolles@yahoo.com','Female','3623263277','17 Mariners Cove Center','Unawatuna','Manager',3,0),
	 (6,'Clea','Tye','ctye5@gmail.com','Female','83232098277','7 Oak Valley Road','Boychinovtsi','Associate Developer',2,1),
	 (7,'Broddie','Tredger','btredger437@yahoo.com','Male','34767238923','965 Katue Alley','Kumangunnam','Manager',2,1),
	 (8,'Abbott','Densell','adensell7@gmail.com','Male','9723563723','123 Shasta Road','Bagumbayan','Lead',2,1),
	 (9,'Ximenex','Petrushanko','xpetrushanko@rediff.com','Male','3734672223','036238 Barby Allet','Krenggan','Lead',4,0),
	 (10,'Danit','McCreagh','dmccreagh9@gmail.com','Female','32633323232','6 Almo Circle','Pegoees','Developer',3,1);



INSERT INTO salary
(employee_id, salary, is_active)
VALUES(1, 105000, 1);

INSERT INTO salary
(employee_id, salary, is_active)
VALUES(2, 52000, 1);

INSERT INTO salary
(employee_id, salary, is_active)
VALUES(3, 73500, 1);

INSERT INTO salary
(employee_id, salary, is_active)
VALUES(4, 35000, 0);

INSERT INTO salary
(employee_id, salary, is_active)
VALUES(5, 120000, 1);

INSERT INTO salary
(employee_id, salary, is_active)
VALUES(6, 95000, 1);

INSERT INTO salary
(employee_id, salary, is_active)
VALUES(7, 98000, 1);

INSERT INTO salary
(employee_id, salary, is_active)
VALUES(8, 100500, 1);

INSERT INTO salary
(employee_id, salary, is_active)
VALUES(9, 64050, 1);

INSERT INTO salary
(employee_id, salary, is_active)
VALUES(10, 86000, 1);

