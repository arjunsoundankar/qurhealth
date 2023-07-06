import { BaseController } from "./base.controller";
import { authorizationMiddleware } from "../utils/security/authorization.middleware";
import { EmployeeProcessor } from "../processors/employee.processor";

export class EmployeeController extends BaseController {
  private employeeProcessor = new EmployeeProcessor();
  constructor(repository) {
    super(repository);
  }
  defineControllerRoutes(): void {
    this.router.get("/" + this.entityName + "/mail", authorizationMiddleware, async (req, res) => this.evaluateAndSendResult(await this.employeeProcessor.getEmployeeEmail(), res));
    this.router.get("/" + this.entityName + "/list", authorizationMiddleware, async (req, res) => this.evaluateAndSendResult(await this.employeeProcessor.getEmployeeList(), res));
    super.defineControllerRoutes();
  }
}