
 const allDBs = {
    zaj: [ 
        { id: 1, type: 'video', title: "زواج: رعب ليلة الغابة", image: "https://l.top4top.io/p_3702uwnur1.png", contentURL: "https://d.top4top.io/m_36805y6jr1.mp4", labels: "رعب", duration: "0011:30" },
        { id: 2, type: 'video', title: "زواج: أكشن سريع", image: "https://l.top4top.io/p_3702uwnur1.png", contentURL: "https://d.top4top.io/m_36805y6jr1.mp4", labels: "أكشن", duration: "0008:45" },
        { id: 3, type: 'video', title: "زواج: رومانسي", image: "https://l.top4top.io/p_3702uwnur1.png", contentURL: "https://d.top4top.io/m_36805y6jr1.mp4", labels: "رومانسي", duration: "0015:20" },
        { id: 4, type: 'video', title: "زواج: مغامرة", image: "https://l.top4top.io/p_3702uwnur1.png", contentURL: "https://d.top4top.io/m_36805y6jr1.mp4", labels: "مغامرة", duration: "0022:10" },
        { id: 5, type: 'image', title: "صورة زواج 1", image: "https://b.top4top.io/p_3680ejx641.jpg", contentURL: "https://b.top4top.io/p_3680ejx641.jpg", labels: "صور" },
        { id: 6, type: 'image', title: "صورة زواج 2", image: "https://b.top4top.io/p_3680ejx641.jpg", contentURL: "https://b.top4top.io/p_3680ejx641.jpgg", labels: "صور" },
        { id: 7, type: 'video', title: "زواج: كوميدي", image: "https://b.top4top.io/p_3680ejx641.jpg", contentURL: "https://d.top4top.io/m_36805y6jr1.mp4", labels: "كوميدي", duration: "0012:30" },
        { id: 8, type: 'video', title: "زواج: دراما", image: "https://b.top4top.io/p_3680ejx641.jpg", contentURL: "https://d.top4top.io/m_36805y6jr1.mp4", labels: "دراما", duration: "0018:45" },
        { id: 9, type: 'image', title: "صورة زواج 3", image: "https://l.top4top.io/p_3702uwnur1.png", contentURL: "https://l.top4top.io/p_3702uwnur1.png", labels: "صور" },
        { id: 10, type: 'video', title: "زواج: أكشن 2", image: "https://b.top4top.io/p_3680ejx641.jpgg", contentURL: "https://d.top4top.io/m_36805y6jr1.mp4", labels: "أكشن", duration: "0009:15" },
        { id: 11, type: 'video', title: "زواج: رعب 2", image: "https://l.top4top.io/p_3702uwnur1.png", contentURL: "https://d.top4top.io/m_36805y6jr1.mp4", labels: "رعب", duration: "0014:30" },
        { id: 12, type: 'image', title: "صورة زواج 4", image: "https://l.top4top.io/p_3702uwnur1.png", contentURL: "https://l.top4top.io/p_3702uwnur1.png", labels: "صور" },
        { id: 13, type: 'video', title: "زواج: مغامرة 2", image: "https://l.top4top.io/p_3702uwnur1.png", contentURL: "https://d.top4top.io/m_36805y6jr1.mp4", labels: "مغامرة", duration: "0025:00" },
        { id: 14, type: 'video', title: "زواج: رومانسي 2", image: "https://l.top4top.io/p_3702uwnur1.png", contentURL: "https://d.top4top.io/m_36805y6jr1.mp4", labels: "رومانسي", duration: "0016:40" },
        { id: 15, type: 'image', title: "صورة زواج 5", image: "https://l.top4top.io/p_3702uwnur1.png", contentURL: "https://l.top4top.io/p_3702uwnur1.png", labels: "صور" },
        { id: 16, type: 'video', title: "زواج: أكشن 3", image: "https://l.top4top.io/p_3702uwnur1.png", contentURL: "https://d.top4top.io/m_36805y6jr1.mp4", labels: "أكشن", duration: "0010:30" },
        { id: 17, type: 'video', title: "زواج: رعب 3", image: "https://l.top4top.io/p_3702uwnur1.png", contentURL: "https://d.top4top.io/m_36805y6jr1.mp4", labels: "رعب", duration: "0013:20" },
        { id: 18, type: 'image', title: "صورة زواج 6", image: "https://l.top4top.io/p_3702uwnur1.png", contentURL: "https://l.top4top.io/p_3702uwnur1.png", labels: "صور" },
        { id: 19, type: 'video', title: "زواج: كوميدي 2", image: "https://l.top4top.io/p_3702uwnur1.png", contentURL: "https://d.top4top.io/m_36805y6jr1.mp4", labels: "كوميدي", duration: "0011:45" },
        { id: 20, type: 'video', title: "زواج: دراما 2", image: "https://l.top4top.io/p_3702uwnur1.png", contentURL: "https://d.top4top.io/m_36805y6jr1.mp4", labels: "دراما", duration: "0019:30" },
        { id: 21, type: 'image', title: "صورة زواج 7", image: "https://l.top4top.io/p_3702uwnur1.png", contentURL: "https://l.top4top.io/p_3702uwnur1.png", labels: "صور" },
        { id: 22, type: 'video', title: "زواج: مغامرة 3", image: "https://l.top4top.io/p_3702uwnur1.png", contentURL: "https://d.top4top.io/m_36805y6jr1.mp4", labels: "مغامرة", duration: "0023:15" },
        { id: 23, type: 'video', title: "زواج: رومانسي 3", image: "https://l.top4top.io/p_3702uwnur1.png", contentURL: "https://d.top4top.io/m_36805y6jr1.mp4", labels: "رومانسي", duration: "0017:50" },
        { id: 24, type: 'image', title: "صورة زواج 8", image: "https://l.top4top.io/p_3702uwnur1.png", contentURL: "https://l.top4top.io/p_3702uwnur1.png", labels: "صور" },
        { id: 25, type: 'video', title: "زواج: أكشن 4", image: "https://l.top4top.io/p_3702uwnur1.png", contentURL: "https://d.top4top.io/m_36805y6jr1.mp4", labels: "أكشن", duration: "0011:30" }
    ],
    
    nesa: [ 
        { id: 200, type: 'image', title: "صورة متحركة مذهلة", image: "https://b.top4top.io/p_3680ejx641.jpg", contentURL: "https://b.top4top.io/p_3680ejx641.jpg", labels: "متحركة" },
        { id: 201, type: 'image', title: "صورة ثابتة 1", image: "https://b.top4top.io/p_3680ejx641.jpg", contentURL: "hhttps://b.top4top.io/p_3680ejx641.jpg", labels: "ثابتة" },
        { id: 202, type: 'image', title: "صورة طبيعية", image: "https://l.top4top.io/p_3702uwnur1.png", contentURL: "https://l.top4top.io/p_3702uwnur1.png", labels: "طبيعة" },
        { id: 203, type: 'image', title: "صورة ساحلية", image: "https://l.top4top.io/p_3702uwnur1.png", contentURL: "https://l.top4top.io/p_3702uwnur1.png", labels: "ساحل" },
        { id: 204, type: 'video', title: "فيديو نساء 1", image: "https://l.top4top.io/p_3702uwnur1.png", contentURL: "https://d.top4top.io/m_36805y6jr1.mp4", labels: "أكشن", duration: "0005:30" },
        { id: 205, type: 'image', title: "صورة أزياء", image: "https://l.top4top.io/p_3702uwnur1.png", contentURL: "https://l.top4top.io/p_3702uwnur1.png", labels: "أزياء" },
        { id: 206, type: 'image', title: "صورة جمال", image: "https://l.top4top.io/p_3702uwnur1.png", contentURL: "https://l.top4top.io/p_3702uwnur1.png", labels: "جمال" },
        { id: 207, type: 'video', title: "فيديو نساء 2", image: "https://l.top4top.io/p_3702uwnur1.png", contentURL: "https://d.top4top.io/m_36805y6jr1.mp4", labels: "رياضة", duration: "0007:45" },
        { id: 208, type: 'image', title: "صورة مكياج", image: "https://l.top4top.io/p_3702uwnur1.png", contentURL: "https://l.top4top.io/p_3702uwnur1.png", labels: "مكياج" },
        { id: 209, type: 'image', title: "صورة عصرية", image: "https://l.top4top.io/p_3702uwnur1.png", contentURL: "https://l.top4top.io/p_3702uwnur1.png", labels: "عصرية" },
        { id: 210, type: 'video', title: "فيديو نساء 3", image: "https://l.top4top.io/p_3702uwnur1.png", contentURL: "https://d.top4top.io/m_36805y6jr1.mp4", labels: "موضة", duration: "0006:15" },
        { id: 211, type: 'image', title: "صورة سفر", image: "https://l.top4top.io/p_3702uwnur1.png", contentURL: "https://l.top4top.io/p_3702uwnur1.png", labels: "سفر" },
        { id: 212, type: 'image', title: "صورة استرخاء", image: "https://l.top4top.io/p_3702uwnur1.png", contentURL: "https://l.top4top.io/p_3702uwnur1.png", labels: "استرخاء" },
        { id: 213, type: 'video', title: "فيديو نساء 4", image: "https://l.top4top.io/p_3702uwnur1.png", contentURL: "https://d.top4top.io/m_36805y6jr1.mp4", labels: "رقص", duration: "0004:30" },
        { id: 214, type: 'image', title: "صورة طعام", image: "https://l.top4top.io/p_3702uwnur1.png", contentURL: "https://l.top4top.io/p_3702uwnur1.png", labels: "طعام" },
        { id: 215, type: 'image', title: "صورة قهوة", image: "https://l.top4top.io/p_3702uwnur1.png", contentURL: "https://l.top4top.io/p_3702uwnur1.png", labels: "قهوة" },
        { id: 216, type: 'video', title: "فيديو نساء 5", image: "https://l.top4top.io/p_3702uwnur1.png", contentURL: "https://d.top4top.io/m_36805y6jr1.mp4", labels: "يoga", duration: "0008:20" },
        { id: 217, type: 'image', title: "صورة حديقة", image: "https://l.top4top.io/p_3702uwnur1.png", contentURL: "https://l.top4top.io/p_3702uwnur1.png", labels: "حديقة" },
        { id: 218, type: 'image', title: "صورة شاطئ", image: "https://l.top4top.io/p_3702uwnur1.png", contentURL: "https://l.top4top.io/p_3702uwnur1.png", labels: "شاطئ" },
        { id: 219, type: 'video', title: "فيديو نساء 6", image: "https://l.top4top.io/p_3702uwnur1.png", contentURL: "https://d.top4top.io/m_36805y6jr1.mp4", labels: "طبخ", duration: "0009:45" },
        { id: 220, type: 'image', title: "صورة غروب", image: "https://l.top4top.io/p_3702uwnur1.png", contentURL: "https://l.top4top.io/p_3702uwnur1.png", labels: "غروب" }
    ],
    
    haywan: [ 
        { id: 307570, type: 'video', title: "فيديو أكشن حيوانات", image: "https://l.top4top.io/p_3702uwnur1.png", contentURL: "https://d.top4top.io/m_36805y6jr1.mp4", labels: "أكشن", duration: "0005:20" },
        { id: 757350, type: 'video', title: "فيديو حيوانات مفترسة", image: "https://l.top4top.io/p_3702uwnur1.png", contentURL: "https://d.top4top.io/m_36805y6jr1.mp4", labels: "مفترسة", duration: "0007:30" },
        { id: 357571, type: 'video', title: "فيديو حيوانات أليفة", image: "https://l.top4top.io/p_3702uwnur1.png", contentURL: "https://d.top4top.io/m_36805y6jr1.mp4", labels: "أليفة", duration: "0004:45" },
        { id: 2575700, type: 'video', title: "فيديو حيوانات الغابة", image: "https://l.top4top.io/p_3702uwnur1.png", contentURL: "https://d.top4top.io/m_36805y6jr1.mp4", labels: "غابة", duration: "0006:15" },
        { id: 257572, type: 'video', title: "فيديو حيوانات بحرية", image: "https://l.top4top.io/p_3702uwnur1.png", contentURL: "https://d.top4top.io/m_36805y6jr1.mp4", labels: "بحرية", duration: "0008:00" },
        { id: 17757, type: 'video', title: "فيديو طيور", image: "https://l.top4top.io/p_3702uwnur1.png", contentURL: "https://d.top4top.io/m_36805y6jr1.mp4", labels: "طيور", duration: "0003:30" },
        { id: 25757, type: 'video', title: "فيديو حيوانات صحراوية", image: "https://l.top4top.io/p_3702uwnur1.png", contentURL: "https://d.top4top.io/m_36805y6jr1.mp4", labels: "صحراء", duration: "0005:50" },
        { id: 357575, type: 'video', title: "فيديو حيوانات قطبية", image: "https://l.top4top.io/p_3702uwnur1.png", contentURL: "https://d.top4top.io/m_36805y6jr1.mp4", labels: "قطبية", duration: "0006:40" },
        { id: 357570, type: 'video', title: "فيديو حيوانات استوائية", image: "https://l.top4top.io/p_3702uwnur1.png", contentURL: "https://d.top4top.io/m_36805y6jr1.mp4", labels: "استوائية", duration: "0007:10" },
        { id: 4755754, type: 'video', title: "فيديو زواحف", image: "https://l.top4top.io/p_3702uwnur1.png", contentURL: "https://d.top4top.io/m_36805y6jr1.mp4", labels: "زواحف", duration: "0004:20" },
        { id: 55754, type: 'video', title: "فيديو حشرات", image: "https://l.top4top.io/p_3702uwnur1.png", contentURL: "https://d.top4top.io/m_36805y6jr1.mp4", labels: "حشرات", duration: "0003:15" },
        { id: 575755, type: 'video', title: "فيديو ديناصورات", image: "https://l.top4top.io/p_3702uwnur1.png", contentURL: "https://d.top4top.io/m_36805y6jr1.mp4", labels: "ديناصورات", duration: "0009:30" },
        { id: 45754, type: 'video', title: "فيديو حيوانات ليلية", image: "https://l.top4top.io/p_3702uwnur1.png", contentURL: "https://d.top4top.io/m_36805y6jr1.mp4", labels: "ليلية", duration: "0005:25" },
        { id: 57574, type: 'video', title: "فيديو حيوانات نادرة", image: "https://l.top4top.io/p_3702uwnur1.png", contentURL: "https://d.top4top.io/m_36805y6jr1.mp4", labels: "نادرة", duration: "0007:45" },
        { id: 55, type: 'video', title: "فيديو حيوانات أفريقيا", image: "https://l.top4top.io/p_3702uwnur1.png", contentURL: "https://d.top4top.io/m_36805y6jr1.mp4", labels: "أفريقيا", duration: "0008:50" },
        { id: 45754, type: 'video', title: "فيديو حيوانات آسيا", image: "https://l.top4top.io/p_3702uwnur1.png", contentURL: "https://d.top4top.io/m_36805y6jr1.mp4", labels: "آسيا", duration: "0006:30" },
        { id: 55754, type: 'video', title: "فيديو حيوانات أمريكا", image: "https://l.top4top.io/p_3702uwnur1.png", contentURL: "https://d.top4top.io/m_36805y6jr1.mp4", labels: "أمريكا", duration: "0007:20" },
        { id: 557555, type: 'video', title: "فيديو حيوانات أستراليا", image: "https://l.top4top.io/p_3702uwnur1.png", contentURL: "https://d.top4top.io/m_36805y6jr1.mp4", labels: "أستراليا", duration: "0005:40" },
        { id: 457554, type: 'video', title: "فيديو حيوانات أوروبا", image: "https://l.top4top.io/p_3702uwnur1.png", contentURL: "https://d.top4top.io/m_36805y6jr1.mp4", labels: "أوروبا", duration: "0004:55" },
        { id: 55754, type: 'video', title: "فيديو حيوانات الجبل", image: "https://l.top4top.io/p_3702uwnur1.png", contentURL: "https://d.top4top.io/m_36805y6jr1.mp4", labels: "جبلية", duration: "0006:10" },
        { id: 55745, type: 'video', title: "فيديو حيوانات النهر", image: "https://l.top4top.io/p_3702uwnur1.png", contentURL: "https://d.top4top.io/m_36805y6jr1.mp4", labels: "نهرية", duration: "0005:35" },
        { id: 21, type: 'video', title: "فيديو حيوانات المزرعة", image: "https://l.top4top.io/p_3702uwnur1.png", contentURL: "https://d.top4top.io/m_36805y6jr1.mp4", labels: "مزرعة", duration: "0007:15" }
    ],
    
    life: [
        { 
            id: 59801, 
            type: 'article', 
            title: "وضعية إندراني", 
            image: "https://l.top4top.io/p_3702uwnur1.png", 
            labels: "تعليمي",
            blocks: [
                { 
                    type: 'text', 
                    content: `
                        <div style="direction: rtl; text-align: right; line-height: 1.8;">
                            <h2 style="color: #fb7185; margin-bottom: 15px;">وضعية إندراني</h2>
                            <p style="margin-bottom: 15px;">
                                بواسطة رايتشل فوستر (9 فبراير 2022). يحب الأزواج وضعية إندراني 
                                لأنها مريحة وتسمح باختراق عميق جداً.
                            </p>
                            <div style="margin: 20px 0;">
                                <img src="https://l.top4top.io/p_3702uwnur1.png" 
                                     style="width: 100%; max-width: 500px; border-radius: 15px;" 
                                     alt="صورة توضيحية">
                            </div>
                            <video controls style="width: 100%; max-width: 600px; border-radius: 15px;">
                                <source src="https://d.top4top.io/m_36805y6jr1.mp4" type="video/mp4">
                            </video>
                        </div>
                    ` 
                }
            ]
        },
        { 
            id: 59802, 
            type: 'article', 
            title: "نصائح للحياة الزوجية", 
            image: "https://l.top4top.io/p_3702uwnur1.png", 
            labels: "نصائح",
            blocks: [
                { 
                    type: 'text', 
                    content: `
                        <div style="direction: rtl; text-align: right; line-height: 1.8;">
                            <h2 style="color: #fb7185; margin-bottom: 15px;">نصائح ذهبية للحياة الزوجية</h2>
                            <ul style="margin-right: 20px; margin-bottom: 20px;">
                                <li>التواصل المستمر هو أساس العلاقة الناجحة</li>
                                <li>احترام المساحة الشخصية للطرف الآخر</li>
                                <li>المفاجآت الرومانسية تضفي جواً من السعادة</li>
                            </ul>
                            <div style="margin: 20px 0;">
                                <img src="https://l.top4top.io/p_3702uwnur1.png" 
                                     style="width: 100%; max-width: 500px; border-radius: 15px;" 
                                     alt="صورة نصائح">
                            </div>
                        </div>
                    ` 
                }
            ]
        },
        { 
            id: 59803, 
            type: 'article', 
            title: "أفضل 10 وضعيات", 
            image: "https://l.top4top.io/p_3702uwnur1.png", 
            labels: "توب 10",
            blocks: [
                { 
                    type: 'text', 
                    content: `
                        <div style="direction: rtl; text-align: right; line-height: 1.8;">
                            <h2 style="color: #fb7185; margin-bottom: 15px;">أفضل 10 وضعيات للأزواج</h2>
                            <ol style="margin-right: 20px; margin-bottom: 20px;">
                                <li>وضعية إندراني</li>
                                <li>وضعية الملعقة</li>
                                <li>الوضعية التبشيرية</li>
                                <li>وضعية الفارسة</li>
                                <li>وضعية الكلبية</li>
                            </ol>
                            <video controls style="width: 100%; max-width: 600px; border-radius: 15px;">
                                <source src="https://d.top4top.io/m_36805y6jr1.mp4" type="video/mp4">
                            </video>
                        </div>
                    ` 
                }
            ]
        },
        { 
            id: 59804, 
            type: 'article', 
            title: "أسرار العلاقة الحميمة", 
            image: "https://l.top4top.io/p_3702uwnur1.png", 
            labels: "أسرار",
            blocks: [
                { 
                    type: 'text', 
                    content: `
                        <div style="direction: rtl; text-align: right; line-height: 1.8;">
                            <h2 style="color: #fb7185; margin-bottom: 15px;">أسرار العلاقة الحميمة</h2>
                            <p>اكتشف أسرار العلاقة الحميمة الناجحة...</p>
                            <img src="https://l.top4top.io/p_3702uwnur1.png" style="width:100%; max-width:500px;">
                        </div>
                    ` 
                }
            ]
        },
        { 
            id: 59805, 
            type: 'article', 
            title: "الرومانسية في الزواج", 
            image: "https://l.top4top.io/p_3702uwnur1.png", 
            labels: "رومانسية",
            blocks: [
                { 
                    type: 'text', 
                    content: `
                        <div style="direction: rtl; text-align: right; line-height: 1.8;">
                            <h2 style="color: #fb7185; margin-bottom: 15px;">كيف تحافظ على الرومانسية</h2>
                            <p>نصائح للحفاظ على الرومانسية في العلاقة الزوجية...</p>
                            <img src="https://l.top4top.io/p_3702uwnur1.png" style="width:100%; max-width:500px;">
                        </div>
                    ` 
                }
            ]
        }
    ]
};

