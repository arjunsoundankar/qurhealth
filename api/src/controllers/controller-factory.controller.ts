import { EmployeeRepository } from "../repositories/employee.repository";
import { DepartmentRepository } from "../repositories/department.repository";
import { DepartmentController } from "./department.controller";
import { EmployeeController } from "./employee.controller";
import { SalaryController } from "./salary.controller";
import { SalaryRepository } from "../repositories/salary.repository";

export class ControllerFactory {
    getControllers(): Array<any> {
        return [
            new DepartmentController(DepartmentRepository),
            new EmployeeController(EmployeeRepository),
            new SalaryController(SalaryRepository)
        ];
    }
}