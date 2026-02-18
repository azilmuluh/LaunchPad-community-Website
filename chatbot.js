// LaunchPad AI Assistant Logic

const communityKnowledge = {
    'mission': 'Our mission is to guide Cameroonian youth into global opportunities through mentorship, resources, and community support.',
    'domains': 'We have 6 specialized domains: IYMC Prep, ICSC Prep, Science & Tech, Health & Medicine, Writing & Arts, and Academics & Scholarships.',
    'ambassadors': 'We have over 115 committed ambassadors representing LaunchPad across universities and regions.',
    'scouts': 'Our 13+ opportunity scouts are dedicated to finding and sharing global scholarships, internships, and competitions.',
    'apply': 'You can apply to be an ambassador or a scout through the "Join Our Mission" section on the homepage.',
    'stats': 'LaunchPad has 1000+ active members and has shared over 5000 opportunities with a 90% success rate.',
    'founder': 'LaunchPad was built by Muluh Azinwi Success.',
    'guidelines': 'Our community rules include admin verification for links, staying on topic, and being polite and patient.'
};

function toggleChat() {
    const container = document.getElementById('chatbotContainer');
    container.classList.toggle('active');
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

function sendMessage() {
    const input = document.getElementById('userInput');
    const messageText = input.value.trim();
    if (!messageText) return;

    // Add user message
    addMessage(messageText, 'user');
    input.value = '';

    // Simple AI Logic / Keyword matching
    setTimeout(() => {
        const response = generateResponse(messageText.toLowerCase());
        addMessage(response, 'bot');
    }, 500);
}

function addMessage(text, side) {
    const messagesContainer = document.getElementById('chatbotMessages');
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('message', side);
    msgDiv.textContent = text;
    messagesContainer.appendChild(msgDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function generateResponse(input) {
    const words = input.split(/\s+/);

    if (words.includes('hello') || words.includes('hi') || words.includes('hey')) {
        return "Hello! How can I help you navigate the LaunchPad community today?";
    }
    if (input.includes('mission') || input.includes('goal') || input.includes('what is launchpad')) {
        return communityKnowledge.mission;
    }
    if (input.includes('domain') || input.includes('group') || input.includes('prep')) {
        return communityKnowledge.domains;
    }
    if (input.includes('ambassador')) {
        return communityKnowledge.ambassadors;
    }
    if (input.includes('scout')) {
        return communityKnowledge.scouts;
    }
    if (input.includes('apply') || input.includes('join') || input.includes('how can i help')) {
        return communityKnowledge.apply;
    }
    if (input.includes('stat') || input.includes('member') || input.includes('how many')) {
        return communityKnowledge.stats;
    }
    if (input.includes('founder') || input.includes('built') || input.includes('creator') || input.includes('who made') || (input.includes('who') && input.includes('this'))) {
        return communityKnowledge.founder;
    }
    if (input.includes('rule') || input.includes('guideline') || input.includes('policy')) {
        return communityKnowledge.guidelines;
    }

    return "I'm not sure I understand that yet. You can ask about our mission, domains, stats, or how to join us!";
}
