import { Injectable } from '@angular/core';
import { Banner } from './banner';

@Injectable()
export class BannerService {

  constructor() { }

  getAll(): Banner[] {
    return [
      { id: 'GC123A4', name: 'Cache 1 - Der erste Cache', kind: 'Tradi', owner: 'Cacher Nummer 1', text: 'Noch etwas extra Text', counter: 12 },
      { id: 'GC4S113', name: 'Cache 2 - Der zweite Cache', kind: 'Tradi', owner: 'Cacher Nummer 2', text: 'Noch etwas extra Text', counter: 122 },
      { id: 'GC98D45', name: 'Cache 3 - Der dritte Cache', kind: 'Tradi', owner: 'Cacher Nummer 3', text: 'Noch etwas extra Text', counter: 1 },
      { id: 'GC34A98', name: 'Cache 4 - Der vierte Cache', kind: 'Tradi', owner: 'Cacher Nummer 4', text: 'Noch etwas extra Text', counter: 500 },
      { id: 'GCWF234', name: 'Cache 5 - Der fünfte Cache', kind: 'Tradi', owner: 'Cacher Nummer 5', text: 'Noch etwas extra Text', counter: 235235 },
      { id: 'GC7DA34', name: 'Cache 6 - Der sechste Cache', kind: 'Tradi', owner: 'Cacher Nummer 6', text: 'Noch etwas extra Text', counter: 80234 },
    ];
  }

}
