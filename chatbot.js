// LaunchPad Community AI Chatbot
const LAUNCHPAD_KNOWLEDGE = {
    overview: "LaunchPad Community is a youth-led, impact-driven organization focused on bridging the gap between opportunity and potential for Cameroonian youth. We connect students and young professionals to verified opportunities, provide guidance and mentorship, and create safe spaces for growth.",
    founded: "December 5th, 2025",
    mission: "To ensure that Cameroonian youth do not miss life-changing opportunities by providing timely access, guidance, and a supportive ecosystem for growth.",
    vision: "A Cameroon where every motivated young person has access to information, mentorship, and opportunities needed to compete, grow, and succeed globally.",
    members: "800+ active members",
    contact: {
        email: "LaunchPadCommunity00@gmail.com",
        phone: "+237 690709635",
        whatsapp: "https://chat.whatsapp.com/JjhdS2otBQ1Ke3Bhlaf1tn"
    },
    pillars: ["Timely Access to Opportunities", "Guidance & Follow-Up", "Safe Space to Grow, Network & Collaborate"],
    opportunities: ["Scholarships", "Competitions", "Fellowships", "Internships", "Tech programs", "Events and conferences"],
    roles: ["Members", "Ambassadors", "Opportunity Scouts", "Mentors", "Partners", "Sponsors"]
};

let conversationContext = [];