// ================ الإعلانات ================
const siteAds = {
    networkAds: [ 
        { type: 'video', url: "https://d.top4top.io/m_36805y6jr1.mp4", link: "https://example.com", title: "إعلان فيديو 1", description: "شاهد العرض الآن" },
        { type: 'gif', url: "https://media.giphy.com/media/l0HlNQ03J5JxX6lva/giphy.gif", link: "https://example2.com", title: "إعلان GIF", description: "عرض محدود" },
        { type: 'image', url: "https://i.postimg.cc/zfSyrPnH/hq720.jpg", link: "https://example3.com", title: "إعلان صورة 1", description: "خصم 50%" }
    ],
    sidebarAds: [
        { url: "https://i.postimg.cc/zfSyrPnH/hq720.jpg", link: "https://example1.com", type: "image" },
        { url: "https://d.top4top.io/m_36805y6jr1.mp4", link: "https://example2.com", type: "video" }
    ],
    paginationLargeAds: [
        { image: "https://i.postimg.cc/zfSyrPnH/hq720.jpg", link: "https://example1.com", title: "عرض خاص", isPortrait: false },
        { image: "https://b.top4top.io/p_3680ejx641.jpg", link: "https://example2.com", title: "عروض حصرية", isPortrait: false }
    ],
    paginationSquareAds: [
        { image: "https://i.postimg.cc/zfSyrPnH/hq720.jpg", link: "https://example1.com", title: "إعلان 1", isPortrait: false },
        { image: "https://b.top4top.io/p_3680ejx641.jpg", link: "https://example2.com", title: "إعلان 2", isPortrait: false }
    ]
};

// ================ المتغيرات العامة ================
var tempRegistration = null;
var generatedVerificationCode = null;
var lastActivityTime = new Date().getTime();
var userIdle = false;
var pageVisible = true;
var ageVerificationEnabled = true;
var favorites = JSON.parse(localStorage.getItem('myFavs')) || [];
var likes = JSON.parse(localStorage.getItem('myLikes')) || [];
var dislikes = JSON.parse(localStorage.getItem('myDislikes')) || [];
var watchLater = JSON.parse(localStorage.getItem('myWatchLater')) || [];
var likesCount = JSON.parse(localStorage.getItem('likesCount')) || {};
var currentSourceKey = localStorage.getItem('selectedSource') || 'zaj';
var currentSourceName = localStorage.getItem('selectedSourceName') || 'الزواج';
var currentType = localStorage.getItem('selectedType') || 'video';
var currentCat = localStorage.getItem('selectedCat') || 'all content';
var savedParent = localStorage.getItem('activeParent');
var activeParent = (savedParent === "null" || savedParent === null || savedParent === undefined) ? null : savedParent;
var currentPlayingId = localStorage.getItem('currentPlayingId') || null;
var dummyData = (typeof allDBs !== 'undefined' && allDBs[currentSourceKey]) ? [...allDBs[currentSourceKey]] : [];
var currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
var usersDB = JSON.parse(localStorage.getItem('usersDB')) || [];
var currentLang = localStorage.getItem('siteLang') || 'en';
var itemsPerPage = 20;
var currentPage = 1;
var profileMode = null;
var scrollPosition = 0;
var isLoginMode = true;

// ================ Firebase (معطل مؤقتاً) ================
const firebaseConfig = {
    apiKey: "AIzaSyBk2NxXkXkXkXkXkXkXkXkXkXkXkXk",
    authDomain: "my-platform-2026.firebaseapp.com",
    projectId: "my-platform-2026",
    storageBucket: "my-platform-2026.appspot.com",
    messagingSenderId: "123456789012",
    appId: "1:123456789012:web:abc123def4567890"
};

