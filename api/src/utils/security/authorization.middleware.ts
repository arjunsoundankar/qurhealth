import * as _ from "lodash";
import { RoutePrivilege } from "./route-privilege";

export const authorizationMiddleware = async (req: any, res: any, next: any) => {
    const apiPath = req.route.path;
    const defaultEntites = ["department", "employee", "salary"];
    const routes = [...RoutePrivilege.routes];
    _.forEach(defaultEntites, ele => {
        routes.push(...[{ path: `/${ele}/:id` }, { path: `/${ele}/query` }]);
    });
    const routesExists = _.filter(routes, ele => ele.path == apiPath);
    if (routesExists.length > 0) {
        next();
    } else {
        res.status(401).json(401);
    }
};