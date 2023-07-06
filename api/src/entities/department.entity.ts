import { JoinColumn, Entity, Column, OneToMany, ManyToOne, Generated } from "typeorm";
import { AbstractEntity } from "./abstract.entity";
import { Employee } from "./employee.entity";

@Entity({ name: "department" })
export class Department extends AbstractEntity {
    @Generated()
    @Column({ name: "id", primary: true, nullable: false })
    id: number;

    @Column({ name: "name", primary: false, nullable: false })
    name: string;

    @Column({ name: "description", primary: false, nullable: false })
    description: string;

    @Column({ name: "is_active", primary: false, nullable: true })
    isActive: number;

    @OneToMany(type => Employee, employee => employee.department)
    @JoinColumn({ name: "" })
    employeeCollection: Employee[];

}
