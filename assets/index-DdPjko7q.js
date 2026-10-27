(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={currentAcademicYear:`2026–2027 o'quv yili`,currentDateText:`Bugun, 15 oktyabr 2026`,leads:[{id:`lead-1`,name:`Aziza Karimova`,grade:`3-sinf`,parent:`Ota: Dilshod Karimov`,phone:`+998 90 000 00 01`,source:`Instagram`,sourceColor:`pink`,date:`15 okt`,manager:`SN`,stage:`yangi`,note:`Matematika chuqurlashtirilgan guruhga qiziqmoqda`},{id:`lead-2`,name:`Sardor Yusupov`,grade:`1-sinf`,parent:`Ona: Nilufar Yusupova`,phone:`+998 91 000 00 02`,source:`Telegram`,sourceColor:`blue`,date:`15 okt`,manager:`SN`,stage:`yangi`,note:`Tayyorlov guruhida o'qigan`},{id:`lead-3`,name:`Madina Rahimova`,grade:`5-sinf`,parent:`Ona: Gulnora Rahimova`,phone:`+998 93 000 00 03`,source:`Tavsiya`,sourceColor:`green`,date:`14 okt`,manager:`BA`,stage:`yangi`,note:`Ingliz tili imtihonidan o'tishi kerak`},{id:`lead-4`,name:`Jasur Toshmatov`,grade:`7-sinf`,parent:`Ota: Anvar Toshmatov`,phone:`+998 94 000 00 04`,source:`Instagram`,sourceColor:`pink`,date:`14 okt`,manager:`BA`,stage:`yangi`,note:`Dasturlash to'garagiga qatnashish niyati bor`},{id:`lead-5`,name:`Omina Qodirova`,grade:`2-sinf`,parent:`Ona: Zilola Qodirova`,phone:`+998 90 000 00 05`,source:`Sayt`,sourceColor:`orange`,date:`13 okt`,manager:`SN`,stage:`boglanildi`,note:`Maktab binosini ko'rishga kelmoqchi`},{id:`lead-6`,name:`Behruz Aliyev`,grade:`4-sinf`,parent:`Ota: Rustam Aliyev`,phone:`+998 97 000 00 06`,source:`Telegram`,sourceColor:`blue`,date:`12 okt`,manager:`BA`,stage:`boglanildi`,note:`To'lov shartlari bo'yicha ma'lumot berildi`},{id:`lead-7`,name:`Laylo Sodiqova`,grade:`1-sinf`,parent:`Ona: Feruza Sodiqova`,phone:`+998 99 000 00 07`,source:`Tavsiya`,sourceColor:`green`,date:`12 okt`,manager:`SN`,stage:`boglanildi`,note:`Shartnoma loyihasi yuborildi`},{id:`lead-8`,name:`Umar Nazarov`,grade:`6-sinf`,parent:`Ota: Botir Nazarov`,phone:`+998 90 000 00 08`,source:`Instagram`,sourceColor:`pink`,date:`10 okt`,manager:`BA`,stage:`suhbat`,note:`Psixolog suhbati 18-oktabr soat 14:00 ga belgilangan`},{id:`lead-9`,name:`Sevinch Xolmatova`,grade:`3-sinf`,parent:`Ona: Dilfuza Xolmatova`,phone:`+998 91 000 00 09`,source:`Tavsiya`,sourceColor:`green`,date:`9 okt`,manager:`SN`,stage:`suhbat`,note:`Mantiqiy test natijasi: 92/100`},{id:`lead-10`,name:`Abdulloh Ergashev`,grade:`8-sinf`,parent:`Ota: Sherzod Ergashev`,phone:`+998 93 000 00 10`,source:`Telegram`,sourceColor:`blue`,date:`8 okt`,manager:`SN`,stage:`suhbat`,note:`Fizika-matematika yo'nalishi bo'yicha suhbat`},{id:`lead-11`,name:`Nodira Ismoilova`,grade:`2-sinf`,parent:`Ona: Mohira Ismoilova`,phone:`+998 94 000 00 11`,source:`Tavsiya`,sourceColor:`green`,date:`7 okt`,manager:`SN`,stage:`shartnoma`,note:`Barcha hujjatlar topshirildi, 1-to'lov kutilmoqda`},{id:`lead-12`,name:`Islom Haydarov`,grade:`5-sinf`,parent:`Ota: Ulug'bek Haydarov`,phone:`+998 97 000 00 12`,source:`Instagram`,sourceColor:`pink`,date:`6 okt`,manager:`BA`,stage:`shartnoma`,note:`Shartnoma 2 nusxada imzolandi`},{id:`lead-13`,name:`Zuhra Malikova`,grade:`1-sinf`,parent:`Ona: Nargiza Malikova`,phone:`+998 90 123 45 67`,source:`Sayt`,sourceColor:`orange`,date:`5 okt`,manager:`SN`,stage:`shartnoma`,note:`Tayyorgarlik kursi yakunlangan`},{id:`lead-14`,name:`Kamronbek Valiyev`,grade:`4-sinf`,parent:`Ota: Alisher Valiyev`,phone:`+998 93 456 78 90`,source:`Telegram`,sourceColor:`blue`,date:`4 okt`,manager:`BA`,stage:`boglanildi`,note:`Qayta qo'ng'iroq 22-oktabr`}],students:[{id:`std-1`,initials:`AK`,name:`Aziza Karimova`,parentName:`Dilshod Karimov`,parentRole:`Ota`,motherName:`Madina Karimova`,sinf:`3-A`,gradeLevel:`3-sinf`,phone:`+998 90 000 00 01`,photo:`./avatars/student1.jpg`,paymentStatus:`To'liq to'lagan`,paymentStatusCode:`paid`,attendance:`96%`,birthDate:`12.03.2017`,homeroomTeacher:`Nodira Saidova`,docs:{birthCertificate:!0,medicalReport:!0,contract:!0},monthlyFee:486e4,annualFee:486e5,paidAmount:486e5,debtAmount:0},{id:`std-2`,initials:`AT`,name:`Ahma Texles`,parentName:`Dilshod Karimov`,parentRole:`Ota`,motherName:`Nilufar Temirova`,sinf:`3-A`,gradeLevel:`3-sinf`,phone:`+998 91 000 00 02`,photo:`./avatars/student2.jpg`,paymentStatus:`To'liq to'lagan`,paymentStatusCode:`partial`,attendance:`92%`,birthDate:`05.08.2017`,homeroomTeacher:`Nodira Saidova`,docs:{birthCertificate:!0,medicalReport:!0,contract:!0},monthlyFee:486e4,annualFee:486e5,paidAmount:3645e4,debtAmount:1215e4},{id:`std-3`,initials:`RK`,name:`Reysa Karimova`,parentName:`Dilshod Karimov`,parentRole:`Ota`,motherName:`Gulnora Karimova`,sinf:`3-A`,gradeLevel:`3-sinf`,phone:`+998 93 000 00 03`,photo:`./avatars/student3.jpg`,paymentStatus:`To'liq to'lagan`,paymentStatusCode:`partial`,attendance:`98%`,birthDate:`21.11.2017`,homeroomTeacher:`Nodira Saidova`,docs:{birthCertificate:!0,medicalReport:!0,contract:!0},monthlyFee:486e4,annualFee:486e5,paidAmount:243e5,debtAmount:243e5},{id:`std-4`,initials:`AK`,name:`Aziza Karimova`,parentName:`Dilshod Karimov`,parentRole:`Ota`,motherName:`Nargiza Karimova`,sinf:`3-A`,gradeLevel:`3-sinf`,phone:`+998 94 000 00 04`,photo:`./avatars/student4.jpg`,paymentStatus:`To'liq to'lagan`,paymentStatusCode:`debt`,attendance:`84%`,birthDate:`14.06.2017`,homeroomTeacher:`Nodira Saidova`,docs:{birthCertificate:!0,medicalReport:!1,contract:!0},monthlyFee:486e4,annualFee:486e5,paidAmount:0,debtAmount:486e5},{id:`std-5`,initials:`OQ`,name:`Omina Qodirova`,parentName:`Zilola Qodirova`,parentRole:`Ona`,motherName:`Zilola Qodirova`,sinf:`2-A`,gradeLevel:`2-sinf`,phone:`+998 90 000 00 05`,paymentStatus:`To'langan`,paymentStatusCode:`paid`,attendance:`100%`,birthDate:`09.04.2018`,homeroomTeacher:`Zilola Rahimova`,docs:{birthCertificate:!0,medicalReport:!0,contract:!0},monthlyFee:3e6,paidAmount:3e6,debtAmount:0},{id:`std-6`,initials:`BA`,name:`Behruz Aliyev`,parentName:`Rustam Aliyev`,parentRole:`Ota`,motherName:`Nasiba Aliyeva`,sinf:`4-B`,gradeLevel:`4-sinf`,phone:`+998 97 000 00 06`,paymentStatus:`Qisman`,paymentStatusCode:`partial`,attendance:`90%`,birthDate:`18.01.2016`,homeroomTeacher:`Gulnora Tursunova`,docs:{birthCertificate:!0,medicalReport:!0,contract:!0},monthlyFee:3e6,paidAmount:2e6,debtAmount:1e6},{id:`std-7`,initials:`LS`,name:`Laylo Sodiqova`,parentName:`Feruza Sodiqova`,parentRole:`Ona`,motherName:`Feruza Sodiqova`,sinf:`1-A`,gradeLevel:`1-sinf`,phone:`+998 99 000 00 07`,paymentStatus:`To'langan`,paymentStatusCode:`paid`,attendance:`95%`,birthDate:`30.09.2019`,homeroomTeacher:`Nodira Saidova`,docs:{birthCertificate:!0,medicalReport:!0,contract:!0},monthlyFee:3e6,paidAmount:3e6,debtAmount:0},{id:`std-8`,initials:`UN`,name:`Umar Nazarov`,parentName:`Botir Nazarov`,parentRole:`Ota`,motherName:`Gulchehra Nazarova`,sinf:`6-A`,gradeLevel:`6-sinf`,phone:`+998 90 000 00 08`,paymentStatus:`Qarzdor`,paymentStatusCode:`debt`,attendance:`81%`,birthDate:`02.02.2014`,homeroomTeacher:`Laylo Qodirova`,docs:{birthCertificate:!0,medicalReport:!0,contract:!0},monthlyFee:35e5,paidAmount:0,debtAmount:35e5},{id:`std-9`,initials:`TM`,name:`Temur Mahmudov`,parentName:`Farrux Mahmudov`,parentRole:`Ota`,motherName:`Dildora Mahmudova`,sinf:`1-A`,gradeLevel:`1-sinf`,phone:`+998 93 111 22 33`,paymentStatus:`Qisman`,paymentStatusCode:`partial`,attendance:`94%`,birthDate:`15.04.2019`,homeroomTeacher:`Nodira Saidova`,docs:{birthCertificate:!0,medicalReport:!0,contract:!0},monthlyFee:3e6,paidAmount:15e5,debtAmount:15e5},{id:`std-10`,initials:`DE`,name:`Diyora Ergasheva`,parentName:`Shahnoza Ergasheva`,parentRole:`Ona`,motherName:`Shahnoza Ergasheva`,sinf:`1-A`,gradeLevel:`1-sinf`,phone:`+998 97 222 33 44`,paymentStatus:`Qarzdor`,paymentStatusCode:`debt`,attendance:`88%`,birthDate:`20.10.2019`,homeroomTeacher:`Nodira Saidova`,docs:{birthCertificate:!0,medicalReport:!1,contract:!0},monthlyFee:3e6,paidAmount:0,debtAmount:3e6},{id:`std-11`,initials:`FR`,name:`Fotima Rasulova`,parentName:`Iroda Rasulova`,parentRole:`Ona`,motherName:`Iroda Rasulova`,sinf:`1-B`,gradeLevel:`1-sinf`,phone:`+998 90 333 44 55`,paymentStatus:`To'langan`,paymentStatusCode:`paid`,attendance:`98%`,birthDate:`11.07.2019`,homeroomTeacher:`Feruza Karimova`,docs:{birthCertificate:!0,medicalReport:!0,contract:!0},monthlyFee:3e6,paidAmount:3e6,debtAmount:0},{id:`std-12`,initials:`JA`,name:`Jasur Alimov`,parentName:`Bobur Alimov`,parentRole:`Ota`,motherName:`Barno Alimova`,sinf:`1-B`,gradeLevel:`1-sinf`,phone:`+998 91 444 55 66`,paymentStatus:`Qarzdor`,paymentStatusCode:`debt`,attendance:`85%`,birthDate:`25.02.2019`,homeroomTeacher:`Feruza Karimova`,docs:{birthCertificate:!0,medicalReport:!0,contract:!0},monthlyFee:3e6,paidAmount:0,debtAmount:3e6},{id:`std-13`,initials:`SI`,name:`Shavkat Ismoilov`,parentName:`Otabek Ismoilov`,parentRole:`Ota`,motherName:`Gulbahor Ismoilova`,sinf:`2-A`,gradeLevel:`2-sinf`,phone:`+998 94 555 66 77`,paymentStatus:`Qisman`,paymentStatusCode:`partial`,attendance:`91%`,birthDate:`14.05.2018`,homeroomTeacher:`Zilola Rahimova`,docs:{birthCertificate:!0,medicalReport:!0,contract:!0},monthlyFee:3e6,paidAmount:2e6,debtAmount:1e6},{id:`std-14`,initials:`MY`,name:`Mohira Yoqubova`,parentName:`Dilfuza Yoqubova`,parentRole:`Ona`,motherName:`Dilfuza Yoqubova`,sinf:`2-A`,gradeLevel:`2-sinf`,phone:`+998 95 666 77 88`,paymentStatus:`Qarzdor`,paymentStatusCode:`debt`,attendance:`82%`,birthDate:`30.08.2018`,homeroomTeacher:`Zilola Rahimova`,docs:{birthCertificate:!0,medicalReport:!1,contract:!0},monthlyFee:3e6,paidAmount:0,debtAmount:3e6},{id:`std-15`,initials:`KS`,name:`Kamron Shukurov`,parentName:`Jamshid Shukurov`,parentRole:`Ota`,motherName:`Nodira Shukurova`,sinf:`3-A`,gradeLevel:`3-sinf`,phone:`+998 90 777 88 99`,paymentStatus:`Qisman`,paymentStatusCode:`partial`,attendance:`93%`,birthDate:`19.03.2017`,homeroomTeacher:`Madina Aliyeva`,docs:{birthCertificate:!0,medicalReport:!0,contract:!0},monthlyFee:3e6,paidAmount:15e5,debtAmount:15e5},{id:`std-16`,initials:`ZS`,name:`Zilola Sharipova`,parentName:`Ulug'bek Sharipov`,parentRole:`Ota`,motherName:`Gulchehra Sharipova`,sinf:`4-B`,gradeLevel:`4-sinf`,phone:`+998 93 888 99 00`,paymentStatus:`To'langan`,paymentStatusCode:`paid`,attendance:`97%`,birthDate:`12.09.2016`,homeroomTeacher:`Gulnora Tursunova`,docs:{birthCertificate:!0,medicalReport:!0,contract:!0},monthlyFee:3e6,paidAmount:3e6,debtAmount:0},{id:`std-17`,initials:`BM`,name:`Bobur Mirzayev`,parentName:`Botir Mirzayev`,parentRole:`Ota`,motherName:`Zuhra Mirzayeva`,sinf:`5-A`,gradeLevel:`5-sinf`,phone:`+998 97 999 00 11`,paymentStatus:`Qarzdor`,paymentStatusCode:`debt`,attendance:`80%`,birthDate:`05.12.2015`,homeroomTeacher:`Sherzod Jalilov`,docs:{birthCertificate:!0,medicalReport:!0,contract:!0},monthlyFee:35e5,paidAmount:0,debtAmount:35e5}],classes:[{id:`cls-1a`,name:`1-A`,room:`12-xona`,teacherName:`Nodira Saidova`,teacherInitials:`NS`,currentStudents:18,capacity:20,attendanceStatus:`Belgilangan`,todayPresent:17,todayTotal:18},{id:`cls-1b`,name:`1-B`,room:`14-xona`,teacherName:`Feruza Karimova`,teacherInitials:`FK`,currentStudents:16,capacity:20,attendanceStatus:`Belgilangan`,todayPresent:15,todayTotal:16},{id:`cls-2a`,name:`2-A`,room:`21-xona`,teacherName:`Zilola Rahimova`,teacherInitials:`ZR`,currentStudents:19,capacity:22,attendanceStatus:`Belgilanmagan`,todayPresent:0,todayTotal:19},{id:`cls-3a`,name:`3-A`,room:`23-xona`,teacherName:`Madina Aliyeva`,teacherInitials:`MA`,currentStudents:22,capacity:22,attendanceStatus:`Belgilangan`,todayPresent:19,todayTotal:22},{id:`cls-4b`,name:`4-B`,room:`31-xona`,teacherName:`Gulnora Tursunova`,teacherInitials:`GT`,currentStudents:17,capacity:22,attendanceStatus:`Belgilanmagan`,todayPresent:0,todayTotal:17},{id:`cls-5a`,name:`5-A`,room:`33-xona`,teacherName:`Sherzod Jalilov`,teacherInitials:`SJ`,currentStudents:20,capacity:24,attendanceStatus:`Belgilangan`,todayPresent:18,todayTotal:20}],teachers:[{id:`tch-1`,initials:`NS`,name:`Nodira Saidova`,subject:`Boshlang'ich sinf`,classes:`1-A`,weeklyHours:24,phone:`+998 90 111 22 33`},{id:`tch-2`,initials:`SJ`,name:`Sherzod Jalilov`,subject:`Matematika`,classes:`5-A, 6-A, 7-B`,weeklyHours:20,phone:`+998 91 222 33 44`},{id:`tch-3`,initials:`AX`,name:`Aziza Xolmatova`,subject:`Ingliz tili`,classes:`1-A dan 5-A gacha`,weeklyHours:22,phone:`+998 93 333 44 55`},{id:`tch-4`,initials:`BM`,name:`Botir Mirzayev`,subject:`Informatika`,classes:`4-B, 5-A, 6-A`,weeklyHours:14,phone:`+998 94 444 55 66`},{id:`tch-5`,initials:`LQ`,name:`Laylo Qodirova`,subject:`Ona tili va adabiyot`,classes:`5-A, 6-A`,weeklyHours:18,phone:`+998 97 555 66 77`}],paymentsSummary:{monthlyRevenue:486e5,expectedRevenue:189e5,debtorFamilies:6},paymentTransactions:[{id:`tx-1`,studentName:`Aziza Karimova`,sinf:`3-A`,amount:3e6,method:`Payme`,date:`14.10.2026`,status:`Tasdiqlangan`},{id:`tx-2`,studentName:`Madina Rahimova`,sinf:`5-A`,amount:35e5,method:`Click`,date:`12.10.2026`,status:`Tasdiqlangan`},{id:`tx-3`,studentName:`Behruz Aliyev`,sinf:`4-B`,amount:2e6,method:`Naqd`,date:`10.10.2026`,status:`Tasdiqlangan`},{id:`tx-4`,studentName:`Omina Qodirova`,sinf:`2-A`,amount:3e6,method:`Bank o'tkazmasi`,date:`09.10.2026`,status:`Tasdiqlangan`}],tutorCourses:[{id:`course-1`,name:`Mental arifmetika`,instructor:`Aziza Karimova`,time:`16:00 - 17:30`,days:`Dush, Chor, Juma`,fee:5e5,studentIds:[`std-1`,`std-2`,`std-3`,`std-5`,`std-7`,`std-9`,`std-11`,`std-13`,`std-14`,`std-15`,`std-16`,`std-17`]},{id:`course-2`,name:`Robototexnika`,instructor:`Botir Mirzayev`,time:`15:00 - 16:30`,days:`Sesh, Pay, Shan`,fee:6e5,studentIds:[`std-2`,`std-4`,`std-6`,`std-8`,`std-10`,`std-12`,`std-14`,`std-16`]},{id:`course-3`,name:`Ingliz tili club`,instructor:`Aziza Xolmatova`,time:`17:00 - 18:30`,days:`Dush, Chor, Juma`,fee:55e4,studentIds:[`std-1`,`std-3`,`std-5`,`std-7`,`std-8`,`std-9`,`std-10`]}]},t=`maktab_crm_data_v2`;function n(){try{let n=localStorage.getItem(t);if(n){let t=JSON.parse(n);if(t&&Array.isArray(t.students)){let e=[`./avatars/student1.jpg`,`./avatars/student2.jpg`,`./avatars/student3.jpg`,`./avatars/student4.jpg`];t.students.forEach((t,n)=>{t.photo||=e[n%e.length]})}return(!t.tutorCourses||!Array.isArray(t.tutorCourses)||t.tutorCourses.length===0)&&(t.tutorCourses=e.tutorCourses),t}}catch(e){console.error(`Failed to load local storage data`,e)}return e}function r(e){try{localStorage.setItem(t,JSON.stringify(e))}catch(e){console.error(`Failed to save to local storage`,e)}}var i={uz:{brandName:`Maktab CRM`,brandSubtitle:`Xususiy maktab`,director:`Direktor`,adminRole:`Admin huquqi`,academicYear:`2026–2027 o'quv yili`,todayDate:`Bugun, 20 oktyabr 2026`,menu:`Menyu`,version:`v1.2.0`,search:`Qidirish...`,searchQuery:`Qidiruv`,all:`Hammasi`,cancel:`Bekor qilish`,save:`Saqlash`,delete:`O'chirish`,edit:`Tahrirlash`,close:`Yopish`,back:`Orqaga`,actions:`Amallar`,status:`Holat`,som:`so'm`,currencyUnit:`mln`,seats:`o'rin`,countUnits:`ta`,hoursUnit:`soat`,room:`xona`,phone:`Telefon`,manager:`Menejer`,date:`Sana`,notes:`Qo'shimcha izoh`,exportCsv:`Excelga (.csv)`,exportBtn:`Eksport`,printBtn:`Chop etish`,dashboard:`Boshqaruv paneli`,leads:`Qabul (leadlar)`,students:`O'quvchilar`,classes:`Sinflar va o'qituvchilar`,payments:`To'lovlar`,attendance:`Davomat`,reports:`Hisobotlar`,mainTab:`Asosiy`,studentTab:`O'quvchi`,dashTitle:`Boshqaruv paneli`,dashSubtitle:`2026–2027 o'quv yili ko'rsatkichlari`,totalStudents:`Jami o'quvchilar`,activeStudents:`faol o'quvchi`,monthRevenue:`Shu oy tushum`,revenuePlan:`72% reja`,attendanceRate:`Bugungi davomat`,attendancePresent:`112 tadan 106 nafari keldi`,totalLeads:`Qabul arizalari`,newRequestsThisWeek:`bu hafta 5 yangi`,generalReport:`Umumiy hisobot`,newRequest:`Yangi so'rov`,quickActionsTitle:`Tezkor amallar`,quickActionLeadDesc:`Ota-onadan kelgan murojaatni kiritish`,quickActionPayDesc:`Oylik to'lovni hisobga olish`,quickActionAttDesc:`Bugungi o'quvchilar ishtiroki`,quickActionStdDesc:`Shartnoma tuzilgan o'quvchini kiritish`,admissionFunnel:`Qabul voronkasi`,viewAll:`Barchasini ko'rish →`,stageNewRequests:`1. Yangi so'rovlar`,stageContacted:`2. Bog'lanildi & ma'lumot berildi`,stageInterview:`3. Suhbat va test jarayonida`,stageContract:`4. Shartnoma imzolandi (Qabul)`,requestsCount:`ta ariza`,monthPlanRevenue:`Oktyabr oyi to'lovlar rejasi`,expectedRevenue:`Kutilayotgan`,debtorFamiliesCount:`ta qarzdor oila`,todayTasks:`Bugungi vazifalar va eslatmalar`,psychologistInterview:`14:00 - Psixolog suhbati`,psychologistDesc:`Umar Nazarov (6-sinf) ota-onasi bilan testga keladi`,unmarkedAttendance:`2-A va 4-B sinflar davomati`,unmarkedAttendanceDesc:`Bugungi davomat hali belgilanmagan. O'qituvchilarga eslatma yuborish kerak.`,paymentReminders:`To'lov eslatmalari (SMS)`,paymentRemindersDesc:`Oylik to'lov muddati o'tgan 6 ta oilaga avtomatik eslatma yuborish.`,roomCapacityTitle:`Sinflar xonasi to'liqligi`,totalClassesCount:`Jami 6 sinf`,capacityRecommendation:`Hozirda eng to'la sinf: 3-A (22/22). Yangi o'quvchilar 1-B yoki 5-A ga qabul qilinishi tavsiya etiladi.`,leadsTitle:`Qabul (leadlar)`,leadsSubtitle:`Kelgan arizalar va murojaatlar`,searchLeadPlaceholder:`Ism yoki telefon bo'yicha qidirish...`,filterBtn:`Filtr`,yangi:`Yangi`,boglanildi:`Bog'lanildi`,suhbat:`Suhbat`,shartnoma:`Shartnoma`,addLeadInCol:`Qo'shish`,newLeadModalTitle:`Yangi ariza (Lead) qo'shish`,newLeadModalSub:`Qabul bo'limi uchun yangi murojaat`,childFullName:`Bola F.I.SH`,gradeSelect:`Sinf`,sourceSelect:`Manba`,parentNameLabel:`Ota/Ona ismi`,phoneLabel:`Telefon raqam`,notesLabel:`Qo'shimcha izoh`,changeStage:`Bosqichni o'zgartirish`,leadCameVia:`orqali kelgan`,convertToStudent:`O'quvchiga aylantirish`,addLeadSubmitBtn:`Ariza qo'shish`,sourceFilterTitle:`Manba bo'yicha filtrlash`,sourceInstagram:`Instagram`,sourceTelegram:`Telegram`,sourceTavsiya:`Tavsiya`,sourceSayt:`Sayt`,studentsTitle:`O'quvchilar`,studentsSubtitle:`Barcha sinflar bo'yicha o'quvchilar bazasi`,searchStudentPlaceholder:`Ism yoki telefon bo'yicha qidirish...`,addStudent:`O'quvchi qo'shish`,addStudentBtn:`Qo'shish`,debtorsOnly:`Qarzdorlar`,personalInfo:`Shaxsiy ma'lumotlar`,monthlyPayment:`Oylik to'lov`,paidSoFar:`To'langan`,debtRemaining:`Qoldiq qarz`,statusPaid:`To'langan`,statusPartial:`Qisman to'langan`,statusDebt:`Qarzdor`,acceptPaymentBtn:`To'lov qabul qilish`,editStudentBtn:`Tahrirlash`,homeroomTeacherLabel:`Sinf rahbari`,birthDateLabel:`Tug'ilgan sana`,phoneText:`Telefon`,requiredDocs:`Hujjatlar to'plami`,docBirthCert:`Tug'ilganlik haqida guvohnoma`,docMedReport:`Tibbiy ma'lumotnoma (086)`,docContract:`Ikki tomonlama shartnoma`,schoolClasses:`Maktab sinflari`,selectClassHint:`Sinfni tanlab, o'quvchilar ro'yxati va to'lov holatini ko'ring`,classUnit:`ta sinf`,studentCountLabel:`O'quvchilar soni`,paidBadge:`to'lagan`,partialBadge:`qisman`,debtBadge:`qarzdor`,enterClass:`Sinfga kirish`,allClassesBack:`Barcha sinflar`,classStudentsOf:`sinf o'quvchilari`,leaderLabel:`Rahbar`,paidAmountSummary:`To'langan summa`,debtSummary:`Qarzdorlik`,emptyClassStudents:`Ushbu sinfda hozircha o'quvchilar ro'yxati mavjud emas.`,callParent:`Qo'ng'iroq qilish`,studentDetails:`Batafsil ma'lumot`,paymentHistory:`To'lovlar tarixi`,parentRoleFather:`Ota`,parentRoleMother:`Ona`,parentRoleDefault:`Ota-onasi`,newStudentModalTitle:`Yangi o'quvchi qo'shish`,newStudentModalSub:`Maktab kontingentiga rasmiy ro'yxatga olish`,studentFullName:`O'quvchi to'liq F.I.SH`,selectClass:`Sinfni tanlang`,monthlyFeeAmount:`Oylik to'lov summasi (so'm)`,initialPaymentStatus:`Dastlabki to'lov holati`,statusWaitingDebt:`Kutilmoqda (Qarzdor)`,acceptStudentSubmitBtn:`O'quvchini qabul qilish`,searchResultsFor:`Qidiruv natijalari`,noResultsFound:`Hech qanday ma'lumot topilmadi`,classesTitle:`Sinflar va o'qituvchilar`,classesSubtitle:`Sinflar va pedagogik jamoa`,addTeacherBtn:`O'qituvchi`,addClassBtn:`Yangi sinf`,classesSection:`Sinflar`,classesHint:`Sinf ustiga bosib, uning o'quvchilarini ko'rishingiz mumkin`,deleteClassTitle:`Sinfni o'chirish`,studentsInClass:`O'quvchilar`,teachersSection:`O'qituvchilar`,teacherColName:`O'qituvchi`,teacherColSubject:`Fan`,teacherColClasses:`Biriktirilgan sinflar`,teacherColHours:`Haftalik soat`,teacherColPhone:`Telefon`,newClassModalTitle:`Yangi sinf ochish`,newClassModalSub:`2026–2027 o'quv yili uchun sinf kiritish`,classNameLabel:`Sinf nomi`,roomNumberLabel:`Xona raqami`,maxCapacityLabel:`Maksimal sig'imi`,createClassBtn:`Sinfni yaratish`,newTeacherModalTitle:`O'qituvchi qo'shish`,newTeacherModalSub:`Yangi pedagogik xodimni ro'yxatga olish`,teacherFullName:`O'qituvchi F.I.SH`,teacherSubject:`Dars beradigan fani`,teacherWeeklyHours:`Haftalik yuklama (soat)`,teacherAssignedClasses:`Biriktirilgan sinflar`,addTeacherSubmitBtn:`O'qituvchini qo'shish`,deleteTeacherTitle:`O'qituvchini o'chirish`,paymentsTitle:`To'lovlar`,paymentsSubtitle:`Oylik to'lovlar, qarzdorlik va moliyaviy tushumlar nazorati`,kpiRevenueMonth:`Shu oy tushum`,kpiExpectedRevenue:`Kutilayotgan to'lovlar`,kpiDebtors:`Qarzdor oilalar`,exportPaymentsBtn:`Excelga yuklash`,newPayment:`Yangi to'lov`,days7:`7 kun`,days30:`30 kun`,thisMonth:`Shu oy`,yearly:`Yillik`,detailedStudents:`Tafsilotli O'quvchilar`,studentsCountUnit:`ta o'quvchi`,noStudentFound:`Mos keluvchi o'quvchi topilmadi`,fullyPaid:`To'liq to'lagan`,receipt:`Chek`,acceptPaymentModalTitle:`To'lov qabul qilish`,acceptPaymentModalSub:`Oylik o'qish to'lovi qabuli va chek chiqarish`,selectStudent:`O'quvchini tanlang`,paymentAmount:`To'lov summasi (so'm)`,paymentMethod:`To'lov turi`,paymentPurpose:`To'lov maqsadi / Izoh`,printThermalReceipt:`Chek apparatida chek chiqarish`,thermalPrinterDesc:`Xprinter / Epson / Sunmi (58/80mm) POS printer`,confirmAndPrint:`To'lovni tasdiqlash & Chek chiqarish`,quickPayMonth1:`1 oylik`,quickPayMonth2:`2 oylik`,fullDebt:`To'liq qarz`,cashMethod:`Naqd pul`,cardMethod:`Plastik karta (Terminal)`,bankTransfer:`Bank o'tkazmasi`,forMonth:`Qaysi oy uchun`,noDebt:`Qarz yo'q`,monthlyTariff:`Oylik tarif`,receiptHeader:`MAKTAB CRM - XUSUSIY MAKTAB`,receiptBrandSubtitle:`Xususiy Maktab & Litsey`,receiptAddress:`Toshkent sh., Yunusobod t., 4-mavze`,receiptPhoneStir:`Tel: +998 71 200 00 00 • STIR: 308 192 841`,receiptLicense:`Litsenziya: № NAS-UZ-004829`,receiptBadge:`TO'LOV CHEKI / KVITANSIYA`,receiptDateTime:`Sana va vaqt`,cashierAdmin:`Kassir / Admin`,studentFullNameLabel:`O'quvchi F.I.SH`,paymentTarget:`To'lov maqsadi`,educationTuition:`ta'lim to'lovi`,totalPaidCaps:`JAMI TO'LANDI`,prevPayments:`Oldingi to'lovlar`,remainingDebt:`Qoldiq qarzdorlik`,paymentStatusLabel:`To'lov holati`,fullyPaidCaps:`TO'LIQ TO'LANGAN`,partialPaidCaps:`QISMAN TO'LANGAN`,receiptModalTitle:`Kassa Cheki (Kvitansiya)`,printReceiptBtn:`Chop etish (Print)`,telegramCopyBtn:`Telegram nusxa`,copiedReceiptToast:`Chek matni nusxalandi! Telegram orqali yuborishingiz mumkin`,copyErrorToast:`Nusxa olishda xatolik yuz berdi`,noStudentsInClass:`Ushbu sinfga biriktirilgan o'quvchilar topilmadi. O'quvchilar bo'limidan biriktirishingiz mumkin.`,classWord:`sinf`,receiptNumberLabel:`Chek №`,dateLabel:`Sana`,cashierLabel:`Kassir`,studentLabel:`O'quvchi`,classLabel:`Sinf`,parentLabel:`Ota-onasi`,periodLabel:`To'lov davri`,paidAmountLabel:`TO'LANGAN SUMMA`,debtAmountLabel:`Qoldiq qarz`,thankYou:`To'lovingiz uchun tashakkur!`,officialReceiptNotice:`Ushbu chek rasmiy to'lov hujjati hisoblanadi.`,copyReceipt:`Chek matnidan nusxa olish`,copied:`Nusxa olindi!`,attendanceTitle:`Davomat`,attendanceSubtitle:`Bugungi davomat holati`,tabClasses:`Sinflar`,tabTutors:`Repetitorlar`,selectClassForAttendance:`Davomat belgilash uchun sinfni tanlang`,marked:`Belgilangan`,notMarked:`Belgilanmagan`,cameToday:`Bugun keldi`,tutorsAttendanceTitle:`Repetitorlik va to'garaklar davomati`,tutorsAttendanceSub:`Qo'shimcha darslar va to'garaklar qatnashuvchilari`,instructor:`Murabbiy`,markAttendanceModalTitle:`Davomat belgilash`,markAllPresent:`Hammasi keldi`,present:`Keldi`,absent:`Kelmadi`,excused:`Sababli`,studentsListLabel:`O'quvchilar ro'yxati`,saveAttendanceBtn:`Davomatni saqlash`,studentsUnitAtt:`nafar`,addStudentToTutorBtn:`O'quvchi biriktirish`,tutorCoursesLabel:`Repetitorlik va to'garaklar (Ixtiyoriy)`,assignStudentModalTitle:`To'garakka o'quvchi biriktirish`,assignStudentModalSub:`Maktab o'quvchisini repetitorlik guruhiga qo'shish`,selectStudentToAssign:`O'quvchini tanlang`,assignStudentSubmitBtn:`To'garakka biriktirish`,removeStudentFromTutor:`Guruhdan chiqarish`,confirmRemoveStudentFromTutor:`Ushbu o'quvchini to'garakdan chiqarishga ishonchingiz komilmi?`,noTutorStudentsFound:`Ushbu to'garakka hali o'quvchilar biriktirilmagan.`,allStudentsAlreadyEnrolled:`Barcha o'quvchilar allaqachon ushbu to'garakka biriktirilgan`,studentAssignedSuccess:`o'quvchi to'garakka muvaffaqiyatli qo'shildi!`,studentRemovedSuccess:`o'quvchi to'garakdan chiqarildi`,tutorsListLabel:`To'garaklar / Repetitorlar`,noTutorsEnrolled:`Biriktirilmagan`,enrolledStudentsCount:`nafar o'quvchi`,addTutorCourseBtn:`Yangi to'garak / repetitor`,newTutorModalTitle:`Yangi repetitorlik / to'garak kursi`,newTutorModalSub:`Yangi to'garak guruhi ochish`,tutorCourseName:`Kurs / To'garak nomi`,tutorScheduleDays:`Hafta kunlari`,tutorScheduleTime:`Mashg'ulot vaqti`,tutorMonthlyFee:`Oylik to'lovi`,createTutorSubmitBtn:`Kursni yaratish`,deleteTutorCourse:`To'garakni o'chirish`,confirmDeleteTutorCourse:`Ushbu to'garakni butunlay o'chirmoqchimisiz?`,reportsTitle:`Hisobotlar`,reportsSubtitle:`Maktab ko'rsatkichlari, moliyaviy va akademik hisobotlar`,downloadReportBtn:`To'liq hisobotni yuklash (.csv)`,totalRevenueCollected:`Jami yig'ilgan to'lovlar`,schoolCapacityRate:`Maktab sig'imi to'liqligi`,averageAttendanceMetric:`Bugungi davomat`,admissionConversion:`Qabul konversiyasi`,enrolledUnit:`qabul`,classFinanceAnalysis:`Sinflar bo'yicha to'lovlar va qarzdorlik`,marketingEfficiency:`Murojaatlar manbasi (Marketing samaradorligi)`,shareUnit:`ulush`,themeDarkToast:`Qorong'u rejim yoqildi`,themeLightToast:`Yorug' rejim yoqildi`,langChangedToast:`Til o'zgartirildi: O'zbekcha`,savedToast:`Ma'lumotlar saqlandi!`,deletedToast:`Muvaffaqiyatli o'chirildi`,confirmDelete:`O'chirishga ishonchingiz komilmi?`},ru:{brandName:`Maktab CRM`,brandSubtitle:`Частная школа`,director:`Директор`,adminRole:`Администратор`,academicYear:`2026–2027 учебный год`,todayDate:`Сегодня, 20 октября 2026`,menu:`Меню`,version:`v1.2.0`,search:`Поиск...`,searchQuery:`Поиск`,all:`Все`,cancel:`Отмена`,save:`Сохранить`,delete:`Удалить`,edit:`Редактировать`,close:`Закрыть`,back:`Назад`,actions:`Действия`,status:`Статус`,som:`сум`,currencyUnit:`млн`,seats:`мест`,countUnits:`шт`,hoursUnit:`ч.`,room:`кабинет`,phone:`Телефон`,manager:`Менеджер`,date:`Дата`,notes:`Примечание`,exportCsv:`В Excel (.csv)`,exportBtn:`Экспорт`,printBtn:`Печать`,dashboard:`Панель управления`,leads:`Приём (лиды)`,students:`Ученики`,classes:`Классы и учителя`,payments:`Оплаты`,attendance:`Посещаемость`,reports:`Отчёты`,mainTab:`Главная`,studentTab:`Ученик`,dashTitle:`Панель управления`,dashSubtitle:`Показатели на 2026–2027 учебный год`,totalStudents:`Всего учеников`,activeStudents:`активных учеников`,monthRevenue:`Поступления за месяц`,revenuePlan:`72% от плана`,attendanceRate:`Посещаемость сегодня`,attendancePresent:`106 из 112 присутствуют`,totalLeads:`Заявки на приём`,newRequestsThisWeek:`5 новых на этой неделе`,generalReport:`Общий отчёт`,newRequest:`Новая заявка`,quickActionsTitle:`Быстрые действия`,quickActionLeadDesc:`Внести новое обращение от родителей`,quickActionPayDesc:`Учесть ежемесячную оплату за обучение`,quickActionAttDesc:`Учёт присутствия учащихся сегодня`,quickActionStdDesc:`Внести зачисленного нового ученика`,admissionFunnel:`Воронка приёма`,viewAll:`Смотреть все →`,stageNewRequests:`1. Новые заявки`,stageContacted:`2. Связались & проконсультировали`,stageInterview:`3. Собеседование и тестирование`,stageContract:`4. Подписан договор (Зачислен)`,requestsCount:`заявок`,monthPlanRevenue:`План платежей на октябрь`,expectedRevenue:`Ожидается`,debtorFamiliesCount:`семей с долгом`,todayTasks:`Задачи и напоминания на сегодня`,psychologistInterview:`14:00 - Встреча с психологом`,psychologistDesc:`Умар Назаров (6-й класс) придёт с родителями на тестирование`,unmarkedAttendance:`Посещаемость 2-А и 4-Б`,unmarkedAttendanceDesc:`Посещаемость сегодня ещё не отмечена. Необходимо напомнить классным руководителям.`,paymentReminders:`SMS-напоминания об оплате`,paymentRemindersDesc:`Отправить автоматические напоминания 6 семьям с просроченной оплатой.`,roomCapacityTitle:`Заполненность классов`,totalClassesCount:`Всего 6 классов`,capacityRecommendation:`Самый заполненный класс: 3-А (22/22). Новых учеников рекомендуется направлять в 1-Б или 5-А.`,leadsTitle:`Приём (лиды)`,leadsSubtitle:`Поступившие заявки и обращения`,searchLeadPlaceholder:`Поиск по имени или телефону...`,filterBtn:`Фильтр`,yangi:`Новые`,boglanildi:`Связались`,suhbat:`Интервью`,shartnoma:`Договор`,addLeadInCol:`Добавить`,newLeadModalTitle:`Добавить новую заявку (Лид)`,newLeadModalSub:`Новое обращение в отдел приёма`,childFullName:`Ф.И.О. ребёнка`,gradeSelect:`Класс`,sourceSelect:`Источник`,parentNameLabel:`Имя родителя`,phoneLabel:`Номер телефона`,notesLabel:`Примечание`,changeStage:`Сменить этап`,leadCameVia:`источник:`,convertToStudent:`Перевести в ученики`,addLeadSubmitBtn:`Добавить заявку`,sourceFilterTitle:`Фильтрация по источнику`,sourceInstagram:`Instagram`,sourceTelegram:`Telegram`,sourceTavsiya:`Рекомендация`,sourceSayt:`Сайт`,studentsTitle:`Ученики`,studentsSubtitle:`База учащихся всех классов`,searchStudentPlaceholder:`Поиск по имени или телефону...`,addStudent:`Добавить ученика`,addStudentBtn:`Добавить`,debtorsOnly:`Должники`,personalInfo:`Личные данные`,monthlyPayment:`Ежемесячная оплата`,paidSoFar:`Оплачено`,debtRemaining:`Остаток долга`,statusPaid:`Оплачено`,statusPartial:`Частично`,statusDebt:`Задолженность`,acceptPaymentBtn:`Принять оплату`,editStudentBtn:`Редактировать`,homeroomTeacherLabel:`Классный руководитель`,birthDateLabel:`Дата рождения`,phoneText:`Телефон`,requiredDocs:`Пакет документов`,docBirthCert:`Свидетельство о рождении`,docMedReport:`Медицинская справка (086)`,docContract:`Двусторонний договор`,schoolClasses:`Классы школы`,selectClassHint:`Выберите класс, чтобы просмотреть список учеников и оплату`,classUnit:`классов`,studentCountLabel:`Количество учеников`,paidBadge:`оплатили`,partialBadge:`частично`,debtBadge:`должники`,enterClass:`Войти в класс`,allClassesBack:`Все классы`,classStudentsOf:`ученики класса`,leaderLabel:`Руководитель`,paidAmountSummary:`Оплаченная сумма`,debtSummary:`Задолженность`,emptyClassStudents:`В этом классе пока нет учащихся.`,callParent:`Позвонить`,studentDetails:`Подробная информация`,paymentHistory:`История оплат`,parentRoleFather:`Отец`,parentRoleMother:`Мать`,parentRoleDefault:`Родитель`,newStudentModalTitle:`Добавить нового ученика`,newStudentModalSub:`Официальное зачисление в контингент школы`,studentFullName:`Ф.И.О. ученика полностью`,selectClass:`Выберите класс`,monthlyFeeAmount:`Сумма ежемесячной платы (сум)`,initialPaymentStatus:`Начальный статус оплаты`,statusWaitingDebt:`Ожидается (Задолженность)`,acceptStudentSubmitBtn:`Зачислить ученика`,searchResultsFor:`Результаты поиска`,noResultsFound:`Ничего не найдено`,classesTitle:`Классы и учителя`,classesSubtitle:`Классы и педагогический состав`,addTeacherBtn:`Учитель`,addClassBtn:`Новый класс`,classesSection:`Классы`,classesHint:`Нажмите на класс, чтобы просмотреть его учеников`,deleteClassTitle:`Удалить класс`,studentsInClass:`Учеников`,teachersSection:`Учителя`,teacherColName:`Учитель`,teacherColSubject:`Предмет`,teacherColClasses:`Закрепленные классы`,teacherColHours:`Часы в неделю`,teacherColPhone:`Телефон`,newClassModalTitle:`Создать новый класс`,newClassModalSub:`Добавление класса на 2026–2027 учебный год`,classNameLabel:`Название класса`,roomNumberLabel:`Номер кабинета`,maxCapacityLabel:`Макс. вместимость`,createClassBtn:`Создать класс`,newTeacherModalTitle:`Добавить учителя`,newTeacherModalSub:`Регистрация нового преподавателя`,teacherFullName:`Ф.И.О. учителя`,teacherSubject:`Предмет преподавания`,teacherWeeklyHours:`Недельная нагрузка (часы)`,teacherAssignedClasses:`Закрепленные классы`,addTeacherSubmitBtn:`Добавить учителя`,deleteTeacherTitle:`Удалить учителя`,paymentsTitle:`Оплаты`,paymentsSubtitle:`Контроль ежемесячных платежей, задолженностей и поступлений`,kpiRevenueMonth:`Поступления за месяц`,kpiExpectedRevenue:`Ожидаемые оплаты`,kpiDebtors:`Семей с долгом`,exportPaymentsBtn:`Скачать в Excel`,newPayment:`Новый платёж`,days7:`7 дней`,days30:`30 дней`,thisMonth:`Этот месяц`,yearly:`За год`,detailedStudents:`Детализация по ученикам`,studentsCountUnit:`учеников`,noStudentFound:`Подходящий ученик не найден`,fullyPaid:`Полностью оплачено`,receipt:`Чек`,acceptPaymentModalTitle:`Принять оплату`,acceptPaymentModalSub:`Приём ежемесячной оплаты и печать квитанции`,selectStudent:`Выберите ученика`,paymentAmount:`Сумма оплаты (сум)`,paymentMethod:`Способ оплаты`,paymentPurpose:`Назначение платежа / Примечание`,printThermalReceipt:`Печать на чековом аппарате`,thermalPrinterDesc:`Xprinter / Epson / Sunmi (58/80мм) POS-принтер`,confirmAndPrint:`Подтвердить оплату и напечатать чек`,quickPayMonth1:`1 месяц`,quickPayMonth2:`2 месяца`,fullDebt:`Весь долг`,cashMethod:`Наличные`,cardMethod:`Банковская карта (Терминал)`,bankTransfer:`Банковский перевод`,forMonth:`За какой месяц`,noDebt:`Нет долга`,monthlyTariff:`Ежемесячный тариф`,receiptHeader:`MAKTAB CRM - ЧАСТНАЯ ШКОЛА`,receiptBrandSubtitle:`Частная школа и лицей`,receiptAddress:`г. Ташкент, Юнусабадский р-н, 4-й квартал`,receiptPhoneStir:`Тел: +998 71 200 00 00 • ИНН: 308 192 841`,receiptLicense:`Лицензия: № NAS-UZ-004829`,receiptBadge:`ЧЕК ОБ ОПЛАТЕ / КВИТАНЦИЯ`,receiptDateTime:`Дата и время`,cashierAdmin:`Кассир / Администратор`,studentFullNameLabel:`Ф.И.О. ученика`,paymentTarget:`Назначение платежа`,educationTuition:`оплата за обучение`,totalPaidCaps:`ИТОГО ОПЛАЧЕНО`,prevPayments:`Предыдущие платежи`,remainingDebt:`Остаток задолженности`,paymentStatusLabel:`Статус оплаты`,fullyPaidCaps:`ПОЛНОСТЬЮ ОПЛАЧЕНО`,partialPaidCaps:`ЧАСТИЧНО ОПЛАЧЕНО`,receiptModalTitle:`Кассовый чек (Квитанция)`,printReceiptBtn:`Печать (Print)`,telegramCopyBtn:`Копия для Telegram`,copiedReceiptToast:`Текст чека скопирован! Можно отправить в Telegram`,copyErrorToast:`Ошибка при копировании текста`,noStudentsInClass:`В этом классе пока нет учеников. Вы можете прикрепить их в разделе 'Ученики'.`,classWord:`класс`,receiptNumberLabel:`Чек №`,dateLabel:`Дата`,cashierLabel:`Кассир`,studentLabel:`Ученик`,classLabel:`Класс`,parentLabel:`Родитель`,periodLabel:`Период оплаты`,paidAmountLabel:`ОПЛАЧЕННАЯ СУММА`,debtAmountLabel:`Остаток долга`,thankYou:`Спасибо за оплату!`,officialReceiptNotice:`Этот чек является официальным платёжным документом.`,copyReceipt:`Скопировать текст чека`,copied:`Скопировано!`,attendanceTitle:`Посещаемость`,attendanceSubtitle:`Статус посещаемости на сегодня`,tabClasses:`Классы`,tabTutors:`Репетиторы`,selectClassForAttendance:`Выберите класс для отметки посещаемости`,marked:`Отмечено`,notMarked:`Не отмечено`,cameToday:`Пришли сегодня`,tutorsAttendanceTitle:`Посещаемость репетиторов и кружков`,tutorsAttendanceSub:`Участники факультативных занятий и секций`,instructor:`Преподаватель`,markAttendanceModalTitle:`Отметка посещаемости`,markAllPresent:`Все пришли`,present:`Был`,absent:`Не был`,excused:`Уважительная`,studentsListLabel:`Список учеников`,saveAttendanceBtn:`Сохранить посещаемость`,studentsUnitAtt:`чел.`,addStudentToTutorBtn:`Добавить ученика`,tutorCoursesLabel:`Репетиторство и кружки (Необязательно)`,assignStudentModalTitle:`Зачисление в кружок`,assignStudentModalSub:`Зачисление ученика школы в репетиторскую группу`,selectStudentToAssign:`Выберите ученика`,assignStudentSubmitBtn:`Зачислить в группу`,removeStudentFromTutor:`Исключить из группы`,confirmRemoveStudentFromTutor:`Вы уверены, что хотите исключить этого ученика из кружка?`,noTutorStudentsFound:`В этот кружок пока не записаны ученики.`,allStudentsAlreadyEnrolled:`Все ученики уже зачислены в этот кружок`,studentAssignedSuccess:`ученик успешно добавлен в кружок!`,studentRemovedSuccess:`ученик исключён из кружка`,tutorsListLabel:`Кружки / Репетиторы`,noTutorsEnrolled:`Не записан`,enrolledStudentsCount:`учеников`,addTutorCourseBtn:`Новый кружок / курс`,newTutorModalTitle:`Новый кружок / курс репетиторства`,newTutorModalSub:`Создание новой группы факультатива`,tutorCourseName:`Название кружка / курса`,tutorScheduleDays:`Дни недели`,tutorScheduleTime:`Время занятий`,tutorMonthlyFee:`Ежемесячная оплата`,createTutorSubmitBtn:`Создать курс`,deleteTutorCourse:`Удалить кружок`,confirmDeleteTutorCourse:`Вы уверены, что хотите полностью удалить этот кружок?`,reportsTitle:`Отчёты`,reportsSubtitle:`Показатели школы, финансовые и академические отчёты`,downloadReportBtn:`Скачать полный отчёт (.csv)`,totalRevenueCollected:`Всего собранных платежей`,schoolCapacityRate:`Заполненность школы`,averageAttendanceMetric:`Посещаемость сегодня`,admissionConversion:`Конверсия приёма`,enrolledUnit:`зачисл.`,classFinanceAnalysis:`Оплаты и задолженности по классам`,marketingEfficiency:`Источники обращений (Эффективность маркетинга)`,shareUnit:`доля`,themeDarkToast:`Тёмная тема включена`,themeLightToast:`Светлая тема включена`,langChangedToast:`Язык изменён: Русский`,savedToast:`Данные сохранены!`,deletedToast:`Успешно удалено`,confirmDelete:`Вы уверены, что хотите удалить?`},en:{brandName:`Maktab CRM`,brandSubtitle:`Private School`,director:`Principal`,adminRole:`Administrator`,academicYear:`2026–2027 Academic Year`,todayDate:`Today, 20 October 2026`,menu:`Menu`,version:`v1.2.0`,search:`Search...`,searchQuery:`Search`,all:`All`,cancel:`Cancel`,save:`Save`,delete:`Delete`,edit:`Edit`,close:`Close`,back:`Back`,actions:`Actions`,status:`Status`,som:`UZS`,currencyUnit:`M`,seats:`seats`,countUnits:`items`,hoursUnit:`hrs`,room:`Room`,phone:`Phone`,manager:`Manager`,date:`Date`,notes:`Notes`,exportCsv:`To Excel (.csv)`,exportBtn:`Export`,printBtn:`Print`,dashboard:`Dashboard`,leads:`Admissions (Leads)`,students:`Students`,classes:`Classes & Teachers`,payments:`Payments`,attendance:`Attendance`,reports:`Reports`,mainTab:`Home`,studentTab:`Student`,dashTitle:`Dashboard`,dashSubtitle:`2026–2027 Academic Year Indicators`,totalStudents:`Total Students`,activeStudents:`active students`,monthRevenue:`Monthly Revenue`,revenuePlan:`72% of target`,attendanceRate:`Today's Attendance`,attendancePresent:`106 out of 112 present`,totalLeads:`Admission Applications`,newRequestsThisWeek:`5 new this week`,generalReport:`Overview Report`,newRequest:`New Request`,quickActionsTitle:`Quick Actions`,quickActionLeadDesc:`Record new inquiry from parents`,quickActionPayDesc:`Record monthly tuition payment`,quickActionAttDesc:`Record student attendance today`,quickActionStdDesc:`Enroll newly registered student`,admissionFunnel:`Admission Funnel`,viewAll:`View All →`,stageNewRequests:`1. New Inquiries`,stageContacted:`2. Contacted & Consulted`,stageInterview:`3. Interview & Assessment`,stageContract:`4. Contract Signed (Enrolled)`,requestsCount:`applications`,monthPlanRevenue:`October Fee Target`,expectedRevenue:`Expected`,debtorFamiliesCount:`families with overdue debt`,todayTasks:`Today's Tasks & Reminders`,psychologistInterview:`14:00 - Meeting with Psychologist`,psychologistDesc:`Umar Nazarov (Grade 6) coming with parents for assessment`,unmarkedAttendance:`Attendance for 2-A and 4-B`,unmarkedAttendanceDesc:`Today's attendance has not been recorded yet. Please remind homeroom teachers.`,paymentReminders:`Payment Reminders (SMS)`,paymentRemindersDesc:`Send automated SMS reminders to 6 families with overdue fees.`,roomCapacityTitle:`Classroom Capacity`,totalClassesCount:`Total 6 Classes`,capacityRecommendation:`Highest capacity class: 3-A (22/22). New admissions recommended for 1-B or 5-A.`,leadsTitle:`Admissions (Leads)`,leadsSubtitle:`Incoming inquiries and applications`,searchLeadPlaceholder:`Search by name or phone...`,filterBtn:`Filter`,yangi:`New`,boglanildi:`Contacted`,suhbat:`Interview`,shartnoma:`Enrolled`,addLeadInCol:`Add`,newLeadModalTitle:`Add New Inquiry (Lead)`,newLeadModalSub:`New submission for admissions office`,childFullName:`Student Full Name`,gradeSelect:`Grade`,sourceSelect:`Source`,parentNameLabel:`Parent Name`,phoneLabel:`Phone Number`,notesLabel:`Notes / Comments`,changeStage:`Change Stage`,leadCameVia:`referred via`,convertToStudent:`Convert to Student`,addLeadSubmitBtn:`Submit Application`,sourceFilterTitle:`Filter by Lead Source`,sourceInstagram:`Instagram`,sourceTelegram:`Telegram`,sourceTavsiya:`Recommendation`,sourceSayt:`Website`,studentsTitle:`Students`,studentsSubtitle:`Student database across all classes`,searchStudentPlaceholder:`Search by name or phone...`,addStudent:`Add Student`,addStudentBtn:`Add`,debtorsOnly:`Debtors`,personalInfo:`Personal Details`,monthlyPayment:`Monthly Fee`,paidSoFar:`Paid`,debtRemaining:`Remaining Debt`,statusPaid:`Paid`,statusPartial:`Partial`,statusDebt:`Debt`,acceptPaymentBtn:`Accept Payment`,editStudentBtn:`Edit`,homeroomTeacherLabel:`Class Teacher`,birthDateLabel:`Birth Date`,phoneText:`Phone`,requiredDocs:`Required Documents`,docBirthCert:`Birth Certificate`,docMedReport:`Medical Report (086)`,docContract:`Bilateral Contract`,schoolClasses:`School Classes`,selectClassHint:`Select a class to view student roster and payment status`,classUnit:`classes`,studentCountLabel:`Student Count`,paidBadge:`paid`,partialBadge:`partial`,debtBadge:`debt`,enterClass:`Open Class`,allClassesBack:`All Classes`,classStudentsOf:`students in class`,leaderLabel:`Teacher`,paidAmountSummary:`Total Paid`,debtSummary:`Overdue Debt`,emptyClassStudents:`No students currently enrolled in this class.`,callParent:`Call`,studentDetails:`Full Information`,paymentHistory:`Payment History`,parentRoleFather:`Father`,parentRoleMother:`Mother`,parentRoleDefault:`Parent`,newStudentModalTitle:`Enroll New Student`,newStudentModalSub:`Official registration in school registry`,studentFullName:`Student Full Name`,selectClass:`Select Class`,monthlyFeeAmount:`Monthly Tuition Fee (UZS)`,initialPaymentStatus:`Initial Payment Status`,statusWaitingDebt:`Pending (Debtor)`,acceptStudentSubmitBtn:`Enroll Student`,searchResultsFor:`Search Results`,noResultsFound:`No matching records found`,classesTitle:`Classes & Teachers`,classesSubtitle:`Classrooms and faculty roster`,addTeacherBtn:`Teacher`,addClassBtn:`New Class`,classesSection:`Classes`,classesHint:`Click a class card to inspect its students`,deleteClassTitle:`Delete Class`,studentsInClass:`Students`,teachersSection:`Teachers`,teacherColName:`Teacher`,teacherColSubject:`Subject`,teacherColClasses:`Assigned Classes`,teacherColHours:`Weekly Hours`,teacherColPhone:`Phone`,newClassModalTitle:`Open New Class`,newClassModalSub:`Add classroom for 2026–2027 academic year`,classNameLabel:`Class Name`,roomNumberLabel:`Room Number`,maxCapacityLabel:`Maximum Capacity`,createClassBtn:`Create Class`,newTeacherModalTitle:`Add Teacher`,newTeacherModalSub:`Register new faculty member`,teacherFullName:`Teacher Full Name`,teacherSubject:`Subject Taught`,teacherWeeklyHours:`Weekly Load (hours)`,teacherAssignedClasses:`Assigned Classes`,addTeacherSubmitBtn:`Add Teacher`,deleteTeacherTitle:`Delete Teacher`,paymentsTitle:`Payments`,paymentsSubtitle:`Tuition collection, outstanding balances, and cashflow overview`,kpiRevenueMonth:`This Month's Revenue`,kpiExpectedRevenue:`Expected Tuition`,kpiDebtors:`Debtor Families`,exportPaymentsBtn:`Download Excel`,newPayment:`New Payment`,days7:`7 days`,days30:`30 days`,thisMonth:`This month`,yearly:`Annual`,detailedStudents:`Student Payment Roster`,studentsCountUnit:`students`,noStudentFound:`No matching students found`,fullyPaid:`Fully Paid`,receipt:`Receipt`,acceptPaymentModalTitle:`Accept Payment`,acceptPaymentModalSub:`Tuition collection and POS receipt generation`,selectStudent:`Select Student`,paymentAmount:`Payment Amount (UZS)`,paymentMethod:`Payment Method`,paymentPurpose:`Purpose / Note`,printThermalReceipt:`Print on POS receipt printer`,thermalPrinterDesc:`Xprinter / Epson / Sunmi (58/80mm) POS printer`,confirmAndPrint:`Confirm Payment & Print Receipt`,quickPayMonth1:`1 month`,quickPayMonth2:`2 months`,fullDebt:`Full debt`,cashMethod:`Cash`,cardMethod:`Bank Card (POS Terminal)`,bankTransfer:`Bank Wire Transfer`,forMonth:`Payment Period`,noDebt:`No debt`,monthlyTariff:`Monthly Rate`,receiptHeader:`MAKTAB CRM - PRIVATE SCHOOL`,receiptBrandSubtitle:`Private School & Lyceum`,receiptAddress:`Tashkent, Yunusabad dist., 4th block`,receiptPhoneStir:`Tel: +998 71 200 00 00 • TIN: 308 192 841`,receiptLicense:`License: № NAS-UZ-004829`,receiptBadge:`PAYMENT RECEIPT`,receiptDateTime:`Date and Time`,cashierAdmin:`Cashier / Admin`,studentFullNameLabel:`Student Full Name`,paymentTarget:`Payment Purpose`,educationTuition:`tuition fee`,totalPaidCaps:`TOTAL PAID`,prevPayments:`Previous payments`,remainingDebt:`Remaining debt`,paymentStatusLabel:`Payment status`,fullyPaidCaps:`FULLY PAID`,partialPaidCaps:`PARTIALLY PAID`,receiptModalTitle:`Cashier Receipt`,printReceiptBtn:`Print Receipt`,telegramCopyBtn:`Telegram Copy`,copiedReceiptToast:`Receipt text copied! You can send it via Telegram`,copyErrorToast:`Failed to copy receipt text`,noStudentsInClass:`No students assigned to this class yet. You can assign them in Students section.`,classWord:`grade`,receiptNumberLabel:`Receipt #`,dateLabel:`Date`,cashierLabel:`Cashier`,studentLabel:`Student`,classLabel:`Class`,parentLabel:`Parent`,periodLabel:`Period`,paidAmountLabel:`AMOUNT PAID`,debtAmountLabel:`Remaining Debt`,thankYou:`Thank you for your payment!`,officialReceiptNotice:`This receipt serves as an official proof of payment.`,copyReceipt:`Copy Receipt Text`,copied:`Copied!`,attendanceTitle:`Attendance`,attendanceSubtitle:`Today's school attendance tracking`,tabClasses:`Classes`,tabTutors:`Tutoring & Clubs`,selectClassForAttendance:`Select a class to take attendance`,marked:`Recorded`,notMarked:`Pending`,cameToday:`Present Today`,tutorsAttendanceTitle:`Tutoring & Club Attendance`,tutorsAttendanceSub:`After-school classes and club attendees`,instructor:`Instructor`,markAttendanceModalTitle:`Take Attendance`,markAllPresent:`Mark All Present`,present:`Present`,absent:`Absent`,excused:`Excused`,studentsListLabel:`Student Roster`,saveAttendanceBtn:`Save Attendance`,studentsUnitAtt:`students`,addStudentToTutorBtn:`Enroll Student`,tutorCoursesLabel:`Tutoring & Clubs (Optional)`,assignStudentModalTitle:`Enroll Student in Club`,assignStudentModalSub:`Add a school student to this tutoring group`,selectStudentToAssign:`Select Student`,assignStudentSubmitBtn:`Enroll in Group`,removeStudentFromTutor:`Remove from Group`,confirmRemoveStudentFromTutor:`Are you sure you want to remove this student from the group?`,noTutorStudentsFound:`No students enrolled in this club yet.`,allStudentsAlreadyEnrolled:`All students are already enrolled in this club`,studentAssignedSuccess:`student enrolled in the club successfully!`,studentRemovedSuccess:`student removed from the club`,tutorsListLabel:`Clubs / Tutoring`,noTutorsEnrolled:`None`,enrolledStudentsCount:`students`,addTutorCourseBtn:`New Club / Course`,newTutorModalTitle:`New Club / Tutoring Course`,newTutorModalSub:`Open a new extracurricular group`,tutorCourseName:`Club / Course Name`,tutorScheduleDays:`Days of Week`,tutorScheduleTime:`Lesson Time`,tutorMonthlyFee:`Monthly Fee`,createTutorSubmitBtn:`Create Course`,deleteTutorCourse:`Delete Club`,confirmDeleteTutorCourse:`Are you sure you want to permanently delete this club?`,reportsTitle:`Reports & Analytics`,reportsSubtitle:`Academic performance, financial audits, and school metrics`,downloadReportBtn:`Download Full Report (.csv)`,totalRevenueCollected:`Total Tuition Collected`,schoolCapacityRate:`Overall School Enrollment Rate`,averageAttendanceMetric:`Today's Overall Attendance`,admissionConversion:`Admissions Conversion Rate`,enrolledUnit:`enrolled`,classFinanceAnalysis:`Class-by-Class Fee Collection & Overdue Debts`,marketingEfficiency:`Lead Sources (Marketing Conversion)`,shareUnit:`share`,themeDarkToast:`Dark mode enabled`,themeLightToast:`Light mode enabled`,langChangedToast:`Language changed: English`,savedToast:`Saved successfully!`,deletedToast:`Deleted successfully`,confirmDelete:`Are you sure you want to delete?`}},a=localStorage.getItem(`maktab_crm_lang`)||`uz`;function o(){return a}function s(e){return a=[`uz`,`ru`,`en`].includes(e)?e:`uz`,localStorage.setItem(`maktab_crm_lang`,a),a}function c(e,t=``){let n=i[a]||i.uz;return n&&n[e]!==void 0?n[e]:i.uz&&i.uz[e]!==void 0?i.uz[e]:t||e}function l(e){if(!e)return c(`parentRoleDefault`);let t=e.toLowerCase().trim();return t.startsWith(`ota:`)||t===`ota`?c(`parentRoleFather`):t.startsWith(`ona:`)||t===`ona`?c(`parentRoleMother`):e}function u(e){if(!e)return``;let t=e.toLowerCase();return t.includes(`to'liq`)||t===`paid`||t.includes(`to'langan`)||t===`oplacheno`?c(`statusPaid`):t.includes(`qisman`)||t===`partial`||t.includes(`chastichno`)?c(`statusPartial`):t.includes(`qarz`)||t===`debt`||t.includes(`zadolzhennost`)||t.includes(`dolg`)?c(`statusDebt`):t.includes(`belgilangan`)||t===`marked`?c(`marked`):t.includes(`belgilanmagan`)||t===`notmarked`?c(`notMarked`):e}function d(e){if(!e)return c(`days30`);let t=e.toLowerCase();return t.includes(`7`)?c(`days7`):t.includes(`30`)?c(`days30`):t.includes(`oy`)||t.includes(`month`)||t.includes(`месяц`)?c(`thisMonth`):t.includes(`yil`)||t.includes(`year`)||t.includes(`год`)?c(`yearly`):e}function f(e){if(!e)return``;let t={"boshlang'ich sinf":{uz:`Boshlang'ich sinf`,ru:`Начальные классы`,en:`Primary Classes`},matematika:{uz:`Matematika`,ru:`Математика`,en:`Mathematics`},"ingliz tili":{uz:`Ingliz tili`,ru:`Английский язык`,en:`English Language`},"ingliz tili club":{uz:`Ingliz tili club`,ru:`Английский разговорный`,en:`English Speaking Club`},informatika:{uz:`Informatika`,ru:`Информатика`,en:`Computer Science`},"ona tili va adabiyot":{uz:`Ona tili va adabiyot`,ru:`Родной язык и литература`,en:`Language & Literature`},"mental arifmetika":{uz:`Mental arifmetika`,ru:`Ментальная арифметика`,en:`Mental Arithmetic`},robototexnika:{uz:`Robototexnika`,ru:`Робототехника`,en:`Robotics`}},n=e.toLowerCase().trim();for(let[e,r]of Object.entries(t))if(n.includes(e))return r[a]||r.uz;return e}function p(e){return e.students?.length,e.leads?.length,e.leads?.filter(e=>e.stage===`yangi`).length,e.leads?.filter(e=>e.stage===`suhbat`).length,e.leads?.filter(e=>e.stage===`shartnoma`).length,e.leads?.filter(e=>e.stage===`boglanildi`).length,e.students?.reduce((e,t)=>e+(t.paidAmount||0),0),e.students?.reduce((e,t)=>e+(t.monthlyFee||0),0),(e.students?.filter(e=>(e.debtAmount||0)>0)||[]).length,`
    <!-- Top Header bar matching user request -->
    <div class="dash-welcome-header">
      <div class="dash-welcome-left">
        <h1 class="dash-clean-title">Boshqaruv paneli</h1>
      </div>

      <div class="dash-welcome-right">
        <!-- Search Box -->
        <div class="dash-search-pill" style="position: relative;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input 
            type="text" 
            placeholder="Qidirish..." 
            class="dash-search-input" 
            id="dash-global-search-input"
            autocomplete="off"
            oninput="window.app.handleGlobalSearch(this.value)"
            onfocus="window.app.handleGlobalSearch(this.value)"
          />
          <div id="dash-search-results-dropdown" class="dash-search-dropdown" style="display: none;"></div>
        </div>

        <!-- Hisobot Button replacing Director & Notification bell removed -->
        <button class="dash-report-btn" onclick="window.app.switchTab('reports')">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="20" x2="18" y2="10"></line>
            <line x1="12" y1="20" x2="12" y2="4"></line>
            <line x1="6" y1="20" x2="6" y2="14"></line>
          </svg>
          <span>Hisobot</span>
        </button>
      </div>
    </div>

    <!-- 4 Main KPI Cards Grid matching Screenshot 5 exactly -->
    <div class="dash-kpi-grid">
      
      <!-- 1. Jami yig'ilgan to'lovlar -->
      <div class="dash-kpi-card-v5" onclick="window.app.switchTab('payments')">
        <div class="kpi-v5-top">
          <span class="kpi-v5-title">Jami yig'ilgan to'lovlar</span>
          <span class="kpi-v5-badge-growth">+2.5%</span>
        </div>
        <div class="kpi-v5-main-row">
          <div class="kpi-v5-num-wrap">
            <span class="kpi-v5-big-num">128.3 mln</span>
            <span class="kpi-v5-unit">so'm</span>
          </div>
          <!-- Sparkline Chart matching image 5 -->
          <div class="kpi-v5-chart">
            <svg width="86" height="36" viewBox="0 0 86 36" fill="none">
              <defs>
                <linearGradient id="sparkGrad5" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="#10b981" stop-opacity="0.25"/>
                  <stop offset="100%" stop-color="#10b981" stop-opacity="0.0"/>
                </linearGradient>
              </defs>
              <path d="M2,28 L20,28 L35,22 L50,26 L66,16 L84,8 L84,36 L2,36 Z" fill="url(#sparkGrad5)" />
              <path d="M2,28 L20,28 L35,22 L50,26 L66,16 L84,8" stroke="#10b981" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </div>
        <div class="kpi-v5-bottom-row">
          <span class="kpi-v5-pill green">• 1 to'lagan</span>
        </div>
        <div class="kpi-v5-progress-bar">
          <div class="kpi-v5-progress-fill" style="width: 100%;"></div>
        </div>
      </div>

      <!-- 2. Maktab sig'imi to'liqligi -->
      <div class="dash-kpi-card-v5" onclick="window.app.switchTab('students')">
        <div class="kpi-v5-top">
          <span class="kpi-v5-title">Maktab sig'imi to'liqligi</span>
        </div>
        <div class="kpi-v5-main-row">
          <div class="kpi-v5-num-wrap">
            <span class="kpi-v5-big-num">13.1%</span>
            <span class="kpi-v5-sub-meta">17 / 130 o'rin</span>
          </div>
          <!-- Donut Ring Chart matching image 5 -->
          <div class="kpi-v5-donut">
            <svg width="42" height="42" viewBox="0 0 42 42">
              <circle cx="21" cy="21" r="14" fill="none" stroke="#e6f2ed" stroke-width="4.5" />
              <circle cx="21" cy="21" r="14" fill="none" stroke="#007a55" stroke-width="4.5" stroke-dasharray="88" stroke-dashoffset="76.4" stroke-linecap="round" transform="rotate(-90 21 21)" />
            </svg>
          </div>
        </div>
        <div class="kpi-v5-bottom-spacer"></div>
        <div class="kpi-v5-progress-bar">
          <div class="kpi-v5-progress-fill" style="width: 13.1%;"></div>
        </div>
      </div>

      <!-- 3. Bugungi davomat -->
      <div class="dash-kpi-card-v5" onclick="window.app.switchTab('attendance')">
        <div class="kpi-v5-top">
          <span class="kpi-v5-title">Bugungi davomat</span>
          <span class="kpi-v5-status-pill green">A'lo</span>
        </div>
        <div class="kpi-v5-main-row">
          <div class="kpi-v5-num-wrap">
            <span class="kpi-v5-big-num">91.7%</span>
            <span class="kpi-v5-sub-meta">88 / 96</span>
          </div>
          <!-- Gauge / Speedometer matching image 5 -->
          <div class="kpi-v5-gauge">
            <svg width="50" height="28" viewBox="0 0 50 28">
              <path d="M5,26 A20,20 0 0,1 45,26" fill="none" stroke="#e6f2ed" stroke-width="5" stroke-linecap="round" />
              <path d="M5,26 A20,20 0 0,1 42,14" fill="none" stroke="#007a55" stroke-width="5" stroke-linecap="round" />
              <circle cx="25" cy="25" r="3" fill="#007a55" />
              <line x1="25" y1="25" x2="38" y2="15" stroke="#007a55" stroke-width="2.2" stroke-linecap="round" />
            </svg>
          </div>
        </div>
        <div class="kpi-v5-bottom-spacer"></div>
        <div class="kpi-v5-progress-bar">
          <div class="kpi-v5-progress-fill" style="width: 91.7%;"></div>
        </div>
      </div>

      <!-- 4. Qabul konversiyasi -->
      <div class="dash-kpi-card-v5" onclick="window.app.switchTab('leads')">
        <div class="kpi-v5-top">
          <span class="kpi-v5-title">Qabul konversiyasi</span>
          <span class="kpi-v5-status-pill orange">O'rta</span>
        </div>
        <div class="kpi-v5-main-row">
          <div class="kpi-v5-num-wrap">
            <span class="kpi-v5-big-num">21.4%</span>
            <span class="kpi-v5-sub-meta">3 / 14 qabul</span>
          </div>
          <!-- Mini Bar Chart matching image 5 -->
          <div class="kpi-v5-bars">
            <span class="kpi-v5-bar active" style="height: 22px;"></span>
            <span class="kpi-v5-bar active" style="height: 18px;"></span>
            <span class="kpi-v5-bar" style="height: 14px;"></span>
            <span class="kpi-v5-bar" style="height: 10px;"></span>
          </div>
        </div>
        <div class="kpi-v5-bottom-row" style="justify-content: flex-end;">
          <span class="kpi-v5-chip-solid-orange">3qbul</span>
        </div>
        <div class="kpi-v5-progress-bar">
          <div class="kpi-v5-progress-fill" style="width: 21.4%;"></div>
        </div>
      </div>

    </div>

    <!-- Tezkor amallar Section matching Screenshot -->
    <div class="dash-quick-actions-panel">
      <div class="quick-panel-header">
        <div class="quick-panel-title-wrap">
          <h3 class="quick-panel-title">
            <span class="quick-bolt">⚡</span> Tezkor amallar
          </h3>
          <p class="quick-panel-sub">Tezkor ishlarni bir necha bosqichda bajaring.</p>
        </div>
        <button class="btn-pill-green" onclick="window.app.switchTab('leads')">
          <span>Barchasi</span>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
      </div>

      <div class="quick-cards-grid">
        
        <!-- 1. Yangi o'quvchi -->
        <div class="quick-action-card" onclick="window.app.openModal('addStudent')">
          <div class="quick-card-icon-circle icon-bg-green">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#007a55" stroke-width="2.2">
              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="8.5" cy="7" r="4"></circle>
              <line x1="20" y1="8" x2="20" y2="14"></line>
              <line x1="23" y1="11" x2="17" y2="11"></line>
            </svg>
          </div>
          <div class="quick-card-content">
            <div class="quick-card-title">Yangi o'quvchi</div>
            <div class="quick-card-desc">O'quvchini qo'shish</div>
          </div>
          <div class="quick-card-arrow arrow-green">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </div>

        <!-- 2. Yangi ariza -->
        <div class="quick-action-card" onclick="window.app.openModal('addLead')">
          <div class="quick-card-icon-circle icon-bg-blue">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2.2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
            </svg>
          </div>
          <div class="quick-card-content">
            <div class="quick-card-title">Yangi ariza</div>
            <div class="quick-card-desc">Qabul arizasi</div>
          </div>
          <div class="quick-card-arrow arrow-blue">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </div>

        <!-- 3. To'lov kiritish -->
        <div class="quick-action-card" onclick="window.app.openModal('addPayment')">
          <div class="quick-card-icon-circle icon-bg-purple">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" stroke-width="2.2">
              <rect x="2" y="4" width="20" height="16" rx="2"></rect>
              <path d="M2 10h20"></path>
              <circle cx="16" cy="15" r="1"></circle>
            </svg>
          </div>
          <div class="quick-card-content">
            <div class="quick-card-title">To'lov kiritish</div>
            <div class="quick-card-desc">To'lovni tasdiqlash</div>
          </div>
          <div class="quick-card-arrow arrow-purple">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </div>

        <!-- 4. Davomat -->
        <div class="quick-action-card" onclick="window.app.switchTab('attendance')">
          <div class="quick-card-icon-circle icon-bg-orange">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2.2">
              <rect x="3" y="4" width="18" height="18" rx="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
          </div>
          <div class="quick-card-content">
            <div class="quick-card-title">Davomat</div>
            <div class="quick-card-desc">Davomat belgilash</div>
          </div>
          <div class="quick-card-arrow arrow-orange">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </div>

        <!-- 5. Hisobot -->
        <div class="quick-action-card" onclick="window.app.switchTab('reports')">
          <div class="quick-card-icon-circle icon-bg-cyan">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" stroke-width="2.2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
            </svg>
          </div>
          <div class="quick-card-content">
            <div class="quick-card-title">Hisobot</div>
            <div class="quick-card-desc">Hisobot yaratish</div>
          </div>
          <div class="quick-card-arrow arrow-cyan">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </div>

        <!-- 6. Sozlamalar -->
        <div class="quick-action-card" onclick="window.app.toggleLanguage()">
          <div class="quick-card-icon-circle icon-bg-pink">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ec4899" stroke-width="2.2">
              <circle cx="12" cy="12" r="3"></circle>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
            </svg>
          </div>
          <div class="quick-card-content">
            <div class="quick-card-title">Sozlamalar</div>
            <div class="quick-card-desc">Tizim sozlamalari</div>
          </div>
          <div class="quick-card-arrow arrow-pink">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </div>

      </div>
    </div>

    <!-- 2 Column Section matching Screenshot 3 -->
    <div class="dash-bottom-2col-layout">
      
      <!-- Left Major Card: Qabul Voronkasi + Oktyabr oyi moliyasi -->
      <div class="dash-white-card dash-funnel-finance-card">
        
        <!-- Header -->
        <div class="card-title-bar">
          <div class="card-title-left">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#334155" stroke-width="2">
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
            </svg>
            <span class="card-heading-text">Qabul Voronkasi</span>
          </div>
          <button class="btn-pill-outline" onclick="window.app.switchTab('leads')">
            <span>Barchasini ko'rish</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>

        <!-- 4 Step Process Voronka Boxes -->
        <div class="funnel-process-steps-row">
          
          <!-- Step 1: Yangi so'rovlar -->
          <div class="funnel-step-box step-blue">
            <div class="step-box-top">
              <div class="step-icon-circle bg-blue-light">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2.2">
                  <path d="M9 18h6"></path>
                  <path d="M10 22h4"></path>
                  <path d="M12 2a7 7 0 0 0-7 7c0 2.5 1.3 4.7 3.2 6 .5.4.8 1 1 1.6V17h5.6v-.4c.2-.6.5-1.2 1-1.6 1.9-1.3 3.2-3.5 3.2-6a7 7 0 0 0-7-7z"></path>
                </svg>
              </div>
              <div class="step-title-text">1. Yangi<br/>so'rovlar</div>
            </div>
            <div class="step-bottom-bar-wrap">
              <div class="step-color-bar bar-blue"></div>
              <span class="step-badge badge-blue">4 ta</span>
            </div>
          </div>

          <!-- Step 2: Bog'lanildi & ma'lumot -->
          <div class="funnel-step-box step-orange">
            <div class="step-box-top">
              <div class="step-icon-circle bg-orange-light">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ea580c" stroke-width="2.2">
                  <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                </svg>
              </div>
              <div class="step-title-text">2. Bog'lanildi<br/>&amp; ma'lumot</div>
            </div>
            <div class="step-bottom-bar-wrap">
              <div class="step-color-bar bar-orange"></div>
              <span class="step-badge badge-orange">4 ta</span>
            </div>
          </div>

          <!-- Step 3: Suhbat davomati -->
          <div class="funnel-step-box step-purple">
            <div class="step-box-top">
              <div class="step-icon-circle bg-purple-light">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9333ea" stroke-width="2.2">
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                </svg>
              </div>
              <div class="step-title-text">3. Suhbat<br/>davomati</div>
            </div>
            <div class="step-bottom-bar-wrap">
              <div class="step-color-bar bar-purple"></div>
              <span class="step-badge badge-purple">4 ta</span>
            </div>
          </div>

          <!-- Step 4: Shartnoma imzolandi -->
          <div class="funnel-step-box step-green">
            <div class="step-box-top">
              <div class="step-icon-circle bg-green-light">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2.2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <path d="M9 15l2 2 4-4"></path>
                </svg>
              </div>
              <div class="step-title-text">4. Shartnoma<br/>imzolandi</div>
            </div>
            <div class="step-bottom-bar-wrap">
              <div class="step-color-bar bar-green"></div>
              <span class="step-badge badge-green">4 ta</span>
            </div>
          </div>

        </div>

        <!-- Oktyabr oyi moliyasi Sub-section -->
        <div class="finance-overview-subcard">
          <div class="finance-subcard-title">Oktyabr oyi moliyasi</div>
          
          <div class="finance-subcard-main">
            <!-- Green Donut ring -->
            <div class="finance-donut-ring">
              <svg width="48" height="48" viewBox="0 0 48 48">
                <circle cx="24" cy="24" r="18" stroke="#e2e8f0" stroke-width="6" fill="none" />
                <circle cx="24" cy="24" r="18" stroke="#00a86b" stroke-width="6" stroke-dasharray="113" stroke-dashoffset="30" fill="none" stroke-linecap="round" />
              </svg>
            </div>

            <!-- Text & Bar Info -->
            <div class="finance-info-col">
              <div class="finance-revenue-row">
                <span class="finance-rev-text">Tushum: <strong>128,350,000 so'm (216%)</strong></span>
                <span class="finance-growth-arrow">&uarr;</span>
              </div>
              <!-- Green Full Progress bar -->
              <div class="finance-green-progress-track">
                <div class="finance-green-progress-fill" style="width: 100%;"></div>
              </div>
              <!-- Expected and Debtors -->
              <div class="finance-expected-row">
                <span class="text-expected">Kutilayotgan: 59,440,000 so'm</span>
                <div class="finance-right-badges">
                  <span class="debtor-alert-pill">
                    <span class="alert-icon">!</span> 12 ta qarzdor oila
                  </span>
                  <button class="btn-subcard-details" onclick="window.app.switchTab('payments')">Batafsil</button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- Right Card: Bugungi reja -->
      <div class="dash-white-card dash-today-schedule-card">
        <div class="card-title-bar">
          <div class="card-title-left">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#334155" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span class="card-heading-text">Bugungi reja</span>
          </div>
        </div>

        <div class="schedule-items-list">
          
          <!-- Item 1: Psixolog suhbati -->
          <div class="schedule-item-box item-border-red">
            <div class="schedule-item-top">
              <div class="schedule-item-title-wrap">
                <span class="schedule-emoji">👫</span>
                <span class="schedule-title-text">Psixolog suhbati</span>
              </div>
              <input type="checkbox" class="schedule-checkbox" />
            </div>
            <div class="schedule-item-sub">14:00 - Umar Nazarov (6-sinf)</div>
          </div>

          <!-- Item 2: Sinflar davomati -->
          <div class="schedule-item-box">
            <div class="schedule-item-top">
              <div class="schedule-item-title-wrap">
                <span class="schedule-emoji">🏫</span>
                <span class="schedule-title-text">Sinflar davomati</span>
              </div>
            </div>
            <div class="schedule-item-sub">2-A va 4-B</div>
            <button class="btn-schedule-action" onclick="window.app.showToast('O'qituvchilarga eslatma yuborildi!', 'success')">
              O'qituvchilarga eslatma yuborish
            </button>
          </div>

          <!-- Item 3: To'lov eslatmalari -->
          <div class="schedule-item-box">
            <div class="schedule-item-top">
              <div class="schedule-item-title-wrap">
                <span class="schedule-emoji">🔔</span>
                <span class="schedule-title-text">To'lov eslatmalari</span>
              </div>
            </div>
            <div class="schedule-action-row">
              <span class="schedule-action-desc">Oylik to'lov muddati o'tgan...</span>
              <button class="btn-schedule-action-pill" onclick="window.app.showToast('SMS eslatmalar yuborildi!', 'success')">
                SMS yuborish
              </button>
            </div>
          </div>

        </div>
      </div>

    </div>
  `}function m(e,t=``,n=`all`,r=null){let i=e.leads||[];if(r&&r!==`Hammasi`&&(i=i.filter(e=>e.source===r)),t.trim()){let e=t.toLowerCase().trim();i=i.filter(t=>t.name.toLowerCase().includes(e)||t.phone.toLowerCase().includes(e)||t.parent&&t.parent.toLowerCase().includes(e))}let a=i.filter(e=>e.stage===`yangi`),o=i.filter(e=>e.stage===`boglanildi`),s=i.filter(e=>e.stage===`suhbat`),l=i.filter(e=>e.stage===`shartnoma`);function u(e){let t=`tag-instagram`;return e.source===`Telegram`?t=`tag-telegram`:e.source===`Tavsiya`?t=`tag-tavsiya`:e.source===`Sayt`&&(t=`tag-sayt`),`
      <div class="lead-card" draggable="true" ondragstart="window.app.handleDragStart(event, '${e.id}')" onclick="window.app.openLeadDetails('${e.id}')">
        <div class="lead-card-header">
          <span class="lead-name">${e.name}</span>
          <span class="grade-badge">${e.grade}</span>
        </div>
        <div class="lead-meta">
          <div>${e.parent}</div>
          <div class="lead-phone">${e.phone}</div>
        </div>
        <div class="lead-card-footer">
          <span class="tag-badge ${t}">${e.source}</span>
          <div class="lead-footer-right">
            <span class="lead-date">${e.date}</span>
            <div class="manager-avatar">${e.manager}</div>
          </div>
        </div>
      </div>
    `}return`
    <div class="page-header">
      <div class="header-title-block">
        <h2>${c(`leadsTitle`)}</h2>
        <p class="header-sub">${c(`leadsSubtitle`)}</p>
      </div>
      <div class="header-actions">
        <div class="search-box">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input 
            type="text" 
            class="search-input" 
            placeholder="${c(`searchLeadPlaceholder`)}" 
            value="${t}"
            oninput="window.app.filterLeads(this.value)"
          />
        </div>

        <button class="btn btn-secondary" onclick="window.app.toggleLeadFilterModal()">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="4" y1="21" x2="4" y2="14"></line>
            <line x1="4" y1="10" x2="4" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12" y2="3"></line>
            <line x1="20" y1="21" x2="20" y2="16"></line>
            <line x1="20" y1="12" x2="20" y2="3"></line>
            <line x1="1" y1="14" x2="7" y2="14"></line>
            <line x1="9" y1="8" x2="15" y2="8"></line>
            <line x1="17" y1="16" x2="23" y2="16"></line>
          </svg>
          <span>${c(`filterBtn`)}</span>
        </button>

        <button class="btn btn-primary" onclick="window.app.openModal('addLead')">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          <span>${c(`newRequest`)}</span>
        </button>
      </div>
    </div>

    <!-- 4 KPI Cards matching Screenshot 5 -->
    <div class="leads-stats-line-grid">
      <!-- 1. Qabul arizalari -->
      <div class="lead-line-stat-card">
        <div class="lead-line-card-top">
          <div class="lead-line-title-group text-blue">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <span>Qabul arizalari</span>
          </div>
          <div class="lead-line-top-icon text-blue">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
            </svg>
          </div>
        </div>
        <div class="lead-line-card-num">${i.length} ta ariza</div>
        <div class="lead-line-bottom-indicator bg-blue"></div>
      </div>

      <!-- 2. Yangi -->
      <div class="lead-line-stat-card">
        <div class="lead-line-card-top">
          <div class="lead-line-title-group text-orange">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ea580c" stroke-width="2">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
            <span>Yangi</span>
          </div>
          <div class="lead-line-top-icon text-orange">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ea580c" stroke-width="2">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            </svg>
          </div>
        </div>
        <div class="lead-line-card-num">${a.length} ta</div>
        <div class="lead-line-bottom-indicator bg-orange"></div>
      </div>

      <!-- 3. Suhbat -->
      <div class="lead-line-stat-card">
        <div class="lead-line-card-top">
          <div class="lead-line-title-group text-purple">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9333ea" stroke-width="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            <span>Suhbat</span>
          </div>
          <div class="lead-line-top-icon text-purple">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9333ea" stroke-width="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
          </div>
        </div>
        <div class="lead-line-card-num">${s.length} ta</div>
        <div class="lead-line-bottom-indicator bg-purple"></div>
      </div>

      <!-- 4. Shartnoma -->
      <div class="lead-line-stat-card">
        <div class="lead-line-card-top">
          <div class="lead-line-title-group text-green">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              <polyline points="9 12 11 14 15 10"></polyline>
            </svg>
            <span>Shartnoma</span>
          </div>
          <div class="lead-line-top-icon text-green">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
        </div>
        <div class="lead-line-card-num">${l.length} ta</div>
        <div class="lead-line-bottom-indicator bg-green"></div>
      </div>
    </div>

    <!-- Mobile Column Switcher (Visible on phone) -->
    <div class="pill-filters mobile-col-switcher" style="display: none;">
      <button class="filter-pill ${n===`all`?`active`:``}" onclick="window.app.switchMobileLeadCol('all')">
        ${c(`all`)} (${i.length})
      </button>
      <button class="filter-pill ${n===`yangi`?`active`:``}" onclick="window.app.switchMobileLeadCol('yangi')">
        ${c(`yangi`)} (${a.length})
      </button>
      <button class="filter-pill ${n===`boglanildi`?`active`:``}" onclick="window.app.switchMobileLeadCol('boglanildi')">
        ${c(`boglanildi`)} (${o.length})
      </button>
      <button class="filter-pill ${n===`suhbat`?`active`:``}" onclick="window.app.switchMobileLeadCol('suhbat')">
        ${c(`suhbat`)} (${s.length})
      </button>
      <button class="filter-pill ${n===`shartnoma`?`active`:``}" onclick="window.app.switchMobileLeadCol('shartnoma')">
        ${c(`shartnoma`)} (${l.length})
      </button>
    </div>

    <!-- 4-Column Kanban Board -->
    <div class="kanban-board">
      
      <!-- Column 1: Yangi -->
      <div 
        class="kanban-column ${n!==`all`&&n!==`yangi`?`hide-on-mobile`:``}"
        ondragover="window.app.handleDragOver(event)"
        ondrop="window.app.handleDrop(event, 'yangi')"
      >
        <div class="kanban-col-header">
          <div class="kanban-col-title">
            <span class="dot-indicator dot-blue"></span>
            <span>${c(`yangi`)}</span>
          </div>
          <span class="col-badge-count">${a.length}</span>
        </div>
        <div class="kanban-cards-list">
          ${a.map(u).join(``)}
        </div>
        <button class="btn-add-lead-col" onclick="window.app.openModal('addLead', 'yangi')">
          + ${c(`addLeadInCol`)}
        </button>
      </div>

      <!-- Column 2: Bog'lanildi -->
      <div 
        class="kanban-column ${n!==`all`&&n!==`boglanildi`?`hide-on-mobile`:``}"
        ondragover="window.app.handleDragOver(event)"
        ondrop="window.app.handleDrop(event, 'boglanildi')"
      >
        <div class="kanban-col-header">
          <div class="kanban-col-title">
            <span class="dot-indicator dot-orange"></span>
            <span>${c(`boglanildi`)}</span>
          </div>
          <span class="col-badge-count">${o.length}</span>
        </div>
        <div class="kanban-cards-list">
          ${o.map(u).join(``)}
        </div>
        <button class="btn-add-lead-col" onclick="window.app.openModal('addLead', 'boglanildi')">
          + ${c(`addLeadInCol`)}
        </button>
      </div>

      <!-- Column 3: Suhbat / test -->
      <div 
        class="kanban-column ${n!==`all`&&n!==`suhbat`?`hide-on-mobile`:``}"
        ondragover="window.app.handleDragOver(event)"
        ondrop="window.app.handleDrop(event, 'suhbat')"
      >
        <div class="kanban-col-header">
          <div class="kanban-col-title">
            <span class="dot-indicator dot-purple"></span>
            <span>${c(`suhbat`)}</span>
          </div>
          <span class="col-badge-count">${s.length}</span>
        </div>
        <div class="kanban-cards-list">
          ${s.map(u).join(``)}
        </div>
        <button class="btn-add-lead-col" onclick="window.app.openModal('addLead', 'suhbat')">
          + ${c(`addLeadInCol`)}
        </button>
      </div>

      <!-- Column 4: Shartnoma -->
      <div 
        class="kanban-column ${n!==`all`&&n!==`shartnoma`?`hide-on-mobile`:``}"
        ondragover="window.app.handleDragOver(event)"
        ondrop="window.app.handleDrop(event, 'shartnoma')"
      >
        <div class="kanban-col-header">
          <div class="kanban-col-title">
            <span class="dot-indicator dot-green"></span>
            <span>${c(`shartnoma`)}</span>
          </div>
          <span class="col-badge-count">${l.length}</span>
        </div>
        <div class="kanban-cards-list">
          ${l.map(u).join(``)}
        </div>
        <button class="btn-add-lead-col" onclick="window.app.openModal('addLead', 'shartnoma')">
          + ${c(`addLeadInCol`)}
        </button>
      </div>

    </div>
  `}function h(e){return e==null?`0`:e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,` `)}function g(e,t=`all`,n=``,r=null,i=null){let a=e.students||[],o=e.classes||[],s=n.trim().length>0,l=[];if(s){let e=n.toLowerCase().trim();l=a.filter(t=>t.name.toLowerCase().includes(e)||t.phone&&t.phone.toLowerCase().includes(e)||t.parentName&&t.parentName.toLowerCase().includes(e)||t.sinf&&t.sinf.toLowerCase().includes(e))}let u=[{id:`all`,label:c(`all`)},{id:`1-sinf`,label:`1-sinf`},{id:`2-sinf`,label:`2-sinf`},{id:`3-sinf`,label:`3-sinf`},{id:`4-sinf`,label:`4-sinf`},{id:`5-sinf`,label:`5-sinf`},{id:`debt`,label:c(`debtorsOnly`)}];return`
    <!-- Top Header: Title on Left, Compact Search + Add on Right -->
    <div class="students-page-header">
      <div class="students-header-title-wrap">
        <h2>${c(`studentsTitle`)}</h2>
        <p class="header-sub">${c(`studentsSubtitle`)}</p>
      </div>

      <div class="students-header-compact-actions">
        <div class="search-box-compact">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input 
            type="text" 
            class="search-input-compact" 
            placeholder="${c(`search`)}" 
            value="${n}"
            oninput="window.app.filterStudentsSearch(this.value)"
          />
        </div>

        <button class="btn btn-primary btn-add-compact" onclick="window.app.exportStudentsCSV()" title="${c(`exportCsv`)}">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          <span>${c(`exportBtn`)}</span>
        </button>

        <button class="btn btn-primary btn-add-compact" onclick="window.app.openModal('addStudent')">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          <span>${c(`addStudentBtn`)}</span>
        </button>
      </div>
    </div>

    <!-- Filter Pills: Hammasi, 1-sinf, 2-sinf, 3-sinf, 4-sinf, 5-sinf, Qarzdorlar -->
    <div class="pill-filters">
      ${u.map(e=>`
        <button 
          class="filter-pill ${t===e.id?`active`:``}" 
          onclick="window.app.filterStudentsPill('${e.id}')"
        >
          ${e.label}
        </button>
      `).join(``)}
    </div>

    <!-- MAIN CONTENT AREA -->
    ${s?x(l,n):r?v(e,r,t):t===`debt`?b(a):_(o,a,t)}
  `}function _(e,t,n){let r=e;return n!==`all`&&(r=e.filter(e=>e.name.startsWith(n.replace(`-sinf`,``)))),`
    <div class="classes-overview-section">
      <div class="section-title-bar">
        <div>
          <h3 class="section-heading">${c(`schoolClasses`)}</h3>
          <p class="section-desc">${c(`selectClassHint`)}</p>
        </div>
        <span class="badge-counter">${r.length} ${c(`classUnit`)}</span>
      </div>

      <div class="class-cards-grid">
        ${r.map(e=>{let n=t.filter(t=>t.sinf===e.name),r=n.length,i=0,a=0,o=0;n.forEach(e=>{e.paymentStatusCode===`paid`||e.debtAmount===0&&(e.paidAmount||0)>0?i++:e.paymentStatusCode===`partial`?a++:(e.paymentStatusCode===`debt`||(e.debtAmount||0)>0)&&o++});let s=Math.min(100,Math.round(r/(e.capacity||20)*100));return`
            <div class="student-class-card" onclick="window.app.selectStudentClass('${e.name}')">
              <div class="class-card-top">
                <div class="class-card-badge">${e.name}</div>
                <div class="class-card-meta">
                  <div class="class-card-title">${e.name} Sinf</div>
                  <div class="class-card-sub">${e.room?e.room.replace(/\D/g,``)?`${e.room.replace(/\D/g,``)}-xona`:e.room:`12-xona`} • ${e.teacherName||c(`homeroomTeacherLabel`)}</div>
                </div>
              </div>

              <!-- Capacity & Progress -->
              <div class="class-card-stats-row">
                <div class="class-stat-label">O'quvchilar soni</div>
                <div class="class-stat-val"><strong>${r}</strong> / ${e.capacity||20}</div>
              </div>
              <div class="progress-bar-wrap">
                <div class="progress-bar-fill" style="width: ${s}%;"></div>
              </div>

              <!-- Payment Breakdown Badges matching Screenshot 4 -->
              <div class="class-payment-breakdown">
                ${i>0?`
                  <span class="pay-chip green" title="${c(`statusPaid`)}">
                    • ${i} to'lagan
                  </span>
                `:`
                  <span class="pay-chip green" style="opacity: 0.6;">
                    • 0 to'lagan
                  </span>
                `}
                ${a>0?`
                  <span class="pay-chip orange" title="${c(`statusPartial`)}">
                    • ${a} qisman
                  </span>
                `:``}
                ${o>0?`
                  <span class="pay-chip red" title="${c(`statusDebt`)}">
                    • ${o} qarzdor
                  </span>
                `:``}
              </div>

              <!-- Action Footer matching Screenshot 4 -->
              <div class="class-card-footer">
                <button class="btn-open-class" onclick="event.stopPropagation(); window.app.selectStudentClass('${e.name}')">
                  <span>Sinfga kirish</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          `}).join(``)}
      </div>
    </div>
  `}function v(e,t,n){let r=(e.students||[]).filter(e=>e.sinf===t),i=e.classes?.find(e=>e.name===t)||{name:t,room:c(`room`),teacherName:c(`homeroomTeacherLabel`)},a=t.charAt(0),o=e.classes?.filter(e=>e.name.startsWith(a))||[],s=0,l=0;return r.forEach(e=>{s+=e.paidAmount||0,l+=e.debtAmount||0}),`
    <div class="single-class-container">
      
      <!-- Back button and Navigation Bar -->
      <div class="class-nav-bar">
        <button class="btn-back-to-classes" onclick="window.app.selectStudentClass(null)">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
          <span>${c(`allClassesBack`)}</span>
        </button>

        ${o.length>1?`
          <div class="sibling-classes-tabs">
            ${o.map(e=>`
              <button 
                class="sibling-tab ${e.name===t?`active`:``}" 
                onclick="window.app.selectStudentClass('${e.name}')"
              >
                ${e.name}
              </button>
            `).join(``)}
          </div>
        `:``}
      </div>

      <!-- Class Summary Card -->
      <div class="class-summary-card">
        <div class="class-summary-header">
          <div class="class-summary-badge">${i.name}</div>
          <div class="class-summary-details">
            <h3>${i.name} ${c(`classStudentsOf`)}</h3>
            <p>${i.room||c(`room`)} • ${c(`leaderLabel`)}: <strong>${i.teacherName||c(`homeroomTeacherLabel`)}</strong></p>
          </div>
          <div class="class-count-pill">${r.length} ${c(`studentsCountUnit`)}</div>
        </div>

        <div class="class-financial-strip">
          <div class="fin-stat-item">
            <span class="fin-stat-label">${c(`paidAmountSummary`)}</span>
            <span class="fin-stat-value text-green">${h(s)} ${c(`som`)}</span>
          </div>
          <div class="fin-stat-divider"></div>
          <div class="fin-stat-item">
            <span class="fin-stat-label">${c(`debtSummary`)}</span>
            <span class="fin-stat-value ${l>0?`text-red`:`text-green`}">${h(l)} ${c(`som`)}</span>
          </div>
        </div>
      </div>

      <!-- Student Cards List -->
      <div class="student-cards-list">
        ${r.length===0?`
          <div class="empty-students-box">
            <p>${c(`emptyClassStudents`)}</p>
            <button class="btn btn-primary" onclick="window.app.openModal('addStudent')">
              ${c(`addStudent`)}
            </button>
          </div>
        `:r.map(e=>y(e)).join(``)}
      </div>

    </div>
  `}function y(e){let t=`status-paid`,n=c(`statusPaid`),r=`${h(e.monthlyFee||3e6)} ${c(`som`)} ${c(`fullyPaid`)}`;e.paymentStatusCode===`partial`||(e.paidAmount||0)>0&&(e.debtAmount||0)>0?(t=`status-partial`,n=c(`statusPartial`),r=`${c(`paidSoFar`)}: ${h(e.paidAmount)} ${c(`som`)} • ${c(`debtRemaining`)}: ${h(e.debtAmount)} ${c(`som`)}`):(e.paymentStatusCode===`debt`||(e.debtAmount||0)>0)&&(t=`status-debt`,n=c(`statusDebt`),r=`${c(`debtSummary`)}: ${h(e.debtAmount||e.monthlyFee||3e6)} ${c(`som`)}`);let i=l(e.parentRole||`Ota`);return`
    <div class="student-item-card">
      <div class="student-item-header">
        <div class="student-avatar">${e.initials||`OQ`}</div>
        <div class="student-identity">
          <h4 class="student-name">${e.name}</h4>
          <div class="student-meta-sub">
            <span class="badge-sinf">${e.sinf||`1-A`}</span>
            <span class="badge-attendance">${c(`attendance`)}: ${e.attendance||`95%`}</span>
          </div>
        </div>
      </div>

      <!-- Parent & Phone -->
      <div class="student-contact-row">
        <div class="contact-parent">
          <span class="contact-label">${i}:</span>
          <span class="contact-name">${e.parentName||e.parent||`—`}</span>
        </div>
        <a href="tel:${e.phone}" class="contact-phone-btn" title="${c(`callParent`)}">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          <span>${e.phone}</span>
        </a>
      </div>

      <!-- Payment Status Block -->
      <div class="student-payment-banner ${t}">
        <div class="pay-banner-top">
          <span class="pay-badge ${t}">${n}</span>
          <span class="pay-amount-info">${r}</span>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="student-card-actions">
        <button class="btn-card-action pay" onclick="window.app.openQuickPayModal('${e.id}')">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
            <line x1="1" y1="10" x2="23" y2="10"></line>
          </svg>
          <span>${c(`payments`)}</span>
        </button>

        <button class="btn-card-action edit" onclick="window.app.openEditStudentModal('${e.id}')">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
          </svg>
          <span>${c(`edit`)}</span>
        </button>

        <button class="btn-card-action info" onclick="window.app.openStudentDetailsModal('${e.id}')">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
          <span>${c(`studentDetails`)}</span>
        </button>
      </div>
    </div>
  `}function b(e){let t=e.filter(e=>e.paymentStatusCode===`debt`||e.paymentStatusCode===`partial`||(e.debtAmount||0)>0),n=0;return t.forEach(e=>n+=e.debtAmount||0),`
    <div class="debtors-view-container">
      <div class="debtors-summary-banner">
        <div>
          <h3>${c(`debtorsOnly`)}</h3>
          <p>${t.length} ${c(`debtorFamiliesCount`)}</p>
        </div>
        <div class="debt-total-amount">
          <span class="label">${c(`debtSummary`)}:</span>
          <span class="amount text-red">${h(n)} ${c(`som`)}</span>
        </div>
      </div>

      <div class="student-cards-list">
        ${t.length===0?`
          <div class="empty-students-box">
            <p>${c(`noDebt`)}</p>
          </div>
        `:t.map(e=>y(e)).join(``)}
      </div>
    </div>
  `}function x(e,t){return`
    <div class="search-results-section">
      <div class="section-title-bar">
        <h3>${c(`searchResultsFor`)}: "${t}"</h3>
        <span class="badge-counter">${e.length} ${c(`studentsCountUnit`)}</span>
      </div>

      <div class="student-cards-list">
        ${e.length===0?`
          <div class="empty-students-box">
            <p>${c(`noResultsFound`)}</p>
          </div>
        `:e.map(e=>y(e)).join(``)}
      </div>
    </div>
  `}function S(e){let t=e.classes||[],n=e.teachers||[];return`
    <div class="page-header">
      <div class="header-title-block">
        <h2>${c(`classesTitle`)}</h2>
        <p>${c(`academicYear`)}</p>
      </div>
      <div class="header-actions">
        <button class="btn btn-secondary" onclick="window.app.openModal('addTeacher')">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          <span>${c(`addTeacherBtn`)}</span>
        </button>
        <button class="btn btn-primary" onclick="window.app.openModal('addClass')">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          <span>${c(`addClassBtn`)}</span>
        </button>
      </div>
    </div>

    <!-- Section: Sinflar -->
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
      <h3 class="section-title" style="margin: 0;">${c(`classesSection`)}</h3>
      <span style="font-size: 12.5px; color: var(--text-muted);">${c(`classesHint`)}</span>
    </div>
    <div class="classes-grid">
      ${t.map(e=>{let t=Math.min(100,Math.round(e.currentStudents/e.capacity*100)),n=e.room?e.room.replace(/\D/g,``)?`${e.room.replace(/\D/g,``)}-xona`:e.room:`12-xona`;return`
          <div class="student-class-card" style="cursor: pointer;" onclick="window.app.switchTab('students'); window.app.selectStudentClass('${e.name}')">
            <div class="class-card-top" style="justify-content: space-between;">
              <div style="display: flex; align-items: center; gap: 12px;">
                <div class="class-card-badge">${e.name}</div>
                <div class="class-card-meta">
                  <div class="class-card-title">${e.name} Sinf</div>
                  <div class="class-card-sub">${n} • ${e.teacherName||c(`homeroomTeacherLabel`)}</div>
                </div>
              </div>
              <button 
                type="button" 
                class="btn-close-modal" 
                style="width: 24px; height: 24px; padding: 2px; color: #ef4444; border-radius: 6px; border: none; background: transparent; cursor: pointer;"
                onclick="event.stopPropagation(); window.app.deleteClass('${e.id}')"
                title="${c(`deleteClassTitle`)}"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                </svg>
              </button>
            </div>
            
            <div class="class-card-stats-row">
              <span class="class-card-stats-label">${c(`studentsInClass`)}</span>
              <span class="class-card-stats-val">${e.currentStudents} / ${e.capacity}</span>
            </div>

            <div class="class-card-progress-bar">
              <div class="class-card-progress-fill" style="width: ${t}%;"></div>
            </div>

            <button class="class-card-enter-btn">
              <span>Sinfga kirish</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        `}).join(``)}
    </div>

    <!-- Section: O'qituvchilar -->
    <h3 class="section-title">${c(`teachersSection`)}</h3>
    <div class="table-card">
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>${c(`teacherColName`)}</th>
              <th>${c(`teacherColSubject`)}</th>
              <th>${c(`teacherColClasses`)}</th>
              <th>${c(`teacherColHours`)}</th>
              <th style="text-align: right;">${c(`actions`)}</th>
            </tr>
          </thead>
          <tbody>
            ${n.map(e=>`
              <tr>
                <td>
                  <div class="cell-user">
                    <div class="cell-user-avatar">${e.initials}</div>
                    <div>
                      <div class="cell-user-name">${e.name}</div>
                      ${e.phone?`<div style="font-size: 11px; color: var(--text-muted);">${e.phone}</div>`:``}
                    </div>
                  </div>
                </td>
                <td style="color: var(--text-secondary);">${f(e.subject)}</td>
                <td style="color: var(--text-secondary);">${e.classes}</td>
                <td style="font-weight: 600; color: var(--text-main);">${e.weeklyHours} ${c(`hoursUnit`)}</td>
                <td style="text-align: right;">
                  <button 
                    class="btn-card-action edit" 
                    style="display: inline-flex; padding: 4px 8px; font-size: 12px; color: #ef4444;"
                    onclick="window.app.deleteTeacher('${e.id}')"
                    title="${c(`deleteTeacherTitle`)}"
                  >
                    ${c(`delete`)}
                  </button>
                </td>
              </tr>
            `).join(``)}
          </tbody>
        </table>
      </div>
    </div>
  `}function C(e){return e==null?`0`:e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,` `)}function w(e,t=null,n=``,r=`30 kun`){let i=e.students||[],a=e.classes||[],o=i.reduce((e,t)=>e+(t.paidAmount||0),0),s=i.reduce((e,t)=>e+(t.monthlyFee||0),0),l=i.reduce((e,t)=>e+(t.debtAmount||0),0),u=s>0?Math.round(o/s*100):0,f=s>0?Math.round(l/s*100):0,p=o,m=(n||``).trim().toLowerCase(),h=i;t&&t!==`all`&&(h=h.filter(e=>e.sinf===t)),m.length>0&&(h=h.filter(e=>e.name.toLowerCase().includes(m)||e.sinf&&e.sinf.toLowerCase().includes(m)||e.phone&&e.phone.includes(m)));let g=d(r);return`
    <div class="payments-page-wrapper">
      
      <!-- Desktop & Tablet Header Strip -->
      <div class="page-header desktop-only-flex">
        <div class="header-title-block">
          <h2>${c(`paymentsTitle`)}</h2>
          <p>${c(`paymentsSubtitle`)}</p>
        </div>

        <div class="header-actions">
          <button class="btn btn-primary" onclick="window.app.exportPaymentsToCSV()">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            <span>${c(`exportPaymentsBtn`)}</span>
          </button>

          <button class="btn btn-primary" onclick="window.app.openModal('addPayment')">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            <span>${c(`newPayment`)}</span>
          </button>
        </div>
      </div>

      <!-- Main Overview Card (Responsive: Spacious Stacked on Mobile, Side-by-Side on Tablet/PC) -->
      <div class="payments-overview-card">
        
        <!-- Revenue Section -->
        <div class="payments-revenue-block">
          <div class="payments-revenue-label">${c(`monthRevenue`)}</div>
          <div class="payments-revenue-row">
            <div class="payments-revenue-sum">${C(p)} ${c(`som`)}</div>
            
            <div class="payments-period-selector" style="position: relative;">
              <button 
                type="button" 
                class="payments-period-pill-btn" 
                id="period-toggle-btn"
                onclick="window.app.togglePaymentPeriodMenu(event)"
                aria-expanded="false"
              >
                <span>${g}</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>

              <!-- Period Dropdown Menu -->
              <div class="payments-period-dropdown" id="payments-period-dropdown" style="display: none;">
                <div class="period-option ${r===`7 kun`?`selected`:``}" onclick="window.app.setPaymentPeriod('7 kun')">${c(`days7`)}</div>
                <div class="period-option ${r===`30 kun`?`selected`:``}" onclick="window.app.setPaymentPeriod('30 kun')">${c(`days30`)}</div>
                <div class="period-option ${r===`Shu oy`?`selected`:``}" onclick="window.app.setPaymentPeriod('Shu oy')">${c(`thisMonth`)}</div>
                <div class="period-option ${r===`Yillik`?`selected`:``}" onclick="window.app.setPaymentPeriod('Yillik')">${c(`yearly`)}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Gauges Section: 2 circular progress indicators (Spacious cards on mobile) -->
        <div class="payments-gauges-row">
          
          <!-- Gauge 1: Green (To'lov qilingan / Оплачено / Paid) -->
          <div class="payment-gauge-item">
            <div class="payment-gauge-circle-wrap">
              <svg viewBox="0 0 36 36" class="payment-circular-chart chart-green">
                <path class="circle-track" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                <path class="circle-fill" stroke-dasharray="${u}, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              </svg>
              <span class="payment-gauge-center-text">${u}%</span>
            </div>
            <div class="payment-gauge-meta">
              <div class="payment-gauge-title">${c(`paidSoFar`)}</div>
              <div class="payment-gauge-sub">${C(o)} ${c(`som`)}</div>
            </div>
          </div>

          <!-- Gauge 2: Yellow/Amber (Qoldiq qarz / Остаток долга / Remaining Debt) -->
          <div class="payment-gauge-item">
            <div class="payment-gauge-circle-wrap">
              <svg viewBox="0 0 36 36" class="payment-circular-chart chart-yellow">
                <path class="circle-track" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                <path class="circle-fill" stroke-dasharray="${f}, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              </svg>
              <span class="payment-gauge-center-text">${f}%</span>
            </div>
            <div class="payment-gauge-meta">
              <div class="payment-gauge-title">${c(`debtRemaining`)}</div>
              <div class="payment-gauge-sub">${C(l)} ${c(`som`)}</div>
            </div>
          </div>

        </div>

      </div>

      <!-- Controls & Toolbar: Header + Class Filter Pills + Search input -->
      <div class="payments-controls-bar">
        <div class="payments-section-header">
          <h3 class="payments-section-title">${c(`detailedStudents`)}</h3>
          <span class="badge-counter">${h.length} ${c(`studentsCountUnit`)}</span>
        </div>

        <div class="payments-toolbar-actions">
          <!-- Class Filter Pills -->
          <div class="payments-class-pills">
            <button class="filter-pill ${!t||t===`all`?`active`:``}" onclick="window.app.selectPaymentClass('all')">${c(`all`)}</button>
            ${a.map(e=>`
              <button class="filter-pill ${t===e.name?`active`:``}" onclick="window.app.selectPaymentClass('${e.name}')">${e.name}</button>
            `).join(``)}
          </div>

          <!-- Search Bar -->
          <div class="payments-search-container">
            <svg class="payments-search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input 
              type="text" 
              class="payments-search-input" 
              placeholder="${c(`search`)}" 
              value="${n}" 
              oninput="window.app.filterPaymentsSearch(this.value)"
            />
            ${n?`
              <button class="payments-search-clear-btn" onclick="window.app.filterPaymentsSearch('')" aria-label="${c(`close`)}">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            `:``}
          </div>
        </div>
      </div>

      <!-- Students Payment Cards List -->
      <div class="payments-students-list">
        ${h.length===0?`
          <div class="payments-empty-state" style="grid-column: 1 / -1;">
            <p>${c(`noStudentFound`)}</p>
          </div>
        `:h.map((e,t)=>{let n=e.annualFee?C(e.annualFee):e.monthlyFee?C(e.monthlyFee):`3 000 000`,r=e.initials;if(!r){let t=(e.name||``).trim().split(/\s+/);r=t.length>=2?(t[0][0]+t[1][0]).toUpperCase():t[0].slice(0,2).toUpperCase()}let i=[{bg:`#eff6ff`,color:`#2563eb`},{bg:`#f0fdf4`,color:`#16a34a`},{bg:`#faf5ff`,color:`#9333ea`},{bg:`#fff7ed`,color:`#ea580c`},{bg:`#fdf2f8`,color:`#db2777`},{bg:`#f0f9ff`,color:`#0284c7`}],a=i[t%i.length],o=`dot-green`,s=c(`statusPaid`);return e.paymentStatusCode===`paid`||e.debtAmount===0&&(e.paidAmount||0)>0?(o=`dot-green`,s=c(`statusPaid`)):e.paymentStatusCode===`partial`||(e.paidAmount||0)>0&&(e.debtAmount||0)>0?(o=`dot-yellow`,s=c(`statusPartial`)):(e.paymentStatusCode===`debt`||(e.debtAmount||0)>0)&&(o=`dot-red`,s=c(`statusDebt`)),`
            <div class="payment-student-card" onclick="window.app.openQuickPayModal('${e.id}')">
              <!-- Left side: Avatar Initials + Name + Class badge -->
              <div class="payment-student-info">
                <div class="payment-student-avatar-badge" style="background: ${a.bg}; color: ${a.color};">
                  ${r}
                </div>
                <div class="payment-student-text">
                  <div class="payment-student-name">${e.name}</div>
                  <div class="payment-student-class-badge">${e.sinf||`3-A`}</div>
                </div>
              </div>

              <!-- Right side: Amount + Status indicator + Receipt button -->
              <div class="payment-student-pricing">
                <div class="payment-student-amount">${n} ${c(`som`)}</div>
                <div class="payment-student-status">
                  <span class="status-indicator-dot ${o}"></span>
                  <span class="status-indicator-text">${s}</span>
                </div>
                <div style="display: flex; align-items: center; justify-content: flex-end; margin-top: 4px;">
                  <button type="button" class="btn-receipt-icon" onclick="event.stopPropagation(); window.app.openStudentLastReceipt('${e.id}')" title="${c(`receipt`)}">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="6 9 6 2 18 2 18 9"></polyline>
                      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                      <rect x="6" y="14" width="12" height="8"></rect>
                    </svg>
                    <span>${c(`receipt`)}</span>
                  </button>
                </div>
              </div>
            </div>
          `}).join(``)}
      </div>

    </div>
  `}function T(e,t=`classes`){let n=e.classes||[];return`
    <div class="page-header">
      <div class="header-title-block">
        <h2>${c(`attendanceTitle`)}</h2>
        <p>${c(`todayDate`)}</p>
      </div>
      <div class="header-actions">
        <div class="segmented-control">
          <button 
            class="segmented-btn ${t===`classes`?`active`:``}"
            onclick="window.app.switchAttendanceSubTab('classes')"
          >
            ${c(`tabClasses`)}
          </button>
          <button 
            class="segmented-btn ${t===`tutors`?`active`:``}"
            onclick="window.app.switchAttendanceSubTab('tutors')"
          >
            ${c(`tabTutors`)}
          </button>
        </div>
      </div>
    </div>

    ${t===`classes`?`
      <div style="margin-bottom: 16px;">
        <h3 class="section-title" style="margin-bottom: 2px;">${c(`tabClasses`)}</h3>
        <p style="font-size: 13px; color: var(--text-muted);">${c(`selectClassForAttendance`)}</p>
      </div>

      <div class="attendance-grid">
        ${n.map(e=>{let t=e.attendanceStatus===`Belgilangan`,n=e.todayTotal>0?Math.round(e.todayPresent/e.todayTotal*100):0,r=u(e.attendanceStatus);return`
            <div class="attendance-card" onclick="window.app.openAttendanceModal('${e.id}')">
              <div class="class-card-top">
                <span class="class-name">${e.name}</span>
                <span class="status-pill ${t?`status-marked`:`status-unmarked`}">
                  ${r}
                </span>
              </div>

              <div class="class-teacher-row">
                <div style="display: flex; flex-direction: column; gap: 2px;">
                  <span class="teacher-meta-label">${c(`homeroomTeacherLabel`)}</span>
                  <span class="teacher-meta-name">${e.teacherName}</span>
                  <span style="font-size: 11.5px; color: var(--text-light);">${e.room}</span>
                </div>
              </div>

              <div class="class-card-bottom" style="margin-top: 6px;">
                <div class="class-capacity-info">
                  <span class="capacity-label">${c(`cameToday`)}</span>
                  <span class="capacity-val" style="color: ${t?`var(--text-main)`:`#94a3b8`};">
                    ${e.todayPresent} / ${e.todayTotal}
                  </span>
                </div>
                <div class="progress-track">
                  <div class="progress-fill" style="width: ${n}%;"></div>
                </div>
              </div>
            </div>
          `}).join(``)}
      </div>
    `:`
      <!-- Repetitorlar (Extracurricular / Tutoring) Subtab -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; flex-wrap: wrap; gap: 10px;">
        <div>
          <h3 class="section-title" style="margin-bottom: 2px;">${c(`tutorsAttendanceTitle`)}</h3>
          <p style="font-size: 13px; color: var(--text-muted);">${c(`tutorsAttendanceSub`)}</p>
        </div>
        <button class="btn btn-primary" onclick="window.app.openModal('addTutorCourse')">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          <span>${c(`addTutorCourseBtn`)}</span>
        </button>
      </div>

      <div class="attendance-grid">
        ${e.tutorCourses&&e.tutorCourses.length>0?e.tutorCourses.map(e=>{let t=(e.studentIds||[]).length,n=e.attendanceStatus===`Belgilangan`,r=e.todayPresent==null?n?t:0:e.todayPresent,i=t>0?Math.round(r/t*100):0;return`
            <div class="attendance-card" onclick="window.app.openTutorAttendanceModal('${e.id}')" style="cursor: pointer;">
              <div class="class-card-top">
                <span class="class-name">${e.name}</span>
                <span class="status-pill ${n?`status-marked`:`status-unmarked`}">
                  ${c(n?`marked`:`notMarked`)}
                </span>
              </div>
              <div style="font-size: 12.5px; color: var(--text-muted); display: flex; flex-direction: column; gap: 3px; margin: 4px 0 8px 0;">
                <span><strong>${c(`instructor`)}:</strong> ${e.instructor||`—`}</span>
                <span>📅 ${e.days||``} ${e.time?`(${e.time})`:``}</span>
                ${e.fee?`<span style="color: var(--primary); font-weight: 600;">💰 ${Number(e.fee).toLocaleString()} ${c(`som`)}</span>`:``}
              </div>
              <div class="class-card-bottom" style="margin-top: 6px;">
                <div class="class-capacity-info">
                  <span class="capacity-label">${c(`cameToday`)}</span>
                  <span class="capacity-val" style="color: ${n?`var(--text-main)`:`#94a3b8`};">
                    ${r} / ${t} ${c(`studentsUnitAtt`)}
                  </span>
                </div>
                <div class="progress-track"><div class="progress-fill" style="width: ${i}%;"></div></div>
              </div>
            </div>
          `}).join(``):`
          <div class="empty-students-box" style="grid-column: 1 / -1;">
            <p>${c(`noTutorStudentsFound`)}</p>
            <button class="btn btn-primary" onclick="window.app.openModal('addTutorCourse')">
              ${c(`addTutorCourseBtn`)}
            </button>
          </div>
        `}
      </div>
    `}
  `}function E(e){let t=e.students||[],n=e.classes||[],r=e.leads||[],i=t.reduce((e,t)=>e+(t.paidAmount||0),0),a=n.reduce((e,t)=>e+(t.capacity||20),0),o=t.length,s=a>0?(o/a*100).toFixed(1):`0`,l=n.reduce((e,t)=>e+(t.todayPresent||(t.attendanceStatus===`Belgilangan`?t.currentStudents:Math.round(t.currentStudents*.95))),0),u=n.reduce((e,t)=>e+(t.todayTotal||t.currentStudents||0),0),d=u>0?(l/u*100).toFixed(1):`95.0`,f=r.length,p=r.filter(e=>e.stage===`shartnoma`).length,m=f>0?(p/f*100).toFixed(1):`0`,h={};r.forEach(e=>{let t=e.source||`Boshqa`;h[t]=(h[t]||0)+1});let g={Instagram:`tag-instagram`,Telegram:`tag-telegram`,Tavsiya:`tag-tavsiya`,Sayt:`tag-sayt`};return`
    <div class="page-header">
      <div class="header-title-block">
        <h2>${c(`reportsTitle`)}</h2>
        <p>${c(`reportsSubtitle`)}</p>
      </div>
      <div class="header-actions">
        <button class="btn btn-secondary" onclick="window.print()">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="6 9 6 2 18 2 18 9"></polyline>
            <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
            <rect x="6" y="14" width="12" height="8"></rect>
          </svg>
          <span>${c(`printBtn`)}</span>
        </button>
        <button class="btn btn-primary" onclick="window.app.exportPaymentsToCSV()">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          <span>${c(`downloadReportBtn`)}</span>
        </button>
      </div>
    </div>

    <!-- Summary Metrics -->
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-card-title">${c(`totalRevenueCollected`)}</div>
        <div class="stat-card-content">
          <span class="stat-card-number" style="font-size: 24px;">${(i/1e6).toFixed(1)} ${c(`currencyUnit`)}</span>
          <span class="stat-card-subtitle">${c(`som`)}</span>
        </div>
        <div class="accent-line green"></div>
      </div>

      <div class="stat-card">
        <div class="stat-card-title">${c(`schoolCapacityRate`)}</div>
        <div class="stat-card-content">
          <span class="stat-card-number">${s}%</span>
          <span class="stat-card-subtitle">${o} / ${a} ${c(`seats`)}</span>
        </div>
        <div class="accent-line blue"></div>
      </div>

      <div class="stat-card">
        <div class="stat-card-title">${c(`averageAttendanceMetric`)}</div>
        <div class="stat-card-content">
          <span class="stat-card-number">${d}%</span>
          <span class="stat-card-subtitle">${l} / ${u}</span>
        </div>
        <div class="accent-line blue"></div>
      </div>

      <div class="stat-card">
        <div class="stat-card-title">${c(`admissionConversion`)}</div>
        <div class="stat-card-content">
          <span class="stat-card-number">${m}%</span>
          <span class="stat-card-subtitle">${p} / ${f} ${c(`enrolledUnit`)}</span>
        </div>
        <div class="accent-line orange"></div>
      </div>
    </div>

    <!-- Analytics Breakdown Grid -->
    <div class="dashboard-grid-2col">
      <!-- Moliya tahlili -->
      <div class="dash-panel">
        <div class="dash-panel-header">
          <div class="dash-panel-title">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
              <line x1="1" y1="10" x2="23" y2="10"></line>
            </svg>
            ${c(`classFinanceAnalysis`)}
          </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 14px;">
          ${n.map(e=>{let n=t.filter(t=>t.sinf===e.name),r=n.reduce((e,t)=>e+(t.paidAmount||0),0),i=n.reduce((e,t)=>e+(t.monthlyFee||0),0),a=n.reduce((e,t)=>e+(t.debtAmount||0),0),o=i>0?Math.min(100,Math.round(r/i*100)):100,s=o===100?`#10b981`:o>=70?`#f59e0b`:`#ef4444`;return`
              <div>
                <div style="display: flex; justify-content: space-between; font-size: 13px; font-weight: 600; margin-bottom: 4px;">
                  <span>${e.name} (${n.length} ${c(`studentsCountUnit`)})</span>
                  <span>${o}% ${c(`paidBadge`)} ${a>0?`(${(a/1e6).toFixed(1)} ${c(`currencyUnit`)} ${c(`debtBadge`)})`:``}</span>
                </div>
                <div class="progress-track" style="height: 8px;">
                  <div class="progress-fill" style="width: ${o}%; background: ${s};"></div>
                </div>
              </div>
            `}).join(``)}
        </div>
      </div>

      <!-- Reklama manbalari samaradorligi -->
      <div class="dash-panel">
        <div class="dash-panel-header">
          <div class="dash-panel-title">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
            </svg>
            ${c(`marketingEfficiency`)}
          </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 14px;">
          ${Object.entries(h).map(([e,t])=>{let n=f>0?Math.round(t/f*100):0;return`
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 10px; background: var(--bg-subtle); border-radius: var(--radius-md);">
                <div style="display: flex; align-items: center; gap: 10px;">
                  <span class="tag-badge ${g[e]||`tag-badge`}">${e}</span>
                  <span style="font-size: 13px; font-weight: 600;">${t} ${c(`requestsCount`)}</span>
                </div>
                <span style="font-size: 12.5px; color: var(--text-muted); font-weight: 600;">${n}% ${c(`shareUnit`)}</span>
              </div>
            `}).join(``)}
        </div>
      </div>
    </div>
  `}var D=class{constructor(){this.data=n(),this.currentTab=`dashboard`,this.currentTheme=localStorage.getItem(`maktab_crm_theme`)||`light`,this.currentLang=o(),this.leadFilterQuery=``,this.leadMobileCol=`all`,this.leadSourceFilter=null,this.draggedLeadId=null,this.studentSearchQuery=``,this.studentActiveFilter=`all`,this.selectedStudentClass=null,this.selectedStudentId=this.data.students?.[0]?.id||null,this.paymentSelectedClass=null,this.paymentSearchQuery=``,this.paymentPeriod=`30 kun`,this.attendanceSubTab=`classes`,this.activeAttendanceClassId=null,this.tempAttendanceMap={},this.init()}init(){this.applyTheme(this.currentTheme),this.updateLangLabels(),this.updateStaticTranslations(),this.bindNavigation(),this.bindThemeAndLangControls(),this.switchTab(this.currentTab)}bindThemeAndLangControls(){let e=document.getElementById(`mobile-theme-btn`),t=document.getElementById(`desktop-theme-btn`),n=document.getElementById(`mobile-lang-btn`),r=document.getElementById(`desktop-lang-btn`);e&&e.addEventListener(`click`,()=>this.toggleTheme()),t&&t.addEventListener(`click`,()=>this.toggleTheme()),n&&n.addEventListener(`click`,()=>this.toggleLanguage()),r&&r.addEventListener(`click`,()=>this.toggleLanguage())}toggleTheme(){this.currentTheme=this.currentTheme===`light`?`dark`:`light`,localStorage.setItem(`maktab_crm_theme`,this.currentTheme),this.applyTheme(this.currentTheme);let e=this.currentTheme===`dark`?c(`themeDarkToast`):c(`themeLightToast`);this.showToast(e,`info`)}applyTheme(e){document.documentElement.setAttribute(`data-theme`,e);let t=e===`dark`?`☀️`:`🌙`;document.querySelectorAll(`.theme-icon`).forEach(e=>e.textContent=t)}toggleLanguage(){this.currentLang=this.currentLang===`uz`?`ru`:this.currentLang===`ru`?`en`:`uz`,s(this.currentLang),this.updateLangLabels(),this.updateStaticTranslations(),this.renderCurrentView();let e={ru:`Язык изменён: Русский`,en:`Language changed: English`,uz:`Til o'zgartirildi: O'zbekcha`};this.showToast(e[this.currentLang]||e.uz,`info`)}updateLangLabels(){let e=this.currentLang.toUpperCase();document.querySelectorAll(`.lang-text`).forEach(t=>t.textContent=e)}updateStaticTranslations(){document.title=`${c(`brandName`)} - ${c(`brandSubtitle`)}`;let e=document.querySelector(`.brand-text span`);e&&(e.textContent=c(`brandSubtitle`));let t=document.querySelector(`.user-name`);t&&(t.textContent=c(`director`));let n=document.querySelector(`.user-role`);n&&(n.textContent=c(`adminRole`));let r={dashboard:c(`dashboard`),leads:c(`leads`),students:c(`students`),classes:c(`classes`),payments:c(`payments`),attendance:c(`attendance`),reports:c(`reports`)};document.querySelectorAll(`.sidebar-nav .nav-item`).forEach(e=>{let t=e.dataset.tab,n=e.querySelector(`span`);t&&n&&r[t]&&(n.textContent=r[t])});let i={dashboard:c(`mainTab`),leads:c(`leads`).split(` `)[0],students:c(`studentTab`),payments:c(`payments`)};document.querySelectorAll(`.mobile-bottom-nav .mobile-nav-btn`).forEach(e=>{let t=e.dataset.tab,n=e.querySelector(`span`);t&&n&&i[t]&&(n.textContent=i[t])});let a=document.querySelector(`#mobile-more-btn span`);a&&(a.textContent=c(`menu`))}bindNavigation(){document.querySelectorAll(`.sidebar-nav .nav-item`).forEach(e=>{e.addEventListener(`click`,t=>{let n=e.dataset.tab;n&&this.switchTab(n)})}),document.querySelectorAll(`.mobile-bottom-nav .mobile-nav-btn`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.tab;t&&this.switchTab(t)})});let e=document.getElementById(`mobile-menu-toggle`),t=document.getElementById(`mobile-more-btn`),n=document.getElementById(`sidebar-overlay`),r=document.getElementById(`sidebar`),i=()=>{r.classList.toggle(`open`),n.classList.toggle(`active`)};e&&e.addEventListener(`click`,i),t&&t.addEventListener(`click`,i),n&&n.addEventListener(`click`,()=>{r.classList.remove(`open`),n.classList.remove(`active`)});let a=document.getElementById(`profile-badge`);a&&(a.style.cursor=`pointer`,a.addEventListener(`click`,()=>this.openProfileModal()));let o=document.getElementById(`brand-logo-btn`);o&&o.addEventListener(`click`,()=>this.switchTab(`dashboard`)),window.addEventListener(`keydown`,e=>{e.key===`Escape`&&this.closeModal()});let s=document.getElementById(`modal-container`);s&&s.addEventListener(`click`,e=>{e.target===s&&this.closeModal()}),window.addEventListener(`click`,e=>{let t=document.getElementById(`payments-period-dropdown`),n=document.getElementById(`period-toggle-btn`);t&&t.style.display===`block`&&!t.contains(e.target)&&!n?.contains(e.target)&&(t.style.display=`none`);let r=document.getElementById(`dash-search-results-dropdown`),i=document.getElementById(`dash-global-search-input`);r&&r.style.display===`block`&&!r.contains(e.target)&&!i?.contains(e.target)&&(r.style.display=`none`)})}handleGlobalSearch(e){let t=document.getElementById(`dash-search-results-dropdown`);if(!t)return;let n=(e||``).trim().toLowerCase();if(!n){t.style.display=`none`,t.innerHTML=``;return}let r=(this.data.students||[]).filter(e=>e.name.toLowerCase().includes(n)||e.phone&&e.phone.includes(n)||e.sinf&&e.sinf.toLowerCase().includes(n)).slice(0,5),i=(this.data.leads||[]).filter(e=>e.name.toLowerCase().includes(n)||e.phone&&e.phone.includes(n)).slice(0,4),a=(this.data.classes||[]).filter(e=>e.name.toLowerCase().includes(n)||e.teacherName&&e.teacherName.toLowerCase().includes(n)).slice(0,3);if(r.length===0&&i.length===0&&a.length===0){t.innerHTML=`
        <div style="padding: 12px; text-align: center; color: var(--text-muted); font-size: 13px;">
          Hech narsa topilmadi
        </div>
      `,t.style.display=`block`;return}let o=``;r.length>0&&(o+=`<div class="search-res-group-title">O'quvchilar</div>`,o+=r.map(e=>`
        <div class="search-result-item" onclick="window.app.switchTab('students'); window.app.selectStudentClass('${e.sinf}'); window.app.selectStudentDetail('${e.id}'); document.getElementById('dash-search-results-dropdown').style.display='none';">
          <div class="search-res-avatar">${e.initials||e.name.charAt(0)}</div>
          <div class="search-res-info">
            <span class="search-res-name">${e.name}</span>
            <span class="search-res-sub">${e.sinf} • ${e.phone||``}</span>
          </div>
          <span class="search-res-tag">O'quvchi</span>
        </div>
      `).join(``)),i.length>0&&(o+=`<div class="search-res-group-title">Qabul (Leadlar)</div>`,o+=i.map(e=>`
        <div class="search-result-item" onclick="window.app.switchTab('leads'); document.getElementById('dash-search-results-dropdown').style.display='none';">
          <div class="search-res-avatar" style="background: #f97316;">${e.manager||`L`}</div>
          <div class="search-res-info">
            <span class="search-res-name">${e.name}</span>
            <span class="search-res-sub">${e.grade||``} • ${e.phone||``}</span>
          </div>
          <span class="search-res-tag" style="background: #fff7ed; color: #ea580c;">Lead</span>
        </div>
      `).join(``)),a.length>0&&(o+=`<div class="search-res-group-title">Sinflar</div>`,o+=a.map(e=>`
        <div class="search-result-item" onclick="window.app.switchTab('students'); window.app.selectStudentClass('${e.name}'); document.getElementById('dash-search-results-dropdown').style.display='none';">
          <div class="search-res-avatar" style="background: #007a55;">${e.name}</div>
          <div class="search-res-info">
            <span class="search-res-name">${e.name} Sinf</span>
            <span class="search-res-sub">${e.teacherName||``}</span>
          </div>
          <span class="search-res-tag">Sinf</span>
        </div>
      `).join(``)),t.innerHTML=o,t.style.display=`block`}switchTab(e){this.currentTab=e,document.querySelectorAll(`.sidebar-nav .nav-item`).forEach(t=>{t.classList.toggle(`active`,t.dataset.tab===e)}),document.querySelectorAll(`.mobile-bottom-nav .mobile-nav-btn`).forEach(t=>{t.classList.toggle(`active`,t.dataset.tab===e)});let t=document.getElementById(`sidebar`),n=document.getElementById(`sidebar-overlay`);t&&t.classList.remove(`open`),n&&n.classList.remove(`active`);let r=document.getElementById(`main-content`);r&&(r.scrollTop=0),this.renderCurrentView()}renderCurrentView(){let e=document.getElementById(`view-container`);if(e)switch(this.currentTab){case`dashboard`:e.innerHTML=p(this.data);break;case`leads`:e.innerHTML=m(this.data,this.leadFilterQuery,this.leadMobileCol,this.leadSourceFilter);break;case`students`:e.innerHTML=g(this.data,this.studentActiveFilter,this.studentSearchQuery,this.selectedStudentClass,this.selectedStudentId);break;case`classes`:e.innerHTML=S(this.data);break;case`payments`:e.innerHTML=w(this.data,this.paymentSelectedClass,this.paymentSearchQuery,this.paymentPeriod);break;case`attendance`:e.innerHTML=T(this.data,this.attendanceSubTab);break;case`reports`:e.innerHTML=E(this.data);break;default:e.innerHTML=p(this.data)}}filterLeads(e){this.leadFilterQuery=e;let t=document.getElementById(`view-container`);if(this.currentTab===`leads`&&t){t.innerHTML=m(this.data,this.leadFilterQuery,this.leadMobileCol,this.leadSourceFilter);let e=t.querySelector(`.search-input`);if(e){e.focus();let t=e.value.length;e.setSelectionRange(t,t)}}}switchLeadMobileCol(e){this.leadMobileCol=e,this.renderCurrentView()}switchMobileLeadCol(e){this.switchLeadMobileCol(e)}handleDragStart(e,t){this.draggedLeadId=t,e.dataTransfer.setData(`text/plain`,t),e.dataTransfer.effectAllowed=`move`,e.target&&e.target.classList.add(`is-dragging`)}handleDragOver(e){e.preventDefault(),e.dataTransfer.dropEffect=`move`;let t=e.currentTarget;t&&!t.classList.contains(`drag-over`)&&t.classList.add(`drag-over`)}handleDrop(e,t){e.preventDefault(),document.querySelectorAll(`.kanban-col`).forEach(e=>e.classList.remove(`drag-over`)),document.querySelectorAll(`.lead-card`).forEach(e=>e.classList.remove(`is-dragging`));let n=e.dataTransfer.getData(`text/plain`)||this.draggedLeadId;if(!n)return;let i=this.data.leads.find(e=>e.id===n);i&&i.stage!==t&&(i.stage=t,r(this.data),this.renderCurrentView(),this.showToast(`"${i.name}" -> ${{yangi:`Yangi so'rovlar`,boglanildi:`Bog'lanildi`,suhbat:`Suhbat va test`,shartnoma:`Shartnoma imzolandi`}[t]||t} bosqichiga o'tkazildi!`,`success`)),this.draggedLeadId=null}openLeadDetails(e){let t=this.data.leads.find(t=>t.id===e);if(!t)return;let n=[{id:`yangi`,label:c(`stageNewRequests`)},{id:`boglanildi`,label:c(`stageContacted`)},{id:`suhbat`,label:c(`stageInterview`)},{id:`shartnoma`,label:c(`stageContract`)}],r=`
      <div class="modal-dialog">
        <div class="modal-header">
          <div class="modal-title-wrap">
            <h3>${t.name}</h3>
            <p>${t.grade} &bull; ${c(`leadCameVia`)} ${t.source}</p>
          </div>
          <button class="btn-close-modal" onclick="window.app.closeModal()" aria-label="${c(`close`)}">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div class="modal-body">
          <div class="form-grid">
            <div style="background: var(--bg-subtle); padding: 14px; border-radius: var(--radius-md); border: 1px solid var(--border-light);">
              <div style="font-size: 12px; color: var(--text-muted); margin-bottom: 2px;">${c(`parentLabel`)}:</div>
              <div style="font-weight: 600; font-size: 14px; color: var(--text-main);">${t.parent}</div>
              <div style="font-size: 13.5px; color: var(--primary); font-weight: 600; margin-top: 4px;">
                <a href="tel:${t.phone}" style="color: inherit; text-decoration: none; display: flex; align-items: center; gap: 6px;">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  ${t.phone} (${c(`callParent`)})
                </a>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">${c(`changeStage`)}</label>
              <select class="form-select" id="lead-stage-select" onchange="window.app.updateLeadStage('${t.id}', this.value)">
                ${n.map(e=>`
                  <option value="${e.id}" ${t.stage===e.id?`selected`:``}>${e.label}</option>
                `).join(``)}
              </select>
            </div>

            <div class="form-group">
              <label class="form-label">${c(`notesLabel`)}</label>
              <textarea class="form-textarea" id="lead-note-input" rows="3">${t.note||``}</textarea>
            </div>

            <div style="display: flex; justify-content: space-between; font-size: 12px; color: var(--text-muted); padding-top: 8px; border-top: 1px solid var(--border-subtle);">
              <span>${c(`manager`)}: <strong>${t.manager}</strong></span>
              <span>${c(`date`)}: ${t.date}</span>
            </div>
          </div>
        </div>

        <div class="modal-footer" style="display: flex; justify-content: space-between; align-items: center; gap: 8px; padding: 14px 20px;">
          <button class="btn btn-secondary" onclick="window.app.deleteLead('${t.id}')" style="color: #ef4444; border-color: rgba(239, 68, 68, 0.3); padding: 8px 12px; font-size: 13px;">
            ${c(`delete`)}
          </button>
          <div style="display: flex; align-items: center; gap: 8px;">
            <button class="btn btn-secondary" onclick="window.app.convertLeadToStudent('${t.id}')" style="color: var(--primary); border-color: var(--primary); padding: 8px 14px; font-size: 13px; font-weight: 600;">
              ${c(`convertToStudent`)}
            </button>
            <button class="btn btn-secondary" onclick="window.app.closeModal()" style="padding: 8px 14px; font-size: 13px;">${c(`cancel`)}</button>
            <button class="btn btn-primary" onclick="window.app.saveLeadNotes('${t.id}')" style="padding: 8px 18px; font-size: 13px;">${c(`save`)}</button>
          </div>
        </div>
      </div>
    `;this.showModalContent(r)}updateLeadStage(e,t){let n=this.data.leads.find(t=>t.id===e);n&&(n.stage=t,r(this.data),this.renderCurrentView(),this.showToast(`Bosqich yangilandi: ${t}`,`info`))}saveLeadNotes(e){let t=document.getElementById(`lead-note-input`),n=this.data.leads.find(t=>t.id===e);n&&t&&(n.note=t.value.trim(),r(this.data),this.closeModal(),this.renderCurrentView(),this.showToast(`Ma'lumotlar saqlandi!`,`success`))}deleteLead(e){confirm(`Ushbu arizani o'chirishga ishonchingiz komilmi?`)&&(this.data.leads=this.data.leads.filter(t=>t.id!==e),r(this.data),this.closeModal(),this.renderCurrentView(),this.showToast(`Ariza o'chirildi`,`info`))}openNewLeadModal(){this.openModal(`addLead`)}toggleLeadFilterModal(){let e=[`Hammasi`,`Instagram`,`Telegram`,`Tavsiya`,`Sayt`],t=this.leadSourceFilter||`Hammasi`,n=`
      <div class="modal-dialog">
        <div class="modal-header">
          <div class="modal-title-wrap">
            <h3>Qabul arizalari filtri</h3>
            <p>Murojaat manbasi bo'yicha saralash</p>
          </div>
          <button class="btn-close-modal" onclick="window.app.closeModal()">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div class="modal-body">
          <div class="form-group">
            <label class="form-label">Murojaat manbasi</label>
            <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-top: 8px;">
              ${e.map(e=>`
                <button 
                  type="button" 
                  class="filter-pill ${t===e?`active`:``}" 
                  onclick="window.app.setLeadSourceFilter('${e}')"
                  style="padding: 6px 14px; font-size: 13px;"
                >
                  ${e}
                </button>
              `).join(``)}
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" onclick="window.app.setLeadSourceFilter('Hammasi')">Filtrni tozalash</button>
          <button type="button" class="btn btn-primary" onclick="window.app.closeModal()">Yopish</button>
        </div>
      </div>
    `;this.showModalContent(n)}setLeadSourceFilter(e){this.leadSourceFilter=e===`Hammasi`?null:e,this.closeModal(),this.renderCurrentView(),this.showToast(`Manba: ${e}`,`info`)}convertLeadToStudent(e){let t=this.data.leads.find(t=>t.id===e);t&&(this.closeModal(),this.openModal(`addStudent`),setTimeout(()=>{let e=document.getElementById(`new-std-name`),n=document.getElementById(`new-std-class`),i=document.getElementById(`new-std-parent`),a=document.getElementById(`new-std-phone`);if(e&&(e.value=t.name),i&&(i.value=t.parent),a&&(a.value=t.phone),n&&t.grade){let e=this.data.classes.find(e=>e.name.startsWith(t.grade[0]));e&&(n.value=e.name)}t.stage=`shartnoma`,r(this.data)},60),this.showToast(`"${t.name}" ma'lumotlari yuklandi. Saqlash tugmasini bosing!`,`info`))}filterStudentsSearch(e){this.studentSearchQuery=e;let t=document.getElementById(`view-container`);if(this.currentTab===`students`&&t){t.innerHTML=g(this.data,this.studentActiveFilter,this.studentSearchQuery,this.selectedStudentClass,this.selectedStudentId);let e=t.querySelector(`.search-input-compact`);if(e){e.focus();let t=e.value.length;e.setSelectionRange(t,t)}}}filterStudentsPill(e){this.studentActiveFilter=e,this.selectedStudentClass=e===`all`?null:e===`1-sinf`?`1-A`:e===`2-sinf`?`2-A`:e===`3-sinf`?`3-A`:e===`4-sinf`?`4-B`:e===`5-sinf`?`5-A`:null,this.renderCurrentView()}setStudentFilter(e){this.filterStudentsPill(e)}selectStudentClass(e){if(this.selectedStudentClass=e,e){let t=e.charAt(0);this.studentActiveFilter=`${t}-sinf`}else this.studentActiveFilter=`all`;this.renderCurrentView()}selectStudent(e){this.selectedStudentId=e,this.renderCurrentView()}openNewStudentModal(){this.openModal(`addStudent`)}selectPaymentClass(e){this.paymentSelectedClass=e===`all`?null:e,this.renderCurrentView()}filterPaymentsSearch(e){this.paymentSearchQuery=e;let t=document.getElementById(`view-container`);if(this.currentTab===`payments`&&t){t.innerHTML=w(this.data,this.paymentSelectedClass,this.paymentSearchQuery,this.paymentPeriod);let e=t.querySelector(`.payments-search-input`);if(e){e.focus();let t=e.value.length;e.setSelectionRange(t,t)}}}togglePaymentPeriodMenu(e){e&&e.stopPropagation();let t=document.getElementById(`payments-period-dropdown`);if(t){let e=t.style.display===`block`;t.style.display=e?`none`:`block`}}setPaymentPeriod(e){this.paymentPeriod=e,this.renderCurrentView()}exportPaymentsToCSV(){let e=`O'quvchi,Sinf,Ota-onasi,Telefon,Oylik to'lov,To'langan,Qoldiq,Holat
`;(this.paymentSelectedClass?this.data.students.filter(e=>e.sinf===this.paymentSelectedClass):this.data.students).forEach(t=>{e+=`"${t.name}","${t.sinf}","${t.parentName||``}","${t.phone||``}",${t.monthlyFee||0},${t.paidAmount||0},${t.debtAmount||0},"${t.paymentStatus}"\n`});let t=new Blob([`﻿`+e],{type:`text/csv;charset=utf-8;`}),n=document.createElement(`a`);n.href=URL.createObjectURL(t),n.download=`tolovlar_${this.paymentSelectedClass||`barcha_sinflar`}_${new Date().toISOString().slice(0,10)}.csv`,n.click(),this.showToast(`To'lovlar hisoboti yuklab olindi!`,`success`)}openStudentDetailsModal(e){let t=this.data.students.find(t=>t.id===e);if(!t)return;let n=l(t.parentRole||`Ota-onasi`),r=u(t.paymentStatus||(t.debtAmount===0?`paid`:`debt`)),i=`
      <div class="modal-dialog">
        <div class="modal-header">
          <div class="modal-title-wrap">
            <h3>${c(`studentDetails`)}</h3>
            <p>${t.name} — ${t.sinf}</p>
          </div>
          <button class="btn-close-modal" onclick="window.app.closeModal()" aria-label="${c(`close`)}">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div class="modal-body">
          <div style="display: flex; align-items: center; gap: 14px; margin-bottom: 20px; padding: 14px; background: var(--bg-subtle); border-radius: var(--radius-md); border: 1px solid var(--border-light);">
            <div style="width: 48px; height: 48px; border-radius: 50%; background: linear-gradient(135deg, #3b82f6, #1d4ed8); color: #fff; font-weight: 700; font-size: 18px; display: flex; align-items: center; justify-content: center;">
              ${t.initials||`OQ`}
            </div>
            <div>
              <div style="font-weight: 700; font-size: 16px; color: var(--text-main);">${t.name}</div>
              <div style="font-size: 13px; color: var(--text-muted);">${t.sinf} • ${c(`birthDateLabel`)}: ${t.birthDate||`—`}</div>
            </div>
          </div>

          <div style="display: flex; flex-direction: column; gap: 10px; font-size: 13.5px;">
            <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--border-subtle); padding-bottom: 8px;">
              <span style="color: var(--text-muted);">${n}:</span>
              <span style="font-weight: 600; color: var(--text-main);">${t.parentName}</span>
            </div>
            <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--border-subtle); padding-bottom: 8px;">
              <span style="color: var(--text-muted);">${c(`phoneText`)}:</span>
              <a href="tel:${t.phone}" style="font-weight: 600; color: var(--primary); text-decoration: none;">${t.phone}</a>
            </div>
            <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--border-subtle); padding-bottom: 8px;">
              <span style="color: var(--text-muted);">${c(`homeroomTeacherLabel`)}:</span>
              <span style="font-weight: 600; color: var(--text-main);">${t.homeroomTeacher||`—`}</span>
            </div>
            <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--border-subtle); padding-bottom: 8px;">
              <span style="color: var(--text-muted);">${c(`status`)}:</span>
              <span style="font-weight: 700; color: ${t.paymentStatusCode===`paid`?`#10b981`:t.paymentStatusCode===`partial`?`#d97706`:`#dc2626`};">
                ${r} ${(t.debtAmount||0)>0?`(${c(`debtSummary`)}: `+t.debtAmount.toLocaleString(`ru-RU`)+` `+c(`som`)+`)`:``}
              </span>
            </div>
            <div style="display: flex; justify-content: space-between; padding-bottom: 4px;">
              <span style="color: var(--text-muted);">${c(`attendance`)}:</span>
              <span style="font-weight: 600; color: var(--text-main);">${t.attendance||`95%`}</span>
            </div>
          </div>

          <!-- Documents Checklist -->
          <div style="margin-top: 20px;">
            <div style="font-weight: 600; font-size: 13.5px; margin-bottom: 10px; color: var(--text-main);">${c(`requiredDocs`)}:</div>
            <div style="display: flex; flex-direction: column; gap: 8px;">
              <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px 12px; background: var(--bg-subtle); border-radius: var(--radius-sm); font-size: 13px;">
                <span>${c(`docBirthCert`)}</span>
                <span style="color: #10b981; font-weight: 600;">✓</span>
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px 12px; background: var(--bg-subtle); border-radius: var(--radius-sm); font-size: 13px;">
                <span>${c(`docMedReport`)}</span>
                <span style="color: ${t.docs?.medicalReport===!1?`#dc2626`:`#10b981`}; font-weight: 600;">
                  ${t.docs?.medicalReport===!1?`✕`:`✓`}
                </span>
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px 12px; background: var(--bg-subtle); border-radius: var(--radius-sm); font-size: 13px;">
                <span>${c(`docContract`)}</span>
                <span style="color: #10b981; font-weight: 600;">✓</span>
              </div>
            </div>
          </div>

          <!-- Repetitorlik va To'garaklar -->
          <div style="margin-top: 18px; padding-top: 14px; border-top: 1px solid var(--border-subtle);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <span style="font-weight: 600; font-size: 13.5px; color: var(--text-main);">${c(`tutorsListLabel`)}:</span>
              <button class="btn btn-secondary" style="padding: 4px 10px; font-size: 12px; display: inline-flex; align-items: center; gap: 4px;" onclick="window.app.openStudentAssignTutorModal('${t.id}')">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                <span>${c(`addStudentToTutorBtn`)}</span>
              </button>
            </div>
            ${(this.data.tutorCourses||[]).filter(e=>(e.studentIds||[]).includes(t.id)).length===0?`
              <div style="font-size: 13px; color: var(--text-muted); font-style: italic;">${c(`noTutorsEnrolled`)}</div>
            `:`
              <div style="display: flex; flex-wrap: wrap; gap: 6px;">
                ${(this.data.tutorCourses||[]).filter(e=>(e.studentIds||[]).includes(t.id)).map(e=>`
                  <div style="display: inline-flex; align-items: center; gap: 6px; padding: 4px 10px; background: rgba(59, 130, 246, 0.1); color: var(--primary); border: 1px solid rgba(59, 130, 246, 0.2); border-radius: var(--radius-sm); font-size: 12.5px; font-weight: 600;">
                    <span>${e.name}</span>
                    <button type="button" style="background: none; border: none; cursor: pointer; color: #ef4444; font-size: 15px; padding: 0; line-height: 1; display: inline-flex; align-items: center;" onclick="window.app.removeStudentFromTutor('${e.id}', '${t.id}')" title="${c(`removeStudentFromTutor`)}">&times;</button>
                  </div>
                `).join(``)}
              </div>
            `}
          </div>
        </div>

        <div class="modal-footer" style="display: flex; justify-content: space-between; gap: 8px; flex-wrap: wrap;">
          <button class="btn btn-secondary" onclick="window.app.closeModal()">${c(`close`)}</button>
          <div style="display: flex; gap: 8px;">
            <button class="btn btn-secondary" onclick="window.app.openEditStudentModal('${t.id}')">${c(`edit`)}</button>
            <button class="btn btn-primary" onclick="window.app.openQuickPayModal('${t.id}')">${c(`acceptPaymentBtn`)}</button>
          </div>
        </div>
      </div>
    `;this.showModalContent(i)}openStudentAssignTutorModal(e){let t=this.data.students.find(t=>t.id===e);if(!t)return;Array.isArray(this.data.tutorCourses)||(this.data.tutorCourses=[]);let n=this.data.tutorCourses.filter(t=>!(t.studentIds||[]).includes(e)),r=`
      <div class="modal-dialog">
        <div class="modal-header">
          <div class="modal-title-wrap">
            <h3>${c(`assignStudentModalTitle`)}</h3>
            <p>${t.name} (${t.sinf||`—`}) &bull; ${c(`assignStudentModalSub`)}</p>
          </div>
          <button class="btn-close-modal" onclick="window.app.openStudentDetailsModal('${t.id}')" aria-label="${c(`close`)}">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <form onsubmit="window.app.handleStudentAssignTutor(event, '${t.id}')">
          <div class="modal-body">
            <div class="form-grid">
              <div class="form-group">
                <label class="form-label">${c(`tutorCoursesLabel`)} <span class="req">*</span></label>
                ${n.length===0?`
                  <div style="padding: 12px; background: var(--bg-subtle); border-radius: var(--radius-sm); color: var(--text-muted); font-size: 13.5px;">
                    ${c(`allStudentsAlreadyEnrolled`)}
                  </div>
                `:`
                  <select class="form-select" id="std-assign-course-id" required style="font-size: 14px; padding: 10px 12px;">
                    <option value="" disabled selected>${c(`selectStudentToAssign`)}...</option>
                    ${n.map(e=>`
                      <option value="${e.id}">
                        ${e.name} (${e.instructor||`—`}) ${e.fee?`• ${Number(e.fee).toLocaleString()} ${c(`som`)}`:``}
                      </option>
                    `).join(``)}
                  </select>
                `}
              </div>
            </div>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" onclick="window.app.openStudentDetailsModal('${t.id}')">${c(`cancel`)}</button>
            ${n.length>0?`
              <button type="submit" class="btn btn-primary">${c(`assignStudentSubmitBtn`)}</button>
            `:``}
          </div>
        </form>
      </div>
    `;this.showModalContent(r)}handleStudentAssignTutor(e,t){e.preventDefault();let n=document.getElementById(`std-assign-course-id`)?.value;if(!n)return;let i=this.data.tutorCourses?.find(e=>e.id===n);if(!i)return;Array.isArray(i.studentIds)||(i.studentIds=[]),i.studentIds.includes(t)||i.studentIds.push(t);let a=this.data.students.find(e=>e.id===t);r(this.data),this.showToast(`"${a?a.name:`O'quvchi`}" "${i.name}" to'garagiga biriktirildi!`,`success`),this.openStudentDetailsModal(t),this.renderCurrentView()}openEditStudentModal(e){let t=this.data.students.find(t=>t.id===e);if(!t)return;let n=`
      <div class="modal-dialog">
        <div class="modal-header">
          <div class="modal-title-wrap">
            <h3>${c(`editStudentBtn`)}</h3>
            <p>${t.name}</p>
          </div>
          <button class="btn-close-modal" onclick="window.app.closeModal()" aria-label="${c(`close`)}">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <form id="edit-student-form" onsubmit="window.app.saveStudentEdit(event, '${t.id}')">
          <div class="modal-body">
            <div class="form-grid">
              <div class="form-group">
                <label class="form-label">${c(`studentFullName`)} <span class="req">*</span></label>
                <input type="text" class="form-control" id="edit-std-name" value="${t.name}" required />
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">${c(`gradeSelect`)} <span class="req">*</span></label>
                  <select class="form-select" id="edit-std-sinf" required>
                    ${this.data.classes.map(e=>`
                      <option value="${e.name}" ${t.sinf===e.name?`selected`:``}>${e.name}</option>
                    `).join(``)}
                  </select>
                </div>

                <div class="form-group">
                  <label class="form-label">${c(`birthDateLabel`)}</label>
                  <input type="text" class="form-control" id="edit-std-bdate" value="${t.birthDate||``}" placeholder="12.03.2017" />
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">${c(`parentNameLabel`)} <span class="req">*</span></label>
                  <input type="text" class="form-control" id="edit-std-parent" value="${t.parentName}" required />
                </div>

                <div class="form-group">
                  <label class="form-label">${c(`phoneLabel`)} <span class="req">*</span></label>
                  <input type="tel" class="form-control" id="edit-std-phone" value="${t.phone}" required />
                </div>
              </div>

              <div class="form-group">
                <label class="form-label">${c(`monthlyFeeAmount`)}</label>
                <input type="number" class="form-control" id="edit-std-fee" value="${t.monthlyFee||3e6}" min="0" step="any" />
              </div>

              <!-- Repetitorlik va to'garaklar checkboxlari -->
              <div class="form-group" style="margin-top: 6px;">
                <label class="form-label">${c(`tutorCoursesLabel`)}</label>
                <div style="display: flex; flex-direction: column; gap: 8px; padding: 10px 12px; background: var(--bg-subtle); border: 1px solid var(--border-light); border-radius: var(--radius-sm); max-height: 140px; overflow-y: auto;">
                  ${!this.data.tutorCourses||this.data.tutorCourses.length===0?`
                    <span style="font-size: 12.5px; color: var(--text-muted);">${c(`noTutorStudentsFound`)}</span>
                  `:this.data.tutorCourses.map(e=>{let n=(e.studentIds||[]).includes(t.id);return`
                      <label style="display: flex; align-items: center; gap: 8px; font-size: 13px; cursor: pointer;">
                        <input type="checkbox" name="edit-std-tutors" value="${e.id}" ${n?`checked`:``} style="width: 16px; height: 16px; accent-color: var(--primary);" />
                        <span style="font-weight: 500; color: var(--text-main);">${e.name}</span>
                        <span style="color: var(--text-muted); font-size: 11.5px;">(${e.instructor||`—`})</span>
                      </label>
                    `}).join(``)}
                </div>
              </div>
            </div>
          </div>

          <div class="modal-footer" style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
            <button type="button" class="btn btn-secondary" onclick="window.app.deleteStudent('${t.id}')" style="color: #ef4444; border-color: rgba(239, 68, 68, 0.3);">
              ${c(`delete`)}
            </button>
            <div style="display: flex; gap: 8px;">
              <button type="button" class="btn btn-secondary" onclick="window.app.closeModal()">${c(`cancel`)}</button>
              <button type="submit" class="btn btn-primary">${c(`save`)}</button>
            </div>
          </div>
        </form>
      </div>
    `;this.showModalContent(n)}saveStudentEdit(e,t){e.preventDefault();let n=this.data.students.find(e=>e.id===t);if(!n)return;n.name=document.getElementById(`edit-std-name`).value.trim(),n.sinf=document.getElementById(`edit-std-sinf`).value,n.gradeLevel=n.sinf.split(`-`)[0]+`-sinf`,n.birthDate=document.getElementById(`edit-std-bdate`).value.trim(),n.parentName=document.getElementById(`edit-std-parent`).value.trim(),n.phone=document.getElementById(`edit-std-phone`).value.trim(),n.monthlyFee=Number(document.getElementById(`edit-std-fee`).value)||3e6;let i=n.name.split(` `);n.initials=i.length>1?(i[0][0]+i[1][0]).toUpperCase():i[0].slice(0,2).toUpperCase();let a=document.querySelectorAll(`input[name="edit-std-tutors"]:checked`),o=Array.from(a).map(e=>e.value);(this.data.tutorCourses||[]).forEach(e=>{Array.isArray(e.studentIds)||(e.studentIds=[]);let n=o.includes(e.id),r=e.studentIds.includes(t);n&&!r?e.studentIds.push(t):!n&&r&&(e.studentIds=e.studentIds.filter(e=>e!==t))}),r(this.data),this.closeModal(),this.renderCurrentView(),this.showToast(`O'quvchi ma'lumotlari yangilandi`,`success`)}openStudentPaymentModal(e){this.openQuickPayModal(e)}openQuickPayModal(e){let t=this.data.students.find(t=>t.id===e);if(!t)return;let n=t.monthlyFee||3e6,r=t.debtAmount!=null&&t.debtAmount>0?t.debtAmount:n,i=t.debtAmount||0,a=`
      <div class="modal-dialog">
        <div class="modal-header">
          <div class="modal-title-wrap">
            <div style="display: flex; align-items: center; gap: 8px;">
              <span style="font-size: 18px;">💳</span>
              <h3 style="margin: 0; font-size: 16px;">${c(`acceptPaymentModalTitle`)}</h3>
            </div>
            <p style="margin: 2px 0 0 0; font-size: 12.5px; color: var(--text-muted);">${c(`acceptPaymentModalSub`)}</p>
          </div>
          <button class="btn-close-modal" onclick="window.app.closeModal()" aria-label="${c(`close`)}">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <form id="quick-pay-form" onsubmit="window.app.saveQuickPayment(event, '${t.id}')">
          <div class="modal-body" style="display: flex; flex-direction: column; gap: 14px;">
            
            <!-- Student Mini Profile Card -->
            <div style="display: flex; align-items: center; gap: 12px; padding: 10px 14px; background: var(--bg-subtle); border-radius: var(--radius-md); border: 1px solid var(--border-light);">
              <div style="width: 40px; height: 40px; border-radius: 50%; background: #ecfdf5; color: #059669; font-weight: 700; font-size: 14px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                ${t.initials||`OQ`}
              </div>
              <div style="flex: 1; min-width: 0;">
                <div style="font-weight: 700; font-size: 14px; color: var(--text-main); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${t.name}</div>
                <div style="font-size: 12px; color: var(--text-muted);">${t.sinf} • ${l(t.parentRole||`Ota-onasi`)}: ${t.parentName||`—`} (${t.phone||`—`})</div>
              </div>
              <div style="text-align: right; flex-shrink: 0;">
                <div style="font-size: 11px; color: var(--text-muted);">${c(`debtRemaining`)}</div>
                <div style="font-size: 13px; font-weight: 700; color: ${i>0?`#dc2626`:`#16a34a`};">
                  ${i>0?i.toLocaleString(`uz-UZ`)+` `+c(`som`):c(`noDebt`)}
                </div>
              </div>
            </div>

            <!-- Payment Amount Field -->
            <div class="form-group" style="margin: 0;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;">
                <label class="form-label" style="margin: 0; font-weight: 600; font-size: 13px;">${c(`paymentAmount`)} <span class="req">*</span></label>
                <span style="font-size: 11.5px; color: var(--text-muted);">${c(`monthlyTariff`)}: ${n.toLocaleString(`uz-UZ`)} ${c(`som`)}</span>
              </div>
              <input 
                type="number" 
                class="form-control" 
                id="quick-pay-amount" 
                value="${r}" 
                min="0" 
                step="any" 
                required 
                style="font-size: 16px; font-weight: 700; letter-spacing: 0.5px;"
              />
              
              <!-- Quick preset chips -->
              <div class="quick-pay-presets">
                <button type="button" class="quick-pay-chip" onclick="window.app.setQuickPayAmount(${n})">${c(`quickPayMonth1`)}: ${(n/1e6).toFixed(1)} ${c(`currencyUnit`)}</button>
                <button type="button" class="quick-pay-chip" onclick="window.app.setQuickPayAmount(${n*2})">${c(`quickPayMonth2`)}: ${(n*2/1e6).toFixed(1)} ${c(`currencyUnit`)}</button>
                <button type="button" class="quick-pay-chip" onclick="window.app.setQuickPayAmount(${Math.round(n/2)})">50%: ${(n/2e6).toFixed(1)} ${c(`currencyUnit`)}</button>
                ${i>0?`<button type="button" class="quick-pay-chip" style="color: #dc2626; border-color: #fca5a5;" onclick="window.app.setQuickPayAmount(${i})">${c(`fullDebt`)} (${(i/1e6).toFixed(1)} ${c(`currencyUnit`)})</button>`:``}
              </div>
            </div>

            <!-- Payment Method & Month in 2 cols -->
            <div class="form-row" style="margin: 0;">
              <div class="form-group" style="margin: 0;">
                <label class="form-label" style="font-size: 13px; font-weight: 600;">${c(`paymentMethod`)} <span class="req">*</span></label>
                <select class="form-select" id="quick-pay-method" required>
                  <option value="Naqd pul" selected>💵 ${c(`cashMethod`)}</option>
                  <option value="Plastik karta (Terminal)">💳 ${c(`cardMethod`)}</option>
                  <option value="Payme">📱 Payme</option>
                  <option value="Click">📲 Click</option>
                  <option value="Bank o'tkazmasi">🏦 ${c(`bankTransfer`)}</option>
                </select>
              </div>

              <div class="form-group" style="margin: 0;">
                <label class="form-label" style="font-size: 13px; font-weight: 600;">${c(`forMonth`)}</label>
                <select class="form-select" id="quick-pay-period">
                  <option value="Oktyabr 2026" selected>Oktyabr 2026</option>
                  <option value="Noyabr 2026">Noyabr 2026</option>
                  <option value="Dekabr 2026">Dekabr 2026</option>
                  <option value="1-chorak to'liq">1-chorak</option>
                  <option value="2026-2027 yillik">2026–2027 (${c(`yearly`)})</option>
                </select>
              </div>
            </div>

            <!-- Thermal Printer Toggle Option -->
            <label class="print-toggle-box" for="quick-pay-print-receipt">
              <div class="print-toggle-info">
                <span class="print-toggle-icon">🖨️</span>
                <div>
                  <div class="print-toggle-title">${c(`printThermalReceipt`)}</div>
                  <div class="print-toggle-sub">${c(`thermalPrinterDesc`)}</div>
                </div>
              </div>
              <input type="checkbox" id="quick-pay-print-receipt" checked style="width: 18px; height: 18px; accent-color: #16a34a; cursor: pointer;" />
            </label>

            <!-- Optional Note -->
            <div class="form-group" style="margin: 0;">
              <label class="form-label" style="font-size: 12px; color: var(--text-muted);">${c(`paymentPurpose`)}</label>
              <input type="text" class="form-control" id="quick-pay-comment" placeholder="${c(`notes`)}" style="font-size: 13px;" />
            </div>

          </div>

          <div class="modal-footer" style="display: flex; justify-content: space-between; gap: 8px;">
            <button type="button" class="btn btn-secondary" onclick="window.app.closeModal()">${c(`cancel`)}</button>
            <button type="submit" class="btn btn-primary" style="background: #16a34a; border-color: #16a34a; font-weight: 700; display: inline-flex; align-items: center; gap: 6px;">
              <span>✅ ${c(`confirmAndPrint`)} &rarr;</span>
            </button>
          </div>
        </form>
      </div>
    `;this.showModalContent(a)}setQuickPayAmount(e){let t=document.getElementById(`quick-pay-amount`);t&&(t.value=e)}saveQuickPayment(e,t){e.preventDefault();let n=this.data.students.find(e=>e.id===t);if(!n)return;let i=Number(document.getElementById(`quick-pay-amount`).value)||0,a=document.getElementById(`quick-pay-method`).value,o=document.getElementById(`quick-pay-period`).value,s=document.getElementById(`quick-pay-comment`).value.trim(),c=document.getElementById(`quick-pay-print-receipt`)?.checked??!0;if(i<=0){this.showToast(`To'lov summasi 0 dan katta bo'lishi kerak`,`warning`);return}let l=n.debtAmount||0;n.paidAmount=(n.paidAmount||0)+i,n.debtAmount=Math.max(0,l-i),n.debtAmount===0?(n.paymentStatus=`To'liq to'lagan`,n.paymentStatusCode=`paid`):(n.paymentStatus=`Qisman`,n.paymentStatusCode=`partial`);let u=new Date,d=`${String(u.getDate()).padStart(2,`0`)}.${String(u.getMonth()+1).padStart(2,`0`)}.${u.getFullYear()}`,f=`${String(u.getHours()).padStart(2,`0`)}:${String(u.getMinutes()).padStart(2,`0`)}`,p=`CHK-${u.getFullYear()}${String(u.getMonth()+1).padStart(2,`0`)}${String(u.getDate()).padStart(2,`0`)}-${Math.floor(1e3+Math.random()*9e3)}`,m={id:`tx-`+Date.now(),receiptNumber:p,studentId:n.id,studentName:n.name,sinf:n.sinf,parentName:n.parentName,phone:n.phone,amount:i,method:a,period:o,comment:s,date:d,time:f,cashier:`Dilshod Rahimov (Administrator)`,status:`Tasdiqlangan`};this.data.paymentTransactions||(this.data.paymentTransactions=[]),this.data.paymentTransactions.unshift(m),n.lastReceipt=m,this.data.paymentsSummary&&(this.data.paymentsSummary.monthlyRevenue=(this.data.paymentsSummary.monthlyRevenue||0)+i,this.data.paymentsSummary.expectedRevenue=Math.max(0,(this.data.paymentsSummary.expectedRevenue||0)-i)),r(this.data),this.renderCurrentView(),this.showToast(`${n.name} uchun ${i.toLocaleString(`uz-UZ`)} so'm to'lov qabul qilindi!`,`success`),c?this.openReceiptModal(m,n):this.closeModal()}openReceiptModal(e,t){t||=this.data.students.find(t=>t.id===e.studentId||t.name===e.studentName)||{name:e.studentName,sinf:e.sinf||`3-A`,parentName:e.parentName||`Ota-onasi`,phone:e.phone||`+998 90 000 00 00`,monthlyFee:e.amount,debtAmount:0};let n=e=>(e||0).toString().replace(/\B(?=(\d{3})+(?!\d))/g,` `),r=[2,1,3,1,2,3,1,1,2,1,3,2,1,1,2,3,1,2,1,3,1,2,1,1,3,2,1,2,3,1,1,2,1,3,2,1,1,2,3],i=6,a=r.map((e,t)=>{let n=t%2==0?`<rect x="${i}" y="0" width="${e*1.5}" height="32" fill="#000000" />`:``;return i+=e*1.5,n}).join(``),o=`<svg viewBox="0 0 ${i+6} 32" class="thermal-receipt-barcode-svg">${a}</svg>`,s=[`================================`,`  ${c(`receiptHeader`)}  `,`================================`,`${c(`receiptNumberLabel`)}: ${e.receiptNumber}`,`${c(`dateLabel`)}: ${e.date}  ${e.time||``}`,`${c(`cashierLabel`)}: ${e.cashier||`Dilshod Rahimov`}`,`--------------------------------`,`${c(`studentLabel`)}: ${t.name}`,`${c(`classLabel`)}: ${t.sinf||`3-A`}`,`${c(`parentLabel`)}: ${t.parentName||`—`}`,`${c(`phone`)}: ${t.phone||`—`}`,`${c(`periodLabel`)}: ${e.period||`Oktyabr 2026`}`,`${c(`paymentMethod`)}: ${e.method||`Naqd pul`}`,`--------------------------------`,`${c(`paidAmountLabel`)}: ${n(e.amount)} ${c(`som`).toUpperCase()}`,`${c(`debtAmountLabel`)}: ${n(t.debtAmount||0)} ${c(`som`).toUpperCase()}`,`${c(`status`)}: ${t.debtAmount===0?c(`fullyPaidCaps`):c(`partialPaidCaps`)}`,`--------------------------------`,`${c(`thankYou`)}`,`${c(`officialReceiptNotice`)}`,`================================`].join(`
