import { JoinColumn, Entity, Column, PrimaryColumn, PrimaryGeneratedColumn, OneToMany, ManyToOne, Generated } from "typeorm";
import { AbstractEntity } from "./abstract.entity";
import { Department } from "./department.entity";
import { Salary } from "./salary.entity";

@Entity({ name: "employee" })
export class Employee extends AbstractEntity {

    @Generated()
    @Column({ name: "id", primary: true, nullable: false })
    id: number;

    @Column({ name: "first_name", primary: false, nullable: false })
    firstName: string;

    @Column({ name: "last_name", primary: false, nullable: false })
    lastName: string;

    @Column({ name: "email", primary: false, nullable: false })
    email: string;

    @Column({ name: "gender", primary: false, nullable: false })
    gender: string;

    @Column({ name: "mobile", primary: false, nullable: false })
    mobile: string;

    @Column({ name: "address", primary: false, nullable: false })
    address: string;

    @Column({ name: "city", primary: false, nullable: false })
    city: string;

    @Column({ name: "designation", primary: false, nullable: false })
    designation: string;

    @Column({ name: "department_id", primary: false, nullable: false })
    departmentId: string;

    @ManyToOne(type => Department, department => department.id)
    @JoinColumn({ name: "department_id" })
    department: Department;

    @OneToMany(type => Salary, salary => salary.employee)
    @JoinColumn({ name: "" })
    salaryCollection: Salary[];

    @Column({ name: "is_active", primary: false, nullable: false })
    isActive: number;

}
