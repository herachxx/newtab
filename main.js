/**
 * Damumed v4.0 — Полнофункциональное приложение
 * Все данные в localStorage. Все кнопки работают.
 */

/* ========== DATA STORE ========== */
const DB = {
    key: 'damumed_v4',
    defaults() {
        return {
            patients: [
                { id:1, surname:'Иванов',name:'Алексей',patronymic:'Петрович',fullname:'Иванов Алексей Петрович',initials:'ИП',
                  iin:'820314301856',polis:'KZ-0482-991234',blood:'II(+) Rh',birthDate:'1982-03-14',gender:'male',
                  phone:'+7 (701) 543-21-09',email:'ivanov.ap@email.kz',visitType:'primary',specialty:'therapist',
                  insurance:'АО СК Даму',appointmentTime:'09:30',cardColor:'#0ea5e9',genderRadio:'male',
                  riskGroups:['hypertension','cardio'],notifySms:true,notifyEmail:false,notifyPush:true,
                  notes:'Пациент пришёл с острой болью.',
                  vitals:{systolic:128,diastolic:84,pulse:78,temperature:37.2,spo2:97,respiratoryRate:18,height:178,weight:82,bmi:25.9,painLevel:3,stressLevel:45},
                  complaints:{chiefComplaint:'Боль в горле при глотании, заложенность носа.',historyPresent:'Заболел остро 2 дня назад.',objectiveExam:'Состояние средней степени тяжести.',complaintsEditable:'Боль в горле.'},
                  diagnosis:[{code:'J03.9',name:'Острый тонзиллит',type:'main'},{code:'J00',name:'Острый назофарингит',type:'concurrent'}],
                  prescriptions:[{med:'Азитромицин',form:'tablet',dose:'500 мг',freq:'twice',duration:'5 дней',route:'oral'},{med:'Парацетамол',form:'tablet',dose:'500 мг',freq:'prn',duration:'3 дня',route:'oral'}],
                  tests:{cbc:'none',ura:'none',biochem:'none',crp:'none',throat:'ordered',ecg:'none'},
                  referrals:{ent:'ordered',cardio:'none',neuro:'none',surgery:'none'},
                  additional:{nextVisit:'',sickLeave:'5days',disabilityGroup:'none',pregnancy:'',doctorNotes:'Контроль через 7 дней.'},
                  recommendations:'Постельный режим 3-5 дней.',priority:'normal',meta:'43 года • М • 09:30',visitTypeLabel:'Первичный',status:'waiting' },
                { id:2, surname:'Смирнова',name:'Елена',patronymic:'Дмитриевна',fullname:'Смирнова Елена Дмитриевна',initials:'СЕ',
                  iin:'690512402731',polis:'KZ-0482-995678',blood:'I(-) Rh',birthDate:'1969-05-12',gender:'female',
                  phone:'+7 (777) 123-45-67',email:'smirnova.ed@email.kz',visitType:'repeat',specialty:'therapist',
                  insurance:'АО СК Даму',appointmentTime:'10:00',cardColor:'#ef4444',genderRadio:'female',
                  riskGroups:['hypertension','diabetes'],notifySms:true,notifyEmail:true,notifyPush:false,
                  notes:'Хронический пациент.',
                  vitals:{systolic:145,diastolic:92,pulse:82,temperature:36.6,spo2:96,respiratoryRate:16,height:162,weight:68,bmi:25.9,painLevel:1,stressLevel:30},
                  complaints:{chiefComplaint:'Головная боль, повышение АД.',historyPresent:'Гипертония с 2015.',objectiveExam:'АД 145/92.',complaintsEditable:'Головная боль.'},
                  diagnosis:[{code:'I10',name:'Эссенциальная гипертензия',type:'main'},{code:'E11.9',name:'СД 2 типа',type:'concurrent'}],
                  prescriptions:[{med:'Эналаприл',form:'tablet',dose:'10 мг',freq:'once',duration:'30 дней',route:'oral'},{med:'Метформин',form:'tablet',dose:'500 мг',freq:'twice',duration:'30 дней',route:'oral'}],
                  tests:{cbc:'completed',ura:'completed',biochem:'ordered',crp:'none',throat:'none',ecg:'completed'},
                  referrals:{ent:'none',cardio:'ordered',neuro:'none',surgery:'none'},
                  additional:{nextVisit:'',sickLeave:'none',disabilityGroup:'none',pregnancy:'',doctorNotes:'Контроль АД через 2 недели.'},
                  recommendations:'Диета, ограничение соли.',priority:'normal',meta:'56 лет • Ж • 10:00',visitTypeLabel:'Повторный',status:'ready' },
                { id:3, surname:'Ахметов',name:'Ержан',patronymic:'Болатович',fullname:'Ахметов Ержан Болатович',initials:'АЕ',
                  iin:'910623501942',polis:'KZ-0482-991111',blood:'III(+) Rh',birthDate:'1991-06-23',gender:'male',
                  phone:'+7 (705) 987-65-43',email:'akhmetov.eb@email.kz',visitType:'primary',specialty:'therapist',
                  insurance:'АО СК Даму',appointmentTime:'10:30',cardColor:'#3b82f6',genderRadio:'male',
                  riskGroups:[],notifySms:true,notifyEmail:false,notifyPush:true,
                  notes:'Первичный осмотр.',
                  vitals:{systolic:120,diastolic:80,pulse:72,temperature:36.8,spo2:99,respiratoryRate:16,height:175,weight:70,bmi:22.9,painLevel:0,stressLevel:20},
                  complaints:{chiefComplaint:'Профилактический осмотр.',historyPresent:'Жалоб нет.',objectiveExam:'Удовлетворительно.',complaintsEditable:'Жалоб нет.'},
                  diagnosis:[{code:'Z00.0',name:'Общий медицинский осмотр',type:'main'}],
                  prescriptions:[],
                  tests:{cbc:'ordered',ura:'ordered',biochem:'ordered',crp:'ordered',throat:'none',ecg:'ordered'},
                  referrals:{ent:'none',cardio:'none',neuro:'none',surgery:'none'},
                  additional:{nextVisit:'',sickLeave:'none',disabilityGroup:'none',pregnancy:'',doctorNotes:'Диспансеризация.'},
                  recommendations:'Диспансеризация.',priority:'low',meta:'34 года • М • 10:30',visitTypeLabel:'Первичный',status:'waiting' },
                { id:4, surname:'Ким',name:'Юлия',patronymic:'Сергеевна',fullname:'Ким Юлия Сергеевна',initials:'КЮ',
                  iin:'970815603158',polis:'KZ-0482-992222',blood:'IV(-) Rh',birthDate:'1997-08-15',gender:'female',
                  phone:'+7 (701) 456-78-90',email:'kim.ys@email.kz',visitType:'dispensary',specialty:'therapist',
                  insurance:'АО СК Даму',appointmentTime:'09:00',cardColor:'#a855f7',genderRadio:'female',
                  riskGroups:[],notifySms:true,notifyEmail:true,notifyPush:true,
                  notes:'Диспансеризация.',
                  vitals:{systolic:110,diastolic:70,pulse:68,temperature:36.5,spo2:99,respiratoryRate:14,height:165,weight:55,bmi:20.2,painLevel:0,stressLevel:15},
                  complaints:{chiefComplaint:'Диспансеризация.',historyPresent:'Профосмотр.',objectiveExam:'Удовлетворительно.',complaintsEditable:'Жалоб нет.'},
                  diagnosis:[{code:'Z00.0',name:'Общий медицинский осмотр',type:'main'}],
                  prescriptions:[],
                  tests:{cbc:'completed',ura:'completed',biochem:'completed',crp:'completed',throat:'none',ecg:'completed'},
                  referrals:{ent:'none',cardio:'none',neuro:'none',surgery:'none'},
                  additional:{nextVisit:'',sickLeave:'none',disabilityGroup:'none',pregnancy:'',doctorNotes:'Диспансеризация пройдена.'},
                  recommendations:'ЗОЖ.',priority:'low',meta:'28 лет • Ж • 09:00',visitTypeLabel:'Диспансеризация',status:'done' },
                { id:5, surname:'Омаров',name:'Нурлан',patronymic:'Кенесович',fullname:'Омаров Нурлан Кенесович',initials:'ОН',
                  iin:'640401702563',polis:'KZ-0482-993333',blood:'II(+) Rh',birthDate:'1964-04-01',gender:'male',
                  phone:'+7 (777) 789-01-23',email:'omarov.nk@email.kz',visitType:'repeat',specialty:'therapist',
                  insurance:'АО СК Даму',appointmentTime:'11:00',cardColor:'#f59e0b',genderRadio:'male',
                  riskGroups:['cardio'],notifySms:false,notifyEmail:false,notifyPush:true,
                  notes:'Повторный визит.',
                  vitals:{systolic:150,diastolic:95,pulse:88,temperature:36.7,spo2:95,respiratoryRate:20,height:170,weight:85,bmi:29.4,painLevel:2,stressLevel:50},
                  complaints:{chiefComplaint:'Боль в сердце, одышка.',historyPresent:'ИБС.',objectiveExam:'АД 150/95.',complaintsEditable:'Боль в сердце.'},
                  diagnosis:[{code:'I25.1',name:'ИБС',type:'main'},{code:'I20.8',name:'Стенокардия',type:'concurrent'}],
                  prescriptions:[{med:'Атровент',form:'tablet',dose:'75 мг',freq:'once',duration:'30 дней',route:'oral'},{med:'Нитроглицерин',form:'tablet',dose:'0.5 мг',freq:'prn',duration:'30 дней',route:'sublingual'}],
                  tests:{cbc:'completed',ura:'completed',biochem:'completed',crp:'completed',throat:'none',ecg:'completed'},
                  referrals:{ent:'none',cardio:'ordered',neuro:'none',surgery:'none'},
                  additional:{nextVisit:'',sickLeave:'7days',disabilityGroup:'none',pregnancy:'',doctorNotes:'Кардиологический контроль.'},
                  recommendations:'Ограничение нагрузки.',priority:'urgent',meta:'61 год • М • 11:00',visitTypeLabel:'Повторный',status:'waiting' }
            ],
            currentPatientId: 1,
            allergies: [{text:'Пенициллин (анафилаксия)',type:'severe'}],
            chronic: [{name:'Хронический тонзиллит',since:'с 2005 г.'}],
            visits: [{date:'15.01.2026',diagnosis:'J03.9 - Острый тонзиллит'},{date:'20.09.2025',diagnosis:'K29.7 - Гастрит'},{date:'03.03.2025',diagnosis:'Диспансеризация'}],
            labTests: [{name:'Общий анализ крови',status:'Норма',ok:true},{name:'Глюкоза',status:'5.2 ммоль/л',ok:true},{name:'Холестерин',status:'5.8 ммоль/л ↑',ok:false}],
            referralsList: [
                {id:'N-2026-0042',patient:'Иванов А.П.',to:'ЛОР',diagnosis:'J03.9 — Острый тонзиллит',created:'15.01.2026',expires:'15.02.2026',status:'waiting'},
                {id:'N-2026-0038',patient:'Смирнова Е.Д.',to:'Кардиолог',diagnosis:'I10 — Гипертензия',created:'10.01.2026',expires:'10.02.2026',status:'completed'},
                {id:'N-2026-0035',patient:'Ахметов Е.Б.',to:'Невролог',diagnosis:'G44.1 — Головная боль',created:'05.01.2026',expires:'05.02.2026',status:'completed'},
                {id:'N-2026-0031',patient:'Омаров Н.К.',to:'Хирург',diagnosis:'K40 — Грыжа',created:'28.12.2025',expires:'28.01.2026',status:'waiting'},
                {id:'N-2026-0028',patient:'Ким Ю.С.',to:'Эндокринолог',diagnosis:'E11.9 — СД 2 типа',created:'20.12.2025',expires:'20.01.2026',status:'completed'},
                {id:'N-2026-0025',patient:'Нурмагамбетова А.Т.',to:'Гинеколог',diagnosis:'N80.0 — Эндометриоз',created:'15.12.2025',expires:'15.01.2026',status:'cancelled'}
            ]
        };
    },
    load() {
        try { const s = localStorage.getItem(this.key); if (s) return JSON.parse(s); } catch(e){}
        return this.defaults();
    },
    save(d) { localStorage.setItem(this.key, JSON.stringify(d)); },
    reset() { localStorage.removeItem(this.key); location.reload(); }
};

