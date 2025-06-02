        document.addEventListener('DOMContentLoaded', function () {
            menuToggle.addEventListener('click', function () {
                this.classList.toggle('active');
                navMenu.classList.toggle('active');
            });
            const modal = document.querySelector('.modal-overlay');
            const closeModal = document.querySelector('.close-modal');
            const modalTitle = document.querySelector('.modal-title');
            const modalDescription = document.querySelector('.modal-description');
            const modalGallery = document.querySelector('.modal-gallery');
            const techTags = document.querySelector('.tech-tags');
            const liveLink = document.querySelector('.modal-live-link');
            const codeLink = document.querySelector('.modal-code-link');

            function showProjectDetails(projectId) {
                const project = projectsData[projectId];

                if (!project) return;

                // تعيين عنوان المشروع
                modalTitle.textContent = project.title;

                // تعيين وصف المشروع
                modalDescription.textContent = project.description;

                // إضافة صور المشروع
                modalGallery.innerHTML = '';
                project.images.forEach(image => {
                    const img = document.createElement('img');
                    img.src = image;
                    img.alt = project.title;
                    modalGallery.appendChild(img);
                });

                // إضافة التقنيات المستخدمة
                techTags.innerHTML = '';
                project.technologies.forEach(tech => {
                    const techTag = document.createElement('span');
                    techTag.className = 'tech-tag';
                    techTag.innerHTML = `<i class="${tech.icon}"></i> ${tech.name}`;
                    techTags.appendChild(techTag);
                });

                // تعيين الروابط
                liveLink.href = project.liveLink;
                codeLink.href = project.codeLink;

                // عرض النافذة المنبثقة
                modal.classList.add('active');
                document.body.style.overflow = 'hidden'; // منع التمرير للصفحة الرئيسية
            }
            // البيانات التفصيلية للمشاريع
            const projectsData = {
                "1": {
                    title: "مركز الشفاء لتعليم القران",
                    description:
                        " مركز الشفاء لتحفيظ القرآن الكريم يهتم بتعليم القرآن وتلاوته للأطفال والشباب، ويقدم برامج متميزة في التحفيظ، الأنشطة القرآنية، والدورات الشرعية. نعرض إحصائيات الإنجاز، وآراء أولياء الأمور، وأحدث الفعاليات، ضمن بيئة إيمانية تربوية  ",
                    images: [
                        "images/screenshot-1746996024746.webp",
                        "images/screen3.webp",
                        "images/screen1.webp"
                    ],
                    technologies: [
                        { name: "PHP", icon: "fab fa-php" },
                        { name: "SQL", icon: "fas fa-sql" },
                        { name: "JS", icon: "fab fa-js" },
                        { name: "CSS3", icon: "fab fa-css3-alt" },
                        { name: "HTML5", icon: "fab fa-html5" }
                    ],
                    liveLink: "#",
                    codeLink: "#"
                },

                "2": {
                    title: "تظام رصد الوقود والازدحام  ",
                    description: "'نظام المراقبة الذكية لمحطات الوقود - تعز' مشروع تقني مبتكر يهدف إلى معالجة ظاهرة الغش والتلاعب بالوقود في مجتمعنا، والتي تنتشر في ظل غياب الرقابة والشفافية. يوفر هذا النظام حلولاً رقمية تعتمد على إنترنت الأشياء وتقنيات الذكاء الاصطناعي لمراقبة محطات الوقود وتحسين إمكانية الوصول إليها، بما يخدم المواطنين والجهات الحكومية  ",
                    images: [
                        "images/stationmap.webp",
                        "images/dashboard.webp",
                        "images/report.webp",

                    ],
                    technologies: [
                        { name: "postgreSQL", icon: "fab fa-database" },
                        { name: "react.js", icon: "fab fa-react" },
                        { name: "MQTT", icon: "fas fa-MQTT" },
                        { name: "sensors", icon: "fab fa-sensor" },
                        { name: " Raspberry pi", icon: "fab fa-Raspberry" }
                    ],
                    liveLink: "#",
                    codeLink: "#"
                },

                "3": {
                    title: "نظام إدارة منتجات",
                    description: "  يقدم لوحة تحكم بسيطة لإدارة بيانات المنتجات في متجر إلكتروني. يساعد هذا  النظام المتاجر على تنظيم المنتجات وإدارتها بكفاءة يوفر الكود إمكانية إضافة منتجات جديدة مع تفاصيل شاملة (الاسم، الوصف، السعر، الضرائب، تكلفة الإعلان، الخصم، الفئة، والكمية وعرضها وتعديلها وحذفها بسهولة ضمن جدول تنظيمي. كما يتضمن خاصية البحث بين المنتجات حسب العنوان أو الفئة، ويتيح تصدير قائمة المنتجات إلى ملف CSV لاستخدامها خارجياً.",
                    images: [
                        "images/products.webp",

                    ],
                    technologies: [
                        { name: "html", icon: "fab fa-html" },
                        { name: "js", icon: "fab fa-js" },
                        { name: "Bootstrap", icon: "fab fa-bootstrap" },
                    ],
                    liveLink: "#",
                    codeLink: "#"
                }
            };

            // إضافة الاستماع لأزرار عرض التفاصيل
            const detailButtons = document.querySelectorAll('.project-details-btn');
            detailButtons.forEach(button => {
                button.addEventListener('click', function () {
                    const projectId = this.parentElement.getAttribute('data-id');
                    console.log(projectId);
                    showProjectDetails(projectId);
                });
            });

            // إضافة الاستماع للمشاريع نفسها (للنقر عليها)
            const projects = document.querySelectorAll('.project');
            projects.forEach(project => {
                project.addEventListener('click', function (e) {
                    // تجاهل النقر إذا كان على الزر
                    if (e.target.className !== 'project-details-btn' &&
                        e.target.parentElement.className !== 'project-details-btn') {
                        const projectId = this.getAttribute('data-id');
                        console.log(projectId);

                        showProjectDetails(projectId);
                    }
                });
            });

            // إغلاق النافذة المنبثقة
            closeModal.addEventListener('click', function () {
                modal.classList.remove('active');
                document.body.style.overflow = 'auto'; // إعادة تمكين التمرير للصفحة
            });

            // إغلاق النافذة المنبثقة عند النقر خارجها
            window.addEventListener('click', function (e) {
                if (e.target === modal) {
                    modal.classList.remove('active');
                    document.body.style.overflow = 'auto';
                }
            });


        });


