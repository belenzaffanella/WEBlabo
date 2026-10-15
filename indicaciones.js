const indicationEntries = [
  {
    title: 'Análisis de sangre de rutina (sin triglicéridos)',
    sections: [
      ['Ayuno', '8 horas. Durante el ayuno, solo agua.'],
      ['Antes de venir', 'No mascar chicle ni fumar. Mantené tus hábitos y alimentación de siempre. Si tomás medicación habitualmente, consultá a tu médico.'],
      ['Extracción', 'De 7:30 a 11:00. El laboratorio solicita turno previo. Usá ropa cómoda, con mangas y puños amplios.'],
      ['Después de la extracción', 'Presioná el sitio de la punción durante 5 minutos con el brazo extendido. Durante la primera hora, no cargues peso con ese brazo.']
    ]
  },
  {
    title: 'Perfil lipídico y hepatograma',
    sections: [
      ['Preparación', 'La información publicada en la web actual indica 12 horas de ayuno para estudios con triglicéridos, colesterol, hepatograma, lípidos totales o lipidograma. Durante el ayuno, solo agua; no mascar chicle ni fumar.'],
      ['Medicación', 'Si tomás medicación habitualmente, consultá a tu médico.'],
      ['Nota', 'Al pedir turno, confirmá que esta preparación corresponda a tu orden.']
    ]
  },
  {
    title: 'Prueba de tolerancia oral a la glucosa (curva de glucosa)',
    sections: [
      ['Ayuno', 'De 8 a 10 horas. Si también te solicitan triglicéridos, la web indica 12 horas.'],
      ['Los 3 días previos', 'Mantené tu actividad física habitual y una alimentación sin restricción de hidratos de carbono.'],
      ['Medicación', 'La web indica suspender corticoides 7 días antes solo con autorización médica. No suspendas medicación por tu cuenta.'],
      ['Durante el estudio', 'Permanecerás aproximadamente 2 horas y media en el laboratorio. Durante la prueba no se ingieren alimentos; se puede tomar agua. La web indica que no se realice si estás cursando una infección, trastorno gastrointestinal, traumatismo o fiebre, ni si estás guardando reposo.']
    ]
  },
  {
    title: 'PSA (antígeno prostático específico)',
    sections: [
      ['Antes de la muestra', 'La web no indica un ayuno específico. La muestra debe obtenerse antes de una biopsia, prostatectomía, masaje prostático o tacto rectal.'],
      ['3 días antes', 'Abstinencia sexual.'],
      ['24 horas antes', 'Evitá realizar ejercicio.'],
      ['Si tuviste infección urinaria', 'La web indica realizar el estudio 3 días después de finalizar el tratamiento con antibióticos.']
    ]
  },
  {
    title: 'Prolactina',
    sections: [
      ['Horario', 'Concurrí entre las 8:00 y las 10:00.'],
      ['Antes de la toma', 'Evitá el estrés y permanecé en reposo durante 20 minutos antes de la extracción. La web actual no especifica ayuno para este estudio.']
    ]
  },
  {
    title: 'Orina completa',
    sections: [
      ['Recolección', 'Recolectá la primera orina de la mañana en el recipiente entregado por el laboratorio. También puede ser una orina de otro momento del día si tuviste una retención previa mínima de 3 horas. Cerrá bien el recipiente.'],
      ['Entrega', 'Entregala dentro de las 2 horas posteriores a la recolección. Si no es posible, conservála en la heladera.']
    ]
  },
  {
    title: 'Orina de 24 horas',
    sections: [
      ['Antes de empezar', 'Retirá el bidón en el laboratorio.'],
      ['Recolección', 'El día anterior a la entrega, descartá la primera orina de la mañana y anotá la hora. Desde ese momento, juntá todo el volumen de cada micción hasta la misma hora de la mañana siguiente, incluida esa última orina.'],
      ['Conservación', 'Mantené el bidón en la heladera hasta entregarlo al laboratorio.']
    ]
  },
  {
    title: 'Urocultivo (mujeres y niñas)',
    sections: [
      ['Retención', 'Mantené una retención de orina de al menos 3 horas, o la máxima posible.'],
      ['Higiene y recolección', 'Lavá cuidadosamente la zona genital y anal con agua y jabón nuevo, de adelante hacia atrás. Enjuagá y colocá un tapón vaginal (no en niñas). Eliminá el primer chorro y recolectá la segunda porción en el recipiente estéril entregado por el laboratorio, manteniéndolo tapado hasta ese momento. Retirá el tapón vaginal.'],
      ['Entrega y tratamiento', 'Entregá la muestra dentro de la primera hora. Si no es posible, conservála en la heladera. Si recibiste tratamiento recientemente, llevá el nombre del medicamento y la fecha en que lo terminaste.']
    ]
  },
  {
    title: 'Urocultivo (hombres)',
    sections: [
      ['Retención', 'Mantené una retención de orina de al menos 3 horas, o la máxima posible.'],
      ['Higiene y recolección', 'Lavá cuidadosamente el pene con agua y jabón nuevo, retrayendo la piel (prepucio), y enjuagá con abundante agua. Eliminá el primer chorro y recolectá la segunda porción en el recipiente estéril entregado por el laboratorio, manteniéndolo tapado hasta ese momento.'],
      ['Entrega y tratamiento', 'Entregá la muestra dentro de la primera hora. Si no es posible, conservála en la heladera. Si recibiste tratamiento recientemente, llevá el nombre del medicamento y la fecha en que lo terminaste.']
    ]
  },
  {
    title: 'Exudado faríngeo',
    sections: [
      ['Preparación', 'La información publicada en la web actual indica concurrir en ayunas o sin ingerir líquidos ni sólidos desde 3 horas antes. También indica no recibir tratamiento antibiótico desde las 72 horas previas, salvo indicación médica.'],
      ['Tratamiento reciente', 'Si recibiste antibióticos recientemente, llevá el nombre del medicamento y la fecha en que lo terminaste.'],
      ['Nota', 'Al pedir turno, confirmá que esta preparación corresponda a tu orden.']
    ]
  },
  {
    title: 'Esputo',
    sections: [
      ['Recolección', 'Cepillate los dientes y enjuagate la boca con agua. Obtené la muestra con una expectoración profunda, no salivosa, preferentemente por la mañana. Colocala en el frasco estéril y tapalo.'],
      ['Entrega', 'Remitila inmediatamente al laboratorio.']
    ]
  },
  {
    title: 'Esputo seriado para baciloscopía o cultivo de micobacterias',
    sections: [
      ['Duración', 'El estudio se realiza durante 3 días consecutivos: una muestra por día.'],
      ['Recolección', 'Cepillate los dientes y enjuagate la boca con agua. Obtené una expectoración profunda, no salivosa, preferentemente por la mañana. Usá un frasco distinto para cada muestra.'],
      ['Conservación y entrega', 'Conservá en la heladera las dos primeras muestras. Después de tomar la tercera, remití todas inmediatamente al laboratorio.']
    ]
  },
  {
    title: 'Cultivo de flujo vaginal y moco cervical',
    sections: [
      ['72 horas antes', 'No realices tratamientos locales o generales (óvulos, cremas u otros).'],
      ['24 horas antes', 'Mantené abstinencia sexual.'],
      ['Preparación', 'Realizá solo higiene externa; no hagas duchas ni lavados vaginales. Concurrí alejada de la menstruación o de pérdidas. Si recibiste medicamentos recientemente, llevá el nombre y la fecha en que finalizaste el tratamiento.']
    ]
  },
  {
    title: 'Secreción conjuntival',
    sections: [
      ['Antes de la toma', 'Concurrí sin lavarte la cara ni colocarte maquillaje para que el profesional pueda tomar la muestra. Si recibiste medicamentos recientemente, llevá el nombre y la fecha en que finalizaste el tratamiento.']
    ]
  },
  {
    title: 'Exudado uretral',
    sections: [
      ['Retención', 'Concurrí con una retención mínima de 3 horas, o la máxima posible.'],
      ['Antibióticos', 'La web indica no recibir antibióticos desde las 72 horas previas, salvo indicación médica. Si los recibiste recientemente, llevá el nombre y la fecha en que finalizaste el tratamiento.']
    ]
  },
  {
    title: 'Espermocultivo (orina de primera micción y semen)',
    sections: [
      ['Preparación', 'Lavá los genitales con jabón neutro nuevo, sin antisépticos. Enjuagá con abundante agua corriente y secá con gasa estéril, papel o una toalla limpia.'],
      ['Frasco 1: orina', 'Luego de una retención de 4 horas, recolectá los primeros 5 a 10 mL de orina en un frasco estéril (alcanza con cubrir el fondo).'],
      ['Frasco 2: semen', 'Recolectá la muestra de semen por masturbación en otro frasco estéril. Consultá al laboratorio por las indicaciones específicas para análisis de semen.'],
      ['Entrega', 'Mantené ambos frascos a temperatura ambiente y entregalos lo antes posible, dentro de 1 hora de obtenidos.']
    ]
  },
  {
    title: 'Micológico (piel, uñas, pies y cuero cabelludo)',
    sections: [
      ['7 días antes', 'La web indica suspender la medicación antifúngica. Confirmá con el equipo antes de modificar cualquier tratamiento.'],
      ['3 días antes', 'La web indica suspender cremas, pomadas o polvos.'],
      ['Según la zona', 'Piel: lavar la zona con agua y jabón y realizar baños de unos 30 minutos con agua tibia y sal, 3 veces al día; secar. Uñas: seguir el mismo paso, cepillarlas, no pintarlas ni cortarlas. Pies: concurrir con medias y calzado cerrado; no colocar talco en los zapatos. Cuero cabelludo: no lavarse la cabeza durante 3 días.']
    ]
  },
  {
    title: 'Coprocultivo (adultos)',
    sections: [
      ['Medicación', 'La web indica no recibir antibióticos ni antidiarreicos (carbón, bismuto u otros) desde las 72 horas previas, salvo indicación médica. Si recibiste tratamiento, llevá el nombre y la fecha en que lo terminaste.'],
      ['Recolección', 'Recolectá la muestra directamente en un recipiente estéril con una cuchara o espátula.'],
      ['Entrega', 'Entregá la muestra dentro de la primera hora. Si la distancia o el horario impiden llegar pronto, consultá al laboratorio sobre el medio de transporte indicado.']
    ]
  },
  {
    title: 'Coprocultivo (bebés)',
    sections: [
      ['Medicación', 'La web indica no recibir antibióticos ni antidiarreicos (carbón, bismuto u otros) desde las 72 horas previas, salvo indicación médica. Si recibió tratamiento, llevá el nombre y la fecha en que lo terminó.'],
      ['Preparación y recolección', 'Lavá la piel de la zona genital con agua y jabón blanco, quitando restos de cremas, talcos, aceites o lanolina. Lo recomendado es recolectar directamente en un recipiente estéril. Si resulta muy difícil, usá un pañal descartable colocado al revés, con el plástico hacia adentro, y pasá al recipiente las zonas con moco o sangre.'],
      ['Entrega', 'Entregá la muestra dentro de la primera hora. Si hay demora, consultá al laboratorio sobre el medio de transporte indicado.']
    ]
  },
  {
    title: 'Parasitológico seriado de materia fecal',
    sections: [
      ['Recolección', 'Durante 5 días, colocá una pequeña muestra de cada deposición en el frasco con formol provisto por el laboratorio. Si un día no podés recolectar, continuá un día más.'],
      ['Conservación', 'No coloques el frasco en la heladera. Mantenelo fuera del alcance de los niños.']
    ]
  },
  {
    title: 'Test de Graham',
    sections: [
      ['Noche anterior', 'Higienizá bien la zona anal. No coloques talco.'],
      ['Por la mañana', 'Al levantarte, pasá un trozo de cinta adhesiva por el ano y pegalo en el vidrio provisto por el laboratorio. Repetí el procedimiento durante 3 días consecutivos.'],
      ['Entrega', 'Entregá el vidrio al laboratorio al terminar los 3 días.']
    ]
  },
  {
    title: 'Sangre oculta en materia fecal',
    sections: [
      ['Alimentación y otras indicaciones', 'El método utilizado no requiere régimen alimenticio previo. La web indica no tomar aspirinas ni alcohol durante las 48 horas previas. No juntes la muestra durante el período menstrual ni si tenés diarrea.'],
      ['Recolección y entrega', 'Recolectá una pequeña porción de materia fecal de la zona mucosa y oscura en un frasco estéril. Entregala en el día.']
    ]
  }
];

