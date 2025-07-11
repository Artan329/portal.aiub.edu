import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface GradeReportProps {
  onNavigate: (page: string) => void;
  onLogout: () => void;
}

function GradeReport({ onNavigate, onLogout }: GradeReportProps) {
  const [selectedCourse, setSelectedCourse] = useState('intro-db');
  const [selectedSemester, setSelectedSemester] = useState('2024-2025-fall');

  const courses = {
    'intro-db': {
      name: 'BANGLADESH STUDIES [ST] [B]',
      code: 'BANGLADESH STUDIES [ST] [B]',
      courseInfo: {
        term: '2024-2025, Fall',
        courseRef: 'Course Reference: TASDM014_24SB (L1A1) [2024-2025-2]'
      },
      totalGrade: 'B+ (79.4/41)',
      midterm: {
        total: 'B+ (80)',
        breakdown: [
          { name: 'Attendances', score: '9.00', details: '(Total:10; Pass:5; Contributes:10%)' },
          { name: 'Performance', score: '8.00', details: '(Total:10; Pass:5; Contributes:10%)' },
          { name: 'Assignments', score: '16.00', details: '(Total:20; Pass:10; Contributes:20%)' },
          { name: 'Quizzes', score: '15.00', details: '(Total:20; Pass:10; Contributes:20%)' },
          { name: 'Written Exams', score: '32.00', details: '(Total:40; Pass:20; Contributes:40%)' },
        ]
      },
      finalterm: {
        total: 'B (79)',
        breakdown: [
          { name: 'Attendances', score: '8.00', details: '(Total:10; Pass:5; Contributes:10%)' },
          { name: 'Class Tests', score: '8.00', details: '(Total:10; Pass:5; Contributes:10%)' },
          { name: 'Presentations', score: '9.00', details: '(Total:10; Pass:5; Contributes:10%)' },
          { name: 'Quizzes', score: '17.00', details: '(Total:20; Pass:10; Contributes:20%)' },
          { name: 'Case Studies', score: '7.00', details: '(Total:10; Pass:5; Contributes:10%)' },
          { name: 'Written Exams', score: '30.00', details: '(Total:40; Pass:20; Contributes:40%)' },
        ]
      }
    },
    'calculus': {
      name: 'Integral Calculus',
      code: 'MATH201',
      courseInfo: {
        term: '2024-2025, Fall',
        courseRef: 'Course Reference: MATH201_24SB (L1A1) [2024-2025-2]'
      },
      totalGrade: 'A- (85.5/41)',
      midterm: {
        total: 'A- (85)',
        breakdown: [
          { name: 'Attendances', score: '9.50', details: '(Total:10; Pass:5; Contributes:10%)' },
          { name: 'Performance', score: '8.50', details: '(Total:10; Pass:5; Contributes:10%)' },
          { name: 'Assignments', score: '17.00', details: '(Total:20; Pass:10; Contributes:20%)' },
          { name: 'Quizzes', score: '16.00', details: '(Total:20; Pass:10; Contributes:20%)' },
          { name: 'Written Exams', score: '34.00', details: '(Total:40; Pass:20; Contributes:40%)' },
        ]
      },
      finalterm: {
        total: 'A (88)',
        breakdown: [
          { name: 'Attendances', score: '9.00', details: '(Total:10; Pass:5; Contributes:10%)' },
          { name: 'Class Tests', score: '9.00', details: '(Total:10; Pass:5; Contributes:10%)' },
          { name: 'Presentations', score: '8.00', details: '(Total:10; Pass:5; Contributes:10%)' },
          { name: 'Quizzes', score: '18.00', details: '(Total:20; Pass:10; Contributes:20%)' },
          { name: 'Case Studies', score: '8.00', details: '(Total:10; Pass:5; Contributes:10%)' },
          { name: 'Written Exams', score: '36.00', details: '(Total:40; Pass:20; Contributes:40%)' },
        ]
      }
    },
    'electronics': {
      name: 'Electronic Devices',
      code: 'EEE201',
      courseInfo: {
        term: '2024-2025, Fall',
        courseRef: 'Course Reference: EEE201_24SB (L1A1) [2024-2025-2]'
      },
      totalGrade: 'B+ (83/41)',
      midterm: {
        total: 'B (82)',
        breakdown: [
          { name: 'Attendances', score: '8.50', details: '(Total:10; Pass:5; Contributes:10%)' },
          { name: 'Performance', score: '8.50', details: '(Total:10; Pass:5; Contributes:10%)' },
          { name: 'Assignments', score: '16.00', details: '(Total:20; Pass:10; Contributes:20%)' },
          { name: 'Quizzes', score: '16.00', details: '(Total:20; Pass:10; Contributes:20%)' },
          { name: 'Written Exams', score: '33.00', details: '(Total:40; Pass:20; Contributes:40%)' },
        ]
      },
      finalterm: {
        total: 'B+ (84)',
        breakdown: [
          { name: 'Attendances', score: '8.00', details: '(Total:10; Pass:5; Contributes:10%)' },
          { name: 'Class Tests', score: '8.50', details: '(Total:10; Pass:5; Contributes:10%)' },
          { name: 'Presentations', score: '9.50', details: '(Total:10; Pass:5; Contributes:10%)' },
          { name: 'Quizzes', score: '17.00', details: '(Total:20; Pass:10; Contributes:20%)' },
          { name: 'Case Studies', score: '8.00', details: '(Total:10; Pass:5; Contributes:10%)' },
          { name: 'Written Exams', score: '33.00', details: '(Total:40; Pass:20; Contributes:40%)' },
        ]
      }
    }
  };

  return (
    <>
      {/* Top Header */}
      <header className="bg-white border-b border-[#DDDDDD]">
        <div className="max-w-full mx-auto px-4">
          <div className="flex justify-between items-center h-14">
            <div className="flex items-center gap-2">
              <img 
                src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/American_International_University-Bangladesh_Monogram.svg/1200px-American_International_University-Bangladesh_Monogram.svg.png" 
                alt="AIUB Logo"
                className="h-10 w-10"
              />
              <button 
                onClick={() => onNavigate('home')}
                className="flex items-center gap-2"
              >
                <span className="text-[#004AAD] font-bold text-2xl">AIUB</span>
                <span className="text-[#004AAD] font-bold text-2xl">PORTAL</span>
              </button>
            </div>
            <nav className="flex items-center space-x-8">
              <a href="#" className="text-[#004AAD] hover:text-[#003399] text-sm flex items-center gap-2">
                <span className="text-lg">☰</span>
                <span>Courses & Results</span>
              </a>
              <a href="#" className="text-[#004AAD] hover:text-[#003399] text-sm flex items-center gap-2">
                <span className="text-lg">⚡</span>
                <span>Registration</span>
              </a>
              <a href="#" className="text-[#004AAD] hover:text-[#003399] text-sm flex items-center gap-2">
                <span className="text-lg">☀️</span>
                <span>Grade Report</span>
              </a>
            </nav>
            <div className="flex items-center gap-4">
              <span className="text-sm text-[#666666]">Welcome TUHIN, TANJILA AKTER</span>
              <div className="flex items-center gap-2">
                <span className="bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">2</span>
                <button className="text-[#666666] hover:text-[#333333] text-xl">⚙️</button>
                <button 
                  onClick={onLogout}
                  className="text-[#004AAD] hover:text-[#003399] text-2xl"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-48 min-h-screen">
          <nav>
            <div className="bg-[#004AAD] text-white">
              <button className="w-full text-left px-4 py-2 hover:bg-[#003399] flex items-center">
                <span className="mr-2">📚</span>
                <span>Academics</span>
              </button>
            </div>
            <div className="bg-[#004AAD] text-white">
              <button className="w-full text-left px-4 py-2 hover:bg-[#003399] flex items-center">
                <span className="mr-2">📊</span>
                <span>Grade Reports</span>
              </button>
            </div>
            <div className="bg-[#004AAD] text-white">
              <button className="w-full text-left px-4 py-2 hover:bg-[#003399] flex items-center">
                <span className="mr-2">📖</span>
                <span>Library</span>
              </button>
            </div>
            <div className="bg-[#004AAD] text-white">
              <button className="w-full text-left px-4 py-2 hover:bg-[#003399] flex items-center">
                <span className="mr-2">⚙️</span>
                <span>Others</span>
              </button>
            </div>
            <div className="bg-[#004AAD] text-white">
              <button className="w-full text-left px-4 py-2 hover:bg-[#003399] flex items-center">
                <span className="mr-2">✉️</span>
                <span>Messages</span>
              </button>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 bg-[#F5F5F5]">
          <div className="bg-white rounded shadow-sm">
            <div className="bg-[#004AAD] text-white p-2 rounded-t">
              <h2 className="font-medium text-sm">Grades Marks Quizes</h2>
            </div>
            
            {/* Course and Semester Selection */}
            <div className="p-4 grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Course:</label>
                <div className="relative">
                  <select
                    value={selectedCourse}
                    onChange={(e) => setSelectedCourse(e.target.value)}
                    className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                  >
                    <option value="intro-db">BANGLADESH STUDIES [ST] [B]</option>
                    <option value="calculus">Integral Calculus</option>
                    <option value="electronics">Electronic Devices</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Semester:</label>
                <div className="relative">
                  <select
                    value={selectedSemester}
                    onChange={(e) => setSelectedSemester(e.target.value)}
                    className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                  >
                    <option value="2024-2025-fall">2024-2025, Fall</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Course Results */}
            <div className="p-4">
              {/* Course Header */}
              <div className="bg-[#3B82F6] text-white p-4 rounded mb-4">
                <h3 className="font-medium">{courses[selectedCourse].name}</h3>
                <p className="text-sm mt-1">{courses[selectedCourse].courseInfo.courseRef}</p>
                <p className="text-lg font-semibold mt-2">{courses[selectedCourse].totalGrade}</p>
              </div>

              {/* Midterm Results */}
              <div className="mb-4">
                <div className="bg-[#DBEAFE] p-4 rounded">
                  <h4 className="font-medium mb-2">Midterm for {courses[selectedCourse].courseInfo.term} <span className="text-sm text-gray-600">(Total:100; Pass:50; Contributes:40%)</span></h4>
                  <div className="space-y-2">
                    {courses[selectedCourse].midterm.breakdown.map((item, index) => (
                      <div key={index} className="flex justify-between items-center text-sm">
                        <div>
                          <span className="font-medium">{item.name}</span>
                          <span className="text-gray-600 ml-2">{item.details}</span>
                        </div>
                        <span className="font-semibold">{item.score}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Final Results */}
              <div>
                <div className="bg-[#DBEAFE] p-4 rounded">
                  <h4 className="font-medium mb-2">Finalterm for {courses[selectedCourse].courseInfo.term} <span className="text-sm text-gray-600">(Total:100; Pass:50; Contributes:60%)</span></h4>
                  <div className="space-y-2">
                    {courses[selectedCourse].finalterm.breakdown.map((item, index) => (
                      <div key={index} className="flex justify-between items-center text-sm">
                        <div>
                          <span className="font-medium">{item.name}</span>
                          <span className="text-gray-600 ml-2">{item.details}</span>
                        </div>
                        <span className="font-semibold">{item.score}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default GradeReport;