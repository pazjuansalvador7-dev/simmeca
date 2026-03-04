export interface Question {
  id: number;
  text: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correctAnswer: "A" | "B" | "C" | "D";
  explanation: string;
}

export const MECATRONICA_BANK: Question[] = [
  {
    id: 1,
    text: "¿Cómo se denomina al fenómeno físico que consiste en el desplazamiento de electrones a través de un material conductor, generando un flujo de carga?",
    options: { A: "Resistencia eléctrica", B: "Inducción magnética", C: "Corriente eléctrica", D: "Capacitancia" },
    correctAnswer: "C",
    explanation: "La corriente eléctrica es el flujo de carga eléctrica que recorre un material."
  },
  {
    id: 2,
    text: "¿Cuál es la unidad de medida estándar para cuantificar la intensidad de la corriente eléctrica?",
    options: { A: "Voltios (V)", B: "Ohmios (Ω)", C: "Vatios (W)", D: "Amperios (A)" },
    correctAnswer: "D",
    explanation: "El Amperio (A) es la unidad del Sistema Internacional para la intensidad de corriente eléctrica."
  },
  {
    id: 3,
    text: "En terminología eléctrica, ¿qué significado tienen las siglas AC?",
    options: { A: "Alta Carga", B: "Corriente Alterna", C: "Ánodo Común", D: "Corriente Acumulada" },
    correctAnswer: "B",
    explanation: "AC significa Alternating Current, traducido como Corriente Alterna."
  },
  {
    id: 4,
    text: "¿Cuáles son las tres variables fundamentales que interactúan y conforman la Ley de Ohm?",
    options: { A: "Potencia, tiempo y carga", B: "Frecuencia, fase y amplitud", C: "Voltaje, corriente y resistencia", D: "Masa, fuerza y aceleración" },
    correctAnswer: "C",
    explanation: "La Ley de Ohm establece que V = I * R (Voltaje = Corriente * Resistencia)."
  },
  {
    id: 5,
    text: "¿Qué tipo de flujo eléctrico representan las siglas DC?",
    options: { A: "Corriente Directa (continua)", B: "Dispositivo de Control", C: "Densidad de Carga", D: "Diferencia de Corriente" },
    correctAnswer: "A",
    explanation: "DC significa Direct Current, conocida como Corriente Directa o Continua."
  },
  {
    id: 6,
    text: "El volt (V) es la unidad de medida utilizada específicamente para determinar:",
    options: { A: "La resistencia de un material", B: "La potencia consumida", C: "El voltaje o tensión eléctrica", D: "La frecuencia de una onda" },
    correctAnswer: "C",
    explanation: "El voltio mide el potencial eléctrico, la tensión eléctrica o el voltaje."
  },
  {
    id: 7,
    text: "De la siguiente lista de materiales, ¿cuál se caracteriza por ser un excelente conductor de electricidad?",
    options: { A: "Plástico", B: "Madera", C: "Aluminio", D: "Vidrio" },
    correctAnswer: "C",
    explanation: "Los metales como el aluminio son buenos conductores debido a sus electrones libres."
  },
  {
    id: 8,
    text: "¿Cuál es la función principal de un material clasificado como aislante?",
    options: { A: "Aumentar la velocidad de los electrones", B: "Impedir el paso de la corriente eléctrica", C: "Almacenar energía en forma de campo", D: "Transformar el voltaje en calor" },
    correctAnswer: "B",
    explanation: "Los aislantes tienen una alta resistencia que impide el flujo de electrones."
  },
  {
    id: 9,
    text: "En el diseño de un circuito, ¿cuál de estos dispositivos cumple la función de carga eléctrica (consumidor)?",
    options: { A: "Batería", B: "Foco (lámpara)", C: "Interruptor", D: "Cable de cobre" },
    correctAnswer: "B",
    explanation: "Una carga es cualquier componente que consume energía eléctrica, como un foco."
  },
  {
    id: 10,
    text: "¿Qué nombre recibe el componente cuya función es permitir abrir o cerrar el paso de la corriente en un circuito?",
    options: { A: "Fusible", B: "Transformador", C: "Resistencia", D: "Interruptor" },
    correctAnswer: "D",
    explanation: "El interruptor controla el flujo abriendo o cerrando el circuito físico."
  },
  {
    id: 11,
    text: "¿Cuál de los siguientes elementos es un ejemplo de un componente pasivo?",
    options: { A: "Transistor", B: "Microprocesador", C: "Fusible", D: "Circuito integrado" },
    correctAnswer: "C",
    explanation: "Los componentes pasivos no requieren energía externa para funcionar; el fusible es un ejemplo."
  },
  {
    id: 12,
    text: "Según su funcionamiento y comportamiento eléctrico, el diodo se clasifica como un:",
    options: { A: "Componente activo", B: "Material aislante", C: "Fuente de alimentación", D: "Conductor puro" },
    correctAnswer: "A",
    explanation: "Los diodos son componentes activos ya que pueden controlar el flujo de electricidad."
  },
  {
    id: 13,
    text: "En el ámbito de la seguridad laboral e industrial, ¿qué representan las siglas EPP?",
    options: { A: "Estándar de Producción Profesional", B: "Equipo de Protección Personal", C: "Elementos de Prevención Primaria", D: "Evaluación de Procesos Productivos" },
    correctAnswer: "B",
    explanation: "EPP se refiere al equipo diseñado para proteger al trabajador de riesgos."
  },
  {
    id: 14,
    text: "¿En qué se enfoca principalmente la metodología japonesa de las 5S?",
    options: { A: "En el aumento del voltaje de salida", B: "En la reducción de personal técnico", C: "En el orden y limpieza en el área de trabajo", D: "En la velocidad de los motores eléctricos" },
    correctAnswer: "C",
    explanation: "Las 5S buscan mejorar la eficiencia mediante el orden y la limpieza."
  },
  {
    id: 15,
    text: "¿Cuál se considera el eje transversal más importante y prioritario en un taller de Mecatrónica?",
    options: { A: "El costo de los componentes", B: "El diseño estético", C: "La seguridad", D: "La rapidez del ensamblaje" },
    correctAnswer: "C",
    explanation: "La seguridad es siempre la prioridad máxima en cualquier entorno técnico industrial."
  },
  {
    id: 16,
    text: "¿Qué tipo de representación se utiliza en el análisis electrónico para interpretar un circuito mediante símbolos normalizados?",
    options: { A: "Diagrama de bloques", B: "Esquemático electrónico", C: "Boceto a mano alzada", D: "Fotografía del prototipo" },
    correctAnswer: "B",
    explanation: "El esquemático electrónico usa símbolos estándar para representar el circuito."
  },
  {
    id: 17,
    text: "Al armar un circuito básico con un LED, ¿cuál es el orden funcional correcto de conexión de sus componentes?",
    options: { A: "LED → Resistencia → Fuente → Pulsador", B: "Pulsador → LED → Fuente → Resistencia", C: "Fuente de voltaje → Pulsador → Resistencia → LED", D: "Resistencia → Fuente → LED → Pulsador" },
    correctAnswer: "C",
    explanation: "El flujo lógico suele ser Fuente -> Control (Pulsador) -> Protección (Resistencia) -> Carga (LED)."
  },
  {
    id: 18,
    text: "¿Cómo se denomina al diagrama que muestra la unión física real de los componentes mediante cables y terminales?",
    options: { A: "Diagrama de conexión", B: "Mapa de calor", C: "Plano arquitectónico", D: "Diagrama de flujo" },
    correctAnswer: "A",
    explanation: "El diagrama de conexión muestra cómo se unen físicamente los elementos."
  },
  {
    id: 19,
    text: "¿Qué componente electrónico tiene la función específica de transformar la energía eléctrica en energía luminosa?",
    options: { A: "Resistencia", B: "Transistor", C: "LED", D: "Condensador" },
    correctAnswer: "C",
    explanation: "LED significa Light Emitting Diode (Diodo Emisor de Luz)."
  },
  {
    id: 20,
    text: "En un análisis, ¿qué apartado describe la interacción y función de cada parte del circuito sin detallar las conexiones físicas?",
    options: { A: "Lista de materiales", B: "Diagrama funcional", C: "Plano de planta", D: "Manual de usuario" },
    correctAnswer: "B",
    explanation: "El diagrama funcional se centra en la lógica y función de los bloques del sistema."
  },
  {
    id: 21,
    text: "¿Qué organismos internacionales se encargan de regular la simbología normalizada en los diagramas electrónicos?",
    options: { A: "NASA y SpaceX", B: "IEC y ANSI", C: "ONU y OMS", D: "ISO y UNESCO" },
    correctAnswer: "B",
    explanation: "IEC (International Electrotechnical Commission) y ANSI (American National Standards Institute) son los principales reguladores."
  },
  {
    id: 22,
    text: "¿Cuál es la función primordial de integrar una resistencia en un circuito eléctrico?",
    options: { A: "Almacenar carga estática", B: "Limitar o regular el paso de corriente", C: "Amplificar la señal de voltaje", D: "Generar un campo magnético" },
    correctAnswer: "B",
    explanation: "La resistencia se opone al flujo de corriente, permitiendo regular su intensidad."
  },
  {
    id: 23,
    text: "¿Qué componente tiene la capacidad de almacenar energía en forma de campo magnético?",
    options: { A: "Inductor (bobina)", B: "Diodo Zener", C: "Pulsador", D: "Fusible" },
    correctAnswer: "A",
    explanation: "Los inductores almacenan energía en campos magnéticos cuando circula corriente por ellos."
  },
  {
    id: 24,
    text: "¿Cuál es el comportamiento principal de un diodo dentro de un circuito electrónico?",
    options: { A: "Aumentar la resistencia cíclicamente", B: "Permitir el paso de corriente en un solo sentido", C: "Dividir el voltaje en partes iguales", D: "Actuar como una fuente de poder infinita" },
    correctAnswer: "B",
    explanation: "Un diodo ideal actúa como un interruptor unidireccional para la corriente."
  },
  {
    id: 25,
    text: "¿Qué símbolo representa el punto de referencia de potencial cero (0V) en un esquema eléctrico?",
    options: { A: "Fase", B: "Neutro", C: "Tierra", D: "Retorno" },
    correctAnswer: "C",
    explanation: "La tierra (GND) es el punto de referencia común de 0 voltios."
  },
  {
    id: 26,
    text: "¿Cuál es la característica distintiva de un esquema unifilar?",
    options: { A: "Muestra los componentes en 3D", B: "Representa cada circuito o fase mediante una sola línea", C: "Utiliza colores para cada cable", D: "Solo se usa para circuitos de baja corriente" },
    correctAnswer: "B",
    explanation: "El esquema unifilar simplifica la representación usando una sola línea para múltiples conductores."
  },
  {
    id: 27,
    text: "¿Para qué se utiliza primordialmente el esquema multifilar?",
    options: { A: "Para simplificar circuitos complejos en una línea", B: "Para representar todas las conexiones físicas detalladas", C: "Para calcular el costo de la instalación", D: "Para dibujar la carcasa externa del equipo" },
    correctAnswer: "B",
    explanation: "El esquema multifilar muestra todos los conductores y sus conexiones individuales."
  },
  {
    id: 28,
    text: "En la industria, ¿cuál es una aplicación típica donde se emplea el esquema unifilar?",
    options: { A: "Identificar la alimentación principal e interruptores generales", B: "Diseñar microchips de computadoras", C: "Programar bases de datos", D: "Soldar componentes de montaje superficial" },
    correctAnswer: "A",
    explanation: "Se usa comúnmente en diagramas de potencia y distribución eléctrica general."
  },
  {
    id: 29,
    text: "Para las tareas de instalación y mantenimiento de equipos eléctricos, ¿qué tipo de esquema resulta fundamental?",
    options: { A: "Unifilar", B: "Funcional", C: "Multifilar", D: "Pictórico" },
    correctAnswer: "C",
    explanation: "El multifilar es esencial para saber exactamente dónde conectar cada cable."
  },
  {
    id: 30,
    text: "¿Por qué es crucial el uso de simbología normalizada en la industria eléctrica y electrónica?",
    options: { A: "Para que los planos se vean más estéticos", B: "Para evitar ambigüedades y errores de interpretación", C: "Porque es un requisito para vender los componentes", D: "Para reducir el tamaño físico de los circuitos" },
    correctAnswer: "B",
    explanation: "La normalización permite que cualquier técnico en el mundo entienda el diagrama sin errores."
  },
  {
    id: 31,
    text: "¿Qué representación gráfica es esencial para visualizar la disposición física de los componentes en una placa de circuito?",
    options: { A: "Diagrama de flujo", B: "Diagrama PCB", C: "Esquema unifilar", D: "Plano de planta" },
    correctAnswer: "B",
    explanation: "PCB (Printed Circuit Board) muestra la disposición real de componentes y pistas en la placa."
  },
  {
    id: 32,
    text: "En el análisis de circuitos, ¿cómo se define un elemento de dos terminales conectado entre dos nodos?",
    options: { A: "Malla", B: "Lazo", C: "Rama", D: "Puente" },
    correctAnswer: "C",
    explanation: "Una rama es un elemento simple o grupo de elementos conectados entre dos nodos."
  },
  {
    id: 33,
    text: "¿Cuál es el punto de conexión común donde se unen dos o más ramas de un circuito?",
    options: { A: "Nodo", B: "Tierra", C: "Terminal", D: "Empalme" },
    correctAnswer: "A",
    explanation: "Un nodo es el punto de unión de dos o más ramas."
  },
  {
    id: 34,
    text: "¿Qué nombre recibe la trayectoria cerrada que inicia y termina en el mismo nodo sin repetir nodos intermedios?",
    options: { A: "Red", B: "Lazo", C: "Rama", D: "Derivación" },
    correctAnswer: "B",
    explanation: "Un lazo es cualquier trayectoria cerrada en un circuito."
  },
  {
    id: 35,
    text: "¿Qué distingue a una malla dentro de un esquema eléctrico?",
    options: { A: "Es un lazo que contiene otros lazos menores", B: "Es una conexión exclusiva a tierra", C: "Es un lazo que no contiene otros lazos en su interior", D: "Es el punto de mayor consumo de energía" },
    correctAnswer: "C",
    explanation: "La malla es el lazo más simple posible que no encierra otros lazos."
  },
  {
    id: 36,
    text: "¿Cuál es la finalidad primordial de las especificaciones técnicas en cualquier dispositivo eléctrico?",
    options: { A: "Reducir el costo de fabricación", B: "Establecer límites y condiciones seguras de operación", C: "Definir el color del componente", D: "Facilitar el reciclaje del producto" },
    correctAnswer: "B",
    explanation: "Las especificaciones garantizan que el componente se use dentro de sus límites de diseño."
  },
  {
    id: 37,
    text: "Al consultar un 'datasheet', ¿qué información técnica fundamental se obtiene?",
    options: { A: "Valores nominales, tolerancias y límites de operación", B: "Únicamente el precio por unidad", C: "La biografía del inventor del componente", D: "El manual de ventas del fabricante" },
    correctAnswer: "A",
    explanation: "El datasheet es el documento técnico oficial con todos los parámetros del componente."
  },
  {
    id: 38,
    text: "Si una resistencia de 1000 Ω teóricos mide 1050 Ω reales, ¿qué porcentaje de error presenta?",
    options: { A: "1%", B: "10%", C: "5%", D: "0.5%" },
    correctAnswer: "C",
    explanation: "Error = |(1050-1000)/1000| * 100 = 5%."
  },
  {
    id: 39,
    text: "Una resistencia nominal de 220 Ω tiene una medición real de 215.6 Ω. ¿Cuál es su porcentaje de error?",
    options: { A: "2%", B: "4%", C: "5%", D: "1%" },
    correctAnswer: "A",
    explanation: "Error = |(215.6-220)/220| * 100 = 2%."
  },
  {
    id: 40,
    text: "Si un circuito tiene una sola trayectoria cerrada con cuatro resistencias y sin lazos internos, ¿cómo se clasifica su estructura?",
    options: { A: "1 rama y 4 mallas", B: "4 ramas y 1 malla", C: "2 ramas y 2 mallas", D: "4 ramas y 4 mallas" },
    correctAnswer: "B",
    explanation: "Cada resistencia es una rama, y al ser un solo circuito cerrado, es una sola malla."
  },
  {
    id: 41,
    text: "¿Qué magnitud física se encarga de impulsar el flujo de corriente a través de un conductor?",
    options: { A: "Resistencia", B: "Inductancia", C: "Voltaje", D: "Potencia" },
    correctAnswer: "C",
    explanation: "El voltaje o diferencia de potencial es la 'fuerza' que mueve a los electrones."
  },
  {
    id: 42,
    text: "En una conexión de componentes en serie, ¿qué sucede con la intensidad de la corriente?",
    options: { A: "Se divide en cada componente", B: "Es la misma en todo el circuito", C: "Aumenta al final del circuito", D: "Se anula en el nodo central" },
    correctAnswer: "B",
    explanation: "En serie, solo hay un camino para la corriente, por lo que es igual en todos los puntos."
  },
  {
    id: 43,
    text: "Utilizando la Ley de Ohm, si tenemos una resistencia de 10 Ω y un voltaje de 20 V, ¿cuál es la corriente resultante?",
    options: { A: "200 Amperios", B: "0.5 Amperios", C: "2 Amperios", D: "10 Amperios" },
    correctAnswer: "C",
    explanation: "I = V / R = 20V / 10Ω = 2A."
  },
  {
    id: 44,
    text: "¿Qué instrumento es el más adecuado para medir la intensidad de corriente de manera directa y segura?",
    options: { A: "Óhmetro", B: "Voltímetro", C: "Pinza amperimétrica", D: "Capacitímetro" },
    correctAnswer: "C",
    explanation: "La pinza amperimétrica permite medir corriente sin necesidad de abrir el circuito."
  },
  {
    id: 45,
    text: "¿Qué propiedad del voltaje se mantiene constante en todas las ramas de un circuito en paralelo?",
    options: { A: "El voltaje se suma", B: "El voltaje es el mismo en todas las ramas", C: "El voltaje cae a cero", D: "El voltaje se divide proporcionalmente" },
    correctAnswer: "B",
    explanation: "En paralelo, todos los componentes están conectados a los mismos dos nodos, por lo que comparten el mismo voltaje."
  }
];
