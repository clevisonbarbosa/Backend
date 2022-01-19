import { IsString, IsInt, IsEmail } from 'class-validator';

export class UsuarioDto {

    @IsString()
    nome: string;

    @IsEmail()
    email: string;

    @IsInt()
    idade: number;

    @IsString()
    telefone: string;

    @IsString()
    sexo: string;
}