// تهيئة Firebase بأمان
try {
    if (typeof firebase !== 'undefined' && !firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
} catch (e) {
    console.log("Firebase غير متاح");
}

const auth = typeof firebase !== 'undefined' ? firebase.auth() : null;
const provider = auth ? new firebase.auth.GoogleAuthProvider() : null;

// ================ دوال جلب الإعلانات ================
function getRandomNetworkAd() {
    return siteAds.networkAds[Math.floor(Math.random() * siteAds.networkAds.length)];
}

function getRandomSidebarAd() {
    return siteAds.sidebarAds[Math.floor(Math.random() * siteAds.sidebarAds.length)];
}

function getRandomPaginationLargeAd() {
    return siteAds.paginationLargeAds[Math.floor(Math.random() * siteAds.paginationLargeAds.length)];
}

function getRandomPaginationSquareAds(count = 3) {
    const shuffled = [...siteAds.paginationSquareAds].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function getRandomAd() {
    return getRandomNetworkAd();
}

// ================ الترجمة ================
const translations = {
    en: {
        sectionNames: { zaj: "Straight", nesa: "Lesbian", haywan: "Trans", life: "Sex Positions" },
        sectionTitles: { zaj: "Hot porn videos", nesa: "Lesbian Porn Videos", haywan: "Transgender Porn Videos", life: "Sex Positions - Educational Guides" },
        subTitles: { zaj: "Watch the hottest straight porn videos in HD quality", nesa: "Best videos - Girl having sex with another woman", haywan: "Amazing transgender porn videos - TS performers", life: "Learn new sex positions with our educational guides" },
        searchPlaceholder: "Search for video...",
        profileSaved: "My Saved Profile:",
        btnFav: "❤ Favorites",
        btnLike: "👍 Likes",
        btnWatchLater: "⏱️ Watch Later",
        videosCount: "📹 0 Videos",
        imagesCount: "🖼️ 0 Images",
        articlesCount: "📄 0 Articles",
        videosMenu: "Videos",
        staticImages: "Image",
        animatedImages: "Gif",
        allContentMenu: "All Content",
        close: "Close ✕",
        saved: "Saved",
        addToFav: "Add to Favorites",
        removeFromFav: "Remove from Favorites",
        addToWatchLater: "Watch Later",
        removeFromWatchLater: "Remove from Watch Later",
        like: "Like",
        liked: "Liked",
        dislike: "Dislike",
        disliked: "Disliked",
        share: "Share",
        copied: "Copied",
        backToContent: "← Back to Content",
        relatedTopics: "Related Topics",
        welcome: "Welcome",
        logout: "Logout",
        loginButton: "🔐 Login",
        leftColumnTitle: "Videos, images and articles are shared on this site via the links below",
        link1: "YouTube",
        link2: "Facebook",
        link3: "Twitter",
        link4: "Instagram",
        link5: "TikTok",
        aiHelpText: "This website was created with the help of",
        quickLinks: "Quick Links",
        support: "Support",
        videos: "Videos",
        images: "Images",
        articles: "Articles",
        popular: "Popular",
        privacyPolicy: "Privacy Policy",
        contactUs: "Contact Us",
        aboutUs: "About Us",
        termsOfService: "Terms of Service",
        footerRights: "All rights reserved © 2024 porniq.com",
        footerDesc: "Porniq provides you with unlimited free porn videos with the hottest pornstars. Enjoy the largest amateur porn community on the net.",
        favTitle: "Favorites",
        likeTitle: "Liked Content",
        watchLaterTitle: "Watch Later",
    },
    ar: {
        sectionNames: { zaj: "مستقيم ⚤", nesa: "سحاقيات ⚢", haywan: "متحولين جنسياً ⚧", life: "وضعيات جنسية" },
        sectionTitles: { zaj: "مقاطع فيديو إباحية ساخنة", nesa: "مقاطع فيديو إباحية للمثليات", haywan: "مقاطع فيديو إباحية للمتحولين جنسياً", life: "وضعيات جنسية - أدلة تعليمية" },
        subTitles: { zaj: "شاهد أفضل الفيديوهات والأفلام الساخنة ⚤ PORNIQ", nesa: "أفضل فيديوهات وأفلام ⚢ فتاة تمارس الجنس مع امرأة أخرى", haywan: "شاهد أفضل الفيديوهات والأفلام الساخنة للمتحولين جنسياً 🏳️‍⚧️ PORNIQ", life: "تعلم وضعيات جنسية تعليمية مع الشرح بالفيديو والنصوص والصور ⚑PORNiQ" },
        searchPlaceholder: "ابحث عن فيديو...",
        profileSaved: "ملفي المحفوظ:",
        btnFav: "❤ المفضل",
        btnLike: "👍 الإعجاب",
        btnWatchLater: "⏱️ المشاهدة لاحقاً",
        videosCount: "📹 0 فيديو",
        imagesCount: "🖼️ 0 صورة",
        articlesCount: "📄 0 مقال",
        videosMenu: "الفيديوهات",
        staticImages: "صور ثابتة",
        animatedImages: "صور متحركة",
        allContentMenu: "كل المحتوى",
        close: "إغلاق ✕",
        saved: "تم الحفظ",
        addToFav: "إضافة للمفضلة",
        removeFromFav: "إزالة من المفضلة",
        addToWatchLater: "مشاهدة لاحقاً",
        removeFromWatchLater: "إزالة من المشاهدة لاحقاً",
        like: "إعجاب",
        liked: "معجب",
        dislike: "عدم إعجاب",
        disliked: "غير معجب",
        share: "مشاركة",
        copied: "تم النسخ",
        backToContent: "← رجوع للمحتوى",
        relatedTopics: "مواضيع ذات صلة",
        welcome: "مرحباً",
        logout: "تسجيل خروج",
        loginButton: "🔐 تسجيل الدخول",
        leftColumnTitle: "يتم مشاركة في هذا الموقع الفيديوهات والصور والمقالات عبر الروابط تحت",
        link1: "يوتيوب",
        link2: "فيسبوك",
        link3: "تويتر",
        link4: "انستغرام",
        link5: "تيك توك",
        aiHelpText: "تم إنشاء هذا الموقع بمساعدة",
        quickLinks: "روابط سريعة",
        support: "الدعم",
        videos: "فيديوهات",
        images: "صور",
        articles: "مقالات",
        popular: "الأكثر مشاهدة",
        privacyPolicy: "سياسة الخصوصية",
        contactUs: "اتصل بنا",
        aboutUs: "من نحن",
        termsOfService: "شروط الخدمة",
        footerRights: "جميع الحقوق محفوظة © 2024 porniq.com",
        footerDesc: "يُقدّم لك موقع Porniq عددًا غير محدود من مقاطع الفيديو الإباحية المجانية مع أشهر نجمات الإباحية. استمتع بأكبر مجتمع إباحي للهواة على الإنترنت.",
        favTitle: "المحتوى المفضل",
        likeTitle: "المحتوى المعجب به",
        watchLaterTitle: "مشاهدة لاحقاً",
    }
};

function t(key) {
    return translations[currentLang] && translations[currentLang][key] ? translations[currentLang][key] : key;
}

// ================ دوال الترجمة واللغة ================
function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    localStorage.setItem('siteLang', currentLang);
    
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;
    
    document.getElementById('langBtn').innerHTML = currentLang === 'ar' ? '🌐 AR' : '🌐 EN';
    
    updateAllTexts();
    renderMenu();
    updateUserUI();
    updateSubTitle();
}

function updateAllTexts() {
    const sectionZaj = document.getElementById('sectionZaj');
    const sectionNesa = document.getElementById('sectionNesa');
    const sectionHaywan = document.getElementById('sectionHaywan');
    const sectionLife = document.getElementById('sectionLife');
    
    if (currentLang === 'en') {
        if (sectionZaj) sectionZaj.innerText = "Straight";
        if (sectionNesa) sectionNesa.innerText = "Lesbian";
        if (sectionHaywan) sectionHaywan.innerText = "Trans";
        if (sectionLife) sectionLife.innerText = "Sex Positions";
    } else {
        if (sectionZaj) sectionZaj.innerHTML = 'مستقيم <span style="color: #FF69B4; font-size: 1.8em;">⚤</span>';
        if (sectionNesa) sectionNesa.innerHTML = 'سحاقيات <span style="color:#FF69B4; font-size: 2em;">⚢</span>';
        if (sectionHaywan) sectionHaywan.innerHTML = 'متحولين جنسياً <span style="color: #FF69B4; font-size:1.5em;">⚧</span>';
        if (sectionLife) sectionLife.innerHTML = 'وضعيات جنسية';
    }
    
    const searchBox = document.getElementById('searchBox');
    if (searchBox) searchBox.placeholder = t('searchPlaceholder');
    
    const profileTitle = document.querySelector('.profile-card .text-\\[10px\\]');
    if (profileTitle) profileTitle.innerText = t('profileSaved');
    
    const btnFav = document.getElementById('btnFav');
    if (btnFav) btnFav.innerText = t('btnFav');
    
    const btnLike = document.getElementById('btnLike');
    if (btnLike) btnLike.innerText = t('btnLike');
    
    const btnWatchLater = document.getElementById('btnWatchLater');
    if (btnWatchLater) btnWatchLater.innerText = t('btnWatchLater');
    
    updateStats();
    
    const catTitle = document.getElementById('catTitle');
    if (catTitle) {
        if (profileMode) {
            if (profileMode === 'fav') catTitle.innerText = t('favTitle');
            else if (profileMode === 'like') catTitle.innerText = t('likeTitle');
            else if (profileMode === 'watchlater') catTitle.innerText = t('watchLaterTitle');
        } else {
            catTitle.innerText = t('sectionTitles')[currentSourceKey] || t('sectionNames')[currentSourceKey];
        }
    }
    
    const activeName = document.getElementById('activeName');
    if (activeName && currentSourceKey) {
        activeName.innerHTML = t('sectionNames')[currentSourceKey];
    }
}

function updateSubTitle() {
    const subTitle = document.getElementById('sectionSubtitle');
    if (!subTitle) return;
    
    if (currentSourceKey && translations[currentLang] && translations[currentLang].subTitles) {
        subTitle.innerText = translations[currentLang].subTitles[currentSourceKey] || '';
    } else {
        subTitle.innerText = '';
    }
}

// ================ دوال المستخدم والتسجيل ================
function updateUserUI() {
    const nav = document.querySelector('nav .flex.items-center.gap-4');
    if (!nav) return;

    const existingUserSection = document.getElementById('userSection');
    if (existingUserSection) existingUserSection.remove();

    const userSection = document.createElement('div');
    userSection.id = 'userSection';
    userSection.className = 'flex items-center';

    if (currentUser) {
        let avatarHtml = '';
        if (currentUser.photoURL) {
            avatarHtml = `<img src="${currentUser.photoURL}" class="w-8 h-8 rounded-full border-2 border-pink-500">`;
        } else {
            const firstLetter = currentUser.username ? currentUser.username.charAt(0).toUpperCase() : 'U';
            avatarHtml = `<div class="w-8 h-8 rounded-full bg-pink-600 flex items-center justify-center text-white font-bold">${firstLetter}</div>`;
        }
        
        userSection.innerHTML = `
            <div class="flex items-center gap-3 bg-gradient-to-r from-zinc-800 to-zinc-900 px-4 py-1.5 rounded-full border border-pink-500/30 shadow-lg">
                ${avatarHtml}
                <div class="flex flex-col">
                    <span class="text-xs text-white/60">Welcome</span>
                    <span class="text-sm font-bold text-pink-500">${currentUser.username || 'User'}</span>
                </div>
                <button onclick="logout()" class="text-xs bg-red-600/80 hover:bg-red-600 px-3 py-1.5 rounded-full text-white font-bold transition-all mr-2">
                    Logout
                </button>
            </div>
        `;
        ageVerificationEnabled = false;
        const ageModal = document.getElementById('ageVerifyModal');
        if (ageModal) ageModal.style.display = 'none';
    } else {
    userSection.innerHTML = `
    <button onclick="showAuthModal()" class="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white px-3 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 shadow-md shadow-pink-600/30">
        🔐 Login
    </button>
`;
        ageVerificationEnabled = true;
    }
    nav.appendChild(userSection);
}

function showAuthModal() {
    // إزالة أي نافذة موجودة مسبقاً
    const existingModal = document.getElementById('authModal');
    if (existingModal) existingModal.remove();
    
    const modal = document.createElement('div');
    modal.id = 'authModal';
    
    // تنسيق النافذة مباشرة
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.96);
        z-index: 100000000;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    
    modal.style.direction = currentLang === 'ar' ? 'rtl' : 'ltr';
    
    modal.innerHTML = `
        <div style="
            width: 260px;
            max-width: 85%;
            background: #0a0a0a;
            border-radius: 20px;
            border: 1px solid #be185d;
            padding: 16px 14px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.5);
        ">
            <div style="text-align: center; margin-bottom: 10px;">
                <h2 id="authTitle" style="font-size: 18px; font-weight: bold; color: white; margin: 0;">Login</h2>
                <div style="width: 35px; height: 2px; background: #be185d; margin: 6px auto 0;"></div>
            </div>
            
            <div id="authError" style="background: rgba(220,38,38,0.2); border: 1px solid #ef4444; color: #fecaca; padding: 6px; border-radius: 8px; font-size: 10px; margin-bottom: 10px; display: none;"></div>
            
            <div id="loginFields">
                <div style="margin-bottom: 10px;">
                    <label style="display: block; color: #aaa; font-size: 10px; margin-bottom: 4px;">👤 Username</label>
                    <input type="text" id="loginUsername" style="width: 100%; background: #1a1a1a; border: 1px solid #333; border-radius: 10px; padding: 8px 10px; color: white; font-size: 12px; box-sizing: border-box;" placeholder="Username">
                </div>
                <div style="margin-bottom: 10px;">
                    <label style="display: block; color: #aaa; font-size: 10px; margin-bottom: 4px;">🔑 Password</label>
                    <input type="password" id="loginPassword" style="width: 100%; background: #1a1a1a; border: 1px solid #333; border-radius: 10px; padding: 8px 10px; color: white; font-size: 12px; box-sizing: border-box;" placeholder="********">
                </div>
            </div>
            
            <div id="registerFields" style="display: none;">
                <div style="margin-bottom: 10px;">
                    <label style="display: block; color: #aaa; font-size: 10px; margin-bottom: 4px;">👤 Username</label>
                    <input type="text" id="regUsername" style="width: 100%; background: #1a1a1a; border: 1px solid #333; border-radius: 10px; padding: 8px 10px; color: white; font-size: 12px; box-sizing: border-box;" placeholder="Username">
                </div>
                <div style="margin-bottom: 10px;">
                    <label style="display: block; color: #aaa; font-size: 10px; margin-bottom: 4px;">📧 Email</label>
                    <input type="email" id="regEmail" style="width: 100%; background: #1a1a1a; border: 1px solid #333; border-radius: 10px; padding: 8px 10px; color: white; font-size: 12px; box-sizing: border-box;" placeholder="Email">
                </div>
                <div style="margin-bottom: 10px;">
                    <label style="display: block; color: #aaa; font-size: 10px; margin-bottom: 4px;">🔑 Password</label>
                    <input type="password" id="regPassword" style="width: 100%; background: #1a1a1a; border: 1px solid #333; border-radius: 10px; padding: 8px 10px; color: white; font-size: 12px; box-sizing: border-box;" placeholder="Password">
                </div>
                <div style="margin-bottom: 10px;">
                    <label style="display: block; color: #aaa; font-size: 10px; margin-bottom: 4px;">✅ Confirm</label>
                    <input type="password" id="regConfirmPassword" style="width: 100%; background: #1a1a1a; border: 1px solid #333; border-radius: 10px; padding: 8px 10px; color: white; font-size: 12px; box-sizing: border-box;" placeholder="Confirm">
                </div>
            </div>
            
            <div id="verificationFields" style="display: none;">
                <div style="text-align: center; color: #aaa; font-size: 11px; margin-bottom: 10px;">Verification code sent to your email</div>
                <div>
                    <label style="display: block; color: #aaa; font-size: 10px; margin-bottom: 4px;">🔢 4-digit code</label>
                    <input type="text" id="verificationCode" maxlength="4" style="width: 100%; background: #1a1a1a; border: 1px solid #333; border-radius: 10px; padding: 8px 10px; color: white; text-align: center; font-size: 16px; letter-spacing: 4px; box-sizing: border-box;" placeholder="____">
                </div>
            </div>
            
            <div id="loginActions" style="display: flex; gap: 8px; margin-top: 12px;">
                <button onclick="handleLogin()" style="flex: 1; background: #be185d; color: white; border: none; border-radius: 10px; padding: 8px; font-size: 12px; font-weight: bold; cursor: pointer;">Login</button>
                <button onclick="closeAuthModal()" style="flex: 1; background: #2a2a2a; color: white; border: none; border-radius: 10px; padding: 8px; font-size: 12px; font-weight: bold; cursor: pointer;">Cancel</button>
            </div>
            <div id="registerActions" style="display: none; gap: 8px; margin-top: 12px;">
                <button onclick="handleRegister()" style="flex: 1; background: #be185d; color: white; border: none; border-radius: 10px; padding: 8px; font-size: 12px; font-weight: bold; cursor: pointer;">Send Code</button>
                <button onclick="closeAuthModal()" style="flex: 1; background: #2a2a2a; color: white; border: none; border-radius: 10px; padding: 8px; font-size: 12px; font-weight: bold; cursor: pointer;">Cancel</button>
            </div>
            <div id="verificationActions" style="display: none; gap: 8px; margin-top: 12px;">
                <button onclick="verifyCode()" style="flex: 1; background: #22c55e; color: white; border: none; border-radius: 10px; padding: 8px; font-size: 12px; font-weight: bold; cursor: pointer;">Verify</button>
                <button onclick="resetToRegister()" style="flex: 1; background: #2a2a2a; color: white; border: none; border-radius: 10px; padding: 8px; font-size: 12px; font-weight: bold; cursor: pointer;">Back</button>
            </div>
            
            ${auth ? `
            <div style="position: relative; margin: 12px 0;">
                <div style="position: absolute; inset: 0; display: flex; align-items: center;"><div style="width: 100%; border-top: 1px solid #333;"></div></div>
                <div style="position: relative; display: flex; justify-content: center;"><span style="background: #0a0a0a; padding: 0 8px; color: #666; font-size: 9px;">OR</span></div>
            </div>
            <button onclick="googleSignIn()" style="width: 100%; background: white; color: #333; border: none; border-radius: 10px; padding: 8px; font-size: 11px; font-weight: bold; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 6px;">
                <svg style="width: 14px; height: 14px;" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                Google
            </button>
            ` : ''}
            
            <div style="text-align: center; margin-top: 12px;">
                <span id="toggleAuthText" style="color: #666; font-size: 9px;">Don't have an account?</span>
                <button onclick="toggleAuthMode()" id="toggleAuthBtn" style="background: none; border: none; color: #ec489a; font-size: 9px; font-weight: bold; cursor: pointer; display: inline; padding: 0;"> Sign up</button>
            </div>
            <div style="text-align: center; margin-top: 8px; font-size: 7px; color: #444;">By registering, you agree to our Terms</div>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
}

function closeAuthModal() {
    const modal = document.getElementById('authModal');
    if (modal) modal.remove();
    tempRegistration = null;
    generatedVerificationCode = null;
    document.body.style.overflow = '';
}
function toggleAuthMode() {
    isLoginMode = !isLoginMode;
    
    const authTitle = document.getElementById('authTitle');
    const toggleBtn = document.getElementById('toggleAuthBtn');
    const toggleText = document.getElementById('toggleAuthText');
    const loginFields = document.getElementById('loginFields');
    const loginActions = document.getElementById('loginActions');
    const registerFields = document.getElementById('registerFields');
    const registerActions = document.getElementById('registerActions');
    const verificationFields = document.getElementById('verificationFields');
    const verificationActions = document.getElementById('verificationActions');
    
    if (authTitle) authTitle.innerText = isLoginMode ? 'Login' : 'Create Account';
    if (toggleBtn) toggleBtn.innerText = isLoginMode ? 'Sign up' : 'Login';
    if (toggleText) toggleText.innerText = isLoginMode ? "Don't have an account?" : 'Already have an account?';
    
    if (loginFields) loginFields.style.display = isLoginMode ? 'block' : 'none';
    if (loginActions) loginActions.style.display = isLoginMode ? 'flex' : 'none';
    if (registerFields) registerFields.style.display = isLoginMode ? 'none' : 'block';
    if (registerActions) registerActions.style.display = isLoginMode ? 'none' : 'flex';
    
    if (verificationFields) verificationFields.style.display = 'none';
    if (verificationActions) verificationActions.style.display = 'none';
}
function handleLogin() {
    const username = document.getElementById('loginUsername').value.trim();
    const password = document.getElementById('loginPassword').value.trim();
    const errorDiv = document.getElementById('authError');
    
    errorDiv.classList.add('hidden');
    
    if (!username || !password) {
        showAuthError('❌ جميع الحقول مطلوبة');
        return;
    }
    
    const user = usersDB.find(u => u.username === username && u.password === password);
    
    if (user) {
        currentUser = { 
            username: user.username,
            email: user.email
        };
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        closeAuthModal();
        updateUserUI();
        alert(`👋 مرحباً بعودتك ${username}!`);
    } else {
        showAuthError('❌ اسم المستخدم أو كلمة المرور غير صحيحة');
    }
}

function handleRegister() {
    const username = document.getElementById('regUsername').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const password = document.getElementById('regPassword').value.trim();
    const confirm = document.getElementById('regConfirmPassword').value.trim();
    const errorDiv = document.getElementById('authError');
    
    errorDiv.classList.add('hidden');
    
    if (!username || !email || !password || !confirm) {
        showAuthError('❌ جميع الحقول مطلوبة');
        return;
    }
    
    if (!email.includes('@') || !email.includes('.')) {
        showAuthError('❌ البريد الإلكتروني غير صحيح');
        return;
    }
    
    if (password !== confirm) {
        showAuthError('❌ كلمة المرور غير متطابقة');
        return;
    }
    
    if (password.length < 6) {
        showAuthError('❌ كلمة المرور يجب أن تكون 6 أحرف على الأقل');
        return;
    }
    
    if (usersDB.find(u => u.username === username)) {
        showAuthError('❌ اسم المستخدم موجود بالفعل');
        return;
    }
    
    if (usersDB.find(u => u.email === email)) {
        showAuthError('❌ البريد الإلكتروني مستخدم بالفعل');
        return;
    }
    
    tempRegistration = {
        username,
        email,
        password
    };
    
    generatedVerificationCode = generateVerificationCode();
    
    alert(`🔐 رمز التحقق الخاص بك هو: ${generatedVerificationCode}`);
    
    document.getElementById('registerFields').classList.add('hidden');
    document.getElementById('registerActions').classList.add('hidden');
    document.getElementById('verificationFields').classList.remove('hidden');
    document.getElementById('verificationActions').classList.remove('hidden');
    document.getElementById('authTitle').innerText = 'تأكيد البريد الإلكتروني';
}

function verifyCode() {
    const code = document.getElementById('verificationCode').value.trim();
    const errorDiv = document.getElementById('authError');
    
    errorDiv.classList.add('hidden');
    
    if (!code || code.length !== 4 || isNaN(code)) {
        showAuthError('❌ يرجى إدخال رمز تحقق صحيح مكون من 4 أرقام');
        return;
    }
    
    if (code !== generatedVerificationCode) {
        showAuthError('❌ رمز التحقق غير صحيح');
        return;
    }
    
    if (!tempRegistration) {
        showAuthError('❌ انتهت صلاحية الجلسة، يرجى المحاولة مجدداً');
        resetToRegister();
        return;
    }
    
    usersDB.push({
        username: tempRegistration.username,
        email: tempRegistration.email,
        password: tempRegistration.password
    });
    
    localStorage.setItem('usersDB', JSON.stringify(usersDB));
    
    currentUser = { 
        username: tempRegistration.username,
        email: tempRegistration.email
    };
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    
    tempRegistration = null;
    generatedVerificationCode = null;
    
    closeAuthModal();
    updateUserUI();
    alert(`🎉 مرحباً بك ${currentUser.username}، تم إنشاء حسابك بنجاح!`);
}

function resetToRegister() {
    document.getElementById('verificationFields').classList.add('hidden');
    document.getElementById('verificationActions').classList.add('hidden');
    document.getElementById('registerFields').classList.remove('hidden');
    document.getElementById('registerActions').classList.remove('hidden');
    document.getElementById('authTitle').innerText = 'إنشاء حساب جديد';
    
    tempRegistration = null;
    generatedVerificationCode = null;
}


function showAuthError(msg) {
    const err = document.getElementById('authError');
    err.innerText = msg;
    err.classList.remove('hidden');
}

function logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    updateUserUI();
    alert('👋 تم تسجيل الخروج بنجاح');
    location.reload();
}

function googleSignIn() {
    if (!auth || !provider) {
        alert('خدمة Google غير متاحة حالياً');
        return;
    }
    
    auth.signInWithPopup(provider)
        .then((result) => {
            const user = result.user;
            
            let existingUser = usersDB.find(u => u.email === user.email);
            
            if (!existingUser) {
                const newUser = {
                    username: user.displayName || user.email.split('@')[0],
                    email: user.email,
                    password: 'google-auth-' + Math.random().toString(36),
                    provider: 'google',
                    photoURL: user.photoURL
                };
                
                usersDB.push(newUser);
                localStorage.setItem('usersDB', JSON.stringify(usersDB));
                existingUser = newUser;
            }
            
            currentUser = {
                username: existingUser.username,
                email: existingUser.email,
                photoURL: user.photoURL || existingUser.photoURL,
                provider: 'google'
            };
            
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            
            closeAuthModal();
            updateUserUI();
            
            ageVerificationEnabled = false;
            const ageModal = document.getElementById('ageVerifyModal');
            if (ageModal) ageModal.style.display = 'none';
            
            alert(`👋 مرحباً ${currentUser.username}!`);
        })
        .catch((error) => {
            console.error("خطأ في تسجيل الدخول:", error);
            showAuthError('❌ حدث خطأ في تسجيل الدخول');
        });
}

function generateVerificationCode() {
    return Math.floor(1000 + Math.random() * 9000).toString();
}

// ================ دوال التحقق من العمر ================
function verifyAge() { 
    localStorage.setItem('ageVerified', 'true');
    localStorage.setItem('ageVerifyTimestamp', new Date().getTime());
    document.getElementById('ageVerifyModal').style.display = 'none'; 
}

function handleVisibilityChange() {
    if (document.hidden) {
        pageVisible = false;
        document.getElementById('ageVerifyModal').style.display = 'none';
    } else {
        pageVisible = true;
        lastActivityTime = new Date().getTime();
        setTimeout(() => {
            checkAgeVerification();
        }, 500);
    }
}

function updateUserActivity() {
    lastActivityTime = new Date().getTime();
    userIdle = false;
}

function checkUserActivity() {
    const now = new Date().getTime();
    if (now - lastActivityTime > 120000) {
        userIdle = true;
        document.getElementById('ageVerifyModal').style.display = 'none';
    } else {
        userIdle = false;
    }
}

function checkAgeVerification() {
    if (currentUser) {
        return;
    }
    
    if (!ageVerificationEnabled) return;
    
    if (!pageVisible) {
        return;
    }
    
    checkUserActivity();
    
    if (userIdle) {
        return;
    }
    
    const playWindow = document.getElementById('playWindow');
    if (playWindow && !playWindow.classList.contains('hidden')) {
        return;
    }
    
    const isVerified = localStorage.getItem('ageVerified');
    const lastVerifyTime = localStorage.getItem('ageVerifyTimestamp');
    const now = new Date().getTime();
    
    if (!isVerified || !lastVerifyTime) {
        document.getElementById('ageVerifyModal').style.display = 'flex';
        return;
    }
    
    const tenMinutes = 10 * 60 * 1000;
    
    if (now - parseInt(lastVerifyTime) > tenMinutes) {
        document.getElementById('ageVerifyModal').style.display = 'flex';
    }
}

// ================ أحداث المستخدم ================
document.addEventListener('mousemove', updateUserActivity);
document.addEventListener('keydown', updateUserActivity);
document.addEventListener('click', updateUserActivity);
document.addEventListener('scroll', updateUserActivity);
document.addEventListener('touchstart', updateUserActivity);
document.addEventListener('visibilitychange', handleVisibilityChange);

// ================ دوال القوائم والتبديل ================
function toggleDBList() { 
    const el = document.getElementById('dbList'); 
    if (el) {
        el.style.display = el.style.display === 'block' ? 'none' : 'block';
    }
}

window.addEventListener('click', function(e){   
    const dropdown = document.getElementById('dbList');
    const btn = document.querySelector('.db-switch-btn');
    if (dropdown && btn && !dropdown.contains(e.target) && !btn.contains(e.target)) {
        dropdown.style.display = 'none';
    }
});

function switchSource(key, name) {
    localStorage.setItem('selectedSource', key);
    localStorage.setItem('selectedSourceName', name);
    
    currentSourceKey = key;
    currentSourceName = name;
    dummyData = [...allDBs[key]]; 

    document.getElementById('activeName').innerHTML = t('sectionNames')[key];
    
    const dbList = document.getElementById('dbList');
    if (dbList) dbList.style.display = 'none';

    activeParent = null;
    profileMode = null; 
    currentPage = 1; 
    
    const catTitle = document.getElementById('catTitle');
    if (catTitle) {
        catTitle.innerText = t('sectionTitles')[key] || t('sectionNames')[key];
    }
    
    if (key === 'life') {
        currentType = 'all';
        currentCat = 'all content';
    } else {
        currentType = 'video';
        currentCat = 'all content';
    }

    saveState();
    window.history.pushState({view: 'section', section: key}, "");
    window.scrollTo({ top: 0, behavior: 'smooth' });

    renderMenu(); 
    renderAll();
    updateSubTitle();
    updateFooterStats();
    
    setTimeout(() => {
        renderAdsBelowPagination();
    }, 300);
}

function saveState() {
    localStorage.setItem('selectedType', currentType);
    localStorage.setItem('selectedCat', currentCat);
    localStorage.setItem('activeParent', activeParent || ""); 
}

function renderMenu() {
    var box = document.getElementById('menuBox'); 
    if (!box) return;
    box.innerHTML = "";
    let menuStructure = [];
    
    if(currentSourceKey === 'life') {
        menuStructure = [ 
            { 
                name: t('allContentMenu'), 
                type: 'all',
                cat: 'all content',
                icon: 'https://b.top4top.io/p_3690o1nhv1.png'
            }
        ];
    } else {
        menuStructure = [
            { 
                name: t('videosMenu'), 
                type: 'video', 
                cat: 'all content', 
                icon: 'https://b.top4top.io/p_3690o1nhv1.png'
            },
            { 
                name: t('staticImages'), 
                type: 'image', 
                cat: 'ثابتة', 
                icon: 'https://h.top4top.io/p_3690et83z1.png'
            },
            { 
                name: t('animatedImages'), 
                type: 'image', 
                cat: 'متحركة', 
                icon: 'https://l.top4top.io/p_36909qyxa1.png'
            }
        ];
    }
    
    menuStructure.forEach(m => {
        var d = document.createElement('div');
        
        let isNowActive = false;
        if (currentSourceKey === 'life' && m.type === 'all') {
            isNowActive = true;
        } else {
            isNowActive = (currentType === m.type && currentCat === m.cat);
        }
        
        d.className = "flex items-center gap-4 p-3 px-4 mt-2 cursor-pointer text-base font-bold rounded-xl transition-all duration-300 " + 
                     (isNowActive ? 'active-cat text-white' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800');
        
        d.innerHTML = '<img src="' + m.icon + '" class="w-10 h-10 object-contain transition-transform duration-300 hover:scale-110"> ' +
                     '<span class="flex-1">' + m.name + '</span>';
        
        d.onclick = () => {
            if (currentSourceKey === 'life' && m.type === 'all') {
                currentType = 'all';
                currentCat = 'all content';
            } else {
                currentType = m.type;
                currentCat = m.cat;
            }
            activeParent = null; 
            profileMode = null; 
            currentPage = 1; 
            saveState(); 
            renderMenu();
            renderAll();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
        box.appendChild(d);
    });
    
    updateAllTexts();
}

// ================ دوال البطاقات والمحتوى ================
// ================ دوال البطاقات والمحتوى ================
function createCard(p) {
    if (p.type === 'article') {
        return `
            <div class="mag-item cursor-pointer relative" onclick="openArticle(${p.id})">
                <img src="${p.image}" class="w-full h-40 object-cover" loading="lazy"
   onload="if(this.naturalHeight > this.naturalWidth * 1.2) { 
    this.classList.add('portrait-thumb');
    this.closest('.thumb-wrapper')?.classList.add('portrait-content');
}"
                <div class="mag-overlay">
                    <h3 class="font-bold text-sm">${p.title}</h3>
                </div>
                <div class="absolute top-2 left-2 z-30">
                    <button class="card-menu-btn w-7 h-7 text-lg" onclick="toggleCardMenu(event, ${p.id})">⁝</button>
                    <div id="menu-${p.id}" class="card-menu-dropdown">
                        <div class="card-menu-item ${favorites.includes(p.id) ? 'active' : ''}" 
                             data-id="${p.id}" data-action="fav"
                             onclick="toggleFavFromMenu(event, ${p.id})">
                            <span>❤️</span> ${favorites.includes(p.id) ? 'إزالة من المفضلة' : 'إضافة للمفضلة'}
                        </div>
                        <div class="card-menu-item ${watchLater.includes(p.id) ? 'active' : ''}" 
                             data-id="${p.id}" data-action="watchlater"
                             onclick="toggleWatchLaterFromMenu(event, ${p.id})">
                            <span>⏱️</span> ${watchLater.includes(p.id) ? 'إزالة من المشاهدة لاحقاً' : 'مشاهدة لاحقاً'}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    
    let defaultDuration = '--:--';
    if (p.type === 'video') {
        if (p.contentURL.includes('drive.google.com')) {
            defaultDuration = '05:30';
        } else if (p.contentURL.includes('top4top')) {
            defaultDuration = '03:45';
        }
    }
    
    return `
        <div class="video-card group mb-4 relative" data-video-id="${p.id}" data-video-url="${p.contentURL}" data-video-type="${p.type}">
            <div class="thumb-wrapper relative overflow-hidden rounded-lg bg-zinc-900/40" 
                 style="aspect-ratio: 3/2; border: 1px solid rgba(255,255,255,0.08);"
                 onclick='playVideo(${JSON.stringify(p).replace(/"/g, "&quot;")})'>
                
                <img src="${p.image}" 
                     class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                     alt="${p.title}"
                     loading="lazy"
                     onload="if(this.naturalHeight > this.naturalWidth * 1.2) { 
                         this.classList.add('portrait-thumb');
                         this.closest('.thumb-wrapper')?.classList.add('portrait-content');
                     }"
                     onerror="this.src='https://via.placeholder.com/300x200/333/fff?text=Image';">
                
                ${p.type === 'video' ? 
                    `<span class="video-duration-badge text-[10px] px-2 py-1">
                        <i>⏱️</i> ${p.duration || defaultDuration}
                    </span>` : 
                    `<span class="video-duration-badge text-[10px] px-2 py-1">
                        <i>🖼️</i> ${p.image && p.image.includes('.gif') ? 'GIF' : 'صورة'}
                    </span>`
                }
            </div>
            
            <div class="flex items-center justify-between mt-2 px-1">
                <div class="video-title group-hover:text-pink-500 transition-colors line-clamp-2 text-sm font-bold flex-1" 
                     style="cursor: pointer; line-height: 1.3; text-align: right;"
                     onclick='playVideo(${JSON.stringify(p).replace(/"/g, "&quot;")})'>
                    ${p.title}
                </div>
                
                <div class="relative mr-1">
                    <button class="card-menu-btn w-7 h-7 bg-zinc-800 hover:bg-pink-600 rounded-full flex items-center justify-center text-white text-lg"
                            onclick="toggleCardMenu(event, ${p.id})">
                        ⁝
                    </button>
                    <div id="menu-${p.id}" class="card-menu-dropdown absolute bottom-full mb-2 left-0 w-40 bg-zinc-900 border border-zinc-700 rounded-lg shadow-2xl overflow-hidden z-50 hidden">
                        <div class="card-menu-item ${favorites.includes(p.id) ? 'active' : ''} flex items-center gap-2 p-2 hover:bg-pink-600/30 cursor-pointer transition-colors border-b border-zinc-800 text-xs"
                             data-id="${p.id}" data-action="fav"
                             onclick="toggleFavFromMenu(event, ${p.id})">
                            <span class="text-base">❤️</span>
                            <span class="text-xs font-medium">${favorites.includes(p.id) ? 'إزالة' : 'إضافة للمفضلة'}</span>
                        </div>
                        <div class="card-menu-item ${watchLater.includes(p.id) ? 'active' : ''} flex items-center gap-2 p-2 hover:bg-pink-600/30 cursor-pointer transition-colors text-xs"
                             data-id="${p.id}" data-action="watchlater"
                             onclick="toggleWatchLaterFromMenu(event, ${p.id})">
                            <span class="text-base">⏱️</span>
                            <span class="text-xs font-medium">${watchLater.includes(p.id) ? 'إزالة' : 'مشاهدة لاحقاً'}</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="flex items-center justify-start mt-1 px-1">
                <span class="text-[8px] text-gray-400 bg-zinc-800/60 px-2 py-0.5 rounded-full">${p.labels || (p.type === 'video' ? 'فيديو' : 'صورة')}</span>
            </div>
        </div>
    `;
}

