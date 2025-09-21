# Diagrama UML de Classes (Completo)

O seguinte diagrama apresenta a modelagem dos cursos, modalidades, turnos, campus e notas de corte:

```mermaid
classDiagram

    %% Curso: Medicina
    class Medicina {
        +Tipo: Graduação
        +Modalidade: Presencial
        +Turnos: Manhã / Tarde / Noite
        +Campus: Santa Maria
    }
    class Medicina_AC {
        +Tipo_Cota: Ampla Concorrência
        +Nota_Corte: 793.45
    }
    class Medicina_EP {
        +Tipo_Cota: Escola Pública
        +Nota_Corte: 765.20
    }
    class Medicina_PPI {
        +Tipo_Cota: Pretos/Pardos/Indígenas
        +Nota_Corte: 740.10
    }
    Medicina --> Medicina_AC
    Medicina --> Medicina_EP
    Medicina --> Medicina_PPI

    %% Curso: Engenharia Aeroespacial
    class Aeroespacial {
        +Tipo: Graduação
        +Modalidade: Presencial
        +Turnos: Manhã / Tarde / Noite
        +Campus: Santa Maria
    }
    class Aeroespacial_AC {
        +Tipo_Cota: Ampla Concorrência
        +Nota_Corte: 795.79
    }
    class Aeroespacial_EP {
        +Tipo_Cota: Escola Pública
        +Nota_Corte: 770.00
    }
    Aeroespacial --> Aeroespacial_AC
    Aeroespacial --> Aeroespacial_EP

    %% Curso: Geoprocessamento
    class Geoprocessamento {
        +Tipo: Graduação
        +Modalidade: Presencial
        +Turnos: Manhã / Tarde / Noite
        +Campus: Santa Maria
    }
    class Geoprocessamento_AC {
        +Tipo_Cota: Ampla Concorrência
        +Nota_Corte: 496.96
    }
    Geoprocessamento --> Geoprocessamento_AC

    %% Curso Técnico: Informática
    class Tec_Informática {
        +Tipo: Técnico
        +Modalidade: Presencial
        +Turnos: Manhã / Tarde / Noite
        +Campus: Santa Maria
    }
    class Tec_Informática_AC {
        +Tipo_Cota: Ampla Concorrência
        +Nota_Corte: 650.00
    }
    Tec_Informática --> Tec_Informática_AC
