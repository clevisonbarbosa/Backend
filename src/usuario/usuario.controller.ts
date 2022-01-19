import { UsuarioDto } from './dto/usuario.dto';
import { UsuarioService } from './usuario.service';
import { Body, Delete, Param, Controller, Get, ParseIntPipe, Post, Put, HttpCode} from '@nestjs/common';
import { UsuarioEntity } from './usuario.entity';
import { ApiTags } from '@nestjs/swagger';



@Controller('usuarios')
@ApiTags('Usuario')
export class UsuarioController {

    constructor(private readonly usuarioService: UsuarioService){}

    @Get()
    getAll():Promise<UsuarioEntity[]>{
        return this.usuarioService.getAll();
    }

    @Get(':id')
    getOne(@Param('id', ParseIntPipe) id: number):Promise<UsuarioEntity> {
        return this.usuarioService.findById(id);
    }

    @Post()
    create(@Body() dto: UsuarioDto):Promise<UsuarioEntity> {
        return  this.usuarioService.create(dto);
    }
    
    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() dto: UsuarioDto): Promise<UsuarioEntity> {
        return this.usuarioService.update(id, dto);
    }

    @Delete(':id')
    @HttpCode(204)
    async delete(@Param('id', ParseIntPipe) id: number): Promise<void>{
        await this.usuarioService.delete(id)
    }
}

