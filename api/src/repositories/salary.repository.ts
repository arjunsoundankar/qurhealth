import { Salary } from "../entities/salary.entity";
import { AppDataSource } from "../data-source";

export const SalaryRepository = AppDataSource.getRepository(Salary).extend({

});