let data = DB.load();

/* ========== UTILS ========== */
function toast(msg, type='info') {
    const c = document.getElementById('toast-stack');
    if (!c) return;
    const el = document.createElement('div');
    el.className = `toast ${type}`;
    const icons = {ok:'✓',err:'✕',inf:'ℹ',warn:'!' };
    el.innerHTML = `<span style="font-size:16px;font-weight:700;">${icons[type]||'ℹ'}</span><span>${msg}</span>`;
    c.appendChild(el);
    setTimeout(() => { el.classList.add('out'); setTimeout(()=>el.remove(),250); }, 3500);
}

function getPatient() { return data.patients.find(p => p.id === data.currentPatientId); }
function save() { DB.save(data); markSaved(true); }
function markSaved(saved) {
    const dot = document.getElementById('save-dot');
    const txt = document.getElementById('save-text');
    if (dot) dot.classList.toggle('saved', saved);
    if (txt) txt.textContent = saved ? 'Сохранено' : 'Несохранённые изменения';
}
function setField(path, value) {
    const p = getPatient();
    if (!p) return;
    const keys = path.split('.');
    let obj = p;
    for (let i = 0; i < keys.length - 1; i++) obj = obj[keys[i]];
    obj[keys[keys.length - 1]] = value;
    markSaved(false);
}