// ================ دوال المشغل ================
function playVideo(p) {
    scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    
    window.history.pushState({view: 'player', videoId: p.id}, "");
    
    currentPlayingId = p.id;
    localStorage.setItem('currentPlayingId', p.id);

    const win = document.getElementById('playWindow');
    const vArea = document.getElementById('vArea');
    
    win.classList.remove('hidden');
    win.style.display = 'block'; 
    document.body.style.overflow = 'hidden'; 
    
    win.setAttribute('dir', 'rtl');
    
    document.getElementById('vTitle').innerText = p.title;
    
    const oldActions = document.querySelector('.action-buttons-container');
    if (oldActions) oldActions.remove();

    const vTitleElement = document.getElementById('vTitle');
    const actionsContainer = document.createElement('div');
    actionsContainer.className = 'action-buttons-container';
    
    actionsContainer.innerHTML = `
        <button class="action-btn fav-action-btn ${favorites.includes(p.id) ? 'active' : ''}" 
                onclick="toggleFavFromPlayer(event, ${p.id})">
            <i>❤️</i> ${favorites.includes(p.id) ? 'تم الحفظ' : 'إضافة للمفضلة'}
        </button>
        
        <button class="action-btn like-action-btn ${likes.includes(p.id) ? 'active' : ''}" 
                onclick="toggleLike(event, ${p.id})">
            <i>👍</i> ${likes.includes(p.id) ? 'معجب' + ` <span class="count">${likesCount[p.id] || 1}</span>` : 'إعجاب'}
        </button>
        
        <button class="action-btn dislike-action-btn ${dislikes.includes(p.id) ? 'active' : ''}" 
                onclick="toggleDislike(event, ${p.id})">
            <i>👎</i> ${dislikes.includes(p.id) ? 'غير معجب' : 'عدم إعجاب'}
        </button>
        
        <button class="action-btn watch-later-btn ${watchLater.includes(p.id) ? 'active' : ''}" 
                onclick="toggleWatchLater(event, ${p.id})">
            <i>⏱️</i> ${watchLater.includes(p.id) ? 'تم الحفظ' : 'مشاهدة لاحقاً'}
        </button>
        
        <button class="action-btn share-btn" 
                onclick="shareVideo(event, ${p.id}, '${p.title.replace(/'/g, "\\'")}')">
            <i>📤</i> مشاركة
        </button>
    `;
    
    vTitleElement.parentNode.insertBefore(actionsContainer, vTitleElement.nextSibling);
    
    vArea.innerHTML = '';
    vArea.classList.remove('portrait-media', 'landscape-media');
    
    if (p.type === 'video') {
        if (p.contentURL.includes('drive.google.com')) {
            vArea.innerHTML = `<iframe class="mainVideo absolute inset-0 w-full h-full" src="${p.contentURL}" frameborder="0" allowfullscreen></iframe>`;
            vArea.classList.add('landscape-media');
        } else if (p.contentURL.includes('.mp4')) {
            vArea.innerHTML = `
                <video class="mainVideo absolute inset-0 w-full h-full" controls autoplay style="object-fit: contain;">
                    <source src="${p.contentURL}" type="video/mp4">
                </video>
            `;
        } else {
            vArea.innerHTML = `<iframe class="mainVideo absolute inset-0 w-full h-full" src="${p.contentURL}" frameborder="0" allowfullscreen></iframe>`;
            vArea.classList.add('landscape-media');
        }
    } else if (p.type === 'image') {
        vArea.innerHTML = `<img src="${p.contentURL}" class="player-image" alt="${p.title}" style="max-width:100%; max-height:100%; width:auto; height:auto; object-fit:contain; margin:0 auto;">`;
        vArea.classList.add('image-mode');
    }
    
    updateSideSuggestions();
    updateRecSuggestions();
    updatePlayerStats();
    updatePlayerFooterStats();
    updateFooterStats();
}
function restoreFinalState() {
    try {
        const saved = localStorage.getItem('porniq_state');
        if (!saved) return false;
        
        const state = JSON.parse(saved);
        
        // استعادة القسم
        if (state.section && allDBs[state.section]) {
            currentSourceKey = state.section;
            currentSourceName = state.sectionName || 'الزواج';
            dummyData = [...allDBs[currentSourceKey]];
        }
        
        // استعادة الصفحة والنوع
        if (state.page) currentPage = state.page;
        if (state.type) currentType = state.type;
        if (state.cat) currentCat = state.cat;
        if (state.profile !== null) profileMode = state.profile;
        
        // استعادة الفيديو
        if (state.video) {
            currentPlayingId = state.video;
            localStorage.setItem('currentPlayingId', state.video);
        }
        
        // تحديث الواجهة
        renderMenu();
        renderAll();
        updateSubTitle();
        
        return true;
    } catch(e) {
        return false;
    }
}
function toggleFavFromPlayer(event, id) {
    event.stopPropagation();
    const idx = favorites.indexOf(id);
    idx > -1 ? favorites.splice(idx, 1) : favorites.push(id);
    localStorage.setItem('myFavs', JSON.stringify(favorites));
    updatePlayerButtons(id);
}

