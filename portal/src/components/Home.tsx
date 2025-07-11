import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
  onLogout: () => void;
}

function Home({ onNavigate, onLogout }: HomeProps) {
  const [selectedSemester, setSelectedSemester] = useState('2024-2025, Fall');
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  const toggleMenu = (menu: string) => {
    setExpandedMenu(expandedMenu === menu ? null : menu);
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
              <span className="text-[#004AAD] font-bold text-2xl">AIUB</span>
              <span className="text-[#004AAD] font-bold text-2xl">PORTAL</span>
            </div>
            <nav className="flex items-center space-x-8">
              <button 
                onClick={() => onNavigate('grades')}
                className="text-[#004AAD] hover:text-[#003399] text-sm flex items-center gap-2"
              >
                <span className="text-lg">☰</span>
                <span>Courses & Results</span>
              </button>
              <a href="#" className="text-[#004AAD] hover:text-[#003399] text-sm flex items-center gap-2">
                <span className="text-lg">⚡</span>
                <span>Registration</span>
              </a>
              <button 
                onClick={() => onNavigate('grades')}
                className="text-[#004AAD] hover:text-[#003399] text-sm flex items-center gap-2"
              >
                <span className="text-lg">☀️</span>
                <span>Grade Report</span>
              </button>
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
        <aside className="w-48 min-h-screen">
          <nav>
            <div className="bg-[#004AAD] text-white">
              <button 
                onClick={() => toggleMenu('academics')}
                className="w-full text-left px-4 py-2 hover:bg-[#003399] flex items-center justify-between"
              >
                <div className="flex items-center">
                  <span className="mr-2">📚</span>
                  <span>Academics</span>
                </div>
                <ChevronDown className="h-4 w-4" />
              </button>
              {expandedMenu === 'academics' && (
                <div className="bg-[#002366] py-1">
                  <a href="#" className="block px-8 py-1 text-white text-sm hover:bg-[#001A4D]">Course Registration</a>
                  <a href="#" className="block px-8 py-1 text-white text-sm hover:bg-[#001A4D]">View Result</a>
                </div>
              )}
            </div>
            <div className="bg-[#004AAD] text-white">
              <button 
                onClick={() => toggleMenu('gradeReports')}
                className="w-full text-left px-4 py-2 hover:bg-[#003399] flex items-center justify-between"
              >
                <div className="flex items-center">
                  <span className="mr-2">📊</span>
                  <span>Grade Reports</span>
                </div>
                <ChevronDown className="h-4 w-4" />
              </button>
              {expandedMenu === 'gradeReports' && (
                <div className="bg-[#002366] py-1">
                  <a href="#" className="block px-8 py-1 text-white text-sm hover:bg-[#001A4D]">View Grades</a>
                  <a href="#" className="block px-8 py-1 text-white text-sm hover:bg-[#001A4D]">Grade History</a>
                </div>
              )}
            </div>
            <div className="bg-[#004AAD] text-white">
              <button 
                onClick={() => toggleMenu('library')}
                className="w-full text-left px-4 py-2 hover:bg-[#003399] flex items-center justify-between"
              >
                <div className="flex items-center">
                  <span className="mr-2">📖</span>
                  <span>Library</span>
                </div>
                <ChevronDown className="h-4 w-4" />
              </button>
              {expandedMenu === 'library' && (
                <div className="bg-[#002366] py-1">
                  <a href="#" className="block px-8 py-1 text-white text-sm hover:bg-[#001A4D]">Search Books</a>
                  <a href="#" className="block px-8 py-1 text-white text-sm hover:bg-[#001A4D]">My Books</a>
                </div>
              )}
            </div>
            <div className="bg-[#004AAD] text-white">
              <button 
                onClick={() => toggleMenu('others')}
                className="w-full text-left px-4 py-2 hover:bg-[#003399] flex items-center justify-between"
              >
                <div className="flex items-center">
                  <span className="mr-2">⚙️</span>
                  <span>Others</span>
                </div>
                <ChevronDown className="h-4 w-4" />
              </button>
              {expandedMenu === 'others' && (
                <div className="bg-[#002366] py-1">
                  <a href="#" className="block px-8 py-1 text-white text-sm hover:bg-[#001A4D]">Settings</a>
                  <a href="#" className="block px-8 py-1 text-white text-sm hover:bg-[#001A4D]">Help</a>
                </div>
              )}
            </div>
            <div className="bg-[#004AAD] text-white">
              <button 
                onClick={() => toggleMenu('messages')}
                className="w-full text-left px-4 py-2 hover:bg-[#003399] flex items-center justify-between"
              >
                <div className="flex items-center">
                  <span className="mr-2">✉️</span>
                  <span>Messages</span>
                </div>
                <ChevronDown className="h-4 w-4" />
              </button>
              {expandedMenu === 'messages' && (
                <div className="bg-[#002366] py-1">
                  <a href="#" className="block px-8 py-1 text-white text-sm hover:bg-[#001A4D]">Inbox</a>
                  <a href="#" className="block px-8 py-1 text-white text-sm hover:bg-[#001A4D]">Sent</a>
                </div>
              )}
            </div>
          </nav>
        </aside>

        <main className="flex-1 p-4 bg-[#F5F5F5]">
          {/* Microsoft Teams Info */}
          <div className="bg-[#DFF0D8] border border-[#D6E9C6] p-3 mb-4 rounded">
            <p className="text-[#3C763D] mb-2">Please use this below information to log in to Microsoft Teams.</p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="mb-1 text-sm">
                  <span className="font-semibold">User Name:</span> 23-54221-3@student.aiub.edu
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Password:</span> Nov@2023
                </p>
              </div>
              <div className="flex items-start justify-between">
                <p className="text-sm">How to log in to Microsoft Teams with one time password.</p>
                <button className="bg-[#428BCA] text-white px-3 py-1 rounded text-xs">Download</button>
              </div>
            </div>
          </div>

          {/* General Information */}
          <div className="mb-4">
            <p className="text-sm mb-3">
              Please provide your general information correctly through{' '}
              <a href="#" className="text-[#428BCA] hover:underline">General Information Change Application</a>.
            </p>
            <div className="flex gap-3">
              <button className="bg-[#5BC0DE] text-white px-3 py-1 rounded text-xs">
                Submit Identity Information
              </button>
              <button className="bg-[#5BC0DE] text-white px-3 py-1 rounded text-xs">
                COVID-19 Vaccine Information
              </button>
            </div>
          </div>

          {/* Class Schedule */}
          <div className="bg-white rounded shadow-sm mb-4">
            <div className="bg-[#004AAD] text-white p-2 rounded-t">
              <h2 className="font-medium text-sm">Class Schedule</h2>
            </div>
            <div className="p-3">
              <table className="w-full text-sm">
                <tbody>
                  {['Today', 'Tomorrow', '13-Feb-2025', '14-Feb-2025', '15-Feb-2025', '16-Feb-2025', '17-Feb-2025', '18-Feb-2025'].map((date) => (
                    <tr key={date} className="border-b border-[#EEEEEE]">
                      <td className="py-1.5 text-[#666666]">{date}</td>
                      <td className="py-1.5 text-[#666666]">No Class On This Day</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Registration */}
          <div className="bg-white rounded shadow-sm">
            <div className="bg-[#004AAD] text-white p-2 rounded-t flex justify-between items-center">
              <h2 className="font-medium text-sm">Registration</h2>
              <select 
                value={selectedSemester}
                onChange={(e) => setSelectedSemester(e.target.value)}
                className="bg-white text-[#333333] px-2 py-0.5 rounded text-xs border-0"
              >
                <option value="2024-2025, Fall">2024-2025, Fall</option>
              </select>
            </div>
            <div className="p-3 grid grid-cols-3 gap-3">
              {[
                {
                  code: '00290',
                  name: 'INTEGRAL CALCULUS & ORD. DIFF EQUATION [G]',
                  section: 'L1A1',
                  status: 'Pre-Advising',
                  result: '-'
                },
                {
                  code: '00292',
                  name: 'INTRODUCTION TO DATABASE [M]',
                  section: 'L1A1',
                  status: 'Pre-Advising',
                  result: 'C+ (59.00)'
                },
                {
                  code: '00370',
                  name: 'ELECTRONIC DEVICES [EEE]',
                  section: 'L1A1',
                  status: 'Pre-Advising',
                  result: 'UW'
                }
              ].map((course, index) => (
                <div key={index} className="border border-[#DDDDDD] rounded p-3">
                  <p className="text-xs font-medium mb-2">{course.code} - {course.name}</p>
                  <p className="text-xs mb-1">Section Status: {course.section}</p>
                  <p className="text-xs mb-1">Status: {course.status}</p>
                  <p className="text-xs mb-2">Result: {course.result}</p>
                  <div className="flex gap-2">
                    <button className="bg-[#428BCA] text-white px-2 py-0.5 rounded text-xs">PSF</button>
                    <button className="bg-[#428BCA] text-white px-2 py-0.5 rounded text-xs">Notes</button>
                    <button className="bg-[#428BCA] text-white px-2 py-0.5 rounded text-xs">Notice</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Home;