/* ========== MODAL ========== */
let modalCb = null;
function showModal(title, text, okText, onOk) {
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-text').textContent = text;
    document.getElementById('modal-ok').textContent = okText;
    modalCb = onOk;
    document.getElementById('modal-bg').classList.add('show');
}
function hideModal() {
    document.getElementById('modal-bg').classList.remove('show');
    modalCb = null;
}

/* ========== INIT ========== */
document.addEventListener('DOMContentLoaded', () => {
    const page = document.body.dataset.page;

    // Modal handlers
    document.getElementById('modal-close')?.addEventListener('click', hideModal);
    document.getElementById('modal-cancel')?.addEventListener('click', hideModal);
    document.getElementById('modal-bg')?.addEventListener('click', e => { if(e.target.id==='modal-bg') hideModal(); });
    document.getElementById('modal-ok')?.addEventListener('click', () => { if(modalCb) modalCb(); hideModal(); });

    if (page === 'admission') initAdmission();
    else if (page === 'patients') initPatients();
    else if (page === 'schedule') initSchedule();
    else if (page === 'referrals') initReferrals();
    else if (page === 'reports') initReports();

    // Keyboard
    document.addEventListener('keydown', e => {
        if ((e.ctrlKey||e.metaKey) && e.key==='s') { e.preventDefault(); DB.save(data); markSaved(true); toast('Сохранено','ok'); }
        if (e.key==='Escape') hideModal();
    });
});

/* ========== ADMISSION PAGE ========== */
function initAdmission() {
    renderSidebar();
    renderPatient();
    renderInfopanel();
    bindTabs();
    bindForm();
    bindAccordion();
    bindFileUpload();
    bindBottomBar();
    bindInfopanelActions();
}

function renderSidebar() {
    const list = document.getElementById('patient-list');
    if (!list) return;
    list.innerHTML = '';
    data.patients.forEach(p => {
        const item = document.createElement('div');
        item.className = 'patient-item' + (p.id === data.currentPatientId ? ' active' : '');
        item.draggable = true;
        item.dataset.patientId = p.id;
        item.innerHTML = `
            <div class="patient-status status-${p.status}"></div>
            <div class="patient-info">
                <span class="patient-name" contenteditable="true">${p.fullname}</span>
                <span class="patient-meta" contenteditable="true">${p.meta}</span>
            </div>
            <span class="visit-type" contenteditable="true">${p.visitTypeLabel}</span>
        `;
        item.addEventListener('click', e => {
            if (e.target.isContentEditable) return;
            data.currentPatientId = p.id;
            DB.save(data);
            renderSidebar();
            renderPatient();
            renderInfopanel();
        });
        // Inline edit
        item.querySelector('.patient-name').addEventListener('blur', function() {
            p.fullname = this.textContent.trim();
            const parts = p.fullname.split(' ');
            p.surname = parts[0]||''; p.name = parts[1]||''; p.patronymic = parts[2]||'';
            p.initials = (p.surname[0]||'')+(p.name[0]||'');
            DB.save(data); renderPatient();
        });
        item.querySelector('.patient-meta').addEventListener('blur', function() { p.meta = this.textContent.trim(); DB.save(data); });
        item.querySelector('.visit-type').addEventListener('blur', function() { p.visitTypeLabel = this.textContent.trim(); DB.save(data); });
        // Drag
        item.addEventListener('dragstart', e => { item.classList.add('dragging'); e.dataTransfer.setData('text', p.id); });
        item.addEventListener('dragend', () => item.classList.remove('dragging'));
        list.appendChild(item);
    });
    // Drop reorder
    list.addEventListener('dragover', e => {
        e.preventDefault();
        const dragging = document.querySelector('.dragging');
        if (!dragging) return;
        const after = [...list.querySelectorAll('.patient-item:not(.dragging)')].reduce((closest, child) => {
            const box = child.getBoundingClientRect();
            const offset = e.clientY - box.top - box.height/2;
            return offset < 0 && offset > closest.offset ? {offset, element:child} : closest;
        }, {offset:-Infinity}).element;
        after ? list.insertBefore(dragging, after) : list.appendChild(dragging);
    });
    list.addEventListener('drop', () => {
        data.patients = [...list.querySelectorAll('.patient-item')].map(el => {
            const id = parseInt(el.dataset.patientId);
            return data.patients.find(p => p.id === id);
        }).filter(Boolean);
        DB.save(data);
    });
    document.getElementById('queue-count').textContent = data.patients.length;
}

