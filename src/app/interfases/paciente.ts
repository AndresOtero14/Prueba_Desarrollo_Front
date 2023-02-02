export interface Paciente {
  idpaciente :number;
  nombre: String;
  fechaNapaciente: Date;
  fechaRegistro: Date;
  fk_especie: number;
  fk_amo: number;
}
