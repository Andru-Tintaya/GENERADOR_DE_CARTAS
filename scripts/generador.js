document.addEventListener('DOMContentLoaded', function() {
    const { jsPDF } = window.jspdf;
    let variante = 'opcion1';
    let alineacion = 'left';
    
    cargarTipos();
    cargarTemaPorDefecto();
    setupEvents();
    updatePreview();
    
    function setupEvents() {
        ['paisSelect','tipoDoc','autoridad','cargoJefe','nombre','ci','cargoPropio','lugar'].forEach(id => {
            document.getElementById(id).addEventListener('input', updatePreview);
        });
        
        document.querySelectorAll('.opt-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.opt-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                variante = this.dataset.opt;
                updatePreview();
            });
        });
        
        ['alignLeft','alignCenter','alignRight'].forEach(id => {
            document.getElementById(id).addEventListener('click', function() {
                document.querySelectorAll('.align-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                alineacion = id.replace('align','').toLowerCase();
                updatePreview();
            });
        });
        
        document.getElementById('paisSelect').addEventListener('change', updateLabelDoc);
        document.getElementById('aceptoLegal').addEventListener('change', toggleBtn);
        document.getElementById('btnGenerar').addEventListener('click', generarPDF);
        document.getElementById('themeToggle').addEventListener('click', toggleTheme);
    }
    
    function updateLabelDoc() {
        const pais = document.getElementById('paisSelect').value;
        const label = document.getElementById('labelDocumento');
        if (PLANTILLAS?.paises?.[pais]) {
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
        const ci = document.getElementById('ci').value || '0000000';
        const cargoPropio = document.getElementById('cargoPropio').value?.toUpperCase() || 'CARGO';
        const autoridad = document.getElementById('autoridad').value?.toUpperCase() || 'AUTORIDAD';
        const cargoJefe = document.getElementById('cargoJefe').value?.toUpperCase() || 'CARGO';
        const fecha = new Date();
        const lugarInput = document.getElementById('lugar').value.trim() || 'La Paz, Bolivia';
        const fechaTexto = `${lugarInput}, ${fecha.getDate()} de ${PLANTILLAS.meses[fecha.getMonth()]} de ${fecha.getFullYear()}`;

        const pais = document.getElementById('paisSelect').value;
        const docType = PLANTILLAS.paises[pais]?.id || 'C.I.';
        
        
        
        let textoDinamico = PLANTILLAS.contenidos[tipo]?.[variante] || 
            PLANTILLAS.contenidos.GENERICO[variante] ||
            "Expongo ante usted la necesidad de realizar este trámite formal, quedando a la espera de su amable consideración y gestión correspondiente.";
        //<p style="margin: 25px 0; padding: 15px; border-left: 3px solid #3b82f6; background: #f0f9ff;">${textoDinamico}</p>
            
        preview.innerHTML = `
            <div style="text-align: right; margin-bottom: 30px; font-weight: bold; font-size: 11px;">${fechaTexto}</div>
            <div style="margin-bottom: 25px;">
                <strong style="font-size: 12px;">Señor(a):</strong><br><br>
                ${autoridad}<br>
                ${cargoJefe}<br>
                <em>Presente.-</em>
            </div>
            <div style="text-align: ${alineacion}; font-weight: bold; text-decoration: underline; margin: 25px 0; font-size: 11px; padding: 5px 0;">
                REF: ${tipo}
            </div>
            <p style="margin-bottom: 12px; font-weight: bold; font-size: 11px;">De mi mayor consideración:</p>
            <p style="margin-bottom: 18px; text-align: justify;">Mediante la presente le hago llegar mis más cordiales saludos y al mismo tiempo desearle el mayor de los éxitos en las funciones que desempeña por el bien y desarrollo de su prestigiosa institución/empresa.</p>
            <p style="margin-bottom: 20px; text-align: justify;">El motivo de la presente carta es interpuesta por mi persona, <strong>${nombre}</strong>, portador del <strong>${docType} ${ci}</strong>, en calidad de <strong>${cargoPropio}</strong>, para hacer de su conocimiento y solicitar formalmente lo siguiente:</p>
            
            <p style="margin: 25px 0; padding: 0px; border-left: 3px solidrgb(255, 255, 255); background: #f0f9ff;">${textoDinamico}</p>
            
            <p style="margin-top: 25px; margin-bottom: 60px; text-align: justify;">Sin otro particular que agregar, me despido de usted muy atentamente, agradeciéndole de antemano su gentil atención a la presente y quedando a la espera de una pronta y favorable respuesta.</p>
            <div style="margin-top: 70px;">
                <div style="margin-bottom: 45px; font-weight: bold;">Atentamente,</div>
                <div style="text-align: center;">
                    <div style="border-top: 2px solid black; width: 60%; margin: 0 auto 12px;"></div>
                    <div style="font-weight: bold; font-size: 12px; margin-bottom: 8px;">${nombre}</div>
                    <div style="font-size: 10px;">${docType} ${ci}</div>
                </div>
            </div>
        `;
        document.getElementById('previewStatus').textContent = tipo ? '✓ Listo para generar PDF' : 'Esperando datos...';
        toggleBtn();
    }
    
    function generarPDF() {
        const { jsPDF } = window.jspdf;
        
        // ✅ FORMATO CARTA con MÁRGENES SEGUROS
        const pdf = new jsPDF('p', 'mm', 'letter');
        const marginLeft = 20;
        const marginRight = 20;
        const marginTop = 25;
        const contentWidth = 210 - marginLeft - marginRight; // Ancho útil
        const centerX = 105;
        
        // DATOS
        const autoridad = document.getElementById('autoridad').value.toUpperCase().trim();
        const cargoJefe = document.getElementById('cargoJefe').value.toUpperCase().trim();
        const tipo = document.getElementById('tipoDoc').value.toUpperCase().trim();
        const nombre = document.getElementById('nombre').value.toUpperCase().trim();
        const ci = document.getElementById('ci').value.trim();
        const cargoPropio = document.getElementById('cargoPropio').value.toUpperCase().trim();
        const lugarInput = document.getElementById('lugar').value.trim() || 'La Paz, Bolivia';
        const pais = document.getElementById('paisSelect').value;
        const docType = PLANTILLAS.paises[pais]?.id || 'C.I.';
        const fecha = new Date();
        const fechaTexto = `${lugarInput}, ${fecha.getDate()} de ${PLANTILLAS.meses[fecha.getMonth()]} de ${fecha.getFullYear()}`;
        
        let y = marginTop;
        
        // 1️⃣ FECHA - DERECHA (SEGURO)
        pdf.setFontSize(10);
        pdf.setFont("helvetica", "normal");
        pdf.text(fechaTexto, 210 - marginRight, y, { align: 'right' });
        y += 18;
        
        // 2️⃣ DESTINATARIO - MÁRGENES SEGUROS
        pdf.setFontSize(11);
        pdf.setFont("helvetica", "bold");
        pdf.text("Señor(a):", marginLeft, y);
        y += 8;
        pdf.setFont("helvetica", "bold");
        pdf.text(autoridad, marginLeft, y);
        y += 7;
        const linesCargo = pdf.splitTextToSize(cargoJefe, contentWidth);
        pdf.text(linesCargo, marginLeft, y);
        y += linesCargo.length * 6;
        pdf.setFont("helvetica", "italic");
        pdf.text("Presente.-", marginLeft, y);
        y += 20;
        //-------------------------------------------------------------------------
        // 3️⃣ REF - ALINEACIÓN SEGURA
        pdf.setFont("helvetica", "bold");
        const refText = `REF: ${tipo}`;
        let xRef = marginLeft;
        if (alineacion === 'center') xRef = centerX;
        if (alineacion === 'right') xRef = 210 - marginRight;
        
        pdf.text(refText, xRef, y, { align: alineacion });

        // Cálculo correcto de la línea según la alineación
        const textWidth = pdf.getTextWidth(refText);
        let lineStart = xRef; // Caso 'left'

        if (alineacion === 'center') {
            lineStart = centerX - (textWidth / 2);
        } else if (alineacion === 'right') {
            lineStart = (210 - marginRight) - textWidth;
        }

        // Dibujar la línea exactamente debajo del texto
        pdf.line(lineStart, y + 1, lineStart + textWidth, y + 1);

        y += 18; // Espacio reducido para mantener el contenido cerca
        
        //-------------------------------------------------------------------------
        
        // 4️⃣ SALUDO
        pdf.setFont("helvetica", "bold");
        pdf.text("De mi mayor consideración:", marginLeft, y);
        y += 12;
        
        pdf.setFont("helvetica", "normal");
        const saludo = "Mediante la presente le hago llegar mis más cordiales saludos y al mismo tiempo desearle el mayor de los éxitos en las funciones que desempeña por el bien y desarrollo de su prestigiosa institución.";
        const linesSaludo = pdf.splitTextToSize(saludo, contentWidth);
        pdf.text(linesSaludo, marginLeft, y);
        y += (linesSaludo.length * 5.5) + 5;
        
        //y += (linesSaludo.length * 5.5) + 12;

        // 5️⃣ IDENTIFICACIÓN - DOC EN NEGRITA
        const identText = `El motivo de la presente es interpuesta por mi persona, ${nombre}, portador del ${docType} ${ci}, en calidad de ${cargoPropio}, para solicitar formalmente:`;
        const linesIdent = pdf.splitTextToSize(identText, contentWidth);
        pdf.text(linesIdent, marginLeft, y);
        y += (linesIdent.length * 5.5) + 1;
        
        //y += (linesIdent.length * 5.5) + 15;
        
        // 6️⃣ CONTENIDO PRINCIPAL
        let textoPrincipal = PLANTILLAS.contenidos[tipo]?.[variante] || 
            "Expongo la necesidad de realizar este trámite formal, quedando a la espera de su amable consideración.";
        
        const linesPrincipal = pdf.splitTextToSize(textoPrincipal, contentWidth);
        pdf.text(linesPrincipal, marginLeft, y);
        y += (linesPrincipal.length * 5.5) + 5;

        //y += (linesPrincipal.length * 5.5) + 18;
        
        // 7️⃣ DESPEDIDA
        const despedida = "Sin otro particular, me despido atentamente, agradeciéndole su gentil atención y quedando a la espera de respuesta favorable.";
        const linesDespedida = pdf.splitTextToSize(despedida, contentWidth);
        pdf.text(linesDespedida, marginLeft, y);
        y += (linesDespedida.length * 5.5) + 5;
        
        //y += (linesDespedida.length * 5.5) + 35;
        //-------------------------------------------------------------------------
        // 8️⃣ FIRMA - POSICIÓN FIJA (nunca se sale)
        const firmaY = Math.min(y + 20, 240); // Máximo 240px desde arriba
        
        pdf.setFont("helvetica", "normal");
        pdf.text("Atentamente,", marginLeft, firmaY);
        
        pdf.line(centerX - 30, firmaY + 35, centerX + 30, firmaY + 35);
        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(11);
        pdf.text(nombre, centerX, firmaY + 40, { align: 'center' });
        pdf.setFontSize(9);
        pdf.text(`${docType}: ${ci}`, centerX, firmaY + 45, { align: 'center' });
        
        // 💾 DESCARGA
        const timestamp = Date.now();
        pdf.save(`Carta_${tipo.replace(/ /g,'_')}_${timestamp}.pdf`);
    }
    
    function toggleTheme() {
        const theme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
        document.body.dataset.theme = theme;
        document.getElementById('themeToggle').textContent = theme === 'dark' ? '☀️' : '🌙';
        localStorage.setItem('progresoft-theme', theme);
    }
    
    function cargarTemaPorDefecto() {
        const savedTheme = localStorage.getItem('progresoft-theme') || 'light';
        document.body.dataset.theme = savedTheme;
        document.getElementById('themeToggle').textContent = savedTheme === 'dark' ? '☀️' : '🌙';
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
});