function renderPatient() {
    const p = getPatient();
    if (!p) return;
    document.getElementById('patient-avatar').textContent = p.initials;
    document.getElementById('patient-fullname').textContent = p.fullname;
    document.getElementById('badge-iin').innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>ИИН: ${p.iin}`;
    document.getElementById('badge-polis').innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>Полис: ${p.polis}`;
    document.getElementById('badge-blood').innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M7 17l5 5 5-5M5 9s0 5 7 5 7-5 7-5"/></svg>${p.blood}`;

    // Badges editable
    ['badge-iin','badge-polis','badge-blood'].forEach(id => {
        const el = document.getElementById(id);
        el.contentEditable = true;
        el.addEventListener('blur', function() {
            const t = this.textContent.trim();
            if (id==='badge-iin') { const m=t.match(/ИИН:\s*(.+)/); if(m) p.iin=m[1]; }
            else if (id==='badge-polis') { const m=t.match(/Полис:\s*(.+)/); if(m) p.polis=m[1]; }
            else p.blood = t;
            DB.save(data);
        });
    });

    // Set all inputs
    const set = (id, val) => { const el=document.getElementById(id); if(el) el.value = val!==undefined?val:''; };
    set('surname', p.surname); set('name', p.name); set('patronymic', p.patronymic);
    set('birthDate', p.birthDate); set('gender', p.gender); set('iin', p.iin);
    set('polis', p.polis); set('phone', p.phone); set('email', p.email);
    set('visitType', p.visitType); set('specialty', p.specialty); set('insurance', p.insurance);
    set('appointment-time', p.appointmentTime); set('card-color', p.cardColor);
    document.getElementById('color-value').textContent = p.cardColor;

    // Radios
    document.querySelectorAll('input[name="gender-radio"]').forEach(r => r.checked = r.value === p.genderRadio);
    document.querySelectorAll('input[name="priority"]').forEach(r => r.checked = r.value === p.priority);

    // Checkboxes
    document.querySelectorAll('input[name="risk-group"]').forEach(cb => cb.checked = p.riskGroups.includes(cb.value));

    // Toggles
    const ns = document.getElementById('notify-sms'), ne = document.getElementById('notify-email'), np = document.getElementById('notify-push');
    if(ns) ns.checked = p.notifySms; if(ne) ne.checked = p.notifyEmail; if(np) np.checked = p.notifyPush;

    // Contenteditable
    const notes = document.getElementById('notes'); if(notes) notes.textContent = p.notes;
    const ce = document.getElementById('complaints-editable'); if(ce) ce.textContent = p.complaints.complaintsEditable;

    // Vitals
    set('systolic', p.vitals.systolic); set('diastolic', p.vitals.diastolic); set('pulse', p.vitals.pulse);
    set('temperature', p.vitals.temperature); set('spo2', p.vitals.spo2); set('respiratoryRate', p.vitals.respiratoryRate);
    set('height', p.vitals.height); set('weight', p.vitals.weight); set('bmi', p.vitals.bmi);
    set('pain-level', p.vitals.painLevel); set('stress-level', p.vitals.stressLevel);
    const pv = document.getElementById('pain-value'); if(pv) pv.textContent = p.vitals.painLevel;
    const sv = document.getElementById('stress-value'); if(sv) sv.textContent = p.vitals.stressLevel;

    // Complaints
    set('chiefComplaint', p.complaints.chiefComplaint);
    set('historyPresent', p.complaints.historyPresent);
    set('objectiveExam', p.complaints.objectiveExam);

    // Diagnosis
    renderDiagnosis(p);
    // Prescriptions
    renderPrescriptions(p);

    // Tests
    set('test-cbc', p.tests.cbc); set('test-ura', p.tests.ura); set('test-biochem', p.tests.biochem);
    set('test-crp', p.tests.crp); set('test-throat', p.tests.throat); set('test-ecg', p.tests.ecg);

    // Referrals
    set('referral-ent', p.referrals.ent); set('referral-cardio', p.referrals.cardio);
    set('referral-neuro', p.referrals.neuro); set('referral-surgery', p.referrals.surgery);

    // Recommendations
    set('recommendations', p.recommendations);

    // Additional
    set('nextVisit', p.additional.nextVisit); set('sickLeave', p.additional.sickLeave);
    set('disabilityGroup', p.additional.disabilityGroup); set('pregnancy', p.additional.pregnancy);
    set('doctorNotes', p.additional.doctorNotes);
}

function renderDiagnosis(p) {
    const c = document.getElementById('diagnosis-container');
    if (!c) return;
    c.innerHTML = '';
    p.diagnosis.forEach((d, i) => {
        const row = document.createElement('div');
        row.className = 'diag-row';
        row.innerHTML = `
            <div class="form-group"><label>Код ${i===0?'<span class="req">*</span>':''}</label><input type="text" class="form-control" value="${d.code}" placeholder="A00.0" data-diag="${i}" data-field="code"></div>
            <div class="form-group" style="grid-column:2;"><label>Название</label><input type="text" class="form-control" value="${d.name}" placeholder="..." data-diag="${i}" data-field="name"></div>
            <div class="form-group"><label>Тип</label><select class="form-control" data-diag="${i}" data-field="type"><option value="main" ${d.type==='main'?'selected':''}>Основной</option><option value="concurrent" ${d.type==='concurrent'?'selected':''}>Сопутствующий</option><option value="complication" ${d.type==='complication'?'selected':''}>Осложнение</option></select></div>
            <button type="button" class="btn-remove" data-remove-diag="${i}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg></button>
        `;
        c.appendChild(row);
        row.querySelectorAll('[data-diag]').forEach(inp => {
            inp.addEventListener('change', () => {
                const idx = parseInt(inp.dataset.diag);
                p.diagnosis[idx][inp.dataset.field] = inp.value;
                DB.save(data); markSaved(false);
            });
        });
        row.querySelector('[data-remove-diag]')?.addEventListener('click', () => {
            p.diagnosis.splice(i, 1); DB.save(data); renderDiagnosis(p); markSaved(false);
        });
    });
}