function toggleLike(event, id) {
    event.stopPropagation();
    const idx = likes.indexOf(id);
    
    if (idx > -1) {
        likes.splice(idx, 1);
        if (likesCount[id]) {
            likesCount[id] = Math.max(0, (likesCount[id] || 1) - 1);
        }
    } else {
        likes.push(id);
        likesCount[id] = (likesCount[id] || 0) + 1;
        
        const dislikeIdx = dislikes.indexOf(id);
        if (dislikeIdx > -1) {
            dislikes.splice(dislikeIdx, 1);
            localStorage.setItem('myDislikes', JSON.stringify(dislikes));
        }
    }
    
    localStorage.setItem('myLikes', JSON.stringify(likes));
    localStorage.setItem('likesCount', JSON.stringify(likesCount));
    updatePlayerButtons(id);
}

function toggleDislike(event, id) {
    event.stopPropagation();
    
    const likeIdx = likes.indexOf(id);
    if (likeIdx > -1) {
        likes.splice(likeIdx, 1);
        if (likesCount[id]) {
            likesCount[id] = Math.max(0, (likesCount[id] || 1) - 1);
        }
        localStorage.setItem('myLikes', JSON.stringify(likes));
        localStorage.setItem('likesCount', JSON.stringify(likesCount));
    }
    
    const idx = dislikes.indexOf(id);
    idx > -1 ? dislikes.splice(idx, 1) : dislikes.push(id);
    localStorage.setItem('myDislikes', JSON.stringify(dislikes));
    updatePlayerButtons(id);
}

function toggleWatchLater(event, id) {
    event.stopPropagation();
    const idx = watchLater.indexOf(id);
    idx > -1 ? watchLater.splice(idx, 1) : watchLater.push(id);
    localStorage.setItem('myWatchLater', JSON.stringify(watchLater));
    updatePlayerButtons(id);
}

function shareVideo(event, id, title) {
    event.stopPropagation();
    const dummyLink = `https://myplatform.com/video/${id}`;
    navigator.clipboard.writeText(dummyLink).then(() => {
        const btn = event.currentTarget;
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i>✓</i> تم النسخ';
        btn.style.background = '#10b981';
        
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.background = '#2563eb';
        }, 2000);
    });
}

function updatePlayerButtons(id) {
    const container = document.querySelector('.action-buttons-container');
    if (!container) return;
    
    const favBtn = container.querySelector('.fav-action-btn');
    if (favBtn) {
        const isFav = favorites.includes(id);
        favBtn.classList.toggle('active', isFav);
        favBtn.innerHTML = isFav ? 
            '<i>❤️</i> تم الحفظ' : 
            '<i>❤️</i> إضافة للمفضلة';
    }
    
    const likeBtn = container.querySelector('.like-action-btn');
    if (likeBtn) {
        const isLike = likes.includes(id);
        likeBtn.classList.toggle('active', isLike);
        likeBtn.innerHTML = isLike ? 
            `<i>👍</i> معجب <span class="count">${likesCount[id] || 1}</span>` : 
            '<i>👍</i> إعجاب';
    }
    
    const dislikeBtn = container.querySelector('.dislike-action-btn');
    if (dislikeBtn) {
        const isDislike = dislikes.includes(id);
        dislikeBtn.classList.toggle('active', isDislike);
        dislikeBtn.innerHTML = isDislike ? 
            '<i>👎</i> غير معجب' : 
            '<i>👎</i> عدم إعجاب';
    }
    
    const watchLaterBtn = container.querySelector('.watch-later-btn');
    if (watchLaterBtn) {
        const isWatchLater = watchLater.includes(id);
        watchLaterBtn.classList.toggle('active', isWatchLater);
        watchLaterBtn.innerHTML = isWatchLater ? 
            '<i>⏱️</i> تم الحفظ' : 
            '<i>⏱️</i> مشاهدة لاحقاً';
    }
}

function closePlayer() {
    var savedPosition = scrollPosition || window.pageYOffset;
    
    localStorage.removeItem('currentPlayingId');
    currentPlayingId = null;

    const win = document.getElementById('playWindow');
    win.classList.add('hidden');
    win.style.display = 'none';
    
    document.getElementById('vArea').innerHTML = '';
    
    const actionsContainer = document.querySelector('.action-buttons-container');
    if (actionsContainer) actionsContainer.remove();
    
    document.body.style.overflow = 'auto';
    
    if(window.history.state && window.history.state.view === 'player') {
        window.history.back();
    } else {
        setTimeout(() => {
            window.scrollTo({
                top: savedPosition,
                behavior: 'smooth'
            });
        }, 100);
    }
}

// ================ دوال الاقتراحات ================
// تعديل دالة updateRecSuggestions لتصغير حجم الاقتراحات
// تعديل دالة updateRecSuggestions لتصغير حجم الاقتراحات تحت الفيديو
// تعديل دالة updateRecSuggestions لتصغير حجم الاقتراحات تحت الفيديو
function updateRecSuggestions() {
    const recContainer = document.getElementById('recBox');
    if (!recContainer || typeof dummyData === 'undefined') return;

    let dataSource = [...dummyData];
    
    if (currentSourceKey === 'life') {
        dataSource = dataSource.filter(item => item.type === 'article');
    } else {
        const currentItem = dummyData.find(i => i.id === currentPlayingId);
        if (currentItem) {
            dataSource = dataSource.filter(item => item.type === currentItem.type);
        }
    }

    if (currentPlayingId) {
        dataSource = dataSource.filter(item => item.id != currentPlayingId);
    }

    const shuffled = dataSource.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 6);

    if (selected.length === 0) {
        recContainer.innerHTML = '<div class="col-span-full text-center text-gray-500 py-4 text-sm">لا توجد اقتراحات متاحة</div>';
        return;
    }

    recContainer.innerHTML = selected.map(item => {
        const thumbImage = item.image || 'https://via.placeholder.com/200x120/333/fff?text=Video';
        
        return `
        <div class="suggestion-item cursor-pointer group" onclick='playVideo(${JSON.stringify(item).replace(/"/g, "&quot;")})'>
            <div class="relative rounded-xl overflow-hidden bg-zinc-900 mb-1 border border-zinc-800 group-hover:border-pink-500 transition-all" 
                 style="aspect-ratio: 16/9; width: 100%;">
                <img src="${thumbImage}" 
                     alt="${item.title}"
                     class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                     loading="lazy"
                     onload="if(this.naturalHeight > this.naturalWidth * 1.2) this.classList.add('portrait-thumb');"
                     onerror="this.src='https://via.placeholder.com/200x120/333/fff?text=Video';">
                ${item.type === 'video' ? 
                    `<span class="absolute bottom-1 right-1 bg-black/90 text-white text-[10px] px-2 py-0.5 rounded-md border border-white/20">
                        ⏱️ ${item.duration || '03:45'}
                    </span>` : 
                    `<span class="absolute bottom-1 right-1 bg-black/90 text-white text-[10px] px-2 py-0.5 rounded-md border border-white/20">
                        🖼️ ${item.image && item.image.includes('.gif') ? 'GIF' : 'صورة'}
                    </span>`
                }
            </div>
            <h4 class="text-xs font-medium text-gray-300 line-clamp-2 group-hover:text-pink-400 transition-colors">
                ${item.title}
            </h4>
        </div>
    `}).join('');
}
// إضافة زر استعادة يدوي
function restoreFinalState() {
    try {
        const saved = localStorage.getItem('porniq_state');
        if (!saved) return false;
        
        const state = JSON.parse(saved);
        
        // استعادة القسم
        if (state.section && allDBs[state.section]) {
            currentSourceKey = state.section;
            currentSourceName = state.sectionName || 'الزواج';
            dummyData = [...allDBs[currentSourceKey]];
        }
        
        // استعادة الصفحة والنوع
        if (state.page) currentPage = state.page;
        if (state.type) currentType = state.type;
        if (state.cat) currentCat = state.cat;
        if (state.profile !== null) profileMode = state.profile;
        
        // استعادة الفيديو
        if (state.video) {
            currentPlayingId = state.video;
            localStorage.setItem('currentPlayingId', state.video);
        }
        
        // تحديث الواجهة
        renderMenu();
        renderAll();
        updateSubTitle();
        
        return true;
    } catch(e) {
        return false;
    }
}
// تعديل دالة updateSideSuggestions لتصغير الحجم
function updateSideSuggestions() {
    const sideContainer = document.getElementById('sideVerticalList');
    if (!sideContainer || typeof dummyData === 'undefined') return;

    let dataSource = [...dummyData];
    
    if (currentSourceKey === 'life') {
        dataSource = dataSource.filter(item => item.type === 'article');
    } else {
        const currentItem = dummyData.find(i => i.id === currentPlayingId);
        if (currentItem) {
            dataSource = dataSource.filter(item => item.type === currentItem.type);
        }
    }

    const shuffled = dataSource.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 4);

    sideContainer.innerHTML = selected.map(item => {
        const thumbImage = item.image || 'https://via.placeholder.com/120x80/333/fff?text=Video';
        
        return `
        <div class="flex items-center cursor-pointer group hover:bg-zinc-800/70 transition-all border border-transparent hover:border-pink-500/30"
             onclick='playVideo(${JSON.stringify(item).replace(/"/g, "&quot;")})'>
            <div class="w-16 h-12 bg-zinc-900 rounded-md overflow-hidden flex-shrink-0 border border-zinc-800 group-hover:border-pink-500 transition-all">
                <img src="${thumbImage}" 
                     alt="${item.title}"
                     class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                     loading="lazy"
                     onload="if(this.naturalHeight > this.naturalWidth * 1.2) this.classList.add('portrait-thumb');"
                     onerror="this.src='https://via.placeholder.com/120x80/333/fff?text=Video';">
            </div>
            <div class="flex-1 min-w-0">
                <h4 class="text-xs font-medium text-gray-200 line-clamp-2 group-hover:text-pink-500">
                    ${item.title}
                </h4>
                <span class="text-[9px] text-pink-500">${item.labels || (item.type === 'video' ? 'فيديو' : 'صورة')}</span>
            </div>
        </div>
    `}).join('');
}
// ================ دوال الإعلانات ================

// ================ دوال العرض الرئيسية ================
function renderAll() {
    const grid = document.getElementById('gridBox');
    if (!grid) return;
    
    const q = document.getElementById('searchBox').value.toLowerCase();

    // تصفية البيانات
    let filtered = (dummyData || []).filter(p => {
        if (currentSourceKey === 'life') {
            if (currentType === 'all') {
                return p.type === 'article' && p.title.toLowerCase().includes(q);
            } else {
                return p.type === currentType && p.title.toLowerCase().includes(q);
            }
        }
        
        if (profileMode === 'fav') return favorites.includes(p.id);
        if (profileMode === 'like') return likes.includes(p.id);
        if (profileMode === 'watchlater') return watchLater.includes(p.id);
        
        if (currentType === 'video') {
            return p.type === 'video' && p.title.toLowerCase().includes(q);
        } else if (currentType === 'image') {
            return p.type === 'image' && p.title.toLowerCase().includes(q);
        }
        
        return false;
    });
    
    // تقسيم الصفحات
    const paginated = filtered.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
    
    // بناء مصفوفة مختلطة
    let mixedItems = paginated.map(p => ({ isAd: false, data: p }));
    
    // إضافة الإعلانات داخل الشبكة
    if (mixedItems.length > 4) {
        for(let i=0; i<2; i++) {
            let pos = Math.floor(Math.random() * mixedItems.length);
            mixedItems.splice(pos, 0, { isAd: true, data: getRandomAd() });
        }
    }
// إضافة عناصر وهمية لملء الفراغات وجعل الشبكة متساوية
const totalItems = mixedItems.length;
const targetItemsPerRow = window.innerWidth >= 1024 ? 3 : 2;
const remainder = totalItems % targetItemsPerRow;

if (remainder !== 0 && totalItems > 0) {
    const itemsToAdd = targetItemsPerRow - remainder;
    for (let i = 0; i < itemsToAdd && i < 3; i++) {
        // إضافة عنصر وهمي (فيديو أو صورة) لملء الفراغ
        mixedItems.push({
            isAd: false,
            data: {
                id: `dummy-${Date.now()}-${i}`,
                type: 'video',
                title: 'محتوى إضافي',
                image: 'https://l.top4top.io/p_3702uwnur1.png',
                contentURL: 'https://d.top4top.io/m_36805y6jr1.mp4',
                labels: 'مميز',
                duration: '05:00'
            }
        });
    }
}
    // بناء الـ HTML النهائي للشبكة
    grid.innerHTML = mixedItems.map(item => {
        if (!item.isAd) {
            return `<div class="flex flex-col">${createCard(item.data)}</div>`;
        } else {
            const ad = item.data;
            let imageUrl = ad.url;
            let adLink = ad.link;
            let adTitle = ad.title || 'إعلان';
            
       if (ad.type === 'video') {
    return `
        <div class="rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900/50 group relative h-fit">
            <a href="${adLink}" target="_blank" class="block">
                <div class="relative bg-black" style="aspect-ratio: 16/9;">
                    <video class="w-full h-full object-cover" autoplay muted loop playsinline>
                        <source src="${imageUrl}" type="video/mp4">
                    </video>
                    <!-- تم إزالة شارة الإعلان من داخل الصورة -->
                </div>
                <div class="p-3 text-center">
                    <div class="text-[10px] font-bold text-gray-400">${adTitle}</div>
                    <div class="text-[8px] text-pink-500/70 mt-1">📢 إعلان</div>
                </div>
            </a>
        </div>`;
} else if (ad.type === 'gif') {
    return `
        <div class="rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900/50 group relative h-fit">
            <a href="${adLink}" target="_blank" class="block">
                <div class="relative bg-black" style="aspect-ratio: 16/9;">
                    <img src="${imageUrl}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="${adTitle}">
                    <!-- تم إزالة شارة الإعلان من داخل الصورة -->
                </div>
                <div class="p-3 text-center">
                    <div class="text-[10px] font-bold text-gray-400">${adTitle}</div>
                    <div class="text-[8px] text-pink-500/70 mt-1">📢 إعلان</div>
                </div>
            </a>
        </div>`;
} else {
    return `
        <div class="rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900/50 group relative h-fit">
            <a href="${adLink}" target="_blank" class="block">
                <div class="relative bg-black" style="aspect-ratio: 16/9;">
                    <img src="${imageUrl}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="${adTitle}">
                    <!-- تم إزالة شارة الإعلان من داخل الصورة -->
                </div>
                <div class="p-3 text-center">
                    <div class="text-[10px] font-bold text-gray-400">${adTitle}</div>
                    <div class="text-[8px] text-pink-500/70 mt-1">📢 إعلان</div>
                </div>
            </a>
        </div>`;

            }
        }
    }).join('');

    renderSideAds();
    renderPagination(filtered.length);
    
    setTimeout(() => {
        renderAdsBelowPagination();
    }, 100);
}

function toggleProfileMode(mode) { 
    profileMode = (profileMode === mode) ? null : mode; 
    currentPage = 1; 
    renderAll(); 
    renderMenu(); 
    
    const catTitle = document.getElementById('catTitle');
    if (profileMode === 'fav') catTitle.innerText = t('favTitle');
    else if (profileMode === 'like') catTitle.innerText = t('likeTitle');
    else if (profileMode === 'watchlater') catTitle.innerText = t('watchLaterTitle');
    else catTitle.innerText = t('sectionTitles')[currentSourceKey] || t('sectionNames')[currentSourceKey];
    
    setTimeout(() => {
        renderAdsBelowPagination();
    }, 200);
}

function renderPagination(totalItems) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const container = document.getElementById('paginationBox');
    if (!container) return;
    
    container.innerHTML = '';
    if (totalPages <= 1) return;

    let html = "";

    if (currentPage > 1) {
        html += `<button onclick="goToPage(${currentPage - 1})" class="pagination-btn">السابق</button>`;
    }

    for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
            const activeClass = i === currentPage ? 'active' : '';
            html += `<button onclick="goToPage(${i})" class="pagination-btn ${activeClass}">${i}</button>`;
        } 
        else if (i === currentPage - 2 || i === currentPage + 2) {
            html += `<span class="text-zinc-600 px-1">...</span>`;
        }
    }

    if (currentPage < totalPages) {
        html += `<button onclick="goToPage(${currentPage + 1})" class="pagination-btn">التالي</button>`;
    }

    container.innerHTML = html;
}

function goToPage(page) {
    currentPage = page;
    renderAll();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    setTimeout(() => {
        renderAdsBelowPagination();
    }, 200);
}

// ================ دوال المقالات ================
function openArticle(articleId) {
    scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    
    const article = dummyData.find(item => item.id === articleId);
    if (!article) return;

    window.history.pushState({view: 'article', articleId: articleId}, "");
    document.getElementById('artTitle').innerText = article.title;
    
    let contentHtml = article.blocks.map(b => `<div class="mb-6">${b.content}</div>`).join('');
    
    let relatedArticles = dummyData
        .filter(item => item.type === 'article' && item.id !== articleId)
        .slice(0, 4);

    if (relatedArticles.length > 0) {
        contentHtml += `
            <div class="mt-12 pt-8 border-t border-zinc-800">
                <h3 class="text-2xl font-bold text-pink-500 mb-6">${t('relatedTopics')}</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    ${relatedArticles.map(ra => `
                        <div class="flex gap-4 p-3 bg-zinc-900 rounded-xl cursor-pointer hover:bg-zinc-800 transition-all" onclick="openArticle(${ra.id})">
                            <img src="${ra.image}" class="w-24 h-24 object-cover rounded-lg" onerror="this.src='https://via.placeholder.com/96x96/333/fff?text=Article'">
                            <div class="font-bold text-sm">${ra.title}</div>
                        </div>
                    `).join('')}
                </div>
            </div>`;
    }

    document.getElementById('artBody').innerHTML = contentHtml;
    document.getElementById('articleView').style.display = 'block';
    window.scrollTo(0, 0);
}

