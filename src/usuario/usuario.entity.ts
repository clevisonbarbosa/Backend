import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'usuario'})
export class UsuarioEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', length: 30, nullable: false})
    nome: string;

    @Column({type: 'varchar', length: 50, nullable: false, unique: true})
    email: string;

    @Column({type: 'integer', nullable: false})
    idade: number;

    @Column({type: 'varchar', length: 15, nullable: false})
    telefone: string;

    @Column({type: 'varchar', length: 1, nullable: false,})
    sexo: string;
}