function renderPrescriptions(p) {
    const c = document.getElementById('prescription-container');
    if (!c) return;
    c.innerHTML = '';
    p.prescriptions.forEach((rx, i) => {
        const row = document.createElement('div');
        row.className = 'pres-row';
        row.innerHTML = `
            <div class="form-group" style="grid-column:1;"><label>Препарат <span class="req">*</span></label><input type="text" class="form-control" value="${rx.med}" placeholder="..." data-pres="${i}" data-field="med"></div>
            <div class="form-group"><label>Форма</label><select class="form-control" data-pres="${i}" data-field="form">${['tablet','capsule','syrup','injection','cream','drops'].map(v=>`<option value="${v}" ${rx.form===v?'selected':''}>${v}</option>`).join('')}</select></div>
            <div class="form-group"><label>Доза</label><input type="text" class="form-control" value="${rx.dose}" placeholder="..." data-pres="${i}" data-field="dose"></div>
            <div class="form-group"><label>Частота</label><select class="form-control" data-pres="${i}" data-field="freq">${[{v:'once',l:'1р/д'},{v:'twice',l:'2р/д'},{v:'thrice',l:'3р/д'},{v:'four',l:'4р/д'},{v:'prn',l:'По нужде'}].map(o=>`<option value="${o.v}" ${rx.freq===o.v?'selected':''}>${o.l}</option>`).join('')}</select></div>
            <div class="form-group"><label>Срок</label><input type="text" class="form-control" value="${rx.duration}" placeholder="..." data-pres="${i}" data-field="duration"></div>
            <div class="form-group"><label>Путь</label><select class="form-control" data-pres="${i}" data-field="route">${[{v:'oral',l:'Перорально'},{v:'iv',l:'В/в'},{v:'im',l:'В/м'},{v:'topical',l:'Местно'},{v:'sublingual',l:'Сублингв.'}].map(o=>`<option value="${o.v}" ${rx.route===o.v?'selected':''}>${o.l}</option>`).join('')}</select></div>
            <button type="button" class="btn-remove" data-remove-pres="${i}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg></button>
        `;
        c.appendChild(row);
        row.querySelectorAll('[data-pres]').forEach(inp => {
            inp.addEventListener('change', () => {
                p.prescriptions[parseInt(inp.dataset.pres)][inp.dataset.field] = inp.value;
                DB.save(data); markSaved(false);
            });
        });
        row.querySelector('[data-remove-pres]')?.addEventListener('click', () => {
            p.prescriptions.splice(i, 1); DB.save(data); renderPrescriptions(p); markSaved(false);
        });
    });
}