function getAIResponse(question) {
    const q = question.toLowerCase().trim();
    conversationContext.push(q);
    
    // Keep only last 5 messages for context
    if (conversationContext.length > 5) conversationContext.shift();
    
    // Greetings - varied responses
    if (q.match(/^(hi|hello|hey|greetings|good morning|good afternoon|good evening|sup|yo)/)) {
        const greetings = [
            "Hello! 👋 Welcome to LaunchPad Community! I'm here to help you learn about our programs and opportunities. What would you like to know?",
            "Hey there! 🌟 Great to see you! I can tell you about LaunchPad's mission, how to join, opportunities we share, and much more. What interests you?",
            "Hi! 🚀 I'm the LaunchPad AI assistant. Whether you're curious about scholarships, mentorship, or how to get involved, I'm here to help!"
        ];
        return greetings[Math.floor(Math.random() * greetings.length)];
    }
    
    // Thank you responses
    if (q.match(/thank|thanks|appreciate/)) {
        const thanks = [
            "You're welcome! 😊 Feel free to ask if you have more questions about LaunchPad!",
            "Happy to help! 🌟 Don't hesitate to reach out if you need anything else.",
            "My pleasure! 🚀 We're here to support you on your journey."
        ];
        return thanks[Math.floor(Math.random() * thanks.length)];
    }
    
    // About LaunchPad - dynamic based on question
    if (q.match(/what (is|are)|tell me about|explain|describe|info about/)) {
        if (q.includes("launchpad")) {
            return `Great question! ${LAUNCHPAD_KNOWLEDGE.overview}\n\n📅 Founded: ${LAUNCHPAD_KNOWLEDGE.founded}\n👥 Community Size: ${LAUNCHPAD_KNOWLEDGE.members}\n\nWe're all about making sure talented Cameroonian youth don't miss opportunities due to lack of access or information!`;
        }
    }
    
    // Mission - varied responses
    if (q.match(/mission|purpose|goal|aim/)) {
        return `Our mission is clear and powerful: ${LAUNCHPAD_KNOWLEDGE.mission}\n\nWe believe that talent is everywhere, but access to opportunities is not. That's why we exist! 🎯`;
    }
    
    // Vision
    if (q.match(/vision|future|dream|aspir/)) {
        return `We envision: ${LAUNCHPAD_KNOWLEDGE.vision}\n\nEvery young person deserves a fair shot at success, regardless of their background! 🌍✨`;
    }
    
    // How to join - context-aware
    if (q.match(/join|become member|sign up|register|enroll|participate/)) {
        if (q.includes("how") || q.includes("can i") || q.includes("want to")) {
            return `Awesome! Here's how you can join LaunchPad Community:\n\n1️⃣ Join our WhatsApp Community: ${LAUNCHPAD_KNOWLEDGE.contact.whatsapp}\n\n2️⃣ Want to be more involved? Apply to become:\n   • An Ambassador (promote LaunchPad)\n   • An Opportunity Scout (find opportunities)\n\nBoth applications are available on our website. Which role interests you? 🚀`;
        }
        return `You can join us through our WhatsApp Community: ${LAUNCHPAD_KNOWLEDGE.contact.whatsapp}\n\nIt's free and you'll get instant access to opportunities! 📱`;
    }
    
    // Contact - personalized
    if (q.match(/contact|reach|email|phone|call|message|talk to/)) {
        const contactMethods = [];
        if (q.includes("email")) contactMethods.push(`📧 Email: ${LAUNCHPAD_KNOWLEDGE.contact.email}`);
        if (q.includes("phone") || q.includes("call")) contactMethods.push(`📱 Phone: ${LAUNCHPAD_KNOWLEDGE.contact.phone}`);
        if (q.includes("whatsapp")) contactMethods.push(`💬 WhatsApp: ${LAUNCHPAD_KNOWLEDGE.contact.whatsapp}`);
        
        if (contactMethods.length > 0) {
            return `Here's how to reach us:\n${contactMethods.join("\n")}\n\nWe're always happy to hear from you!`;
        }
        return `You can reach LaunchPad Community through:\n📧 Email: ${LAUNCHPAD_KNOWLEDGE.contact.email}\n📱 Phone: ${LAUNCHPAD_KNOWLEDGE.contact.phone}\n💬 WhatsApp: ${LAUNCHPAD_KNOWLEDGE.contact.whatsapp}\n\nWhich method works best for you?`;
    }
    
    // Opportunities - dynamic
    if (q.match(/opportunit|scholarship|internship|program|competition|fellowship|event/)) {
        const mentioned = [];
        if (q.includes("scholarship")) mentioned.push("scholarships");
        if (q.includes("internship")) mentioned.push("internships");
        if (q.includes("competition")) mentioned.push("competitions");
        if (q.includes("tech") || q.includes("technology")) mentioned.push("tech programs");
        
        if (mentioned.length > 0) {
            return `Yes! We share ${mentioned.join(", ")} and much more! 🎓\n\nAll opportunities are:\n✅ Verified and legitimate\n✅ Shared before deadlines\n✅ Accompanied by application tips\n\nJoin our WhatsApp community to never miss an opportunity: ${LAUNCHPAD_KNOWLEDGE.contact.whatsapp}`;
        }
        return `LaunchPad shares a wide range of verified opportunities:\n\n${LAUNCHPAD_KNOWLEDGE.opportunities.map(o => `• ${o}`).join("\n")}\n\nWe make sure you get them on time with guidance on how to apply! Want to join our community? 🚀`;
    }
    
    // Ambassador - specific
    if (q.match(/ambassador/)) {
        if (q.includes("what") || q.includes("do") || q.includes("role")) {
            return "Ambassadors are the face of LaunchPad! 🎯\n\nThey:\n• Promote LaunchPad in schools and universities\n• Share opportunities with their networks\n• Help grow our community\n• Represent our values\n\nInterested? Apply through the 'Become an Ambassador' form on our website!";
        }
        if (q.includes("how") || q.includes("apply") || q.includes("become")) {
            return "Ready to become an Ambassador? Here's how:\n\n1️⃣ Visit our website\n2️⃣ Click 'Become an Ambassador'\n3️⃣ Fill out the application form\n4️⃣ We'll review and get back to you within 48 hours!\n\nAmbassadors help us reach more youth who need opportunities. Excited to have you! 🌟";
        }
        return "Ambassadors promote LaunchPad and help us reach more youth! Apply on our website to join the team. 🚀";
    }
    
    // Scout - specific
    if (q.match(/scout/)) {
        if (q.includes("what") || q.includes("do") || q.includes("role")) {
            return "Opportunity Scouts are our opportunity hunters! 🔍\n\nThey:\n• Search for new opportunities\n• Verify legitimacy\n• Submit opportunities to the community\n• Help keep our database updated\n\nLove researching opportunities? Apply through our website!";
        }
        if (q.includes("how") || q.includes("apply") || q.includes("become")) {
            return "Want to become an Opportunity Scout? Here's the process:\n\n1️⃣ Go to our website\n2️⃣ Click 'Become a Scout'\n3️⃣ Complete the application\n4️⃣ We'll review your application\n\nScouts play a crucial role in finding opportunities for our community! 🎯";
        }
        return "Opportunity Scouts find and verify opportunities for the community. Apply on our website! 🔍";
    }
    
    // Founder - storytelling
    if (q.match(/founder|who (started|created|made|built)|muluh azinwi/)) {
        return "LaunchPad was founded by Muluh Azinwi Success! 🌟\n\nHis story is inspiring: As a secondary school student, he felt disconnected from global opportunities. After joining Open Dreams Educational NGO, everything changed. In just 6 months, his résumé grew through scholarships, programs, and networks.\n\nThis taught him: 'Talent is everywhere, but access is not.'\n\nThat's why he created LaunchPad - so other youth wouldn't struggle alone! 💪";
    }
    
    // History - narrative
    if (q.match(/history|how.*start|began|origin|story/)) {
        return "LaunchPad has an interesting origin story! 📖\n\nIt started as a small orientation group for International Youth Math Challenge (IYMC) participants. Students needed help understanding applications and deadlines.\n\nThen it merged with an ICSC-focused group, bringing together learners from different backgrounds. As it grew, the need became clear: youth needed continuous access to opportunities and guidance.\n\nFrom that realization, LaunchPad evolved into the structured community it is today, serving 800+ members! 🚀";
    }
    
    // Mentorship
    if (q.match(/mentor|guidance|advice|coach/)) {
        return "Mentorship is one of our core pillars! 🎓\n\nOur mentors include:\n• Software engineers\n• Data scientists\n• Educators\n• Youth advocates\n• Industry experts\n\nThey provide guidance in academics, careers, tech, innovation, and personal growth. Having the right mentor can change everything! Want to connect with our mentors? Join the community! 💡";
    }
    
    // Partner/Sponsor
    if (q.match(/partner|sponsor|collaborate|work with/)) {
        return "We love partnerships! 🤝\n\nWe collaborate with:\n• Educational NGOs\n• Tech communities\n• Youth programs\n• Opportunity platforms\n\nInterested in partnering or sponsoring? Submit an inquiry through the forms on our website. Together, we can empower more youth! 🌍";
    }
    
    // Values
    if (q.match(/value|principle|belief|stand for/)) {
        return "LaunchPad is built on strong values:\n\n🎯 Integrity – Only verified information\n🌍 Inclusivity – Everyone deserves access\n📈 Growth – Continuous learning\n🤝 Collaboration – Community over competition\n💪 Impact – Real outcomes matter\n\nThese values guide everything we do!";
    }
    
    // When/Where
    if (q.match(/when|founded|started|created/)) {
        return `LaunchPad Community was founded on ${LAUNCHPAD_KNOWLEDGE.founded}! 🎉\n\nWe're still young but growing fast with ${LAUNCHPAD_KNOWLEDGE.members} across Cameroon!`;
    }
    
    if (q.match(/where|location|based|country/)) {
        return "LaunchPad is based in Cameroon 🇨🇲 and serves Cameroonian youth nationwide!\n\nWhile we focus on Cameroon, the opportunities we share are often global - scholarships, programs, and competitions from around the world! 🌍";
    }
    
    // Cost/Free
    if (q.match(/cost|price|pay|free|money|fee/)) {
        return "Great question! LaunchPad Community is completely FREE! 🎉\n\nNo membership fees, no hidden costs. We believe access to opportunities should never be limited by money.\n\nJoin our WhatsApp community for free: ${LAUNCHPAD_KNOWLEDGE.contact.whatsapp}";
    }
    
    // Help/Support
    if (q.match(/help|support|assist|guide/)) {
        return "We're here to help! 💪\n\nLaunchPad provides:\n• Timely opportunity alerts\n• Application guidance\n• Mentorship connections\n• A supportive community\n• CV and essay tips\n\nWhat specific help do you need? Feel free to ask!";
    }
    
    // Default - more engaging
    const topics = [
        "what LaunchPad is and our mission",
        "how to join our community",
        "opportunities we share (scholarships, internships, etc.)",
        "becoming an Ambassador or Scout",
        "our mentorship programs",
        "contact information",
        "our founder's story",
        "partnership opportunities"
    ];
    
    return `I'd love to help you learn more about LaunchPad! 🚀\n\nYou can ask me about:\n${topics.map(t => `• ${t}`).join("\n")}\n\nWhat would you like to know?`;
}

