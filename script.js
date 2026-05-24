$(function () {
    const categories = [
        {
            name: "Study",
            websites: [
                { name: "Khan Academy", url: "https://www.khanacademy.org", purpose: "Free lessons for school and exam prep.", difficulty: "Beginner", usage: "Daily study and concept revision." },
                { name: "Coursera", url: "https://www.coursera.org", purpose: "University and industry courses.", difficulty: "Intermediate", usage: "Structured learning and certificates." },
                { name: "edX", url: "https://www.edx.org", purpose: "Academic courses from top institutions.", difficulty: "Intermediate", usage: "Deep learning for subjects and skills." },
                { name: "CK-12", url: "https://www.ck12.org", purpose: "Adaptive science and math resources.", difficulty: "Beginner", usage: "Textbook support and practice." },
                { name: "Quizlet", url: "https://quizlet.com", purpose: "Flashcards and memory practice.", difficulty: "Beginner", usage: "Quick revision before tests." },
                { name: "BYJU'S", url: "https://byjus.com", purpose: "Concept explanations and test prep.", difficulty: "Beginner", usage: "Homework help and revision." },
                { name: "NPTEL", url: "https://nptel.ac.in", purpose: "Engineering and science lectures.", difficulty: "Advanced", usage: "College-level subject learning." },
                { name: "OpenStax", url: "https://openstax.org", purpose: "Free open textbooks.", difficulty: "Intermediate", usage: "Reference reading for courses." },
                { name: "Brilliant", url: "https://www.brilliant.org", purpose: "Interactive problem-solving courses.", difficulty: "Intermediate", usage: "Practice logic and STEM thinking." },
                { name: "Saylor Academy", url: "https://www.saylor.org", purpose: "Free self-paced courses.", difficulty: "Beginner", usage: "Independent study on many topics." }
            ]
        },
        {
            name: "Coding",
            websites: [
                { name: "LeetCode", url: "https://leetcode.com", purpose: "Interview-style coding practice.", difficulty: "Intermediate", usage: "Algorithm preparation and mock interviews." },
                { name: "HackerRank", url: "https://www.hackerrank.com", purpose: "Programming challenges and skill tests.", difficulty: "Beginner", usage: "Practice syntax and problem solving." },
                { name: "Codeforces", url: "https://codeforces.com", purpose: "Competitive programming contests.", difficulty: "Advanced", usage: "Contest practice and rating growth." },
                { name: "CodeChef", url: "https://www.codechef.com", purpose: "Competitive programming and contests.", difficulty: "Intermediate", usage: "Long-form problem solving." },
                { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org", purpose: "Interview prep articles and coding examples.", difficulty: "Beginner", usage: "Learn data structures and algorithms." },
                { name: "Exercism", url: "https://exercism.org", purpose: "Language tracks with mentor feedback.", difficulty: "Beginner", usage: "Practice coding in a chosen language." },
                { name: "AtCoder", url: "https://atcoder.jp", purpose: "Japanese programming contests.", difficulty: "Advanced", usage: "Hard algorithm practice." },
                { name: "Project Euler", url: "https://projecteuler.net", purpose: "Math-heavy programming problems.", difficulty: "Advanced", usage: "Logical and mathematical coding challenges." },
                { name: "TopCoder", url: "https://www.topcoder.com", purpose: "Marathon and algorithm competitions.", difficulty: "Advanced", usage: "Serious contest training." },
                { name: "W3Schools", url: "https://www.w3schools.com", purpose: "Web technology tutorials.", difficulty: "Beginner", usage: "Quick reference while building websites." }
            ]
        },
        {
            name: "Productivity",
            websites: [
                { name: "Notion", url: "https://www.notion.so", purpose: "All-in-one notes and planning workspace.", difficulty: "Beginner", usage: "Organize tasks, notes, and projects." },
                { name: "Trello", url: "https://trello.com", purpose: "Kanban task boards.", difficulty: "Beginner", usage: "Track progress visually." },
                { name: "Todoist", url: "https://todoist.com", purpose: "Task and habit management.", difficulty: "Beginner", usage: "Daily to-do lists and reminders." },
                { name: "Google Calendar", url: "https://calendar.google.com", purpose: "Schedule planning and reminders.", difficulty: "Beginner", usage: "Manage classes and deadlines." },
                { name: "Evernote", url: "https://evernote.com", purpose: "Notes and document capture.", difficulty: "Beginner", usage: "Save ideas and research notes." },
                { name: "Microsoft To Do", url: "https://todo.microsoft.com", purpose: "Simple task manager.", difficulty: "Beginner", usage: "Personal task tracking." },
                { name: "Clockify", url: "https://clockify.me", purpose: "Time tracking tool.", difficulty: "Beginner", usage: "Measure study and work time." },
                { name: "Toggl Track", url: "https://toggl.com/track", purpose: "Time tracking for tasks.", difficulty: "Beginner", usage: "Improve focus and planning." },
                { name: "RescueTime", url: "https://www.rescuetime.com", purpose: "Activity tracking and focus analytics.", difficulty: "Intermediate", usage: "Understand how time is spent." },
                { name: "Google Keep", url: "https://keep.google.com", purpose: "Quick notes and reminders.", difficulty: "Beginner", usage: "Capture short ideas fast." }
            ]
        },
        {
            name: "Design",
            websites: [
                { name: "Figma", url: "https://www.figma.com", purpose: "Interface and prototyping design.", difficulty: "Intermediate", usage: "Create UI mockups and teamwork." },
                { name: "Canva", url: "https://www.canva.com", purpose: "Simple graphic design platform.", difficulty: "Beginner", usage: "Posters, social media, and presentations." },
                { name: "Adobe Express", url: "https://www.adobe.com/express", purpose: "Fast content and design creation.", difficulty: "Beginner", usage: "Quick visuals for college projects." },
                { name: "Dribbble", url: "https://dribbble.com", purpose: "Design inspiration gallery.", difficulty: "Beginner", usage: "Explore layout and style ideas." },
                { name: "Behance", url: "https://www.behance.net", purpose: "Portfolio showcase platform.", difficulty: "Beginner", usage: "View professional creative work." },
                { name: "Coolors", url: "https://coolors.co", purpose: "Color palette generator.", difficulty: "Beginner", usage: "Pick colors for interfaces." },
                { name: "Unsplash", url: "https://unsplash.com", purpose: "High-quality free photography.", difficulty: "Beginner", usage: "Find images for design projects." },
                { name: "Freepik", url: "https://www.freepik.com", purpose: "Vectors and design assets.", difficulty: "Beginner", usage: "Use illustrations and templates." },
                { name: "Iconscout", url: "https://iconscout.com", purpose: "Icons and UI assets.", difficulty: "Beginner", usage: "Add icons to products and slides." },
                { name: "Envato Elements", url: "https://elements.envato.com", purpose: "Premium design templates and assets.", difficulty: "Intermediate", usage: "Professional project materials." }
            ]
        },
        {
            name: "Entertainment",
            websites: [
                { name: "YouTube", url: "https://www.youtube.com", purpose: "Video streaming and tutorials.", difficulty: "Beginner", usage: "Entertainment, learning, and discovery." },
                { name: "Netflix", url: "https://www.netflix.com", purpose: "Movies and series streaming.", difficulty: "Beginner", usage: "Watch shows and documentaries." },
                { name: "Spotify", url: "https://www.spotify.com", purpose: "Music and podcasts.", difficulty: "Beginner", usage: "Listen while studying or relaxing." },
                { name: "Disney+", url: "https://www.disneyplus.com", purpose: "Family entertainment streaming.", difficulty: "Beginner", usage: "Movies and animated content." },
                { name: "Prime Video", url: "https://www.primevideo.com", purpose: "Streaming service for films and shows.", difficulty: "Beginner", usage: "Binge watch and discover new content." },
                { name: "Twitch", url: "https://www.twitch.tv", purpose: "Live streaming platform.", difficulty: "Beginner", usage: "Watch gaming and live events." },
                { name: "SoundCloud", url: "https://soundcloud.com", purpose: "Music sharing and discovery.", difficulty: "Beginner", usage: "Find indie music and mixes." },
                { name: "Steam", url: "https://store.steampowered.com", purpose: "Game store and launcher.", difficulty: "Beginner", usage: "Buy and play PC games." },
                { name: "Crunchyroll", url: "https://www.crunchyroll.com", purpose: "Anime streaming.", difficulty: "Beginner", usage: "Watch anime series and movies." },
                { name: "Reddit", url: "https://www.reddit.com", purpose: "Community discussions and memes.", difficulty: "Beginner", usage: "Browse topics and communities." }
            ]
        },
        {
            name: "News",
            websites: [
                { name: "BBC News", url: "https://www.bbc.com/news", purpose: "Global news coverage.", difficulty: "Beginner", usage: "Stay informed about world events." },
                { name: "Reuters", url: "https://www.reuters.com", purpose: "Straightforward breaking news.", difficulty: "Beginner", usage: "Quick factual updates." },
                { name: "The Hindu", url: "https://www.thehindu.com", purpose: "Indian news and analysis.", difficulty: "Beginner", usage: "Read politics, culture, and business." },
                { name: "The New York Times", url: "https://www.nytimes.com", purpose: "In-depth reporting and opinion.", difficulty: "Intermediate", usage: "Deep reading on major events." },
                { name: "Al Jazeera", url: "https://www.aljazeera.com", purpose: "International news perspective.", difficulty: "Intermediate", usage: "Follow global stories." },
                { name: "CNBC", url: "https://www.cnbc.com", purpose: "Business and market news.", difficulty: "Intermediate", usage: "Track finance and economy." },
                { name: "Hindustan Times", url: "https://www.hindustantimes.com", purpose: "Indian news coverage.", difficulty: "Beginner", usage: "Daily headlines and local updates." },
                { name: "India Today", url: "https://www.indiatoday.in", purpose: "News magazine and current affairs.", difficulty: "Beginner", usage: "Read trending national topics." },
                { name: "Associated Press", url: "https://apnews.com", purpose: "Wire service reporting.", difficulty: "Beginner", usage: "Quick neutral news summaries." },
                { name: "The Verge", url: "https://www.theverge.com", purpose: "Tech and culture news.", difficulty: "Beginner", usage: "Follow gadgets and internet trends." }
            ]
        },
        {
            name: "Finance",
            websites: [
                { name: "Investopedia", url: "https://www.investopedia.com", purpose: "Finance explanations and market concepts.", difficulty: "Beginner", usage: "Learn investing terms." },
                { name: "Yahoo Finance", url: "https://finance.yahoo.com", purpose: "Stocks and market tracking.", difficulty: "Beginner", usage: "Monitor prices and company news." },
                { name: "Mint", url: "https://www.livemint.com", purpose: "Business news and finance updates.", difficulty: "Beginner", usage: "Track Indian markets and economy." },
                { name: "Moneycontrol", url: "https://www.moneycontrol.com", purpose: "Stocks, news, and finance tools.", difficulty: "Beginner", usage: "Investment tracking and analysis." },
                { name: "Groww", url: "https://groww.in", purpose: "Investment and mutual fund platform.", difficulty: "Beginner", usage: "Start basic investing." },
                { name: "Zerodha Varsity", url: "https://zerodha.com/varsity", purpose: "Free stock market learning.", difficulty: "Intermediate", usage: "Learn trading and investing basics." },
                { name: "TradingView", url: "https://www.tradingview.com", purpose: "Charting and market analysis.", difficulty: "Intermediate", usage: "Study price trends." },
                { name: "NSE India", url: "https://www.nseindia.com", purpose: "Official stock exchange data.", difficulty: "Intermediate", usage: "Check official market information." },
                { name: "BSE India", url: "https://www.bseindia.com", purpose: "Official exchange website.", difficulty: "Intermediate", usage: "Access market listings and data." },
                { name: "ET Money", url: "https://www.etmoney.com", purpose: "Personal finance and investment tools.", difficulty: "Beginner", usage: "Track savings and investments." }
            ]
        },
        {
            name: "Health",
            websites: [
                { name: "WebMD", url: "https://www.webmd.com", purpose: "Health information and symptom guidance.", difficulty: "Beginner", usage: "Understand common health topics." },
                { name: "Mayo Clinic", url: "https://www.mayoclinic.org", purpose: "Trusted medical information.", difficulty: "Beginner", usage: "Read about conditions and care." },
                { name: "Healthline", url: "https://www.healthline.com", purpose: "Health and wellness articles.", difficulty: "Beginner", usage: "Lifestyle and fitness reading." },
                { name: "Fitbit", url: "https://www.fitbit.com", purpose: "Fitness tracking and wellness.", difficulty: "Beginner", usage: "Monitor activity and health habits." },
                { name: "MyFitnessPal", url: "https://www.myfitnesspal.com", purpose: "Nutrition and calorie tracking.", difficulty: "Beginner", usage: "Log meals and exercise." },
                { name: "NHS", url: "https://www.nhs.uk", purpose: "Public health guidance.", difficulty: "Beginner", usage: "Read reliable health advice." },
                { name: "CDC", url: "https://www.cdc.gov", purpose: "Public health resources.", difficulty: "Intermediate", usage: "Study official health updates." },
                { name: "WHO", url: "https://www.who.int", purpose: "Global health organization resources.", difficulty: "Intermediate", usage: "Follow worldwide health reports." },
                { name: "Sleep Foundation", url: "https://www.sleepfoundation.org", purpose: "Sleep education and tips.", difficulty: "Beginner", usage: "Improve sleep habits." },
                { name: "Headspace", url: "https://www.headspace.com", purpose: "Meditation and mindfulness.", difficulty: "Beginner", usage: "Relax and reduce stress." }
            ]
        },
        {
            name: "Travel",
            websites: [
                { name: "Google Maps", url: "https://maps.google.com", purpose: "Navigation and place discovery.", difficulty: "Beginner", usage: "Plan trips and local travel." },
                { name: "Booking.com", url: "https://www.booking.com", purpose: "Hotels and accommodation booking.", difficulty: "Beginner", usage: "Reserve stays for travel." },
                { name: "Airbnb", url: "https://www.airbnb.com", purpose: "Homestay and rental bookings.", difficulty: "Beginner", usage: "Find unique places to stay." },
                { name: "Tripadvisor", url: "https://www.tripadvisor.com", purpose: "Travel reviews and recommendations.", difficulty: "Beginner", usage: "Compare places and attractions." },
                { name: "Skyscanner", url: "https://www.skyscanner.com", purpose: "Flight search and comparison.", difficulty: "Beginner", usage: "Find affordable flights." },
                { name: "MakeMyTrip", url: "https://www.makemytrip.com", purpose: "Indian travel booking platform.", difficulty: "Beginner", usage: "Book flights, trains, and hotels." },
                { name: "Cleartrip", url: "https://www.cleartrip.com", purpose: "Travel booking and planning.", difficulty: "Beginner", usage: "Compare travel options." },
                { name: "Lonely Planet", url: "https://www.lonelyplanet.com", purpose: "Destination guides.", difficulty: "Beginner", usage: "Research places before traveling." },
                { name: "Rome2Rio", url: "https://www.rome2rio.com", purpose: "Route and transport planning.", difficulty: "Intermediate", usage: "Find how to reach destinations." },
                { name: "Trainman", url: "https://www.trainman.in", purpose: "Train search and booking support.", difficulty: "Beginner", usage: "Plan railway travel in India." }
            ]
        },
        {
            name: "Learning",
            websites: [
                { name: "Wikipedia", url: "https://www.wikipedia.org", purpose: "General knowledge encyclopedia.", difficulty: "Beginner", usage: "Quick topic research." },
                { name: "MIT OpenCourseWare", url: "https://ocw.mit.edu", purpose: "Free university course material.", difficulty: "Advanced", usage: "Study academic subjects deeply." },
                { name: "Harvard Online Learning", url: "https://online-learning.harvard.edu", purpose: "Online academic courses.", difficulty: "Intermediate", usage: "Structured learning from experts." },
                { name: "FutureLearn", url: "https://www.futurelearn.com", purpose: "Online courses and short programs.", difficulty: "Beginner", usage: "Learn new topics at your pace." },
                { name: "OpenLearn", url: "https://www.open.edu/openlearn", purpose: "Free learning resources.", difficulty: "Beginner", usage: "Explore many academic areas." },
                { name: "TED-Ed", url: "https://ed.ted.com", purpose: "Animated educational lessons.", difficulty: "Beginner", usage: "Learn through short videos." },
                { name: "Skillshare", url: "https://www.skillshare.com", purpose: "Creative and practical classes.", difficulty: "Beginner", usage: "Learn design and business skills." },
                { name: "LinkedIn Learning", url: "https://www.linkedin.com/learning", purpose: "Professional skill courses.", difficulty: "Intermediate", usage: "Build career-focused skills." },
                { name: "Duolingo", url: "https://www.duolingo.com", purpose: "Language learning app.", difficulty: "Beginner", usage: "Practice a new language daily." },
                { name: "Open Yale Courses", url: "https://oyc.yale.edu", purpose: "Free Yale lecture courses.", difficulty: "Advanced", usage: "Deep academic study." }
            ]
        }
    ];

    var allWebsites = [];
    categories.forEach(function (category) {
        category.websites.forEach(function (website) {
            allWebsites.push({
                name: website.name,
                url: website.url,
                purpose: website.purpose,
                difficulty: website.difficulty,
                usage: website.usage,
                category: category.name
            });
        });
    });

    var $categoryFilter = $("#category-filter");
    var $categoryGrid = $("#category-grid");
    var $siteA = $("#site-a");
    var $siteB = $("#site-b");
    var $compareResult = $("#compare-result");

    function renderOptions() {
        var categoryOptions = ['<option value="all">All Categories</option>'];
        categories.forEach(function (category) {
            categoryOptions.push('<option value="' + category.name + '">' + category.name + '</option>');
        });
        $categoryFilter.html(categoryOptions.join(''));

        var websiteOptions = [];
        allWebsites.forEach(function (website, index) {
            websiteOptions.push('<option value="' + index + '">' + website.name + ' — ' + website.category + '</option>');
        });
        $siteA.html(websiteOptions.join(''));
        $siteB.html(websiteOptions.join(''));
        $siteB.val('1');
    }

    function websiteCard(website) {
        return `
            <article class="website-card">
                <div class="website-card-top">
                    <span class="category-chip">${website.category}</span>
                    <span class="difficulty-chip">${website.difficulty}</span>
                </div>
                <h3><a href="${website.url}" target="_blank" rel="noopener noreferrer">${website.name}</a></h3>
                <p class="website-purpose">${website.purpose}</p>
                <p><strong>Usage:</strong> ${website.usage}</p>
                <a class="visit-link" href="${website.url}" target="_blank" rel="noopener noreferrer">Visit website</a>
            </article>`;
    }

    function renderDirectory(selectedCategory) {
        var html = '';
        categories.forEach(function (category) {
            if (selectedCategory !== 'all' && category.name !== selectedCategory) {
                return;
            }

            html += `
                <section class="category-block">
                    <div class="category-header">
                        <div>
                            <p class="eyebrow">Category</p>
                            <h3>${category.name}</h3>
                        </div>
                        <span class="count-pill">${category.websites.length} websites</span>
                    </div>
                    <div class="website-grid">
                        ${category.websites.map(function (website) {
                return websiteCard({
                    name: website.name,
                    url: website.url,
                    purpose: website.purpose,
                    difficulty: website.difficulty,
                    usage: website.usage,
                    category: category.name
                });
            }).join('')}
                    </div>
                </section>`;
        });

        $categoryGrid.html(html);
    }

    function renderComparison() {
        var first = allWebsites[Number($siteA.val())];
        var second = allWebsites[Number($siteB.val())];

        if (!first || !second) {
            $compareResult.html('<p>Choose two websites and click compare to view the details.</p>');
            return;
        }

        $compareResult.html(`
            <div class="comparison-grid">
                <article class="compare-card-item">
                    <h3>${first.name}</h3>
                    <p><strong>Category:</strong> ${first.category}</p>
                    <p><strong>Purpose:</strong> ${first.purpose}</p>
                    <p><strong>Difficulty:</strong> ${first.difficulty}</p>
                    <p><strong>Usage:</strong> ${first.usage}</p>
                    <a href="${first.url}" target="_blank" rel="noopener noreferrer">Open website</a>
                </article>
                <article class="compare-card-item">
                    <h3>${second.name}</h3>
                    <p><strong>Category:</strong> ${second.category}</p>
                    <p><strong>Purpose:</strong> ${second.purpose}</p>
                    <p><strong>Difficulty:</strong> ${second.difficulty}</p>
                    <p><strong>Usage:</strong> ${second.usage}</p>
                    <a href="${second.url}" target="_blank" rel="noopener noreferrer">Open website</a>
                </article>
            </div>`);
    }

    renderOptions();
    renderDirectory('all');
    renderComparison();

    $categoryFilter.on('change', function () {
        renderDirectory($(this).val());
    });

    $('#compare-btn').on('click', renderComparison);
    $siteA.on('change', renderComparison);
    $siteB.on('change', renderComparison);
});
