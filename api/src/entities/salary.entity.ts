import { JoinColumn, Entity, Column, OneToMany, ManyToOne, Generated } from "typeorm";
import { AbstractEntity } from "./abstract.entity";
import { Employee } from "./employee.entity";

@Entity({ name: "salary" })
export class Salary extends AbstractEntity {
    @Generated()
    @Column({ name: "id", primary: true, nullable: false })
    id: number;

    @Column({ name: "employee_id", primary: false, nullable: false })
    employeeId: string;

    @ManyToOne(type => Employee, employee => employee.id)
    @JoinColumn({ name: "employee_id" })
    employee: Employee;

    @Column({ name: "salary", primary: false, nullable: false })
    salary: number;

    @Column({ name: "is_active", primary: false, nullable: true })
    isActive: number;

}
