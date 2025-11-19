export interface Recomendacao {
  idRecomendacao: number;
  idUsuario: number;
  carreira: string;
  trilha: string;
  scoreModelo: number;
  dtRecomendacao?: string;
}
