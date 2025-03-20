"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SongsService = void 0;
const common_1 = require("@nestjs/common");
let SongsService = class SongsService {
    currentId = 0;
    songs = [];
    create(CreateSongDTO) {
        const song = {
            id: this.currentId,
            title: CreateSongDTO.title,
            artist: CreateSongDTO.artist
        };
        ++this.currentId;
        this.songs.push(song);
    }
    findAll() {
        return this.songs;
    }
    findOne(id) {
        return this.songs.filter((song) => song.id == id);
    }
    delete(id) {
        this.songs = this.songs.filter((song) => song.id != id);
    }
    updateOne(id, createSondDTO) {
        this.songs.forEach((song) => {
            if (song.id == id) {
                song.artist = createSondDTO.artist;
                song.title = createSondDTO.title;
            }
        });
    }
};
exports.SongsService = SongsService;
exports.SongsService = SongsService = __decorate([
    (0, common_1.Injectable)()
], SongsService);
//# sourceMappingURL=songs.service.js.map