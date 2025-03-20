import { SongsService } from './songs.service';
import { CreateSongDTO } from './create-song.dto';
export declare class SongsController {
    private songService;
    constructor(songService: SongsService);
    create(createSongDTO: CreateSongDTO): void;
    findAll(): import("./songs.entity").Song[];
    findOne(id: number): import("./songs.entity").Song[];
    update(id: number, createSongDTO: CreateSongDTO): void;
    delete(id: number): void;
}