const indicationList = document.querySelector('#indications-list');
const indicationSearch = document.querySelector('#indications-search');
const indicationCount = document.querySelector('#indications-count');
const indicationClear = document.querySelector('#indications-clear');

function escapeIndicationText(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[character]);
}

function renderIndications(query = '') {
  if (!indicationList) return;
  const normalizedQuery = query.trim().toLocaleLowerCase('es').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const matching = indicationEntries.filter((entry) => {
    const searchable = `${entry.title} ${entry.sections.map((section) => section.join(' ')).join(' ')}`
      .toLocaleLowerCase('es').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    return searchable.includes(normalizedQuery);
  });

  indicationList.innerHTML = matching.length ? matching.map((entry) => `
    <details class="indication-card">
      <summary><span>${escapeIndicationText(entry.title)}</span><span aria-hidden="true">＋</span></summary>
      <div class="indication-card-body">${entry.sections.map(([label, text]) => `<p><strong>${escapeIndicationText(label)}:</strong> ${escapeIndicationText(text)}</p>`).join('')}</div>
    </details>`).join('') : '<p class="indications-empty">No encontramos ese estudio. Probá con otra palabra o escribinos para consultarlo.</p>';

  indicationCount.textContent = normalizedQuery
    ? `${matching.length} ${matching.length === 1 ? 'resultado' : 'resultados'}`
    : `${matching.length} indicaciones para consultar`;
}

if (indicationList) {
  renderIndications();
  indicationSearch?.addEventListener('input', () => renderIndications(indicationSearch.value));
  indicationClear?.addEventListener('click', () => {
    indicationSearch.value = '';
    indicationSearch.focus();
    renderIndications();
  });
}
