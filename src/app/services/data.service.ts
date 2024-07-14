import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Program } from '../models/program.model';
import { Material } from '../models/material.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  getPrograms(): Observable<Program[]> {
    return this.http.get<Program[]>('/assets/data/program.json');
  }

  getMaterials(): Observable<Material[]> {
    return this.http.get<Material[]>('/assets/data/materials.json');
  }
}
