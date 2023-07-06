import { Employee } from "../entities/employee.entity";
import { AppDataSource } from "../data-source";

// export const EmployeeRepository = AppDataSource.getRepository(Employee).extend({

// });

export const EmployeeRepository = AppDataSource.getRepository(Employee).extend({
    
    async getEmployee() {
        return await this.createQueryBuilder("employee")
        .innerJoinAndSelect("employee.salaryCollection", "salaryCollection")
            .getMany();
    }
});