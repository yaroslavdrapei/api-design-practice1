import { Injectable } from '@nestjs/common';
import { db, Gist } from 'db';
import { CreateGistDto } from './dtos/create-gist.dto';

@Injectable()
export class GistsService {
  findAll() {
    return db;
  }

  searchByTitle(part: string) {
    return db.filter((gist) => gist.title.startsWith(part));
  }

  create({ title, codeBlock }: CreateGistDto) {
    const newGist: Gist = { title, codeBlock };
    db.push(newGist);
  }
}
