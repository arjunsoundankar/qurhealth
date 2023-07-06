import "reflect-metadata"
import { DataSource } from "typeorm"
import { Department } from "./entities/department.entity"
import { Employee } from "./entities/employee.entity"
import { Salary } from "./entities/salary.entity"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "13.234.46.147",
    port: 5500,
    username: "payrollreadonly",
    password: "Husjd@48173@dJ##",
    database: "payroll",
    synchronize: false,
    logging: false, 
    entities: [Department, Employee, Salary],
    migrations: [],
    subscribers: [],
});
