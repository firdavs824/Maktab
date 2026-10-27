// Initial default data matching the design screenshots exactly

export const initialData = {
  currentAcademicYear: "2026–2027 o'quv yili",
  currentDateText: "Bugun, 15 oktyabr 2026",
  
  // Leads (Qabul)
  leads: [
    {
      id: "lead-1",
      name: "Aziza Karimova",
      grade: "3-sinf",
      parent: "Ota: Dilshod Karimov",
      phone: "+998 90 000 00 01",
      source: "Instagram",
      sourceColor: "pink",
      date: "15 okt",
      manager: "SN",
      stage: "yangi",
      note: "Matematika chuqurlashtirilgan guruhga qiziqmoqda"
    },
    {
      id: "lead-2",
      name: "Sardor Yusupov",
      grade: "1-sinf",
      parent: "Ona: Nilufar Yusupova",
      phone: "+998 91 000 00 02",
      source: "Telegram",
      sourceColor: "blue",
      date: "15 okt",
      manager: "SN",
      stage: "yangi",
      note: "Tayyorlov guruhida o'qigan"
    },
    {
      id: "lead-3",
      name: "Madina Rahimova",
      grade: "5-sinf",
      parent: "Ona: Gulnora Rahimova",
      phone: "+998 93 000 00 03",
      source: "Tavsiya",
      sourceColor: "green",
      date: "14 okt",
      manager: "BA",
      stage: "yangi",
      note: "Ingliz tili imtihonidan o'tishi kerak"
    },
    {
      id: "lead-4",
      name: "Jasur Toshmatov",
      grade: "7-sinf",
      parent: "Ota: Anvar Toshmatov",
      phone: "+998 94 000 00 04",
      source: "Instagram",
      sourceColor: "pink",
      date: "14 okt",
      manager: "BA",
      stage: "yangi",
      note: "Dasturlash to'garagiga qatnashish niyati bor"
    },
    {
      id: "lead-5",
      name: "Omina Qodirova",
      grade: "2-sinf",
      parent: "Ona: Zilola Qodirova",
      phone: "+998 90 000 00 05",
      source: "Sayt",
      sourceColor: "orange",
      date: "13 okt",
      manager: "SN",
      stage: "boglanildi",
      note: "Maktab binosini ko'rishga kelmoqchi"
    },
    {
      id: "lead-6",
      name: "Behruz Aliyev",
      grade: "4-sinf",
      parent: "Ota: Rustam Aliyev",
      phone: "+998 97 000 00 06",
      source: "Telegram",
      sourceColor: "blue",
      date: "12 okt",
      manager: "BA",
      stage: "boglanildi",
      note: "To'lov shartlari bo'yicha ma'lumot berildi"
    },
    {
      id: "lead-7",
      name: "Laylo Sodiqova",
      grade: "1-sinf",
      parent: "Ona: Feruza Sodiqova",
      phone: "+998 99 000 00 07",
      source: "Tavsiya",
      sourceColor: "green",
      date: "12 okt",
      manager: "SN",
      stage: "boglanildi",
      note: "Shartnoma loyihasi yuborildi"
    },
    {
      id: "lead-8",
      name: "Umar Nazarov",
      grade: "6-sinf",
      parent: "Ota: Botir Nazarov",
      phone: "+998 90 000 00 08",
      source: "Instagram",
      sourceColor: "pink",
      date: "10 okt",
      manager: "BA",
      stage: "suhbat",
      note: "Psixolog suhbati 18-oktabr soat 14:00 ga belgilangan"
    },
    {
      id: "lead-9",
      name: "Sevinch Xolmatova",
      grade: "3-sinf",
      parent: "Ona: Dilfuza Xolmatova",
      phone: "+998 91 000 00 09",
      source: "Tavsiya",
      sourceColor: "green",
      date: "9 okt",
      manager: "SN",
      stage: "suhbat",
      note: "Mantiqiy test natijasi: 92/100"
    },
    {
      id: "lead-10",
      name: "Abdulloh Ergashev",
      grade: "8-sinf",
      parent: "Ota: Sherzod Ergashev",
      phone: "+998 93 000 00 10",
      source: "Telegram",
      sourceColor: "blue",
      date: "8 okt",
      manager: "SN",
      stage: "suhbat",
      note: "Fizika-matematika yo'nalishi bo'yicha suhbat"
    },
    {
      id: "lead-11",
      name: "Nodira Ismoilova",
      grade: "2-sinf",
      parent: "Ona: Mohira Ismoilova",
      phone: "+998 94 000 00 11",
      source: "Tavsiya",
      sourceColor: "green",
      date: "7 okt",
      manager: "SN",
      stage: "shartnoma",
      note: "Barcha hujjatlar topshirildi, 1-to'lov kutilmoqda"
    },
    {
      id: "lead-12",
      name: "Islom Haydarov",
      grade: "5-sinf",
      parent: "Ota: Ulug'bek Haydarov",
      phone: "+998 97 000 00 12",
      source: "Instagram",
      sourceColor: "pink",
      date: "6 okt",
      manager: "BA",
      stage: "shartnoma",
      note: "Shartnoma 2 nusxada imzolandi"
    },
    {
      id: "lead-13",
      name: "Zuhra Malikova",
      grade: "1-sinf",
      parent: "Ona: Nargiza Malikova",
      phone: "+998 90 123 45 67",
      source: "Sayt",
      sourceColor: "orange",
      date: "5 okt",
      manager: "SN",
      stage: "shartnoma",
      note: "Tayyorgarlik kursi yakunlangan"
    },
    {
      id: "lead-14",
      name: "Kamronbek Valiyev",
      grade: "4-sinf",
      parent: "Ota: Alisher Valiyev",
      phone: "+998 93 456 78 90",
      source: "Telegram",
      sourceColor: "blue",
      date: "4 okt",
      manager: "BA",
      stage: "boglanildi",
      note: "Qayta qo'ng'iroq 22-oktabr"
    }
  ],

  // Students (O'quvchilar)
  students: [
    {
      id: "std-1",
      initials: "AK",
      name: "Aziza Karimova",
      parentName: "Dilshod Karimov",
      parentRole: "Ota",
      motherName: "Madina Karimova",
      sinf: "3-A",
      gradeLevel: "3-sinf",
      phone: "+998 90 000 00 01",
      photo: "./avatars/student1.jpg",
      paymentStatus: "To'liq to'lagan",
      paymentStatusCode: "paid",
      attendance: "96%",
      birthDate: "12.03.2017",
      homeroomTeacher: "Nodira Saidova",
      docs: {
        birthCertificate: true,
        medicalReport: true,
        contract: true
      },
      monthlyFee: 4860000,
      annualFee: 48600000,
      paidAmount: 48600000,
      debtAmount: 0
    },
    {
      id: "std-2",
      initials: "AT",
      name: "Ahma Texles",
      parentName: "Dilshod Karimov",
      parentRole: "Ota",
      motherName: "Nilufar Temirova",
      sinf: "3-A",
      gradeLevel: "3-sinf",
      phone: "+998 91 000 00 02",
      photo: "./avatars/student2.jpg",
      paymentStatus: "To'liq to'lagan",
      paymentStatusCode: "partial",
      attendance: "92%",
      birthDate: "05.08.2017",
      homeroomTeacher: "Nodira Saidova",
      docs: {
        birthCertificate: true,
        medicalReport: true,
        contract: true
      },
      monthlyFee: 4860000,
      annualFee: 48600000,
      paidAmount: 36450000,
      debtAmount: 12150000
    },
    {
      id: "std-3",
      initials: "RK",
      name: "Reysa Karimova",
      parentName: "Dilshod Karimov",
      parentRole: "Ota",
      motherName: "Gulnora Karimova",
      sinf: "3-A",
      gradeLevel: "3-sinf",
      phone: "+998 93 000 00 03",
      photo: "./avatars/student3.jpg",
      paymentStatus: "To'liq to'lagan",
      paymentStatusCode: "partial",
      attendance: "98%",
      birthDate: "21.11.2017",
      homeroomTeacher: "Nodira Saidova",
      docs: {
        birthCertificate: true,
        medicalReport: true,
        contract: true
      },
      monthlyFee: 4860000,
      annualFee: 48600000,
      paidAmount: 24300000,
      debtAmount: 24300000
    },
    {
      id: "std-4",
      initials: "AK",
      name: "Aziza Karimova",
      parentName: "Dilshod Karimov",
      parentRole: "Ota",
      motherName: "Nargiza Karimova",
      sinf: "3-A",
      gradeLevel: "3-sinf",
      phone: "+998 94 000 00 04",
      photo: "./avatars/student4.jpg",
      paymentStatus: "To'liq to'lagan",
      paymentStatusCode: "debt",
      attendance: "84%",
      birthDate: "14.06.2017",
      homeroomTeacher: "Nodira Saidova",
      docs: {
        birthCertificate: true,
        medicalReport: false,
        contract: true
      },
      monthlyFee: 4860000,
      annualFee: 48600000,
      paidAmount: 0,
      debtAmount: 48600000
    },
    {
      id: "std-5",
      initials: "OQ",
      name: "Omina Qodirova",
      parentName: "Zilola Qodirova",
      parentRole: "Ona",
      motherName: "Zilola Qodirova",
      sinf: "2-A",
      gradeLevel: "2-sinf",
      phone: "+998 90 000 00 05",
      paymentStatus: "To'langan",
      paymentStatusCode: "paid",
      attendance: "100%",
      birthDate: "09.04.2018",
      homeroomTeacher: "Zilola Rahimova",
      docs: {
        birthCertificate: true,
        medicalReport: true,
        contract: true
      },
      monthlyFee: 3000000,
      paidAmount: 3000000,
      debtAmount: 0
    },
    {
      id: "std-6",
      initials: "BA",
      name: "Behruz Aliyev",
      parentName: "Rustam Aliyev",
      parentRole: "Ota",
      motherName: "Nasiba Aliyeva",
      sinf: "4-B",
      gradeLevel: "4-sinf",
      phone: "+998 97 000 00 06",
      paymentStatus: "Qisman",
      paymentStatusCode: "partial",
      attendance: "90%",
      birthDate: "18.01.2016",
      homeroomTeacher: "Gulnora Tursunova",
      docs: {
        birthCertificate: true,
        medicalReport: true,
        contract: true
      },
      monthlyFee: 3000000,
      paidAmount: 2000000,
      debtAmount: 1000000
    },
    {
      id: "std-7",
      initials: "LS",
      name: "Laylo Sodiqova",
      parentName: "Feruza Sodiqova",
      parentRole: "Ona",
      motherName: "Feruza Sodiqova",
      sinf: "1-A",
      gradeLevel: "1-sinf",
      phone: "+998 99 000 00 07",
      paymentStatus: "To'langan",
      paymentStatusCode: "paid",
      attendance: "95%",
      birthDate: "30.09.2019",
      homeroomTeacher: "Nodira Saidova",
      docs: {
        birthCertificate: true,
        medicalReport: true,
        contract: true
      },
      monthlyFee: 3000000,
      paidAmount: 3000000,
      debtAmount: 0
    },
    {
      id: "std-8",
      initials: "UN",
      name: "Umar Nazarov",
      parentName: "Botir Nazarov",
      parentRole: "Ota",
      motherName: "Gulchehra Nazarova",
      sinf: "6-A",
      gradeLevel: "6-sinf",
      phone: "+998 90 000 00 08",
      paymentStatus: "Qarzdor",
      paymentStatusCode: "debt",
      attendance: "81%",
      birthDate: "02.02.2014",
      homeroomTeacher: "Laylo Qodirova",
      docs: {
        birthCertificate: true,
        medicalReport: true,
        contract: true
      },
      monthlyFee: 3500000,
      paidAmount: 0,
      debtAmount: 3500000
    },
    {
      id: "std-9",
      initials: "TM",
      name: "Temur Mahmudov",
      parentName: "Farrux Mahmudov",
      parentRole: "Ota",
      motherName: "Dildora Mahmudova",
      sinf: "1-A",
      gradeLevel: "1-sinf",
      phone: "+998 93 111 22 33",
      paymentStatus: "Qisman",
      paymentStatusCode: "partial",
      attendance: "94%",
      birthDate: "15.04.2019",
      homeroomTeacher: "Nodira Saidova",
      docs: {
        birthCertificate: true,
        medicalReport: true,
        contract: true
      },
      monthlyFee: 3000000,
      paidAmount: 1500000,
      debtAmount: 1500000
    },
    {
      id: "std-10",
      initials: "DE",
      name: "Diyora Ergasheva",
      parentName: "Shahnoza Ergasheva",
      parentRole: "Ona",
      motherName: "Shahnoza Ergasheva",
      sinf: "1-A",
      gradeLevel: "1-sinf",
      phone: "+998 97 222 33 44",
      paymentStatus: "Qarzdor",
      paymentStatusCode: "debt",
      attendance: "88%",
      birthDate: "20.10.2019",
      homeroomTeacher: "Nodira Saidova",
      docs: {
        birthCertificate: true,
        medicalReport: false,
        contract: true
      },
      monthlyFee: 3000000,
      paidAmount: 0,
      debtAmount: 3000000
    },
    {
      id: "std-11",
      initials: "FR",
      name: "Fotima Rasulova",
      parentName: "Iroda Rasulova",
      parentRole: "Ona",
      motherName: "Iroda Rasulova",
      sinf: "1-B",
      gradeLevel: "1-sinf",
      phone: "+998 90 333 44 55",
      paymentStatus: "To'langan",
      paymentStatusCode: "paid",
      attendance: "98%",
      birthDate: "11.07.2019",
      homeroomTeacher: "Feruza Karimova",
      docs: {
        birthCertificate: true,
        medicalReport: true,
        contract: true
      },
      monthlyFee: 3000000,
      paidAmount: 3000000,
      debtAmount: 0
    },
    {
      id: "std-12",
      initials: "JA",
      name: "Jasur Alimov",
      parentName: "Bobur Alimov",
      parentRole: "Ota",
      motherName: "Barno Alimova",
      sinf: "1-B",
      gradeLevel: "1-sinf",
      phone: "+998 91 444 55 66",
      paymentStatus: "Qarzdor",
      paymentStatusCode: "debt",
      attendance: "85%",
      birthDate: "25.02.2019",
      homeroomTeacher: "Feruza Karimova",
      docs: {
        birthCertificate: true,
        medicalReport: true,
        contract: true
      },
      monthlyFee: 3000000,
      paidAmount: 0,
      debtAmount: 3000000
    },
    {
      id: "std-13",
      initials: "SI",
      name: "Shavkat Ismoilov",
      parentName: "Otabek Ismoilov",
      parentRole: "Ota",
      motherName: "Gulbahor Ismoilova",
      sinf: "2-A",
      gradeLevel: "2-sinf",
      phone: "+998 94 555 66 77",
      paymentStatus: "Qisman",
      paymentStatusCode: "partial",
      attendance: "91%",
      birthDate: "14.05.2018",
      homeroomTeacher: "Zilola Rahimova",
      docs: {
        birthCertificate: true,
        medicalReport: true,
        contract: true
      },
      monthlyFee: 3000000,
      paidAmount: 2000000,
      debtAmount: 1000000
    },
    {
      id: "std-14",
      initials: "MY",
      name: "Mohira Yoqubova",
      parentName: "Dilfuza Yoqubova",
      parentRole: "Ona",
      motherName: "Dilfuza Yoqubova",
      sinf: "2-A",
      gradeLevel: "2-sinf",
      phone: "+998 95 666 77 88",
      paymentStatus: "Qarzdor",
      paymentStatusCode: "debt",
      attendance: "82%",
      birthDate: "30.08.2018",
      homeroomTeacher: "Zilola Rahimova",
      docs: {
        birthCertificate: true,
        medicalReport: false,
        contract: true
      },
      monthlyFee: 3000000,
      paidAmount: 0,
      debtAmount: 3000000
    },
    {
      id: "std-15",
      initials: "KS",
      name: "Kamron Shukurov",
      parentName: "Jamshid Shukurov",
      parentRole: "Ota",
      motherName: "Nodira Shukurova",
      sinf: "3-A",
      gradeLevel: "3-sinf",
      phone: "+998 90 777 88 99",
      paymentStatus: "Qisman",
      paymentStatusCode: "partial",
      attendance: "93%",
      birthDate: "19.03.2017",
      homeroomTeacher: "Madina Aliyeva",
      docs: {
        birthCertificate: true,
        medicalReport: true,
        contract: true
      },
      monthlyFee: 3000000,
      paidAmount: 1500000,
      debtAmount: 1500000
    },
    {
      id: "std-16",
      initials: "ZS",
      name: "Zilola Sharipova",
      parentName: "Ulug'bek Sharipov",
      parentRole: "Ota",
      motherName: "Gulchehra Sharipova",
      sinf: "4-B",
      gradeLevel: "4-sinf",
      phone: "+998 93 888 99 00",
      paymentStatus: "To'langan",
      paymentStatusCode: "paid",
      attendance: "97%",
      birthDate: "12.09.2016",
      homeroomTeacher: "Gulnora Tursunova",
      docs: {
        birthCertificate: true,
        medicalReport: true,
        contract: true
      },
      monthlyFee: 3000000,
      paidAmount: 3000000,
      debtAmount: 0
    },
    {
      id: "std-17",
      initials: "BM",
      name: "Bobur Mirzayev",
      parentName: "Botir Mirzayev",
      parentRole: "Ota",
      motherName: "Zuhra Mirzayeva",
      sinf: "5-A",
      gradeLevel: "5-sinf",
      phone: "+998 97 999 00 11",
      paymentStatus: "Qarzdor",
      paymentStatusCode: "debt",
      attendance: "80%",
      birthDate: "05.12.2015",
      homeroomTeacher: "Sherzod Jalilov",
      docs: {
        birthCertificate: true,
        medicalReport: true,
        contract: true
      },
      monthlyFee: 3500000,
      paidAmount: 0,
      debtAmount: 3500000
    }
  ],

  // Classes (Sinflar)
  classes: [
    {
      id: "cls-1a",
      name: "1-A",
      room: "12-xona",
      teacherName: "Nodira Saidova",
      teacherInitials: "NS",
      currentStudents: 18,
      capacity: 20,
      attendanceStatus: "Belgilangan", // Belgilangan, Belgilanmagan
      todayPresent: 17,
      todayTotal: 18
    },
    {
      id: "cls-1b",
      name: "1-B",
      room: "14-xona",
      teacherName: "Feruza Karimova",
      teacherInitials: "FK",
      currentStudents: 16,
      capacity: 20,
      attendanceStatus: "Belgilangan",
      todayPresent: 15,
      todayTotal: 16
    },
    {
      id: "cls-2a",
      name: "2-A",
      room: "21-xona",
      teacherName: "Zilola Rahimova",
      teacherInitials: "ZR",
      currentStudents: 19,
      capacity: 22,
      attendanceStatus: "Belgilanmagan",
      todayPresent: 0,
      todayTotal: 19
    },
    {
      id: "cls-3a",
      name: "3-A",
      room: "23-xona",
      teacherName: "Madina Aliyeva",
      teacherInitials: "MA",
      currentStudents: 22,
      capacity: 22,
      attendanceStatus: "Belgilangan",
      todayPresent: 19,
      todayTotal: 22
    },
    {
      id: "cls-4b",
      name: "4-B",
      room: "31-xona",
      teacherName: "Gulnora Tursunova",
      teacherInitials: "GT",
      currentStudents: 17,
      capacity: 22,
      attendanceStatus: "Belgilanmagan",
      todayPresent: 0,
      todayTotal: 17
    },
    {
      id: "cls-5a",
      name: "5-A",
      room: "33-xona",
      teacherName: "Sherzod Jalilov",
      teacherInitials: "SJ",
      currentStudents: 20,
      capacity: 24,
      attendanceStatus: "Belgilangan",
      todayPresent: 18,
      todayTotal: 20
    }
  ],

  // Teachers (O'qituvchilar)
  teachers: [
    {
      id: "tch-1",
      initials: "NS",
      name: "Nodira Saidova",
      subject: "Boshlang'ich sinf",
      classes: "1-A",
      weeklyHours: 24,
      phone: "+998 90 111 22 33"
    },
    {
      id: "tch-2",
      initials: "SJ",
      name: "Sherzod Jalilov",
      subject: "Matematika",
      classes: "5-A, 6-A, 7-B",
      weeklyHours: 20,
      phone: "+998 91 222 33 44"
    },
    {
      id: "tch-3",
      initials: "AX",
      name: "Aziza Xolmatova",
      subject: "Ingliz tili",
      classes: "1-A dan 5-A gacha",
      weeklyHours: 22,
      phone: "+998 93 333 44 55"
    },
    {
      id: "tch-4",
      initials: "BM",
      name: "Botir Mirzayev",
      subject: "Informatika",
      classes: "4-B, 5-A, 6-A",
      weeklyHours: 14,
      phone: "+998 94 444 55 66"
    },
    {
      id: "tch-5",
      initials: "LQ",
      name: "Laylo Qodirova",
      subject: "Ona tili va adabiyot",
      classes: "5-A, 6-A",
      weeklyHours: 18,
      phone: "+998 97 555 66 77"
    }
  ],

  // Payments summary
  paymentsSummary: {
    monthlyRevenue: 48600000,
    expectedRevenue: 18900000,
    debtorFamilies: 6
  },

  // Recent payment history
  paymentTransactions: [
    {
      id: "tx-1",
      studentName: "Aziza Karimova",
      sinf: "3-A",
      amount: 3000000,
      method: "Payme",
      date: "14.10.2026",
      status: "Tasdiqlangan"
    },
    {
      id: "tx-2",
      studentName: "Madina Rahimova",
      sinf: "5-A",
      amount: 3500000,
      method: "Click",
      date: "12.10.2026",
      status: "Tasdiqlangan"
    },
    {
      id: "tx-3",
      studentName: "Behruz Aliyev",
      sinf: "4-B",
      amount: 2000000,
      method: "Naqd",
      date: "10.10.2026",
      status: "Tasdiqlangan"
    },
    {
      id: "tx-4",
      studentName: "Omina Qodirova",
      sinf: "2-A",
      amount: 3000000,
      method: "Bank o'tkazmasi",
      date: "09.10.2026",
      status: "Tasdiqlangan"
    }
  ],

  // Repetitorlik kurslari va to'garaklar
  tutorCourses: [
    {
      id: "course-1",
      name: "Mental arifmetika",
      instructor: "Aziza Karimova",
      time: "16:00 - 17:30",
      days: "Dush, Chor, Juma",
      fee: 500000,
      studentIds: ["std-1", "std-2", "std-3", "std-5", "std-7", "std-9", "std-11", "std-13", "std-14", "std-15", "std-16", "std-17"]
    },
    {
      id: "course-2",
      name: "Robototexnika",
      instructor: "Botir Mirzayev",
      time: "15:00 - 16:30",
      days: "Sesh, Pay, Shan",
      fee: 600000,
      studentIds: ["std-2", "std-4", "std-6", "std-8", "std-10", "std-12", "std-14", "std-16"]
    },
    {
      id: "course-3",
      name: "Ingliz tili club",
      instructor: "Aziza Xolmatova",
      time: "17:00 - 18:30",
      days: "Dush, Chor, Juma",
      fee: 550000,
      studentIds: ["std-1", "std-3", "std-5", "std-7", "std-8", "std-9", "std-10"]
    }
  ]
};

// LocalStorage helpers to allow mutations
const STORAGE_KEY = "maktab_crm_data_v2";

export function loadData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && Array.isArray(parsed.students)) {
        const avatars = [
          './avatars/student1.jpg',
          './avatars/student2.jpg',
          './avatars/student3.jpg',
          './avatars/student4.jpg',
        ];
        parsed.students.forEach((s, idx) => {
          if (!s.photo) {
            s.photo = avatars[idx % avatars.length];
          }
        });
      }
      if (!parsed.tutorCourses || !Array.isArray(parsed.tutorCourses) || parsed.tutorCourses.length === 0) {
        parsed.tutorCourses = initialData.tutorCourses;
      }
      return parsed;
    }
  } catch (e) {
    console.error("Failed to load local storage data", e);
  }
  return initialData;
}

export function saveData(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.error("Failed to save to local storage", e);
  }
}

export function resetData() {
  localStorage.removeItem(STORAGE_KEY);
  return initialData;
}
