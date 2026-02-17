import React, { useState, useEffect } from 'react';
import { Book, Code, Coffee, Gamepad2, Briefcase, Sun, Moon } from 'lucide-react';

const App = () => {
  const [activeDay, setActiveDay] = useState('Senin');
  const [darkMode, setDarkMode] = useState(false);

  // Logika untuk switch tema
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Kuliah': return 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800';
      case 'Freelance': return 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800';
      case 'Belajar': return 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800';
      case 'Istirahat': return 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-800';
      case 'Nugas': return 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800';
      default: return 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700';
    }
  };

  const getIcon = (category) => {
    switch (category) {
      case 'Kuliah': return <Book size={18} />;
      case 'Freelance': return <Briefcase size={18} />;
      case 'Belajar': return <Code size={18} />;
      case 'Istirahat': return <Gamepad2 size={18} />;
      case 'Nugas': return <Coffee size={18} />;
      default: return <Sun size={18} />;
    }
  };

  const scheduleData = {
    'Senin': [
        { time: '07:30 - 09:30', activity: 'Belajar Bahasa Jepang', category: 'Belajar', desc: 'Hafalan Kanji/Vocab pagi hari biar fresh.' },
        { time: '10:40 - 12:20', activity: 'Struktur Data & Algoritma (Teori)', category: 'Kuliah', desc: 'Ruang D105. Fokus konsep dasar.' },
        { time: '13:00 - 16:40', activity: 'Struktur Data & Algoritma (Praktik)', category: 'Kuliah', desc: 'Lab RPL. Coding time!' },
        { time: '17:00 - 19:00', activity: 'Istirahat & Makan Malam', category: 'Istirahat', desc: 'Recharge energi setelah praktikum.' },
        { time: '19:00 - 21:00', activity: 'Freelance Project', category: 'Freelance', desc: 'Fokus ngerjain fitur website klien.' },
        { time: '21:00 - ...', activity: 'Waktu Rebahan', category: 'Istirahat', desc: 'Scroll TikTok/Tidur.' }
      ],
      'Selasa': [
        { time: '08:40 - 10:40', activity: 'Aljabar Linear (Teori)', category: 'Kuliah', desc: 'Ruang D111. Jangan ngantuk!' },
        { time: '11:00 - 12:30', activity: 'Dicoding (Web Dev)', category: 'Belajar', desc: 'Cicil modul kursus mumpung ada jeda.' },
        { time: '13:00 - 16:40', activity: 'Proyek 2: Pengembangan App', category: 'Kuliah', desc: 'Lab PjBL-2. Progress report & coding.' },
        { time: '17:00 - 19:00', activity: 'Nugas Ringan', category: 'Nugas', desc: 'Review materi hari ini.' },
        { time: '19:00 - 20:00', activity: 'Belajar Bahasa Jepang', category: 'Belajar', desc: 'Latihan grammar.' },
        { time: '20:00 - ...', activity: 'Free Time / Game', category: 'Istirahat', desc: 'Reward setelah hari yang panjang.' }
      ],
      'Rabu': [
        { time: '07:00 - 08:40', activity: 'Komunikasi Data & Jaringan', category: 'Kuliah', desc: 'Pagi buta! Ruang D105.' },
        { time: '08:40 - 10:40', activity: 'Komputasi Kognitif', category: 'Kuliah', desc: 'Lanjut langsung. Fokus!' },
        { time: '10:40 - 11:30', activity: 'Bahasa Inggris 2 (Teori)', category: 'Kuliah', desc: 'Break sebentar ganti mapel.' },
        { time: '11:30 - 13:50', activity: 'Bahasa Inggris 2 (Praktik)', category: 'Kuliah', desc: 'Akhir dari maraton kuliah.' },
        { time: '14:00 - 17:00', activity: 'TIDUR / REBAHAN TOTAL', category: 'Istirahat', desc: 'Wajib istirahat. Otak sudah ngebul.' },
        { time: '19:00 - 21:00', activity: 'Nugas / Review Materi', category: 'Nugas', desc: 'Cicil tugas biar ga numpuk.' }
      ],
      'Kamis': [
        { time: '08:00 - 10:00', activity: 'Freelance (Deep Work)', category: 'Freelance', desc: 'Mumpung pagi kosong, gas coding projek.' },
        { time: '10:40 - 12:20', activity: 'Pend. Kewarganegaraan', category: 'Kuliah', desc: 'Ruang D112. Santai dikit.' },
        { time: '13:00 - 15:30', activity: 'Matematika Diskrit 1', category: 'Kuliah', desc: 'D223. Logika jalan.' },
        { time: '16:00 - 17:30', activity: 'Dicoding (Web Dev)', category: 'Belajar', desc: 'Lanjut submission.' },
        { time: '19:00 - 20:30', activity: 'Belajar Bahasa Jepang', category: 'Belajar', desc: 'Listening practice.' },
        { time: '21:00 - ...', activity: 'Rebahan Santuy', category: 'Istirahat', desc: 'Persiapan buat Jumat santai.' }
      ],
      'Jumat': [
        { time: '09:00 - 11:30', activity: 'Freelance / Dicoding', category: 'Freelance', desc: 'Golden Time! Waktu kosong terpanjang.' },
        { time: '13:00 - 15:00', activity: 'Nugas / Ibadah', category: 'Nugas', desc: 'Selesaikan sisa tugas mingguan.' },
        { time: '16:40 - 18:20', activity: 'Komdat & Jar (Praktik)', category: 'Kuliah', desc: 'Lab SDB. Kuliah penutup minggu.' },
        { time: '19:00 - ...', activity: 'WELCOME WEEKEND', category: 'Istirahat', desc: 'Netflix / Nongkrong / Game.' }
      ],
      'Sabtu': [
        { time: '10:00 - 14:00', activity: 'Freelance Sprint', category: 'Freelance', desc: 'Fokus utama pengerjaan proyek cuan.' },
        { time: '15:00 - 17:00', activity: 'Dicoding / Portfolio', category: 'Belajar', desc: 'Eksplorasi teknologi web baru.' },
        { time: 'Malam', activity: 'Rebahan / Social Life', category: 'Istirahat', desc: 'Enjoy your life.' }
      ],
      'Minggu': [
        { time: 'Pagi', activity: 'Olahraga / Santai', category: 'Istirahat', desc: 'Jaga badan tetep fit.' },
        { time: 'Siang', activity: 'Review Materi Seminggu', category: 'Belajar', desc: 'Cek sekilas apa yang dipelajari.' },
        { time: 'Sore', activity: 'Prepare Kuliah Senin', category: 'Nugas', desc: 'Cek jadwal & tas.' }
      ]
  };

  const days = Object.keys(scheduleData);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 font-sans text-gray-800 dark:text-gray-100 p-4 md:p-8 transition-colors duration-300">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 rounded-3xl shadow-xl overflow-hidden border border-transparent dark:border-gray-800">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-900 dark:to-purple-900 p-8 text-white relative">
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="absolute top-6 right-6 p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-all"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <h1 className="text-3xl font-bold mb-2">Jadwal Kuliah & Life Balance</h1>
          <p className="opacity-90">Semester Genap 2025/2026 • Kelas 1B-D3</p>
        </div>

        {/* Day Navigation */}
        <div className="flex overflow-x-auto p-2 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 scrollbar-hide">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`flex-shrink-0 px-6 py-3 mx-1 rounded-xl text-sm font-semibold transition-all duration-200 ${
                activeDay === day
                  ? 'bg-white dark:bg-gray-700 text-indigo-600 dark:text-indigo-400 shadow-md ring-1 ring-indigo-100 dark:ring-gray-600'
                  : 'text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Schedule Content */}
        <div className="p-6 md:p-8 min-h-[400px]">
          <h2 className="text-xl font-bold mb-6 flex items-center text-gray-800 dark:text-gray-200">
            Agenda {activeDay}
          </h2>

          <div className="space-y-4">
            {scheduleData[activeDay].map((item, index) => (
              <div 
                key={index} 
                className={`group flex items-start p-4 rounded-2xl border transition-all duration-300 hover:shadow-lg ${getCategoryColor(item.category)} bg-opacity-40 border-opacity-50`}
              >
                <div className="w-24 flex-shrink-0 font-mono text-sm font-bold pt-1 opacity-75">
                  {item.time.split('-')[0]}
                  <span className="block text-xs font-normal opacity-60 mt-1">
                    s/d {item.time.split('-')[1] || 'Selesai'}
                  </span>
                </div>

                <div className="flex-grow pl-4 border-l border-current border-opacity-20">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-lg leading-tight">{item.activity}</h3>
                    <div className="p-1.5 rounded-lg bg-white dark:bg-black/20 bg-opacity-50 shadow-sm ml-2">
                      {getIcon(item.category)}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-white dark:bg-black/20 bg-opacity-60 uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>
                  
                  <p className="text-sm mt-2 opacity-90 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;