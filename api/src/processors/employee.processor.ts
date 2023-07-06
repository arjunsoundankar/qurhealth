import { DataTaskResult } from "../helpers/data-task-result";
import { EmployeeRepository } from "../repositories/employee.repository";
export class EmployeeProcessor {
    public async getEmployeeEmail(): Promise<DataTaskResult> {
        const dataTaskResult: any = { isSuccess: false, payload: {}, message: "" };
        
        try {
            const employeeList = await EmployeeRepository.getEmployee();
            let dic = {}
            employeeList.forEach((emp)=>{
                if(dic.hasOwnProperty(emp.email.split('@')[1])){
                    dic[emp.email.split('@')[1]] += 1;
                }else{
                    dic[emp.email.split('@')[1]] = 1;
                }
            });
            let max = 0;
            let name = '';
            for(let d in dic){
                
                if(max < dic[d]){
                    max= dic[d];
                    name = d;
                }
            }
            dataTaskResult.isSuccess = true;
            dataTaskResult.payload = {"name":name, "count":max };
        } catch (error) {
            console.log(error);
        }
        return dataTaskResult;
    }
    public async getEmployeeList(): Promise<DataTaskResult> {
        const dataTaskResult: any = { isSuccess: false, payload: [], message: "" };
        
        try {
            const employeeList = await EmployeeRepository.getEmployee();
            dataTaskResult.isSuccess = true;
            dataTaskResult.payload = employeeList;
        } catch (error) {
            console.log(error);
        }
        return dataTaskResult;
    }
}