// Chatbot UI
function initChatbot() {
    const chatHTML = `
        <div id="chatbot-container" class="chatbot-hidden">
            <div class="chatbot-header">
                <div class="chatbot-title">
                    <span class="fire-text">LaunchPad AI</span>
                    <span class="chatbot-status">Online</span>
                </div>
                <button class="chatbot-close" onclick="toggleChatbot()">✕</button>
            </div>
            <div class="chatbot-messages" id="chatbot-messages">
                <div class="chatbot-message bot-message">
                    <div class="message-content">
                        👋 Hi! I'm the LaunchPad AI assistant. Ask me anything about LaunchPad Community!
                    </div>
                </div>
            </div>
            <div class="chatbot-input-area">
                <input type="text" id="chatbot-input" placeholder="Ask me anything..." />
                <button onclick="sendMessage()">
                    <i class="fas fa-paper-plane"></i>
                </button>
            </div>
        </div>
        <button class="chatbot-toggle" onclick="toggleChatbot()">
            <i class="fas fa-comments"></i>
        </button>
    `;
    
    document.body.insertAdjacentHTML('beforeend', chatHTML);
    
    // Enter key to send
    document.getElementById('chatbot-input').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });
}

function toggleChatbot() {
    const container = document.getElementById('chatbot-container');
    container.classList.toggle('chatbot-hidden');
}

function sendMessage() {
    const input = document.getElementById('chatbot-input');
    const message = input.value.trim();
    
    if (!message) return;
    
    // Add user message
    addMessage(message, 'user');
    input.value = '';
    
    // Get AI response
    setTimeout(() => {
        const response = getAIResponse(message);
        addMessage(response, 'bot');
    }, 500);
}

function addMessage(text, sender) {
    const messagesDiv = document.getElementById('chatbot-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `chatbot-message ${sender}-message`;
    messageDiv.innerHTML = `<div class="message-content">${text}</div>`;
    messagesDiv.appendChild(messageDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

// Initialize on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initChatbot);
} else {
    initChatbot();
}
