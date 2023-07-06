import { DataTaskResult } from "../helpers/data-task-result";
import { DepartmentRepository} from "../repositories/department.repository";
export class DepartmentProcessor {

    public async getDepartmentWithAssociatedEmployees(): Promise<DataTaskResult> {
        const dataTaskResult: DataTaskResult = { isSuccess: false, payload: [], message: "" };
        try {
            const departmenList = await DepartmentRepository.getDepartmentWithEmployee();
            dataTaskResult.isSuccess = true;
            dataTaskResult.payload = departmenList;
        } catch (error) {
            console.log(error);
        }
        return dataTaskResult;
    }
}