import { authorizationMiddleware } from "../utils/security/authorization.middleware";
import { DepartmentProcessor } from "../processors/department.processor";
import { BaseController } from "./base.controller";

export class DepartmentController extends BaseController {
  private departmentProcessor = new DepartmentProcessor();
  constructor(public repository) {
    super(repository);
  }
  defineControllerRoutes(): void {
    this.router.get("/" + this.entityName + "/get-department-with-employee", authorizationMiddleware, async (req, res) => this.evaluateAndSendResult(await this.departmentProcessor.getDepartmentWithAssociatedEmployees(), res));
    super.defineControllerRoutes();
  }
  
}