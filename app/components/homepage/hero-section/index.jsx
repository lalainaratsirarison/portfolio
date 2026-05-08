// @flow strict
"use client"

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { FiMaximize2, FiX, FiCopy, FiCheck } from "react-icons/fi";

function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isModalOpen]);

  const handleCopy = () => {
    const codeText = `const developer = {
  name: 'Lalaina Ratsirarison',
  title: 'Full-Stack Web & Desktop Developer',
  education: 'Bachelor\\'s Degree in Computer Science - ADVANCEA',
  skills: ['React', 'NextJS', 'NodeJS', 'Expressjs', 'FastAPI', 'CodeIgniter 4', 'Socket.io', 'MySQL', 'PostgreSQL', 'MongoDB', 'Docker', 'NGINX', 'REST API', 'HLS Streaming'],
  currentlyLearning: ['AI & ML', 'Meta Messenger API', 'Scalable Architecture'],
  projects: ['Digitalizeo', 'Streaming Platform', 'Real-Time Chat Application', 'Fleet management system'],
  passions: ['Software Engineering', 'System Architecture', 'Reverse Engineering', 'AI & ML', 'Teaching Programming'],
  hardWorker: true,
  quickLearner: true,
  problemSolver: true,
  teamPlayer: true,
  adaptable: true,
  hireable: function () {
    return (
      this.hardWorker &&
      this.problemSolver &&
      this.skills.includes('Qt5') &&
      this.skills.includes('C++') &&
      this.skills.length >= 10
    );
  }
};`;
    navigator.clipboard.writeText(codeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // The full code content as JSX (reused in both hero preview and modal)
  const fullCodeJSX = (
    <>
      <div className="blink">
        <span className="mr-2 text-sky-400">const</span>
        <span className="mr-2 text-white">developer</span>
        <span className="mr-2 text-sky-400">=</span>
        <span className="text-gray-400">{'{'}</span>
      </div>
      <div>
        <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
        <span className="text-gray-400">{`'`}</span>
        <span className="text-amber-300">Lalaina Ratsirarison</span>
        <span className="text-gray-400">{`',`}</span>
      </div>
      <div>
        <span className="ml-4 lg:ml-8 mr-2 text-white">title:</span>
        <span className="text-gray-400">{`'`}</span>
        <span className="text-amber-300">Full-Stack Web & Desktop Developer</span>
        <span className="text-gray-400">{`',`}</span>
      </div>
      <div>
        <span className="ml-4 lg:ml-8 mr-2 text-white">education:</span>
        <span className="text-gray-400">{`'`}</span>
        <span className="text-amber-300">{"Bachelor's Degree in Computer Science - ADVANCEA"}</span>
        <span className="text-gray-400">{`',`}</span>
      </div>
      <div className="ml-4 lg:ml-8 mr-2">
        <span className=" text-white">skills:</span>
        <span className="text-gray-400">{`['`}</span>
        <span className="text-amber-300">React</span>
        <span className="text-gray-400">{"', '"}</span>
        <span className="text-amber-300">NextJS</span>
        <span className="text-gray-400">{"', '"}</span>
        <span className="text-amber-300">NodeJS</span>
        <span className="text-gray-400">{"', '"}</span>
        <span className="text-amber-300">Expressjs</span>
        <span className="text-gray-400">{"', '"}</span>
        <span className="text-amber-300">FastAPI</span>
        <span className="text-gray-400">{"', '"}</span>
        <span className="text-amber-300">CodeIgniter 4</span>
        <span className="text-gray-400">{"', '"}</span>
        <span className="text-amber-300">Socket.io</span>
        <span className="text-gray-400">{"', '"}</span>
        <span className="text-amber-300">MySQL</span>
        <span className="text-gray-400">{"', '"}</span>
        <span className="text-amber-300">PostgreSQL</span>
        <span className="text-gray-400">{"', '"}</span>
        <span className="text-amber-300">MongoDB</span>
        <span className="text-gray-400">{"', '"}</span>
        <span className="text-amber-300">Docker</span>
        <span className="text-gray-400">{"', '"}</span>
        <span className="text-amber-300">NGINX</span>
        <span className="text-gray-400">{"', '"}</span>
        <span className="text-amber-300">REST API</span>
        <span className="text-gray-400">{"', '"}</span>
        <span className="text-amber-300">HLS Streaming</span>
        <span className="text-gray-400">{"'],"}</span>
      </div>
      <div className="ml-4 lg:ml-8 mr-2">
        <span className=" text-white">currentlyLearning:</span>
        <span className="text-gray-400">{`['`}</span>
        <span className="text-amber-300">AI & ML</span>
        <span className="text-gray-400">{"', '"}</span>
        <span className="text-amber-300">Meta Messenger API</span>
        <span className="text-gray-400">{"', '"}</span>
        <span className="text-amber-300">Scalable Architecture</span>
        <span className="text-gray-400">{"'],"}</span>
      </div>
      <div className="ml-4 lg:ml-8 mr-2">
        <span className=" text-white">projects:</span>
        <span className="text-gray-400">{`['`}</span>
        <span className="text-amber-300">Digitalizeo</span>
        <span className="text-gray-400">{"', '"}</span>
        <span className="text-amber-300">Streaming Platform</span>
        <span className="text-gray-400">{"', '"}</span>
        <span className="text-amber-300">Real-Time Chat Application</span>
        <span className="text-gray-400">{"', '"}</span>
        <span className="text-amber-300">Fleet management system</span>
        <span className="text-gray-400">{"'],"}</span>
      </div>
      <div className="ml-4 lg:ml-8 mr-2">
        <span className=" text-white">passions:</span>
        <span className="text-gray-400">{`['`}</span>
        <span className="text-amber-300">Software Engineering</span>
        <span className="text-gray-400">{"', '"}</span>
        <span className="text-amber-300">System Architecture</span>
        <span className="text-gray-400">{"', '"}</span>
        <span className="text-amber-300">Reverse Engineering</span>
        <span className="text-gray-400">{"', '"}</span>
        <span className="text-amber-300">AI & ML</span>
        <span className="text-gray-400">{"', '"}</span>
        <span className="text-amber-300">Teaching Programming</span>
        <span className="text-gray-400">{"'],"}</span>
      </div>
      <div>
        <span className="ml-4 lg:ml-8 mr-2 text-white">hardWorker:</span>
        <span className="text-orange-400">true</span>
        <span className="text-gray-400">,</span>
      </div>
      <div>
        <span className="ml-4 lg:ml-8 mr-2 text-white">quickLearner:</span>
        <span className="text-orange-400">true</span>
        <span className="text-gray-400">,</span>
      </div>
      <div>
        <span className="ml-4 lg:ml-8 mr-2 text-white">problemSolver:</span>
        <span className="text-orange-400">true</span>
        <span className="text-gray-400">,</span>
      </div>
      <div>
        <span className="ml-4 lg:ml-8 mr-2 text-white">teamPlayer:</span>
        <span className="text-orange-400">true</span>
        <span className="text-gray-400">,</span>
      </div>
      <div>
        <span className="ml-4 lg:ml-8 mr-2 text-white">adaptable:</span>
        <span className="text-orange-400">true</span>
        <span className="text-gray-400">,</span>
      </div>
      <div>
        <span className="ml-4 lg:ml-8 mr-2 text-green-400">hireable:</span>
        <span className="text-orange-400">function</span>
        <span className="text-gray-400">{'() {'}</span>
      </div>
      <div>
        <span className="ml-8 lg:ml-16 mr-2 text-orange-400">return</span>
        <span className="text-gray-400">{`(`}</span>
      </div>
      <div>
        <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
        <span className="mr-2 text-white">hardWorker</span>
        <span className="text-amber-300">&amp;&amp;</span>
      </div>
      <div>
        <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
        <span className="mr-2 text-white">problemSolver</span>
        <span className="text-amber-300">&amp;&amp;</span>
      </div>
      <div>
        <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
        <span className="mr-2 text-white">skills.includes</span>
        <span className="text-gray-400">(</span>
        <span className="text-amber-300">{`'Qt5'`}</span>
        <span className="text-gray-400">)</span>
        <span className="ml-2 text-amber-300">&amp;&amp;</span>
      </div>
      <div>
        <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
        <span className="mr-2 text-white">skills.includes</span>
        <span className="text-gray-400">(</span>
        <span className="text-amber-300">{`'C++'`}</span>
        <span className="text-gray-400">)</span>
        <span className="ml-2 text-amber-300">&amp;&amp;</span>
      </div>
      <div>
        <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
        <span className="mr-2 text-white">skills.length</span>
        <span className="mr-2 text-amber-300">&gt;=</span>
        <span className="text-orange-400">10</span>
      </div>
      <div><span className="ml-8 lg:ml-16 mr-2 text-gray-400">{`);`}</span></div>
      <div><span className="ml-4 lg:ml-8 text-gray-400">{`};`}</span></div>
      <div><span className="text-gray-400">{`};`}</span></div>
    </>
  );

  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
      />

      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            Hello, <br />
            This is {' '}
            <span className=" text-sky-400">{personalData.name}</span>
            {` , I'm a Professional `}
            <span className=" text-[#38bdf8]">{personalData.designation}</span>
            .
          </h1>

          <div className="my-12 flex items-center gap-5">
            <Link
              href={personalData.github}
              target='_blank'
              className="transition-all text-sky-400 hover:scale-125 duration-300"
            >
              <BsGithub size={30} />
            </Link>
            <Link
              href={personalData.linkedIn}
              target='_blank'
              className="transition-all text-sky-400 hover:scale-125 duration-300"
            >
              <BsLinkedin size={30} />
            </Link>
            <Link
              href={personalData.facebook}
              target='_blank'
              className="transition-all text-sky-400 hover:scale-125 duration-300"
            >
              <FaFacebook size={30} />
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link href="#contact" className="bg-gradient-to-r to-blue-600 from-sky-400 p-[1px] rounded-full transition-all duration-300 hover:from-blue-600 hover:to-sky-400">
              <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#1e293b] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3">
                <span>Contact me</span>
                <RiContactsFill size={16} />
              </button>
            </Link>

            <Link className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-blue-600 to-sky-400 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold" role="button" target="_blank" href={personalData.resume}
            >
              <span>Get Resume</span>
              <MdDownload size={16} />
            </Link>
          </div>

        </div>
        <div className="order-1 lg:order-2 from-[#1e293b] border-[#3b82f633] relative rounded-lg border bg-gradient-to-r to-[#0f172a]">
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-blue-600 to-sky-400"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-sky-400 to-transparent"></div>
          </div>
          <div className="px-4 lg:px-8 py-3 flex items-center justify-between">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-orange-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-200"></div>
            </div>
            <span className="text-xs text-gray-500 font-mono">developer.js</span>
          </div>
          <div className="overflow-hidden border-t-[2px] border-[#1e293b] px-4 lg:px-8 py-4 lg:py-8">
            {/* Shortened preview */}
            <code className="font-mono text-xs md:text-sm lg:text-base">
              <div className="blink">
                <span className="mr-2 text-sky-400">const</span>
                <span className="mr-2 text-white">developer</span>
                <span className="mr-2 text-sky-400">=</span>
                <span className="text-gray-400">{'{'}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                <span className="text-gray-400">{`'`}</span>
                <span className="text-amber-300">Lalaina Ratsirarison</span>
                <span className="text-gray-400">{`',`}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">title:</span>
                <span className="text-gray-400">{`'`}</span>
                <span className="text-amber-300">Full-Stack Web & Desktop Developer</span>
                <span className="text-gray-400">{`',`}</span>
              </div>
              <div className="ml-4 lg:ml-8 mr-2">
                <span className=" text-white">skills:</span>
                <span className="text-gray-400">{`['`}</span>
                <span className="text-amber-300">React</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">NextJS</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">NodeJS</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-gray-500">{"..."}</span>
                <span className="text-gray-400">{"'],"}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">hardWorker:</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">problemSolver:</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-green-400">hireable:</span>
                <span className="text-orange-400">function</span>
                <span className="text-gray-400">{'() { '}</span>
                <span className="text-gray-500">...</span>
                <span className="text-gray-400">{' }'}</span>
              </div>
              <div><span className="text-gray-400">{`};`}</span></div>
            </code>

            {/* Expand button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-4 w-full flex items-center justify-center gap-2 py-2 rounded-md border border-[#1e293b] bg-[#0f172a]/60 text-sky-400 text-xs font-mono hover:border-sky-400/50 hover:bg-sky-400/5 transition-all duration-300 group"
            >
              <FiMaximize2 size={12} className="group-hover:scale-110 transition-transform" />
              <span>View full developer object</span>
            </button>
          </div>
        </div>
      </div>

      {/* Floating Editor Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8"
          onClick={() => setIsModalOpen(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          {/* Modal */}
          <div
            className="relative w-full max-w-3xl max-h-[85vh] rounded-xl border border-[#3b82f633] bg-gradient-to-br from-[#0f172a] to-[#1e293b] shadow-2xl shadow-blue-500/10 animate-in"
            onClick={(e) => e.stopPropagation()}
            style={{
              animation: 'modalSlideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            {/* Modal Title Bar */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-[#1e293b]">
              <div className="flex items-center gap-3">
                <div className="flex flex-row space-x-2">
                  <div
                    className="h-3 w-3 rounded-full bg-red-400 cursor-pointer hover:brightness-125 transition-all"
                    onClick={() => setIsModalOpen(false)}
                  ></div>
                  <div className="h-3 w-3 rounded-full bg-orange-400"></div>
                  <div className="h-3 w-3 rounded-full bg-green-200"></div>
                </div>
                <span className="text-sm text-gray-400 font-mono">developer.js</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono text-gray-400 hover:text-sky-400 hover:bg-sky-400/10 border border-transparent hover:border-sky-400/20 transition-all duration-200"
                >
                  {copied ? (
                    <>
                      <FiCheck size={13} className="text-green-400" />
                      <span className="text-green-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <FiCopy size={13} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-1.5 rounded-md text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200"
                >
                  <FiX size={16} />
                </button>
              </div>
            </div>

            {/* Modal gradient line */}
            <div className="flex flex-row">
              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-blue-600 to-sky-400"></div>
              <div className="h-[1px] w-full bg-gradient-to-r from-sky-400 to-transparent"></div>
            </div>

            {/* Modal Code Content */}
            <div className="overflow-y-auto max-h-[calc(85vh-80px)] px-5 lg:px-8 py-6 lg:py-8 custom-scrollbar">
              <code className="font-mono text-xs md:text-sm lg:text-base leading-relaxed">
                {fullCodeJSX}
              </code>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #1e293b;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #38bdf8;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;