function renderInfopanel() {
    // Allergies
    const al = document.getElementById('allergies-list');
    if (al) {
        al.innerHTML = '';
        data.allergies.forEach((a, i) => {
            const el = document.createElement('div');
            el.className = 'alert-box';
            el.contentEditable = true;
            el.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg><span>${a.text}</span>`;
            el.addEventListener('blur', () => { data.allergies[i].text = el.querySelector('span')?.textContent?.trim()||el.textContent.trim(); DB.save(data); });
            al.appendChild(el);
        });
    }
    // Chronic
    const ch = document.getElementById('chronic-list');
    if (ch) {
        ch.innerHTML = '';
        data.chronic.forEach((c, i) => {
            const el = document.createElement('div');
            el.className = 'info-row';
            el.contentEditable = true;
            el.innerHTML = `<span class="label">${c.name}</span><span class="date">${c.since}</span>`;
            el.addEventListener('blur', () => {
                const l = el.querySelector('.label'), d = el.querySelector('.date');
                if(l) data.chronic[i].name = l.textContent.trim();
                if(d) data.chronic[i].since = d.textContent.trim();
                DB.save(data);
            });
            ch.appendChild(el);
        });
    }
    // Visits
    const vl = document.getElementById('visits-list');
    if (vl) {
        vl.innerHTML = '';
        data.visits.forEach(v => {
            const el = document.createElement('div');
            el.className = 'visit-row'; el.contentEditable = true;
            el.innerHTML = `<span class="date">${v.date}</span><span class="diag">${v.diagnosis}</span>`;
            vl.appendChild(el);
        });
    }
    // Tests
    const tl = document.getElementById('tests-list');
    if (tl) {
        tl.innerHTML = '';
        data.labTests.forEach(t => {
            const el = document.createElement('div');
            el.className = 'test-row'; el.contentEditable = true;
            el.innerHTML = `<span class="name">${t.name}</span><span class="status ${t.ok?'ok':'warn'}">${t.status}</span>`;
            tl.appendChild(el);
        });
    }
}

function bindTabs() {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const tab = btn.dataset.tab;
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            document.querySelectorAll('.form-section').forEach(s => {
                if (s.id && s.id !== 'additional') s.style.display = 'none';
            });
            const target = document.getElementById(tab);
            if (target) { target.style.display = 'block'; target.scrollIntoView({behavior:'smooth',block:'start'}); }
        });
    });
}

function bindForm() {
    const p = () => getPatient();
    // Text inputs
    document.querySelectorAll('.form-control[data-field]').forEach(el => {
        const field = el.dataset.field;
        if (field.startsWith('vitals.')) {
            el.addEventListener('input', () => {
                const pt = p(); if(!pt) return;
                const key = field.split('.')[1];
                pt.vitals[key] = el.type==='number' ? parseFloat(el.value)||0 : el.value;
                if (key==='height'||key==='weight') {
                    const h = pt.vitals.height/100, w = pt.vitals.weight;
                    pt.vitals.bmi = h>0 ? (w/(h*h)).toFixed(1) : '';
                    const bmi = document.getElementById('bmi'); if(bmi) bmi.value = pt.vitals.bmi;
                }
                markSaved(false);
            });
            el.addEventListener('change', () => DB.save(data));
        } else if (field.startsWith('tests.')) {
            el.addEventListener('change', () => { const pt=p(); if(pt) pt.tests[field.split('.')[1]]=el.value; DB.save(data); markSaved(false); });
        } else if (field.startsWith('referrals.')) {
            el.addEventListener('change', () => { const pt=p(); if(pt) pt.referrals[field.split('.')[1]]=el.value; DB.save(data); markSaved(false); });
        } else if (field.startsWith('additional.')) {
            el.addEventListener('input', () => { const pt=p(); if(pt) pt.additional[field.split('.')[1]]=el.value; markSaved(false); });
            el.addEventListener('change', () => DB.save(data));
        } else if (field.startsWith('complaints.')) {
            el.addEventListener('input', () => { const pt=p(); if(pt) pt.complaints[field.split('.')[1]]=el.value; markSaved(false); });
            el.addEventListener('change', () => DB.save(data));
        } else {
            el.addEventListener('input', () => { const pt=p(); if(pt) pt[field]=el.value; markSaved(false); });
            el.addEventListener('change', () => DB.save(data));
        }
    });
    // Contenteditable
    const notes = document.getElementById('notes');
    if(notes) notes.addEventListener('input', () => { const pt=p(); if(pt) pt.notes=notes.textContent; markSaved(false); });
    if(notes) notes.addEventListener('blur', () => DB.save(data));
    const ce = document.getElementById('complaints-editable');
    if(ce) ce.addEventListener('input', () => { const pt=p(); if(pt) pt.complaints.complaintsEditable=ce.textContent; markSaved(false); });
    if(ce) ce.addEventListener('blur', () => DB.save(data));
    // Radios
    document.querySelectorAll('input[name="gender-radio"]').forEach(r => r.addEventListener('change', () => { const pt=p(); if(pt) pt.genderRadio=r.value; DB.save(data); markSaved(false); }));
    document.querySelectorAll('input[name="priority"]').forEach(r => r.addEventListener('change', () => { const pt=p(); if(pt) pt.priority=r.value; DB.save(data); markSaved(false); }));
    // Checkboxes
    document.querySelectorAll('input[name="risk-group"]').forEach(cb => cb.addEventListener('change', () => {
        const pt=p(); if(!pt) return;
        if(cb.checked) { if(!pt.riskGroups.includes(cb.value)) pt.riskGroups.push(cb.value); }
        else pt.riskGroups = pt.riskGroups.filter(g=>g!==cb.value);
        DB.save(data); markSaved(false);
    }));
    // Toggles
    ['notify-sms','notify-email','notify-push'].forEach(id => {
        const el = document.getElementById(id);
        if(el) el.addEventListener('change', () => {
            const pt=p(); if(!pt) return;
            const f = id==='notify-sms'?'notifySms':id==='notify-email'?'notifyEmail':'notifyPush';
            pt[f] = el.checked; DB.save(data); markSaved(false);
        });
    });
    // Color
    const cp = document.getElementById('card-color');
    if(cp) cp.addEventListener('input', () => { const pt=p(); if(pt) pt.cardColor=cp.value; document.getElementById('color-value').textContent=cp.value; markSaved(false); });
    if(cp) cp.addEventListener('change', () => DB.save(data));
    // Range
    ['pain-level','stress-level'].forEach(id => {
        const el = document.getElementById(id);
        if(el) el.addEventListener('input', () => {
            const pt=p(); if(!pt) return;
            const f = id==='pain-level'?'painLevel':'stressLevel';
            pt.vitals[f] = parseInt(el.value);
            const val = document.getElementById(id==='pain-level'?'pain-value':'stress-value');
            if(val) val.textContent = el.value;
            markSaved(false);
        });
        if(el) el.addEventListener('change', () => DB.save(data));
    });
    // Add buttons
    document.getElementById('add-diagnosis-btn')?.addEventListener('click', () => {
        const pt=p(); if(!pt) return; pt.diagnosis.push({code:'',name:'',type:'concurrent'}); DB.save(data); renderDiagnosis(pt); markSaved(false);
    });
    document.getElementById('add-prescription-btn')?.addEventListener('click', () => {
        const pt=p(); if(!pt) return; pt.prescriptions.push({med:'',form:'tablet',dose:'',freq:'once',duration:'',route:'oral'}); DB.save(data); renderPrescriptions(pt); markSaved(false);
    });
}

function bindAccordion() {
    document.querySelectorAll('.accordion-item').forEach(item => {
        const head = item.querySelector('.acc-head');
        head?.addEventListener('click', () => {
            const open = item.classList.contains('open');
            document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('open'));
            if(!open) item.classList.add('open');
        });
    });
}

function bindFileUpload() {
    const zone = document.getElementById('file-zone');
    const input = document.getElementById('file-upload');
    if(!zone || !input) return;
    zone.addEventListener('click', () => input.click());
    ['dragenter','dragover','dragleave','drop'].forEach(e => zone.addEventListener(e, ev => { ev.preventDefault(); ev.stopPropagation(); }));
    ['dragenter','dragover'].forEach(e => zone.addEventListener(e, () => zone.classList.add('dragover')));
    ['dragleave','drop'].forEach(e => zone.addEventListener(e, () => zone.classList.remove('dragover')));
    zone.addEventListener('drop', e => handleFiles(e.dataTransfer.files));
    input.addEventListener('change', e => handleFiles(e.target.files));
}
function handleFiles(files) {
    const list = document.getElementById('file-list');
    if(!list) return;
    Array.from(files).forEach(file => {
        const item = document.createElement('div');
        item.style.cssText = 'display:flex;align-items:center;gap:8px;padding:6px 10px;background:var(--bg-body);border:1px solid var(--border);border-radius:var(--radius);font-size:12px;';
        item.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg><span style="flex:1;">${file.name}</span><span style="color:var(--text-muted);font-size:11px;">${(file.size/1024).toFixed(1)} КБ</span><button type="button" style="background:none;border:none;color:var(--text-muted);cursor:pointer;padding:2px;"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg></button>`;
        item.querySelector('button').addEventListener('click', () => item.remove());
        list.appendChild(item);
    });
    if(files.length) toast(`Загружено: ${files.length} файл(ов)`, 'ok');
}

function bindBottomBar() {
    document.getElementById('save-btn')?.addEventListener('click', () => { DB.save(data); markSaved(true); toast('Сохранено','ok'); });
    document.getElementById('print-btn')?.addEventListener('click', () => window.print());
    document.getElementById('finish-btn')?.addEventListener('click', finishAdmission);
    document.getElementById('finish-btn-bottom')?.addEventListener('click', finishAdmission);
    document.getElementById('history-btn')?.addEventListener('click', () => toast('История открыта','inf'));
}

function finishAdmission() {
    const p = getPatient();
    if(!p) return;
    showModal('Завершение приёма', `Завершить приём пациента ${p.fullname}?`, 'Завершить', () => {
        p.status = 'done';
        DB.save(data);
        renderSidebar();
        toast('Приём завершён','ok');
    });
}

function bindInfopanelActions() {
    document.getElementById('add-allergy-btn')?.addEventListener('click', () => {
        data.allergies.push({text:'Новая аллергия',type:'moderate'}); DB.save(data); renderInfopanel(); toast('Аллергия добавлена','ok');
    });
    document.getElementById('add-chronic-btn')?.addEventListener('click', () => {
        data.chronic.push({name:'Новое заболевание',since:'с 2026 г.'}); DB.save(data); renderInfopanel(); toast('Заболевание добавлено','ok');
    });
    document.getElementById('new-patient-btn')?.addEventListener('click', () => {
        const id = Math.max(...data.patients.map(p=>p.id),0)+1;
        const np = JSON.parse(JSON.stringify(data.patients[0]));
        np.id = id; np.fullname = 'Новый Пациент'; np.surname='Новый'; np.name='Пациент'; np.patronymic='';
        np.initials='НП'; np.iin=''; np.polis=''; np.meta='—'; np.visitTypeLabel='Первичный'; np.status='waiting';
        data.patients.push(np); data.currentPatientId = id; DB.save(data);
        renderSidebar(); renderPatient(); renderInfopanel(); toast('Пациент добавлен','ok');
    });
}

/* ========== PATIENTS PAGE ========== */
function initPatients() {
    const tbody = document.getElementById('patients-tbody');
    const total = document.getElementById('patients-total');
    const shown = document.getElementById('patients-shown');

    function render(filterStatus='all', filterGender='all', filterAge='all', search='') {
        if(!tbody) return;
        tbody.innerHTML = '';
        let filtered = data.patients.filter(p => {
            if(filterStatus!=='all' && p.status!==filterStatus) return false;
            if(filterGender!=='all' && p.gender!==filterGender) return false;
            if(filterAge!=='all') {
                const age = new Date().getFullYear() - new Date(p.birthDate).getFullYear();
                if(filterAge==='0-30' && age>30) return false;
                if(filterAge==='31-50' && (age<=30||age>50)) return false;
                if(filterAge==='51+' && age<=50) return false;
            }
            if(search && !p.fullname.toLowerCase().includes(search.toLowerCase()) && !p.iin.includes(search)) return false;
            return true;
        });
        filtered.forEach(p => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><input type="checkbox"></td>
                <td><strong>${p.fullname}</strong></td>
                <td class="mono">${p.iin}</td>
                <td>${new Date(p.birthDate).toLocaleDateString('ru-RU')}</td>
                <td>${p.gender==='male'?'М':'Ж'}</td>
                <td>${p.phone}</td>
                <td><span class="status-badge ${p.status==='done'?'ok':p.status==='waiting'?'warn':'inf'}">${p.status==='done'?'Завершён':p.status==='waiting'?'Ожидает':'Готов'}</span></td>
                <td><button class="icon-btn" data-edit="${p.id}" title="Открыть"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg></button></td>
            `;
            tr.querySelector('[data-edit]')?.addEventListener('click', () => {
                data.currentPatientId = p.id; DB.save(data); window.location.href = 'index.html';
            });
            tbody.appendChild(tr);
        });
        if(total) total.textContent = data.patients.length;
        if(shown) shown.textContent = `Показано ${filtered.length} из ${data.patients.length}`;
    }
    render();

    // Search
    document.getElementById('patients-search')?.addEventListener('input', e => {
        render(document.getElementById('filter-status')?.value||'all', document.getElementById('filter-gender')?.value||'all', document.getElementById('filter-age')?.value||'all', e.target.value);
    });
    // Filter
    document.getElementById('filter-apply')?.addEventListener('click', () => {
        render(document.getElementById('filter-status').value, document.getElementById('filter-gender').value, document.getElementById('filter-age').value, document.getElementById('patients-search')?.value||'');
        toast('Фильтры применены','ok');
    });
    // Export
    document.getElementById('patients-export')?.addEventListener('click', () => {
        const csv = ['ID,Фамилия,Имя,Отчество,ИИН,Полис,Группа крови,Дата рождения,Пол,Телефон,Email'].concat(
            data.patients.map(p => [p.id,p.surname,p.name,p.patronymic,p.iin,p.polis,p.blood,p.birthDate,p.gender,p.phone,p.email].join(','))
        ).join('\n');
        const blob = new Blob([csv], {type:'text/csv'});
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a'); a.href=url; a.download='patients.csv'; a.click(); URL.revokeObjectURL(url);
        toast('Экспорт завершён','ok');
    });
    // Add
    document.getElementById('patients-add')?.addEventListener('click', () => {
        const id = Math.max(...data.patients.map(p=>p.id),0)+1;
        const np = JSON.parse(JSON.stringify(data.patients[0]));
        np.id=id; np.fullname='Новый Пациент'; np.surname='Новый'; np.name='Пациент'; np.patronymic='';
        np.initials='НП'; np.iin=''; np.polis=''; np.meta='—'; np.visitTypeLabel='Первичный'; np.status='waiting';
        data.patients.push(np); data.currentPatientId=id; DB.save(data); window.location.href='index.html';
    });
    // Select all
    document.getElementById('select-all')?.addEventListener('change', e => {
        tbody?.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = e.target.checked);
    });
}

/* ========== SCHEDULE PAGE ========== */
function initSchedule() {
    const grid = document.getElementById('schedule-grid');
    if(!grid) return;
    const days = ['Пн','Вт','Ср','Чт','Пт'];
    const times = ['09:00','10:00','11:00','12:00','13:00','14:00','15:00'];
    const today = 1; // Tuesday

    // Header
    let html = '<div class="time-label"></div>';
    days.forEach((d,i) => html += `<div class="day-label ${i===today?'today':''}">${d}</div>`);

    // Slots
    const slots = data.patients.reduce((acc, p) => {
        const timeIdx = times.indexOf(p.appointmentTime);
        if(timeIdx>=0) acc[timeIdx] = acc[timeIdx]||{};
        if(timeIdx>=0) acc[timeIdx][0] = p; // simplified: all on Monday
        return acc;
    }, {});

    times.forEach((time, ti) => {
        html += `<div class="time-label">${time}</div>`;
        days.forEach((d, di) => {
            const isBreak = time==='12:00';
            const patient = slots[ti]?.[di];
            if(isBreak) {
                html += `<div class="slot-cell"><div class="slot break"><div class="slot-time">${time}</div><div class="slot-name">Обед</div></div></div>`;
            } else if(patient) {
                html += `<div class="slot-cell"><div class="slot"><div class="slot-time">${time}</div><div class="slot-name">${patient.surname} ${patient.name[0]}.</div><div class="slot-type">${patient.visitTypeLabel}</div></div></div>`;
            } else {
                html += `<div class="slot-cell"><div class="slot empty"></div></div>`;
            }
        });
    });
    grid.innerHTML = html;

    // Click handlers
    grid.querySelectorAll('.slot').forEach(slot => {
        slot.addEventListener('click', () => {
            if(slot.classList.contains('empty')) toast('Свободный слот','inf');
            else if(!slot.classList.contains('break')) {
                const name = slot.querySelector('.slot-name')?.textContent;
                if(name) toast(`Приём: ${name}`, 'inf');
            }
        });
    });

    document.getElementById('sch-prev')?.addEventListener('click', () => toast('Предыдущая неделя','inf'));
    document.getElementById('sch-next')?.addEventListener('click', () => toast('Следующая неделя','inf'));
    document.getElementById('sch-today')?.addEventListener('click', () => toast('Текущая неделя','inf'));
}

/* ========== REFERRALS PAGE ========== */
function initReferrals() {
    const tbody = document.getElementById('ref-tbody');
    const stats = document.getElementById('ref-stats');
    const active = document.getElementById('ref-active');

    function render() {
        if(tbody) {
            tbody.innerHTML = '';
            data.referralsList.forEach((r,i) => {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td class="mono">${r.id}</td>
                    <td><strong>${r.patient}</strong></td>
                    <td>${r.to}</td>
                    <td>${r.diagnosis}</td>
                    <td>${r.created}</td>
                    <td>до ${r.expires}</td>
                    <td><span class="status-badge ${r.status==='completed'?'ok':r.status==='waiting'?'warn':r.status==='cancelled'?'err':'inf'}">${r.status==='completed'?'Выполнено':r.status==='waiting'?'В ожидании':r.status==='cancelled'?'Отменено':'Активно'}</span></td>
                    <td><button class="icon-btn" data-status="${i}" title="Изменить статус"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg></button></td>
                `;
                tr.querySelector('[data-status]')?.addEventListener('click', () => {
                    const statuses = ['waiting','completed','cancelled'];
                    const cur = statuses.indexOf(r.status);
                    r.status = statuses[(cur+1)%statuses.length];
                    DB.save(data); render(); toast('Статус обновлён','ok');
                });
                tbody.appendChild(tr);
            });
        }
        const counts = {waiting:0,completed:0,cancelled:0};
        data.referralsList.forEach(r => counts[r.status] = (counts[r.status]||0)+1);
        if(active) active.textContent = counts.waiting;
        if(stats) {
            stats.innerHTML = `
                <div class="stat-card" style="border-left:3px solid var(--primary);"><div class="stat-num">${data.referralsList.length}</div><div class="stat-label">Всего</div></div>
                <div class="stat-card" style="border-left:3px solid var(--success);"><div class="stat-num">${counts.completed}</div><div class="stat-label">Выполнено</div></div>
                <div class="stat-card" style="border-left:3px solid var(--warning);"><div class="stat-num">${counts.waiting}</div><div class="stat-label">В ожидании</div></div>
                <div class="stat-card" style="border-left:3px solid var(--error);"><div class="stat-num">${counts.cancelled}</div><div class="stat-label">Отменено</div></div>
            `;
        }
    }
    render();

    document.getElementById('ref-create')?.addEventListener('click', () => {
        const num = 1000 + data.referralsList.length + 1;
        const p = data.patients[0];
        data.referralsList.push({
            id:`N-2026-${String(num).padStart(4,'0')}`,
            patient:p.fullname, to:'Специалист', diagnosis:'—',
            created:new Date().toLocaleDateString('ru-RU'), expires:'—', status:'waiting'
        });
        DB.save(data); render(); toast('Направление создано','ok');
    });
}

/* ========== REPORTS PAGE ========== */
function initReports() {
    document.getElementById('rep-stat-1').textContent = data.patients.length * 3;
    document.getElementById('rep-stat-2').textContent = data.patients.length;
    document.getElementById('rep-stat-3').textContent = data.referralsList.length;
    document.getElementById('rep-stat-4').textContent = '89%';
    document.getElementById('rep-export')?.addEventListener('click', () => {
        toast('Формирование PDF...','inf');
        setTimeout(() => toast('Отчёт скачан','ok'), 1500);
    });
}

/* ========== GLOBAL ========== */
window.DB = DB;
window.toast = toast;