`);this.currentReceiptText=s;let l=`
      <div class="thermal-receipt-paper" id="active-thermal-receipt">
        <div class="thermal-receipt-header">
          <div class="thermal-receipt-brand">${c(`brandName`)}</div>
          <div class="thermal-receipt-subbrand">${c(`receiptBrandSubtitle`)}</div>
          <div class="thermal-receipt-meta">
            ${c(`receiptAddress`)}<br>
            ${c(`receiptPhoneStir`)}<br>
            ${c(`receiptLicense`)}
          </div>
        </div>

        <div class="thermal-receipt-divider"></div>

        <div class="thermal-receipt-badge-title">${c(`receiptBadge`)}</div>

        <div class="thermal-receipt-row">
          <span class="label">${c(`receiptNumberLabel`)}:</span>
          <span class="value">${e.receiptNumber}</span>
        </div>
        <div class="thermal-receipt-row">
          <span class="label">${c(`receiptDateTime`)}:</span>
          <span class="value">${e.date} ${e.time||``}</span>
        </div>
        <div class="thermal-receipt-row">
          <span class="label">${c(`cashierAdmin`)}:</span>
          <span class="value">${e.cashier||`Dilshod Rahimov`}</span>
        </div>

        <div class="thermal-receipt-divider"></div>

        <div class="thermal-receipt-row">
          <span class="label">${c(`studentFullNameLabel`)}:</span>
          <span class="value" style="font-size: 12.5px;">${t.name}</span>
        </div>
        <div class="thermal-receipt-row">
          <span class="label">${c(`classLabel`)}:</span>
          <span class="value">${t.sinf||`3-A`} ${c(`classWord`)}</span>
        </div>
        <div class="thermal-receipt-row">
          <span class="label">${c(`parentLabel`)}:</span>
          <span class="value">${t.parentName||`—`}</span>
        </div>
        <div class="thermal-receipt-row">
          <span class="label">${c(`phone`)}:</span>
          <span class="value">${t.phone||`—`}</span>
        </div>
        <div class="thermal-receipt-row">
          <span class="label">${c(`paymentTarget`)}:</span>
          <span class="value">${e.period||`Oktyabr 2026`} ${c(`educationTuition`)}</span>
        </div>
        <div class="thermal-receipt-row">
          <span class="label">${c(`paymentMethod`)}:</span>
          <span class="value">${e.method||`Naqd pul`}</span>
        </div>

        <div class="thermal-receipt-double-divider"></div>

        <div class="thermal-receipt-total-box">
          <div class="thermal-receipt-total-label">${c(`totalPaidCaps`)}:</div>
          <div class="thermal-receipt-total-amount">${n(e.amount)} ${c(`som`).toUpperCase()}</div>
        </div>

        <div class="thermal-receipt-row" style="margin-top: 6px;">
          <span class="label">${c(`prevPayments`)}:</span>
          <span class="value">${n((t.paidAmount||e.amount)-e.amount)} ${c(`som`)}</span>
        </div>
        <div class="thermal-receipt-row">
          <span class="label">${c(`remainingDebt`)}:</span>
          <span class="value" style="color: ${t.debtAmount>0?`#dc2626`:`#16a34a`};">
            ${n(t.debtAmount||0)} ${c(`som`)}
          </span>
        </div>
        <div class="thermal-receipt-row">
          <span class="label">${c(`paymentStatusLabel`)}:</span>
          <span class="value" style="text-transform: uppercase;">
            ${t.debtAmount===0?c(`fullyPaidCaps`):c(`partialPaidCaps`)}
          </span>
        </div>

        <div class="thermal-receipt-divider"></div>

        <div class="thermal-receipt-barcode-box">
          ${o}
          <div class="thermal-receipt-barcode-number">${e.receiptNumber}</div>
        </div>

        <div class="thermal-receipt-footer">
          ${c(`thankYou`)}<br>
          ${c(`officialReceiptNotice`)}<br>
          maktab-crm.uz • info@maktab-crm.uz
        </div>
      </div>
    `,u=document.getElementById(`receipt-print-area`);u&&(u.innerHTML=l);let d=`
      <div class="receipt-modal-dialog">
        <div class="receipt-modal-header">
          <div class="receipt-modal-title">
            <span style="font-size: 18px;">🖨️</span>
            <span>${c(`receiptModalTitle`)}</span>
          </div>
          <button class="btn-close-modal" onclick="window.app.closeModal()" aria-label="${c(`close`)}">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div class="receipt-modal-body">
          ${l}
        </div>

        <div class="receipt-modal-footer">
          <div class="receipt-actions-primary-row">
            <button type="button" class="btn-print-pos" onclick="window.app.printReceiptDirectly()">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 6 2 18 2 18 9"></polyline>
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                <rect x="6" y="14" width="12" height="8"></rect>
              </svg>
              <span>${c(`printReceiptBtn`)}</span>
            </button>

            <button type="button" class="btn-copy-pos" onclick="window.app.copyReceiptText()">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
              <span>${c(`telegramCopyBtn`)}</span>
            </button>
          </div>

          <button type="button" class="btn btn-secondary" onclick="window.app.closeModal()" style="width: 100%;">
            ${c(`close`)}
          </button>
        </div>
      </div>
    `;this.showModalContent(d)}openStudentLastReceipt(e){let t=this.data.students.find(t=>t.id===e);if(!t)return;let n=this.data.paymentTransactions?.find(e=>e.studentId===t.id||e.studentName===t.name);if(!n){let e=new Date,r=`${String(e.getDate()).padStart(2,`0`)}.${String(e.getMonth()+1).padStart(2,`0`)}.${e.getFullYear()}`,i=`${String(e.getHours()).padStart(2,`0`)}:${String(e.getMinutes()).padStart(2,`0`)}`,a=`CHK-${e.getFullYear()}${String(e.getMonth()+1).padStart(2,`0`)}${String(e.getDate()).padStart(2,`0`)}-${Math.floor(1e3+Math.random()*9e3)}`;n={id:`tx-`+Date.now(),receiptNumber:a,studentId:t.id,studentName:t.name,sinf:t.sinf,parentName:t.parentName,phone:t.phone,amount:t.paidAmount>0?t.monthlyFee||486e4:t.monthlyFee||3e6,method:`Naqd pul`,period:`Oktyabr 2026`,date:r,time:i,cashier:`Dilshod Rahimov (Administrator)`,status:`Tasdiqlangan`}}this.openReceiptModal(n,t)}printReceiptDirectly(){window.print()}copyReceiptText(){this.currentReceiptText&&navigator.clipboard.writeText(this.currentReceiptText).then(()=>{this.showToast(c(`copiedReceiptToast`),`success`)}).catch(()=>{this.showToast(c(`copyErrorToast`),`warning`)})}onPaymentStudentChange(e){let t=this.data.students.find(t=>t.id===e);if(!t)return;let n=document.getElementById(`pay-amount`);n&&(n.value=t.debtAmount!=null&&t.debtAmount>0?t.debtAmount:t.monthlyFee||3e6)}exportStudentsCSV(){let e=`data:text/csv;charset=utf-8,﻿`+[[`F.I.SH`,`Sinf`,`Ota-onasi`,`Telefon`,`Oylik to'lov`,`To'langan`,`Qarzdorlik`,`Davomat`],...this.data.students.map(e=>[`"${e.name}"`,`"${e.sinf}"`,`"${e.parentName}"`,`"${e.phone}"`,e.monthlyFee||3e6,e.paidAmount||0,e.debtAmount||0,`"${e.attendance||`95%`}"`])].map(e=>e.join(`,`)).join(`
