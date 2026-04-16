document.addEventListener('DOMContentLoaded', function() {
    const { jsPDF } = window.jspdf;
    let variante = 'opcion1';
    let alineacion = 'left';
    
    cargarTipos();
    setupEvents();
    updatePreview();
    
    function setupEvents() {
        // Live preview
        ['paisSelect','tipoDoc','autoridad','cargoJefe','nombre','ci','cargoPropio'].forEach(id => {
            document.getElementById(id).addEventListener('input', updatePreview);
        });
        
        // Variante selector
        document.querySelectorAll('.opt-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.opt-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                variante = this.dataset.opt;
                updatePreview();
            });
        });
        
        // Align selector
        ['alignLeft','alignCenter','alignRight'].forEach(id => {
            document.getElementById(id).addEventListener('click', function() {
                document.querySelectorAll('.align-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                alineacion = id.replace('align','').toLowerCase();
                updatePreview();
            });
        });
        
        // Controles
        document.getElementById('paisSelect').addEventListener('change', updateLabelDoc);
        document.getElementById('aceptoLegal').addEventListener('change', toggleBtn);
        document.getElementById('btnGenerar').addEventListener('click', generarPDF);
        document.getElementById('themeToggle').addEventListener('click', toggleTheme);
    }
    
    function updateLabelDoc() {
        const pais = document.getElementById('paisSelect').value;
        const label = document.getElementById('labelDocumento');
        if (PLANTILLAS && PLANTILLAS.paises && PLANTILLAS.paises[pais]) {
            label.textContent = `${PLANTILLAS.paises[pais].id}:`;
        }
    }
    
    function toggleBtn() {
        const btn = document.getElementById('btnGenerar');
        const legal = document.getElementById('aceptoLegal').checked;
        const campos = ['autoridad','nombre','ci','tipoDoc'].every(id => 
            document.getElementById(id).value.trim()
        );
        btn.disabled = !(legal && campos);
    }
    
    function updatePreview() {
        const preview = document.getElementById('previewCarta');
        const tipo = document.getElementById('tipoDoc').value || '';
        const nombre = document.getElementById('nombre').value?.toUpperCase() || 'NOMBRE';
        const ci = document.getElementById('ci').value || 'CI';
        const cargoPropio = document.getElementById('cargoPropio').value?.toUpperCase() || 'CARGO';
        const autoridad = document.getElementById('autoridad').value?.toUpperCase() || 'AUTORIDAD';
        const cargoJefe = document.getElementById('cargoJefe').value?.toUpperCase() || 'CARGO';
        
        const fecha = new Date();
        const fechaTexto = `Bolivia, ${fecha.getDate()} de ${PLANTILLAS.meses[fecha.getMonth()]} de ${fecha.getFullYear()}`;
        
        let textoDinamico = PLANTILLAS.contenidos[tipo]?.[variante] || 
            PLANTILLAS.contenidos.GENERICO[variante] ||
            "Expongo ante usted la necesidad de realizar este trámite, quedando a la espera de su amable consideración.";
        
        preview.innerHTML = `
            <div style="text-align: right; margin-bottom: 25px; font-weight: bold; font-size: 11px;">${fechaTexto}</div>
            <div style="margin-bottom: 20px;">
                <strong style="font-size: 12px;">Señor(a):</strong><br>
                ${autoridad}<br>
                ${cargoJefe}<br>
                <em>Presente.-</em>
            </div>
            <div style="text-align: ${alineacion}; font-weight: bold; text-decoration: underline; margin: 15px 0; font-size: 11px;">
                REF: ${tipo}
            </div>
            <p style="margin-bottom: 8px; font-weight: bold;">De mi mayor consideración:</p>
            <p>Mediante la presente le hago llegar mis más cordiales saludos y al mismo tiempo desearle el mayor de los éxitos en las funciones que desempeña por el bien y desarrollo de su prestigiosa empresa.</p>
            <p>El motivo de la presente carta es interpuesta por mi persona, <strong>${nombre}</strong>, con C.I. ${ci}, en calidad de <strong>${cargoPropio}</strong>, para hacer de su conocimiento y solicitar formalmente lo siguiente:</p>
            <p style="margin-top: 15px;">${textoDinamico}</p>
            <p style="margin-top: 20px;">Sin otro en particular, me despido agradeciéndole de antemano su gentil atención y quedando a la espera de una pronta respuesta.</p>
            <div style="margin-top: 50px;">
                <div style="margin-bottom: 35px;">Atentamente,</div>
                <div style="text-align: center;">
                    <div style="border-top: 2px solid black; width: 60%; margin: 0 auto 8px;"></div>
                    <div style="font-weight: bold; margin-bottom: 5px;">${nombre}</div>
                    <div>C.I. ${ci}</div>
                </div>
            </div>
        `;
        document.getElementById('previewStatus').textContent = tipo ? '✓ Listo para generar PDF' : 'Esperando datos...';
        toggleBtn();
    }
    
    function generarPDF() {
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF('p', 'mm', 'a4');
        
        // DATOS
        const autoridad = document.getElementById('autoridad').value.toUpperCase().trim();
        const cargoJefe = document.getElementById('cargoJefe').value.toUpperCase().trim();
        const tipo = document.getElementById('tipoDoc').value.toUpperCase().trim();
        const nombre = document.getElementById('nombre').value.toUpperCase().trim();
        const ci = document.getElementById('ci').value.trim();
        const cargoPropio = document.getElementById('cargoPropio').value.toUpperCase().trim();
        
        if (!autoridad || !nombre || !ci || !tipo) {
            alert('⚠️ Complete todos los campos obligatorios');
            return;
        }
        
        // FECHA
        const fecha = new Date();
        const fechaTexto = `Bolivia, ${fecha.getDate()} de ${PLANTILLAS.meses[fecha.getMonth()]} de ${fecha.getFullYear()}`;
        
        let y = 25;
        
        // FECHA (DERECHA)
        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(11);
        pdf.text(fechaTexto, 185, y, { align: 'right' });
        y += 20;
        
        // DESTINATARIO
        pdf.setFont("helvetica", "bold");
        pdf.text("Señor(a):", 25, y);
        y += 7;
        pdf.setFont("helvetica", "normal");
        pdf.text(autoridad, 25, y);
        y += 7;
        pdf.text(cargoJefe, 25, y);
        y += 7;
        pdf.setFont("helvetica", "italic");
        pdf.text("Presente.-", 25, y);
        y += 20;
        
        // REF
        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(11);
        const xRef = alineacion === 'center' ? 105 : alineacion === 'right' ? 185 : 25;
        pdf.text(`REF: ${tipo}`, xRef, y, { align: alineacion });
        y += 15;
        
        // CUERPO
        pdf.setFont("helvetica", "normal");
        pdf.text("De mi mayor consideración:", 25, y);
        y += 12;
        
        const saludo = "Mediante la presente le hago llegar mis más cordiales saludos y al mismo tiempo desearle el mayor de los éxitos en las funciones que desempeña por el bien y desarrollo de su prestigiosa empresa.";
        const lineasSaludo = pdf.splitTextToSize(saludo, 160);
        pdf.text(lineasSaludo, 25, y);
        y += lineasSaludo.length * 6 + 10;
        
        // DATOS PERSONALES
        pdf.text("El motivo de la presente carta es interpuesta por mi persona, ", 25, y);
        pdf.setFont("helvetica", "bold");
        pdf.text(nombre, 85, y);
        pdf.setFont("helvetica", "normal");
        pdf.text(` con C.I. ${ci}, en calidad de `, 105, y);
        pdf.setFont("helvetica", "bold");
        pdf.text(cargoPropio, 155, y);
        pdf.setFont("helvetica", "normal");
        y += 8;
        pdf.text("para hacer de su conocimiento y solicitar formalmente lo siguiente:", 25, y);
        y += 18;
        
        // CONTENIDO DINÁMICO
        let textoPrincipal = PLANTILLAS.contenidos[tipo]?.[variante] || 
                            PLANTILLAS.contenidos.GENERICO[variante] ||
                            "Expongo ante usted la necesidad de realizar este trámite...";
        
        const lineasPrincipal = pdf.splitTextToSize(textoPrincipal, 160);
        pdf.text(lineasPrincipal, 25, y);
        y += lineasPrincipal.length * 6 + 18;
        
        // DESPEDIDA
        const despedida = "Sin otro en particular, me despido agradeciéndole de antemano su gentil atención y quedando a la espera de una pronta respuesta.";
        const lineasDespedida = pdf.splitTextToSize(despedida, 160);
        pdf.text(lineasDespedida, 25, y);
        y += lineasDespedida.length * 6 + 30;
        
        // FIRMA
        pdf.text("Atentamente,", 25, y);
        y += 40;
        pdf.setLineWidth(0.5);
        pdf.line(75, y, 125, y);
        y += 15;
        pdf.setFont("helvetica", "bold");
        pdf.text(nombre, 100, y, { align: 'center' });
        y += 8;
        pdf.setFont("helvetica", "normal");
        pdf.text(`C.I. ${ci}`, 100, y, { align: 'center' });
        
        // FOOTER
        pdf.setFont("helvetica", "italic");
        pdf.setFontSize(8);
        pdf.setTextColor(128, 128, 128);
        pdf.text("Documento generado por ProgreSoft v3.1", 105, 285, { align: 'center' });
        
        // DESCARGA
        const timestamp = Date.now();
        pdf.save(`ProgreSoft_Carta_${timestamp}.pdf`);
        
    }
    
    function toggleTheme() {
        const theme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
        document.body.dataset.theme = theme;
        document.getElementById('themeToggle').textContent = theme === 'dark' ? '☀️' : '🌙';
        localStorage.setItem('progresoft-theme', theme);
    }
    
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
    cargarTemaPorDefecto(); // ← NUEVA FUNCIÓN

// AGREGAR AL FINAL del archivo:
function cargarTemaPorDefecto() {
    const savedTheme = localStorage.getItem('progresoft-theme') || 'light'; // ← 'light' por defecto
    document.body.dataset.theme = savedTheme;
    document.getElementById('themeToggle').textContent = savedTheme === 'dark' ? '☀️' : '🌙';
}
});