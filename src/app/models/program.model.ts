export interface Piece {
    ID: number;
    sName: string;
    idMaterial?: string;
  }
  
  export interface Program {
    ID: number;
    sName: string;
    pieces: Piece[];
  }
  