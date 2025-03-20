import { Song } from './songs.entity';
import { CreateSongDTO } from './create-song.dto';
export declare class SongsService {
    private currentId;
    private songs;
    create(CreateSongDTO: CreateSongDTO): void;
    findAll(): Song[];
    findOne(id: number): Song[];
    delete(id: number): void;
    updateOne(id: number, createSondDTO: CreateSongDTO): void;
}
