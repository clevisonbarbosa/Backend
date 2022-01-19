import { UsuarioDto } from './dto/usuario.dto';
import { UsuarioRepository } from './usuario.repository';
import { UsuarioEntity } from './usuario.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class UsuarioService {
    constructor(
        @InjectRepository(UsuarioEntity)
        private usuarioRepository: UsuarioRepository
    ) { }



    async getAll(): Promise<UsuarioEntity[]> {
        const list = await this.usuarioRepository.find();
        return list;
    }



    async findById(id: number): Promise<UsuarioEntity> {
        const usuario = await this.usuarioRepository.findOne(id);
        if (!usuario) {
            throw new NotFoundException({message: 'O usuário não existe!'});
        }
        return usuario;
    }



    async create(dto: UsuarioDto) :Promise<UsuarioEntity> {
        const usuario = this.usuarioRepository.create(dto);
        await this.usuarioRepository.save(usuario);
        return usuario;
    }



    async update(id: number, dto: UsuarioDto) :Promise<UsuarioEntity> {
        const usuario = await this.findById(id);
        if (!usuario)
            throw new NotFoundException({message: 'Não existe!'});
        await this.usuarioRepository.save(Object.assign(usuario, dto));
        return usuario;
    }


    async delete(id: number):Promise<UsuarioEntity> {
        const usuario = await this.findById(id);
        if (!usuario)
            throw new NotFoundException({message: 'Não existe!'});
        await this.usuarioRepository.delete(usuario);
        return usuario;
    }
}