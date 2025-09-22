# Diagrama UML de Classes (Completo)

### O seguinte diagrama apresenta a modelagem dos cursos, modalidades, turnos, campus e notas de corte:

```mermaid
classDiagram

    %% Curso: Medicina
    class Medicina {
        +Graduação: String
        +Modalidade: String
        +Turnos: Float
        +Campus: String
    }
    class Medicina_AC {
        +AC: String
        +Nota_Corte: Float
    }
    class Medicina_EP {
        +Tipo_Cota: String
        +Nota_Corte: Float
    }
    class Medicina_PPI {
        +Tipo_Cota: String
        +Nota_Corte: Float
    }
    Medicina --> Medicina_AC
    Medicina --> Medicina_EP
    Medicina --> Medicina_PPI

    %% Curso: Engenharia Aeroespacial
    class Aeroespacial {
        +Tipo: String
        +Modalidade: String
        +Turnos: Float
        +Campus: String
    }
    class Aeroespacial_AC {
        +Tipo_Cota: String
        +Nota_Corte: Float
    }
    class Aeroespacial_EP {
        +Tipo_Cota: String
        +Nota_Corte: Float
    }
    Aeroespacial --> Aeroespacial_AC
    Aeroespacial --> Aeroespacial_EP

    %% Curso: Geoprocessamento
    class Geoprocessamento {
        +Tipo: String
        +Modalidade: String
        +Turnos: Float
        +Campus: String
    }
    class Geoprocessamento_AC {
        +Tipo_Cota: String
        +Nota_Corte: Float
    }
    Geoprocessamento --> Geoprocessamento_AC

    %% Curso Técnico: Informática
    class Tec_Informática {
        +Tipo: String
        +Modalidade: String
        +Turnos: Float
        +Campus: String
    }
    class Tec_Informática_AC {
        +Tipo_Cota: String
        +Nota_Corte: Float
    }
    Tec_Informática --> Tec_Informática_AC