`),t=encodeURI(e),n=document.createElement(`a`);n.setAttribute(`href`,t),n.setAttribute(`download`,`oquvchilar_${new Date().toISOString().slice(0,10)}.csv`),document.body.appendChild(n),n.click(),document.body.removeChild(n),this.showToast(`O'quvchilar ro'yxati (.csv) yuklab olindi`,`success`)}exportPaymentsToCSV(){let e=`data:text/csv;charset=utf-8,﻿`+[[`O'quvchi`,`Sinf`,`Oylik to'lov`,`To'langan`,`Qoldiq qarz`,`Holat`],...this.data.students.map(e=>[`"${e.name}"`,`"${e.sinf}"`,e.monthlyFee||3e6,e.paidAmount||0,e.debtAmount||0,`"${e.paymentStatus}"`])].map(e=>e.join(`,`)).join(`
`),t=encodeURI(e),n=document.createElement(`a`);n.setAttribute(`href`,t),n.setAttribute(`download`,`tolovlar_${new Date().toISOString().slice(0,10)}.csv`),document.body.appendChild(n),n.click(),document.body.removeChild(n),this.showToast(`To'lovlar hisoboti (.csv) yuklab olindi`,`success`)}switchAttendanceSubTab(e){this.attendanceSubTab=e,this.renderCurrentView()}openAttendanceModal(e){let t=this.data.classes.find(t=>t.id===e);if(!t)return;this.activeAttendanceClassId=e;let n=this.data.students.filter(e=>e.sinf===t.name);this.tempAttendanceMap={},n.forEach(e=>{this.tempAttendanceMap[e.id]=`present`});let r=`
      <div class="modal-dialog modal-lg">
        <div class="modal-header">
          <div class="modal-title-wrap">
            <h3>${c(`markAttendanceModalTitle`)} — ${t.name}</h3>
            <p>${this.data.currentDateText} &bull; ${c(`homeroomTeacherLabel`)}: ${t.teacherName}</p>
          </div>
          <button class="btn-close-modal" onclick="window.app.closeModal()">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div class="modal-body">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px;">
            <span style="font-size: 13px; font-weight: 600; color: var(--text-secondary);">${c(`studentsListLabel`)} (${n.length} ${c(`studentsUnitAtt`)})</span>
            <div style="display: flex; gap: 6px;">
              <button class="btn btn-secondary" style="padding: 4px 10px; font-size: 12px;" onclick="window.app.markAllAttendance('present')">
                ${c(`markAllPresent`)}
              </button>
            </div>
          </div>

          <div id="attendance-students-list">
            ${n.length===0?`
              <div style="text-align: center; padding: 24px; color: var(--text-muted); font-size: 13.5px;">
                ${c(`noStudentsInClass`)}
              </div>
            `:n.map(e=>`
              <div class="attendance-student-row" id="att-row-${e.id}">
                <div style="display: flex; align-items: center; gap: 10px;">
                  <div class="cell-user-avatar" style="width: 32px; height: 32px; font-size: 11px;">${e.initials}</div>
                  <div>
                    <div style="font-size: 13.5px; font-weight: 600; color: var(--text-main);">${e.name}</div>
                    <div style="font-size: 11.5px; color: var(--text-muted);">${e.parentName} &bull; ${e.phone}</div>
                  </div>
                </div>

                <div class="att-actions-btn-group">
                  <button 
                    type="button"
                    class="att-btn present active" 
                    id="btn-pres-${e.id}"
                    onclick="window.app.setStudentAttendance('${e.id}', 'present')"
                  >
                    ${c(`present`)}
                  </button>
                  <button 
                    type="button"
                    class="att-btn absent" 
                    id="btn-abs-${e.id}"
                    onclick="window.app.setStudentAttendance('${e.id}', 'absent')"
                  >
                    ${c(`absent`)}
                  </button>
                  <button 
                    type="button"
                    class="att-btn excused" 
                    id="btn-exc-${e.id}"
                    onclick="window.app.setStudentAttendance('${e.id}', 'excused')"
                  >
                    ${c(`excused`)}
                  </button>
                </div>
              </div>
            `).join(``)}
          </div>
        </div>

        <div class="modal-footer">
          <button class="btn btn-secondary" onclick="window.app.closeModal()">${c(`cancel`)}</button>
          <button class="btn btn-primary" onclick="window.app.saveClassAttendance('${t.id}')">
            ${c(`saveAttendanceBtn`)}
          </button>
        </div>
      </div>
    `;this.showModalContent(r)}setStudentAttendance(e,t){this.tempAttendanceMap[e]=t;let n=document.getElementById(`att-row-${e}`);n&&(n.querySelectorAll(`.att-btn`).forEach(e=>e.classList.remove(`active`)),t===`present`&&document.getElementById(`btn-pres-${e}`)?.classList.add(`active`),t===`absent`&&document.getElementById(`btn-abs-${e}`)?.classList.add(`active`),t===`excused`&&document.getElementById(`btn-exc-${e}`)?.classList.add(`active`))}markAllAttendance(e){Object.keys(this.tempAttendanceMap).forEach(t=>{this.setStudentAttendance(t,e)})}saveClassAttendance(e){let t=this.data.classes.find(t=>t.id===e);if(!t)return;let n=0,i=Object.keys(this.tempAttendanceMap).length;Object.values(this.tempAttendanceMap).forEach(e=>{e===`present`&&n++}),t.attendanceStatus=`Belgilangan`,t.todayPresent=n,t.todayTotal=i||t.currentStudents,r(this.data),this.closeModal(),this.renderCurrentView(),this.showToast(`${t.name} sinf davomati muvaffaqiyatli saqlandi! (${n}/${i||t.currentStudents} keldi)`,`success`)}openTutorAttendanceModal(e){Array.isArray(this.data.tutorCourses)||(this.data.tutorCourses=[]);let t=this.data.tutorCourses.find(t=>t.id===e||t.name===e);if(!t)return;Array.isArray(t.studentIds)||(t.studentIds=[]);let n=t.studentIds.map(e=>this.data.students.find(t=>t.id===e)).filter(Boolean);this.activeTutorCourseId=t.id,this.tempTutorAttendanceMap={},n.forEach(e=>{this.tempTutorAttendanceMap[e.id]=`present`});let r=t.attendanceStatus===`Belgilangan`,i=`
      <div class="modal-dialog modal-lg">
        <div class="modal-header">
          <div class="modal-title-wrap">
            <div style="display: flex; align-items: center; gap: 8px;">
              <h3>${t.name}</h3>
              <span class="status-pill ${r?`status-marked`:`status-unmarked`}" style="font-size: 11px;">
                ${c(r?`marked`:`notMarked`)}
              </span>
            </div>
            <p>${c(`instructor`)}: <strong>${t.instructor||`—`}</strong> &bull; ${t.days||``} ${t.time?`(${t.time})`:``} ${t.fee?`&bull; ${Number(t.fee).toLocaleString()} ${c(`som`)}`:``}</p>
          </div>
          <button class="btn-close-modal" onclick="window.app.closeModal()" aria-label="${c(`close`)}">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div class="modal-body">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; flex-wrap: wrap; gap: 8px;">
            <span style="font-size: 13.5px; font-weight: 700; color: var(--text-main);">
              ${c(`studentsListLabel`)} (${n.length} ${c(`studentsUnitAtt`)})
            </span>
            <div style="display: flex; align-items: center; gap: 8px;">
              <button class="btn btn-primary" style="padding: 6px 12px; font-size: 12.5px; display: inline-flex; align-items: center; gap: 5px;" onclick="window.app.openAssignStudentToTutorModal('${t.id}')">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                <span>${c(`addStudentToTutorBtn`)}</span>
              </button>
              ${n.length>0?`
                <button class="btn btn-secondary" style="padding: 6px 12px; font-size: 12.5px;" onclick="window.app.markAllTutorAttendance('present')">
                  ${c(`markAllPresent`)}
                </button>
              `:``}
            </div>
          </div>

          <div id="tutor-attendance-list">
            ${n.length===0?`
              <div class="empty-students-box" style="padding: 32px 20px; background: var(--bg-subtle); border-radius: var(--radius-md); border: 1px dashed var(--border-light); text-align: center;">
                <p style="margin-bottom: 12px; color: var(--text-muted); font-size: 13.5px;">${c(`noTutorStudentsFound`)}</p>
                <button class="btn btn-primary" style="display: inline-flex; align-items: center; gap: 6px;" onclick="window.app.openAssignStudentToTutorModal('${t.id}')">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                  <span>${c(`addStudentToTutorBtn`)}</span>
                </button>
              </div>
            `:n.map(e=>`
              <div class="attendance-student-row" id="tutor-row-${e.id}">
                <div style="display: flex; align-items: center; gap: 10px;">
                  <div class="cell-user-avatar" style="width: 34px; height: 34px; font-size: 11.5px;">${e.initials||`OQ`}</div>
                  <div>
                    <div style="font-size: 13.5px; font-weight: 600; color: var(--text-main);">${e.name}</div>
                    <div style="font-size: 11.5px; color: var(--text-muted);">${e.sinf||`—`} &bull; ${e.phone||`—`}</div>
                  </div>
                </div>

                <div style="display: flex; align-items: center; gap: 8px;">
                  <div class="att-actions-btn-group">
                    <button 
                      type="button" 
                      class="att-btn present active" 
                      id="tutor-btn-pres-${e.id}"
                      onclick="window.app.setTutorStudentAttendance('${e.id}', 'present')"
                    >
                      ${c(`present`)}
                    </button>
                    <button 
                      type="button" 
                      class="att-btn absent" 
                      id="tutor-btn-abs-${e.id}"
                      onclick="window.app.setTutorStudentAttendance('${e.id}', 'absent')"
                    >
                      ${c(`absent`)}
                    </button>
                    <button 
                      type="button" 
                      class="att-btn excused" 
                      id="tutor-btn-exc-${e.id}"
                      onclick="window.app.setTutorStudentAttendance('${e.id}', 'excused')"
                    >
                      ${c(`excused`)}
                    </button>
                  </div>

                  <button 
                    type="button" 
                    class="btn-close-modal" 
                    style="width: 32px; height: 32px; padding: 4px; color: #ef4444; border-radius: 6px; background: rgba(239, 68, 68, 0.08);"
                    onclick="window.app.removeStudentFromTutor('${t.id}', '${e.id}')"
                    title="${c(`removeStudentFromTutor`)}"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <polyline points="3 6 5 6 21 6"></polyline>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                  </button>
                </div>
              </div>
            `).join(``)}
          </div>
        </div>

        <div class="modal-footer" style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
          <button class="btn btn-secondary" onclick="window.app.closeModal()">${c(`cancel`)}</button>
          <div style="display: flex; gap: 8px;">
            <button class="btn btn-secondary" style="color: #ef4444; border-color: rgba(239, 68, 68, 0.3);" onclick="window.app.deleteTutorCourse('${t.id}')">
              ${c(`deleteTutorCourse`)}
            </button>
            <button class="btn btn-primary" onclick="window.app.saveTutorAttendance('${t.id}')">
              ${c(`saveAttendanceBtn`)}
            </button>
          </div>
        </div>
      </div>
    `;this.showModalContent(i)}openAssignStudentToTutorModal(e){let t=this.data.tutorCourses?.find(t=>t.id===e||t.name===e);if(!t)return;Array.isArray(t.studentIds)||(t.studentIds=[]);let n=(this.data.students||[]).filter(e=>!t.studentIds.includes(e.id)),r=`
      <div class="modal-dialog">
        <div class="modal-header">
          <div class="modal-title-wrap">
            <h3>${c(`assignStudentModalTitle`)}</h3>
            <p>${t.name} &bull; ${c(`assignStudentModalSub`)}</p>
          </div>
          <button class="btn-close-modal" onclick="window.app.openTutorAttendanceModal('${t.id}')" aria-label="${c(`close`)}">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <form onsubmit="window.app.handleAssignStudentToTutor(event, '${t.id}')">
          <div class="modal-body">
            <div class="form-grid">
              <div class="form-group">
                <label class="form-label">${c(`selectStudentToAssign`)} <span class="req">*</span></label>
                ${n.length===0?`
                  <div style="padding: 12px; background: var(--bg-subtle); border-radius: var(--radius-sm); color: var(--text-muted); font-size: 13.5px;">
                    ${c(`allStudentsAlreadyEnrolled`)}
                  </div>
                `:`
                  <select class="form-select" id="assign-tutor-student-id" required style="font-size: 14px; padding: 10px 12px;">
                    <option value="" disabled selected>${c(`selectStudentToAssign`)}...</option>
                    ${n.map(e=>`
                      <option value="${e.id}">
                        ${e.name} (${e.sinf||`—`}) ${e.phone?`• ${e.phone}`:``}
                      </option>
                    `).join(``)}
                  </select>
                `}
              </div>

              <div style="background: var(--bg-subtle); border: 1px solid var(--border-light); border-radius: var(--radius-md); padding: 12px; font-size: 13px; display: flex; flex-direction: column; gap: 4px;">
                <div style="font-weight: 600; color: var(--text-main);">${t.name}</div>
                <div style="color: var(--text-muted);">${c(`instructor`)}: ${t.instructor||`—`} &bull; ${t.days||``} ${t.time||``}</div>
                ${t.fee?`<div style="color: var(--primary); font-weight: 600;">${c(`tutorMonthlyFee`)}: ${Number(t.fee).toLocaleString()} ${c(`som`)}</div>`:``}
              </div>
            </div>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" onclick="window.app.openTutorAttendanceModal('${t.id}')">${c(`cancel`)}</button>
            ${n.length>0?`
              <button type="submit" class="btn btn-primary">${c(`assignStudentSubmitBtn`)}</button>
            `:``}
          </div>
        </form>
      </div>
    `;this.showModalContent(r)}handleAssignStudentToTutor(e,t){e.preventDefault();let n=this.data.tutorCourses?.find(e=>e.id===t||e.name===t);if(!n)return;let i=document.getElementById(`assign-tutor-student-id`),a=i?i.value:null;if(!a)return;Array.isArray(n.studentIds)||(n.studentIds=[]),n.studentIds.includes(a)||n.studentIds.push(a);let o=this.data.students.find(e=>e.id===a);r(this.data),this.showToast(`"${o?o.name:`O'quvchi`}" "${n.name}" to'garagiga muvaffaqiyatli qo'shildi!`,`success`),this.openTutorAttendanceModal(n.id),this.renderCurrentView()}removeStudentFromTutor(e,t){let n=this.data.tutorCourses?.find(t=>t.id===e||t.name===e);if(!n)return;let i=this.data.students.find(e=>e.id===t);confirm(`"${i?i.name:`O'quvchi`}"ni "${n.name}" to'garagidan chiqarishga ishonchingiz komilmi?`)&&(n.studentIds=(n.studentIds||[]).filter(e=>e!==t),r(this.data),this.showToast(`"${i?i.name:`O'quvchi`}" to'garakdan chiqarildi`,`info`),document.getElementById(`modal-container`)?.classList.contains(`active`)&&(this.activeTutorCourseId===n.id?this.openTutorAttendanceModal(n.id):i&&this.openStudentDetailsModal(t)),this.renderCurrentView())}deleteTutorCourse(e){let t=this.data.tutorCourses?.find(t=>t.id===e);t&&confirm(`"${t.name}" to'garagini butunlay o'chirmoqchimisiz?`)&&(this.data.tutorCourses=(this.data.tutorCourses||[]).filter(t=>t.id!==e),r(this.data),this.closeModal(),this.renderCurrentView(),this.showToast(`"${t.name}" to'garagi o'chirildi`,`info`))}setTutorStudentAttendance(e,t){this.tempTutorAttendanceMap||={},this.tempTutorAttendanceMap[e]=t;let n=document.getElementById(`tutor-row-${e}`);n&&(n.querySelectorAll(`.att-btn`).forEach(e=>e.classList.remove(`active`)),t===`present`&&document.getElementById(`tutor-btn-pres-${e}`)?.classList.add(`active`),t===`absent`&&document.getElementById(`tutor-btn-abs-${e}`)?.classList.add(`active`),t===`excused`&&document.getElementById(`tutor-btn-exc-${e}`)?.classList.add(`active`))}markAllTutorAttendance(e){this.tempTutorAttendanceMap&&Object.keys(this.tempTutorAttendanceMap).forEach(t=>{this.setTutorStudentAttendance(t,e)})}saveTutorAttendance(e){let t=this.data.tutorCourses?.find(t=>t.id===e||t.name===e),n=0;this.tempTutorAttendanceMap&&Object.values(this.tempTutorAttendanceMap).forEach(e=>{e===`present`&&n++});let i=Object.keys(this.tempTutorAttendanceMap||{}).length;t&&(t.attendanceStatus=`Belgilangan`,t.todayPresent=n,r(this.data)),this.closeModal(),this.renderCurrentView(),this.showToast(`"${t?t.name:`To'garak`}" davomati saqlandi (${n}/${i} keldi)`,`success`)}deleteStudent(e){let t=this.data.students.find(t=>t.id===e);if(t&&confirm(`Haqiqatan ham o'quvchi "${t.name}"ni ro'yxatdan o'chirmoqchimisiz?`)){let n=this.data.classes.find(e=>e.name===t.sinf);n&&n.currentStudents>0&&n.currentStudents--,this.data.students=this.data.students.filter(t=>t.id!==e),this.selectedStudentId===e&&(this.selectedStudentId=this.data.students[0]?.id||null),r(this.data),this.closeModal(),this.renderCurrentView(),this.showToast(`"${t.name}" muvaffaqiyatli o'chirildi!`,`info`)}}deleteClass(e){let t=this.data.classes.find(t=>t.id===e);if(!t)return;let n=this.data.students.filter(e=>e.sinf===t.name).length;if(n>0){if(!confirm(`"${t.name}" sinfida ${n} ta o'quvchi mavjud. Sinfni baribir o'chirishni xohlaysizmi?`))return}else if(!confirm(`"${t.name}" sinfini o'chirishga ishonchingiz komilmi?`))return;this.data.classes=this.data.classes.filter(t=>t.id!==e),r(this.data),this.renderCurrentView(),this.showToast(`"${t.name}" sinfi o'chirildi!`,`info`)}deleteTeacher(e){let t=this.data.teachers.find(t=>t.id===e);t&&confirm(`O'qituvchi "${t.name}"ni o'chirishga ishonchingiz komilmi?`)&&(this.data.teachers=this.data.teachers.filter(t=>t.id!==e),r(this.data),this.renderCurrentView(),this.showToast(`"${t.name}" o'qituvchilar ro'yxatidan chiqarildi`,`info`))}openProfileModal(){this.showModalContent(`
      <div class="modal-dialog">
        <div class="modal-header">
          <div class="modal-title-wrap">
            <h3>Tizim va Administrator sozlamalari</h3>
            <p>Maktab CRM boshqaruvi va ma'lumotlar xavfsizligi</p>
          </div>
          <button class="btn-close-modal" onclick="window.app.closeModal()">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div class="modal-body">
          <div style="display: flex; align-items: center; gap: 14px; padding: 14px; background: var(--bg-subtle); border-radius: var(--radius-md); border: 1px solid var(--border-light); margin-bottom: 16px;">
            <div class="user-avatar" style="width: 48px; height: 48px; font-size: 16px;">DR</div>
            <div>
              <div style="font-weight: 700; font-size: 16px; color: var(--text-main);">Dilshod Rahimov</div>
              <div style="font-size: 13px; color: var(--text-secondary);">Bosh direktor &bull; Administrator huquqi</div>
              <div style="font-size: 11.5px; color: var(--text-muted); margin-top: 2px;">Tizim versiyasi: v1.2.0 &bull; 2026-10-23</div>
            </div>
          </div>

          <div style="display: flex; flex-direction: column; gap: 10px;">
            <div style="font-weight: 600; font-size: 13.5px; color: var(--text-main); margin-bottom: 2px;">Ma'lumotlar bazasi zaxirasi:</div>

            <button class="btn btn-secondary" onclick="window.app.exportDatabaseJSON()" style="width: 100%; justify-content: flex-start; gap: 10px; padding: 10px 14px;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              <span>To'liq ma'lumotlar bazasini yuklab olish (.json)</span>
            </button>

            <button class="btn btn-secondary" onclick="document.getElementById('import-json-input').click()" style="width: 100%; justify-content: flex-start; gap: 10px; padding: 10px 14px;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="17 8 12 3 7 8"></polyline>
                <line x1="12" y1="3" x2="12" y2="15"></line>
              </svg>
              <span>Zaxiradan tiklash (JSON import)</span>
            </button>
            <input type="file" id="import-json-input" accept=".json" style="display: none;" onchange="window.app.importDatabaseJSON(event)" />

            <div style="padding-top: 8px; border-top: 1px solid var(--border-light); margin-top: 4px;">
              <button class="btn btn-secondary" onclick="window.app.resetToDemoData()" style="width: 100%; justify-content: flex-start; gap: 10px; padding: 10px 14px; color: #ef4444; border-color: rgba(239, 68, 68, 0.3);">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="1 4 1 10 7 10"></polyline>
                  <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>
                </svg>
                <span>Dastlabki demo holatiga qaytarish (Reset)</span>
              </button>
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" onclick="window.app.closeModal()">Yopish</button>
        </div>
      </div>
    `)}exportDatabaseJSON(){let e=JSON.stringify(this.data,null,2),t=new Blob([e],{type:`application/json`}),n=document.createElement(`a`);n.href=URL.createObjectURL(t),n.download=`maktab_crm_backup_${new Date().toISOString().slice(0,10)}.json`,n.click(),this.showToast(`Barcha ma'lumotlar zaxirasi (.json) yuklab olindi!`,`success`)}importDatabaseJSON(e){let t=e.target.files?.[0];if(!t)return;let n=new FileReader;n.onload=e=>{try{let t=JSON.parse(e.target.result);t.students&&t.classes&&t.leads?(this.data=t,r(this.data),this.closeModal(),this.renderCurrentView(),this.showToast(`Ma'lumotlar zaxiradan muvaffaqiyatli tiklandi!`,`success`)):alert(`Fayl formati mos kelmadi!`)}catch{alert(`JSON faylini o'qishda xatolik yuz berdi!`)}},n.readAsText(t)}resetToDemoData(){confirm(`Barcha o'zgartirishlar bekor qilinib, dastlabki namunaviy ma'lumotlar tiklanadi. Davom etasizmi?`)&&(localStorage.removeItem(`maktab_crm_data_v2`),location.reload())}openModal(e,t={}){let n=``;switch(e){case`addLead`:n=`
          <div class="modal-dialog">
            <div class="modal-header">
              <div class="modal-title-wrap">
                <h3>${c(`newLeadModalTitle`)}</h3>
                <p>${c(`newLeadModalSub`)}</p>
              </div>
              <button class="btn-close-modal" onclick="window.app.closeModal()">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <form onsubmit="window.app.handleCreateLead(event)">
              <div class="modal-body">
                <div class="form-grid">
                  <div class="form-group">
                    <label class="form-label">${c(`childFullName`)} <span class="req">*</span></label>
                    <input type="text" class="form-control" id="lead-name" placeholder="Sardor Yusupov" required />
                  </div>

                  <div class="form-row">
                    <div class="form-group">
                      <label class="form-label">${c(`gradeSelect`)} <span class="req">*</span></label>
                      <select class="form-select" id="lead-grade" required>
                        <option value="1-sinf">1-${c(`classWord`)}</option>
                        <option value="2-sinf">2-${c(`classWord`)}</option>
                        <option value="3-sinf">3-${c(`classWord`)}</option>
                        <option value="4-sinf">4-${c(`classWord`)}</option>
                        <option value="5-sinf">5-${c(`classWord`)}</option>
                        <option value="6-sinf">6-${c(`classWord`)}</option>
                        <option value="7-sinf">7-${c(`classWord`)}</option>
                        <option value="8-sinf">8-${c(`classWord`)}</option>
                      </select>
                    </div>

                    <div class="form-group">
                      <label class="form-label">${c(`sourceSelect`)} <span class="req">*</span></label>
                      <select class="form-select" id="lead-source" required>
                        <option value="Instagram">${c(`sourceInstagram`)}</option>
                        <option value="Telegram">${c(`sourceTelegram`)}</option>
                        <option value="Sayt">${c(`sourceSayt`)}</option>
                        <option value="Tavsiya">${c(`sourceTavsiya`)}</option>
                      </select>
                    </div>
                  </div>

                  <div class="form-row">
                    <div class="form-group">
                      <label class="form-label">${c(`parentNameLabel`)} <span class="req">*</span></label>
                      <input type="text" class="form-control" id="lead-parent" placeholder="Dilshod Karimov" required />
                    </div>

                    <div class="form-group">
                      <label class="form-label">${c(`phoneLabel`)} <span class="req">*</span></label>
                      <input type="tel" class="form-control" id="lead-phone" placeholder="+998 90 123 45 67" required />
                    </div>
                  </div>

                  <div class="form-group">
                    <label class="form-label">${c(`notesLabel`)}</label>
                    <textarea class="form-textarea" id="lead-note" placeholder="..."></textarea>
                  </div>
                </div>
              </div>

              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" onclick="window.app.closeModal()">${c(`cancel`)}</button>
                <button type="submit" class="btn btn-primary">${c(`addLeadSubmitBtn`)}</button>
              </div>
            </form>
          </div>
        `;break;case`addStudent`:n=`
          <div class="modal-dialog">
            <div class="modal-header">
              <div class="modal-title-wrap">
                <h3>${c(`newStudentModalTitle`)}</h3>
                <p>${c(`newStudentModalSub`)}</p>
              </div>
              <button class="btn-close-modal" onclick="window.app.closeModal()">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <form onsubmit="window.app.handleCreateStudent(event)">
              <div class="modal-body">
                <div class="form-grid">
                  <div class="form-group">
                    <label class="form-label">${c(`studentFullName`)} <span class="req">*</span></label>
                    <input type="text" class="form-control" id="new-std-name" placeholder="Farhod Alimov" required />
                  </div>

                  <div class="form-row">
                    <div class="form-group">
                      <label class="form-label">${c(`selectClass`)} <span class="req">*</span></label>
                      <select class="form-select" id="new-std-class" required>
                        ${this.data.classes.map(e=>`<option value="${e.name}">${e.name} (${e.teacherName})</option>`).join(``)}
                      </select>
                    </div>

                    <div class="form-group">
                      <label class="form-label">${c(`birthDateLabel`)}</label>
                      <input type="text" class="form-control" id="new-std-birth" placeholder="15.05.2016" />
                    </div>
                  </div>

                  <div class="form-row">
                    <div class="form-group">
                      <label class="form-label">${c(`parentNameLabel`)} <span class="req">*</span></label>
                      <input type="text" class="form-control" id="new-std-parent" placeholder="Akmal Alimov" required />
                    </div>

                    <div class="form-group">
                      <label class="form-label">${c(`phoneLabel`)} <span class="req">*</span></label>
                      <input type="tel" class="form-control" id="new-std-phone" placeholder="+998 90 555 44 33" required />
                    </div>
                  </div>

                  <div class="form-row">
                    <div class="form-group">
                      <label class="form-label">${c(`monthlyFeeAmount`)}</label>
                      <input type="number" class="form-control" id="new-std-fee" value="3000000" min="0" step="any" />
                    </div>

                    <div class="form-group">
                      <label class="form-label">${c(`initialPaymentStatus`)}</label>
                      <select class="form-select" id="new-std-status">
                        <option value="paid">${c(`statusPaid`)}</option>
                        <option value="partial">${c(`statusPartial`)}</option>
                        <option value="debt" selected>${c(`statusWaitingDebt`)}</option>
                      </select>
                    </div>
                  </div>

                  <!-- Repetitorlik va to'garaklar checkboxlari -->
                  ${this.data.tutorCourses&&this.data.tutorCourses.length>0?`
                    <div class="form-group" style="margin-top: 4px;">
                      <label class="form-label">${c(`tutorCoursesLabel`)}</label>
                      <div style="display: flex; flex-direction: column; gap: 8px; padding: 10px 12px; background: var(--bg-subtle); border: 1px solid var(--border-light); border-radius: var(--radius-sm); max-height: 120px; overflow-y: auto;">
                        ${this.data.tutorCourses.map(e=>`
                          <label style="display: flex; align-items: center; gap: 8px; font-size: 13px; cursor: pointer;">
                            <input type="checkbox" name="new-std-tutors" value="${e.id}" style="width: 16px; height: 16px; accent-color: var(--primary);" />
                            <span style="font-weight: 500; color: var(--text-main);">${e.name}</span>
                            <span style="color: var(--text-muted); font-size: 11.5px;">(${e.instructor||`—`})</span>
                          </label>
                        `).join(``)}
                      </div>
                    </div>
                  `:``}
                </div>
              </div>

              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" onclick="window.app.closeModal()">${c(`cancel`)}</button>
                <button type="submit" class="btn btn-primary">${c(`acceptStudentSubmitBtn`)}</button>
              </div>
            </form>
          </div>
        `;break;case`addPayment`:let e=t.studentId||this.data.students[0]?.id;n=`
          <div class="modal-dialog">
            <div class="modal-header">
              <div class="modal-title-wrap">
                <h3>${c(`acceptPaymentModalTitle`)}</h3>
                <p>${c(`acceptPaymentModalSub`)}</p>
              </div>
              <button class="btn-close-modal" onclick="window.app.closeModal()">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <form onsubmit="window.app.handleCreatePayment(event)">
              <div class="modal-body">
                <div class="form-grid">
                  <div class="form-group">
                    <label class="form-label">${c(`selectStudent`)} <span class="req">*</span></label>
                    <select class="form-select" id="pay-student-select" required onchange="window.app.onPaymentStudentChange(this.value)">
                      ${this.data.students.map(t=>`
                        <option value="${t.id}" ${t.id===e?`selected`:``}>
                          ${t.name} (${t.sinf}) - ${c(`debtAmountLabel`)}: ${(t.debtAmount||0).toLocaleString()} ${c(`som`)}
                        </option>
                      `).join(``)}
                    </select>
                  </div>

                  <div class="form-row">
                    <div class="form-group">
                      <label class="form-label">${c(`paymentAmount`)} <span class="req">*</span></label>
                      <input type="number" class="form-control" id="pay-amount" value="3000000" min="0" step="any" required />
                    </div>

                    <div class="form-group">
                      <label class="form-label">${c(`paymentMethod`)} <span class="req">*</span></label>
                      <select class="form-select" id="pay-method" required>
                        <option value="Payme">Payme</option>
                        <option value="Click">Click</option>
                        <option value="Naqd">${c(`cashMethod`)}</option>
                        <option value="Bank o'tkazmasi">${c(`bankTransfer`)}</option>
                      </select>
                    </div>
                  </div>

                  <div class="form-group">
                    <label class="form-label">${c(`paymentPurpose`)}</label>
                    <input type="text" class="form-control" id="pay-comment" value="${c(`thisMonth`)}" />
                  </div>

                  <!-- Thermal Printer Toggle Option -->
                  <label class="print-toggle-box" for="pay-print-receipt" style="margin-top: 6px;">
                    <div class="print-toggle-info">
                      <span class="print-toggle-icon">🖨️</span>
                      <div>
                        <div class="print-toggle-title">${c(`printThermalReceipt`)}</div>
                        <div class="print-toggle-sub">${c(`thermalPrinterDesc`)}</div>
                      </div>
                    </div>
                    <input type="checkbox" id="pay-print-receipt" checked style="width: 18px; height: 18px; accent-color: #16a34a; cursor: pointer;" />
                  </label>
                </div>
              </div>

              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" onclick="window.app.closeModal()">${c(`cancel`)}</button>
                <button type="submit" class="btn btn-primary" style="background: #16a34a; border-color: #16a34a; font-weight: 700;">
                  ✅ ${c(`confirmAndPrint`)} &rarr;
                </button>
              </div>
            </form>
          </div>
        `;break;case`addClass`:n=`
          <div class="modal-dialog">
            <div class="modal-header">
              <div class="modal-title-wrap">
                <h3>${c(`newClassModalTitle`)}</h3>
                <p>${c(`newClassModalSub`)}</p>
              </div>
              <button class="btn-close-modal" onclick="window.app.closeModal()">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <form onsubmit="window.app.handleCreateClass(event)">
              <div class="modal-body">
                <div class="form-grid">
                  <div class="form-row">
                    <div class="form-group">
                      <label class="form-label">${c(`classNameLabel`)} <span class="req">*</span></label>
                      <input type="text" class="form-control" id="cls-name" placeholder="6-A" required />
                    </div>

                    <div class="form-group">
                      <label class="form-label">${c(`roomNumberLabel`)} <span class="req">*</span></label>
                      <input type="text" class="form-control" id="cls-room" placeholder="25" required />
                    </div>
                  </div>

                  <div class="form-row">
                    <div class="form-group">
                      <label class="form-label">${c(`homeroomTeacherLabel`)} <span class="req">*</span></label>
                      <select class="form-select" id="cls-teacher" required>
                        ${this.data.teachers.map(e=>`<option value="${e.name}">${e.name} (${f(e.subject)})</option>`).join(``)}
                      </select>
                    </div>

                    <div class="form-group">
                      <label class="form-label">${c(`maxCapacityLabel`)}</label>
                      <input type="number" class="form-control" id="cls-capacity" value="22" max="30" min="10" />
                    </div>
                  </div>
                </div>
              </div>

              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" onclick="window.app.closeModal()">${c(`cancel`)}</button>
                <button type="submit" class="btn btn-primary">${c(`createClassBtn`)}</button>
              </div>
            </form>
          </div>
        `;break;case`addTeacher`:n=`
          <div class="modal-dialog">
            <div class="modal-header">
              <div class="modal-title-wrap">
                <h3>${c(`newTeacherModalTitle`)}</h3>
                <p>${c(`newTeacherModalSub`)}</p>
              </div>
              <button class="btn-close-modal" onclick="window.app.closeModal()">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <form onsubmit="window.app.handleCreateTeacher(event)">
              <div class="modal-body">
                <div class="form-grid">
                  <div class="form-group">
                    <label class="form-label">${c(`teacherFullName`)} <span class="req">*</span></label>
                    <input type="text" class="form-control" id="tch-name" placeholder="Jahongir Qosimov" required />
                  </div>

                  <div class="form-row">
                    <div class="form-group">
                      <label class="form-label">${c(`teacherSubject`)} <span class="req">*</span></label>
                      <input type="text" class="form-control" id="tch-subject" placeholder="Fizika" required />
                    </div>

                    <div class="form-group">
                      <label class="form-label">${c(`teacherWeeklyHours`)}</label>
                      <input type="number" class="form-control" id="tch-hours" value="18" />
                    </div>
                  </div>

                  <div class="form-row">
                    <div class="form-group">
                      <label class="form-label">${c(`phoneLabel`)} <span class="req">*</span></label>
                      <input type="tel" class="form-control" id="tch-phone" placeholder="+998 90 777 66 55" required />
                    </div>

                    <div class="form-group">
                      <label class="form-label">${c(`teacherAssignedClasses`)}</label>
                      <input type="text" class="form-control" id="tch-classes" placeholder="5-A, 6-A" />
                    </div>
                  </div>
                </div>
              </div>

              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" onclick="window.app.closeModal()">${c(`cancel`)}</button>
                <button type="submit" class="btn btn-primary">${c(`addTeacherSubmitBtn`)}</button>
              </div>
            </form>
          </div>
        `;break;case`addTutorCourse`:n=`
          <div class="modal-dialog">
            <div class="modal-header">
              <div class="modal-title-wrap">
                <h3>${c(`newTutorModalTitle`)}</h3>
                <p>${c(`newTutorModalSub`)}</p>
              </div>
              <button class="btn-close-modal" onclick="window.app.closeModal()" aria-label="${c(`close`)}">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <form onsubmit="window.app.handleCreateTutorCourse(event)">
              <div class="modal-body">
                <div class="form-grid">
                  <div class="form-group">
                    <label class="form-label">${c(`tutorCourseName`)} <span class="req">*</span></label>
                    <input type="text" class="form-control" id="new-tutor-name" placeholder="Shaxmat to'garagi" required />
                  </div>

                  <div class="form-row">
                    <div class="form-group">
                      <label class="form-label">${c(`instructor`)} <span class="req">*</span></label>
                      <input type="text" class="form-control" id="new-tutor-instructor" placeholder="Aziz Rahimov" required />
                    </div>

                    <div class="form-group">
                      <label class="form-label">${c(`tutorMonthlyFee`)}</label>
                      <input type="number" class="form-control" id="new-tutor-fee" value="500000" min="0" step="any" />
                    </div>
                  </div>

                  <div class="form-row">
                    <div class="form-group">
                      <label class="form-label">${c(`tutorScheduleDays`)}</label>
                      <input type="text" class="form-control" id="new-tutor-days" placeholder="Dush, Chor, Juma" />
                    </div>

                    <div class="form-group">
                      <label class="form-label">${c(`tutorScheduleTime`)}</label>
                      <input type="text" class="form-control" id="new-tutor-time" placeholder="16:00 - 17:30" />
                    </div>
                  </div>
                </div>
              </div>

              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" onclick="window.app.closeModal()">${c(`cancel`)}</button>
                <button type="submit" class="btn btn-primary">${c(`createTutorSubmitBtn`)}</button>
              </div>
            </form>
          </div>
        `;break;default:return}this.showModalContent(n)}showModalContent(e){let t=document.getElementById(`modal-container`);t&&(t.innerHTML=e,t.classList.add(`open`),t.classList.add(`active`),t.onclick=e=>{e.target===t&&this.closeModal()})}closeModal(){let e=document.getElementById(`modal-container`);e&&(e.classList.remove(`open`),e.classList.remove(`active`),e.innerHTML=``,e.onclick=null)}handleCreateLead(e){e.preventDefault();let t=document.getElementById(`lead-name`).value.trim(),n=document.getElementById(`lead-grade`).value,i=document.getElementById(`lead-source`).value,a=document.getElementById(`lead-parent`).value.trim(),o=document.getElementById(`lead-phone`).value.trim(),s=document.getElementById(`lead-note`).value.trim(),c=`blue`;i===`Instagram`?c=`pink`:i===`Tavsiya`?c=`green`:i===`Sayt`&&(c=`orange`);let l={id:`lead-`+Date.now(),name:t,grade:n,parent:a,phone:o,source:i,sourceColor:c,date:`Bugun`,manager:`DR`,stage:`yangi`,note:s};this.data.leads.unshift(l),r(this.data),this.closeModal(),this.renderCurrentView(),this.showToast(`Yangi so'rov ("${t}") qabul qilindi!`,`success`)}handleCreateStudent(e){e.preventDefault();let t=document.getElementById(`new-std-name`).value.trim(),n=document.getElementById(`new-std-class`).value,i=document.getElementById(`new-std-birth`).value.trim()||`01.01.2017`,a=document.getElementById(`new-std-parent`).value.trim(),o=document.getElementById(`new-std-phone`).value.trim(),s=Number(document.getElementById(`new-std-fee`).value)||3e6,c=document.getElementById(`new-std-status`).value,l=t.split(` `),u=l.length>1?(l[0][0]+l[1][0]).toUpperCase():l[0].slice(0,2).toUpperCase(),d=`Qarzdor`,f=0,p=s;c===`paid`?(d=`To'langan`,f=s,p=0):c===`partial`&&(d=`Qisman`,f=s/2,p=s/2);let m=this.data.classes.find(e=>e.name===n);m&&(m.currentStudents=(m.currentStudents||0)+1);let h={id:`std-`+Date.now(),initials:u,name:t,parentName:a,parentRole:`Ota/Ona`,motherName:a,sinf:n,gradeLevel:n.split(`-`)[0]+`-sinf`,phone:o,paymentStatus:d,paymentStatusCode:c,attendance:`100%`,birthDate:i,homeroomTeacher:m?.teacherName||`Bosh o'qituvchi`,docs:{birthCertificate:!0,medicalReport:!0,contract:!0},monthlyFee:s,paidAmount:f,debtAmount:p},g=document.querySelectorAll(`input[name="new-std-tutors"]:checked`);Array.from(g).map(e=>e.value).forEach(e=>{let t=this.data.tutorCourses?.find(t=>t.id===e);t&&(Array.isArray(t.studentIds)||(t.studentIds=[]),t.studentIds.includes(h.id)||t.studentIds.push(h.id))}),this.data.students.unshift(h),this.selectedStudentId=h.id,r(this.data),this.closeModal(),this.renderCurrentView(),this.showToast(`Yangi o'quvchi "${t}" muvaffaqiyatli qo'shildi!`,`success`)}handleCreateTutorCourse(e){e.preventDefault();let t=document.getElementById(`new-tutor-name`).value.trim(),n=document.getElementById(`new-tutor-instructor`).value.trim(),i=Number(document.getElementById(`new-tutor-fee`).value)||0,a=document.getElementById(`new-tutor-days`).value.trim()||`Dush, Chor, Juma`,o=document.getElementById(`new-tutor-time`).value.trim()||`16:00 - 17:30`;Array.isArray(this.data.tutorCourses)||(this.data.tutorCourses=[]);let s={id:`course-`+Date.now(),name:t,instructor:n,fee:i,days:a,time:o,studentIds:[],attendanceStatus:`Belgilanmagan`,todayPresent:0};this.data.tutorCourses.push(s),r(this.data),this.closeModal(),this.renderCurrentView(),this.showToast(`Yangi "${t}" to'garagi yaratildi! Endi o'quvchilarni biriktirishingiz mumkin.`,`success`)}handleCreatePayment(e){e.preventDefault();let t=document.getElementById(`pay-student-select`).value,n=Number(document.getElementById(`pay-amount`).value)||0,i=document.getElementById(`pay-method`).value,a=document.getElementById(`pay-comment`).value.trim(),o=document.getElementById(`pay-print-receipt`)?.checked??!0,s=this.data.students.find(e=>e.id===t);if(s){s.paidAmount=(s.paidAmount||0)+n,s.debtAmount=Math.max(0,(s.debtAmount||s.monthlyFee)-n),s.debtAmount===0?(s.paymentStatus=`To'langan`,s.paymentStatusCode=`paid`):(s.paymentStatus=`Qisman`,s.paymentStatusCode=`partial`);let e=new Date,t=`${String(e.getDate()).padStart(2,`0`)}.${String(e.getMonth()+1).padStart(2,`0`)}.${e.getFullYear()}`,c=`${String(e.getHours()).padStart(2,`0`)}:${String(e.getMinutes()).padStart(2,`0`)}`,l=`CHK-${e.getFullYear()}${String(e.getMonth()+1).padStart(2,`0`)}${String(e.getDate()).padStart(2,`0`)}-${Math.floor(1e3+Math.random()*9e3)}`;this.data.paymentTransactions||(this.data.paymentTransactions=[]);let u={id:`tx-`+Date.now(),receiptNumber:l,studentId:s.id,studentName:s.name,sinf:s.sinf,parentName:s.parentName,phone:s.phone,amount:n,method:i,period:a||`Oktyabr 2026`,comment:a,date:t,time:c,cashier:`Dilshod Rahimov (Administrator)`,status:`Tasdiqlangan`};this.data.paymentTransactions.unshift(u),s.lastReceipt=u,this.data.paymentsSummary&&(this.data.paymentsSummary.monthlyRevenue+=n,this.data.paymentsSummary.expectedRevenue=Math.max(0,this.data.paymentsSummary.expectedRevenue-n)),r(this.data),this.renderCurrentView(),this.showToast(`${s.name} uchun ${n.toLocaleString(`uz-UZ`)} so'm to'lov qabul qilindi! (${i})`,`success`),o?this.openReceiptModal(u,s):this.closeModal()}}handleCreateClass(e){e.preventDefault();let t=document.getElementById(`cls-name`).value.trim(),n=document.getElementById(`cls-room`).value.trim(),i=document.getElementById(`cls-teacher`).value,a=Number(document.getElementById(`cls-capacity`).value)||22,o=i.split(` `),s=o.length>1?(o[0][0]+o[1][0]).toUpperCase():i.slice(0,2).toUpperCase(),c={id:`cls-`+Date.now(),name:t,room:n,teacherName:i,teacherInitials:s,currentStudents:0,capacity:a,attendanceStatus:`Belgilanmagan`,todayPresent:0,todayTotal:0};this.data.classes.push(c),r(this.data),this.closeModal(),this.renderCurrentView(),this.showToast(`Yangi "${t}" sinfi yaratildi!`,`success`)}handleCreateTeacher(e){e.preventDefault();let t=document.getElementById(`tch-name`).value.trim(),n=document.getElementById(`tch-subject`).value.trim(),i=document.getElementById(`tch-phone`).value.trim(),a=Number(document.getElementById(`tch-hours`).value)||18,o=document.getElementById(`tch-classes`).value.trim()||`1-sinf`,s=t.split(` `),c=s.length>1?(s[0][0]+s[1][0]).toUpperCase():t.slice(0,2).toUpperCase(),l={id:`tch-`+Date.now(),initials:c,name:t,subject:n,classes:o,weeklyHours:a,phone:i};this.data.teachers.push(l),r(this.data),this.closeModal(),this.renderCurrentView(),this.showToast(`O'qituvchi "${t}" muvaffaqiyatli kiritildi!`,`success`)}showToast(e,t=`success`){let n=document.getElementById(`toast-container`);if(!n)return;let r=document.createElement(`div`);r.className=`toast-item toast-${t}`;let i=`
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
    `;t===`info`&&(i=`
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2.2">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="16" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
      `),r.innerHTML=`
      ${i}
      <div style="font-size: 13.5px; font-weight: 500; color: var(--text-main); line-height: 1.35;">${e}</div>
    `,n.appendChild(r),setTimeout(()=>{r.style.animation=`toastSlideOut 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards`,setTimeout(()=>{r.parentNode&&r.parentNode.removeChild(r)},250)},3200)}};window.addEventListener(`DOMContentLoaded`,()=>{window.app=new D});