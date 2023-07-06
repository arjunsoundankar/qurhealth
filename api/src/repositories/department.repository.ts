import { Department } from "../entities/department.entity";
import { Employee } from "../entities/employee.entity";
import { AppDataSource } from "../data-source";

export const DepartmentRepository = AppDataSource.getRepository(Department).extend({
    async getDepartmentWithEmployee() {
        return await this.createQueryBuilder("department")
            .innerJoinAndSelect("department.employeeCollection", "employeeCollection")
            .innerJoinAndSelect("employeeCollection.salaryCollection", "salaryCollection")
            .getMany();
    }
});

