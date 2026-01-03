// Site-wide search index
const searchIndex = [
    // Index page content
    {
        page: 'index.html',
        title: 'Home',
        content: [
            { text: 'Empowering NYC youth to take autonomy over their food and their communities.', type: 'mission' },
            { text: 'The Student Kitchen is an after-school program for New York City students that uses cooking workshops to build healthy habits, grow students\' confidence in the kitchen, and explore new cultures.', type: 'mission' },
            { text: 'Our vision is to empower NYC youth to take autonomy over their food and their communities.', type: 'mission' },
            { text: '200+ students served by the program', type: 'stat' },
            { text: '1000+ samples distributed across school, nonprofit, and community partners', type: 'stat' },
            { text: '50+ cooking workshops conducted', type: 'stat' },
            { text: 'Bring The Student Kitchen to you with our customizable programming.', type: 'programs' },
            { text: 'Being in the cooking club has been an amazing experience for me... I get the opportunity to take part in making cuisines which helps us become more confident in the kitchen and in the process we can also alternate some ingredients which shows how much creativity can be made by the cook (us!).', type: 'testimonial', author: 'Tanea, 12th grade' },
            { text: 'I liked learning how to prepare new dishes, especially with peers and students in my school. Cooking club is great to explore and learn about different cultures and backgrounds. I truly enjoy the club because of the opportunity we get to expand our knowledge.', type: 'testimonial', author: 'Arleen, 11th grade' },
            { text: 'I like the cooking club because I learn things that I wouldn\'t really learn on my own time. One time I made white sauce for halal food and I made it again at home for my family. Also Mr. Averbuch has taught many of us some terminology and how to be safe in the kitchen.', type: 'testimonial', author: 'Dylan, 12th grade' },
            { text: 'Community Stories', type: 'news-title' },
            { text: 'Discover how The Student Kitchen is making a difference in NYC communities.', type: 'news-excerpt' },
            { text: 'Latest Updates', type: 'news-title' },
            { text: 'Stay informed about our latest programs, events, and community impact stories.', type: 'news-excerpt' },
            { text: 'Program Highlights', type: 'news-title' },
            { text: 'Learn about our cooking workshops and the skills students are developing.', type: 'news-excerpt' }
        ]
    },
    
    // Programs page content
    {
        page: 'programs.html',
        title: 'Programs',
        content: [
            { text: 'View our programs below.', type: 'intro' },
            { text: 'Appetizer', type: 'program-title', level: 'Level One' },
            { text: 'This introductory program gives students a glimpse into our programming. It includes kitchen and food safety, food prep, and nutrition. It can be adapted to the needs of your organization and space. Run of show available upon request.', type: 'program-description' },
            { text: 'Food Safety', type: 'tag' },
            { text: 'Protocol', type: 'tag' },
            { text: 'Kitchen Language and Protocol', type: 'skill' },
            { text: 'Seasonal Produce', type: 'skill' },
            { text: 'Kitchen Basics', type: 'skill' },
            { text: 'Younger groups', type: 'audience' },
            { text: 'Virtual-only', type: 'audience' },
            { text: 'Groups with Time/Logistical Constraints', type: 'audience' },
            { text: 'Entree', type: 'program-title', level: 'Level Two' },
            { text: 'In-person programming designed for 1-3 sessions. These are longer workshops (1.5-2 hours), that cover kitchen safety, basic knife and equipment skills, and menu creation. These classes allow students to practice what they learn by following recipes, familiarizing themselves with measurements and protocol, and eating their creations at the end. Run of show available upon request.', type: 'program-description' },
            { text: 'In person programming designed for 1-3 sessions. These are more intensive (1.5 hours or longer), single programs that cover kitchen safety, basic knife and equipment skills, and cooking a dish all together. These are great for one-off events that allow students to practice what they learn by following recipes, familiarizing themselves with measurements and protocol, and eating their creations at the end. Run of show available upon request.', type: 'program-description' },
            { text: 'intensive', type: 'keyword' },
            { text: 'Safety/Kitchen Protocol', type: 'skill' },
            { text: 'Preparing vegetables, eggs, & meat', type: 'skill' },
            { text: 'Baked goods', type: 'skill' },
            { text: 'Community partners', type: 'audience' },
            { text: 'New partnerships', type: 'audience' },
            { text: 'Back to school and parent programming', type: 'audience' },
            { text: '10 Course', type: 'program-title', level: 'Level Three' },
            { text: 'Our comprehensive 10-course program series provides an in-depth culinary education experience. This extended program covers advanced cooking techniques, menu planning, and cultural exploration through food. Students develop mastery-level skills through hands-on practice and collaborative cooking sessions. Run of show available upon request.', type: 'program-description' },
            { text: 'Our comprehensive 10-course program series provides an in-depth culinary education experience designed for extended engagement. This program covers advanced cooking techniques, menu planning, cultural exploration through food, and collaborative cooking sessions. Students develop mastery-level skills through hands-on practice, working with diverse ingredients and cuisines from around the world. The program can be adapted to fit your organization\'s schedule and space requirements. Run of show available upon request.', type: 'program-description' },
            { text: 'Preparing dressing, sides, & grains', type: 'skill' },
            { text: 'Food chemistry & cultural connections', type: 'skill' },
            { text: 'Food customization', type: 'skill' },
            { text: 'School and nonprofit partners', type: 'audience' },
            { text: 'Afterschool clubs', type: 'audience' },
            { text: 'In-class nutrition and cooking workshop series', type: 'audience' },
            { text: 'Skills & Safety Training', type: 'section-title' },
            { text: 'Practice proper knife technique', type: 'skill' },
            { text: 'Learn to use different kitchen utensils and equipment', type: 'skill' },
            { text: 'Gain confidence in cooking for themselves and others for meals in cheaper, healthier ways than eating out', type: 'skill' },
            { text: 'Grow and develop outside of traditional academic spaces, including creativity with flavors, self-confidence, and patience', type: 'skill' },
            { text: 'Kitchen Protocol', type: 'section-title' },
            { text: 'Communicate and act safely in a busy kitchen', type: 'skill' },
            { text: 'Learn ServSafe food handling skills, including handling produce, raw meat and shellfish, cooking to proper internal temperatures, and hygienic practices in serving food', type: 'skill' },
            { text: 'Cultural Exploration', type: 'section-title' },
            { text: 'Explore diverse cuisines and cooking traditions from around the world', type: 'skill' },
            { text: 'Learn about the cultural significance of different ingredients and dishes', type: 'skill' },
            { text: 'Develop appreciation for global food cultures', type: 'skill' }
        ]
    },
    
    // Mission page content
    {
        page: 'mission.html',
        title: 'Our Mission',
        content: [
            { text: 'Empowering youth through hands-on culinary education, building confidence in the kitchen, and fostering healthier communities through accessible food programming.', type: 'mission' },
            { text: 'About Us', type: 'section-title' },
            { text: 'Originally started as an afterschool club in 2023, The Student Kitchen was founded to provide hands-on culinary programming. We started as an afterschool club leading students through recipes and helping expand their culinary knowledge. Since then, The Student Kitchen has grown to provide classes for over 200 students and has served over 1,000 guests, including families, students, and school staff.', type: 'about' },
            { text: 'In June 2025 The Student Kitchen received the Idealist Action Incubator and Communitas America grant to jumpstart this work. We currently run several ongoing workshop series, as well as food demos and catering for community organizations. Our partners include Bushwick Ayuda Mutua (BAM), Collective Focus, Asian Americans for Equity, Flushing International High School, and others.', type: 'about' },
            { text: 'About Ben', type: 'section-title' },
            { text: 'Ben Averbuch began working in Boston Public Schools, and then as a 9th grade history teacher in Brooklyn. During his time teaching, he noticed a stark lack of home economics (Food Consumer Sciences) programs, as well as a lack of nutritional and health education. He developed an afterschool club to work with students and build their confidence in the kitchen. In 2023 he founded the Student Kitchen.', type: 'about' },
            { text: 'For the summer 2025 season, Ben also worked as the Community Food Educator for Randall\'s Island Park Alliance, leading cooking workshops and serving samples at a local food pantry. Ben currently runs cooking programs both through The Student Kitchen as well as partner organizations such as Bronx Eats, Beazer\'s Gardens, and Green Beetz. He also works as an instructor for Culikid, an organization devoted to providing cooking and skills-based workshops to neurodivergent students.', type: 'about' },
            { text: 'Ben Averbuch', type: 'person' },
            { text: 'Boston Public Schools', type: 'organization' },
            { text: 'Brooklyn', type: 'location' },
            { text: 'home economics', type: 'keyword' },
            { text: 'Food Consumer Sciences', type: 'keyword' },
            { text: 'nutritional and health education', type: 'keyword' },
            { text: 'afterschool club', type: 'keyword' },
            { text: '2023', type: 'year' },
            { text: 'Idealist Action Incubator', type: 'organization' },
            { text: 'Communitas America', type: 'organization' },
            { text: 'June 2025', type: 'date' }
        ]
    },
    
    // Community Impact page content
    {
        page: 'community-impact.html',
        title: 'Community Impact',
        content: [
            { text: 'This is a list of our past and ongoing partnerships. If you would like to bring The Student Kitchen to you, do not hesitate to reach out.', type: 'intro' },
            { text: '18 School, community, and nonprofit partners in 2025', type: 'stat' },
            { text: '6 afterschool workshop series in 2025', type: 'stat' },
            { text: 'Over 40 workshops held in 2025', type: 'stat' },
            { text: 'Art for Aid', type: 'partner' },
            { text: 'Through El Puente and NYC Department of Youth and Community Development, The Student Kitchen leads a weekly drop-in cooking class for high school students. Students practice following recipes, learn about seasonal produce, and gain confidence in the kitchen.', type: 'partner-description' },
            { text: 'In-Tech Academy', type: 'partner' },
            { text: 'High School for the Visual Arts', type: 'partner' },
            { text: 'Harriet Tubman Charter School', type: 'partner' },
            { text: 'Plaza Proletaria', type: 'partner' },
            { text: 'Loisada', type: 'partner' },
            { text: 'Asian Americans for Equity (AAFE)', type: 'partner' },
            { text: 'Collective Focus', type: 'partner' },
            { text: 'El Puente EPIC CENTER', type: 'partner' },
            { text: 'Thirdspace', type: 'partner' },
            { text: 'Bushwick Ayuda Mutua', type: 'partner' },
            { text: 'BK Rot', type: 'partner' },
            { text: 'MESA Charter High School', type: 'partner' },
            { text: 'NYC Department of Youth and Community Development', type: 'organization' },
            { text: 'El Puente', type: 'organization' },
            { text: 'weekly drop-in cooking class', type: 'program-type' },
            { text: 'high school students', type: 'audience' },
            { text: 'seasonal produce', type: 'keyword' }
        ]
    },
    
    // Contact page content
    {
        page: 'contact.html',
        title: 'Contact',
        content: [
            { text: 'Please send us an inquiry in regards to programming or about collaborating. We look forward to hearing from you.', type: 'intro' },
            { text: 'Support The Student Kitchen', type: 'section-title' },
            { text: 'We teach students essential cooking skills and provide access to quality ingredients. Your contribution funds resources that empower students to cook affordable and nutritious meals.', type: 'donation-description' },
            { text: 'General Inquiry', type: 'topic' },
            { text: 'Partnership', type: 'topic' },
            { text: 'Volunteer Opportunities', type: 'topic' },
            { text: 'Donation Question', type: 'topic' },
            { text: 'Feedback', type: 'topic' },
            { text: 'programming', type: 'keyword' },
            { text: 'collaborating', type: 'keyword' },
            { text: 'cooking skills', type: 'keyword' },
            { text: 'quality ingredients', type: 'keyword' },
            { text: 'affordable and nutritious meals', type: 'keyword' },
            { text: 'Support The Student Kitchen', type: 'section-title' },
            { text: 'We teach students essential cooking skills and provide access to quality ingredients. Your contribution funds resources that empower students to cook affordable and nutritious meals.', type: 'section-subtitle' },
            { text: 'Donate Now', type: 'button-text' },
            { text: 'donate', type: 'keyword' },
            { text: 'donation', type: 'keyword' },
            { text: 'contribution', type: 'keyword' },
            { text: 'support', type: 'keyword' }
        ]
    }
];

