const PLANTILLAS = {
    paises: {
        bo: { id: "C.I.", ciudad: "Bolivia" },
        pe: { id: "DNI", ciudad: "Peru" },
        ar: { id: "DNI", ciudad: "Argentina" },
        cl: { id: "RUT", ciudad: "Chile" },
        sv: { id: "DUI", ciudad: "San Salvador" },
        ec: { id: "Cédula", ciudad: "Ecuador" },
        mx: { id: "INE", ciudad: "México" },
        co: { id: "C.C.", ciudad: "Colombia" },
        es: { id: "DNI", ciudad: "España" },
        uy: { id: "C.I.", ciudad: "Uruguay" },
        py: { id: "C.I.", ciudad: "Paraguay" }
    },
    meses: ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"],
    contenidos: {
        "SOLICITUD DE BECAS": {
            opcion1: "En mi calidad de estudiante comprometido con la excelencia académica, solicito su valiosa gestión para acceder a la beca de estudios. Mi situación económica actual requiere de este apoyo para continuar con mi formación profesional, comprometiéndome a mantener el rendimiento destacado que me caracteriza.",
            opcion2: "Presento mi postulación a la beca de mérito académico, motivado por mi profundo deseo de superación y contribución a la sociedad. Considero que la educación es el pilar del desarrollo y este beneficio económico me permitirá enfocarme plenamente en mis investigaciones y metas curriculares.",
            opcion3: "Solicito formalmente ser beneficiario del programa de becas de la institución. Cuento con los requisitos exigidos y mantengo una conducta disciplinaria ejemplar. Obtener este apoyo sería un impulso vital para culminar mis estudios y retribuir con mis conocimientos al bienestar de nuestra comunidad.",
            opcion4: "Me dirijo a usted para exponer mi necesidad de contar con una beca de auxilio estudiantil. Mi trayectoria académica respalda mi dedicación, y este apoyo financiero representa la oportunidad única de no interrumpir mi camino hacia la profesionalización en esta prestigiosa universidad."
        },
        "CARTA DE CONVALIDACIÓN": {
            opcion1: "Solicito el trámite de convalidación de materias cursadas satisfactoriamente en mi anterior casa de estudios superiores. Adjunto los programas analíticos y certificados de notas debidamente legalizados, con el fin de continuar mi formación académica sin retrocesos y bajo su normativa vigente.",
            opcion2: "Me presento ante usted para requerir la homologación de mis estudios previos. Habiendo analizado el plan de estudios actual, considero que existe una equivalencia sustancial en los contenidos que ya he aprobado, por lo cual pido se realice el análisis técnico correspondiente para mi nivelación.",
            opcion3: "Requiero la convalidación de asignaturas por cambio de carrera. Mi objetivo es optimizar mi tiempo de estudio aprovechando las competencias ya adquiridas en áreas afines. Quedo a la espera de la resolución administrativa para dar continuidad a mi inscripción en los niveles superiores.",
            opcion4: "Solicito formalmente la revisión de mi historial académico para fines de convalidación externa. Mi compromiso con la excelencia académica se mantiene firme y deseo integrar los conocimientos previos con la visión innovadora de esta facultad, cumpliendo con todos los requisitos que el reglamento interno exige."
        },
        "SOLICITUD CURSOS": {
            opcion1: "Solicito formalmente la apertura de cupo o habilitación del curso indicado en la referencia. Debido a un cruce de horarios ajeno a mi voluntad, requiero cursar esta materia para no retrasar mi plan de egreso.",
            opcion2: "Me dirijo a usted para solicitar mi inscripción extemporánea en el curso mencionado. Por motivos de salud debidamente justificados, no pude realizar el trámite en fechas regulares y deseo regularizar mi situación académica.",
            opcion3: "Requiero su autorización para cursar una materia paralela. Cuento con el promedio necesario y la disposición para asumir esta carga académica extra con el fin de adelantar mi proceso de graduación.",
            opcion4: "Solicito que se considere la apertura de un nuevo grupo para la materia solicitada, dado que existe una gran cantidad de estudiantes rezagados que necesitamos esta asignatura para dar continuidad a nuestra formación."
        },
        "CERTIFICADO ESTUDIOS": {
            opcion1: "Solicito la emisión de mi Certificado de Estudios y Resumen de Notas de los semestres cursados. Requiero este documento para trámites de postulación laboral que exigen acreditar mi avance académico actual.",
            opcion2: "Pido se me extienda una certificación de estudios donde conste mi condición de alumno regular y mi promedio general. Este documento es indispensable para la renovación de mi seguro de salud y beneficios familiares.",
            opcion3: "Requiero el desglose oficial de mis calificaciones para fines de beca externa. Agradecería que el documento incluya las firmas y sellos institucionales necesarios para su validez internacional.",
            opcion4: "Solicito un certificado de egreso donde se indique que he cumplido con la totalidad de la carga horaria del plan de estudios, quedando pendiente únicamente el trámite de titulación.",
        },
        "CARTA DE RENUNCIA": {
            opcion1: "Hago de su conocimiento mi decisión irrevocable de presentar mi renuncia al cargo que desempeño. Ha sido un honor colaborar con este equipo humano; sin embargo, motivos de índole personal me impulsan a tomar este nuevo camino. Agradezco profundamente la confianza depositada en mi persona durante todo este tiempo.",
            opcion2: "Por medio de la presente, formalizo mi retiro voluntario de la institución. Esta decisión responde a la búsqueda de nuevos horizontes profesionales y retos que deseo afrontar en esta etapa de mi vida. Me llevo conmigo grandes aprendizajes y el respeto por la visión y valores de esta empresa.",
            opcion3: "Le comunico mi decisión de cesar mis funciones laborales en la fecha prevista. Mi paso por esta organización ha sido fundamental en mi crecimiento profesional y agradezco sinceramente las oportunidades de aprendizaje que me brindaron. Quedo a su disposición para realizar una transición ordenada de mis pendientes.",
            opcion4: "Presento ante usted mi dimisión formal. Tras una etapa de profunda reflexión, he decidido priorizar proyectos familiares y personales que requieren mi atención inmediata. Valoro enormemente el trato recibido y la calidad profesional de todos mis compañeros de área."
        },
        "SOLICITUD DE VACACIONES": {
            opcion1: "Me dirijo a usted para solicitar formalmente el goce de mi periodo vacacional anual. Considero que este tiempo de descanso es esencial para renovar energías y mantener el nivel de productividad que la institución requiere. He previsto que mis tareas queden al día para no afectar el flujo de trabajo.",
            opcion2: "Solicito su autorización para disfrutar de mis días de descanso correspondientes a la presente gestión. Mi intención es ausentarme durante las fechas indicadas para atender asuntos familiares. Cabe mencionar que he coordinado previamente con mi equipo para asegurar que no existan retrasos en los proyectos en curso.",
            opcion3: "Requiero su amable aprobación para hacer uso de mis vacaciones reglamentarias. Después de un periodo de arduo trabajo y compromiso, busco este espacio de esparcimiento personal. Estoy totalmente dispuesto a dejar un informe detallado de mis actividades pendientes antes de mi salida.",
            opcion4: "Por la presente, pido se me conceda el derecho a vacaciones que por ley me corresponde. Mi objetivo es utilizar este tiempo para la conciliación familiar y el descanso personal, esperando retornar con la mejor disposición para afrontar los desafíos de la siguiente temporada."
        },
        "CARTA DE RECOMENDACION": {
            opcion1: "Tengo el agrado de recomendar ampliamente a quien suscribe, habiendo demostrado una ética de trabajo impecable y un compromiso excepcional con los objetivos institucionales. Su capacidad para resolver conflictos y su proactividad lo convierten en un activo valioso para cualquier entidad que busque excelencia.",
            opcion2: "Es un honor extender esta recomendación, dando fe de sus altas capacidades intelectuales y humanas. Durante nuestra colaboración, destacó por su liderazgo natural, honestidad y la facilidad para integrarse a equipos multidisciplinarios. Estoy convencido de que cumplirá con éxito cualquier desafío que se le presente.",
            opcion3: "Certifico que el portador de la presente posee las competencias técnicas y los valores morales necesarios para desempeñarse con distinción. Su trayectoria ha sido marcada por la puntualidad, la eficiencia y una constante voluntad de aprendizaje, cualidades que lo posicionan como un profesional altamente confiable.",
            opcion4: "A través de estas líneas, hago constar mi plena satisfacción con el desempeño profesional del interesado. Su integridad y su visión orientada a resultados son garantía de éxito. Recomiendo su contratación sin reserva alguna, seguro de que aportará valor inmediato a su organización."
        },
        "SOLICITUD DE EMPLEO": {
            opcion1: "Motivado por el prestigio de su institución, presento mi candidatura para la vacante disponible. Poseo una sólida formación y la experiencia necesaria para contribuir al crecimiento de su equipo. Mi objetivo es aportar soluciones creativas y compromiso total con los estándares de calidad de su empresa.",
            opcion2: "Habiendo seguido de cerca la trayectoria de su empresa, deseo postularme formalmente para formar parte de su plantel profesional. Considero que mi perfil se alinea perfectamente con su cultura organizacional y estoy ansioso por poner mis habilidades al servicio de sus metas estratégicas.",
            opcion3: "Me pongo en contacto con usted para expresar mi firme interés en ocupar una posición dentro de su entidad. Estoy preparado para asumir responsabilidades con madurez y eficiencia, buscando siempre la mejora continua y el aprendizaje constante dentro de un entorno profesional de alto nivel.",
            opcion4: "Solicito respetuosamente ser considerado en sus procesos de selección. Cuento con la disposición inmediata y la energía necesaria para afrontar los retos del puesto, garantizando responsabilidad, respeto y una conducta profesional intachable en todo momento."
        },
        "SOLICITUD DE PERMISO PARTICULAR": {
            opcion1: "Solicito su comprensión y autorización para ausentarme de mis labores por un motivo de fuerza mayor estrictamente personal. Me comprometo formalmente a reponer las horas de trabajo o adelantar mis tareas pendientes para que mi ausencia no cause inconvenientes en el cronograma del área.",
            opcion2: "Requiero permiso especial para atender asuntos administrativos de carácter urgente que no pueden ser postergados. Entiendo la importancia de mi presencia diaria, por lo cual he organizado mis responsabilidades de modo que queden cubiertas durante el tiempo de mi ausencia temporal.",
            opcion3: "Me dirijo a usted para solicitar una licencia corta por motivos de salud familiar. En estos momentos, mi presencia es requerida para el cuidado de un familiar cercano. Agradezco de antemano su empatía y sensibilidad ante esta situación que requiere mi atención inmediata.",
            opcion4: "Presento esta solicitud de permiso particular por necesidad de realizar trámites legales personales. He verificado con mis compañeros de oficina para que las actividades críticas sigan su curso normal. Agradezco mucho su gentil atención a mi petición."
        },
        
        "PERMISO MÉDICO": {
            opcion1: "Solicito permiso para ausentarme debido a una cita médica programada que no pudo ser fijada fuera del horario laboral. Me comprometo a presentar el justificante oficial y a retomar mis labores inmediatamente después.",
            opcion2: "Por motivos de un problema de salud que requiere reposo absoluto según prescripción médica, solicito licencia por los días indicados. Adjunto el certificado correspondiente para los fines administrativos de rigor.",
            opcion3: "Requiero su autorización para ausentarme de mis funciones debido a una emergencia médica familiar. Mi presencia es indispensable para el cuidado de mi familiar, y agradezco de antemano su empatía ante esta situación.",
            opcion4: "Solicito permiso particular para asistir a una intervención quirúrgica menor. He organizado mi agenda para que mis responsabilidades queden cubiertas por mi equipo durante mi breve ausencia.",
        },
        "CONSTANCIA TRABAJO": {
            opcion1: "Solicito la emisión de una Constancia de Trabajo donde se especifique mi cargo, antigüedad y salario actual. Requiero este documento para formalizar un trámite de crédito hipotecario ante una entidad bancaria.",
            opcion2: "Pido se me extienda una certificación laboral detallando mis funciones y conducta profesional. Este documento será utilizado para trámites personales de arrendamiento que solicitan acreditar estabilidad laboral.",
            opcion3: "Requiero una constancia de servicios prestados para fines de visa y trámites migratorios. Agradecería que el documento sea emitido con papel membretado y el sello oficial de la oficina de Recursos Humanos.",
            opcion4: "Solicito una referencia laboral actualizada. Como trabajador activo, necesito demostrar mi vinculación con la empresa para acceder a convenios educativos de postgrado que requieren este respaldo institucional.",
        },
        "QUEJA FORMAL": {
            opcion1: "Presento esta queja formal debido a la deficiente atención recibida en sus instalaciones. Como usuario/cliente, espero un trato respetuoso y una solución eficiente a mis reclamos, lo cual no sucedió en el evento que detallo.",
            opcion2: "Me dirijo a usted para manifestar mi inconformidad con el servicio prestado recientemente. El incumplimiento de los plazos acordados ha causado perjuicios que requieren una explicación y una compensación inmediata por su parte.",
            opcion3: "Expongo mi queja formal ante las irregularidades detectadas en el proceso administrativo mencionado. Solicito una revisión exhaustiva del caso para evitar que otros ciudadanos pasen por la misma situación de desatención.",
            opcion4: "Presento este reclamo por fallas constantes en el suministro/servicio contratado. A pesar de mis intentos previos por resolverlo de forma verbal, no he recibido solución, por lo que exijo una intervención inmediata por escrito.",
        },
        "AUMENTO SALARIAL": {
            opcion1: "Me dirijo a usted para solicitar una revisión de mi remuneración actual. En el último año he asumido responsabilidades adicionales que han impactado positivamente en los objetivos del departamento, por lo que agradecería una nivelación salarial acorde a mi nuevo perfil.",
            opcion2: "Solicito formalmente un ajuste en mi salario base, considerando tanto mi desempeño constante como el incremento en el costo de vida actual. Mi compromiso con la empresa sigue firme y espero que podamos llegar a un acuerdo que refleje mi valor para la institución.",
            opcion3: "Presento esta solicitud de incremento salarial basada en los logros alcanzados en mis proyectos recientes. He demostrado una dedicación que va más allá de mis funciones básicas y busco que mi compensación sea equitativa al mercado profesional actual.",
            opcion4: "Debido a la reestructuración de mis tareas y al cumplimiento de metas extraordinarias, pido respetuosamente considerar un aumento de sueldo. Valoro mi permanencia en esta empresa y deseo que mi remuneración sea un incentivo para seguir creciendo juntos."
        },
        "CARTA PODER SIMPLE": {
            opcion1: "Por la presente, otorgo poder amplio y suficiente a la persona designada para que, en mi nombre y representación, realice las gestiones administrativas detalladas. Este documento tiene validez limitada exclusivamente para el trámite mencionado.",
            opcion2: "Autorizo formalmente al portador de esta carta para recoger documentación personal y firmar formularios ante su institución. Adjunto copia de mi identificación oficial para dar fe de mi voluntad y responsabilidad sobre este acto.",
            opcion3: "Delegó mi representación legal/administrativa para el asunto indicado a continuación. Confío plenamente en la integridad de mi apoderado y solicito se le preste toda la colaboración necesaria para concluir con éxito el proceso iniciado.",
            opcion4: "A través de estas líneas, faculto a un tercero para que actúe en mi representación. Esta decisión obedece a mi imposibilidad de asistir personalmente por motivos de fuerza mayor, manteniendo la validez de todo lo actuado por mi delegado."
        },
        "DERECHO DE PETICIÓN": {
            opcion1: "En ejercicio de mi derecho constitucional de petición, solicito respetuosamente se me brinde información clara y detallada sobre el estado de mi solicitud. Espero una respuesta dentro de los términos legales establecidos por la normativa vigente.",
            opcion2: "Presento esta petición formal para que se revise mi caso particular, el cual ha presentado retrasos injustificados. Apelo a los principios de eficiencia y transparencia administrativa para recibir una resolución pronta y motivada.",
            opcion3: "Solicito formalmente que se me entregue copia certificada de los documentos que reposan en su archivo referentes a mi persona. Esta petición se fundamenta en mi derecho al acceso a la información pública y el debido proceso.",
            opcion4: "Me dirijo a su autoridad para solicitar una intervención inmediata ante la situación que detallo. Confío en que su gestión priorizará el bienestar ciudadano y responderá a mi requerimiento con la celeridad que el caso amerita."
        },





        "RESCISIÓN DE ALQUILER": {
        opcion1: "Notifico formalmente mi decisión de no renovar el contrato de arrendamiento del inmueble que ocupo. Cumplo con el preaviso legal y agradezco la buena relación; quedo a la espera de coordinar la entrega de llaves y la devolución del depósito.",
        opcion2: "Por motivos de fuerza mayor, me veo en la necesidad de finalizar el contrato de alquiler antes de lo previsto. Estoy dispuesto a dialogar los términos de salida para que ninguna de las partes resulte afectada.",
        opcion3: "Le informo que entregaré la propiedad en la fecha indicada. El inmueble se encuentra en perfectas condiciones y desocupado, por lo que solicito el acta de entrega final y la liquidación de servicios pendientes.",
        opcion4: "Comunico mi intención de dejar la vivienda por motivos de mudanza internacional. Agradezco las atenciones recibidas y facilito mis datos de contacto para cerrar cualquier trámite administrativo pendiente."
    },

    // ==========================================
    // 🌎 MIGRACIÓN e INTERNACIONAL (Para un mundo globalizado)
    // ==========================================
    "CARTA DE INVITACIÓN": {
        opcion1: "Como residente legal, extiendo esta invitación a mi familiar/amigo para que visite mi país de residencia. Me hago responsable de su alojamiento y manutención durante su estancia, garantizando que cuenta con el respaldo necesario para su visita.",
        opcion2: "Declaro bajo juramento mi deseo de recibir en mi hogar a la persona mencionada. El propósito del viaje es netamente turístico y familiar, asegurando que el invitado retornará a su país de origen al finalizar el periodo autorizado.",
        opcion3: "Certifico que poseo los recursos económicos y el espacio habitacional suficiente para hospedar a mi invitado. Adjunto mis comprobantes de domicilio para facilitar los trámites de visa correspondientes ante el consulado.",
        opcion4: "Solicito respetuosamente se conceda el permiso de viaje a mi invitado, comprometiéndome a que su estancia se desarrolle bajo las normas de convivencia y legalidad de esta nación."
    },
    "AUTORIZACIÓN VIAJE MENOR": {
        opcion1: "En mi calidad de padre/madre, otorgo mi consentimiento pleno para que mi hijo(a) realice el viaje internacional indicado. Autorizo a la persona acompañante a tomar decisiones en mi nombre ante cualquier emergencia médica o logística.",
        opcion2: "Doy permiso formal para que el menor de edad viaje solo bajo la custodia de la aerolínea/transporte. He verificado todos los requisitos de seguridad y asumo la responsabilidad legal sobre este desplazamiento.",
        opcion3: "Autorizo el traslado de mi hijo(a) fuera del país por motivos de intercambio estudiantil. Confío en la institución organizadora y permito que el menor participe en todas las actividades programadas bajo su supervisión.",
        opcion4: "Como tutor legal, firmo esta autorización para que el menor pueda cruzar fronteras nacionales e internacionales en compañía de sus abuelos/familiares, cumpliendo con los protocolos de protección a la infancia."
    },

    // ==========================================
    // 💰 FINANCIEROS y SERVICIOS (Defensa del consumidor)
    // ==========================================
    "CIERRE DE CUENTA BANCARIA": {
        opcion1: "Solicito formalmente el cierre definitivo de mi cuenta bancaria y la cancelación de cualquier tarjeta asociada. Pido se me haga entrega del saldo remanente y se emita un certificado de cuenta cerrada sin adeudos.",
        opcion2: "Por motivos de cambio de entidad financiera, requiero la baja total de mis productos con ustedes. Agradecería que se detenga cualquier cobro de comisión administrativa a partir de la fecha de esta solicitud.",
        opcion3: "Pido la cancelación de mi servicio financiero debido a mi disconformidad con los nuevos cargos aplicados. Solicito que la gestión se realice a la brevedad para evitar futuros cargos no autorizados.",
        opcion4: "Como titular, instruyo el cierre de mi cuenta de ahorros/corriente. Adjunto los documentos necesarios y espero la confirmación escrita de que mi vínculo contractual con el banco ha finalizado exitosamente."
    },
    "RECLAMO CARGOS NO RECONOCIDOS": {
        opcion1: "Impugno formalmente los cargos que aparecen en mi estado de cuenta y que no han sido autorizados por mi persona. Exijo una investigación inmediata y la devolución del monto sustraído a mi saldo.",
        opcion2: "Reporto una anomalía en mi facturación reciente. He detectado cobros duplicados/erróneos y solicito la corrección de los mismos, apelando a mis derechos como consumidor financiero.",
        opcion3: "Manifiesto mi total desacuerdo con las transacciones detalladas en el anexo. Como cliente, exijo la protección de mi patrimonio y una respuesta clara sobre la seguridad de mis datos bancarios.",
        opcion4: "Solicito la reversión de cargos por servicios que no he contratado ni utilizado. Espero una resolución favorable sin que esto afecte mi historial crediticio o mi relación con la institución."
    },

    // ==========================================
    // 🩺 SALUD (Para el paciente y su familia)
    // ==========================================
    "SOLICITUD HISTORIA CLÍNICA": {
        opcion1: "En ejercicio de mis derechos como paciente, solicito una copia completa de mi historial clínico, diagnósticos y resultados de exámenes. Requiero esta información para fines de seguimiento médico personal.",
        opcion2: "Pido acceso a mi expediente médico digital o físico. Es fundamental para mi bienestar contar con estos antecedentes para una segunda opinión médica profesional fuera de esta institución.",
        opcion3: "Solicito el desglose de los tratamientos recibidos durante mi internación. Esta información es indispensable para los trámites de mi seguro médico y para garantizar la continuidad de mis cuidados de salud.",
        opcion4: "Requiero que se me entreguen mis informes médicos debidamente firmados y sellados. Como titular de esta información sensible, ejerzo mi derecho a la portabilidad de mis datos de salud."
    },

    // ==========================================
    // 🏙️ COMUNIDAD y VECINDAD (Convivencia social)
    // ==========================================
    "RECLAMO RUIDOS MOLESTOS": {
        opcion1: "Me dirijo a la administración para reportar ruidos excesivos que impiden el descanso y la sana convivencia. Apelo al reglamento interno para que se tomen medidas correctivas con los responsables.",
        opcion2: "Presento una queja formal por actividades sonoras fuera del horario permitido. Busco mantener una relación cordial con mis vecinos, pero el respeto al espacio ajeno es fundamental para vivir en comunidad.",
        opcion3: "Solicito su intervención ante la constante perturbación del orden en el edificio/barrio. El bienestar de los niños y adultos mayores se ve afectado, por lo que pido se apliquen las sanciones correspondientes.",
        opcion4: "Insto a la junta de vecinos a tratar el problema del ruido en la próxima reunión. Necesitamos establecer límites claros que garanticen la tranquilidad de todos los residentes sin excepción."
    },




        "GENERICO": {
            opcion1: "Expongo ante usted la necesidad de realizar el trámite mencionado, confiando en su acostumbrada eficiencia y criterio profesional. Quedo a su entera disposición para proporcionar cualquier información adicional que se requiera para la culminación exitosa de esta gestión.",
            opcion2: "Mediante la presente, solicito formalmente su intervención y apoyo para agilizar el trámite en cuestión. Su valiosa gestión es fundamental para que este proceso llegue a buen término, por lo cual agradezco de antemano la atención y el tiempo dedicado a mi solicitud.",
            opcion3: "Por este medio, hago llegar mi petición con la esperanza de recibir una respuesta favorable. Entiendo la complejidad de los procesos administrativos y agradezco su disposición para orientarme y colaborar en la resolución de este asunto que es de gran importancia para mi persona.",
            opcion4: "Reciba un cordial saludo. El motivo de mi contacto es para formalizar la petición del servicio indicado, esperando que la misma sea atendida bajo los principios de celeridad y justicia que caracterizan a su administración. Atentamente espero sus noticias."
        }
    }
};

function cargarTipos() {
    const select = document.getElementById('tipoDoc');
    const tipos = Object.keys(PLANTILLAS.contenidos).filter(key => key !== 'GENERICO');
    tipos.forEach(tipo => {
        const option = document.createElement('option');
        option.value = tipo;
        option.textContent = tipo;
        select.appendChild(option);
    });
}