function closeArticle() { 
    document.getElementById('articleView').style.display = 'none'; 
    
    setTimeout(() => {
        window.scrollTo({
            top: scrollPosition || 0,
            behavior: 'smooth'
        });
    }, 100);
    
    if(window.history.state && window.history.state.view === 'article') {
        window.history.back();
    }
}

// ================ دوال القائمة المنبثقة ================
function toggleCardMenu(event, itemId) {
    event.stopPropagation();
    
    document.querySelectorAll('.card-menu-dropdown').forEach(menu => {
        if (menu.id !== `menu-${itemId}`) {
            menu.classList.remove('show');
        }
    });
    
    const menu = document.getElementById(`menu-${itemId}`);
    if (menu) menu.classList.toggle('show');
}

// إغلاق القوائم عند النقر خارجها
document.addEventListener('click', function(e) {
    if (!e.target.closest('.card-menu-btn') && !e.target.closest('.card-menu-dropdown')) {
        document.querySelectorAll('.card-menu-dropdown').forEach(menu => {
            menu.classList.remove('show');
        });
    }
});

// إغلاق القوائم عند التمرير
window.addEventListener('scroll', function() {
    document.querySelectorAll('.card-menu-dropdown.show').forEach(menu => {
        menu.classList.remove('show');
    });
}, { passive: true });

function toggleFavFromMenu(event, id) {
    event.stopPropagation();
    const idx = favorites.indexOf(id);
    idx > -1 ? favorites.splice(idx, 1) : favorites.push(id);
    localStorage.setItem('myFavs', JSON.stringify(favorites));
    
    const menuItem = document.querySelector(`.card-menu-item[data-id="${id}"][data-action="fav"]`);
    if (menuItem) {
        menuItem.classList.toggle('active', favorites.includes(id));
        const spans = menuItem.querySelectorAll('span');
        if (spans.length >= 2) {
            spans[1].innerHTML = favorites.includes(id) ? 'إزالة من المفضلة' : 'إضافة للمفضلة';
        }
    }
    
    const menu = document.getElementById(`menu-${id}`);
    if (menu) menu.classList.remove('show');
}

function toggleWatchLaterFromMenu(event, id) {
    event.stopPropagation();
    const idx = watchLater.indexOf(id);
    idx > -1 ? watchLater.splice(idx, 1) : watchLater.push(id);
    localStorage.setItem('myWatchLater', JSON.stringify(watchLater));
    
    const menuItem = document.querySelector(`.card-menu-item[data-id="${id}"][data-action="watchlater"]`);
    if (menuItem) {
        menuItem.classList.toggle('active', watchLater.includes(id));
        const spans = menuItem.querySelectorAll('span');
        if (spans.length >= 2) {
            spans[1].innerHTML = watchLater.includes(id) ? 'إزالة من المشاهدة لاحقاً' : 'مشاهدة لاحقاً';
        }
    }
    
    const menu = document.getElementById(`menu-${id}`);
    if (menu) menu.classList.remove('show');
}

// ================ دوال الإحصائيات ================
function updateStats() {
    if (!dummyData) return;
    const videos = dummyData.filter(item => item.type === 'video').length;
    const images = dummyData.filter(item => item.type === 'image').length;
    const articles = dummyData.filter(item => item.type === 'article').length;
    
    const videosEl = document.getElementById('videosCount');
    const imagesEl = document.getElementById('imagesCount');
    const articlesEl = document.getElementById('articlesCount');
    
    if (videosEl) videosEl.innerHTML = `📹 ${videos} ${t('videos')}`;
    if (imagesEl) imagesEl.innerHTML = `🖼️ ${images} ${t('images')}`;
    if (articlesEl) articlesEl.innerHTML = `📄 ${articles} ${t('articles')}`;
}

function updateFooterStats() {
    const videos = dummyData.filter(item => item.type === 'video').length;
    const images = dummyData.filter(item => item.type === 'image').length;
    const articles = dummyData.filter(item => item.type === 'article').length;

    document.querySelectorAll('.footer-videos-count').forEach(el => el.innerText = videos);
    document.querySelectorAll('.footer-images-count').forEach(el => el.innerText = images);
    document.querySelectorAll('.footer-articles-count').forEach(el => el.innerText = articles);
}

function updatePlayerStats() {
    // يمكن إضافة إحصائيات المشغل هنا إذا لزم الأمر
}

function updatePlayerFooterStats() {
    // يمكن إضافة إحصائيات فوتر المشغل هنا إذا لزم الأمر
}

// ================ دوال البحث ================
function doSearch() { 
    currentPage = 1; 
    renderAll(); 
}

