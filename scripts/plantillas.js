const PLANTILLAS = {
    paises: {
        bo: { id: "C.I.", ciudad: "Bolivia" },
        pe: { id: "DNI", ciudad: "Lima" },
        ar: { id: "DNI", ciudad: "Buenos Aires" },
        cl: { id: "RUT", ciudad: "Santiago" },
        sv: { id: "DUI", ciudad: "San Salvador" },
        ec: { id: "Cédula", ciudad: "Quito" }
    },
    meses: ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"],
    contenidos: {
        "CARTA DE RENUNCIA": {
            opcion1: "Expongo ante usted mi decisión irrevocable de presentar mi renuncia al cargo que vengo desempeñando, por motivos estrictamente personales. Agradezco sinceramente la oportunidad brindada.",
            opcion2: "Por la presente formalizo mi renuncia voluntaria al puesto que ocupo. Esta decisión responde a nuevos retos profesionales que afrontaré en el futuro.",
            opcion3: "Me dirijo a usted para comunicar mi retiro del cargo. Ha sido un honor formar parte de su equipo durante este tiempo."
        },
        "SOLICITUD DE VACACIONES": {
            opcion1: "Solicito formalmente el goce de mis vacaciones correspondientes a la presente gestión, quedando a la espera de su amable aprobación.",
            opcion2: "Presento solicitud para disfrutar de mi periodo vacacional anual. He coordinado con mi equipo para garantizar continuidad en las tareas.",
            opcion3: "Requiero autorización para ausentarme por vacaciones. Quedo a disposición para entregar pendientes antes de mi partida."
        },
        "CARTA DE RECOMENDACION": {
            opcion1: "Recomiendo ampliamente a esta persona por su excelente desempeño profesional y cualidades personales destacadas.",
            opcion2: "Tengo el placer de extender mi más sincera recomendación por su compromiso y resultados obtenidos consistentemente.",
            opcion3: "Doy fe de las capacidades y ética profesional de quien recomiendo calurosamente para cualquier oportunidad laboral."
        },
        "SOLICITUD DE EMPLEO": {
            opcion1: "Me postulo formalmente para el cargo anunciado, ofreciendo mi experiencia y compromiso profesional.",
            opcion2: "Presento mi candidatura para la vacante publicada. Mi trayectoria profesional me califica plenamente para esta posición.",
            opcion3: "Solicito ser considerado para el puesto de trabajo. Estoy preparado para contribuir inmediatamente con resultados."
        },
        "SOLICITUD DE PERMISO PARTICULAR": {
            opcion1: "Solicito permiso particular por motivos personales, comprometiéndome a regularizar pendientes al retornar.",
            opcion2: "Requiero autorización para ausentarme por un día por asuntos familiares urgentes. Garantizo continuidad operativa.",
            opcion3: "Presento solicitud de permiso sin goce de haber por necesidad personal. He organizado mi área para mi ausencia."
        },
        GENERICO: {
            opcion1: "Expongo ante usted la necesidad de realizar este trámite, quedando a la espera de su amable consideración.",
            opcion2: "Mediante la presente solicito su valiosa gestión para el trámite indicado, agradeciendo su atención.",
            opcion3: "Por este medio requiero su intervención para la gestión solicitada, a la espera de su respuesta favorable."
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