<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Richie Olajuwon Santoso</title>
    <link rel="icon" href="assets\fotoku.jpg" type="image/png">
    <link rel="stylesheet" href="../../css/app.css">
    @vite(['resources/css/app.css', 'resources/js/app.js'])
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/flowbite@1.5.2/dist/flowbite.min.js"></script>
    <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/flowbite@1.5.0/dist/flowbite.min.js"></script>
</head>

<body class="bg-gray-900 text-white font-poppins ">
    <nav class="sticky top-0 bg-gray-800 shadow-lg z-50">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="#home" class="flex items-center space-x-3 rtl:space-x-reverse">
                <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">Richie Olajuwon Santoso</span>
            </a>
            <button 
                data-collapse-toggle="navbar-default" 
                class="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600" 
                aria-controls="navbar-default" 
                aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
            <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 dark:border-gray-700">
                    <li>
                        <a href="#home" class="animate-slideIn block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home</a>
                    </li>
                    <li>
                        <a href="#aboutme" class="animate-slideIn block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About Me</a>
                    </li>
                    <li>
                        <a href="#skills" class="animate-slideIn block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Skills</a>
                    </li>
                    <li>
                        <a href="#projects" class="animate-slideIn block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Projects</a>
                    </li>
                    <li>
                        <a href="#awards" class="animate-slideIn block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Awards</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <section id="home" class="min-h-screen flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-16 px-5">
        <div class="text-center md:text-left animate-slideUp">
            <p class="text-lg ml-1 text-primary font-medium">Hi, I'm</p>
            <h1 class="text-4xl md:text-5xl font-bold"><span class="text-blue-500 text-primary">Richie </span>Olajuwon Santoso</h1>
            <h1 class="text-2xl mt-2 ml-1 typewrite">
                <span class="wrap"></span><span class="cursor">|</span>
            </h1>            
        </div>
        <div class="animate-fadeIn">
            <img src="assets\fotoku.jpg" class="w-64 h-64 rounded-full border-4 border-primary object-cover z-50">
        </div>
    </section>
    
    <section id="aboutme" class="py-20 bg-gray-900">
        <div class="text-center mb-10 animate-fadeIn">
            <h2 class="text-4xl font-bold text-white">About Me</h2>
            <p class="text-primary">Get to know me!</p>
        </div>
        <div class="container mx-auto px-5 md:px-10 max-w-screen-xl">
            <div class="bg-gray-800 rounded-lg shadow-lg p-12 animate-slideUp flex flex-col md:flex-row items-center">
                <div class="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
                    <img src="assets/foto_formalku.jpg" alt="Profile Picture" 
                         class="w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
                </div>
                <div class="text-center md:text-left">
                    <p class="text-lg text-white">
                        Hello! I'm Richie, an enthusiastic Information System student with a passion for technology and design. 
                        I enjoy creating user-friendly interfaces, exploring front-end development, and diving into the world of UI/UX. 
                        In my spare time, I love participating in competitions and expanding my knowledge in business and data science. 
                        Let's connect and create something amazing together!
                    </p>                    
                </div>
            </div>
        </div>
    </section>
    
    <section id="skills" class="py-20 bg-gray-900">
        <div class="text-center mb-10 animate-fadeIn">
            <h2 class="text-4xl font-bold text-white">Skills</h2>
            <p class="text-primary">Explore my skills, they might surprise you!</p>
        </div>
        <div class="text-center mb-10">
            <button id="techBtn" type="button" class="h-12 w-24 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" onclick="showTech()">Tech</button>
            <button id="toolsBtn" type="button" class="h-12 w-24 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" onclick="showTools()">Tools</button>
        </div>
           
        <div class="container mx-auto px-5 md:px-10 max-w-screen-xl">
            <div id="techContent" class="grid grid-cols-2 md:grid-cols-3 gap-6 animate-slideUp">
                <div class="bg-gray-800 rounded-lg p-5 text-center hover:scale-105 transition-transform duration-300">
                    <img src="https://cdn.simpleicons.org/html5/E34F26" alt="HTML" class="w-12 h-12 mx-auto mb-3">
                    <h3 class="font-medium text-white">HTML</h3>
                    <p class="text-gray-400">Expert</p>
                </div>
                <div class="bg-gray-800 rounded-lg p-5 text-center hover:scale-105 transition-transform duration-300">
                    <img src="https://cdn.simpleicons.org/css3/1572B6" alt="CSS" class="w-12 h-12 mx-auto mb-3">
                    <h3 class="font-medium text-white">CSS</h3>
                    <p class="text-gray-400">Intermediate</p>
                </div>
                <div class="bg-gray-800 rounded-lg p-5 text-center hover:scale-105 transition-transform duration-300">
                    <img src="https://cdn.simpleicons.org/javascript/F7DF1E" alt="JavaScript" class="w-12 h-12 mx-auto mb-3">
                    <h3 class="font-medium text-white">JavaScript</h3>
                    <p class="text-gray-400">Beginner</p>
                </div>
                <div class="bg-gray-800 rounded-lg p-5 text-center hover:scale-105 transition-transform duration-300">
                    <img src="https://cdn.simpleicons.org/python/3776AB" alt="Python" class="w-12 h-12 mx-auto mb-3">
                    <h3 class="font-medium text-white">Python</h3>
                    <p class="text-gray-400">Intermediate</p>
                </div>
                <div class="bg-gray-800 rounded-lg p-5 text-center hover:scale-105 transition-transform duration-300">
                    <img src="https://cdn.simpleicons.org/jupyter/F37626" alt="Jupyter" class="w-12 h-12 mx-auto mb-3">
                    <h3 class="font-medium text-white">Jupyter</h3>
                    <p class="text-gray-400">Intermediate</p>
                </div>
                <div class="bg-gray-800 rounded-lg p-5 text-center hover:scale-105 transition-transform duration-300">
                    <img src="https://cdn.simpleicons.org/tailwindcss/06B6D4" alt="Tailwind CSS" class="w-12 h-12 mx-auto mb-3">
                    <h3 class="font-medium text-white">Tailwind CSS</h3>
                    <p class="text-gray-400">Beginner</p>
                </div>
                <div class="bg-gray-800 rounded-lg p-5 text-center hover:scale-105 transition-transform duration-300">
                    <img src="https://cdn-icons-png.flaticon.com/512/6132/6132221.png" alt="C#" class="w-12 h-12 mx-auto mb-3">
                    <h3 class="font-medium text-white">C#</h3>
                    <p class="text-gray-400">Beginner</p>
                </div>
                <div class="bg-gray-800 rounded-lg p-5 text-center hover:scale-105 transition-transform duration-300">
                    <img src="https://cdn.simpleicons.org/laravel/FF2D20" alt="Laravel" class="w-12 h-12 mx-auto mb-3">
                    <h3 class="font-medium text-white">Laravel</h3>
                    <p class="text-gray-400">Beginner</p>
                </div>
                <div class="bg-gray-800 rounded-lg p-5 text-center hover:scale-105 transition-transform duration-300">
                    <img src="https://cdn.simpleicons.org/react/61DAFB" alt="Laravel" class="w-12 h-12 mx-auto mb-3">
                    <h3 class="font-medium text-white">React JS</h3>
                    <p class="text-gray-400">Beginner</p>
                </div>
            </div>
            <div id="toolsContent" class="grid grid-cols-2 md:grid-cols-3 gap-6 animate-slideUp hidden">
                <div class="bg-gray-800 rounded-lg p-5 text-center hover:scale-105 transition-transform duration-300">
                    <img src="https://cdn.simpleicons.org/figma/F24E1E" alt="Figma" class="w-12 h-12 mx-auto mb-3">
                    <h3 class="font-medium text-white">Figma</h3>
                    <p class="text-gray-400">Design Tool</p>
                </div>
                <div class="bg-gray-800 rounded-lg p-5 text-center hover:scale-105 transition-transform duration-300">
                    <img src="https://cdn.simpleicons.org/canva/00C4CC" alt="Canva" class="w-12 h-12 mx-auto mb-3">
                    <h3 class="font-medium text-white">Canva</h3>
                    <p class="text-gray-400">Design Tool</p>
                </div>
                <div class="bg-gray-800 rounded-lg p-5 text-center hover:scale-105 transition-transform duration-300">
                    <img src="https://cdn.simpleicons.org/nodedotjs/339933" alt="Node.js" class="w-12 h-12 mx-auto mb-3">
                    <h3 class="font-medium text-white">Node.js</h3>
                    <p class="text-gray-400">Runtime</p>
                </div>
                <div class="bg-gray-800 rounded-lg p-5 text-center hover:scale-105 transition-transform duration-300">
                    <img src="https://cdn.simpleicons.org/git/F05032" alt="Git" class="w-12 h-12 mx-auto mb-3">
                    <h3 class="font-medium text-white">Git</h3>
                    <p class="text-gray-400">Version Control</p>
                </div>
                <div class="bg-gray-800 rounded-lg p-5 text-center hover:scale-105 transition-transform duration-300">
                    <img src="https://cdn.simpleicons.org/trello/0079BF" alt="Trello" class="w-12 h-12 mx-auto mb-3">
                    <h3 class="font-medium text-white">Trello</h3>
                    <p class="text-gray-400">Project Management Tool</p>
                </div>
                <div class="bg-gray-800 rounded-lg p-5 text-center hover:scale-105 transition-transform duration-300">
                    <img src="https://cdn.simpleicons.org/notion/000000" alt="Notion" class="w-12 h-12 mx-auto mb-3">
                    <h3 class="font-medium text-white">Notion</h3>
                    <p class="text-gray-400">All-in-One Workspace</p>
                </div>
            </div>
        </div>
    </section>        
      
                
    <section id="project" class="py-20">
        <div class="text-center mb-10">
            <h2 class="text-4xl font-bold text-white">Projects</h2>
            <p class="text-primary">Explore my projects, they might surprise you!</p>
        </div>
        <div class="container mx-auto md:px-10 max-w-screen-xl slider relative h-[500px] overflow-hidden flex justify-center items-center">
            <div class="item absolute w-[400px] h-[445px] text-justify bg-gray-800 rounded-lg shadow-md transition-all left-[calc(50%-195px)] top-0">
                <div class="bg-gray-800 h-[450px] rounded-lg shadow-2xl">
                    <a href="#">
                        <img class="rounded-t-lg w-full object-cover" src="assets\BlindSonic.png" alt="Blind Sonic" />
                    </a>
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-xl font-bold text-gray-900 dark:text-white text-left">Blind Sonic</h5>
                        </a>
                        <p class="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400 text-left">Blind Sonic adalah aplikasi game interaktif untuk penyandang tunanetra yang memanfaatkan teknologi audio. Pengguna dapat menjelajahi dunia virtual melalui suara dan kontrol sederhana menggunakan earphone, keyboard braille, dan gamepad joystick, meningkatkan keterampilan kognitif dan motorik.</p>

                    </div>
                </div>
            </div>
            <div class="item absolute w-[400px] h-[445px] text-justify bg-gray-800 rounded-lg shadow-md transition-all left-[calc(50%-195px)] top-0">
                <div class="bg-gray-800 h-[450px] rounded-lg shadow-2xl">
                    <a href="#">
                        <img class="rounded-t-lg w-full object-cover" src="assets/TembakauKu.png" alt="TembakauKu" />
                    </a>
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-xl font-bold text-gray-900 dark:text-white text-left">TembakauKu</h5>
                        </a>
                        <p class="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400 text-left">TembakauKu adalah aplikasi yang dirancang untuk membantu petani tembakau, terutama di daerah terpencil, dalam mengakses informasi tentang pupuk, benih, pasar, dan teknologi yang bertujuan memberdayakan petani dengan menyediakan akses mudah ke sumber daya yang dibutuhkan.</p>

                    </div>
                </div>
            </div>
            <div class="container mx-auto md:px-10 max-w-screen-xl slider relative h-[500px] overflow-hidden flex justify-center items-center">
                <div class="item absolute w-[400px] h-[445px] text-justify bg-gray-800 rounded-lg shadow-md transition-all left-[calc(50%-195px)] top-0">
                    <div class="bg-gray-800 h-[450px] rounded-lg shadow-2xl">
                        <a href="#">
                            <img class="rounded-t-lg w-full object-cover" src="assets\JournoTechSpot.png" alt="JournoTechSpot" />
                        </a>
                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 text-xl font-bold text-gray-900 dark:text-white text-left">JournoTechSpot</h5>
                            </a>
                            <p class="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400 text-left">JournoTechSpot adalah sebuah platform inovatif yang menggabungkan kecerdasan buatan (AI) dengan jurnalisme untuk menciptakan ekosistem berita yang lebih cerdas, efisien, dan interaktif. Platform ini dapat mempercepat pengumpulan informasi dan meningkatkan akurasi.</p>
                        </div>
                    </div>
                </div>
            <div class="item absolute w-[400px] h-[445px] text-justify bg-gray-800 rounded-lg shadow-md transition-all left-[calc(50%-195px)] top-0">
                <div class="bg-gray-800 h-[450px] rounded-lg shadow-2xl">
                    <a href="#">
                        <img class="rounded-t-lg w-full object-cover" src="assets/Prelovedia.png" alt="Prelovedia" />
                    </a>
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-xl font-bold text-gray-900 dark:text-white text-left">Prelovedia</h5>
                        </a>
                        <p class="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400 text-left">Prelovedia adalah platform online berbasis website yang didedikasikan untuk jual beli barang bekas berkualitas. Pengguna dapat dengan mudah dan aman menjual serta membeli berbagai jenis barang preloved (pre-owned atau second-hand) melalui platform ini.</p>

                    </div>
                </div>
            </div>
            <div class="item absolute w-[400px] h-[445px] text-justify bg-gray-800 rounded-lg shadow-md transition-all left-[calc(50%-195px)] top-0">
                <div class="bg-gray-800 h-[450px] rounded-lg shadow-2xl">
                    <a href="#">
                        <img class="rounded-t-lg w-full object-cover" src="assets/TourHomie.png" alt="Tour Homie" />
                    </a>
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-xl font-bold text-gray-900 dark:text-white text-left">Tour Homie</h5>
                        </a>
                        <p class="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400 text-left">TourHomie adalah aplikasi yang membantu wisatawan asing menemukan destinasi wisata sesuai preferensi mereka, menyediakan informasi tentang tempat wisata, kuliner, budaya lokal, serta akomodasi. Aplikasi ini juga memfasilitasi pemesanan tiket dan akomodasi. </p>

                    </div>
                </div>
            </div>
            <button id="next" class="absolute top-[40%] text-white bg-transparent border-none text-4xl font-bold right-[50px]">></button>
            <button id="prev" class="absolute top-[40%] text-white bg-transparent border-none text-4xl font-bold left-[50px]"><</button>
        </div>
    </section>    
    



    <!-- Awards Section -->
    <section id="awards" class="py-20 bg-gray-900">
        <div class="text-center mb-10 animate-fadeIn">
            <h2 class="text-4xl font-bold">Award</h2>
            <p class="text-primary">My achievements!</p>
        </div>
        <div class="container mx-auto px-5 md:px-10 max-w-screen-xl mt-5 animate-slideUp">
            <div class="bg-gray-800 rounded-lg p-8 hover:scale-105">
                <h3 class="text-2xl font-semibold">2nd Place Winner of UI/UX Design Competition at Informatics Championship X-Project 2024</h3>
                <p class="text-gray-400">Awarded at the annual event organized by Himpunan Mahasiswa Teknik Informatika, Sistem Informasi, dan Pendidikan Teknologi Informasi Universitas Negeri Surabaya.</p>
            </div>
        </div>
        <div class="container mx-auto px-5 md:px-10 max-w-screen-xl mt-5 animate-slideUp">
            <div class="bg-gray-800 rounded-lg p-8 hover:scale-105">
                <h3 class="text-2xl font-semibold">1st Place Winner of UX Today at IT Today Competition 2024</h3>
                <p class="text-gray-400">Awarded at the annual event organized by Himpunan Mahasiswa Ilmu Komputer Institut Pertanian Bogor.</p>
            </div>
        </div>
        <div class="container mx-auto px-5 md:px-10 max-w-screen-xl mt-5 animate-slideUp">
            <div class="bg-gray-800 rounded-lg p-8 hover:scale-105">
                <h3 class="text-2xl font-semibold">Best Innovation in UX Today at IT Today Competition 2024</h3>
                <p class="text-gray-400">Awarded at the annual event organized by Himpunan Mahasiswa Ilmu Komputer Institut Pertanian Bogor.</p>
            </div>
        </div>
        <div class="container mx-auto px-5 md:px-10 max-w-screen-xl mt-5 animate-slideUp">
            <div class="bg-gray-800 rounded-lg p-8 hover:scale-105">
                <h3 class="text-2xl font-semibold">Rising Star Of The Year 2023</h3>
                <p class="text-gray-400">Awarded at the annual event organized by the Faculty of Computer Science, Universitas Jember.</p>
            </div>
        </div>
        <div class="container mx-auto px-5 md:px-10 max-w-screen-xl mt-5 animate-slideUp">
            <div class="bg-gray-800 rounded-lg p-8 hover:scale-105">
                <h3 class="text-2xl font-semibold">1st Outstanding Student in School Level Science Program</h3>
                <p class="text-gray-400">Awarded during the graduation ceremony at SMA Negeri 1 Kencong.</p>
            </div>
        </div>
    </section>

    <footer class="py-10 bg-gray-800 text-center animate-fadeIn">
        <div class="space-x-5">
            <a href="https://www.linkedin.com/in/richie-olajuwon-santoso" target="_blank" class="text-white hover:text-primary">
                <svg class="inline w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd"/>
                    <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
                </svg>
                  
            </a>
            <a href="https://github.com/ChieJuwonsFx" target="_blank" class="text-white hover:text-primary">
                <svg class="inline w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"/>
                  </svg>
            </a>
            <a href="https://www.instagram.com/rchieee__/" target="_blank" class="text-white hover:text-primary">
                <svg class="inline w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path fill="currentColor" fill-rule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clip-rule="evenodd"/>
                </svg>
                  
            </a>
            <a href="mailto:richieolajuwons@gmail.com" class="text-white hover:text-primary">
                <svg class="inline w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"/>
                  </svg>                  
            </a>
        </div>
    </footer>
    
    
    
    <script>
        // GSAP Animations
        gsap.from(".animate-fadeIn", { opacity: 0, duration: 1 });
        gsap.from(".animate-slideUp", { y: 50, opacity: 0, duration: 1, stagger: 0.2 });
        gsap.from(".animate-slideIn", { x: -50, opacity: 0, duration: 1, stagger: 0.2 });

        // Typewriter Effect
        const toRotate = [
            "Information System Student", 
            "UI/UX Designer", 
            "Front-End Developer", 
            "Social Media Designer", 
            "Business Enthusiast"
        ];
        const period = 2000;
        let loopNum = 0;
        let txt = "";
        let isDeleting = false;
        const typewriter = document.querySelector(".typewrite .wrap");

        function tick() {
            const fullTxt = toRotate[loopNum % toRotate.length];
            txt = isDeleting ? fullTxt.substring(0, txt.length - 1) : fullTxt.substring(0, txt.length + 1);

            typewriter.innerHTML = `<span class="wrap">${txt}</span><span class="cursor"></span>`;

            let delta = 200 - Math.random() * 100;
            if (isDeleting) { delta /= 2; }

            if (!isDeleting && txt === fullTxt) {
                delta = period;
                isDeleting = true;
            } else if (isDeleting && txt === "") {
                isDeleting = false;
                loopNum++;
                delta = 500;
            }

            setTimeout(() => tick(), delta);
        }

        document.addEventListener("DOMContentLoaded", () => tick());

        const toggleButton = document.querySelector('[data-collapse-toggle]');
        const navbar = document.getElementById('navbar-default');
    
        toggleButton.addEventListener('click', () => {
            navbar.classList.toggle('hidden');
        });

        function showTech() {
            document.getElementById("techContent").classList.remove("hidden");
            document.getElementById("toolsContent").classList.add("hidden");
            document.getElementById("techBtn").classList.add("bg-opacity-80");
            document.getElementById("toolsBtn").classList.remove("bg-opacity-80");
        }
        function showTools() {
            document.getElementById("toolsContent").classList.remove("hidden");
            document.getElementById("techContent").classList.add("hidden");
            document.getElementById("toolsBtn").classList.add("bg-opacity-80");
            document.getElementById("techBtn").classList.remove("bg-opacity-80");
        }
        document.addEventListener('DOMContentLoaded', function () {
        const carousel = new Flowbite.Carousel(document.querySelector('#carousel'));
        });
        document.addEventListener('DOMContentLoaded', function () {
            const items = document.querySelectorAll('.slider .item');
            const next = document.getElementById('next');
            const prev = document.getElementById('prev');
            
            let active = 0;  // Start at the first item
    
            function loadShow() {
                let stt = 0;
                items[active].style.transform = `none`;
                items[active].style.zIndex = 1;
                items[active].style.filter = 'none';
                items[active].style.opacity = 1;
    
                for (let i = active + 1; i < items.length; i++) {
                    stt++;
                    items[i].style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
                    items[i].style.zIndex = -stt;
                    items[i].style.filter = 'blur(5px)';
                    items[i].style.opacity = stt > 2 ? 0 : 0.6;
                }
    
                stt = 0;
                for (let i = active - 1; i >= 0; i--) {
                    stt++;
                    items[i].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
                    items[i].style.zIndex = -stt;
                    items[i].style.filter = 'blur(5px)';
                    items[i].style.opacity = stt > 2 ? 0 : 0.6;
                }
            }
    
            loadShow();
    
            next.onclick = function () {
                active = active + 1 < items.length ? active + 1 : 0;  // Loop back to first if at the last
                loadShow();
            };
    
            prev.onclick = function () {
                active = active - 1 >= 0 ? active - 1 : items.length - 1;  // Loop back to last if at the first
                loadShow();
            };
        });
    </script>
</body>
</html>