// ================ دوال مدة الفيديو ================
function getVideoDuration(url) {
    return new Promise((resolve) => {
        if (url.includes('drive.google.com')) {
            resolve("05:30");
            return;
        }
        
        const video = document.createElement('video');
        video.preload = 'metadata';
        video.crossOrigin = 'anonymous';
        
        const timeout = setTimeout(() => {
            resolve("03:45");
        }, 3000);
        
        video.onloadedmetadata = function() {
            clearTimeout(timeout);
            const seconds = video.duration;
            if (isFinite(seconds) && seconds > 0) {
                const minutes = Math.floor(seconds / 60);
                const remainingSeconds = Math.floor(seconds % 60);
                const duration = `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
                URL.revokeObjectURL(video.src);
                resolve(duration);
            } else {
                resolve("03:45");
            }
        };
        
        video.onerror = function() {
            clearTimeout(timeout);
            resolve("03:45");
        };
        
        video.src = url;
    });
}

async function updateVideoDurations() {
    console.log('جاري تحديث مدة الفيديوهات...');
    const videoCards = document.querySelectorAll('.video-card[data-video-type="video"]');
    
    for (const card of videoCards) {
        const videoId = card.dataset.videoId;
        const videoUrl = card.dataset.videoUrl;
        const durationBadge = document.getElementById(`duration-${videoId}`);
        
        if (durationBadge && durationBadge.innerHTML.includes('--:--')) {
            try {
                const duration = await getVideoDuration(videoUrl);
                durationBadge.innerHTML = `<i>⏱️</i> ${duration}`;
                console.log(`تم تحديث مدة الفيديو ${videoId}: ${duration}`);
            } catch (e) {
                console.log('خطأ في تحديث مدة الفيديو', videoId);
            }
        }
    }
}

// ================ دوال التنقل في الفوتر ================
function goToVideos() {
    if (currentSourceKey === 'life') {
        switchSource('zaj', 'الزواج');
    }
    currentType = 'video';
    currentCat = 'all content';
    profileMode = null;
    currentPage = 1;
    saveState();
    renderMenu();
    renderAll();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goToImages() {
    if (currentSourceKey === 'life') {
        switchSource('zaj', 'الزواج');
    }
    currentType = 'image';
    currentCat = 'all content';
    profileMode = null;
    currentPage = 1;
    saveState();
    renderMenu();
    renderAll();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goToArticles() {
    if (currentSourceKey !== 'life') {
        switchSource('life', 'الحياة الزوجية');
    }
    currentType = 'all';
    currentCat = 'all content';
    profileMode = null;
    currentPage = 1;
    saveState();
    renderMenu();
    renderAll();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goToPopular() {
    if (currentSourceKey === 'life') {
        switchSource('zaj', 'الزواج');
    }
    currentType = 'video';
    currentCat = 'all content';
    profileMode = null;
    currentPage = 1;
    saveState();
    renderMenu();
    renderAll();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ================ دوال الإعلانات تحت الترقيم ================
// ================ دوال الإعلانات تحت الترقيم ================
function renderAdsBelowPagination() {
    const paginationBox = document.getElementById('paginationBox');
    if (!paginationBox) return;
    
    let adsContainer = document.getElementById('adsBelowPagination');
    if (!adsContainer) {
        adsContainer = document.createElement('div');
        adsContainer.id = 'adsBelowPagination';
        adsContainer.className = 'mt-6 mb-4';
        paginationBox.parentNode.insertBefore(adsContainer, paginationBox.nextSibling);
    }
    
    // اختيار 3 إعلانات مربعة بشكل عشوائي
    const selectedAds = getRandomPaginationSquareAds(3);
    
    // إنشاء شبكة من 3 إعلانات مربعة
    let html = `
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
            ${selectedAds.map(ad => `
                <div class="bg-zinc-900/50 rounded-lg overflow-hidden border border-zinc-800 hover:border-pink-500 transition-all group">
                    <a href="${ad.link}" target="_blank" class="block">
                        <div class="relative bg-black" style="aspect-ratio: 16/9; display: flex; align-items: center; justify-content: center; overflow: hidden;">
                            <img src="${ad.image}" 
                                 style="width: 100%; height: 100%; object-fit: contain; background: black;"
                                 alt="${ad.title}"
                                 onerror="this.src='${siteAds.paginationSquareAds[0].image}';">
                        </div>
                    </a>
                </div>
            `).join('')}
        </div>
    `;
    
    adsContainer.innerHTML = html;
}
// ================ دوال تحسين عرض الصور ================
function optimizeImageDisplay() {
    const vArea = document.getElementById('vArea');
    if (vArea) {
        const images = vArea.querySelectorAll('img');
        images.forEach(img => {
            if (img.complete) {
                const isPortrait = img.naturalHeight > img.naturalWidth;
                vArea.classList.toggle('portrait-media', isPortrait);
                vArea.classList.toggle('landscape-media', !isPortrait);
            } else {
                img.onload = function() {
                    const isPortrait = this.naturalHeight > this.naturalWidth;
                    vArea.classList.toggle('portrait-media', isPortrait);
                    vArea.classList.toggle('landscape-media', !isPortrait);
                };
            }
        });
    }
}

// ================ أحداث التاريخ ================
window.onpopstate = function(event) {
    const playWindow = document.getElementById('playWindow');
    const articleView = document.getElementById('articleView');
    
    if (playWindow && (playWindow.style.display === 'block' || playWindow.style.display === 'flex' || !playWindow.classList.contains('hidden'))) {
        playWindow.classList.add('hidden');
        playWindow.style.display = 'none';
        document.getElementById('vArea').innerHTML = '';
        document.body.style.overflow = 'auto';
        
        setTimeout(() => {
            window.scrollTo({
                top: scrollPosition || 0,
                behavior: 'smooth'
            });
        }, 50);
        return false;
    }
    
    if (articleView && articleView.style.display === 'block') {
        articleView.style.display = 'none';
        
        setTimeout(() => {
            window.scrollTo({
                top: scrollPosition || 0,
                behavior: 'smooth'
            });
        }, 50);
        return false;
    }
};
// ================ أحداث تحميل الصفحة ================
window.onload = () => {
    // تحديث واجهة المستخدم
    updateUserUI();
    
    // التحقق من المستخدم
    if (currentUser) {
        ageVerificationEnabled = false;
        const modal = document.getElementById('ageVerifyModal');
        if (modal) modal.style.display = 'none';
    } else {
        ageVerificationEnabled = true;
    }
     
    updateFooterStats();
    updateUserActivity();
    
    // التحقق من العمر
    checkAgeVerification();

    // استعادة القسم المحفوظ
    const savedSource = localStorage.getItem('selectedSource');
    const savedSourceName = localStorage.getItem('selectedSourceName');
    
    if (savedSource && allDBs[savedSource]) {
        currentSourceKey = savedSource;
        currentSourceName = savedSourceName || 'الزواج';
        dummyData = [...allDBs[savedSource]];
    } else {
        currentSourceKey = 'zaj';
        currentSourceName = 'الزواج';
        dummyData = [...allDBs['zaj']];
        localStorage.setItem('selectedSource', 'zaj');
        localStorage.setItem('selectedSourceName', 'الزواج');
    }

    const activeNameEl = document.getElementById('activeName');
    if(activeNameEl && currentSourceKey) {
        activeNameEl.innerHTML = t('sectionNames')[currentSourceKey];
    }

    // تحديث عنوان الصفحة
    const catTitle = document.getElementById('catTitle');
    if (catTitle) {
        catTitle.innerText = t('sectionTitles')[currentSourceKey] || t('sectionNames')[currentSourceKey];
    }

    renderMenu(); 
    renderAll();
    updateSubTitle();

    // استعادة الفيديو المحفوظ
    const savedPlayingId = localStorage.getItem('currentPlayingId');
    if (savedPlayingId) {
        currentPlayingId = savedPlayingId;
        try {
            const itemToPlay = dummyData.find(i => i.id == currentPlayingId);
            if (itemToPlay) {
                document.getElementById('playWindow').classList.remove('hidden');
                playVideo(itemToPlay);
            } else {
                localStorage.removeItem('currentPlayingId');
            }
        } catch(e) {
            console.error("Error restoring video:", e);
        }
    }

    // استعادة الوضع الليلي
    if(localStorage.getItem('darkMode') === 'true'){
        document.body.classList.add('dark-mode');
    }
    
    // تحديث مدة الفيديوهات
    setTimeout(updateVideoDurations, 1000);
    
    // التحقق من نشاط المستخدم كل 10 ثواني
    setInterval(checkUserActivity, 10000);
    
    // التحقق من العمر كل دقيقة
    setInterval(checkAgeVerification, 60000);
    
    setTimeout(() => {
        renderAdsBelowPagination();
    }, 500);
    
    // تهيئة التاريخ
    history.replaceState({view: 'home'}, "");
    
    // تحديث نص زر اللغة
    document.getElementById('langBtn').innerHTML = currentLang === 'ar' ? '🌐 AR' : '🌐 EN';
};

// ================ أحداث إضافية ================
document.addEventListener('DOMContentLoaded', function() {
    // تحديث النصوص
    updateAllTexts();
});

// دالة handleBackAction (إذا كانت مستخدمة في مكان ما)
function handleBackAction() {
    document.getElementById('playWindow').style.display = 'none';
    document.getElementById('playWindow').classList.add('hidden');
    document.getElementById('vArea').innerHTML = "";
    document.getElementById('recBox').innerHTML = "";
    
    setTimeout(() => {
        window.scrollTo({
            top: scrollPosition || 0,
            behavior: 'smooth'
        });
    }, 100);
}

// دوال إضافية مطلوبة
function toggleAction(event, type, id) {
    event.stopPropagation();
    let list = (type === 'fav') ? favorites : likes;
    let key = (type === 'fav') ? 'myFavs' : 'myLikes';
    const idx = list.indexOf(id);
    idx > -1 ? list.splice(idx, 1) : list.push(id);
    localStorage.setItem(key, JSON.stringify(list));
    renderAll();
}
// ================ تحسينات للهاتف ================
function enhanceMobileMenu() {
    if (window.innerWidth <= 768) {
        // إضافة خاصية اللمس للقوائم
        document.querySelectorAll('.card-menu-btn').forEach(btn => {
            btn.addEventListener('touchstart', function(e) {
                e.stopPropagation();
            });
        });
        
        // إغلاق القوائم عند النقر خارجها
        document.addEventListener('touchstart', function(e) {
            if (!e.target.closest('.card-menu-btn') && !e.target.closest('.card-menu-dropdown')) {
                document.querySelectorAll('.card-menu-dropdown.show').forEach(menu => {
                    menu.classList.remove('show');
                });
            }
        });
    }
}
// ================ نظام القائمة الجانبية المنبثقة للهاتف ================
function initMobileSidebar() {
    if (window.innerWidth <= 768) {
        // إنشاء العناصر إذا لم تكن موجودة
        if (!document.getElementById('sidebarMenuBtn')) {
            // زر فتح القائمة
            const menuBtn = document.createElement('button');
            menuBtn.id = 'sidebarMenuBtn';
            menuBtn.innerHTML = '☰';
            menuBtn.setAttribute('aria-label', 'القائمة الرئيسية');
            document.body.appendChild(menuBtn);
            
            // خلفية معتمة
            const overlay = document.createElement('div');
            overlay.id = 'sidebarOverlay';
            document.body.appendChild(overlay);
            
            // القائمة المنبثقة
            const sidebarMenu = document.createElement('div');
            sidebarMenu.id = 'mobileSidebarMenu';
            
            // زر إغلاق
            const closeBtn = document.createElement('div');
            closeBtn.id = 'closeSidebarMenu';
            closeBtn.innerHTML = '✕';
            sidebarMenu.appendChild(closeBtn);
            
            // عنوان القسم الأول - الملف الشخصي
            const profileTitle = document.createElement('h3');
            profileTitle.className = 'text-center text-pink-500 font-bold text-lg mb-3 mt-2';
            profileTitle.innerText = 'ملفي الشخصي';
            sidebarMenu.appendChild(profileTitle);
            
            // نسخ الملف الشخصي من القائمة الجانبية الأصلية
            const originalSidebar = document.querySelector('aside.w-full.lg\\:w-64');
            if (originalSidebar) {
                const profileCard = originalSidebar.querySelector('.profile-card');
                if (profileCard) {
                    const clonedProfile = profileCard.cloneNode(true);
                    clonedProfile.style.margin = '0 0 20px 0';
                    clonedProfile.style.background = 'linear-gradient(135deg, #be185d, #6d28d9)';
                    sidebarMenu.appendChild(clonedProfile);
                }
            }
            
            // عنوان القسم الثاني - تصفح المحتوى
            const browseTitle = document.createElement('h3');
            browseTitle.className = 'text-center text-pink-500 font-bold text-lg mb-3 mt-4';
            browseTitle.innerText = 'تصفح المحتوى';
            sidebarMenu.appendChild(browseTitle);
            
            // زر تبديل الأقسام الرئيسية
            const dbSwitchContainer = document.createElement('div');
            dbSwitchContainer.className = 'mb-4';
            
            // الحصول على النص الحالي للقسم النشط
            const activeSection = document.getElementById('activeName')?.innerText || 'قسم الزواج';
            
            dbSwitchContainer.innerHTML = `
                <div class="db-switch-btn-mobile" style="background: linear-gradient(135deg, #917ee6, #6d28d9); color: white; padding: 15px; border-radius: 50px; display: flex; justify-content: space-between; align-items: center; font-weight: bold; cursor: pointer; margin-bottom: 10px; border: 2px solid rgba(255,255,255,0.2);">
                    <span style="font-size: 16px;">${activeSection}</span>
                    <span style="background: rgba(255,255,255,0.2); width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center;">▼</span>
                </div>
                <div class="db-dropdown-mobile" style="display: none; background: #1f1f1f; border: 2px solid #be185d; border-radius: 20px; overflow: hidden; margin-bottom: 15px;">
                    <div class="section-option" data-section="zaj" style="padding: 15px 20px; border-bottom: 1px solid #333; cursor: pointer; color: white; font-size: 15px; transition: all 0.2s;">مستقيم ⚤</div>
                    <div class="section-option" data-section="nesa" style="padding: 15px 20px; border-bottom: 1px solid #333; cursor: pointer; color: white; font-size: 15px;">سحاقيات ⚢</div>
                    <div class="section-option" data-section="haywan" style="padding: 15px 20px; border-bottom: 1px solid #333; cursor: pointer; color: white; font-size: 15px;">متحولين جنسياً ⚧</div>
                    <div class="section-option" data-section="life" style="padding: 15px 20px; cursor: pointer; color: white; font-size: 15px;">وضعيات جنسية</div>
                </div>
            `;
            sidebarMenu.appendChild(dbSwitchContainer);
            
            // الأقسام الرئيسية (فيديوهات، صور ثابتة، صور متحركة)
            const menuContainer = document.createElement('div');
            menuContainer.id = 'mobileMenuBox';
            menuContainer.style.display = 'flex';
            menuContainer.style.flexDirection = 'row';
            menuContainer.style.flexWrap = 'wrap';
            menuContainer.style.gap = '8px';
            menuContainer.style.marginTop = '10px';
            
            // الحصول على الأقسام الحالية
            const currentSource = currentSourceKey || 'zaj';
            
            let menuItems = [];
            if (currentSource === 'life') {
                menuItems = [
                    { name: 'كل المحتوى', type: 'all', cat: 'all content', icon: 'https://b.top4top.io/p_3690o1nhv1.png' }
                ];
            } else {
                menuItems = [
                    { name: 'الفيديوهات', type: 'video', cat: 'all content', icon: 'https://b.top4top.io/p_3690o1nhv1.png' },
                    { name: 'صور ثابتة', type: 'image', cat: 'ثابتة', icon: 'https://h.top4top.io/p_3690et83z1.png' },
                    { name: 'صور متحركة', type: 'image', cat: 'متحركة', icon: 'https://l.top4top.io/p_36909qyxa1.png' }
                ];
            }
            
            menuItems.forEach(item => {
                const isActive = (currentSource === 'life' && item.type === 'all') || 
                                (currentType === item.type && currentCat === item.cat);
                
                const menuItem = document.createElement('div');
                menuItem.className = 'mobile-menu-item';
                menuItem.style.flex = '1 1 auto';
                menuItem.style.minWidth = 'calc(33.33% - 8px)';
                menuItem.style.background = isActive ? 'linear-gradient(135deg, #be185d, #6d28d9)' : 'rgba(39, 39, 42, 0.8)';
                menuItem.style.padding = '12px 5px';
                menuItem.style.borderRadius = '30px';
                menuItem.style.display = 'flex';
                menuItem.style.flexDirection = 'column';
                menuItem.style.alignItems = 'center';
                menuItem.style.gap = '5px';
                menuItem.style.cursor = 'pointer';
                menuItem.style.border = '1px solid rgba(255,255,255,0.1)';
                menuItem.style.transition = 'all 0.3s ease';
                menuItem.setAttribute('data-type', item.type);
                menuItem.setAttribute('data-cat', item.cat);
                
                menuItem.innerHTML = `
                    <img src="${item.icon}" style="width: 24px; height: 24px; object-fit: contain;">
                    <span style="font-size: 11px; font-weight: 600; color: white; text-align: center;">${item.name}</span>
                `;
                
                menuItem.addEventListener('click', function() {
                    if (currentSource === 'life' && item.type === 'all') {
                        currentType = 'all';
                        currentCat = 'all content';
                    } else {
                        currentType = item.type;
                        currentCat = item.cat;
                    }
                    activeParent = null;
                    profileMode = null;
                    currentPage = 1;
                    saveState();
                    
                    // تحديث واجهة المستخدم
                    if (typeof renderMenu === 'function') renderMenu();
                    if (typeof renderAll === 'function') renderAll();
                    
                    // إغلاق القائمة
                    sidebarMenu.classList.remove('show');
                    overlay.classList.remove('show');
                    
                    // تحديث النشاط في القائمة المنبثقة
                    updateMobileMenuActiveState();
                });
                
                menuContainer.appendChild(menuItem);
            });
            
            sidebarMenu.appendChild(menuContainer);
            
            // إضافة إحصائيات سريعة
            const statsPreview = document.createElement('div');
            statsPreview.style.display = 'flex';
            statsPreview.style.justifyContent = 'space-around';
            statsPreview.style.marginTop = '20px';
            statsPreview.style.padding = '15px 10px';
            statsPreview.style.background = 'rgba(0,0,0,0.3)';
            statsPreview.style.borderRadius = '50px';
            
            // الحصول على الإحصائيات
            const videosCount = dummyData?.filter(item => item.type === 'video').length || 0;
            const imagesCount = dummyData?.filter(item => item.type === 'image').length || 0;
            const articlesCount = dummyData?.filter(item => item.type === 'article').length || 0;
            
            statsPreview.innerHTML = `
                <div style="text-align: center;">
                    <div style="font-size: 18px; font-weight: bold; color: #be185d;">${videosCount}</div>
                    <div style="font-size: 10px; color: #999;">فيديو</div>
                </div>
                <div style="text-align: center;">
                    <div style="font-size: 18px; font-weight: bold; color: #be185d;">${imagesCount}</div>
                    <div style="font-size: 10px; color: #999;">صورة</div>
                </div>
                <div style="text-align: center;">
                    <div style="font-size: 18px; font-weight: bold; color: #be185d;">${articlesCount}</div>
                    <div style="font-size: 10px; color: #999;">مقال</div>
                </div>
            `;
            
            sidebarMenu.appendChild(statsPreview);
            
            document.body.appendChild(sidebarMenu);
            
            // إضافة الأحداث
            menuBtn.addEventListener('click', function() {
                sidebarMenu.classList.add('show');
                overlay.classList.add('show');
                updateMobileMenuContent();
            });
            
            closeBtn.addEventListener('click', function() {
                sidebarMenu.classList.remove('show');
                overlay.classList.remove('show');
            });
            
            overlay.addEventListener('click', function() {
                sidebarMenu.classList.remove('show');
                overlay.classList.remove('show');
            });
            
            // أحداث تبديل الأقسام الرئيسية
            const dbSwitch = document.querySelector('.db-switch-btn-mobile');
            const dbDropdown = document.querySelector('.db-dropdown-mobile');
            
            if (dbSwitch) {
                dbSwitch.addEventListener('click', function() {
                    dbDropdown.style.display = dbDropdown.style.display === 'block' ? 'none' : 'block';
                });
            }
            
            // أحداث اختيار القسم
            document.querySelectorAll('.section-option').forEach(option => {
                option.addEventListener('click', function() {
                    const section = this.dataset.section;
                    const sectionNames = {
                        zaj: 'مستقيم ⚤',
                        nesa: 'سحاقيات ⚢',
                        haywan: 'متحولين جنسياً ⚧',
                        life: 'وضعيات جنسية'
                    };
                    
                    // تحديث النص في الزر
                    document.querySelector('.db-switch-btn-mobile span:first-child').innerHTML = sectionNames[section];
                    
                    // إخفاء القائمة المنسدلة
                    dbDropdown.style.display = 'none';
                    
                    // تبديل المصدر
                    if (typeof switchSource === 'function') {
                        switchSource(section, sectionNames[section]);
                    }
                    
                    // تحديث محتوى القائمة المنبثقة
                    setTimeout(updateMobileMenuContent, 300);
                    
                    // إغلاق القائمة المنبثقة بعد التبديل
                    setTimeout(() => {
                        sidebarMenu.classList.remove('show');
                        overlay.classList.remove('show');
                    }, 500);
                });
            });
            
            // ربط أحداث الملف الشخصي
            setTimeout(() => {
                const favBtn = document.querySelector('#mobileSidebarMenu #btnFav');
                const likeBtn = document.querySelector('#mobileSidebarMenu #btnLike');
                const watchLaterBtn = document.querySelector('#mobileSidebarMenu #btnWatchLater');
                
                if (favBtn) {
                    favBtn.onclick = function(e) {
                        e.stopPropagation();
                        toggleProfileMode('fav');
                        updateMobileSidebarButtons();
                        // إغلاق القائمة بعد التحديد
                        setTimeout(() => {
                            sidebarMenu.classList.remove('show');
                            overlay.classList.remove('show');
                        }, 300);
                    };
                }
                
                if (likeBtn) {
                    likeBtn.onclick = function(e) {
                        e.stopPropagation();
                        toggleProfileMode('like');
                        updateMobileSidebarButtons();
                        setTimeout(() => {
                            sidebarMenu.classList.remove('show');
                            overlay.classList.remove('show');
                        }, 300);
                    };
                }
                
                if (watchLaterBtn) {
                    watchLaterBtn.onclick = function(e) {
                        e.stopPropagation();
                        toggleProfileMode('watchlater');
                        updateMobileSidebarButtons();
                        setTimeout(() => {
                            sidebarMenu.classList.remove('show');
                            overlay.classList.remove('show');
                        }, 300);
                    };
                }
            }, 100);
        }
    } else {
        // إزالة العناصر في الشاشات الكبيرة
        const elements = ['sidebarMenuBtn', 'mobileSidebarMenu', 'sidebarOverlay'];
        elements.forEach(id => {
            const el = document.getElementById(id);
            if (el) el.remove();
        });
    }
}

// تحديث محتوى القائمة المنبثقة
function updateMobileMenuContent() {
    // تحديث النص في زر تبديل الأقسام
    const activeSection = document.getElementById('activeName')?.innerText || 'قسم الزواج';
    const switchBtnSpan = document.querySelector('.db-switch-btn-mobile span:first-child');
    if (switchBtnSpan) switchBtnSpan.innerHTML = activeSection;
    
    // تحديث حالة الأزرار في الملف الشخصي
    updateMobileSidebarButtons();
    
    // تحديث الإحصائيات
    const statsPreview = document.querySelector('#mobileSidebarMenu > div:last-child');
    if (statsPreview) {
        const videosCount = dummyData?.filter(item => item.type === 'video').length || 0;
        const imagesCount = dummyData?.filter(item => item.type === 'image').length || 0;
        const articlesCount = dummyData?.filter(item => item.type === 'article').length || 0;
        
        statsPreview.innerHTML = `
            <div style="text-align: center;">
                <div style="font-size: 18px; font-weight: bold; color: #be185d;">${videosCount}</div>
                <div style="font-size: 10px; color: #999;">فيديو</div>
            </div>
            <div style="text-align: center;">
                <div style="font-size: 18px; font-weight: bold; color: #be185d;">${imagesCount}</div>
                <div style="font-size: 10px; color: #999;">صورة</div>
            </div>
            <div style="text-align: center;">
                <div style="font-size: 18px; font-weight: bold; color: #be185d;">${articlesCount}</div>
                <div style="font-size: 10px; color: #999;">مقال</div>
            </div>
        `;
    }
}

// تحديث حالة الأزرار في القائمة المنبثقة
function updateMobileSidebarButtons() {
    const favBtn = document.querySelector('#mobileSidebarMenu #btnFav');
    const likeBtn = document.querySelector('#mobileSidebarMenu #btnLike');
    const watchLaterBtn = document.querySelector('#mobileSidebarMenu #btnWatchLater');
    
    if (favBtn) {
        favBtn.style.background = profileMode === 'fav' ? '#be185d' : 'rgba(255,255,255,0.1)';
    }
    if (likeBtn) {
        likeBtn.style.background = profileMode === 'like' ? '#be185d' : 'rgba(255,255,255,0.1)';
    }
    if (watchLaterBtn) {
        watchLaterBtn.style.background = profileMode === 'watchlater' ? '#be185d' : 'rgba(255,255,255,0.1)';
    }
}

// تحديث النشاط في قائمة الأقسام الرئيسية
function updateMobileMenuActiveState() {
    const menuItems = document.querySelectorAll('#mobileMenuBox .mobile-menu-item');
    const currentSource = currentSourceKey;
    
    menuItems.forEach(item => {
        const type = item.dataset.type;
        const cat = item.dataset.cat;
        
        let isActive = false;
        if (currentSource === 'life' && type === 'all') {
            isActive = true;
        } else {
            isActive = (currentType === type && currentCat === cat);
        }
        
        item.style.background = isActive ? 'linear-gradient(135deg, #be185d, #6d28d9)' : 'rgba(39, 39, 42, 0.8)';
    });
}

// استدعاء الدالة عند التحميل وعند تغيير الحجم
window.addEventListener('load', initMobileSidebar);
window.addEventListener('resize', initMobileSidebar);

// تحديث القائمة كلما تغير المحتوى
const originalRenderAllFunc = renderAll;
renderAll = function() {
    originalRenderAllFunc();
    if (window.innerWidth <= 768) {
        setTimeout(updateMobileMenuContent, 200);
    }
};
// ================ تحديث القائمة المنبثقة بمحتوى الأقسام والمحفوظات ================
function updateMainMenuPopup() {
    const popupMenus = document.querySelectorAll('.card-menu-dropdown');
    
    popupMenus.forEach(menu => {
        // تنظيف المحتوى القديم
        menu.innerHTML = '';
        
        // زر إغلاق
        const closeBtn = document.createElement('div');
        closeBtn.className = 'close-menu';
        closeBtn.innerHTML = '✕';
        closeBtn.onclick = function(e) {
            e.stopPropagation();
            menu.classList.remove('show');
        };
        menu.appendChild(closeBtn);
        
        // قسم المحفوظات
        const savedSection = document.createElement('div');
        savedSection.className = 'saved-section';
        savedSection.innerHTML = `
            <div class="saved-title">📁 المحفوظات</div>
            <div class="saved-buttons">
                <div class="saved-row">
                    <div class="saved-btn ${profileMode === 'fav' ? 'active' : ''}" onclick="toggleProfileMode('fav'); this.closest('.card-menu-dropdown').classList.remove('show');">❤️ المفضل</div>
                    <div class="saved-btn ${profileMode === 'like' ? 'active' : ''}" onclick="toggleProfileMode('like'); this.closest('.card-menu-dropdown').classList.remove('show');">👍 الإعجاب</div>
                </div>
                <div class="saved-row">
                    <div class="saved-btn ${profileMode === 'watchlater' ? 'active' : ''}" onclick="toggleProfileMode('watchlater'); this.closest('.card-menu-dropdown').classList.remove('show');">⏱️ المشاهدة لاحقاً</div>
                </div>
            </div>
            <div class="saved-stats">
                <span>📹 ${dummyData?.filter(item => item.type === 'video').length || 0}</span>
                <span>🖼️ ${dummyData?.filter(item => item.type === 'image').length || 0}</span>
                <span>📄 ${dummyData?.filter(item => item.type === 'article').length || 0}</span>
            </div>
        `;
        menu.appendChild(savedSection);
        
        // عنوان الأقسام
        const sectionsTitle = document.createElement('div');
        sectionsTitle.className = 'sections-title';
        sectionsTitle.innerText = '📋 الأقسام';
        menu.appendChild(sectionsTitle);
        
        // زر تبديل الأقسام الرئيسية
        const activeSection = document.getElementById('activeName')?.innerText || 'قسم الزواج';
        const dbSwitch = document.createElement('div');
        dbSwitch.className = 'db-switch-mobile';
        dbSwitch.innerHTML = `<span>${activeSection}</span> <span>▼</span>`;
        
        const dbDropdown = document.createElement('div');
        dbDropdown.className = 'db-dropdown-mobile';
        dbDropdown.innerHTML = `
            <div class="db-option" data-section="zaj">مستقيم ⚤</div>
            <div class="db-option" data-section="nesa">سحاقيات ⚢</div>
            <div class="db-option" data-section="haywan">متحولين جنسياً ⚧</div>
            <div class="db-option" data-section="life">وضعيات جنسية</div>
        `;
        
        dbSwitch.onclick = () => {
            dbDropdown.classList.toggle('show');
        };
        
        dbDropdown.querySelectorAll('.db-option').forEach(opt => {
            opt.onclick = function() {
                const section = this.dataset.section;
                const names = {
                    zaj: 'مستقيم ⚤',
                    nesa: 'سحاقيات ⚢',
                    haywan: 'متحولين جنسياً ⚧',
                    life: 'وضعيات جنسية'
                };
                dbSwitch.querySelector('span:first-child').innerText = names[section];
                dbDropdown.classList.remove('show');
                if (typeof switchSource === 'function') {
                    switchSource(section, names[section]);
                }
                menu.classList.remove('show');
            };
        });
        
        menu.appendChild(dbSwitch);
        menu.appendChild(dbDropdown);
        
        // الأقسام الرئيسية
        const mainSections = document.createElement('div');
        mainSections.className = 'main-sections';
        
        const currentSource = currentSourceKey || 'zaj';
        let sections = [];
        
        if (currentSource === 'life') {
            sections = [
                { name: 'كل المحتوى', type: 'all', cat: 'all content', icon: 'https://b.top4top.io/p_3690o1nhv1.png' }
            ];
        } else {
            sections = [
                { name: 'فيديوهات', type: 'video', cat: 'all content', icon: 'https://b.top4top.io/p_3690o1nhv1.png' },
                { name: 'صور ثابتة', type: 'image', cat: 'ثابتة', icon: 'https://h.top4top.io/p_3690et83z1.png' },
                { name: 'صور متحركة', type: 'image', cat: 'متحركة', icon: 'https://l.top4top.io/p_36909qyxa1.png' }
            ];
        }
        
        sections.forEach(section => {
            const isActive = (currentSource === 'life' && section.type === 'all') || 
                            (currentType === section.type && currentCat === section.cat);
            
            const sectionItem = document.createElement('div');
            sectionItem.className = 'section-item';
            sectionItem.style.background = isActive ? 'linear-gradient(135deg, #be185d, #6d28d9)' : '';
            sectionItem.innerHTML = `
                <img src="${section.icon}">
                <span>${section.name}</span>
            `;
            
            sectionItem.onclick = function() {
                if (currentSource === 'life' && section.type === 'all') {
                    currentType = 'all';
                    currentCat = 'all content';
                } else {
                    currentType = section.type;
                    currentCat = section.cat;
                }
                activeParent = null;
                profileMode = null;
                currentPage = 1;
                saveState();
                renderMenu();
                renderAll();
                menu.classList.remove('show');
            };
            
            mainSections.appendChild(sectionItem);
        });
        
        menu.appendChild(mainSections);
        
        // إحصائيات سريعة
        const quickStats = document.createElement('div');
        quickStats.className = 'quick-stats';
        quickStats.innerHTML = `
            <div>
                <div class="number">${dummyData?.filter(item => item.type === 'video').length || 0}</div>
                <div class="label">فيديو</div>
            </div>
            <div>
                <div class="number">${dummyData?.filter(item => item.type === 'image').length || 0}</div>
                <div class="label">صورة</div>
            </div>
            <div>
                <div class="number">${dummyData?.filter(item => item.type === 'article').length || 0}</div>
                <div class="label">مقال</div>
            </div>
        `;
        menu.appendChild(quickStats);
    });
}

// تعديل دالة createCard لإضافة القائمة المحدثة
const originalCreateCard = createCard;
createCard = function(p) {
    let html = originalCreateCard(p);
    
    // تحديث القوائم بعد إنشاء البطاقات
    setTimeout(() => {
        if (window.innerWidth <= 768) {
            updateMainMenuPopup();
        }
    }, 100);
    
    return html;
};
// ===== إصلاح قائمة الثلاث نقاط للهواتف - إزالة الشاشة السوداء =====
(function fixMobileMenuFinal() {
    // استبدال دالة toggleCardMenu
    window.toggleCardMenu = function(event, itemId) {
        event.stopPropagation();
        event.preventDefault();
        
        // إغلاق جميع القوائم المفتوحة
        document.querySelectorAll('.card-menu-dropdown').forEach(menu => {
            if (menu.id !== `menu-${itemId}`) {
                menu.classList.remove('show');
            }
        });
        
        // إزالة أي خلفية معتمة موجودة
        const existingOverlay = document.querySelector('.menu-overlay');
        if (existingOverlay) existingOverlay.remove();
        
        const menu = document.getElementById(`menu-${itemId}`);
        if (!menu) return;
        
        // إذا كانت القائمة مفتوحة، أغلقها
        if (menu.classList.contains('show')) {
            menu.classList.remove('show');
            return;
        }
        
        // الحصول على العنصر الحالي
        const item = dummyData.find(i => i.id == itemId);
        if (!item) return;
        
        // إعادة بناء محتوى القائمة
        menu.innerHTML = '';
        
        // زر المفضلة
        const favDiv = document.createElement('div');
        favDiv.className = `card-menu-item ${favorites.includes(itemId) ? 'active' : ''}`;
        favDiv.innerHTML = `
            <span>❤️</span>
            <span>${favorites.includes(itemId) ? 'إزالة من المفضلة' : 'إضافة للمفضلة'}</span>
        `;
        favDiv.onclick = function(e) {
            e.stopPropagation();
            const idx = favorites.indexOf(itemId);
            if (idx > -1) {
                favorites.splice(idx, 1);
            } else {
                favorites.push(itemId);
            }
            localStorage.setItem('myFavs', JSON.stringify(favorites));
            
            // تحديث القائمة
            menu.innerHTML = '';
            
            // إعادة بناء القائمة بعد التحديث
            const newFavDiv = document.createElement('div');
            newFavDiv.className = `card-menu-item ${favorites.includes(itemId) ? 'active' : ''}`;
            newFavDiv.innerHTML = `
                <span>❤️</span>
                <span>${favorites.includes(itemId) ? 'إزالة من المفضلة' : 'إضافة للمفضلة'}</span>
            `;
            newFavDiv.onclick = arguments.callee;
            
            const newWatchDiv = document.createElement('div');
            newWatchDiv.className = `card-menu-item ${watchLater.includes(itemId) ? 'active' : ''}`;
            newWatchDiv.innerHTML = `
                <span>⏱️</span>
                <span>${watchLater.includes(itemId) ? 'إزالة من المشاهدة لاحقاً' : 'مشاهدة لاحقاً'}</span>
            `;
            newWatchDiv.onclick = function(ev) {
                ev.stopPropagation();
                const wIdx = watchLater.indexOf(itemId);
                if (wIdx > -1) {
                    watchLater.splice(wIdx, 1);
                } else {
                    watchLater.push(itemId);
                }
                localStorage.setItem('myWatchLater', JSON.stringify(watchLater));
                menu.innerHTML = '';
                const ffDiv = document.createElement('div');
                ffDiv.className = `card-menu-item ${favorites.includes(itemId) ? 'active' : ''}`;
                ffDiv.innerHTML = `<span>❤️</span><span>${favorites.includes(itemId) ? 'إزالة من المفضلة' : 'إضافة للمفضلة'}</span>`;
                ffDiv.onclick = newFavDiv.onclick;
                const wwDiv = document.createElement('div');
                wwDiv.className = `card-menu-item ${watchLater.includes(itemId) ? 'active' : ''}`;
                wwDiv.innerHTML = `<span>⏱️</span><span>${watchLater.includes(itemId) ? 'إزالة من المشاهدة لاحقاً' : 'مشاهدة لاحقاً'}</span>`;
                wwDiv.onclick = arguments.callee;
                menu.appendChild(ffDiv);
                menu.appendChild(wwDiv);
                updateStats();
                renderAll();
            };
            
            menu.appendChild(newFavDiv);
            menu.appendChild(newWatchDiv);
            updateStats();
            renderAll();
        };
        
        // زر المشاهدة لاحقاً
        const watchDiv = document.createElement('div');
        watchDiv.className = `card-menu-item ${watchLater.includes(itemId) ? 'active' : ''}`;
        watchDiv.innerHTML = `
            <span>⏱️</span>
            <span>${watchLater.includes(itemId) ? 'إزالة من المشاهدة لاحقاً' : 'مشاهدة لاحقاً'}</span>
        `;
        watchDiv.onclick = function(e) {
            e.stopPropagation();
            const idx = watchLater.indexOf(itemId);
            if (idx > -1) {
                watchLater.splice(idx, 1);
            } else {
                watchLater.push(itemId);
            }
            localStorage.setItem('myWatchLater', JSON.stringify(watchLater));
            
            // تحديث القائمة
            menu.innerHTML = '';
            
            const newFavDiv2 = document.createElement('div');
            newFavDiv2.className = `card-menu-item ${favorites.includes(itemId) ? 'active' : ''}`;
            newFavDiv2.innerHTML = `<span>❤️</span><span>${favorites.includes(itemId) ? 'إزالة من المفضلة' : 'إضافة للمفضلة'}</span>`;
            newFavDiv2.onclick = favDiv.onclick;
            
            const newWatchDiv2 = document.createElement('div');
            newWatchDiv2.className = `card-menu-item ${watchLater.includes(itemId) ? 'active' : ''}`;
            newWatchDiv2.innerHTML = `<span>⏱️</span><span>${watchLater.includes(itemId) ? 'إزالة من المشاهدة لاحقاً' : 'مشاهدة لاحقاً'}</span>`;
            newWatchDiv2.onclick = arguments.callee;
            
            menu.appendChild(newFavDiv2);
            menu.appendChild(newWatchDiv2);
            updateStats();
            renderAll();
        };
        
        menu.appendChild(favDiv);
        menu.appendChild(watchDiv);
        
        // تحديد موقع القائمة بجوار الزر
        const btn = event.currentTarget;
        const rect = btn.getBoundingClientRect();
        
        if (window.innerWidth <= 768) {
            // على الهاتف: تظهر في منتصف الشاشة
            menu.style.position = 'fixed';
            menu.style.top = '50%';
            menu.style.left = '50%';
            menu.style.transform = 'translate(-50%, -50%)';
            menu.style.bottom = 'auto';
            menu.style.right = 'auto';
            menu.style.margin = '0';
        } else {
            // على الكمبيوتر: تظهر بجوار الزر
            menu.style.position = 'absolute';
            menu.style.bottom = '100%';
            menu.style.left = '0';
            menu.style.transform = 'none';
            menu.style.marginBottom = '8px';
        }
        
        // عرض القائمة
        menu.classList.add('show');
        
        // إغلاق القائمة عند النقر خارجها
        const closeMenu = function(e) {
            if (!menu.contains(e.target) && !e.target.closest('.card-menu-btn')) {
                menu.classList.remove('show');
                document.removeEventListener('click', closeMenu);
                document.removeEventListener('touchstart', closeMenu);
            }
        };
        
        setTimeout(() => {
            document.addEventListener('click', closeMenu);
            document.addEventListener('touchstart', closeMenu);
        }, 100);
    };
    
    console.log('✅ تم إصلاح قائمة الثلاث نقاط - بدون شاشة سوداء');
})();
// تحديث القوائم كلما تغير المحتوى
const originalRenderAll2 = renderAll;
renderAll = function() {
    originalRenderAll2();
    if (window.innerWidth <= 768) {
        setTimeout(updateMainMenuPopup, 200);
    }
};
// ================ دوال الإعلانات ================
// ================ دوال الإعلانات ================
function renderSideAds() {
    const container = document.getElementById('sideAdsContainer');
    if (!container) return;
    
    let html = '<div class="text-[10px] uppercase tracking-widest opacity-30 font-bold mb-3 text-center text-gray-400">Sponsored</div>';
    
    // الإعلانات الأربعة الجانبية (مربعة)
    for(let i=0; i<4; i++) {
        let ad = getRandomSidebarAd();
        
        html += `
            <a href="${ad.link}" target="_blank" class="block w-full aspect-square rounded-2xl overflow-hidden border border-zinc-800 hover:border-pink-600 transition-all transform hover:scale-[1.02] shadow-xl mb-3 group relative">
                <div class="w-full h-full bg-black flex items-center justify-center">
                    ${ad.type === 'video' ? `
                        <video class="w-full h-full object-cover" autoplay muted loop playsinline>
                            <source src="${ad.url}" type="video/mp4">
                        </video>
                    ` : `
                        <img src="${ad.url}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="إعلان">
                    `}
                </div>
                <div class="absolute bottom-2 left-2 right-2 text-white text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity text-center bg-black/60 backdrop-blur-sm py-1 rounded-full">
                    اضغط للمزيد
                </div>
            </a>
            <div class="text-center text-[8px] text-pink-500/70 -mt-2 mb-2">📢 إعلان</div>
        `;
    }
    
    // ===== إضافة الإعلان العامودي تحت الإعلانات الأربعة =====
    // قائمة الإعلانات العامودية
    const verticalAdsList = [
        { image: "https://i.postimg.cc/zfSyrPnH/hq720.jpg", link: "https://example1.com", title: "إعلان عامودي 1" },
        { image: "https://b.top4top.io/p_3680ejx641.jpg", link: "https://example2.com", title: "إعلان عامودي 2" },
        { image: "https://l.top4top.io/p_3702uwnur1.png", link: "https://example3.com", title: "إعلان عامودي 3" }
    ];
    const randomVerticalAd = verticalAdsList[Math.floor(Math.random() * verticalAdsList.length)];
    
    // إضافة الإعلان العامودي - بنسبة 9:16 (طولي)
    html += `
        <div class="mt-6 pt-4 border-t border-zinc-800">
            <div class="text-[10px] uppercase tracking-widest opacity-30 font-bold mb-3 text-center text-gray-400">Sponsored</div>
            <div class="vertical-ad-wrapper bg-zinc-900/50 rounded-xl overflow-hidden border border-zinc-800 hover:border-pink-500 transition-all group">
                <a href="${randomVerticalAd.link}" target="_blank" class="block">
                    <div class="relative bg-black" style="aspect-ratio: 9 / 16; width: 100%; display: flex; align-items: center; justify-content: center; overflow: hidden;">
                        <img src="${randomVerticalAd.image}" 
                             style="width: 100%; height: 100%; object-fit: cover; background: black;"
                             alt="${randomVerticalAd.title}"
                             onerror="this.src='${verticalAdsList[0].image}';">
                    </div>
                    <div class="text-center text-[10px] text-gray-500 py-2 border-t border-zinc-800">
                        📢 إعلان عامودي
                    </div>
                </a>
            </div>
        </div>
    `;
    
    container.innerHTML = html;
}
// استدعاء الدالة عند تحميل الصفحة وعند تغيير الحجم
window.addEventListener('load', enhanceMobileMenu);
window.addEventListener('resize', enhanceMobileMenu);

// تصدير الدوال إلى النافذة العمومية
window.toggleLanguage = toggleLanguage;
window.verifyAge = verifyAge;
window.toggleDBList = toggleDBList;
window.switchSource = switchSource;
window.toggleProfileMode = toggleProfileMode;
window.doSearch = doSearch;
window.goToPage = goToPage;
window.playVideo = playVideo;
window.closePlayer = closePlayer;
window.openArticle = openArticle;
window.closeArticle = closeArticle;
window.toggleCardMenu = toggleCardMenu;
window.toggleFavFromMenu = toggleFavFromMenu;
window.toggleWatchLaterFromMenu = toggleWatchLaterFromMenu;
window.toggleFavFromPlayer = toggleFavFromPlayer;
window.toggleLike = toggleLike;
window.toggleDislike = toggleDislike;
window.toggleWatchLater = toggleWatchLater;
window.shareVideo = shareVideo;
window.goToVideos = goToVideos;
window.goToImages = goToImages;
window.goToArticles = goToArticles;
window.goToPopular = goToPopular;
window.showAuthModal = showAuthModal;
window.closeAuthModal = closeAuthModal;
window.handleLogin = handleLogin;
window.handleRegister = handleRegister;
window.verifyCode = verifyCode;
window.resetToRegister = resetToRegister;
window.toggleAuthMode = toggleAuthMode;
window.googleSignIn = googleSignIn;
window.logout = logout;